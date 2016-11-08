var constants = require('./constants.js');
var Vue = require('vue/dist/vue.js');
var VueRouter = require('vue-router/dist/vue-router.js');

Vue.use(VueRouter);

var app = require('vue/app.vue');

var login = require('vue/login.vue');
var register = require('vue/register.vue');
var mybody = require('vue/mybody.vue');
var matchup = require('vue/matchup.vue');

Vue.config.debug = true;

var routes = [
    { name: 'mybody', path: '/mybody', component: mybody },
    { name: 'matchup', path: '/matchup', component: matchup },
    { name: 'login', path: '/login', component: login },
    { name: 'register', path: '/register', component: register }
];

var router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
    if (to.name != 'login' && to.name != 'register') {
        next('/login')
    } else {
        next();
    }
});

new Vue({
    el: '#app',
    router,
    render: function (createElement) {
        return createElement(app);
    }
});
