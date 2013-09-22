'use strict';

angular.module('cloudMapReduceApp')
  .controller('MainCtrl', function ($scope) {

        $scope.username = 'User ' + Math.floor(Math.random()*101);

        $scope.data = 'https://jobs-pipe.firebaseio.com/';
        var ref = new Firebase($scope.data);

        $scope.messages = [];
        ref.on('value', function(snapshot) {
            if(snapshot.val() !== null) {
                $scope.messages = snapshot.val();
            }
        });

        $scope.addMessage = function() {
            ref.push({
                from: $scope.username,
                content: this.message
            });
            this.message = "";
        };

        $scope.removeMessage = function(index){
            var i = 0;
            for(var id in $scope.messages){
                if(index == i){
                    delete $scope.messages[id];
                    ref.child(id).remove();
                    return;
                }
                i++;
            }
        };
  });
