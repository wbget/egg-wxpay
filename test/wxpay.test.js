'use strict';

const mock = require('egg-mock');

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
});
