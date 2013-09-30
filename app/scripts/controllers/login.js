'use strict';

angular.module('taskApp')
  .controller('LoginCtrl', function ($rootScope, $location, Google, Task) {

        Google.login(function(){
            $rootScope.$apply(function(){
                Task.initAccount(Google.getUser().id);
                $location.path('tasks');
            });
        });

  });
