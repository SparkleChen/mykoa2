const router = require('koa-router')();
const info = require('./info');

router.use('/home',info.routes(),info.allowedMethods());

module.exports = router;