angular.module("app", ["formBuild"]);
angular.module("app").controller("SimpleDemoController", function($compile, $scope, $sce, builder) {

    var choice = {
        "type": 'radio3',
        "display": '<div class="form-group"><label for="" class="col-sm-4 control-label" >namelabel_</label><div class="col-sm-8"><input type="text" ng-model="_name" class="form-control placeholder="placeholder"></div><label for="" class="col-sm-4 control-label" >agelabel_</label><div class="col-sm-8"><input type="text" ng-model="_age"  class="form-control" placeholder="placeholder"><p class="help-block">description</p></div></div>',
        popoverTemplateUrl: 'components/tds.html',
        htmlTemplate: './sample.html',
        schema: ['name','namelabel', "age", "agelabel"]
    };
    builder.insert(choice);
});




angular.module("formBuild", ["dndLists", "ui.bootstrap"]);
