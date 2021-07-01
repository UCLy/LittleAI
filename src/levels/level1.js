import phaser from 'phaser';
import MyGame from '../index.js';

import backgroundimage from '../assets/background.png';

import Info from '../assets/icons/info.png';
import Ranking from '../assets/icons/ranking.png';
import Replay from '../assets/icons/replay.png';
import Backarrow from '../assets/back-arrow.png';
import Pause from '../assets/icons/pause.png';

import Robot from '../assets/littleAI.png';

import Whitesquare from '../assets/Whiteform/carre.png';
import Wcircle from '../assets/Whiteform/circle.png';
import Circlered from '../assets/game-icons/circle_red.png';
import Redsquare from '../assets/game-icons/carre_rouge.png';
import Greensquare from '../assets/game-icons/carre_vert.png';
import Greencircle from '../assets/game-icons/circle_vert.png';
import Levelselector from '../data/levels'


export default class Level1 extends Phaser.Scene {


    constructor() {
        super('Level1')

    }



    preload() {

        this.load.image('bgi', backgroundimage);
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

        //load Variables use on game 
        var totalscore = 0;
        let nombreCompteur = 0;
        var states = [1, 1];
        const POINTER_DOWN = "pointerdown";
        const POINTER_OVER = 'pointerover'
        let posSprites = [];
        let posValeurInterraction = [];
        let tableau_feedback = [];
        let tableau_interaction = [];
        let toto;
        let outcome;

        //Keyboard Toutch
        var Squaretouch = this.input.keyboard.addKey('f');
        var Circletouch = this.input.keyboard.addKey('g');

        // background & pictures
        var backgroundimg = this.add.image(600, 400, 'bgi');
        backgroundimg.alpha = 0.7;

        var info = this.add.image(50, 130, 'info');
        info.setScale(1.50)

        var replay = this.add.image(250, 130, 'replay');
        replay.setScale(1.50)
        replay.setInteractive({ useHandCursor: true });
        replay.on('pointerdown', () => this.scene.start("Level1"));
        var score = this.add.image(58, 275, 'score');
        score.setScale(0.15);


        var back = this.add.image(1200, 50, 'backto');
        back.setInteractive({ useHandCursor: true });
        back.setScale(0.3);
        back.on('pointerdown', () => this.scene.start("Menu"));

        //lignes de Découpage de la scenes 
        var MenutoForm = this.add.graphics();
        MenutoForm.lineStyle(1, 0xd3d3d3, 1);
        MenutoForm.lineBetween(300, 0, 300, 275);

        var Formtochain = this.add.graphics();
        Formtochain.lineStyle(1, 0xd3d3d3, 1);
        Formtochain.lineBetween(832, 275, 832, 550);

        var ChaintoSimulation = this.add.graphics();
        ChaintoSimulation.lineStyle(1, 0xd3d3d3, 1);
        ChaintoSimulation.lineBetween(0, 275, 1250, 275);

        //text and other things
        this.add.text(500, 0, 'Little IA Level 1 ', { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        let TexteScore = this.add.text(700, 300, "Score \n", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        let afficheScore = this.add.text(745, 440, "", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        let textWin = this.add.text(330, 300, "", { fontFamily: 'OCR A Std, monospace', fontSize: 20 })
        textWin.setInteractive({ useHandCursor: true });
        textWin.on('pointerdown', () => this.scene.start("LevelsScene"));

        //Draw Game form/
        this.btnCarre = this.add.sprite(936, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1145, 412, 'circle').setInteractive({ useHandCursor: true });

        //Draw Simulation
        let robotsim = this.add.sprite(700, 150, 'robot');
        robotsim.setScale(0.3);

        let Wallone = this.add.rectangle(580, 150, 10, 100, 0x00ff00);
        let Walltwo = this.add.rectangle(850, 150, 10, 100, 0x00ff00);


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


        function Increment() {
            afficheScore.setText([
                score
            ]);
            afficheScore.setFill(['white']);
            if (score >= 10) {
                afficheScore.setFill(['lime']);
                textWin.setText([
                    'Victoire ! press for next level'
                ]);
            }
        }

        function feedback(parametre) {
            for (let i = 0; i < tableau_feedback.length; i++) {
                if (i >= 9) {
                    tableau_feedback.shift();
                }
            }
            tableau_feedback.push(parametre);
            console.log(tableau_feedback);

        }

        function calculScore() {
            score = 0;
            for (let i = 0; i < tableau_feedback.length; i++) {
                score += tableau_feedback[i];
            }
            console.log(score);

        }
        this.btnCarre.on(POINTER_DOWN || Squaretouch.on, () => {
            let action = 0;

            if (posSprites.length > 0) {
                for (let i = 0; i < posSprites.length; i++) {
                    let sprite2posSprites = posSprites[i];
                    sprite2posSprites.x -= 65;
                    this.add.tween({ targets: sprite2posSprites, x: sprite2posSprites.x, duration: 50, ease: 'Linear' });
                    toto = posValeurInterraction[i];
                    toto.x -= 65;
                    this.add.tween({ targets: toto[i], x: toto.x, duration: 50, ease: 'Linear' });
                    console.log(sprite2posSprites);
                    console.log(posSprites);
                    console.log(toto.x);
                }
            }
            let sprite;
            let Formpush = null;
            let valeurInterraction;

            if (tableau_interaction[tableau_interaction.length - 1] === 'Carré') {
                env(action, states);
                outcome = 0
                Formpush = this.add.sprite(936, 400, 'carre_rouge');
                this.tweens.add({
                    targets: Formpush,
                    x: 622,
                    y: 412,
                    duration: 200,
                    ease: 'Power2'
                });
                this.tweens.add({ targets: robotsim, x: 630, duration: 200, yoyo: false, ease: 'Power2' })
                sprite = Formpush;
                robotsim.setPosition(700, 150);
                valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
            } else {
                env(action, states)
                outcome = 1
                Formpush = this.add.sprite(936, 412, 'carre_vert');
                this.tweens.add({ targets: Formpush, x: 622, y: 412, duration: 200, ease: 'Linear' });
                Wallone.setFillStyle(0xff0000);
                Walltwo.setFillStyle(0x00ff00);
                this.tweens.add({ targets: robotsim, x: 630, duration: 200, yoyo: true, ease: 'Linear' })
                sprite = Formpush;
                robotsim.setPosition(700, 150);
                valeurInterraction = this.add.text(615, 440, "+" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
            }




            posSprites.push(sprite);
            posValeurInterraction.push(valeurInterraction);
            nombreCompteur += 1;
            tableau_interaction.push('Carré');
            console.log(tableau_interaction);


            calculScore();
            Increment();

        });


        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 1;

            if (posSprites.length > 0) {
                for (let i = 0; i < posSprites.length; i++) {
                    let sprite2posSprites = posSprites[i];
                    sprite2posSprites.x -= 65;
                    this.add.tween({ targets: sprite2posSprites, x: sprite2posSprites.x, duration: 50, ease: 'Power2' });
                    toto = posValeurInterraction[i];
                    toto.x -= 65;
                    this.add.tween({ targets: toto[i], x: toto.x, duration: 50, ease: 'Power2' });
                    console.log(sprite2posSprites + "Circle");
                    console.log(posSprites + "Circle");
                    console.log(toto.x + "Circle");
                }
            }

            let sprite;
            var Formpush;
            let valeurInterraction;


            if (tableau_interaction[tableau_interaction.length - 1] === 'Rond') {
                env(action, states);
                outcome = 0
                Formpush = this.add.image(1145, 412, 'cercle_rouge');
                this.tweens.add({
                    targets: Formpush,
                    x: 622,
                    y: 412,
                    duration: 200,
                    ease: 'Power2',
                });
                this.tweens.add({ targets: robotsim, x: 825, duration: 200, yoyo: true, ease: 'Power2' })
                sprite = Formpush;
                robotsim.setPosition(700, 150);
                valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
            } else {
                env(action, states)
                outcome = 1
                Formpush = this.add.image(1145, 412, 'cercle_vert');
                this.tweens.add({
                    targets: Formpush,
                    x: 622,
                    y: 412,
                    duration: 200,
                    ease: 'Power2',
                });
                Wallone.setFillStyle(0x00ff00);
                Walltwo.setFillStyle(0xff0000);
                this.tweens.add({ targets: robotsim, x: 825, duration: 200, yoyo: true, ease: 'Power2' })
                sprite = Formpush;
                robotsim.setPosition(700, 150);
                valeurInterraction = this.add.text(615, 440, "+" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
            }




            posSprites.push(sprite);
            posValeurInterraction.push(valeurInterraction);
            nombreCompteur += 1;
            tableau_interaction.push('Rond');
            console.log(tableau_interaction);



            calculScore();
            Increment();

        });

        this.tweens.add({

            targets: this.btnCarre,
            scaleX: 0.8,
            scaleY: 0.80,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });
        this.tweens.add({

            targets: this.btnCircle,
            scaleX: 0.80,
            scaleY: 0.80,
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut'

        });

        function env(action, states) {

            var outcome = states[action]

            for (let i = 0; i < tableau_feedback.length; i++) {
                if (i >= 9) {
                    tableau_feedback.shift();
                }
            }
            tableau_feedback.push(outcome);
            if (action == 0) {
                if (states[0] == 1) {
                    states[0] = 0;
                    states[1] = 1;
                }

            }
            if (action == 1) {
                if (states[1] == 1) {
                    states[0] = 1;
                    states[1] = 0;
                }
            }
            console.log(states)
            console.log(outcome + "Outcome test");
            return outcome;
        }




    }


    update() {



    }
}