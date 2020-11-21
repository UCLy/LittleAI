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




        var start = this.add.image(600, 300, 'menu');
        //this.input.once('pointerdown', function () {

          //  console.log('From SceneA to SceneB');

            //this.scene.start('./scenes/GameScene');

        //}, this);




        start.setInteractive ({useHandCursor: true});
        start.on ('pointerdown', () => this.scene.start("game-scene"));


    }



}
