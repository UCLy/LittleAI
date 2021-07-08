import Phaser from 'phaser';
import LevelsScene from "./scenes/LevelsScene";
import GameScene from "./scenes/GameScene";
import CreditScene from "./scenes/credits";

import Level0 from "./levels/level0";
import Level1 from "./levels/level1";
import Level2 from "./levels/level2";
import Level3 from "./levels/level3";
import Level4 from "./levels/level4";
import Level5 from "./levels/level5";
import Level6 from "./levels/level6";
import Level7 from "./levels/level7";

import Settings from './scenes/params';
import Level1beta from './levels/levelbeta';

import backgroundimage from './assets/background.png';
import levels from './assets/icons/levels.svg';
import roux from './assets/icons/settings.svg';
import play from './assets/icons/play.svg';
import robot from './assets/littleAI.png';
import loop from './assets/loopsong.mp3';
import info from './assets/icons/infomenu.png';
import Info from './assets/icons/info.png';
import Ranking from './assets/icons/ranking.png';
import Replay from './assets/icons/replay.png';
import Backarrow from './assets/back-arrow.png';
import Pause from './assets/icons/pause.png';


import Whitesquare from './assets/Whiteform/carre.png';
import Wcircle from './assets/Whiteform/circle.png';
import Circlered from './assets/game-icons/circle_red.png';
import Redsquare from './assets/game-icons/carre_rouge.png';
import Greensquare from './assets/game-icons/carre_vert.png';
import Greencircle from './assets/game-icons/circle_vert.png';
import Levelselector from './data/levels'


class Menu extends Phaser.Scene {
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
        this.load.image('cercle_rouge', Circlered);
        this.load.image('cercle_vert', Greencircle);
        this.load.image('carre_vert', Greensquare);
        this.load.image('carre_rouge', Redsquare);

    }

    create() {
        //params games

        //Mise en place des Images affiché dans le navigateur
        this.add.image(600, 400, 'bgi');
        var little1 = this.add.image(150, 250, 'robot')

        var jouer = this.add.image(460, 290, 'play');
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
        this.add.text(500, 0, 'Little IA', { fontFamily: 'OCR A Std, monospace', fontSize: 64 });

        var game = this.add.text(500, 260, 'Jouez', { fontFamily: 'OCR A Std, monospace', fontSize: 64 });
        game.setInteractive({ useHandCursor: true });
        game.on('pointerdown', () => this.scene.start("Level5"));
        //beta test
        var beta = this.add.text(800, 260, 'Beta level', { fontFamily: 'OCR A Std, monospace', fontSize: 64 });
        beta.setInteractive({ useHandCursor: true });
        beta.on('pointerdown', () => this.scene.start("Level1"));
        beta.setStroke('#00f', 16);
        beta.setShadow(2, 2, "#333333", 2, true, true);

        var levelslist = this.add.text(500, 320, 'Niveaux', { fontFamily: 'OCR A Std, monospace', fontSize: 64 });
        levelslist.setInteractive({ useHandCursor: true });
        levelslist.on('pointerdown', () => this.scene.start("LevelsScene"));

        var parametres = this.add.text(500, 380, 'Paramètres', { fontFamily: 'OCR A Std, monospace', fontSize: 64 });
        parametres.setInteractive({ useHandCursor: true });
        parametres.on('pointerdown', () => this.scene.start("Settings"));

        var credits = this.add.text(500, 440, 'Crédits', { fontFamily: 'OCR A Std, monospace', fontSize: 64 });
        credits.setInteractive({ useHandCursor: true });
        credits.on('pointerdown', () => this.scene.start("CreditsScene"));


        this.tweens.add({

            targets: game,

            scaleX: 0.8,
            scaleY: 0.80,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });
        this.tweens.add({

            targets: levelslist,

            scaleX: 0.8,
            scaleY: 0.80,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });
    }
    update() {

    }

}

const config = {
    type: Phaser.AUTO,
    parent: 'Little IA',
    width: 1250, // initial width that determines the scaled size
    height: 550,
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [Menu, LevelsScene, GameScene, CreditScene, Level0, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level1beta, Settings]
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