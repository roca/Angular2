class Users {

  constructor(public $http, public $q) {}

  createNewUser(newUser) {
    return this.$http.post("/api/users", newUser);
  }

  getAllUsers() {
    let dfd = this.$q.defer();

    this.$http.get("/api/users").then((response) => dfd.resolve(response.data));

    return dfd.promise;
  }
}
angular.module("app").service("users", Users);
