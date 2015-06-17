(function(){
    'use strict';

    angular.module('comments')
        .factory('commentFactory',commentFactory);


    /**
     * @ngdoc factory
     * @name comments.factory:commentFactory
     * @function
     *
     * @description
     * manage movies model (REST and cache)
     *
     */
    function commentFactory($q,$http){

        var URI = 'http://localhost:3000/comments';

        var comments;

        return {
            create: function(comment){
                return $q(function(resolve){
                    $http
                        .post(URI,comment)
                        .success(function(CreatedComment){
                            resolve(CreatedComment);
                        });
                });
            },
            findByMovie: function(id){
                return $q(function(resolve){
                    $http
                        .get(URI+'?movie='+id)
                        .success(function(commentsData){
                            comments = commentsData;
                            resolve(comments);
                        });
                });
            },
            getComments: function(){
                return comments;
            }
        };
    }

})();