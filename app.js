angular.module("app", ["formBuild"]);
angular.module("app").controller("SimpleDemoController", function($compile, $scope, $sce, builder) {

  
    $scope.dropCallback = function(event, index, item, external, type, allowedType) {
        if (external) {
            if (allowedType === 'itemType' && !item.label) return false;
            if (allowedType === 'containerType' && !angular.isArray(item)) return false;
        }
        $scope.output.splice(index, 1);
        return item;
    };

});




angular.module("formBuild", ["dndLists", "ui.bootstrap"]);
