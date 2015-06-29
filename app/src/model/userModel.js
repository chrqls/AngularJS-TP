(function () {

    angular.module('model')

        .service('userModel', userModel);

    function userModel($http) {
        var URI = 'http://localhost:3000/users';

        var userModel = this;

        userModel.loggedUser = null;

        userModel.findAll = function () {
            return $http.get(URI).then(function (response) {
                return response.data;
            });
        };

        userModel.login = function (user) {
            userModel.loggedUser = user;
        };
    }

})();