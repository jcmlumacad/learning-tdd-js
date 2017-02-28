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
        vm.users = SampleFactory.all();

        function login(params) {
            return SampleFactory.authenticate(params);
        }

        function register(params) {
            return SampleFactory.save(params);
        }
    }

    function SampleFactory() {
        var factory = {
            users: [],
            errorMessages: [],
            authenticate: authenticate,
            all: all,
            save: save
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
    }
})();