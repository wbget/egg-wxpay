'use strict';

const fs = require('fs');
const Payment = require('wechat-pay');
const notify = require('./app/lib/notify');

module.exports = app => {
  app.beforeStart(async () => {
    app.config.wxpay.pfx = await fs.readFile(app.config.wxpay.pfx);
    const payment = new Payment(app.config.wxpay);
    app.addSingleton('wxpay', {
      payment,
      notify,
    });
  });
};
