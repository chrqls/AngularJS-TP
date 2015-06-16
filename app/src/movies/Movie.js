(function(){
    'use strict';

    angular.module('movies',[
        'ngMaterial',
        'ui.router'
    ])
    .config(function($stateProvider){
        $stateProvider
            .state('movies',{
                url: '/movies',
                resolve: {
                    movies: function(movieFactory){
                        return movieFactory.findAll();
                    }
                },
                views: {
                    main: {
                        controller: 'MovieController as ctrl',
                        templateUrl: 'src/movies/movies.tpl.html'
                    }
                }
            })
    })
})();