const $ = require('jquery');
const API_PATH = 'http://localhost:8080/api';

const API = (function() {
    
    var verifyToken = function() {
        $.post(API_PATH + '/verifyToken', { token: "32" });
    };

    var registerUser = function(name, nickname, password, email) {
        user = { name, nickname, password, email };
        $.post(API_PATH + '/register', user);
    };
    
    return {
        _sessionToken:  null,
        verifyToken,
        registerUser
    }
})();

API.verifyToken();

module.exports = API;
