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
            username: 'jane_doe2',
            password: 'Dfg5678$'
        };
        vm.register = {
            username: 'conds_18',
            password: 'Dfg5678$'
        };
        vm.users = SampleFactory.all();
    }

    function SampleFactory() {
        var factory = {
            all: allUsers
        };

        return factory;

        function allUsers() {
            return [
                {
                    username: 'john_doe1',
                    password: 'abcd123@'
                },
                {
                    username: 'jane_doe2',
                    password: 'Dfg5678$'
                }
            ];
        }
    }
})();