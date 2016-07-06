var Users = (function () {
    function Users($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }
    Users.prototype.createNewUser = function (newUser) {
        return this.$http.post("/api/users", newUser);
    };
    Users.prototype.getAllUsers = function () {
        var dfd = this.$q.defer();
        this.$http.get("/api/users").then(function (response) { return dfd.resolve(response.data); });
        return dfd.promise;
    };
    return Users;
}());
angular.module("app").service("users", Users);
//# sourceMappingURL=users.js.map