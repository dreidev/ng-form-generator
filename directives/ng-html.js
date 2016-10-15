angular.module("formBuild").directive('ngHtml', ['$compile', function($compile) {
    return function(scope, elem, attrs) {
        if (attrs.ngHtml) {
            elem.html(scope.$eval(attrs.ngHtml));
            $compile(elem.contents())(scope);
        }
        scope.$watch(attrs.ngHtml, function(newValue, oldValue) {
            if (newValue && newValue !== oldValue) {
                elem.html(newValue);
                $compile(elem.contents())(scope);
            }
        });
    };
}]);
