(function () {

    angular.module('movies')

        .config(function ($stateProvider) {
            $stateProvider.state('movies.detail', {
                url: '/detail/:id',
                templateUrl: 'src/movies/detail/detail.tpl.html',
                controller: 'MovieDetailController as ctrl',
                resolve: {
                    movie: function ($stateParams, movieModel, $q) {
                        return movieModel.findOne($stateParams.id)
                            .then(function (movie) {
                                return movie.populateComments();
                            })
                            .then(function (movie) {
                                _.map(movie.comments, function (comment) {
                                    comment.populateAuthorInfo();
                                });
                                return movie;
                            });
                            //////////////////
                            // ALTERNATIVE //
                            ////////////////
                            //.then(function populateCommentAuthorsInfo(movie) {
                            //    return $q.all(_.map(movie.comments, function (comment) {
                            //        return comment.populateAuthorInfo();
                            //    })).then(function () {
                            //        return movie;
                            //    });
                            //});
                    }
                }
            });
        });

})();