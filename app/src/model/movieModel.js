(function () {

    angular.module('model')

        .service('movieModel', movieModel);

    function movieModel($http) {
        var URI = 'http://localhost:3000/movies';

        this.findAll = function () {
            return $http.get(URI).then(function (response) {
                return response.data;
            });
        };

        this.findOne = function (movieId) {
            return $http.get(URI + '/' + movieId).then(function (response) {
                return response.data;
            });
        }
    }

})();