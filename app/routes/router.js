require('app/routes/messages_route');

/* 
  The route matching behavior of this
  application.

  Child routes are entered by passing through
  their parents. This means parent routes can be used
  to fetch data and build parent view hierarchies
  and you can be sure this structure will occur whether
  you are starting the application directly at a particular
  route or entering that route at a later point.
*/
App.Router.map(function() {
  this.resource("messages");
});
