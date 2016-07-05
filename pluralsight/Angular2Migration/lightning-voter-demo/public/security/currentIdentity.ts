class CurrentIdentity {
  constructor(private $http, private $q) {}

  currentUser: null;

  setUser(user) {
    this.currentUser = user;
  }
  clearUser() {
    this.currentUser = null;
  }
  authenticated() {
    return !!this.currentUser;
  }
  updateUser(newUserObj) {
    let dfd = this.$q.defer();


    this.$http.put("/api/users/" + this.currentUser.id, newUserObj).then((response) => {
      this.currentUser.firstName = newUserObj.firstName;
      this.currentUser.lastName = newUserObj.lastName;
      dfd.resolve();
    }, (response) => {
      dfd.reject("Error Logging Out");
    });
    return dfd.promise;
  }
}

angular.module("app").service("currentIdentity", CurrentIdentity);
