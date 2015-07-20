module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            all: {
                files: {
                    'script/game.min.js': [
                        'src/draw/surface.js',
                        'src/state/preload.js',
                        'src/state/menu.js',
                        'src/state/game.js',
                        'src/izojump.js'
                    ]
                }
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000,
                    keepalive: true
                }
            }
        }
    });

    require('load-grunt-tasks')(grunt);
    grunt.registerTask('default', []);
};
