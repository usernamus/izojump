function death(ctx) {
    ctx.player_location = null;
    ctx.keyboard = false;

    ctx.add.tween(ctx.player)
        .to({alpha: 1}, 200, Phaser.Easing.Linear.None)
        .to({alpha: 0}, 800, Phaser.Easing.Linear.None)
        .start();

    var move = ctx.add.tween(ctx.player)
        .to({y: ctx.player.y - 40}, 1000, Phaser.Easing.Linear.None)
        .to({y: ctx.player.y - 20}, 1000, Phaser.Easing.Linear.None)
        .start();

    move.onComplete.add(function() {
        ctx.game.state.start("menu");
    });
}
