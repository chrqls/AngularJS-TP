describe('CommentService', function(){

    var commentFactory,
        $httpBackend;

    var comment = {
        id: 1,
        content: 'foo'
    };

    var comments = [comment,{
        id:2,
        content:'bar'
    }];

    var movieFactoryMock = {
        getSelected: function(){
            return {
                id : 2
            }
        }
    };

    var userFactoryMock = {
        getSelected: function(){
            return {
                id : 2
            }
        }
    };

    beforeEach(module('app',function($provide){
        $provide.value('movieFactory',movieFactoryMock);
        $provide.value('userFactory',userFactoryMock);
    }));


    beforeEach(inject(function(_commentFactory_, _$httpBackend_){
        commentFactory = _commentFactory_;
        $httpBackend = _$httpBackend_;
        $httpBackend.whenPOST('http://localhost:3000/comments').respond(comment);
        $httpBackend.whenGET('http://localhost:3000/comments?movie=2').respond(comments);
    }));

    it('should respond the comments for a given movie when method getByMovie is called', function(){
        commentFactory.findByMovie(2);
        $httpBackend.expectGET('http://localhost:3000/comments?movie=2');
        $httpBackend.flush();
        expect(commentFactory.getComments().length).toBe(2);
    });

    it('should respond with the created comment when method create is called', function(){
        var createdComment;
        commentFactory
            .create(comment)
            .then(function(data){
                createdComment = data;
            });
        $httpBackend.expectPOST('http://localhost:3000/comments');
        $httpBackend.flush();
        expect(createdComment.movie).toBe(movieFactoryMock.getSelected().id);
        expect(createdComment.author).toBe(userFactoryMock.getSelected().id);
    });

});