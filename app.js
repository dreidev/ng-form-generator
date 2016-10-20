angular.module("app", ["formBuild"]);
angular.module("app").controller("ctrl", function($compile, $scope, $sce, builder, $timeout) {
    $scope.once = true;
    $scope.scrollTo = function(id) {
        $('html,body').animate({
            scrollTop: $('#' + id).offset().top
        }, 800);
    };

    $scope.timeup = false;
    setTimeout(function () {
      $scope.timeup = true;
    }, 2000);
    $scope.$watch("output", function(query) {
       if ($scope.once && $scope.timeup) {
           $scope.scrollTo("input");
           $scope.once = false;
       }
    });

});




angular.module("formBuild", ["dndLists", "ui.bootstrap"]);
