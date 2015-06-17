(function(){
    'use strict';

    angular.module('comments')
        .controller('CommentController',CommentController);

    function CommentController($mdDialog, commentFactory){
        var dialog = this;

        dialog.close = function(){
            $mdDialog.cancel();
        };

        dialog.createComment = function(comment){
            commentFactory
                .create(comment)
                .then(function(){
                    $mdDialog.hide();
                })
        };
    }

})();