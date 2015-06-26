(function () {

    angular.module('movies')

        .controller('MovieDetailController', MovieDetailController);

    function MovieDetailController(movie) {
        this.movie = movie;
    }

})();