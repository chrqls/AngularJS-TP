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

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return an array of users', function(){
        usersFactory.findAll();
        $httpBackend.expectGET('http://localhost:3000/users');
        $httpBackend.flush();
        expect(usersFactory.get().length).toBe(1);
    });

    it('should store the selectedUser', function(){
        usersFactory.findAll();
        $httpBackend.expectGET('http://localhost:3000/users');
        $httpBackend.flush();

        usersFactory.select(0);
        expect(usersFactory.getSelected().name).toBe(users[0].name);
    });
});