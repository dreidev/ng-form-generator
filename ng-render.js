angular.module('formBuild').directive('ngRender', function($compile, builder, $rootScope) {
    return {
        restrict: 'A',
        scope:{
          ngRender: '=',

        },
        link: function(scope, element, attrs, fn) {
          scope.title = "default";
          scope.model = {builder:[]};
          scope.model.builder = $rootScope.builder;
          scope.init = function () {
            var tab = $compile(scope.ngRender.display)(scope);
            element.append(tab);
          };
          scope.$watch('title', function (oldValue, newValue) {
            scope.init();
          }, true);
        }
    };
});
