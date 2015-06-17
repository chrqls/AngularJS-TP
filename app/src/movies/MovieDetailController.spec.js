describe('MovieController', function(){

    var MovieDetailController,
        mockAside;
    var movie = {
        name: 'foo'
    };

    beforeEach(module('movies'));

    beforeEach(inject(function($controller){
        var data = {
            toggle: function(){

            }
        };
        mockAside = function(){
            return data;
        };
        var movieFactoryMock = function(){
            var selected = movie;
            return {
                getSelected: function(){
                    return selected;
                }
            };
        };
        spyOn(mockAside(),'toggle').and.callThrough();

        MovieDetailController = $controller('MovieDetailController',{
            movieFactory: movieFactoryMock(),
            $mdSidenav: mockAside
        });

    }));

    it('should have an movie object defined', function(){
        expect(MovieDetailController.movie).toBe(movie);
    });

    it('should close the aside', function(){
        expect(mockAside().toggle).toHaveBeenCalled();
    });

});