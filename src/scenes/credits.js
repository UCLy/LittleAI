import Phaser from 'phaser'

import Ucly from '../assets/credits/ucly.png';
import URconflu from '../assets/credits/URconfluences.png';
import Ucbl from '../assets/credits/ucbl.png';
import Esqese from '../assets/credits/esqese.png';
import Mephi from '../assets/credits/mephi.png'
import Backarrow from '../assets/back-arrow.png';
import backgroundimage from '../assets/background.png';





export default class CreditScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }


    preload() {
        this.load.image('ucly', Ucly);
        this.load.image('Ucbl', Ucbl);
        this.load.image('URconf', URconflu);
        this.load.image('Esqese', Esqese);
        this.load.image('mephiUR', Mephi);
        this.load.image('backto', Backarrow);
    }


    create() {
        var back = this.add.image(30, 30, 'backto');
        back.setScale(0.05);
        back.setInteractive({ useHandCursor: true });
        back.on('pointerdown', () => this.scene.start("Menu"));


        var credits = this.add.text(560, 0, 'Credits ', { fontFamily: 'OCR A Std, monospace', fontSize: 35 });
        credits.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);


        this.add.text(350, 100, 'Valentin Favre', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });

        this.add.text(350, 140, 'Théotime Clément', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(350, 160, 'Gaetan Gongiu', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(350, 180, 'Rami Johnstone', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(350, 200, 'Emmanuel Lattier', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(350, 220, 'Pierre Zelnio', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });

        this.add.text(750, 100, 'Olivier Georgeon', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(750, 140, 'Michel Chourot', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(750, 160, 'Jonathan Morgan', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(750, 180, 'Sergey Yarushev', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });
        this.add.text(750, 200, 'Jianyong Xue', { fontFamily: 'OCR A Std, monospace', fontSize: 20 });




        var ucly = this.add.image(100, 470, 'ucly');
        ucly.setScale(0.4);

        var ucbl = this.add.image(400, 470, 'Ucbl');
        ucbl.setScale(0.5);

        var urconf = this.add.image(650, 470, 'URconf');
        urconf.setScale(0.5);

        var esqese = this.add.image(950, 470, 'Esqese');
        esqese.setScale(0.4);

        var mephi = this.add.image(1175, 465, 'mephiUR');
        mephi.setScale(0.1);

    }


    update(time, delta) {


    }



}