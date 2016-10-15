angular.module('formBuild').factory('builder', function() {
    return {
        templates: [],
        choices: [{
            "type": 'radio2',
            "display": '<div uib-popover-template="\'components/sample.html\'" popover-title="Text Field" data-toggle="popover" data-trigger="focus" popover-placement="bottom-right" class="form-group"> <label for="" class="col-sm-4 control-label">TITLE</label> <div class="col-sm-8"> <div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class=""> value two </label> </div> <p class="help-block">description</p> </div> </div>',
            popoverTemplateUrl: 'components/radioInput.html',
            htmlTemplate: './abstract.html',
        },
        {
            "type": 'radio3',
            "display": '<div uib-popover-template="\'components/sample.html\'" popover-title="Text Field" data-toggle="popover" data-trigger="focus" popover-placement="bottom-right" class="form-group"> <label for="" class="col-sm-4 control-label">RADIO 3</label> <div class="col-sm-8"> <div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class=""> R33333 </label> </div> <p class="help-block">description</p> </div> </div>',
            popoverTemplateUrl: 'components/radioInput.html',
            htmlTemplate: './abstract0.html',
        }, ]
    };
});
