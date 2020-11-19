module.exports = function (grunt) {
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true,
                presets: ["@babel/preset-env"],
            },
            dist: {
                files: {
                    'dist/easy-accessibility.js': 'index.js',
                },
            },
        },
        uglify: {
            dist: {
                files: {
                    'dist/easy-accessibility.min.js': 'dist/easy-accessibility.js'
                }
            }
        },
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("default", ["babel", "uglify"]);
}
