// Gruntfile.js
module.exports = function(grunt) {

    // configure tasks
    grunt.initConfig({
        'mocha-chai-sinon': {
            build: {
                src: ['./specs/**/*.spec.js'],
                options: {
                    ui: 'bdd',
                    reporter: 'spec'
                }
            }
        }
    });

    // load required tasks
    grunt.loadNpmTasks("grunt-mocha-chai-sinon");

    // register tasks for execution chain
    grunt.registerTask('test', [
        'mocha-chai-sinon'
    ]);
};