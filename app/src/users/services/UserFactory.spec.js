describe('UserController', function(){

    var usersFactory;
    var $httpBackend;
    var users = [{
        name: 'foo'
    }];

    beforeEach(module('users'));

    beforeEach(inject(function(_userFactory_,_$httpBackend_){
        usersFactory = _userFactory_;
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('http://localhost:3000/users').respond(users);

        usersFactory.findAll();
        $httpBackend.expectGET('http://localhost:3000/users');
        $httpBackend.flush();

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return an array of users', function(){
        expect(usersFactory.get().length).toBe(1);
    });

    it('should store the selectedUser', function(){
        usersFactory.select(0);
        expect(usersFactory.getSelected().name).toBe(users[0].name);
    });
});