import Phaser from 'phaser';
import LevelsScene from "./scenes/LevelsScene";
import GameScene from "./scenes/GameScene";
import CreditScene from "./scenes/credits";
import Level1 from "./levels/level1";

import backgroundimage from './assets/background.png';
import levels from './assets/icons/levels.svg';
import settings from './assets/icons/settings.svg';
import play from './assets/icons/play.svg';
import robot from './assets/littleAI.png';
import loop from './assets/loopsong.mp3';
import info from './assets/icons/infomenu.png';


class Menu extends Phaser.Scene
{
    constructor ()
    {
        super('Menu');
    }

    preload ()
    {
    this.load.image ('bgi', backgroundimage);
    this.load.image ('play', play);
    this.load.image ('settings', settings);
    this.load.image ('levels', levels);
    this.load.image ('robot', robot)
    this.load.audio('music',loop,loop);
    this.load.image('credits', info)

    }

    create ()
    {
    //Mise en place des Images affiché dans le navigateur
    this.add.image(600, 400,'bgi');
    var little1 = this.add.image(150, 250, 'robot')

    var jouer =this.add.image(460, 290, 'play');
    jouer.setScale(0.1);

    var param = this.add.image(460, 410, 'settings');
    param.setScale(0.05);

    var niveau = this.add.image(460, 350, 'levels');
    niveau.setScale(0.3);

    var credits = this.add.image(460, 470, 'credits');
    credits.setScale(0.2);

    //Mise en place du player audio (Non visible)
    var music = this.sound.add('music');
    music.loop
    music.play(configmusic);
    
    // Chargement des textes et liens cliquables
    this.add.text(500, 0, 'Little IA', {fontFamily: 'OCR A Std, monospace', fontSize: 64});

    var game = this.add.text(500, 260, 'Jouez', {fontFamily: 'OCR A Std, monospace', fontSize: 64});
    game.setInteractive({useHandCursor: true});
    game.on('pointerdown', () => this.scene.start("Level1"));

    var levelslist = this.add.text(500, 320, 'Niveaux', {fontFamily: 'OCR A Std, monospace', fontSize: 64});
        levelslist.setInteractive({useHandCursor: true});
        levelslist.on('pointerdown', () => this.scene.start("LevelsScene"));

    this.add.text(500, 380, 'Paramètres', {fontFamily: 'OCR A Std, monospace', fontSize: 64});
    var credits = this.add.text(500, 440, 'Crédits', {fontFamily: 'OCR A Std, monospace', fontSize: 64});
    credits.setInteractive({useHandCursor: true});
    credits.on('pointerdown', () => this.scene.start("CreditsScene"));
    }
}

const config = {
    type: Phaser.AUTO,
    parent: 'Little IA',
    width: 1250, // initial width that determines the scaled size
    height: 550,
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT ,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Menu,LevelsScene,GameScene,CreditScene,Level1]
};

const configmusic = {
    //a utilisé pour modifiée le volume ou le son
        mute: true,
        volume: 1,
        rate: 1,
        detune: 0,
        seek: 0,
        loop: true,
        delay: 0

    }
    

const game = new Phaser.Game(config);
