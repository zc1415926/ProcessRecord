/**
 * Created by zc1415926 on 2016/3/28.
 */
// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {

    // create a message to display in our view
   // $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.config(function($routeProvider) {
    $routeProvider



        // route for the about page
        .when('/', {
            templateUrl : 'pages/home.html',
            controller  : 'homeController'
        });
});

// create the controller and inject Angular's $scope
scotchApp.controller('homeController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});