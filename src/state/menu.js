var menu = function(izojump) {
};

menu.prototype = {
    create: function() {
        this.stage.backgroundColor = '#fbfaf7';

        this.input.onDown.addOnce(function() {
            this.game.state.start("game");
        }, this);
    }
}
