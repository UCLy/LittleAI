import Phaser from 'phaser'

import HelloWorldScene from './scenes/HelloWorldScene'

const config = {
	type: Phaser.AUTO,
	width: 1265,
	height: 567,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [HelloWorldScene]
}

export default new Phaser.Game(config)
