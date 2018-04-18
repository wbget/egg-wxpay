'use strict';

const wxpay = require('wechat-pay').middleware;

const notify = options => {
  try {
    const notify = wxpay(options).getNotify();
    return async (ctx, next) => {
      ctx.set('content-type', 'xml/text');
      await new Promise(resolve => {
        try {
          // TODO 这里抓不到异常
          notify.done(async (message, req, res, next1) => {
            ctx.request.body = message;
            ctx.body = notify.payment.buildXml({
              return_code: 'SUCCESS',
            });
            await next1();
          })(ctx.req, ctx.res, resolve);
        } catch (error) {
          ctx.logger.info(error);
        }
      });
      await next();
    };
  } catch (error) {
    console.error('微信支付:初始化失败:请检查配置');
  }
};

const refound = options => {
  // 退款
  try {
    const notify = wxpay(options).getRefundNotify();
    return async (ctx, next) => {
      ctx.set('content-type', 'xml/text');
      await new Promise(resolve => {
        try {
          // TODO 这里抓不到异常
          notify.done(async (message, req, res, next1) => {
            ctx.request.body = message;
            ctx.body = notify.payment.buildXml({
              return_code: 'SUCCESS',
            });
            await next1();
          })(ctx.req, ctx.res, resolve);
        } catch (error) {
          ctx.logger.info(error);
        }
      });
      await next();
    };
  } catch (error) {
    console.error('微信支付:初始化失败:请检查配置');
  }
};

module.exports = options => {
  return {
    notify: notify(options),
    refound: refound(options),
  };
};
