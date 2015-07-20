function draw_surface(ctx) {
    var c, r, x, y, cell, land;

    for (c = 0; c <= ctx.data.surface.col + 1; c += 1) {
        for (r = 0; r <= ctx.data.surface.row + 1; r += 1) {
            x = c * 42 + r * 42 - 42;
            y = c * 21 - r * 21 - 21;

            cell = c + '_' + r;

            ctx.surface[cell] = {
                "cell": cell,
                "x": x,
                "y": y,
                "land": null,
                "available": false,
                "visible": false
            };

            if (ctx.data.lands.hasOwnProperty(cell)) {
                land = ctx.add.sprite(x, y, ctx.data.lands[cell]);

                ctx.surface[cell].land = land;
                ctx.surface[cell].available = true;
                ctx.surface[cell].visible = true;

                ctx.surface.add(land);
            }
        }
    }
}
