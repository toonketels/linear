module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-contrib-jshint');


  // Project configuration.
    grunt.initConfig({
        mochaTest: {
            'spec': {
                options: {
                    reporter: 'spec',
                    // tests are quite slow as thy spawn node processes
                    timeout: 10000
                },
                src: ['test/**/*.js']
            }
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc',
                reporter: require('jshint-stylish')
            },
            target: ['src/**/*.js']
        }
    });

  // Default task.
  grunt.registerTask('test', ['mochaTest']);
};
