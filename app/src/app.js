(function () {
    'use strict';

    angular
        .module('app', [
            'ngMaterial',
            'ngMessages',
            'ui.router',
            'model',
            'movies',
            'users'
        ])
        .config(function ($stateProvider, $mdThemingProvider, $mdIconProvider) {

            $stateProvider.state('default', {
                url: '',
                onEnter: function ($state) {
                    $state.go('users');
                }
            });
            
            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128);

            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .warnPalette('red')
                .accentPalette('grey');
        });
})();