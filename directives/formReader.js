angular.module('formBuild').directive('ngFormReader', function($templateRequest, $compile, $rootScope, builder) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            input: '=',
            data: "="
        },
        templateUrl: 'htmlTemplates/formReader.html',
        controller: function($scope) {
            $scope.submit = function() {
                var data = [];
                for (var i = 0; i < $scope.input.length; i++) {
                    var entry = JSON.parse(JSON.stringify($scope.input[i]));
                    delete entry.type;
                    delete entry.popoverTemplateUrl;
                    delete entry.display;
                    delete entry.htmlTemplate;
                    data[i] = entry;
                }
                $scope.data = data;
                console.log(data);
            };

        },
        link: function(scope, element, attrs, fn) {}
    };
});
