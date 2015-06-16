(function () {
    'use strict';

    angular
        .module('users', [
            'ngMaterial',
            'ui.router'
        ])
        .config(function($stateProvider){
            $stateProvider
                .state('users',{
                    url: '/',
                    resolve: {
                      users: function(userFactory){
                        return userFactory.findAll();
                      }
                    },
                    views: {
                        main: {
                            controller: 'UserController as ctrl',
                            templateUrl: 'src/users/users.tpl.html'
                        }
                    }
                })
        })
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
    function UserController(userFactory) {
        var self = this;

        this.userChange = function(){
            self.selectedUser = self.users[self.selectedIndex];
        };

        this.users = userFactory.get();
    }

})();
