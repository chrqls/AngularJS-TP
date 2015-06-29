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
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128);

            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .warnPalette('red')
                .accentPalette('grey');

        });
})();