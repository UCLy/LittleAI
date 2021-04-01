import Phaser from 'phaser'
import GameScene from "./GameScene";

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

        //pour les rectangles des niveaux
        let rectlevel0 = this.add.rectangle(30, 230, 10, 80, color1.color);
        let rectlevel1 = this.add.rectangle(160, 230, 10, 80, color1.color);

        //pour les textes des niveaux
        let level0 = this.add.text(40, 200, 'LEVEL\n  0', { fontFamily: 'OCR A Std, monospace',fontSize:29});
        let level1 = this.add.text(170, 200, 'LEVEL\n  1', { fontFamily: 'OCR A Std, monospace',fontSize:29});


        //pour pouvoir acceder au niveau qd on clique
        level0.setInteractive ({useHandCursor: true});
        level1.setInteractive ({useHandCursor: true});

        level0.on ('pointerdown', () => this.scene.start("game-scene"));
        level1.on ('pointerdown', () => this.scene.start("level1-scene"));


        //changer la forme du carré rouge qd on passe le curseur dessus
        level0.on ('pointerover', () =>  {rectlevel0.width = 100});
        level1.on ('pointerover', () =>  {rectlevel1.width = 100});

        level0.on ('pointerout', () =>  {rectlevel0.width = 10});
        level1.on ('pointerout', () =>  {rectlevel1.width = 10});



















    }








}
