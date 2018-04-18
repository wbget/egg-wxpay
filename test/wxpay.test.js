'use strict';

const mock = require('egg-mock');
const assert = require('assert');

describe('test/wxpay.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/wxpay-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, wxpay')
      .expect(200);
  });
  it('wechat should init', () => {
    assert(app.config.wxpay.appId === '1');
    assert(app.wxpay !== null);
    assert(typeof app.wxpay.getBrandWCPayRequestParams === 'function');
    // return app.httpRequest()
    //   .get('/pay')
    //   .expect('参数错误')
    //   .expect(200);
  });
  it('notify is right', () => {
    return app.httpRequest()
      .post('/notify')
      .type('application/xml')
      .send('<xml><out_trade_no><![CDATA[1409811653]]></out_trade_no><return_msg><![CDATA[OK]]></return_msg></xml>')
      .expect(200);
  });
});
