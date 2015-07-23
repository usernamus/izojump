function move_target(ctx) {
    if (ctx.target) {
        var lands = Object.keys(ctx.data.lands);
        var random = Math.floor(Math.random() * lands.length) + 0;
        var link = ctx.surface[lands[random]].link;

        if (ctx.target_data.previous_target == link) {
            random++;

            if (random > lands.length - 1) {
                random = 0;
            }

            link = ctx.surface[lands[random]].link;
        }

        ctx.target_location = link;
        ctx.target_data.previous_target = link;

        var action = ctx.add.tween(ctx.target)
            .to({x: ctx.surface[link].x - 40, y: ctx.surface[link].y - 63, alpha: 1}, 5, Phaser.Easing.Linear.None)
            .to({alpha: 1}, 3000, Phaser.Easing.Linear.None)
            .to({alpha: 0}, 5, Phaser.Easing.Linear.None)
            .start();

        ctx.target_data.tween = action;

        action.onComplete.add(function() {
            move_target(ctx);
        }, ctx);
    }
}
