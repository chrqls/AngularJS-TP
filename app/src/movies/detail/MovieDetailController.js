(function () {

    angular.module('movies')

        .controller('MovieDetailController', MovieDetailController);

    function MovieDetailController(movie, addCommentDialog) {
        var ctrl = this;

        ctrl.movie = movie;

        ctrl.addCommentDialog = addCommentDialog;
    }

})();