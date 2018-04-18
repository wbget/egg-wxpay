'use strict';

const fs = require('fs');
const Payment = require('wechat-pay');
const Notify = require('./app/lib/notify');

module.exports = app => {
  app.beforeStart(async () => {
    app.config.wxpay.pfx = await fs.readFile(app.config.wxpay.pfx);
    app.config.wxpay.ca = await fs.readFile(app.config.wxpay.ca);
    const payment = new Payment(app.config.wxpay);
    const notify = new Notify(app.config.wxpay);
    app.addSingleton('wxpay', {
      payment,
      notify,
    });
  });
};
