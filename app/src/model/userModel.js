(function () {

    angular.module('model')

        .service('userModel', userModel);

    function userModel($http) {
        var URI = 'http://localhost:3000/users';

        var userModel = this;

        userModel.loggedUser = null;

        function extractData(response) {
            return response.data;
        }

        userModel.findAll = function () {
            return $http.get(URI).then(extractData);
        };

        userModel.findById = function (id) {
            return $http.get(URI + '/' + id).then(extractData);
        };

        userModel.login = function (user) {
            userModel.loggedUser = user;
        };
    }

})();