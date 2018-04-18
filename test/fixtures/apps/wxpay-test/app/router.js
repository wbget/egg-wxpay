'use strict';

module.exports = app => {
  const { router, controller } = app;

  router.get('/', controller.home.index);
  router.get('/pay', controller.home.pay);
  router.post('/notify', app.wxpay.notify, controller.home.notify);
};
