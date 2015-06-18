describe('MovieController', function(){

    var MovieDetailController,
        mockAside,
        mockDialog,
        $timeout;
    var movie = {
            name: 'foo'
        },
        comment = {
            title:'foo'
        },
        comments = [
            comment,
            {
                title: 'bar'
            }
        ];

    beforeEach(module('movies'));

    beforeEach(inject(function($controller,$q,_$timeout_){
        $timeout = _$timeout_;
        var data = {
            toggle: function(){

            }
        };
        mockAside = function(){
            return data;
        };
        mockDialog = {
            show: function(){
                return $q(function(resolve){
                    $timeout(function(){
                        resolve(comment);
                    })
                });
            }
        };
        var movieFactoryMock = function(){
            var selected = movie;
            return {
                getSelected: function(){
                    return selected;
                }
            };
        };

        spyOn(mockAside(),'toggle').and.callThrough();
        spyOn(mockDialog,'show').and.callThrough();

        MovieDetailController = $controller('MovieDetailController',{
            movieFactory: movieFactoryMock(),
            comments: comments,
            $mdSidenav: mockAside,
            $mdDialog: mockDialog
        });

    }));

    it('should have an movie object defined', function(){
        expect(MovieDetailController.movie).toBe(movie);
    });

    it('should close the aside', function(){
        expect(mockAside().toggle).toHaveBeenCalled();
    });

    it('should pop a dialog when the comment button is clicked', function(){
        MovieDetailController.comment();
        expect(mockDialog.show).toHaveBeenCalled();
    });

    it('should have a comments property fill with an array',function(){
        expect(MovieDetailController.comments.length).toBe(2);
    });

    it('should add the created comment to the comment list', function(){
        MovieDetailController.comment();
        $timeout.flush();
        expect(MovieDetailController.comments.length).toBe(3);
    });

});