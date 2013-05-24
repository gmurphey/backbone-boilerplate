// Set the require.js configuration for your application.
require.config({

  // Initialize the application with the main application file and the JamJS
  // generated configuration file.
  deps: ["main"],

  paths: {
    "lodash": "../assets/scripts/vendor/lodash/dist/lodash.underscore",
    "jquery": "../assets/scripts/vendor/jquery/jquery",
    "handlebars": "../assets/scripts/vendor/handlebars/handlebars",
    "backbone": "../assets/scripts/vendor/backbone/backbone",
    "backbone.layoutmanager": "../assets/scripts/vendor/layoutmanager/backbone.layoutmanager"
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

    "handlebars": {
      exports: "Handlebars"
    },

    "backbone.layoutmanager": {
      deps: ["backbone"],
      exports: "Backbone.Layout"
    }
  }

});
