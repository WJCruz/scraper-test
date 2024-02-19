const bck = require('@autofact/backend-lib-nodejs');

const defaults = {
  resolveWithFullResponse:true,
  jar: true,
  simple: false,
  headers: {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64; rv:57.0) Gecko/20100101 Firefox/57.0',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
  },
  followAllRedirects: true,
};
const httpClientModified = bck.httpClient.defaults(defaults);

module.exports = (requestSettings, acceptCodes = [200]) => new Promise((res, rej) => {
  httpClientModified(requestSettings, (error, response) => {
    if (error) {
      return rej(error);
    }
    if (!acceptCodes.includes(response.statusCode)) {
      console.error(`Error with params: ${JSON.stringify(requestSettings)}, statusCode Bad: ${response.statusCode}`);
      return rej(new Error(`statusCode Bad: ${response.statusCode}`));
    }
    return res(response);
  });
});
