'use strict';

describe('SampleController', function () {
    var controller, factory;

    beforeEach(module('sample'));

    beforeEach(inject(function ($controller) {
        controller = $controller('SampleController');
    }));

    describe('login', function () {
        describe('username', function () {
            it('contains letters', function () {
                expect(controller.login.username).toMatch(/[a-zA-Z]/);
            });

            it('contains numbers', function () {
                expect(controller.login.username).toMatch(/\d+/);
            });

            it('contains underscore', function () {
                expect(controller.login.username).toMatch(/[_]/);
            });

            it('must have a minimum of 6 characters', function () {
                expect(controller.login.username.length).toBeGreaterThan(5);
            });
        });

        describe('password', function () {
            it('contains letters', function () {
                expect(controller.login.password).toMatch(/[a-z]/);
            });

            it('contains numbers', function () {
                expect(controller.login.password).toMatch(/\d+/);
            });

            it('contains special characters', function () {
                expect(controller.login.password).toMatch(/[$&+,:;=?@#/\\|'<>.^*()%!_"-]/);
            });

            it('must have atleast one uppercase letter', function () {
                expect(controller.login.password).toMatch(/[A-Z]/);
            });

            it('must have a minimum of 8 characters', function () {
                expect(controller.login.password.length).toBeGreaterThan(7);
            });

            it('must not the same as username', function () {
                expect(controller.login.password).not.toEqual(controller.login.username);
            });
        });

        it('must match the login credentials', function () {
            expect(controller.users).toContain({
                username: controller.login.username,
                password: controller.login.password
            });
        });
    });

    describe('register', function () {
        describe('username', function () {
            it('must be unique', function () {
                var usernames = [];
                controller.users.forEach(function (user) {
                    usernames.push(user.username);
                });
                expect(usernames).not.toContain(controller.register.username);
            });

            it('contains letters', function () {
                expect(controller.register.username).toMatch(/[a-zA-Z]/);
            });

            it('contains numbers', function () {
                expect(controller.register.username).toMatch(/\d+/);
            });

            it('contains underscore', function () {
                expect(controller.register.username).toMatch(/[_]/);
            });

            it('must have a minimum of 6 characters', function () {
                expect(controller.register.username.length).toBeGreaterThan(5);
            });
        });

        describe('password', function () {
            it('contains letters', function () {
                expect(controller.register.password).toMatch(/[a-z]/);
            });

            it('contains numbers', function () {
                expect(controller.register.password).toMatch(/\d+/);
            });

            it('contains special characters', function () {
                expect(controller.register.password).toMatch(/[$&+,:;=?@#/\\|'<>.^*()%!_"-]/);
            });

            it('must have atleast one uppercase letter', function () {
                expect(controller.register.password).toMatch(/[A-Z]/);
            });

            it('must have a minimum of 8 characters', function () {
                expect(controller.register.password.length).toBeGreaterThan(7);
            });

            it('must not the same as username', function () {
                expect(controller.register.password).not.toEqual(controller.register.username);
            });
        });
    });
});
