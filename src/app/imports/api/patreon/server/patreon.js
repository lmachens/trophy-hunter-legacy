import { HTTP } from 'meteor/http';
import { Meteor } from 'meteor/meteor';
import React from 'react';
import TrophyHunters from '../../trophy-hunters/trophyHunters';
import { WebApp } from 'meteor/webapp';
import { renderToStaticMarkup } from 'react-dom/server';
import { rewards } from '/imports/api/patreon';

const { id, secret } = Meteor.settings.patreon;
const redirectUri = `${Meteor.absoluteUrl()}patreon/redirect`;
//https://www.patreon.com/oauth2/authorize?response_type=code&client_id=6eb21aac73330bf99b765cab1119e5fc24a215050396e3db71d60eda65faca06&redirect_uri=https://app.th.gl

WebApp.connectHandlers.use('/patreon/redirect', (req, res) => {
  let message;
  try {
    const { code, state } = req.query;

    const tokenData = HTTP.post('https://api.patreon.com/oauth2/token', {
      timeout: 6000,
      headers: {
        Accept: 'application/json'
      },
      params: {
        client_id: id,
        client_secret: secret,
        code: code,
        state,
        grant_type: 'authorization_code',
        redirect_uri: redirectUri
      }
    }).data;

    const userResult = HTTP.get('https://www.patreon.com/api/oauth2/api/current_user', {
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer ${tokenData.access_token}`
      }
    });
    const userContent = JSON.parse(userResult.content);

    let hasReward = false;
    const patreon = rewards.reduce((acc, cur) => {
      acc[cur.name] =
        userContent.included && !!userContent.included.find(include => include.id === cur.id);
      if (acc[cur.name]) {
        hasReward = true;
      }
      return acc;
    }, {});
    if (!hasReward) {
      message = `Patreon is not a Trophy Hunter patron. Please become a patron first.`;
    } else {
      TrophyHunters.update(
        { 'patreon.data.id': userContent.data.id },
        { $unset: { patreon: true, 'items.patreon': true } },
        { multi: true }
      );
      TrophyHunters.update(
        { userId: state },
        { $set: { patreon: userContent, 'items.patreonPurchased': true } }
      );
      Meteor.call(
        'unlockItem',
        'patreon',
        {
          fullName: userContent.data.attributes.full_name,
          ...patreon
        },
        state
      );

      message =
        'Patreon was linked to your Trophy Hunter account. All existing links to this Patreon were removed.';
    }
  } catch (error) {
    message = `Patreon could not be linked to your Trophy Hunter account. Error: ${error.message}`;
  }

  const html = renderToStaticMarkup(
    <html>
      <head>
        <meta charSet="utf-8" />
        <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
      </head>
      <body
        style={{
          padding: 0,
          margin: 0,
          fontFamily: "'Roboto', sans-serif",
          fontSize: 24,
          color: '#000',
          textAlign: 'center',
          background: '#fff'
        }}
      >
        <div style={{ marginTop: 20 }}>{message}</div>
      </body>
    </html>
  );
  res.end(html);
});
