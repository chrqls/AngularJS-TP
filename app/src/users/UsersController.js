(function () {
    'use strict';

    angular
        .module('users')
        .controller('UsersController', UsersController);

    function UsersController(userList) {
        var ctrl = this;

        ctrl.users = userList;
    }

})();
