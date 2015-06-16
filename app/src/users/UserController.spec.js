describe('UserController', function(){

    var UserController,
        $stateMock = {
            go: function(){

            }
        };

    var user = {
        name: 'foo'
    };


    beforeEach(module('users'));

    beforeEach(inject(function($controller){
        var userFactoryMock = function(){
            var users = [user];
            return {
                get: function(){
                    return users;
                }
            };
        };

        UserController = $controller('UserController',{
            userFactory: userFactoryMock(),
            $state: $stateMock
        });
        UserController.selectedIndex = 0;
        UserController.users[0] = user;

        spyOn($stateMock,'go').and.callThrough();

    }));

    it('should have an array of user defined', function(){
        expect(UserController.users.length).toBe(1);
    });

    it('should give selectedUser attribute a value when userChange method is called', function(){
        UserController.userChange();
        expect(UserController.selectedUser).toBe(user);
    });

    it('should redirect to movies state when alogin method is called', function(){
        UserController.login();
        expect($stateMock.go).toHaveBeenCalled();
    });
});