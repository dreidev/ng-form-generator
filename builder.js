angular.module('formBuild').factory('builder', function() {
    return {
        // choices: [{
        //     type: 'radio2',
        //     display: '<div  class="myFormItem" class="form-group"> <label for="" class="col-sm-4 control-label"> ---title---</label> <div class="col-sm-8"> <div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class=""> value two </label> </div> <p class="help-block">---description---</p> </div> </div>',
        //     popoverTemplateUrl: 'components/sample.html',
        //     htmlTemplate: './abstract.html',
        //     schema: ['title', 'description']
        // },
        // {
        //     "type": 'radio3',
        //     "display": '<div class="myFormItem" class="form-group"> <label for="" class="col-sm-4 control-label">TITLE</label> <div class="col-sm-8"> <div class="radio"> <label class=""><input name="" validator-group="" value="value one" type="radio" class=""> value </label> </div> <div class="radio"> <label class=""><input name="" validator-group="" value="value two" type="radio" class=""> R33333 </label> </div> <p class="help-block">description</p> </div> </div>',
        //     popoverTemplateUrl: 'components/radioInput.html',
        //     htmlTemplate: './abstract0.html',
        //     schema: {
        //
        //     }
        // }, ],
        choices: [],
        insert: function (choice) {
          this.choices.push(choice);
        }
    };
});
