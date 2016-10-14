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
            $scope.dragVars = {
                dragging: false,
                beforeDrag: [],
                afterDrag: []
            };
            $scope.startDrag = function() {
                $scope.dragVars.dragging = true;
                $scope.dragVars.before = $scope.model.builder;
            };
            $scope.endDrag = function() {
                $scope.dragVars.dragging = false;
                $scope.dragVars.after = $scope.model.builder;
            };

            //left list
            $scope.model = {
                builder: []
            };
            $scope.dynamicPopover = {
                templateUrl: 'components/popoverTemplate.html',
            };
            // right list
            $scope.choices = [{
                "label": 'input',
                "display": '<div class="form-group ng-scope"><label for="" class="col-sm-4 control-label ng-binding" >Text Input</label><div class="col-sm-8"><input type="text" disabled="disabled" ng-model="inputText" validator-required="false" validator-group="" id="" class="form-control ng-pristine ng-valid" placeholder="placeholder"><p class="help-block ng-binding">description</p></div></div>',
            }, {
                "label": 'radio',
                "display": '<div class="form-group"> <label for="" class="col-sm-4 control-label">Radio</label> <div class="col-sm-8"> <div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value one </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class=""> value two </label> </div> <p class="help-block">description</p> </div> </div>',
            }];

            $scope.dragoverCallback = function(event, index, external, type) {
                $scope.startDrag();
                return true;

            };

            $scope.dropCallback = function(event, index, item, external, type, allowedType) {
                if (external) {
                    if (allowedType === 'itemType' && !item.label) return false;
                    if (allowedType === 'containerType' && !angular.isArray(item)) return false;
                }
                $scope.endDrag();
                return item;
            };


            $scope.$watch('model.builder.length', function(newVal, oldVal) {
                if ($scope.dragVars.dragging) {
                    return;
                }
                if (oldVal < newVal) {
                  for (var i = 0; i < $scope.model.builder.length; i++) {
                    var o2 = JSON.parse(JSON.stringify($scope.emptyObject));
                    if (!('type' in $scope.model.builder[i])){
                      angular.extend($scope.model.builder[i], o2);
                    }
                  }

                }

            });
        },
        link: function(scope, element, attrs, fn) {}
    };
});
