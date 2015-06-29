(function () {

    angular.module('movies')

        .service('addCommentDialog', function ($mdDialog) {

            this.open = function (movie, event) {
                $mdDialog.show({
                    templateUrl: 'src/movies/detail/comments/addCommentDialog.tpl.html',
                    controller: function AddCommentDialogController(commentModel) {
                        var ctrl = this;
                        ctrl.movie = movie;
                        ctrl.close = $mdDialog.cancel;
                        ctrl.addComment = function (comment) {
                            commentModel.create(comment).then(ctrl.close);
                        };
                    },
                    controllerAs: 'ctrl',
                    targetEvent: event
                });
            };

            this.close = $mdDialog.cancel;
        });

})();