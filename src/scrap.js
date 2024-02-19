const rutHelper = require('./helpers/rutHelper.js');
const requestHelper = require('./helpers/requestHelper.js');

class Scrap {
  constructor() {
    this.URL_SERVER = 'https://iam-backend.claveunica.gob.cl/recovery/method-recovery';
    this.URL_SERVER_2 = 'https://zeus.sii.cl/cvc/stc/stc.html';
    this.STATUS_WITH_UNIQUE_KEY = 17;
  }

  async verifyRut(ruts) {
    try {
      ruts = Array.isArray(ruts) ? ruts : [ruts];
      ruts = ruts.map(rut => rutHelper.formatCleaned(rut));

      const uniqueKeysPromises = ruts.map((rut) =>
        requestHelper({
          url: this.URL_SERVER,
          method: 'POST',
          json: true,
          body: {
            numero: parseInt(rut.rut), // necesario para el request
            rut: rut.rutFormatted, // opcional, solo para mostrar en el log de error
          },
        })
      );

      const responses = await Promise.allSettled(uniqueKeysPromises);
      const arrayResponse = [];
      const rutsWithUniqueKeys = [];
      const rutsWithoutUniqueKeys = [];

      for(let i = 0; i < responses.length; i++){
        if (responses[i].status === 'fulfilled') {
          const { code, message } = responses[i].value.body;
          arrayResponse.push({ rut: ruts[i].rutFormatted, res: { code, message } });
          if (parseInt(code) === this.STATUS_WITH_UNIQUE_KEY) {
            rutsWithUniqueKeys.push(ruts[i].rutFormatted);
          } else {
            rutsWithoutUniqueKeys.push(ruts[i].rutFormatted);
          }
        } else {
          arrayResponse.push({ rut: ruts[i].rutFormatted, res: responses[i] });
          rutsWithoutUniqueKeys.push(ruts[i].rutFormatted);
        }
      }
      console.log('ruts with unique keys:', rutsWithUniqueKeys);
      console.log('ruts without unique keys:', rutsWithoutUniqueKeys);
      return {arrayResponse, rutsWithUniqueKeys, rutsWithoutUniqueKeys};
    } catch (error) {
      console.error(error);
    }
  }
}

module.exports = new Scrap();
