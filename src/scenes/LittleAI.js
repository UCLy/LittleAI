// var game = new Phaser.Game(800, 600, Phaser.CANVAS, 'phaser-example', { preload: preload, create: create, update: update, render: render });
var game = new Phaser.Game(1920, 1080, Phaser.CANVAS, 'phaser-game', { preload: preload, create: create, update: update, render: render });

function preload() {
game.load.image('title', '/img/log.png');

}

function create() {

    // game.add.image(0, 0, 'star');

    this.add.image(400,0 ,'title')

}

function update() {
}

function render () {

    // game.debug.text('Click / Tap to go fullscreen', 270, 16);
    // game.debug.text('Click / Tap to go fullscreen', 0, 16);

    game.debug.inputInfo(32, 32);
    // game.debug.pointer(game.input.activePointer);

}
