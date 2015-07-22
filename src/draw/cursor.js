function draw_cursor(ctx) {
    var spawn = ctx.data.player.spawn.col + '_' + ctx.data.player.spawn.row;

    ctx.cursor = ctx.add.sprite(ctx.surface[spawn].x - 40, ctx.surface[spawn].y - 19, 'cursor');

    ctx.cursor.visible = false;

    ctx.universe.add(ctx.cursor);
};
