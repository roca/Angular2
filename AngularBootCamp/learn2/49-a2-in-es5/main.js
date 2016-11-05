(function (ng, app) {
  document.addEventListener('DOMContentLoaded', function () {
    ng.platformBrowserDynamic    // JS way of getting one of the parts of Angular
      .platformBrowserDynamic()  // same function call as in TS code.
      .bootstrapModule(app.AppModule);
  });
})(ng, window.app || (window.app = {}));
