/*
  The parent Route of all other Todo related routes.
  Entering this route builds the outer dashboard
  parts of the application, but not the 
  list of Todos, which has different data and 
  behaviors based on the child route you enter.

  The list of todos will be populated by the content
  of the all/active/completed todos route
  depending on which state you're in.
*/

App.MessagesRoute = Ember.Route.extend({

  /* 
    The data used to render the 
    outer dashboard parts of the application.

    This hook should be implemented on all routes,
    where the default model implementation doesn't suffice

    See http://emberjs.com/guides/routing/specifying-a-routes-model/
    for what that behavior is.

    Here, I'm returning an array-like object of all todos in the store 
  */
  model: function() {
    return App.Message.find();
  },

  /*
    Events that can occur in any Todo state.
    If a matching event name is not implemented
    on a controller, it will bubble to here.
  */
  events: {

  }

});
