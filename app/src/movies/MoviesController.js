(function () {

    angular.module('movies')

        .controller('MoviesController', MoviesController);

    function MoviesController(movieList, $mdSidenav, $state) {
        var ctrl = this;

        ctrl.movies = movieList;

        ctrl.toggleAside = function () {
            $mdSidenav('movies').toggle();
        };

        ctrl.showDetail = function (movie) {
            $state.go('movies.detail', {id: movie.id});
        };
    }

})();