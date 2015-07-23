module.exports = function(grunt) {
    grunt.initConfig({
        uglify: {
            all: {
                files: {
                    'script/game.min.js': [
                        'src/state/preload.js',
                        'src/state/menu.js',
                        'src/state/game.js',
                        'src/action/jump.js',
                        'src/action/death.js',
                        'src/action/move_target.js',
                        'src/draw/surface.js',
                        'src/draw/target.js',
                        'src/draw/cursor.js',
                        'src/draw/player.js',
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
