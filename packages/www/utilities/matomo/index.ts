import https from 'https';
import querystring from 'querystring';

export const track = (options: string | any) => {
  if (typeof options === 'string') {
    options = {
      url: options
    };
  }

  // Set mandatory options
  options = options || {};
  options.idsite = process.env.MATOMO_ID;
  options.rec = 1;

  const requestUrl = process.env.MATOMO_URL + '?' + querystring.stringify(options);

  const req = https.get(requestUrl);
  req.end();
};
