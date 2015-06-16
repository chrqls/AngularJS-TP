(function(){
    'use strict';

    angular.module('movies')
        .factory('movieFactory',movieFactory);

    /**
     * @ngdoc factory
     * @name users.factory:UserFactory
     * @function
     *
     * @description
     * manage users data communicate with a rest api and store data in cache
     *
     */
    function movieFactory($q,$http){

        var URI = 'http://localhost:3000/movies';

        var movies;

        return {
            findAll: function(){
                return $q(function(resolve){
                    $http
                        .get(URI)
                        .success(function(data){
                            movies = data;
                            resolve();
                        });
                });
            },
            get: function(){
                return movies;
            }
        };

    }

})();