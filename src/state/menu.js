var menu = function(izojump) {
};

menu.prototype = {
    create: function() {
        this.stage.backgroundColor = '#fbfaf7';

        var play_button = this.add.text(this.world.centerX, this.world.centerY, "Play", {font: "28px Arial", fill: "#222"});
        play_button.anchor.set(0.5);
        play_button.inputEnabled = true;
        play_button.input.useHandCursor = true;

        play_button.events.onInputDown.add(function() {
            this.game.state.start("game");
        }, this);
    }
}
