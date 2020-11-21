import Phaser from 'phaser'
import GameScene from "./GameScene";

export default class MenuScene extends Phaser.Scene
{
    constructor()
    {
        super('menu-scene')



    }

    preload()
    {
        this.load.image('menu', './assets/play.png')


    }

    create()
    {



        //passer de la scéne menu a scéne game-scene
        var start = this.add.image(600, 300, 'menu');
        start.setInteractive ({useHandCursor: true});
        start.on ('pointerdown', () => this.scene.start("game-scene"));


    }



}
