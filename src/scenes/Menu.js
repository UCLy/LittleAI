
import backgroundimage from '../assets/background.png';
import levels from '../assets/icons/levels.svg';
import roux from '../assets/icons/settings.svg';
import play from '../assets/icons/play.svg';
import robot from '../assets/littleAI.png';
import loop from '../assets/loopsong.mp3';
import info from '../assets/icons/infomenu.png';
import Info from '../assets/icons/info.png';
import Ranking from '../assets/icons/ranking.png';
import Replay from '../assets/icons/replay.png';
import Backarrow from '../assets/icons/menubtn.png';
import Pause from '../assets/icons/pause.png';


import Whitesquare from '../assets/Whiteform/carre.png';
import Wcircle from '../assets/Whiteform/circle.png';
import Wtriangle from '../assets/Whiteform/triangle.png';

import Circlered from '../assets/game-icons/circle_red.png';
import Redsquare from '../assets/game-icons/carre_rouge.png';
import Redtriangle from '../assets/game-icons/triangle_rouge.png';
import Yellowsquare from '../assets/game-icons/carre_jaune.png';
import Yellowcircle from '../assets/game-icons/circle_jaune.png';
import Yellowtriangle from '../assets/game-icons/triangle_jaune.png';
import Greensquare from '../assets/game-icons/carre_vert.png';
import Greencircle from '../assets/game-icons/circle_vert.png';
import Greentriangle from '../assets/game-icons/triangle_vert.png';


export default class Menu extends Phaser.Scene {
    constructor() {
        super('Menu');
    }

    preload() {
        this.load.image('bgi', backgroundimage);
        this.load.image('play', play);
        this.load.image('settings', roux);
        this.load.image('levels', levels);
        this.load.image('robot', robot)
        this.load.audio('music', loop, loop);
        this.load.image('credits', info);
        this.load.image('info', Info);
        this.load.image('ranking', Ranking);
        this.load.image('replay', Replay);

        this.load.image('pause', Pause);
        this.load.image('backto', Backarrow);

        this.load.image('carre', Whitesquare);
        this.load.image('circle', Wcircle);
        this.load.image('triangle', Wtriangle);

        this.load.image('cercle_rouge', Circlered);
        this.load.image('cercle_jaune', Yellowcircle);
        this.load.image('cercle_vert', Greencircle);

        this.load.image('triangle_vert', Greentriangle);
        this.load.image('triangle_jaune', Yellowtriangle);
        this.load.image('triangle_rouge', Redtriangle);

        this.load.image('carre_jaune', Yellowsquare);
        this.load.image('carre_rouge', Redsquare);
        this.load.image('carre_vert', Greensquare);

    }

    create() {


        //titre de la page & background
        this.add.image(600, 300, 'bgi');
        var little1 = this.add.image(350, 70, 'robot');
        var little2 = this.add.image(900, 70, 'robot');
        little1.setScale(0.30);
        little2.setScale(0.30);
        var titrejeux = this.add.text(450, 10, 'Little AI', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif', fontSize: 100 });
        var credits = this.add.text(0, 500, 'Credits', { fontFamily: 'OCR A Std, monospace', fontSize: 34 });
        credits.setInteractive({ useHandCursor: true });
        credits.on('pointerdown', () => this.scene.start("CreditsScene"));



        //pour les rectacercles ngles des niveaux (PS : SI VOUS VOULEZ CHANGER LA COULEUR qui est en Hexadecimal, remplacé le '#' par '0x')
        //var rectlevel0 = this.add.circle(80, 220, 30, 0xaa0088);
        var rectlevel1 = this.add.circle(200, 220, 30, 0xaa0088);
        var rectlevel2 = this.add.circle(330, 220, 30, 0xaa0088);
        var rectlevel3 = this.add.circle(460, 220, 30, 0xaa0088);
        var rectlevel4 = this.add.circle(590, 220, 30, 0xaa0088);
        var rectlevel5 = this.add.circle(730, 220, 30, 0xaa0088);
        var rectlevel6 = this.add.circle(860, 220, 30, 0xaa0088);
        var rectlevel7 = this.add.circle(990, 220, 30, 0xaa0088);

        var rectlevel8 = this.add.circle(80, 320, 30, 0xaa0088);
        var rectlevel9 = this.add.circle(200, 320, 30, 0xaa0088);
        var rectlevel10 = this.add.circle(330, 320, 30, 0xaa0088);
        var rectlevel11 = this.add.circle(460, 320, 30, 0xaa0088);
        var rectlevel12 = this.add.circle(590, 320, 30, 0xaa0088);
        var rectlevel13 = this.add.circle(730, 320, 30, 0xaa0088);





        //pour les textes des niveaux
        //let level0 = this.add.text(75, 210, '0', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level1 = this.add.text(195, 210, '1', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level2 = this.add.text(325, 210, '2', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level3 = this.add.text(455, 210, '3', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level4 = this.add.text(585, 210, '4', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level5 = this.add.text(725, 210, '5', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level6 = this.add.text(855, 210, '6', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level7 = this.add.text(985, 210, '7', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });

        let level8 = this.add.text(75, 315, '8', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level9 = this.add.text(195, 315, '9', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level10 = this.add.text(313, 315, '10', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level11 = this.add.text(443, 315, '11', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level12 = this.add.text(583, 315, '12', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });
        let level13 = this.add.text(713, 315, '13', { fontFamily: 'OCR A Std, monospace', fontSize: 15 });

        console.log("menu");
        let maxUnlockedLevel = parseInt(localStorage.getItem('maxUnlockedLevel')) || 1; 

        //switch (this.registry.get('maxUnlockedLevel')){
        switch (maxUnlockedLevel){
            case 13:
                rectlevel13.setInteractive({ useHandCursor: true });
                rectlevel13.on('pointerdown', () => this.scene.start("Level13"));
            case 12:
                rectlevel12.setInteractive({ useHandCursor: true });
                rectlevel12.on('pointerdown', () => this.scene.start("Level12"));
            case 11:
                rectlevel11.setInteractive({ useHandCursor: true });
                rectlevel11.on('pointerdown', () => this.scene.start("Level11"));
            case 10:
                rectlevel1.setInteractive({ useHandCursor: true });
                rectlevel10.on('pointerdown', () => this.scene.start("Level10"));
            case 9:
                rectlevel9.setInteractive({ useHandCursor: true });
                rectlevel9.on('pointerdown', () => this.scene.start("Level9"));
            case 8:
                rectlevel8.setInteractive({ useHandCursor: true });
                rectlevel8.on('pointerdown', () => this.scene.start("Level8"));
            case 7:
                rectlevel7.setInteractive({ useHandCursor: true });
                rectlevel7.on('pointerdown', () => this.scene.start("Level7"));
            case 6:
                rectlevel6.setInteractive({ useHandCursor: true });
                rectlevel6.on('pointerdown', () => this.scene.start("Level6"));
            case 5:
                rectlevel5.setInteractive({ useHandCursor: true });
                rectlevel5.on('pointerdown', () => this.scene.start("Level5"));
            case 4:
                rectlevel4.setInteractive({ useHandCursor: true });
                rectlevel4.on('pointerdown', () => this.scene.start("Level4"));
            case 3:
                rectlevel3.setInteractive({ useHandCursor: true });
                rectlevel3.on('pointerdown', () => this.scene.start("Level3"));
            case 2:
                rectlevel2.setInteractive({ useHandCursor: true });
                rectlevel2.on('pointerdown', () => this.scene.start("Level2"));
            case 1:
                rectlevel1.setInteractive({ useHandCursor: true });
                rectlevel1.on('pointerdown', () => this.scene.start("Level1"));
            }

        // //pour pouvoir acceder au niveau qd on clique
        // rectlevel0.setInteractive({ useHandCursor: true });
        // rectlevel1.setInteractive({ useHandCursor: true });
        // rectlevel2.setInteractive({ useHandCursor: true });
        // rectlevel3.setInteractive({ useHandCursor: true });
        // rectlevel4.setInteractive({ useHandCursor: true });
        // rectlevel5.setInteractive({ useHandCursor: true });
        // rectlevel6.setInteractive({ useHandCursor: true });
        // rectlevel7.setInteractive({ useHandCursor: true });

        // rectlevel8.setInteractive({ useHandCursor: true });
        // rectlevel9.setInteractive({ useHandCursor: true });
        // rectlevel10.setInteractive({ useHandCursor: true });
        // rectlevel11.setInteractive({ useHandCursor: true });
        // rectlevel12.setInteractive({ useHandCursor: true });


        // rectlevel0.on('pointerdown', () => this.scene.start("Level0"));
        // rectlevel1.on('pointerdown', () => this.scene.start("Level1"));
        // rectlevel2.on('pointerdown', () => this.scene.start("Level2"));
        // rectlevel3.on('pointerdown', () => this.scene.start("Level3"));
        // rectlevel4.on('pointerdown', () => this.scene.start("Level4"));
        // rectlevel5.on('pointerdown', () => this.scene.start("Level5"));
        // rectlevel6.on('pointerdown', () => this.scene.start("Level6"));
        // rectlevel7.on('pointerdown', () => this.scene.start("Level7"));

        // rectlevel8.on('pointerdown', () => this.scene.start("Level8"));
        // rectlevel9.on('pointerdown', () => this.scene.start("Level9"));
        // rectlevel10.on('pointerdown', () => this.scene.start("Level10"));
        // rectlevel11.on('pointerdown', () => this.scene.start("Level11"));
        // rectlevel12.on('pointerdown', () => this.scene.start("Level12"));


        //changer la forme du cercle rouge qd on passe le curseur dessus
        //rectlevel0.on('pointerover', () => { this.tweens.add({ targets: rectlevel0, scaleX: 0.8, scaleY: 0.80, yoyo: true, duration: 150, ease: 'Sine.easeInOut' }) });
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



        //rectlevel0.on('pointerout', () => { rectlevel0.width = 10 });
        rectlevel1.on('pointerout', () => { rectlevel1.width = 10 });
        rectlevel2.on('pointerout', () => { rectlevel2.width = 10 });
        rectlevel3.on('pointerout', () => { rectlevel3.width = 10 });
        rectlevel4.on('pointerout', () => { rectlevel4.width = 10 });
        rectlevel5.on('pointerout', () => { rectlevel5.width = 10 });
        rectlevel6.on('pointerout', () => { rectlevel6.width = 10 });
        rectlevel7.on('pointerout', () => { rectlevel7.width = 10 });


    }

    update() {

    }

}
