(function () {

    angular.module('movies')

        .config(function ($stateProvider) {
            $stateProvider.state('movies.detail', {
                url: '/detail/:id',
                templateUrl: 'src/movies/detail/detail.tpl.html',
                controller: 'MovieDetailController as ctrl',
                resolve: {
                    movie: function ($stateParams, movieModel) {
                        return movieModel.findOne($stateParams.id)
                            .then(function (movie) {
                                return movie.populateComments();
                            });
                    }
                }
            });
        });

})();