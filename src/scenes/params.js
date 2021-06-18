import Phaser from 'phaser'

import Ucly from '../assets/credits/ucly.png';
import URconflu from '../assets/credits/URconfluences.png';
import Ucbl from '../assets/credits/ucbl.png';
import Esqese from '../assets/credits/esqese.png';
import Backarrow from '../assets/back-arrow.png';
import backgroundimage from '../assets/background.png';





export default class Settings extends Phaser.Scene {
    constructor() {
        super('Settings');
    }


    preload() {
        this.load.image('bgi', backgroundimage);

    }


    create() {
        var background = this.add.image(500,400,'bgi');
        this.add.text(500, 0, 'Paramètres', {fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.text(400, 150, 'Volume Musique', {fontFamily: 'OCR A Std, monospace', fontSize: 30});
        this.add.text(400, 240, 'Mute', {fontFamily: 'OCR A Std, monospace', fontSize: 30});
        this.add.text(400, 310, 'Tutoriel', {fontFamily: 'OCR A Std, monospace', fontSize: 30});
        this.add.text(300, 380, 'Site Officiel (Disponible durant le développement)', {fontFamily: 'OCR A Std, monospace', fontSize: 25});

    }


    update(time, delta) {


    }



}

