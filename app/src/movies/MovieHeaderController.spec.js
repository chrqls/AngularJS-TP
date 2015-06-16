describe('MovieController', function(){

    var MovieHeaderController,
        mockAside;

    beforeEach(module('movies'));

    beforeEach(inject(function($controller){
        var data = {
            toggle: function(){

            }
        };
        mockAside = function(){
            return data;
        };
        MovieHeaderController = $controller('MovieHeaderController',{
            $mdSidenav: mockAside
        });
        spyOn(mockAside(),'toggle').and.callThrough();
    }));

    it('should toggle the sidenav when the toggleAside method is called', function(){
        MovieHeaderController.toggleAside();
        expect(mockAside().toggle).toHaveBeenCalled();
    });

});