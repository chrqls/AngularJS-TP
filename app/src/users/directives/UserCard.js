(function(){
    'use strict';

    angular.module('users')
        .directive('userCard',userCardDirective);

    function userCardDirective(){
        return {
            restrict: 'EA',
            replace: true,
            templateUrl: './src/users/views/user-card.tpl.html',
            scope: {},
            bindToController: {
                userId: '@',
                complex: '@'
            },
            controller: 'UserCardController as card',
            link: function(scope,element,attrs){

            }
        }
    }


})();