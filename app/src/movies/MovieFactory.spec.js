describe('MovieFactory', function(){

    var usersFactory;
    var $httpBackend;
    var movies = [{
        name: 'foo'
    }];

    beforeEach(module('movies'));

    beforeEach(inject(function(_userFactory_,_$httpBackend_){
        usersFactory = _userFactory_;
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('http://localhost:3000/movies').respond(movies);

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return an array of movies and store them', function(){
        usersFactory.findAll();
        $httpBackend.expectGET('http://localhost:3000/movies');
        $httpBackend.flush();
        expect(usersFactory.get().length).toBe(1);
    });

});