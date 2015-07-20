var preload = function(izojump) {
};

preload.prototype = {
    preload: function() {
        this.load.json('data', 'data.json');

        this.load.image('land', 'images/point.png');
    },
    create: function() {
        this.game.state.start("menu");
    }
}
