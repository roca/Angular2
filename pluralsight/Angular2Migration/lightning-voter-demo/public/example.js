System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Joe, j;
    return {
        setters:[],
        execute: function() {
            Joe = (function () {
                function Joe(firstName, lastName) {
                    this.firstName = firstName;
                    this.lastName = lastName;
                }
                Joe.prototype.getFullName = function () {
                    // implementation
                    return this.firstName + " " + this.lastName;
                };
                Joe.prototype.setFullName = function (fullName) {
                    // implementation
                };
                Joe.prototype.saveName = function (cb) {
                    // Implementation
                    cb(this.firstName, this.lastName);
                };
                return Joe;
            }());
            ;
            j = new Joe("", "");
            j.setFullName("");
        }
    }
});
//# sourceMappingURL=example.js.map