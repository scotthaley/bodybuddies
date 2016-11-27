var router = require('koa-router')(),
    koaBody = require('koa-body')(),
    pmongo = require('promised-mongo')

let db = pmongo('mongodb://mongo:27017/bodybuddies', ['user']);

module.exports = (function() {
    
    router.get('/', function *(next) {
        this.body = 'BodyBuddies API';
    })
    .post('/verifyToken', koaBody, function *(next) {
        console.log("token:", this.request.body.token);
        this.body = {valid: false};
    })
    .post('/register', koaBody, function *(next) {
        yield db.user.insert(koaBody.body);
        this.body = {success: true};
    })
    
    return {
        router: router
    }
})();
