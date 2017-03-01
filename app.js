(function() {
    'use strict';
    angular.module('sample', [])
        .factory('SampleFactory', SampleFactory)
        .controller('SampleController', SampleController);
    SampleController.$inject = ['SampleFactory'];
    SampleFactory.$inject = [];

    function SampleController(SampleFactory) {
        var vm = this;

        vm.login = login;
        vm.register = register;
        vm.forgot = forgot;
        vm.reset = reset;
        vm.users = SampleFactory.all();
        vm.token = SampleFactory.token;
        vm.passwordResets = SampleFactory.passwordResets;

        function login(params) {
            return SampleFactory.authenticate(params);
        }

        function register(params) {
            return SampleFactory.save(params);
        }

        function forgot(email) {
            return SampleFactory.forgotPassword(email);
        }

        function reset(params) {
            return SampleFactory.resetPassword(params);
        }
    }

    function SampleFactory() {
        var factory = {
            users: [],
            passwordResets: [],
            errorMessages: [],
            token: [],
            authenticate: authenticate,
            all: all,
            save: save,
            forgotPassword: forgotPassword,
            resetPassword: resetPassword
        };

        return factory;

        function all() {
            return factory.users;
        }

        function save(params) {
            if ( ! ( !! params.name)) {
                factory.errorMessages.push('The name field is required');
            }
            if ( ! ( !! params.email)) {
                factory.errorMessages.push('The email field is required');
            }
            if ( (!! params.password_confirmation && ! ( !! params.password)) || ( ! (!! params.password_confirmation) && ! ( !! params.password))) {
                factory.errorMessages.push('The password field is required');
            }
            if ( !! params.password && !! params.password_confirmation) {
                if (params.password !== params.password_confirmation) {
                    factory.errorMessages.push('The password confirmation does not match');
                }
            }
            if ( !! params.password && ! ( !! params.password_confirmation)) {
                factory.errorMessages.push('The password confirmation does not match');
            }

            if (factory.errorMessages.length === 0) {
                factory.users.push(params);

                return true;
            }

            return factory.errorMessages;
        }

        function authenticate(params) {
            var isLoggedIn = false;

            factory.users.forEach(function (user) {
                if (user.email === params.email && user.password === params.password) {
                    isLoggedIn = true;
                }
            });

            return isLoggedIn;
        }

        function forgotPassword(email) {
            factory.token.push(Math.random().toString(36).substring(7));
            factory.passwordResets.push({
                email: email,
                token: factory.token[0]
            });
            return true;
        }

        function resetPassword(params) {
            var isReset = false;

            factory.passwordResets.forEach(function (passwordReset) {
                if (passwordReset.email === params.email && passwordReset.token === params.token) {
                    isReset = true;
                    passwordReset.password = params.password;
                    passwordReset.password_confirmation = params.password_confirmation;
                }
            });

            if ( ! isReset) {
                return 'We can\'t find a user with that email address';
            }

            return true;
        }
    }
})();