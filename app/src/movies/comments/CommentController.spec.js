describe('CommentController',function(){

    var CommentController,
        commentFactoryMock,
        $timeout,
        commentMock;

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

    beforeEach(inject(function($controller,$q,_$timeout_){
        $timeout = _$timeout_;

        commentMock = {
            create: function(comment){
                return $q(function(resolve){
                    comment.id = 3;
                    $timeout(function(){
                        resolve(comment);
                    });
                });
            }
        };

        commentFactoryMock = function(){
            return commentMock;
        };

        spyOn(commentMock,'create').and.callThrough();
        spyOn(mockDialog,'cancel').and.callThrough();

        CommentController = $controller('CommentController',{
            commentFactory: commentFactoryMock(),
            $mdDialog: mockDialog
        });
    }));

    it('should call the create method of commentFactory when createComment method is called', function(done){
        CommentController.createComment(comment);
        expect(commentMock.create).toHaveBeenCalled();
        $timeout.flush();
        done();

    });

    it('should call the cancel method of $mdDialog when close method is called', function(){
       CommentController.close();
        expect(mockDialog.cancel).toHaveBeenCalled();
    });

});