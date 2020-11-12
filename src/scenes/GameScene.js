import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene
{

	constructor()
	{
		super('game-scene')
	}

	preload()
    {
        this.load.image('carre', './game-icons/carre.png')
        this.load.image('circle', './game-icons/circle.png')
        this.load.image('losange', './game-icons/losange.png')
        this.load.image('triangle', './game-icons/triangle.png')
        this.load.image('button_menu', './assets/engrenage.png')
    }

    create()
    {
        this.add.image(357.5, 480, 'carre')
        this.add.image(540.5, 480, 'circle')
        this.add.image(723.5, 480, 'losange')
        this.add.image(906.5, 480, 'triangle')
        this.button_menu = this.add.image(1170, 80, 'button_menu')
    }
}
