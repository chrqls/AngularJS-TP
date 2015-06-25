(function () {
    'use strict';

    angular
        .module('users', [
            'ngMaterial'
        ])

        .config(function ($stateProvider) {
            $stateProvider.state('users', {
                url: '',
                templateUrl: 'src/users/users.tpl.html',
                controller: 'UserController as ctrl',
                resolve: {
                    userList: function (userModel) {
                        return userModel.findAll();
                    }
                }
            });
        });
})();