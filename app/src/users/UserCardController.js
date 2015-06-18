(function(){
    'use strict';

    angular.module('users')
        .controller('UserCardController',UserCardController);

    function UserCardController(userFactory){
        this.user = userFactory.get(this.userId);
    }
})();