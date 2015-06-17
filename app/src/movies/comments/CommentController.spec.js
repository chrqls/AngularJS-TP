describe('CommentController',function(){

    var CommentController,
        commentFactoryMock;

    var comment = {
      content: 'foobar'
    };

    var mockDialog = {
        hide: function(){

        },
        cancel: function(){

        }
    };

    beforeEach(module('comments'));

    beforeEach(inject(function($controller,$q){
        commentFactoryMock = function(){
            return {
                create: function(comment){
                    return $q(function(resolve){
                        comment.id = 3;
                        resolve(comment);
                    })
                }
            };
        };

        spyOn(commentFactoryMock(),'create').and.callThrough();
        spyOn(mockDialog,'hide').and.callThrough();
        spyOn(mockDialog,'cancel').and.callThrough();

        CommentController = $controller('CommentController',{
            commentFactory: commentFactoryMock(),
            $mdDialog: mockDialog
        });
    }));

    it('should call the create method of commentFactory when createComment method is called', function(done){
        CommentController
            .createComment(comment)
            .then(function(createdComment){
                expect(commentFactoryMock.create).toHaveBeenCalled();
            })
            .finally(done)
    });

    it('should respond with a comment object when create method is called', function(done){
        CommentController
            .createComment(comment)
            .then(function(createdComment){
                expect(createdComment.id).toBeDefined();
                expect(createdComment.content).toBe('foobar');
            })
            .finally(done)
    });

    it('should call the close method of $mdDialog service when createComment method is called', function(done){
        CommentController
            .createComment(comment)
            .then(function(){
                expect(mockDialog.hide).toHaveBeenCalled();
            })
            .finally(done)
    });

    it('should call the cancel method of $mdDialog when close method is called', function(){
       CommentController.close();
        expect(mockDialog.cancel).toHaveBeenCalled();
    });

});