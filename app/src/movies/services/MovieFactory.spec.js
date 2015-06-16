describe('MovieFactory', function(){

    var movieFactory;
    var $httpBackend;
    var movies = [{
        id:1,
        name: 'foo'
    }];

    beforeEach(module('movies'));

    beforeEach(inject(function(_movieFactory_,_$httpBackend_){
        movieFactory = _movieFactory_;
        $httpBackend = _$httpBackend_;
        $httpBackend.whenGET('http://localhost:3000/movies').respond(movies);
        $httpBackend.whenGET('http://localhost:3000/movies/1').respond(movies[0]);
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

    it('should return a movie object and store it', function(){
        movieFactory.findOne(1);
        $httpBackend.expectGET('http://localhost:3000/movies/1');
        $httpBackend.flush();
        expect(movieFactory.getSelected().name).toBe('foo');
    });

});