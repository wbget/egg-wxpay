'use strict';

const WXPAY = Symbol('Application#WXPAY');
const { Payment } = require('wechat-pay');
const Notify = require('../lib/notify');

module.exports = {
  get wxpay() {
    // this 就是 app 对象，在其中可以调用 app 上的其他方法，或访问属性
    if (!this[WXPAY]) {
      // 实际情况肯定更复杂
      const wxpay = new Payment(this.config.wxpay);
      const notify = Notify(this.config.wxpay);
      wxpay.notify = notify.notify;
      wxpay.refound = notify.refound;
      this[WXPAY] = wxpay;
    }
    return this[WXPAY];
  },
};
