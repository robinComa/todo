'use strict';

angular.module('taskApp', [
        'taskApp.services.task',
        'taskApp.directives.editable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
