import Phaser from 'phaser'

import Ucly from '../assets/credits/ucly.png';
import URconflu from '../assets/credits/URconfluences.png';
import Ucbl from '../assets/credits/ucbl.png';
import Esqese from '../assets/credits/esqese.png';
import backgroundimage from '../assets/background.png';





export default class CreditScene extends Phaser.Scene {
    constructor() {
        super('CreditsScene');
    }


    preload() {
        this.load.image('bgi', backgroundimage);
        this.load.image('ucly', Ucly);
        this.load.image('Ucbl', Ucbl);
        this.load.image('URconf', URconflu);
        this.load.image('Esqese', Esqese);
    }


    create() {
        this.add.image(500,400,'bgi');
        var credits = this.add.text(560, 0, 'Crédits ', {fontFamily: 'OCR A Std, monospace', fontSize: 35});
        credits.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        var dev = this.add.text(560, 64, 'Développement', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
        dev.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        this.add.text(550, 110, 'Valentin Favre', {fontFamily: 'OCR A Std, monospace', fontSize: 20});

        var partern = this.add.text(535, 150, 'En Partenariat avec', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
        partern.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);

        var ucly = this.add.image(200,240,'ucly');
        ucly.setScale(0.5);

        var ucbl = this.add.image(500,240, 'Ucbl');
        ucbl.setScale(0.5);

        var urconf = this.add.image(750,240,'URconf');
        urconf.setScale(0.7);

        var esqese =this.add.image(1050,240,'Esqese');
        esqese.setScale(0.4);

        var teams = this.add.text(480, 370, 'Projet initialisé avec :', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
        teams.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
        teams.setStyle()
        this.add.text(50, 410, 'Pierre Zelnio', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
        this.add.text(300, 470, 'Emmanuel Lattier', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
        this.add.text(550, 410, 'Gaetan Gongiu', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
        this.add.text(800, 470, 'Rami Johnstone', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
        this.add.text(950, 410, 'Théotime Clément', {fontFamily: 'OCR A Std, monospace', fontSize: 20});


    }


    update(time, delta) {


    }



}

