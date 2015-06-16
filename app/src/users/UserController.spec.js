describe('UserController', function(){

    var UserController;

    var user = {
        name: 'toto'
    };

    beforeEach(module('users'));

    beforeEach(inject(function($controller){
        UserController = $controller('UserController');
    }));

    it('should have an array of user defined', function(){
        expect(UserController.users.length).toBe(6);
    });

    it('should give selectedUser attribute a value when userChange method is called', function(){
        UserController.userChange(user);
        expect(UserController.selectedUser.name).toBe('toto');
    });
});