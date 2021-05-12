import phaser from 'phaser';
import MyGame from '../index.js';

import backgroundimage from '../assets/background.png';

export default class Levelscene extends Phaser.Scene {

constructor()
{
    super('LevelsScene')

}

preload()
{
    this.load.image ('bgi', backgroundimage);
}

create()
{


    //titre de la page & background
    this.add.image(600, 400,'bgi');
    var titrejeux = this.add.text(450, 10, 'LEVEL', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:100});

    //pour la couleur
    var color1 = new Phaser.Display.Color(250, 0, 0);
    var color2 = new Phaser.Display.Color(0, 100, 250);

    //pour les rectacercles ngles des niveaux (PS : SI VOUS VOULEZ CHANGER LA COULEUR qui est en Hexadecimal, remplacé le '#' par '0x')
    var rectlevel0 = this.add.circle(80, 220, 40, 0x32a887);
    var rectlevel1 = this.add.circle(200, 220, 40, 0x32a887);
    var rectlevel2 = this.add.circle(330, 220, 40, 0x32a887);
    var rectlevel3 = this.add.circle(460, 220, 40, 0x32a887);
    var rectlevel4 = this.add.circle(590, 220, 40, 0x32a887);
    var rectlevel5 = this.add.circle(730, 220, 40, 0x32a887);



    //pour les textes des niveaux
    let level0 = this.add.text(70, 205, '0', { fontFamily: 'OCR A Std, monospace',fontSize:29});
    let level1 = this.add.text(190, 205, '1', { fontFamily: 'OCR A Std, monospace',fontSize:29});
    let level2 = this.add.text(320, 205, '2', { fontFamily: 'OCR A Std, monospace',fontSize:29});
    let level3 = this.add.text(450, 205, '3', { fontFamily: 'OCR A Std, monospace',fontSize:29});
    let level4 = this.add.text(580, 205, '4', { fontFamily: 'OCR A Std, monospace',fontSize:29});
    let level5 = this.add.text(720, 205, '5', { fontFamily: 'OCR A Std, monospace',fontSize:29});

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




    //changer la forme du cercle rouge qd on passe le curseur dessus
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
