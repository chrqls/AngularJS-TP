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

            //$locationProvider.html5Mode(true);

            $mdIconProvider
                .defaultIconSet("./assets/svg/avatars.svg", 128)
                .icon("menu"       , "./assets/svg/menu.svg"        , 24)
                .icon("share"      , "./assets/svg/share.svg"       , 24)
                .icon("google_plus", "./assets/svg/google_plus.svg" , 512)
                .icon("hangouts"   , "./assets/svg/hangouts.svg"    , 512)
                .icon("twitter"    , "./assets/svg/twitter.svg"     , 512)
                .icon("phone"      , "./assets/svg/phone.svg"       , 512);

            $mdThemingProvider.theme('default')
                .primaryPalette('teal')
                .warnPalette('brown')
                .accentPalette('red');

        });
})();