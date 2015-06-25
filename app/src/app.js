(function () {
    'use strict';

    angular
        .module('app', [
            'ngMaterial',
            'ui.router',
            'userModel',
            'users'
        ])
        .config(function ($mdThemingProvider, $mdIconProvider) {

            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128);

            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .warnPalette('brown')
                .accentPalette('red');

        });
})();