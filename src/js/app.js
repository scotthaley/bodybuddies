var constants = require('./constants.js');
var Vue = require('vue/dist/vue.js');
var VueRouter = require('vue-router/dist/vue-router.js');

Vue.use(VueRouter);

var app = require('vue/app.vue');

var mybody = require('vue/mybody.vue');
var matchup = require('vue/matchup.vue');

Vue.config.debug = true;

var routes = [
    { path: '/', component: mybody },
    { path: '/mybody', component: mybody },
    { path: '/matchup', component: matchup }
];

var router = new VueRouter({ routes: routes });

new Vue({
    el: '#app',
    router: router,
    render: function (createElement) {
        return createElement(app);
    }
});
