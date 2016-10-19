angular.module('formBuild').directive('delete', function() {
    return {
        restrict: 'E',
        replace: true,
        scope: false,
        templateUrl: 'htmlTemplates/delete.html',
        controller: function($scope) {


        },
    };
});
