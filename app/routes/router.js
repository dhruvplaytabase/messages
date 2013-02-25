require('app/routes/messages_route');

/* Define a resource called messages off of root of application */

App.Router.map(function() {
  this.route("about");
  this.resource("messages");
});
