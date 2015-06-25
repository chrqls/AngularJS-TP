describe('UsersController', function () {

    var ctrl;

    beforeEach(module('users'));

    beforeEach(inject(function ($controller) {
        ctrl = $controller('UsersController');
    }));

    it('should have an array of user defined', function () {
        expect(ctrl.users.length).toBe(6);
    });

});