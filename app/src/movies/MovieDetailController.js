(function(){
    'use strict';

    angular.module('movies')
        .controller('MovieDetailController',MovieDetailController);


    /**
     * @ngdoc controller
     * @name movies.controller:MovieDetailController
     * @function
     *
     * @description
     * manage the page of one single movie
     *
     */
    function MovieDetailController(movieFactory,$mdSidenav, $mdDialog, $mdToast){
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
                .then(function(comment){
                    $mdToast.show(
                        $mdToast.simple()
                            .content('Comment created')
                            .position('top left')
                            .hideDelay(3000)
                    );
                })
        };
    }

})();