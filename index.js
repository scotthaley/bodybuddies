var koa    = require('koa'),
    pug    = require('koa-pug'),
    serve  = require('koa-static'),
    argv  = require('yargs').argv,
    path   = require('path'),
    app    = koa(),
    http   = require('http').createServer(app.callback()),
    router = require('koa-router')();
    
var port = argv.port ? argv.port : 80; 

app.use(serve(__dirname + '/www'));
app.use(serve(__dirname + '/bower_components/jquery/dist'));
app.use(serve(__dirname + '/bower_components/materialize/bin'));

new pug({
    viewPath: __dirname + '/views',
    debug: false,
    pretty: false,
    app: app
});

router
  .get('/', function *(next) {
    this.render('index');
  })

app.use(router.routes());

http.listen(port, function() {
  console.log("Listening on port " + port);
});
