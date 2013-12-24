//http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/

'use strict';

angular.module('Application', ['ngResource'])

.factory('UserFactory', function($resource){
    return $resource('Users/users.json')
})

.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    $scope.users = UserFactory.get();
})
