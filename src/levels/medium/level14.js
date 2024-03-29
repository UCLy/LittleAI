import phaser from 'phaser';
import MyGame from '../../index.js';

import backgroundimage from '../../assets/background.png';


export default class Level14 extends Phaser.Scene {


    constructor() {
        super('Level14')

    }



    preload() {


    }

    create() {

        //load Variables use on game
        let activeTrace = false;
        let activeimulation = true;
        let revealresultonform = true;
        var score = 0;
        let nombreCompteur = 0;
        var states = [1, 0, 0];
        let hedonist_array = [
            [0, 5],
            [0, -1],
            [0, -2]

        ];
        console.log(hedonist_array[2][0]);
        const POINTER_DOWN = "pointerdown";
        const POINTER_OVER = 'pointerover';
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
        let buttonup;


        // background & pictures
        var backgroundimg = this.add.image(600, 300, 'bgi');

        // "New function" Change Level directly on game
        let nextlevel = this.add.text(755, 2, '>', { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        let previouslevel = this.add.text(455, 2, '<', { fontFamily: 'OCR A Std, monospace', fontSize: 50 })
        nextlevel.setInteractive({ useHandCursor: true });
        nextlevel.on('pointerdown', () => this.scene.start('Level14'));
        previouslevel.setInteractive({ useHandCursor: true });
        previouslevel.on('pointerdown', () => this.scene.start('Level12'));

        var back = this.add.image(50, 50, 'backto');
        back.setInteractive({ useHandCursor: true });
        back.setScale(0.07);
        back.on('pointerdown', () => this.scene.start("Menu"));


        //text and other things
        this.add.text(500, 0, 'Level 13 ', { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        let TexteScore = this.add.text(700, 500, "Score \n", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        let afficheScore = this.add.text(745, 440, "", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        let textWin = this.add.text(330, 300, "", { fontFamily: 'OCR A Std, monospace', fontSize: 20 })
        textWin.setInteractive({ useHandCursor: true });
        textWin.on('pointerdown', () => this.scene.start("LevelsScene"));

        //Draw Game form/
        this.btnCarre = this.add.sprite(930, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1040, 412, 'circle').setInteractive({ useHandCursor: true });
        this.btnTriangle = this.add.sprite(1145, 412, 'triangle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnTriangle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });


        //Draw Simulation
        let robotsim;
        if (activeimulation == true) {
            robotsim = this.add.sprite(700, 150, 'robot');
            robotsim.setScale(0.3);
            Wallone = this.add.rectangle(580, 150, 30, 30, 0x00ff00);
            Walltwo = this.add.circle(850, 150, 15, 0xff0000);
            buttonup = this.add.rectangle(710, 80, 100, 10, 0xff0000);
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
        //create button triangle


        this.btnTriangle.on(POINTER_OVER, function() {
            this.setTint(0x999999);
        });
        this.btnTriangle.on('pointerout', function() {
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
            console.log("action" + action + "outcome" + outcome);
            valence = hedonist_array[action][outcome];

            valence_array.push(valence);
            if (action == 0) {

                if (states[0] == 1) {
                    states[0] = 0;
                    states[1] = 1;
                    states[2] = 0;
                }

            }
            if (action == 1) {
                if (states[1] == 1) {
                    states[0] = 0;
                    states[1] = 0;
                    states[2] = 1
                }

            }
            if (action == 2) {
                if (states[2] == 1) {
                    states[0] = 1;
                    states[1] = 0;
                    states[2] = 0;
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
                textWin.setStroke('#ffd700');
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
        function Traceon(scene) {
            if (posSprites.length > 0 && activeTrace == true) {
                for (let i = 0; i < posSprites.length; i++) {
                    console.log("POS SPRITE : " + posSprites[0]);
                    let sprite2posSprites = posSprites[i];
                    let animatepos = sprite2posSprites.x;
                    animatepos -= 65;
                    scene.add.tween({ targets: sprite2posSprites, x: animatepos, duration: 180, ease: 'Linear' });
                    valencetab = posValeurInterraction[i];
                    let animatevalence = valencetab.x;
                    animatevalence -= 65
                    scene.add.tween({ targets: valencetab, x: animatevalence, duration: 200, ease: 'Power2' });
                    console.log("valence = " + animatevalence)
                }
            }
        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------ROBOT SIM SYSTEM Left / Right / Up------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        function robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo) {
            if (activeimulation == true) {
                if (action == 0) {
                    if (outcome <= 0) {
                        scene.tweens.add({ targets: robotsim, x: 630, duration: 150, yoyo: true, ease: 'Power2' });
                        robotsim.setPosition(700, 150);
                    }
                    scene.tweens.add({ targets: robotsim, x: 630, duration: 150, yoyo: true, ease: 'Power2' });
                    robotsim.setPosition(700, 150);

                    if (outcome >= 1) {
                        Wallone.setFillStyle(0xff0000);
                        Walltwo.setFillStyle(0x00ff00);
                    }
                }
                if (action == 1) {
                    if (outcome <= 0) {
                        scene.tweens.add({ targets: robotsim, x: 825, duration: 150, yoyo: true, ease: 'Power2' });
                        robotsim.setPosition(700, 150);
                    }
                    scene.tweens.add({ targets: robotsim, x: 825, duration: 150, yoyo: true, ease: 'Power2' });
                    robotsim.setPosition(700, 150);
                    if (outcome == 1) {
                        Walltwo.setFillStyle(0xff0000);
                        buttonup.setFillStyle(0x00ff00);
                    }
                }
                if (action == 2) {
                    if (outcome <= 0) {
                        scene.tweens.add({ targets: robotsim, y: 100, duration: 150, yoyo: true, ease: 'Power2' });
                        robotsim.setPosition(700, 150);
                    }
                    scene.tweens.add({ targets: robotsim, x: 710, duration: 150, yoyo: true, ease: 'Power2' });
                    robotsim.setPosition(700, 150);
                    if (outcome >= 1) {
                        Wallone.setFillStyle(0x00ff00);
                        Walltwo.setFillStyle(0xff0000);
                        buttonup.setFillStyle(0xff0000);
                    };
                }

            }
        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------DRAWING TRACE SYSTEM------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        function drawing(action, outcome, scene, valence) {
            if (action == 0) {
                if (outcome <= 0) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(936, 400, 'carre_rouge');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                        valeurInterraction = scene.add.text(615, 440, "" + valence, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    }
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome >= 1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(936, 412, 'carre_vert');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                        valeurInterraction = scene.add.text(615, 440, "" + valence, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    }
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
                /*if (outcome == -1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                */
            }
            if (action == 1) {
                if (outcome <= 0) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + valence, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome >= 1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'cercle_vert');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + valence, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
                /*if (outcome == -1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                */
            }
            if (action == 2) {
                if (outcome <= 0) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'triangle_jaune');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + valence, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome >= 1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'triangle_vert');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + valence, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
                /*if (outcome == -1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'triangle_rouge');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                */

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
        function posmanager(sprite, valeurInterraction, formuse) {
            posSprites.push(sprite);
            posValeurInterraction.push(valeurInterraction);
            nombreCompteur += 1;
            tableau_interaction.push(formuse);
            console.log(tableau_interaction);
        }
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------BUTTON INTERACTION SYSTEM-------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        this.btnCarre.on(POINTER_DOWN, () => {
            action = 0;
            outcome = env(action, states);
            Traceon(this);
            drawing(action, outcome, this, valence);
            posmanager(sprite, valeurInterraction, "Rond");
            calculScore();
            Increment();
        });


        this.btnCircle.on(POINTER_DOWN, () => {
            action = 1;
            outcome = env(action, states);
            Traceon(this);
            drawing(action, outcome, this, valence);
            posmanager(sprite, valeurInterraction, "Rond");
            calculScore();
            Increment();
        });

        this.btnTriangle.on(POINTER_DOWN, () => {
            action = 2;
            outcome = env(action, states);
            Traceon(this);
            drawing(action, outcome, this, valence);
            posmanager(sprite, valeurInterraction, "Triangle");
            calculScore();
            Increment();
        });
    }


    update() {

    }
}