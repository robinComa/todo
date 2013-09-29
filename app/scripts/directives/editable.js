angular.module("taskApp.directives.editable", ['ui']).directive('editable', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            model: '=model',
            changed: '&'
        },
        templateUrl : 'views/editable.html',
        controller: function($scope) {},
        link: function(scope, element, attrs) {

            scope.editorEnabled = false;

            scope.unEdit = function($event) {
                scope.model = angular.copy(scope.editModel);
                scope.editorEnabled = false;
                if ($event != null) $event.preventDefault();
                scope.changed();
            };

            scope.enableEditor = function() {
                scope.editModel = angular.copy(scope.model);
                scope.editorEnabled = true;
                // The element enable needs focus and we wait for milliseconds before allowing focus on it.
                timer = setTimeout(function() {
                    element.find('input').focus().select();
                }, 200);
            };
        }
    }
});