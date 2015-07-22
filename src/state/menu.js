var menu = function(izojump) {
};

menu.prototype = {
    create: function() {
        this.stage.backgroundColor = '#fbfaf7';

        var button = this.add.text(this.world.centerX - 38, this.world.centerY - 25, "Play", {
            font: "40px Arial",
            fill: "#747063"
        });

        button.inputEnabled = true;
        button.input.useHandCursor = true;

        button.events.onInputDown.add(function() {
            this.game.state.start("game");
        }, this);
    }
}
