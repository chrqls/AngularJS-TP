describe('MovieController', function(){

    var MovieController;
    var movie = {
        name: 'foo'
    };

    beforeEach(module('movies'));

    beforeEach(inject(function($controller){
        var movieFactoryMock = function(){
            var movies = [movie];
            return {
                get: function(){
                    return movies;
                }
            };
        };

        MovieController = $controller('MovieController',{
            movieFactory: movieFactoryMock()
        });
    }));

    it('should have an array of movies defined', function(){
        expect(MovieController.movies.length).toBe(1);
    });

});