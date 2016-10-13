angular.module('formBuild').directive('ngFormBuilder', function($compile) {
    return {
        restrict: 'E',
        replace: true,
        scope: {
          output: '='
        },
        templateUrl: './formBuilder.html',
        controller: function($scope) {
          //change default settings in this object
          $scope.emptyObject = {
              type: "",
              value: "",
              required: false,
              title: "title here",
              description: "description here"
          };



          $scope.model = {
              'builder': []
          };

          $scope.components = {
              list: []
          };

          $scope.dynamicPopover = {
              content: 'Hello, World!',
              templateUrl: 'components/popoverTemplate.html',
              test: $scope.components.list
          };
          $scope.choices = [{
              "label": 'input',
              "display": '<div class="form-group ng-scope"><label for="" class="col-sm-4 control-label ng-binding" >Text Input</label><div class="col-sm-8"><input type="text" disabled="disabled" ng-model="inputText" validator-required="false" validator-group="" id="" class="form-control ng-pristine ng-valid" placeholder="placeholder"><p class="help-block ng-binding">description</p></div></div>',
          },
          {
              "label": 'radio',
              "display": '<div class="form-group"> <label for="" class="col-sm-4 control-label">Radio</label> <div class="col-sm-8"> <div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value one </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class=""> value two </label> </div> <p class="help-block">description</p> </div> </div>',
          }];
          $scope.submit = function() {
              for (var i = 0; i < $scope.model.builder.length; i++) {
                  console.log($scope.components.list[i]);
              }
          };

          $scope.click = function() {
              window.alert("sayegh");
          };

          // $scope.createForm = function() {
          //     var element = document.getElementById("form");
          //     element.parentNode.removeChild(element);
          //     var form = document.createElement('form');
          //     var parent = document.getElementById('form-parent');
          //     form.setAttribute("id", "form");
          //     form.setAttribute("class", "choices");
          //     form.setAttribute("ng-submit", "submit()");
          //     $compile(form)($scope);
          //     parent.appendChild(form);
          //
          //     for (var i = 0; i < $scope.components.list.length; i++) {
          //         $scope.render($scope.components.list[i], i);
          //     }
          //     $scope.render({
          //         type: "submit"
          //     }, $scope.model.builder.length);
          //     var myOptions = $scope.components.list;
          // };


          oldlength = $scope.model.builder.length;

          $scope.$watch('model.builder.length', function(newValue, oldValue) {
              if (oldlength < newValue) {
                  var o2 = JSON.parse(JSON.stringify($scope.emptyObject));
                  $scope.components.list.push(o2);
              }
              $scope.output = $scope.components.list;
              console.log($scope.output);
          });


          $scope.makeTextField = function(form, specs, index) {
              // getting specs specific for this object
              var myOptions = $scope.components.list[index];

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
              divOuter.setAttribute("uib-popover-template", "dynamicPopover.templateUrl");
              divOuter.setAttribute("popover-title", "Text Field");
              divOuter.setAttribute("popover-placement", "bottom-right");
              divOuter.setAttribute("ng-click", "setGlobalIndex(" + index + ")");

              //configuring outer div
              // uib-popover-template="dynamicPopover.templateUrl" popover-title="{{components.list[$index].title}}" popover-placement="bottom-right"
              divOuter.setAttribute("class", "form-group myFormItem");


              //configuring inner div
              divInner.setAttribute("class", "col-xs-8");

              //configuring label
              label.setAttribute("class", "col-xs-4 control-label");
              label.innerHTML = $scope.components.list[index].title;
              if (myOptions.required) {
                  label.innerHTML += "*";
              }
              $scope.general = {
                  index: 0
              };
              $scope.setGlobalIndex = function(index) {
                  $scope.general.index = index;
              };
              //configuring p
              p.setAttribute("class", "help-block");
              p.innerHTML = myOptions.description;


              //configuring input
              input.setAttribute("type", "text");
              input.setAttribute("placeholder", "placeholder");
              input.setAttribute("class", "form-control");
              input.setAttribute("ng-model", "components.list[" + index + "].value");
              if (myOptions.required) {
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

          $scope.$watch('components.list.length', function(newVal, oldVal) {
              for (var i = 0; i < $scope.components.list.length; i++) {
                $scope.components.list[i].type =$scope.model.builder[i].label;
              }
              // $scope.createForm();
              console.log($scope.components.list);

          });
        },
        link: function(scope, element, attrs, fn) {}
    };
});
