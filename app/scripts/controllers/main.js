'use strict';

angular.module('cloudMapReduceApp')
  .controller('MainCtrl', function ($scope, angularFire) {

        var ref = new Firebase('https://jobs-pipe.firebaseio.com/');
        angularFire(ref.limit(10), $scope, "messages");

        $scope.username = 'Robin Coma';

        $scope.addMessage = function() {
            $scope.messages[ref.push().name()] = {
                from: $scope.username, content: $scope.message
            };
            $scope.message = "";
        };
  });
