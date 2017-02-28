'use strict';

describe('SampleController', function () {
    var controller, factory;
    var data = {
        name: 'John Doe',
        email: 'john@doe.com',
        password: '123456',
        password_confirmation: '123456'
    };

    beforeEach(module('sample'));

    beforeEach(inject(function ($controller) {
        controller = $controller('SampleController');
    }));

    describe('login', function () {
        it('should login with correct credentials', function () {
            var params = {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toBeTruthy();
            expect(controller.login({
                email: data.email,
                password: data.password
            })).toBeTruthy();
        });

        it('should not login with wrong credentials', function () {
            expect(controller.login({
                email: data.email,
                password: data.password
            })).toBeFalsy();
        });
    });

    describe('register', function () {
        it('only name', function () {
            var params = {
                name: data.name
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The email field is required',
                'The password field is required'
            ]));
        });

        it('only email', function () {
            var params = {
                email: data.email
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required',
                'The password field is required'
            ]));
        });

        it('only password', function () {
            var params = {
                password: data.password
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required',
                'The email field is required',
                'The password confirmation does not match'
            ]));
        });

        it('only confirm password', function () {
            var params = {
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required',
                'The email field is required',
                'The password field is required'
            ]));
        });

        it('only name and email', function () {
            var params = {
                name: data.name,
                email: data.email
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The password field is required'
            ]));
        });

        it('only name and password', function () {
            var params = {
                name: data.name,
                password: data.password
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The email field is required',
                'The password confirmation does not match'
            ]));
        });

        it('only name and confirm password', function () {
            var params = {
                name: data.name,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The email field is required',
                'The password field is required'
            ]));
        });

        it('only email and password', function () {
            var params = {
                email: data.email,
                password: data.password
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required',
                'The password confirmation does not match'
            ]));
        });

        it('only email and confirm password', function () {
            var params = {
                email: data.email,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required',
                'The password field is required'
            ]));
        });

        it('only password and confirmation password', function () {
            var params = {
                password: data.password,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required',
                'The email field is required'
            ]));
        });

        it('all fields except name', function () {
            var params = {
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required'
            ]));
        });

        it('all fields except email', function () {
            var params = {
                name: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The email field is required'
            ]));
        });

        it('all fields except password', function () {
            var params = {
                name: data.name,
                email: data.email,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The password field is required'
            ]));
        });

        it('all fields except confirm password', function () {
            var params = {
                name: data.name,
                email: data.email,
                password: data.password
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The password confirmation does not match'
            ]));
        });

        it('all fields', function () {
            var params = {
                name: data.name,
                email: data.email,
                password: data.password,
                password_confirmation: data.password_confirmation
            };

            expect(controller.register(params)).toBeTruthy();
        });

        it('without inputs', function () {
            var params = {};

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The name field is required',
                'The email field is required',
                'The password field is required'
            ]));
        });

        it('password must not match to confirm password', function () {
            var params = {
                password: data.password,
                password_confirmation: 'qwerty'
            };

            expect(controller.register(params)).toEqual(jasmine.arrayContaining([
                'The password confirmation does not match'
            ]));
        });
    });

    describe('reset password', function () {
        it('should email your password reset link', function () {

        });

        it('should not reset the password with the wrong token', function () {

        });

        it('should reset the password with the right token', function () {

        });
    });
});
