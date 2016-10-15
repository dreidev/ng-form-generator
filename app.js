angular.module("app", ["formBuild"]);
angular.module("app").controller("SimpleDemoController", function($compile, $scope, $sce, builder) {

    var choice = {
        "type": 'radio3',
        "display": '<div class=""><div class="form-group"><label for="" class="col-sm-4 control-label">title</label><div class="col-sm-8"><input type="text" disabled="disabled" class="form-control" placeholder="placeholder"><p class="help-block">description</p></div></div></div>',
        popoverTemplateUrl: 'components/sample.html',
        htmlTemplate: './sample.html',
        // schema: ['name','namelabel', "age", "agelabel"]
    };
    builder.insert(choice);
});




angular.module("formBuild", ["dndLists", "ui.bootstrap"]);
