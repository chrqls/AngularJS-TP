(function(){
    'use strict';

    angular.module('movies')
        .controller('MovieDetailController',MovieDetailController);

    function MovieDetailController(movieFactory,$mdSidenav, $mdDialog){
        var ctrl = this;

        $mdSidenav('movies').toggle();

        ctrl.movie = movieFactory.getSelected();

        ctrl.comment = function(event){
            $mdDialog
                .show({
                    templateUrl: 'src/movies/comments/views/comment-dialog.tpl.html',
                    controller: 'CommentController as dialog',
                    targetEvent: event
                })
        }
    }

})();