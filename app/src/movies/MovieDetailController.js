(function(){
    'use strict';

    angular.module('movies')
        .controller('MovieDetailController',MovieDetailController);

    function MovieDetailController(movieFactory,$mdSidenav){
        $mdSidenav('movies').toggle();

        this.movie = movieFactory.getSelected();
    }

})();