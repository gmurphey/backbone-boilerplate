// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["main"],

  paths: {
    "lodash": "../vendor/js/lodash/dist/lodash.underscore",
    "jquery": "../vendor/js/jquery/jquery",
    "handlebars": "../vendor/js/handlebars/handlebars",
    "backbone": "../vendor/js/backbone/backbone",
    "backbone.layoutmanager": "../vendor/js/layoutmanager/backbone.layoutmanager"
  },

  map: {
    "*": { "underscore": "lodash" }
  },

  shim: {
    "backbone": {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },

    "lodash": {
      exports: "_"
    },

    "backbone.layoutmanager": ["handlebars", "backbone"]
  }

});
