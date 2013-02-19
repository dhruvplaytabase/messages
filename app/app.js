/*
 * Hey! This is an Ember application. It's built using a 
 * neuter task (see this project's Gruntfile for what that means).
 *
 * `require`s in this file will be stripped and replaced with
 * the string contents of the file they refer to wrapped in
 * a closure.
 *
 * Each file contains its own commenting, so feel free to crack
 * them open if you want more information about what is going on.
*/

/*
 * These are the dependencies for an Ember application
 * and they have to be loaded before any application code.
*/
require('dependencies/jquery-1.8.3');

/*
 * Since we're precompiling our templates, we only need the
 * handlebars-runtime microlib instead of the
 * entire handlebars library and its string parsing functions.
*/
require('dependencies/handlebars-runtime');

/* Ember.JS is our client MVC framework. */
require('dependencies/ember');

/* Ember Data is the data component of the framework */
require('dependencies/ember-data');

/*
  this file is generated as part of the build process.
  If you haven't run that yet, you won't see it.

  It is excluded from git commits since it's a 
  generated file.
*/
require('dependencies/compiled/templates');

require('dependencies/bootstrap');

/*
  Creates a new instance of an Ember application and
  specifies what HTML element inside index.html Ember
  should manage for you.
*/
window.App = Ember.Application.create({
  rootElement: window.TESTING ? '#qunit-fixture' : '#app'
});

if (window.TESTING) {
  window.App.deferReadiness();
}

App.store = DS.Store.create({
  revision: 11
});

// Models 
require('app/models/message');

// Views

// Controllers
require('app/controllers/messages');

// Router 
require('app/routes/router');