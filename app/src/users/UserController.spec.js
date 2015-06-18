describe('UserController', function(){

    var UserController,
        userFactoryMock,
        $stateMock = {
            go: function(){

            }
        };

    var user = {
        id:0,
        name: 'foo'
    };


    beforeEach(module('users', function($provide){
        userFactoryMock = function(){
            var users = [user],
                selected;
            return {
                get: function(){
                    return users;
                },
                select: function(id){
                    selected = users[id];
                },
                getSelected: function(){
                    return selected;
                }
            };
        }();
        $provide.value('userFactory',userFactoryMock)
    }));

    beforeEach(inject(function($controller){

        UserController = $controller('UserController',{
            $state: $stateMock
        });

        UserController.selectedIndex = 0;
        UserController.users = [user];

        spyOn($stateMock,'go').and.callThrough();

    }));

    it('should have an array of user defined', function(){
        expect(UserController.users.length).toBe(1);
    });

    it('should give selectedUser attribute a value when userChange method is called', function(){
        UserController.userChange();
        expect(UserController.selectedUser).toBe(user);
    });

    it('should redirect to movies state when a login method is called', function(){
        UserController.login();
        expect($stateMock.go).toHaveBeenCalled();
    });

    it('should store the selectedUser in the userFactory attribute selected on login', function(){
        UserController.login();
        expect(userFactoryMock.getSelected().id).toBe(user.id);
    });
});