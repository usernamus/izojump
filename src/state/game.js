var game = function(izojump) {
};

game.prototype = {
    init: function(info) {
        this.surface = {};
        this.keyboard = true;
    },
    create: function() {
        this.stage.backgroundColor = '#fbfaf7';

        this.data = this.cache.getJSON('data');

        this.surface = this.add.group();

        draw_surface(this);

        this.surface.sort('y', Phaser.Group.SORT_ASCENDING);
        this.surface.x = this.world.centerX - (this.surface.width * 1.5);
        this.surface.y = this.world.centerY;

        this.input.keyboard.addCallbacks(this, null, function() {
            this.keyboard = true;
        });
    },
    update: function() {
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.keyboard = false;
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.keyboard = false;
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.keyboard = false;
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.keyboard = false;
        }
    }
};
