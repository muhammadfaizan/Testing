//http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/

'use strict';

var app = angular.module('Application', ['ngResource']);

app.controller('MainCtrl', function($scope) {
    $scope.text = 'Hello World!';
});
