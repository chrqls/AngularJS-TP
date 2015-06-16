describe('MovieController', function(){

    var MovieDetailController;
    var movie = {
        name: 'foo'
    };

    beforeEach(module('movies'));

    beforeEach(inject(function($controller){
        var movieFactoryMock = function(){
            var selected = movie;
            return {
                getSelected: function(){
                    return selected;
                }
            };
        };

        MovieDetailController = $controller('MovieDetailController',{
            movieFactory: movieFactoryMock()
        });
    }));

    it('should have an movie object defined', function(){
        expect(MovieDetailController.movie).toBe(movie);
    });

});