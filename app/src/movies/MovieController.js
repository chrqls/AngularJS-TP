(function () {
    'use strict';

    angular.module('movies')
        .controller('MovieController', MovieController);

    /**
     * @ngdoc controller
     * @name movies.controller:MovieController
     * @function
     *
     * @description
     * manage movies state of our app
     *
     */
    function MovieController(movieFactory, $state) {
        this.movies = movieFactory.get();
        this.showDetails = function (movie) {
            $state.go('movies.detail', {id: movie.id});
        };
        this.isSelected = function (movie) {
            return movie.id == movieFactory.getSelected().id;
        };
    }

})();