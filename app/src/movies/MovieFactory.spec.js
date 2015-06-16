describe('MovieFactory', function(){

    var movieFactory;
    var $httpBackend;
    var movies = [{
        name: 'foo'
    }];

    beforeEach(module('movies'));

    beforeEach(inject(function(_movieFactory_,_$httpBackend_){
        movieFactory = _movieFactory_;
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('http://localhost:3000/movies').respond(movies);

    }));

    afterEach(function () {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it('should return an array of movies and store them', function(){
        movieFactory.findAll();
        $httpBackend.expectGET('http://localhost:3000/movies');
        $httpBackend.flush();
        expect(movieFactory.get().length).toBe(1);
    });

});