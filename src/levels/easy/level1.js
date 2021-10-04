import backgroundimage from '../../assets/background.png';
import levels from '../../assets/icons/levels.svg';
import roux from '../../assets/icons/settings.svg';
import play from '../../assets/icons/play.svg';
import robot from '../../assets/littleAI.png';
import loop from '../../assets/loopsong.mp3';
import info from '../../assets/icons/infomenu.png';
import Info from '../../assets/icons/info.png';
import Ranking from '../../assets/icons/ranking.png';
import Replay from '../../assets/icons/replay.png';
import Backarrow from '../../assets/icons/menubtn.png';
import Pause from '../../assets/icons/pause.png';


import Whitesquare from '../../assets/Whiteform/carre.png';
import Wcircle from '../../assets/Whiteform/circle.png';
import Wtriangle from '../../assets/Whiteform/triangle.png';

import Circlered from '../../assets/game-icons/circle_red.png';
import Redsquare from '../../assets/game-icons/carre_rouge.png';
import Redtriangle from '../../assets/game-icons/triangle_rouge.png';
import Yellowsquare from '../../assets/game-icons/carre_jaune.png';
import Yellowcircle from '../../assets/game-icons/circle_jaune.png';
import Yellowtriangle from '../../assets/game-icons/triangle_jaune.png';
import Greensquare from '../../assets/game-icons/carre_vert.png';
import Greencircle from '../../assets/game-icons/circle_vert.png';
import Greentriangle from '../../assets/game-icons/triangle_vert.png';

import AbstractLevel from '../AbstractLevel.js';


//export default class Level1 extends Phaser.Scene {
export default class Level1 extends AbstractLevel {

    constructor() {
        super(1);
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

        super.create();

        // Hide text "< level 1 >" until score 10 has been reached (in update())
        if ((parseInt(localStorage.getItem('maxUnlockedLevel')) || 1) == 1) {
            this.levelLabel.setVisible(false);
            this.nextlevel.setVisible(false);
            this.previouslevel.setVisible(false);
        }
        this.afficheScore.setPosition(625, 490);

        const POINTER_DOWN = "pointerdown";
        const POINTER_OVER = 'pointerover'

       //load Variables use on game
        this.hedonist_array = [
            [0, 1],
            [2, 0]
        ];


        //Draw Game form
        this.btnCarre = this.add.sprite(625 - 100, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(625 + 100, 412, 'circle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });


         //create button square

        this.btnCircle.on(POINTER_OVER, function() {
            this.setTint(0x999999);
        });
        this.btnCircle.on('pointerout', function() {
            this.clearTint();
        });

        //create button circle

        this.btnCarre.on(POINTER_OVER, function() {
            this.setTint(0x999999);
        });
        this.btnCarre.on('pointerout', function() {
            this.clearTint();
        });

        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------BUTTON INTERACTION SYSTEM-------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        this.btnCarre.on(POINTER_DOWN, () => {
            let action = 1;
            let outcome = this.env(action);
            this.calculScore(action, outcome);
        });

        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 0;
            let outcome = this.env(action);
            this.calculScore(action, outcome);
        });
    }


    update() {

        // Show text "< Level 1 >" When score 10 has been reached
        if (this.score >= 10) {
            this.levelLabel.setVisible(true);
            this.nextlevel.setVisible(true);
            this.previouslevel.setVisible(true);
        }
    }

    env(action) 
    {
        let outcome = 0;
        return outcome;
    }

}