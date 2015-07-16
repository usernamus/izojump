var game = function(izojump) {
};

game.prototype = {
    init: function(info) {
        this.keyboard = true;
    },
    create: function() {
        this.stage.backgroundColor = '#fbfaf7';

        this.input.keyboard.addCallbacks(this, null, function() {
            this.keyboard = true;
        });
    },
    update: function() {
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            this.keyboard = false;
            console.log('Left');
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            this.keyboard = false;
            console.log('Right');
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            this.keyboard = false;
            console.log('Up');
        }
        if (this.keyboard && this.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            this.keyboard = false;
            console.log('Down');
        }
    }
};
