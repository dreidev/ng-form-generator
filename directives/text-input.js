angular.module('formBuild').directive('textInput', function () {
    return {
        restrict: 'EA',   // 'A' is the default, so you could remove this line
        scope: {
          object: '=',
          popoverTemplateUrl:"@?"
        },
        templateUrl: './htmlTemplates/text-input.html',
        link: function (scope, element, attrs) {
        }
    };
});
