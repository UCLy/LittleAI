import phaser from 'phaser';
import MyGame from '../../index.js';

import backgroundimage from '../../assets/background.png';


export default class speedchallenge extends Phaser.Scene {


    constructor() {
        super('speedchallenge')

    }



    preload() {


    }

    create() {

        //load Variables use on game
        let activeTrace = true;
        let activeimulation = false;
        var score = 0;
        let nombreCompteur = 0;
        var states = [1, 1, 0, 1, 0, 1];
        let hedonist_array = [
            [0, 1, 2, 3, 4, 5, 6],
            [0, 1, 12, -10, 4, -3]
        ];
        const POINTER_DOWN = "pointerdown";
        const POINTER_OVER = 'pointerover'
        let posSprites = [];
        let posValeurInterraction = [];
        let valence_array = [];
        let tableau_interaction = [];
        let valencetab;
        let valence;
        let outcome;
        let sprite;
        let valeurInterraction;
        let action;
        let sprite2posSprites;
        let animatepos;
        let animatevalence;

        let Wallone;
        let Walltwo;
        let Wallthree;
        let Wallfour;


        // background & pictures
        var backgroundimg = this.add.image(600, 300, 'bgi');


        var back = this.add.image(1200, 50, 'backto');
        back.setInteractive({ useHandCursor: true });
        back.setScale(0.3);
        back.on('pointerdown', () => this.scene.start("Menu"));


        //text and other things
        this.add.text(500, 0, 'Bottom UP Challenge ', { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        let TexteScore = this.add.text(700, 500, "Score \n", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        let afficheScore = this.add.text(745, 440, "", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        let textWin = this.add.text(330, 300, "", { fontFamily: 'OCR A Std, monospace', fontSize: 20 })
        textWin.setInteractive({ useHandCursor: true });
        textWin.on('pointerdown', () => this.scene.start("LevelsScene"));

        //Draw Game form/
        this.btnCarre = this.add.sprite(936, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1145, 412, 'circle').setInteractive({ useHandCursor: true });
        this.btntriangle = this.add.sprite(936, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnLosange = this.add.sprite(1145, 412, 'circle').setInteractive({ useHandCursor: true });


        //Draw Simulation
        let robotsim;
        if (activeimulation == true) {
            robotsim = this.add.sprite(700, 150, 'robot');
            robotsim.setScale(0.3);
            Wallone = this.add.rectangle(580, 150, 10, 100, 0x00ff00);
            Walltwo = this.add.rectangle(850, 150, 10, 100, 0x00ff00);
        }

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
        //----------------------------------------LEVEL SYSTEM--------------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------


        function env(action, states) {

            var outcome = states[action]

            for (let i = 0; i < valence_array.length; i++) {
                if (i >= 9) {
                    valence_array.shift();
                }
            }
            valence = hedonist_array[action][outcome];

            valence_array.push(valence);
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
            console.log(outcome + "Outcome test");
            return outcome;
        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------PRINT SCORE & TEXT -------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------

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
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------feedback for score parameters --------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        function feedback(parametre) {
            for (let i = 0; i < valence_array.length; i++) {
                if (i >= 9) {
                    valence_array.shift();
                }
            }
            valence_array.push(parametre);
            console.log(valence_array);

        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------TRACE SYSTEM--------------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------

        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------ROBOT SIM SYSTEM ON // OFF------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        function robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo) {
            if (activeimulation == true) {
                if (action == 0) {
                    if (outcome == 0) {
                        scene.tweens.add({ targets: robotsim, x: 630, duration: 150, yoyo: true, ease: 'Power2' });
                        robotsim.setPosition(700, 150);
                    }
                    scene.tweens.add({ targets: robotsim, x: 630, duration: 150, yoyo: true, ease: 'Power2' });
                    robotsim.setPosition(700, 150);
                    Wallone.setFillStyle(0xff0000);
                    Walltwo.setFillStyle(0x00ff00);
                }
                if (action == 1) {
                    if (outcome == 0) {
                        scene.tweens.add({ targets: robotsim, x: 825, duration: 150, yoyo: true, ease: 'Power2' });
                        robotsim.setPosition(700, 150);
                    }
                    scene.tweens.add({ targets: robotsim, x: 825, duration: 150, yoyo: true, ease: 'Power2' });
                    robotsim.setPosition(700, 150);
                    Wallone.setFillStyle(0x00ff00);
                    Walltwo.setFillStyle(0xff0000);

                }

            }
        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------DRAWING TRACE SYSTEM------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        function drawing(action, outcome, scene) {
            if (action == 0) {
                if (outcome == 0) {
                    sprite = scene.add.sprite(936, 400, 'carre_rouge');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome == 1) {
                    sprite = scene.add.sprite(936, 412, 'carre_vert');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
            }
            if (action == 1) {
                if (outcome == 0) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome == 1) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_vert');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
            }
            if (action == 2) {
                if (outcome == 0) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome == 1) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_vert');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
            }
            if (action == 3) {
                if (outcome == 0) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome == 1) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_vert');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
            }
            if (action == 4) {
                if (outcome == 0) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome == 1) {
                    sprite = scene.add.sprite(1145, 412, 'cercle_vert');
                    scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                    valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
            }



        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------SCORE SYSTEM  (Need improuvement)-----------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        function calculScore() {
            score = 0;
            for (let i = 0; i < valence_array.length; i++) {
                score += valence_array[i];
            }
            console.log(score);

        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------TRACE POSITION MANAGER ---------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------BUTTON INTERACTION SYSTEM-------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        this.btnCarre.on(POINTER_DOWN, () => {
            action = 0;
            outcome = env(action, states);
            Traceon(this);
            drawing(action, outcome, this);
            posmanager(sprite, valeurInterraction, "Rond");
            calculScore();
            Increment();
        });


        this.btnCircle.on(POINTER_DOWN, () => {
            action = 1;
            outcome = env(action, states);
            drawing(action, outcome, this);
            calculScore();
            Increment();
        });

        this.btntriangle.on(POINTER_DOWN, () => {
            action = 1;
            outcome = env(action, states);
            drawing(action, outcome, this);
            calculScore();
            Increment();
        });

        this.btnCircle.on(POINTER_DOWN, () => {
            action = 1;
            outcome = env(action, states);
            drawing(action, outcome, this);
            calculScore();
            Increment();
        });
    }


    update() {

    }
}