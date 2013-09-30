'use strict';

angular.module('taskApp', [
        'taskApp.services.task',
        'taskApp.directives.editable',
        'taskApp.filters.dateDelta',
        'google'
  ])
  .config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'LoginCtrl'
        })
        .when('/tasks', {
            templateUrl: 'views/tasks.html',
            controller: 'TasksCtrl'
        })
        .otherwise({
            redirectTo: '/'
        });
  });
