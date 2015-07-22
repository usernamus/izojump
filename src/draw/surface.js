function draw_surface(ctx) {
    ctx.surface_group = ctx.add.group();

    var c, r, x, y, link, sprite;

    for (c = 0; c <= ctx.data.surface.col + 1; c++) {
        for (r = 0; r <= ctx.data.surface.row + 1; r++) {
            x = c * 85 + r * 85;
            y = c * 43 - r * 43;

            link = c + '_' + r;

            ctx.surface[link] = {
                "link": link,
                "sprite": null,
                "x": x,
                "y": y,
                "available": false,
                "visible": false
            };

            if (ctx.data.lands.hasOwnProperty(link)) {
                sprite = ctx.add.sprite(x - 85, y - 43, ctx.data.lands[link]);

                ctx.surface[link].sprite = sprite;
                ctx.surface[link].available = true;
                ctx.surface[link].visible = true;

                ctx.surface_group.add(sprite);
            }
        }
    }

    ctx.surface_group.sort('y', Phaser.Group.SORT_ASCENDING);

    ctx.universe.add(ctx.surface_group);
}
