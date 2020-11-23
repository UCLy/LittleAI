import Phaser from 'phaser'
import GameScene from "./GameScene";

export default class Levelscene extends Phaser.Scene
{
    constructor()
    {
        super('level-scene')



    }

    preload()
    {




    }

    create()
    {


        //titre de la page
        var titrejeux = this.add.text(450, 10, 'LEVEL', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:100});

        //crée le rectangle pour un level
        var color1 = new Phaser.Display.Color(250, 0, 0);
        var rectlevel0 = this.add.rectangle(30, 230, 10, 80, color1.color);
        var level0 = this.add.text(40, 200, 'LEVEL\n  0', { fontFamily: 'OCR A Std, monospace',fontSize:29});
        level0.setInteractive ({useHandCursor: true});
        level0.on ('pointerdown', () => this.scene.start("game-scene"));
        level0.on ('pointerover', () =>  {rectlevel0.width = 100});
        level0.on ('pointerout', () =>  {rectlevel0.width = 10});

















    }








}
