function draw_player(ctx) {
    var spawn = ctx.data.player.spawn.col + '_' + ctx.data.player.spawn.row;

    ctx.player_location = spawn;

    ctx.player = ctx.add.sprite(ctx.surface[spawn].x - 40, ctx.surface[spawn].y - 63, 'player');

    ctx.player["col"] = ctx.data.player.spawn.col;
    ctx.player["row"] = ctx.data.player.spawn.row;
    ctx.player["jump"] = 0;
    ctx.player["move_x"] = null;
    ctx.player["move_y"] = null;

    ctx.universe.add(ctx.player);
};
