angular.module('formBuild').directive('radioInput', function () {
    return {
        restrict: 'EA',   // 'A' is the default, so you could remove this line
        scope: {
          object: '=',
          popoverTemplateUrl:"@"
        },
        templateUrl: './radio-input.html',
        link: function (scope, element, attrs) {
        }
    };
});
