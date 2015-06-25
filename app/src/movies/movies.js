(function () {

    angular.module('movies', [
        'ngMaterial'
    ])

        .config(function ($stateProvider) {
            $stateProvider.state('movies', {
                url: '/movies',
                templateUrl: 'src/movies/movies.tpl.html',
                controller: 'MoviesController as ctrl',
                resolve: {
                    movieList: function (movieModel) {
                        return movieModel.findAll();
                    }
                }
            });
        });

})();