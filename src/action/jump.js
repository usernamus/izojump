function jump(ctx, direction) {
    var player = ctx.player;
    var c = player.col;
    var r = player.row;
    var shift = 0;

    switch (direction) {
        case "left":
            r--;
            shift = 100;
            break;
        case "right":
            r++;
            shift = 50;
            break;
        case "up":
            c--;
            shift = 50;
            break;
        case "down":
            c++;
            shift = 100;
            break;
    }

    var cell = c + '_' + r;

    if (player.jump < 2) {
        if (ctx.surface[cell]) {
            player.jump++;

            if (player.jump > 1 && player.move_x && player.move_y) {
                player.move_x.stop();
                player.move_y.stop();
                shift = shift + 20;
            }

            x = ctx.surface[cell].x;
            y = ctx.surface[cell].y;

            ctx.cursor.x = x - 40;
            ctx.cursor.y = y - 19;
            ctx.cursor.visible = true;

            move_x = ctx.add.tween(player)
                .to({x: x - 40}, 500, Phaser.Easing.Linear.None)
                .start();

            move_y = ctx.add.tween(player)
                .to({y: y - shift - 63}, 250, Phaser.Easing.Cubic.Out)
                .to({y: y - 63}, 250, Phaser.Easing.Cubic.In)
                .start();

            player.col = c;
            player.row = r;
            player.move_y = move_y;
            player.move_x = move_x;

            move_x.onComplete.add(function() {
                if (!ctx.surface[cell].available) {
                    death(ctx);
                }

                ctx.player_location = c + '_' + r;
                ctx.cursor.visible = false;
                player.jump = 0;
            }, player);
        }
    }
}
