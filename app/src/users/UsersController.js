(function () {
    'use strict';

    angular
        .module('users')
        .controller('UsersController', UsersController);

    /**
     * @ngdoc controller
     * @name users.controller:UserController
     * @function
     *
     * @description
     * manage the main state of our app
     *
     */
    function UsersController(userList, $state) {
        var ctrl = this;

        ctrl.users = userList;

        ctrl.login = function () {
            $state.go('movies');
        }
    }

})();
