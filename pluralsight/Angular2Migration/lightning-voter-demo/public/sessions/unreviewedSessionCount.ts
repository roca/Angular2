class UnreviewedSessionCount {
  constructor(public sessions, public currentIdentity) {}
  value: number =  0;
  updateUnreviewedSessionCount() {
    this.sessions.getUnreviewedCount(this.currentIdentity.currentUser.id)
        .then((response) => {
      this.value = response.data.count;
    });
  }
}
angular.module("app").service("unreviewedSessionCount", UnreviewedSessionCount);
