(function () {
    'use strict';

    angular
        .module('users')
        .controller('UserController', UserController);

    /**
     * @ngdoc controller
     * @name users.controller:UserController
     * @function
     *
     * @description
     * manage the main state of our app
     *
     */
    function UserController(userList) {
        var ctrl = this;

        ctrl.users = userList;
    }

})();
