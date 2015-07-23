var game = function(izojump) {
};

game.prototype = {
    init: function(info) {
        this.universe = this.add.group();

        this.surface = {};

        this.cursor = {};

        this.player = {};
        this.player_location = null;

        this.target = {};
        this.target = true;
        this.target_location = null;
        this.target_data = {
            "tween": null,
            "previous_target": null
        };

        this.keyboard = true;
    },
    create: function() {
        this.stage.backgroundColor = '#fbfaf7';

        this.data = this.cache.getJSON('data');

        draw_surface(this);

        draw_target(this);
        move_target(this);

        draw_cursor(this);
        draw_player(this);

        this.universe.x = this.world.centerX - this.surface_group.width;
        this.universe.y = this.world.centerY - 50;

        this.input.keyboard.addCallbacks(this, null, function() {
            this.keyboard = true;
        });
    },
    update: function() {
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.keyboard = false;
            jump(this, 'left');
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.keyboard = false;
            jump(this, 'right');
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.keyboard = false;
            jump(this, 'up');
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.keyboard = false;
            jump(this, 'down');
        }
    }
};
