import getRange from './getRange';
import getItems from './getItems';
import getSummonerSpells from './getSummonerSpells';
import getReforgedRunePaths from './getReforgedRunePaths';
import getChampions from './getChampions';
import getChampion from './getChampion';

const replaceHTMLTags = strInputCode => strInputCode.replace(/<\/?[^>]+(>|$)/g, '');

const lang = 'en_US';
const getStaticData = async version => {
  try {
    const itemsStaticData = await getItems({ version, lang });
    const itemsData = {};
    Object.entries(itemsStaticData.data).forEach(([id, item]: any) => {
      itemsData[id] = {
        id: parseInt(id),
        name: item.name,
        sanitizedDescription: replaceHTMLTags(item.plaintext),
        tags: item.tags
      };
    });
    const items = {
      data: itemsData,
      type: itemsStaticData.type,
      version: itemsStaticData.version
    };
    const summonerSpellsStaticData = await getSummonerSpells({ version, lang });
    const summonerSpellsData = {};
    Object.values(summonerSpellsStaticData.data).map((item: any) => {
      summonerSpellsData[item.key] = {
        id: parseInt(item.key),
        name: item.name,
        description: replaceHTMLTags(item.description),
        image: item.image,
        key: item.id
      };
    });
    const summonerSpells = {
      data: summonerSpellsData,
      type: summonerSpellsStaticData.type,
      version: summonerSpellsStaticData.version
    };
    const reforgedRunePathsStaticData = await getReforgedRunePaths({ version, lang });
    const runes = {};
    const perks = {};
    reforgedRunePathsStaticData.forEach(runePath => {
      perks[runePath.id.toString()] = {
        name: runePath.name,
        id: runePath.id,
        key: runePath.key,
        icon: runePath.icon
      };
      runePath.slots.forEach(slot => {
        slot.runes.forEach(rune => {
          runes[rune.id.toString()] = {
            id: rune.id,
            key: rune.key,
            icon: rune.icon,
            name: rune.name,
            shortDesc: replaceHTMLTags(rune.shortDesc),
            longDesc: replaceHTMLTags(rune.longDesc)
          };
        });
      });
    });

    const newChampions: any = {};
    const championsStaticData = await getChampions({ version, lang });
    const promises = Object.values(championsStaticData.data)
      .sort((a: any, b: any) => {
        if (a.key < b.key) return -1;
        if (a.key > b.key) return 1;
        return 0;
      })
      .map(({ id, key, name, title }) => {
        return new Promise(async resolve => {
          const championStaticData = (await getChampion({ version, lang, id })).data[id];
          const champion: any = {
            id: parseInt(key),
            key: id,
            name,
            title,
            image: {
              full: championStaticData.image.full
            }
          };
          champion.spells = championStaticData.spells.map(spell => {
            return {
              name: spell.name,
              sanitizedDescription: replaceHTMLTags(spell.description),
              image: {
                full: spell.image.full
              },
              cooldownBurn: spell.cooldownBurn
            };
          });
          champion.passive = {
            image: {
              full: championStaticData.passive.image.full
            },
            name: championStaticData.passive.name,
            sanitizedDescription: replaceHTMLTags(championStaticData.passive.description)
          };
          champion.range = getRange(championStaticData);
          newChampions[key] = champion;
          resolve();
        });
      });
    await Promise.all(promises);
    newChampions.version = version;

    return {
      items,
      summonerSpells,
      champions: newChampions,
      runes,
      perks
    };
  } catch (error) {
    console.error(error);
    return error;
  }
};

export default getStaticData;
