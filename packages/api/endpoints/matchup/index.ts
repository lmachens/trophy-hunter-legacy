import axios from 'axios';
import { IncomingMessage, ServerResponse } from 'http';
import { parse } from 'url';
import mongo from '../../shared/mongo';
import { getMatch } from '../../shared/th-api';

const getGameSessions = async ({ mapId, champ1Id, champ2Id }) => {
  const db = await mongo('production');

  const collection = db.collection('GameSessions');
  return collection
    .find(
      {
        'game.mapId': mapId,
        $or: [
          {
            $and: [
              { 'game.participants': { $elemMatch: { championId: champ1Id, teamId: 100 } } },
              { 'game.participants': { $elemMatch: { championId: champ2Id, teamId: 200 } } }
            ]
          },
          {
            $and: [
              { 'game.participants': { $elemMatch: { championId: champ1Id, teamId: 200 } } },
              { 'game.participants': { $elemMatch: { championId: champ2Id, teamId: 100 } } }
            ]
          }
        ]
      },
      {
        fields: {
          'game.gameId': 1,
          'game.platformId': 1
        }
      }
    )
    .limit(5)
    .toArray();
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  const { champ1Id: champ1IdString, champ2Id: champ2IdString, mapId: mapIdString }: any = parse(
    req.url,
    true
  ).query;
  if (!champ1IdString || !champ2IdString || !mapIdString) {
    res.writeHead(400);
    return res.end('Invalid query');
  }
  const champ1Id = parseInt(champ1IdString);
  const champ2Id = parseInt(champ2IdString);
  const mapId = parseInt(mapIdString);

  try {
    const gameSessions = await getGameSessions({ mapId, champ1Id, champ2Id });
    const matchPromises = gameSessions.map(gameSession =>
      getMatch({
        platformId: gameSession.game.platformId,
        matchId: gameSession.game.gameId
      })
    );
    axios
      .all(matchPromises)
      .then(matches => {
        const result = matches.map(({ gameId, participants }) => {
          let participant1 = participants.find(participant => participant.championId === champ1Id);
          let otherTeam = participant1.teamId === 100 ? 200 : 100;
          let participant2 = participants.find(
            participant => participant.championId === champ2Id && participant.teamId === otherTeam
          );

          if (!participant2) {
            participant1 = participants.find(
              participant => participant.championId === champ1Id && participant.teamId === otherTeam
            );
            otherTeam = participant1.teamId === 100 ? 200 : 100;
            participant2 = participants.find(
              participant => participant.championId === champ2Id && participant.teamId === otherTeam
            );
          }

          return {
            gameId,
            participant1,
            participant2
          };
        });
        // Cache result for one day because data might change
        res.setHeader('Cache-Control', 's-maxage=86400, maxage=0');
        res.end(JSON.stringify(result));
      })
      .catch(error => {
        if (!error.response) {
          console.log(error.message);
          error.response = {
            status: 400,
            statusText: 'Internal error'
          };
        }
        res.writeHead(error.response.status);
        res.end(error.response.statusText);
      });
  } catch (error) {
    res.setHeader('Cache-Control', 's-maxage=60, maxage=0');
    res.writeHead(400);
    res.end(error.message);
  }
};
