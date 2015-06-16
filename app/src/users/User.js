(function(){
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


})();