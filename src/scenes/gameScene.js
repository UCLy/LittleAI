import Phaser from 'phaser'

import mainScene from ''
import gameScene from ''

const config  = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade',
        arcade: { y: 300 }
    },
    scene: [Game]
}

export default class Game extends Phaser.Scene
{
	constructor()
	{
		super('game-scene')
	}

	preload()
    {

    }

    create()
    {

    }
}
