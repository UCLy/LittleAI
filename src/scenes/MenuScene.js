import Phaser from 'phaser'

export default class MenuScene extends Phaser.Scene
{
    constructor()
    {
        super('menu-scene')
    }

    preload()
    {
        this.load.image('menu', './assets/menu.png')
    }

    create()
    {
        this.add.image(400, 300, 'menu')
    }
}
