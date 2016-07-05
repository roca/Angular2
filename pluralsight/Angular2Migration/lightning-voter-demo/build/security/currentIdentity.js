var CurrentIdentity = (function () {
    function CurrentIdentity($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    CurrentIdentity.prototype.setUser = function (user) {
        this.currentUser = user;
    };
    CurrentIdentity.prototype.clearUser = function () {
        this.currentUser = null;
    };
    CurrentIdentity.prototype.authenticated = function () {
        return !!this.currentUser;
    };
    CurrentIdentity.prototype.updateUser = function (newUserObj) {
        var _this = this;
        var dfd = this.$q.defer();
        this.$http.put("/api/users/" + this.currentUser.id, newUserObj).then(function (response) {
            _this.currentUser.firstName = newUserObj.firstName;
            _this.currentUser.lastName = newUserObj.lastName;
            dfd.resolve();
        }, function (response) {
            dfd.reject("Error Logging Out");
        });
        return dfd.promise;
    };
    return CurrentIdentity;
}());
angular.module("app").service("currentIdentity", CurrentIdentity);
//# sourceMappingURL=currentIdentity.js.map