# ng-form-generator

A drag and drop form generator

ng-form-generator is the perfect solution for developers looking to create a form builder for their websites

# Installation
In order for ng-form-generator to work it requires angular, bootstrap and ui-bootstrap

After you've made sure those 3 exist in your project, install with npm:
```sh
$ npm install ng-form-generator
```
then include it in your project

```sh
    <script src="node_modules/ng-form-generator/ng-form-generator.min.js"></script>
    <link rel="stylesheet" href="node_modules/ng-form-generator/ng-form-generator.min.css">

```

# Usage
Unlike other form builders out there, ng-form-generator is actually very simple to use and very light weight.

Include the formBuild as a dependency:
```sh
    angular.module('your_module', ['formBuild'])
```

Use the ng-form-builder directive wherever you need to place the builder
```sh
    <ng-form-builder output="output"></ng-form-builder>
```
The directive takes output as a parameter, which is used to store the model of the currently formed form. Store this to your backend to retrieve the form later.

Reading the form you've created requires the use of ng-form-reader.
```sh
    <ng-form-reader input="input" data="data"></ng-form-reader>
```
The directive takes as input, a model object that was created by the ng-form-builder directive and it outputs the actual form values with details to data.


# Creating your own form item
Creating your own form item is also easy as pie.

Inject builder service into your controller
```sh

angular.module("your_module").controller("your_controller", function($scope, builder)
```

Then using the builder function `insert`, insert an object with the following data:

```sh
var customTab = {
        type: 'radio3',
        display: '<div class=""><div class="form-group"><label for="" class="col-sm-4 control-label">title</label><div class="col-sm-8"><input type="text" disabled="disabled" class="form-control" placeholder="placeholder"><p class="help-block">description</p></div></div></div>',
        popoverTemplateUrl: 'popover/sample.html',
        htmlTemplate: 'htmlTemplates/sample.html',
    };
    builder.insert(customTab);
```


Where:
  - `type` is a unique name for this type of tab
  - `display` is the stringified HTML that is used to display the tab in the choices list
  - `popoverTemplateUrl` is the url to the popover template that appears when clicked on your custom tab
  - `htmlTemplate` is the url to the html file of your custom tab

# Creating a popover template
When creating your popover template, bind everything to `$scope.object`

Example:
```sh
<div class="form-group">
  <label>Popup Title:</label>
  <input type="text" ng-model="object.title" class="form-control" />
  <label>Required Field:</label>
  <input type="checkbox" ng-model="object.required" />
  <input type="text" ng-model="object.description" />
  <delete />
</div>
```
To add a delete button to your popover template like the one in the demo, just
add `<delete />` to your popover template
# Creating an HTML template
When creating your html template, bind everything to `$scope.object`

Note that this is the same `$scope.object` you're binding to data to in the
popover template
Example:
```sh
<div class="">
    <div class="form-group">
        <label for="" class="col-sm-4 control-label">{{object.title}}
            <span ng-show="object.required">*</span>
        </label>
        <div class="col-sm-8"><input type="text" class="form-control" ng-model="object.models" placeholder="placeholder" required="object.required">
            <p class="help-block">{{object.description}}</p>
        </div>
    </div>
</div>

```
