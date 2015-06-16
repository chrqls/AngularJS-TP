(function(){
    'use strict';

    angular.module('users')
        .factory('userFactory',userFactory);

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
                        })
                })
            },
            get: function(){
                return users;
            },
            select: function(id){
                selected = users[id];
            },
            getSelected: function(){
                return selected;
            }
        }

    }

})();