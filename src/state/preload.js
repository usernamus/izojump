var preload = function(izojump) {
};

preload.prototype = {
    init: function() {
        this.game.scale.scaleMode = Phaser.ScaleManager.EXACT_FIT;
    },
    preload: function() {
        this.load.json('data', 'data.json');

        this.load.image('cursor', 'images/cursor.png');
        this.load.image('land', 'images/land.png');
        this.load.image('player', 'images/player.png');
        this.load.image('target', 'images/target.png');
    },
    create: function() {
        this.game.state.start("menu");
    }
}
