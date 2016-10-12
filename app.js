angular.module("app", ["dndLists", "ngSanitize"]);
angular.module("app").controller("SimpleDemoController", function($compile, $scope, $sce) {
    $scope.model = {
        'builder': []
    };

    // $scope.choices = [];

    $scope.choices = [{
        "label": 'input',
        "display": '<div class="form-group ng-scope"><label for="" class="col-sm-4 control-label ng-binding" >Text Input</label><div class="col-sm-8"><input type="text" disabled="disabled" ng-model="inputText" validator-required="false" validator-group="" id="" class="form-control ng-pristine ng-valid" placeholder="placeholder"><p class="help-block ng-binding">description</p></div>',
    }, ];
    $scope.selected1 = {};
    $scope.selected2 = {};
    $scope.submit = function() {
        console.log($scope.input0);
        console.log($scope.input1);
    };

    $scope.createForm = function() {
        var element = document.getElementById("form");
        element.parentNode.removeChild(element);
        var form = document.createElement('form');
        var parent = document.getElementById('form-parent');
        form.setAttribute("id", "form");
        form.setAttribute("class", "choices");
        form.setAttribute("ng-submit", "submit()");
        $compile(form)($scope);
        parent.appendChild(form);

        for (var i = 0; i < $scope.model.builder.length; i++) {
            $scope.render($scope.model.builder[i].label, i);
        }
        $scope.render("submit", $scope.model.builder.length);
    };

    $scope.$watch('model.builder.length', function(newValue, oldValue) {
        $scope.createForm();
    });

    $scope.render = function(value, index) {
        var input = document.createElement('input');
        var form = document.getElementById('form');
        switch (value) {
            case "input":
                input.setAttribute("type", "text");
                input.setAttribute("placeholder", "placeholder");
                input.setAttribute("class", "form-control");
                input.setAttribute("ng-model", "input" + index);
                $compile(input)($scope);
                form.appendChild(input);
                break;
            case "submit":
                input.setAttribute("type", "submit");
                input.setAttribute("name", "button");
                input.setAttribute("class", "btn btn-primary");
                input.setAttribute("ng-click", "createForm()");
                $compile(input)($scope);
                form.appendChild(input);
                break;
            default:


        }

    };
});


angular.module("app").directive('ngHtml', ['$compile', function($compile) {
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
