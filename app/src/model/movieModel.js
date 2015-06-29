(function () {

    angular.module('model')

        .service('movieModel', movieModel);

    function movieModel($http, commentModel) {
        var URI = 'http://localhost:3000/movies';

        this.findAll = function () {
            return $http.get(URI).then(function (response) {
                return _.map(response.data, asMovie);
            });
        };

        this.findOne = function (movieId) {
            return $http.get(URI + '/' + movieId).then(function (response) {
                return asMovie(response.data);
            });
        };

        function asMovie(data) {
            return angular.extend(data, Movie);
        }

        var Movie = {
            populateComments: function () {
                var movie = this;
                return commentModel.findByMovie(movie.id).then(function (comments) {
                    movie.comments = comments;
                    return movie;
                });
            }
        };

    }

})();