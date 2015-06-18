(function(){
    'use strict';

    angular.module('users')
        .factory('userFactory',userFactory);

    /**
     * @ngdoc factory
     * @name users.factory:userFactory
     * @function
     *
     * @description
     * manage users data communicate with a rest api and store data in cache
     *
     */
    function userFactory($q,$http){

        var URI = 'http://localhost:3000/users';

        var users,
            selected;

        return {
            findAll: function(){
                return $q(function(resolve){
                    $http
                        .get(URI)
                        .success(function(data){
                            users = data;
                            resolve();
                        });
                });
            },
            get: function(id){
                if(id){
                    for(var i= 0; i < users.length;i++){
                        if(users[i].id == id){
                            return users[i];
                        }
                    }
                }else{
                    return users;
                }
            },
            select: function(id){
                selected = users[id];
            },
            getSelected: function(){
                return selected;
            }
        };

    }

})();