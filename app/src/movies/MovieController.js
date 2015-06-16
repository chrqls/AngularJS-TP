(function(){
    'use strict';

    angular.module('movies')
        .controller('MovieController',MovieController);

    /**
     * @ngdoc controller
     * @name movies.controller:MovieController
     * @function
     *
     * @description
     * manage movies state of our app
     *
     */
    function MovieController(movieFactory, $mdSidenav){
        this.movies = movieFactory.get();

        this.closeAside = function(){
            $mdSidenav('movies').toggle();
        }
    }

})();