'use strict';

angular.module('taskApp').controller('TasksCtrl', function ($scope, $location, Task, Google) {

        if(Google.getUser() == null){
            $location.path('/');
        }

        $scope.user = Google.getUser();

        Task.onValues(function(values){
            $scope.tasks = values;
        });

        $scope.addTask = function() {
            Task.add({
                date : (new Date()).getTime(),
                text: this.newTask
            });
            this.newTask = "";
        };

        $scope.getTaskIdByIndex = function(index){
            var i = 0;
            for(var id in $scope.tasks){
                if(index == i){
                    return id;
                }
                i++;
            }
            return null;
        };

        $scope.setTaskDone = function(id){
            var done = !$scope.tasks[id].done;
            $scope.tasks[id].done = done;
            Task.setDone(id, done);
        };

        $scope.removeTask = function(id){
            delete $scope.tasks[id];
            Task.remove(id);
        };

        $scope.setTaskText = function(id, text){
            Task.setText(id, text);
        };

  });
