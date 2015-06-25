(function () {

    angular.module('userModel', [])

        .service('userModel', function ($http) {
            var URI = 'http://localhost:3000/users';
            this.findAll = function () {
                return $http.get(URI).then(function (response) {
                    return response.data;
                });
            };
        });

})();