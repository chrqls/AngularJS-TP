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

        var movies,
            selected;

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
            findOne: function(id){
                return $q(function(resolve){
                    $http
                        .get(URI+'/'+id)
                        .success(function(data){
                            selected = data;
                            resolve();
                        });
                });
            },
            get: function(){
                return movies;
            },
            getSelected: function(){
                return selected;
            }
        };

    }

})();