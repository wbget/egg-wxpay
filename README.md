# egg-wxpay

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![David deps][david-image]][david-url]
[![Known Vulnerabilities][snyk-image]][snyk-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/egg-wxpay.svg?style=flat-square
[npm-url]: https://npmjs.org/package/egg-wxpay
[travis-image]: https://img.shields.io/travis/wbget/egg-wxpay.svg?style=flat-square
[travis-url]: https://travis-ci.org/wbget/egg-wxpay
[codecov-image]: https://img.shields.io/codecov/c/github/wbget/egg-wxpay.svg?style=flat-square
[codecov-url]: https://codecov.io/github/wbget/egg-wxpay?branch=master
[david-image]: https://img.shields.io/david/wbget/egg-wxpay.svg?style=flat-square
[david-url]: https://david-dm.org/wbget/egg-wxpay
[snyk-image]: https://snyk.io/test/npm/egg-wxpay/badge.svg?style=flat-square
[snyk-url]: https://snyk.io/test/npm/egg-wxpay
[download-image]: https://img.shields.io/npm/dm/egg-wxpay.svg?style=flat-square
[download-url]: https://npmjs.org/package/egg-wxpay

[wechat-pay](https://github.com/supersheep/wechat-pay) for [eggjs](https://eggjs.org) plugin
<!--
Description here.
-->
## Install

```bash
$ npm i egg-wxpay --save
or
$ cnpm i egg-wxpay --save
```

## Usage

```js
// {app_root}/config/plugin.js
exports.wxpay = {
  enable: true,
  package: 'egg-wxpay',
};
```

## Configuration

```js
// {app_root}/config/config.default.js
exports.wxpay = {
    partnerKey: '<partnerkey>',
    appId: '<appid>',
    mchId: '<mchid>',
    notifyUrl: '<notifyurl>', //http://www.notify.com/notify
    ca: '<location-of-your-apiclient-cert.pem>',  // fs.readFileSync(path.join(__dirname, '../config/rootca.pem'))
    pfx: '<location-of-your-apiclient-cert.p12>', // fs.readFileSync(path.join(__dirname, '../config/apiclient_cert.p12')),
};

    
    
```

see [config/config.default.js](config/config.default.js) for more detail.

## Example

<!-- example here -->
```js
//app/controller/wx.js
async pay(){
  // 支付
  const order = {
          body: '微信支付',
          out_trade_no: ulid(),// 订单号 唯一id
          total_fee: Math.floor(total * 100), // 微信最小单位是分
          spbill_create_ip: ip,               // 请求的ip地址
          openid,
          trade_type: 'JSAPI',
        };
  const payargs = await this.app.wxpay.getBrandWCPayRequestParams(order);
  this.ctx.body =  payargs;
}

// 回调
//app/router.js
module.exports = app => {
  const { router, controller } = app;
  ...
  router.post('/notify', app.wxpay.notify, controller.wx.notify);
  ...
}
//app/controller/wx.js
async notify() {
  const { out_trade_no } = this.ctx.request.body;// 订单号
  ...
}
```

## Questions & Suggestions

Please open an issue [here](https://github.com/wbget/egg-wxpay/issues).

## License

[MIT](LICENSE)
