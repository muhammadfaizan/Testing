//http://www.tuesdaydeveloper.com/2013/06/angularjs-testing-with-karma-and-jasmine/

'use strict';

angular.module('Application', ['ngResource'])
/*
.factory('UserFactory', function($resource){
    return $resource('Users/users.json');
})
*/

.controller('MainCtrl', function($scope,$http) {
    $scope.text = 'Hello World!';
    $http.get('Users/users.json').success(function(data){
        $scope.users =data;
    })

})
