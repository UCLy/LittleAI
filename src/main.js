//branche de gaetan
import Phaser from 'phaser'
import CanvasPlugin from 'phaser3-rex-plugins/plugins/canvas-plugin.js';

import GameScene from './scenes/GameScene'
import MenuScene from './scenes/MenuScene'
import LevelsScene from "./scenes/LevelsScene";
import Level1Scene from "./scenes/Level1Scene";
import Level2Scene from "./scenes/Level2Scene";
import Level3Scene from "./scenes/Level3Scene";
import Level4Scene from "./scenes/Level4Scene";
import Level5Scene from "./scenes/Level5Scene";

const config = {
	plugins: {
		global: [{
			key: 'rexCanvasPlugin',
			plugin: CanvasPlugin,
			start: true
		}],
	},
	type: Phaser.AUTO,
	width: 1250,
	height: 550,
	physics: {
		default: 'arcade',
		arcade: {
			gravity: { y: 200 }
		}
	},
	scene: [MenuScene,GameScene, LevelsScene, Level1Scene, Level2Scene, Level3Scene, Level4Scene, Level5Scene],
};

export default new Phaser.Game(config)
