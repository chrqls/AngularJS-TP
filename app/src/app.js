(function(){
    'use strict';

    angular
        .module('app', [
            'ngMaterial',
            'ui.router',
            'users',
            'movies'
        ])
        .config(function($mdThemingProvider, $mdIconProvider, $locationProvider){

            $locationProvider.html5Mode(true);

            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128);


            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .warnPalette('red')
                .accentPalette('grey');

        });
})();