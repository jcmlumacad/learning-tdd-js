(function() {
    'use strict';
    angular.module('sample', [])
        .factory('SampleFactory', SampleFactory)
        .controller('SampleController', SampleController);
    SampleController.$inject = ['SampleFactory'];
    SampleFactory.$inject = [];

    function SampleController(SampleFactory) {
        var vm = this;

        vm.login = {
            email: 'john@doe.com',
            password: '123456'
        };
        vm.register = {
            email: 'jane@doe.com',
            password: '123456'
        };
        vm.users = SampleFactory.all();
    }

    function SampleFactory() {
        var factory = {
            all: allUsers
        };

        return factory;

        function allUsers() {
            return [];
        }
    }
})();