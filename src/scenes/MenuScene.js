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
        this.load.image('background', '/assets/bg-bgs/bg.jpg')


    }

    create()
    {

        // Background 
        this.add.image(1250, 550, 'background')
        //titre du jeux
        var titrejeux = this.add.text(450, 10, 'LittleAI', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:100});
        //crée le rectangle rouge qui englobe le play
        var color1 = new Phaser.Display.Color(250, 0, 0);
        var rectStart = this.add.rectangle(540, 230, 10, 48, color1.color);
        var rectLevel = this.add.rectangle(540, 300, 10, 48, color1.color);

        //passer de la scéne menu a scéne game-scene
        var start = this.add.text(550, 200, 'PLAY', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:50});
        start.setInteractive ({useHandCursor: true});
        start.on ('pointerdown', () => this.scene.start("game-scene"));
        start.on ('pointerover', () =>  {rectStart.width = 150});
        start.on ('pointerout', () => {rectStart.width = 10});

        var level = this.add.text(550, 270, 'LEVELS', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:50});
        level.setInteractive ({useHandCursor: true});
        level.on('pointerdown', () => this.scene.start("levels-scene"));
        level.on ('pointerover', () =>  {rectLevel.width = 210});
        level.on ('pointerout', () => {rectLevel.width = 10});

    }








}
