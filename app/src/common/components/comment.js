(function () {

    angular.module('components', [])

        .directive('comment', function () {
            return {
                templateUrl: 'src/common/components/comment.tpl.html',
                scope: {},
                bindToController: {
                    comment: '=data'
                },
                controller: function () {
                    var ctrl = this;
                    if (!ctrl.comment.authorInfo) ctrl.comment.populateAuthorInfo();
                },
                controllerAs: 'ctrl'
            }
        });

})();