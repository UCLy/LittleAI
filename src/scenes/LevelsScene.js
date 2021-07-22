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

        var rectlevel8 = this.add.circle(80, 320, 40, 0xaa0088);
        var rectlevel9 = this.add.circle(200, 320, 40, 0xaa0088);
        var rectlevel10 = this.add.circle(330, 320, 40, 0xaa0088);
        var rectlevel11 = this.add.circle(460, 320, 40, 0xaa0088);
        var rectlevel12 = this.add.circle(590, 320, 40, 0xaa0088);
        var rectlevel13 = this.add.circle(730, 320, 40, 0xaa0088);


        var rectlevelspeed = this.add.circle(1200, 500, 40, 0x00ffff);



        //pour les textes des niveaux
        let level0 = this.add.text(70, 205, '0', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level1 = this.add.text(190, 205, '1', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level2 = this.add.text(320, 205, '2', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level3 = this.add.text(450, 205, '3', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level4 = this.add.text(580, 205, '4', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level5 = this.add.text(720, 205, '5', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level6 = this.add.text(850, 205, '6', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level7 = this.add.text(980, 205, '7', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });

        let level8 = this.add.text(70, 305, '8', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level9 = this.add.text(190, 305, '9', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level10 = this.add.text(310, 305, '10', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level11 = this.add.text(440, 305, '11', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level12 = this.add.text(580, 305, '12', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });
        let level13 = this.add.text(710, 305, '13', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });

        let speed = this.add.text(1190, 485, '?', { fontFamily: 'OCR A Std, monospace', fontSize: 29 });

        //pour pouvoir acceder au niveau qd on clique
        rectlevel0.setInteractive({ useHandCursor: true });
        rectlevel1.setInteractive({ useHandCursor: true });
        rectlevel2.setInteractive({ useHandCursor: true });
        rectlevel3.setInteractive({ useHandCursor: true });
        rectlevel4.setInteractive({ useHandCursor: true });
        rectlevel5.setInteractive({ useHandCursor: true });
        rectlevel6.setInteractive({ useHandCursor: true });
        rectlevel7.setInteractive({ useHandCursor: true });

        rectlevel8.setInteractive({ useHandCursor: true });
        rectlevel9.setInteractive({ useHandCursor: true });
        rectlevel10.setInteractive({ useHandCursor: true });
        rectlevel11.setInteractive({ useHandCursor: true });
        rectlevel12.setInteractive({ useHandCursor: true });
        rectlevel13.setInteractive({ useHandCursor: true });

        rectlevelspeed.setInteractive({ useHandCursor: true });


        rectlevel0.on('pointerdown', () => this.scene.start("Level0", { levelused: 1 }));
        rectlevel1.on('pointerdown', () => this.scene.start("Level1", { levelused: 2 }));
        rectlevel2.on('pointerdown', () => this.scene.start("Level2", { levelused: 3 }));
        rectlevel3.on('pointerdown', () => this.scene.start("Level3", { levelused: 4 }));
        rectlevel4.on('pointerdown', () => this.scene.start("Level4", { levelused: 5 }));
        rectlevel5.on('pointerdown', () => this.scene.start("Level5", { levelused: 6 }));
        rectlevel6.on('pointerdown', () => this.scene.start("Level6", { levelused: 6 }));
        rectlevel7.on('pointerdown', () => this.scene.start("Level7", { levelused: 6 }));

        rectlevel8.on('pointerdown', () => this.scene.start("Level8", { levelused: 1 }));
        rectlevel9.on('pointerdown', () => this.scene.start("Level9", { levelused: 2 }));
        rectlevel10.on('pointerdown', () => this.scene.start("Level10", { levelused: 3 }));
        rectlevel11.on('pointerdown', () => this.scene.start("Level11", { levelused: 4 }));
        rectlevel12.on('pointerdown', () => this.scene.start("Level12", { levelused: 5 }));
        rectlevel13.on('pointerdown', () => this.scene.start("Level13", { levelused: 6 }));

        rectlevelspeed.on('pointerdown', () => this.scene.start("speedchallenge", { levelused: 6 }));




        //changer la forme du cercle rouge qd on passe le curseur dessus
        rectlevel0.on('pointerover', () => { this.tweens.add({ targets: rectlevel0, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel1.on('pointerover', () => { this.tweens.add({ targets: rectlevel1, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel2.on('pointerover', () => { this.tweens.add({ targets: rectlevel2, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel3.on('pointerover', () => { this.tweens.add({ targets: rectlevel3, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel4.on('pointerover', () => { this.tweens.add({ targets: rectlevel4, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel5.on('pointerover', () => { this.tweens.add({ targets: rectlevel5, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel6.on('pointerover', () => { this.tweens.add({ targets: rectlevel6, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel7.on('pointerover', () => { this.tweens.add({ targets: rectlevel7, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel8.on('pointerover', () => { this.tweens.add({ targets: rectlevel8, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel9.on('pointerover', () => { this.tweens.add({ targets: rectlevel9, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel10.on('pointerover', () => { this.tweens.add({ targets: rectlevel10, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel11.on('pointerover', () => { this.tweens.add({ targets: rectlevel11, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel12.on('pointerover', () => { this.tweens.add({ targets: rectlevel12, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
        rectlevel13.on('pointerover', () => { this.tweens.add({ targets: rectlevel13, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });

        rectlevelspeed.on('pointerover', () => { this.tweens.add({ targets: rectlevelspeed, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });

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