angular.module("app", ["formBuild"]);
angular.module("app").controller("SimpleDemoController", function($scope) {

$scope.add = function (x, y) {
  $scope.res = x + y;
}
});




angular.module("formBuild", ["dndLists", "ui.bootstrap"]);
