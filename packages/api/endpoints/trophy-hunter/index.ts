import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import mongo from '../../utilities/mongo';

interface GetTrophyHunterProps {
  region: string;
  summonerName: string;
}
export const getTrophyHunter = async ({ region, summonerName }: GetTrophyHunterProps) => {
  const db = await mongo('production');

  const collection = db.collection('TrophyHunters');
  return collection.findOne(
    {
      region: region.toUpperCase(),
      summonerName
    },
    {
      projection: {
        status: 1,
        attributes: 1,
        trees: 1,
        treeTrophyNamesObtained: 1,
        trophiesObtained: 1,
        lastLogin: 1,
        'items.admin': 1,
        'items.avatar': 1,
        'items.patreon.badge': 1,
        'items.twitch': 1,
        'items.youTube': 1,
        rank: 1,
        score: 1,
        s9Rank: 1,
        s9Score: 1,
        playstyle: 1,
        customTree: 1,
        features: 1,
        friends: 1
      }
    }
  );
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { region, summonerName }: any = parse(req.url, true).query;
  if (!region || !summonerName) {
    res.setHeader('Cache-Control', 's-maxage=31536000, max-age=31536000');
    res.writeHead(400);
    return res.end('Invalid query');
  }

  try {
    const trophyHunter = await getTrophyHunter({ region, summonerName });

    res.setHeader('Cache-Control', 's-maxage=120, max-age=120');
    res.end(JSON.stringify(trophyHunter));
  } catch (error) {
    res.setHeader('Cache-Control', 's-maxage=60, max-age=60');
    res.writeHead(400);
    res.end(error.message);
  }
};
