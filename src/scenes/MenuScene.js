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



        //crée le rectangle rouge qui englobe le play
        var color1 = new Phaser.Display.Color(250, 0, 180);
        var rect1 = this.add.rectangle(480, 250, 20, 150, color1.color);

        //passer de la scéne menu a scéne game-scene
        var start = this.add.text(500, 200, 'PLAY', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:100, Color:"#FF0000"});
        start.setInteractive ({useHandCursor: true});
        start.on ('pointerdown', () => this.scene.start("game-scene"));
        start.on ('pointerover', () =>  {rect1.width = 300});
        start.on ('pointerout', () => {rect1.width = 20});





    }








}
