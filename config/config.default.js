'use strict';

/**
 * egg-wxpay default config
 * @member Config#wxpay
 * @property {String} SOME_KEY - some description
 */
exports.wxpay = {
  wxpay: {
    appId: '<appid>',
    partnerKey: '<partnerkey>',
    mchId: '<mchid>',
    notifyUrl: '<notifyurl>',
    ca: '<location-of-your-apiclient-cert.pem>',
    pfx: '<location-of-your-apiclient-cert.p12>',
  },
};
