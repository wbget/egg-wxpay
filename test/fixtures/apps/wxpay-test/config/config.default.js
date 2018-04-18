'use strict';

exports.keys = '123456';
exports.wxpay = {
  appId: '1',
  partnerKey: '2',
  mchId: '3',
  notifyUrl: '<notifyurl>',
  ca: 'config/1.ca',
  pfx: 'config/1.pem',
};
// 基本上所有的现代浏览器都不允许跨域发起 content-type 为 JSON 的请求，因此我们可以直接放过类型的 JSON 格式的请求。
exports.security = {
  csrf: {
    enable: false,
    ignoreJSON: true, // 默认为 false，当设置为 true 时，将会放过所有 content-type 为 `application/json` 的请求
  },
  // domainWhiteList: [ 'http://wx.wbget.com' ],
};
exports.cors = {
  origin: '*',
  allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH',
};
