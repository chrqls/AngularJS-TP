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
     * manage the login state of our app
     *
     */
    function UserController(userFactory,$state) {
        var self = this;

        this.users = userFactory.get();

        this.login = function(){
            userFactory.select(self.selectedUser);
            $state.go('movies');
        };
    }

})();
