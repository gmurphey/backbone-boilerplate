module.exports = function(grunt) {

  grunt.initConfig({

    jshint: {
      options: {
        jshintrc: ".jshintrc"
      },

      files: ["Gruntfile.js", "app/**/*.js", "test/qunit/tests/**/*.js"]
    },

    requirejs: {
      compile: {
        options: {
          mainConfigFile: "app/config.js",
          out: "dist/debug/require.js",
          name: "config",
          wrap: false
        }
      }
    },

    concat: {
      options: {
        separator: ";"
      },

      all: {
        src: ["vendor/js/libs/almond.js", "dist/debug/templates.js", "dist/debug/require.js"],
        dest: "dist/debug/require.js",
      }
    },

    cssmin: {
      all: {
        src: ["dist/debug/index.css"],
        dest: "dist/release/"
      }
    },

    uglify: {
      all: {
        "dist/release/require.js": ["dist/debug/require.js"]
      }
    },

    connect: {
      options: {
        hostname: "*",
        port: 80,
        keepalive: true,

        middleware: function (connect, options) {
          return [
            require("connect-conductor").route(options),
            connect.static(options.base)
          ];
        }
      },

      all: { },

      debug: {
        options: {
          routes: {
            "/app/styles/*path":      "/dist/debug/[path]",
            "/app/*path":             "/dist/debug/[path]",
            "/vendor/js/libs/*path":  "/dist/debug/[path]"
          }
        }
      },

      release: {
        options: {
          routes: {
            "/app/styles/*path":      "/dist/release/[path]",
            "/app/*path":             "/dist/release/[path]",
            "/vendor/js/libs/*path":  "/dist/release/[path]"
          }
        }
      }
    },

    qunit: {
      all: ["test/qunit/*.html"]
    },

    less: {
      files: {
        "app/styles/index.css": "app/styles/less/index.less"
      }
    },

    watch: {
      all: {
        files: ["Gruntfile.js", "app/**/*.js", "test/qunit/tests/**/*.js"],
        tasks: ["jshint", "qunit"]
      },

      css: {
        files: ["app/styles/less/**/*.less"],
        tasks: ["less"]
      }
    },

    clean: ["dist/"]
  });

  grunt.registerTask("test", ["jshint", "qunit"]);
  grunt.registerTask("debug", ["clean", "jshint", "requirejs", "concat"]);
  grunt.registerTask("release", ["debug", "uglify", "cssmin"]);

  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-requirejs");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-qunit");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-connect");
};
