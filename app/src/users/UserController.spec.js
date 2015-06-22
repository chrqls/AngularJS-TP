describe('UserController', function(){

    var UserController;

    beforeEach(module('users'));

    beforeEach(inject(function($controller){
        UserController = $controller('UserController');
    }));

    it('should have an array of user defined', function(){
        expect(UserController.users.length).toBe(6);
    });

});