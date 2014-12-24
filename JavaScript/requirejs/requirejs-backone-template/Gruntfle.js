module.exports = function(grunt) {

    grunt.initConfig({
        requirejs:{
            development:{
                options:{
                    appDir:"app",
                    baseUrl:"scripts",
                    dir:"dist",
                    mainConfigFile:"./app/scripts/main.js",
                    name:"main",
                    optimizeCss:"standard"
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('default', 'requirejs');

};