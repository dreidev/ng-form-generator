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
                // $scope.createForm();
                console.log(data);
            };

            $scope.choices = [{
                "type": 'input',
                "display": '<div class="form-group ng-scope"><label for="" class="col-sm-4 control-label ng-binding" >Text Input</label><div class="col-sm-8"><input type="text" disabled="disabled" ng-model="inputText" validator-required="false" validator-group="" id="" class="form-control ng-pristine ng-valid" placeholder="placeholder"><p class="help-block ng-binding">description</p></div></div>',
            }, {
                "type": 'radio',
                "display": '<div class="form-group"> <label for="" class="col-sm-4 control-label">Radio</label> <div class="col-sm-8"> <div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value one </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class=""> value two </label> </div> <p class="help-block">description</p> </div> </div>',
            }];
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
              var req = "";
              if($scope.input[index].required){
                req = "required";
              }
              var element = $compile('<div class="form-group myFormItem"><label for="" class="col-sm-4 control-label ng-binding" >'+$scope.input[index].title +'</label><div class="col-sm-8"><input id="'+"input"+index+'" type="text" ng-model="input['+index+'].value" class="form-control" placeholder="placeholder" '+req +'><p class="help-block">description</p></div></div>')($scope);
              angular.element(document.getElementById('form')).append(element);
            };
            $scope.makeRadioButton = function(form, specs, index) {
              var req = "";
              if($scope.input[index].required){
                req = "required";
              }
              var element = $compile('<div class="form-group myFormItem"> <label for="" class="col-sm-4 control-label">'+$scope.input[index].title +'</label> <div class="col-sm-8"><div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value one </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class="" '+req +'> value two </label> </div> <p class="help-block">description</p> </div> </div>')($scope);
              angular.element(document.getElementById('form')).append(element);
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
