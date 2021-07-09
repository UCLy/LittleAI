import phaser, { Game } from 'phaser';
import MyGame from '../index.js';



import backgroundimage from '../assets/background.png';
import Backarrow from '../assets/back-arrow.png';

export default class Levelscene extends Phaser.Scene {

    constructor() {
        super('LevelsScene')

    }

    preload() {
        this.load.image('bgi', backgroundimage);
        this.load.image('backto', Backarrow)
    }

    create() {


        //titre de la page & background
        this.add.image(600, 300, 'bgi');
        var titrejeux = this.add.text(450, 10, 'LEVEL', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 100 });
        var back = this.add.image(50, 50, 'backto');
        back.setInteractive({ useHandCursor: true });
        back.setScale(0.3);
        back.on('pointerdown', () => this.scene.start("Menu"));

        //pour la couleur
        var color1 = new Phaser.Display.Color(250, 0, 0);
        var color2 = new Phaser.Display.Color(0, 100, 250);
        var Database;
        //pour les rectacercles ngles des niveaux (PS : SI VOUS VOULEZ CHANGER LA COULEUR qui est en Hexadecimal, remplacé le '#' par '0x')
        var rectlevel0 = this.add.circle(80, 220, 40, 0xaa0088);
        var rectlevel1 = this.add.circle(200, 220, 40, 0xaa0088);
        var rectlevel2 = this.add.circle(330, 220, 40, 0xaa0088);
        var rectlevel3 = this.add.circle(460, 220, 40, 0xaa0088);
        var rectlevel4 = this.add.circle(590, 220, 40, 0xaa0088);
        var rectlevel5 = this.add.circle(730, 220, 40, 0xaa0088);
        var rectlevel6 = this.add.circle(860, 220, 40, 0xaa0088);
        var rectlevel7 = this.add.circle(990, 220, 40, 0xaa0088);



        //pour les textes des niveaux
        let level0 = this.add.text(70, 205, '0', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level1 = this.add.text(190, 205, '1', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level2 = this.add.text(320, 205, '2', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level3 = this.add.text(450, 205, '3', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level4 = this.add.text(580, 205, '4', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level5 = this.add.text(720, 205, '5', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level6 = this.add.text(850, 205, '6', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level7 = this.add.text(980, 205, '7', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });

        //pour pouvoir acceder au niveau qd on clique
        rectlevel0.setInteractive({ useHandCursor: true });
        rectlevel1.setInteractive({ useHandCursor: true });
        rectlevel2.setInteractive({ useHandCursor: true });
        rectlevel3.setInteractive({ useHandCursor: true });
        rectlevel4.setInteractive({ useHandCursor: true });
        rectlevel5.setInteractive({ useHandCursor: true });
        rectlevel6.setInteractive({ useHandCursor: true });
        rectlevel7.setInteractive({ useHandCursor: true });


        rectlevel0.on('pointerdown', () => this.scene.start("Level0", { levelused: 1 }));
        rectlevel1.on('pointerdown', () => this.scene.start("Level1", { levelused: 2 }));
        rectlevel2.on('pointerdown', () => this.scene.start("Level2", { levelused: 3 }));
        rectlevel3.on('pointerdown', () => this.scene.start("Level3", { levelused: 4 }));
        rectlevel4.on('pointerdown', () => this.scene.start("Level4", { levelused: 5 }));
        rectlevel5.on('pointerdown', () => this.scene.start("Level5", { levelused: 6 }));
        rectlevel6.on('pointerdown', () => this.scene.start("Level6", { levelused: 6 }));
        rectlevel7.on('pointerdown', () => this.scene.start("Level7", { levelused: 6 }));




        //changer la forme du cercle rouge qd on passe le curseur dessus
        rectlevel0.on('pointerover', () => { this.tweens.add({ targets: rectlevel0, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel1.on('pointerover', () => { this.tweens.add({ targets: rectlevel1, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel2.on('pointerover', () => { this.tweens.add({ targets: rectlevel2, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel3.on('pointerover', () => { this.tweens.add({ targets: rectlevel3, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel4.on('pointerover', () => { this.tweens.add({ targets: rectlevel4, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel5.on('pointerover', () => { this.tweens.add({ targets: rectlevel5, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel6.on('pointerover', () => { this.tweens.add({ targets: rectlevel6, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel7.on('pointerover', () => { this.tweens.add({ targets: rectlevel7, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });

        rectlevel0.on('pointerout', () => { rectlevel0.width = 10 });
        rectlevel1.on('pointerout', () => { rectlevel1.width = 10 });
        rectlevel2.on('pointerout', () => { rectlevel2.width = 10 });
        rectlevel3.on('pointerout', () => { rectlevel3.width = 10 });
        rectlevel4.on('pointerout', () => { rectlevel4.width = 10 });
        rectlevel5.on('pointerout', () => { rectlevel5.width = 10 });
        rectlevel6.on('pointerout', () => { rectlevel6.width = 10 });
        rectlevel7.on('pointerout', () => { rectlevel7.width = 10 });


    }


}