'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    this.ctx.body = 'hi, ' + this.app.plugins.wxpay.name;
  }
  async pay() {
    const order = {
      body: '微信支付',
      out_trade_no: '1231656853215xx124', // 订单号 唯一id
      total_fee: Math.floor(100 * 100), // 微信最小单位是分
      spbill_create_ip: '127.0.0.1', // 请求的ip地址
      openid: '1',
      trade_type: 'JSAPI',
    };
    try {
      const payargs = await this.app.wxpay.getBrandWCPayRequestParams(order);
      this.ctx.body = payargs;
    } catch (error) {
      this.ctx.body = '参数错误';
    }
  }
  async notify() {
    const { out_trade_no } = this.ctx.request.body;// 订单号
    this.ctx.body = out_trade_no;
  }
}

module.exports = HomeController;
