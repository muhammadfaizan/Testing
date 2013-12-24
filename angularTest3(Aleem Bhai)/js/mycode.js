//http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/

'use strict';

var app = angular.module('Application', ['ngResource']);

app.factory('UserFactory', function($resource){
    return $resource('Users/users.json');
});

app.controller('MainCtrl', function($scope, UserFactory) {
    $scope.text = 'Hello World!';
    UserFactory.get(function(data){
        $scope.users = data.Users;
    });

});


