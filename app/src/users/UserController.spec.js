describe('UserController', function(){

    var UserController;
    var user = {
        name: 'foo'
    };

    beforeEach(module('users'));

    beforeEach(inject(function($controller){
        UserController = $controller('UserController',{
            users: [user]
        });
        UserController.selectedIndex = 0;
        UserController.users[0] = user;
    }));

    it('should have an array of user defined', function(){
        expect(UserController.users.length).toBe(1);
    });

    it('should give selectedUser attribute a value when userChange method is called', function(){
        UserController.userChange();
        expect(UserController.selectedUser).toBe(user);
    });
});