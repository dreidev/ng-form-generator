angular.module('formBuild').directive('ngFormReader', function($compile, $rootScope) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            input: '=',
            data: "="
        },
        templateUrl: './formReader.html',
        controller: function($scope) {
            $scope.submit = function() {
                var data = [];
                for (var i = 0; i < $scope.input.length; i++) {
                    var entry = {
                        title: null,
                        value: null,
                        description: null
                    };
                    entry.title = $scope.input[i].title;
                    entry.value = $scope.input[i].value;
                    entry.description = $scope.input[i].description;
                    data[i] = entry;
                }
                $scope.data = data;
            };

            $rootScope.$on("formBuilder:input changed", function(e) {
                $scope.createForm();
            });

            $scope.createForm = function() {
                if (!$scope.input) {
                    return;
                }
                var element = document.getElementById("form");
                element.parentNode.removeChild(element);
                var form = document.createElement('form');
                var parent = document.getElementById('form-parent');
                form.setAttribute("id", "form");
                form.setAttribute("class", "choices");
                form.setAttribute("ng-submit", "submit()");
                $compile(form)($scope);
                parent.appendChild(form);

                for (var i = 0; i < $scope.input.length; i++) {
                    $scope.render($scope.input[i], i);
                }
                $scope.render({
                    type: "submit"
                }, $scope.input.length);
                var myOptions = $scope.input;
            };



            $scope.$watchCollection('input', function(newValue, oldValue) {

                $scope.createForm();
            });


            $scope.makeTextField = function(form, specs, index) {
                //initializing dom tags
                var input = document.createElement('input');
                var ul = document.createElement('ul');
                var li = document.createElement('li');
                var divOuter = document.createElement('div');
                var divInner = document.createElement('div');
                var label = document.createElement('label');
                var p = document.createElement('p');

                // configuring outer div
                ul.setAttribute("class", "simpleDemo");

                //configuring outer div
                li.setAttribute("class", "simpleDemo");
                divOuter.setAttribute("ng-click", "setGlobalIndex(" + index + ")");

                //configuring outer div
                divOuter.setAttribute("class", "form-group myFormItem");


                //configuring inner div
                divInner.setAttribute("class", "col-xs-8");

                //configuring label
                label.setAttribute("class", "col-xs-4 control-label");
                label.innerHTML = $scope.input[index].title;
                if (specs.required) {
                    label.innerHTML += "*";
                }
                $scope.general = {
                    index: 0
                };

                //configuring p
                p.setAttribute("class", "help-block");
                p.innerHTML = specs.description;

                // $scope.validate = function(val, type, required) {
                //     if (required) {
                //         switch (type) {
                //             case 'input':
                //                 if (val === undefined) {
                //                     console.log("field required");
                //                 }
                //                 break;
                //             default:
                //
                //         }
                //     }
                //
                // };

                //configuring input
                input.setAttribute("type", "text");
                input.setAttribute("placeholder", "placeholder");
                input.setAttribute("class", "form-control");
                input.setAttribute("ng-model", "input[" + index + "].value");
                // input.setAttribute("ng-change", "validate(input[" + index + "].value, input[" + index + "].type, input[" + index + "].required)");
                if (specs.required) {
                    input.required = true;
                }

                $compile(input)($scope);
                $compile(divOuter)($scope);
                divOuter.appendChild(label);
                divInner.appendChild(input);
                divInner.appendChild(p);
                divOuter.appendChild(divInner);
                li.appendChild(divOuter);
                ul.appendChild(li);
                form.appendChild(divOuter);
            };
            $scope.makeSubmitButton = function(form, specs, index) {
                var input = document.createElement('input');
                input.setAttribute("type", "submit");
                input.setAttribute("name", "button");
                input.setAttribute("class", "btn btn-primary");
                input.setAttribute("ng-click", "createForm()");
                $compile(input)($scope);
                form.appendChild(input);
            };

            $scope.makeRadioButton = function(form, specs, index) {
                var input = document.createElement('input');
                input.setAttribute("type", "radio");
                input.setAttribute("name", "button");
                input.setAttribute("class", "btn btn-primary");
                input.setAttribute("ng-click", "createForm()");
                $compile(input)($scope);
                form.appendChild(input);
            };
            $scope.render = function(value, index) {
                var form = document.getElementById('form');
                switch (value.type) {
                    case "input":
                        $scope.makeTextField(form, value, index);
                        break;
                    case "submit":
                        $scope.makeSubmitButton(form, value, index);
                        break;
                    case "radio":
                        $scope.makeRadioButton(form, value, index);
                        break;
                    default:
                }
            };
        },
        link: function(scope, element, attrs, fn) {}
    };
});
