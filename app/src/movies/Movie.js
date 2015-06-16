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
                    header: {
                        controller: 'MovieHeaderController as header',
                        templateUrl: 'src/movies/views/movies-header.tpl.html'
                    },
                    main: {
                        controller: 'MovieController as ctrl',
                        templateUrl: 'src/movies/views/movies.tpl.html'
                    }
                }
            });
    });
})();