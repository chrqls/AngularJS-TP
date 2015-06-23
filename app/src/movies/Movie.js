(function(){
    'use strict';

    angular.module('movies',[
        'ngMaterial',
        'ui.router',
        'comments'
    ])
    .config(function($stateProvider){
        $stateProvider
            .state('movies',{
                url: '/movies',
                onEnter: function(userFactory,$state){
                    if(!userFactory.getSelected()){
                        $state.go('users');
                    }
                },
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
            })
            .state('movies.detail',{
                url: '/detail/:id',
                resolve: {
                    movie: function($stateParams,movieFactory){
                        return movieFactory.findOne($stateParams.id);
                    },
                    comments: function($stateParams,commentFactory){
                        return commentFactory.findByMovie($stateParams.id);
                    }
                },
                views: {
                    movies: {
                        controller:'MovieDetailController as detailCtrl',
                        templateUrl: 'src/movies/views/movie-detail.tpl.html'
                    }
                }
            });
    });
})();