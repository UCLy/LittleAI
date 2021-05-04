import Phaser from 'phaser'
import GameScene from "./GameScene";
import videobg from '../assetsweb/bluelittle.mp4'

export default class Levelscene extends Phaser.Scene
{
    constructor()
    {
        super('levels-scene')

    }

    preload()
    {

    }

    create()
    {


        //titre de la page

        let titrejeux = this.add.text(450, 10, 'LEVEL', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:100});

        //pour la couleur
        let color1 = new Phaser.Display.Color(250, 0, 0);
        let color2 = new Phaser.Display.Color(0, 100, 250);

        //pour les rectangles des niveaux
        let rectlevel0 = this.add.rectangle(30, 230, 10, 80, color1.color);
        let rectlevel1 = this.add.rectangle(160, 230, 10, 80, color2.color);
        let rectlevel2 = this.add.rectangle(290, 230, 10, 80, color1.color);
        let rectlevel3 = this.add.rectangle(420, 230, 10, 80, color2.color);
        let rectlevel4 = this.add.rectangle(550, 230, 10, 80, color1.color);
        let rectlevel5 = this.add.rectangle(680, 230, 10, 80, color2.color);



        //pour les textes des niveaux
        let level0 = this.add.text(40, 200, 'LEVEL\n  0', { fontFamily: 'OCR A Std, monospace',fontSize:29});
        let level1 = this.add.text(170, 200, 'LEVEL\n  1', { fontFamily: 'OCR A Std, monospace',fontSize:29});
        let level2 = this.add.text(300, 200, 'LEVEL\n  2', { fontFamily: 'OCR A Std, monospace',fontSize:29});
        let level3 = this.add.text(430, 200, 'LEVEL\n  3', { fontFamily: 'OCR A Std, monospace',fontSize:29});
        let level4 = this.add.text(560, 200, 'LEVEL\n  4', { fontFamily: 'OCR A Std, monospace',fontSize:29});
        let level5 = this.add.text(690, 200, 'LEVEL\n  5', { fontFamily: 'OCR A Std, monospace',fontSize:29});

        //pour pouvoir acceder au niveau qd on clique
        level0.setInteractive ({useHandCursor: true});
        level1.setInteractive ({useHandCursor: true});
        level2.setInteractive ({useHandCursor: true});
        level3.setInteractive ({useHandCursor: true});
        level4.setInteractive ({useHandCursor: true});
        level5.setInteractive ({useHandCursor: true});


        level0.on ('pointerdown', () => this.scene.start("game-scene"));
        level1.on ('pointerdown', () => this.scene.start("level1-scene"));
        level2.on ('pointerdown', () => this.scene.start("level2-scene"));
        level3.on ('pointerdown', () => this.scene.start("level3-scene"));
        level4.on ('pointerdown', () => this.scene.start("level4-scene"));
        level5.on ('pointerdown', () => this.scene.start("level5-scene"));




        //changer la forme du carré rouge qd on passe le curseur dessus
        level0.on ('pointerover', () =>  {rectlevel0.width = 110});
        level1.on ('pointerover', () =>  {rectlevel1.width = 110});
        level2.on ('pointerover', () =>  {rectlevel2.width = 110});
        level3.on ('pointerover', () =>  {rectlevel3.width = 110});
        level4.on ('pointerover', () =>  {rectlevel4.width = 110});
        level5.on ('pointerover', () =>  {rectlevel5.width = 110});

        level0.on ('pointerout', () =>  {rectlevel0.width = 10});
        level1.on ('pointerout', () =>  {rectlevel1.width = 10});
        level2.on ('pointerout', () =>  {rectlevel2.width = 10});
        level3.on ('pointerout', () =>  {rectlevel3.width = 10});
        level4.on ('pointerout', () =>  {rectlevel4.width = 10});
        level5.on ('pointerout', () =>  {rectlevel5.width = 10});



















    }








}
