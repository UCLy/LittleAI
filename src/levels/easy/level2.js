import AbstractLevel from '../AbstractLevel.js';

export default class Level2 extends AbstractLevel {


    constructor() {
        super(2)
    }

    preload() {


    }

    create() {

        super.create();

        //load Variables use on game
        let activeTrace = false;
        let activeimulation = false;
        let nombreCompteur = 0;
        var states = [0, 1];
        let hedonist_array = [
            [0, 1],
            [0, 1]
        ];
        const POINTER_DOWN = "pointerdown";
        const POINTER_OVER = 'pointerover'
        let posSprites = [];
        let posValeurInterraction = [];
        let valence_array = [];
        let tableau_interaction = [];
        let valencetab;
        let outcome;
        let sprite;
        let valeurInterraction;
        let action;
        let sprite2posSprites;
        let animatepos;
        let animatevalence;

        let Wallone;
        let Walltwo;



        //Draw Game form/
        this.btnCarre = this.add.sprite(936, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1145, 412, 'circle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });


        //Draw Simulation
        let robotsim;
        if (activeimulation == true) {
            robotsim = this.add.sprite(700, 150, 'robot');
            robotsim.setScale(0.3);
            Wallone = this.add.rectangle(580, 150, 30, 30, 0x00ff00);
            Walltwo = this.add.circle(850, 150, 15, 0xff0000);
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
            let valence = hedonist_array[action][outcome];

            valence_array.push(valence);
            if (action == 1) {


            }
            if (action == 0) {

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
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(936, 400, 'carre_rouge');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                        valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    }
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome == 1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(936, 412, 'carre_vert');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                        valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    }
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
            }
            if (action == 1) {
                if (outcome == 0) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'cercle_rouge');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);

                }
                if (outcome == 1) {
                    console.log('output : ' + outcome + '  Action :' + action);
                    if (activeTrace == true) {
                        sprite = scene.add.sprite(1145, 412, 'cercle_vert');
                        scene.tweens.add({ targets: sprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                        valeurInterraction = scene.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
                    };
                    robotsimulation(scene, robotsim, action, outcome, activeimulation, Wallone, Walltwo);
                }
            }


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
            drawing(action, outcome, this);
            posmanager(sprite, valeurInterraction, "Rond");
            this.calculScore(valence_array);
            this.Increment();
        });


        this.btnCircle.on(POINTER_DOWN, () => {
            action = 1;
            outcome = env(action, states);
            Traceon(this);
            drawing(action, outcome, this);
            posmanager(sprite, valeurInterraction, "Rond");
            this.calculScore(valence_array);
            this.Increment();
        });
    }

    update() {

    }
}