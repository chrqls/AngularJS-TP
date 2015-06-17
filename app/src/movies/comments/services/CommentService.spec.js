describe('CommentService', function(){

    var commentFactory,
        $httpBackend;

    var comment = {
        id: 1,
        movie: 2,
        content: 'foo',
        author: 2
    };

    var comments = [comment,{
        id:2,
        movie:2,
        content:'bar',
        author: 1
    }];

    beforeEach(module('comments'));

    beforeEach(inject(function(_commentFactory_, _$httpBakend_){
        commentFactory = _commentFactory_;
        $httpBackend = _$httpBakend_;
        $httpBackend.whenPOST('http://localhost:3000/commenst').respond(comment);
        $httpBackend.whenGET('http://localhost:3000/comments?movie=2').respond(comments);
    }));

    it('should respond the comments for a given movie when method getByMovie is called', function(){
        commentFactory.getByMovie(2);
        $httpBackend.expectGET('http://localhost:3000/comments?movie=2');
        $httpBackend.flush();
        expect(commentFactory.comments).toBe(comments);
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
        expect(createdComment).toBe(comment);
    });

});