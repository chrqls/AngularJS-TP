(function(){
    'use strict';

    angular.module('movies')
        .controller('MovieHeaderController',MovieHeaderController);


    /**
     * @ngdoc controller
     * @name movies.controller:MovieHeaderController
     * @function
     *
     * @description
     * manage the header of movie state
     *
     */
    function MovieHeaderController($mdSidenav){
        this.toggleAside = function(){
            $mdSidenav('movies').toggle();
        };
    }


})();