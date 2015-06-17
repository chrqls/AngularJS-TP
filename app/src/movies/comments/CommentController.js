(function(){
    'use strict';

    angular.module('comments')
        .controller('CommentController',CommentController);

    function CommentController($mdDialog){
        var dialog = this;

        dialog.close = function(){
            $mdDialog.cancel();
        }

    }

})();