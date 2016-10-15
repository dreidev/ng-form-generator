angular.module('formBuild').directive('abstract', function () {
    return {
        restrict: 'EA',   // 'A' is the default, so you could remove this line
        scope: {
          object: '=',
          popoverTemplateUrl:"@?",
          choice:'=?',
          template:"="
        },
        link: function(scope, element, attrs) {
           scope.getContentUrl = function() {
                return (scope.template);
           };
       },
       template: '<div ng-include="getContentUrl()"></div>'
    };
});
