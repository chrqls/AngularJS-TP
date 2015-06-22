(function(){
    'use strict';

    angular.module('comments')
        .controller('CommentController',CommentController);


    /**
     * @ngdoc controller
     * @name comments.controller:CommentController
     * @function
     *
     * @description
     * manage the comment creation dialog
     *
     */
    function CommentController($mdDialog, commentFactory){
        var dialog = this;

        dialog.close = function(){
            $mdDialog.cancel();
        };

        dialog.createComment = function(comment){
            commentFactory
                .create(comment)
                .then(function(createdComment){
                    $mdDialog.hide(createdComment);
                });
        };
    }

})();