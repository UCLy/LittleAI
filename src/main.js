import Phaser from 'phaser'

import GameScene from './scenes/GameScene'
import MenuScene from './scenes/MenuScene'

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
	scene: [GameScene, MenuScene],
};

export default new Phaser.Game(config)
