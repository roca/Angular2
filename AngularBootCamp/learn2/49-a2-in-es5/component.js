(function (ng, app) {
  app.AppComponent =
    ng.core.Component({
      selector: 'my-app',
      template: '<h1>Angular 2 App in plain JavaScript</h1>'
    })
      .Class({
        constructor: function () {

        }
      });
})(ng, window.app || (window.app = {}));
