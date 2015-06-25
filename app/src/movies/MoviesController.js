(function () {

    angular.module('movies')

        .controller('MoviesController', MoviesController);

    function MoviesController(movieList, $mdSidenav) {
        var ctrl = this;

        ctrl.movies = movieList;

        ctrl.toggleAside = function () {
            $mdSidenav('movies').toggle();
        };
    }

})();