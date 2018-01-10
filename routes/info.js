const router = require('koa-router')();
const getUser = require('../controller/logic');

router
.get('/', function *(next) {
    yield this.render('index');
})
.post('/getUser',getUser.getUser)
.post('/insertUser',getUser.insertUser);

module.exports = router;