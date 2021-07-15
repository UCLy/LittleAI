import Phaser from 'phaser';
import LevelsScene from "./scenes/LevelsScene";
import CreditScene from "./scenes/credits";

import Level0 from "./levels/easy/level0";
import Level1 from "./levels/easy/level1";
import Level2 from "./levels/easy/level2";
import Level3 from "./levels/easy/level3";
import Level4 from "./levels/easy/level4";
import Level5 from "./levels/easy/level5";
import Level6 from "./levels/easy/level6";
import Level7 from "./levels/easy/level7";

import speedchallenge from "./levels/epic/speedchallenge";

import Settings from './scenes/params';


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
import Backarrow from './assets/icons/menubtn.png';
import Pause from './assets/icons/pause.png';


import Whitesquare from './assets/Whiteform/carre.png';
import Wcircle from './assets/Whiteform/circle.png';
import Circlered from './assets/game-icons/circle_red.png';
import Redsquare from './assets/game-icons/carre_rouge.png';
import Greensquare from './assets/game-icons/carre_vert.png';
import Greencircle from './assets/game-icons/circle_vert.png';


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
        this.add.image(600, 300, 'bgi');
        var little1 = this.add.image(150, 250, 'robot')

        var jouer = this.add.image(460, 275, 'play');
        jouer.setScale(0.1);

        var param = this.add.image(460, 410, 'settings');
        param.setScale(0.05);

        var niveau = this.add.image(460, 340, 'levels');
        niveau.setScale(0.3);

        var credits = this.add.image(460, 470, 'credits');
        credits.setScale(0.2);

        //Mise en place du player audio (Non visible)
        var music = this.sound.add('music');
        music.loop
        music.play(configmusic);

        // Titre
        let title = this.add.text(500, 0, 'Little IA', { fontFamily: 'OCR A Std, monospace', fontSize: 70 });
        title.setStroke('#000000', 4);

        const gradient = title.context.createLinearGradient(0, 0, 0, title.height);
        gradient.addColorStop(0, '#ff00ff');
        gradient.addColorStop(.5, '#ffffff');
        gradient.addColorStop(.5, '#aaaaaa');
        gradient.addColorStop(1, '#111111');

        //////////////
        // Chargement des textes et liens cliquables
        var game = this.add.text(500, 240, 'Play', { fontFamily: 'OCR A Std, monospace', fontSize: 54 });
        game.setInteractive({ useHandCursor: true });
        game.on('pointerover', () => game.setStroke(("#00ff2", 16)));
        game.on('pointerout', () => game.setStroke(("#00f", 16)));
        game.on('pointerdown', () => this.scene.start("Level1"));
        game.setStroke('#00f', 16);



        var levelslist = this.add.text(500, 310, 'Levels', { fontFamily: 'OCR A Std, monospace', fontSize: 54 });
        levelslist.setInteractive({ useHandCursor: true });
        levelslist.on('pointerdown', () => this.scene.start("LevelsScene"));
        levelslist.on('pointerover', () => levelslist.setStroke(("#00ff2", 16)));
        levelslist.on('pointerout', () => levelslist.setStroke(("#00f", 16)));
        levelslist.setStroke('#00f', 16);


        var parametres = this.add.text(500, 370, 'Settings', { fontFamily: 'OCR A Std, monospace', fontSize: 54 });
        parametres.setInteractive({ useHandCursor: true });
        parametres.on('pointerdown', () => this.scene.start("Settings"));
        parametres.on('pointerover', () => parametres.setStroke("#00ff2", 16));
        parametres.on('pointerout', () => parametres.setStroke(("#00f", 16)));
        parametres.setStroke('#00f', 16);


        var credits = this.add.text(500, 430, 'Credits', { fontFamily: 'OCR A Std, monospace', fontSize: 54 });
        credits.setInteractive({ useHandCursor: true });
        credits.on('pointerdown', () => this.scene.start("CreditsScene"));
        credits.on('pointerover', () => credits.setStroke("#00ff22", 16));
        credits.on('pointerout', () => credits.setStroke(("#00f", 16)));
        credits.setStroke('#00f', 16);



        this.tweens.add({

            targets: game,

            scaleX: 0.9,
            scaleY: 0.9,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });
        this.tweens.add({

            targets: levelslist,

            scaleX: 0.9,
            scaleY: 0.9,
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
    scene: [Menu, LevelsScene, CreditScene, Level0, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Settings, speedchallenge]
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