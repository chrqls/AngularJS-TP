(function () {

    angular.module('movies')

        .service('addCommentDialog', function ($mdDialog) {

            this.open = function (movie, event) {
                $mdDialog.show({
                    templateUrl: 'src/movies/detail/comments/addCommentDialog.tpl.html',
                    controller: function AddCommentDialogController() {
                        this.movie = movie;
                        this.close = $mdDialog.cancel;
                    },
                    controllerAs: 'ctrl',
                    targetEvent: event
                });
            };

            this.close = $mdDialog.cancel;
        });

})();