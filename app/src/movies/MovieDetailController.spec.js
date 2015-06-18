describe('MovieController', function(){

    var MovieDetailController,
        mockAside,
        mockDialog,
        mockBottom;
    var movie = {
        name: 'foo'
    };

    beforeEach(module('movies'));

    beforeEach(inject(function($controller,$q){
        var data = {
            toggle: function(){

            }
        };
        mockAside = function(){
            return data;
        };
        mockDialog = {
            show: function(){
                return $q(function(resolve){
                    resolve();
                });
            }
        };
        mockBottom = {
            show: function(){

            }
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
        spyOn(mockDialog,'show').and.callThrough();
        spyOn(mockBottom,'show').and.callThrough();

        MovieDetailController = $controller('MovieDetailController',{
            movieFactory: movieFactoryMock(),
            $mdSidenav: mockAside,
            $mdDialog: mockDialog,
            $mdBottomSheet: mockBottom
        });

    }));

    it('should have an movie object defined', function(){
        expect(MovieDetailController.movie).toBe(movie);
    });

    it('should close the aside', function(){
        expect(mockAside().toggle).toHaveBeenCalled();
    });

    it('should pop a dialog when the comment button is clicked', function(){
        MovieDetailController.comment();
        expect(mockDialog.show).toHaveBeenCalled();
    });

});