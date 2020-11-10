import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene
{

	constructor()
	{
		super('game-scene')
	}

	preload()
    {
        this.load.image('dude', './assets/dude.png')
    }

    create()
    {
        this.add.image(400, 300, 'dude')
    }
}
