var izojump = new Phaser.Game(400, 400, Phaser.AUTO, 'game');

izojump.state.add("preload", preload);
izojump.state.add("menu", menu);
izojump.state.add("game", game);

izojump.state.start("preload");
