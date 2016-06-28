angular.module('app').component('results', {

    templateUrl: "/admin/results.html",
    bindings: {
      sessionsByVoteDesc: "=allSessions"
    },
    controller: function(allSessions) {
      this.sessionsByVoteDesc.sort(function(session1, session2) {
        // reverse order
        return session2.voteCount - session1.voteCount;
      });
    }
});
