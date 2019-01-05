import GameSessions from '/imports/api/game-sessions/gameSessions';
import { Meteor } from 'meteor/meteor';
import os from 'os';
import riotApi from '/imports/api/riot-api/server/riotApi';
import version from '/imports/api/riot-api/version';
import getRange from '../../api/champions/server/getRange';

const hostname = os.hostname();

export const checkUser = () => {
  const user = Meteor.user();
  if (
    !user ||
    (user._id !== '68yz7FfLwgQJoY3c2' &&
      user._id !== 'ZLqcYvH4oyL2sC7jx' &&
      user.username !== 'EUW.24688273')
  ) {
    throw new Meteor.Error('not-authorized');
  }
};

const replaceHTMLTags = strInputCode => strInputCode.replace(/<\/?[^>]+(>|$)/g, '');

Meteor.methods({
  hostname() {
    return hostname;
  },
  memoryUsage() {
    return process.memoryUsage();
  },
  forceShutdown() {
    this.unblock();
    checkUser();

    console.log('exit');
    process.exit(1);
  },
  reprocessFailed() {
    this.unblock();
    checkUser();
    GameSessions.find({ checkedStatus: 'failed' }, { limit: 100 }).forEach(gameSession => {
      console.log(gameSession._id);
      gameSession.restartJob();
    });
  },
  getStaticData() {
    this.unblock();
    checkUser();

    try {
      const itemsStaticData = riotApi.getItemsStaticData('en_US');
      const itemsData = {};
      Object.entries(itemsStaticData.data).forEach(([id, item]) => {
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
      const summonerSpellsStaticData = riotApi.getSummonerSpellsStaticData('en_US');
      const summonerSpellsData = {};
      Object.values(summonerSpellsStaticData.data).map(item => {
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
      const reforgedRunePathsStaticData = riotApi.getReforgedRunePathsStaticData('en_US');
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

      const newChampions = {};
      const championsStaticData = riotApi.getChampionsStaticData('en_US');
      Object.values(championsStaticData.data)
        .sort((a, b) => {
          if (a.key < b.key) return -1;
          if (a.key > b.key) return 1;
          return 0;
        })
        .forEach(({ id, key, name, title }) => {
          const championStaticData = riotApi.getChampionStaticData('en_US', id).data[id];
          const champion = {
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
        });
      newChampions.version = version;

      return {
        items,
        summonerSpells,
        newChampions,
        runes,
        perks
      };
    } catch (error) {
      console.error(error);
      return error;
    }
  },
  getConnection() {
    this.unblock();
    checkUser();

    return this.connection;
  }
});
