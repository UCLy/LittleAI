import AbstractLevel from '../AbstractLevel.js';

const POINTER_DOWN = "pointerdown";
const POINTER_OVER = 'pointerover';
const ROBOT_X_LEFT = 630;
const ROBOT_X_CENTER = 715;
const ROBOT_X_RIGHT = 825;
const ROBOT_Y_TOP = 100;
const ROBOT_Y_CENTER = 150;

export default class Level10 extends AbstractLevel {


    constructor() {
        super(10)
    }

    preload() {
    }

    create() {

        super.create();

        this.envState = [1, 0, 0];
        this.hedonist_array = [
            [0, 1],
            [0, 1],
            [0, 1]
        ];
     
        //Draw Game form/
        this.afficheEqual = this.add.text(700, 455, "=", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);

        this.btnCarre = this.add.sprite(930, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1040, 412, 'circle').setInteractive({ useHandCursor: true });
        this.btnTriangle = this.add.sprite(1145, 412, 'triangle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnTriangle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });


        //Draw Simulation
        this.robotsim = this.add.sprite(ROBOT_X_CENTER, ROBOT_Y_CENTER, 'robot');
        this.robotsim.setScale(0.3);
        this.Wallone = this.add.rectangle(580, 150, 30, 30, 0x00ff00);
        this.Walltwo = this.add.circle(850, 150, 15, 0xff0000);
        //this.buttonup = this.add.rectangle(710, 80, 100, 10, 0xff0000);
        this.buttonup = this.add.triangle(735, 75, 0, -10, -20, 20, 20, 20, 0xff0000);

        // Animate buttons

        this.btnCircle.on(POINTER_OVER, function() {
            this.setTint(0x999999);
        });
        this.btnCircle.on('pointerout', function() {
            this.clearTint();
        });

        this.btnCarre.on(POINTER_OVER, function() {
            this.setTint(0x999999);
        });
        this.btnCarre.on('pointerout', function() {
            this.clearTint();
        });

        this.btnTriangle.on(POINTER_OVER, function() {
            this.setTint(0x999999);
        });
        this.btnTriangle.on('pointerout', function() {
            this.clearTint();
        });
        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------BUTTON INTERACTION SYSTEM-------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        this.btnCarre.on(POINTER_DOWN, () => {
            let action = 0;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.calculScore(action, outcome);
            this.robotsimulation(action, outcome);
        });


        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 1;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.calculScore(action, outcome);
            this.robotsimulation(action, outcome);
        });

        this.btnTriangle.on(POINTER_DOWN, () => {
            let action = 2;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.calculScore(action, outcome);
            this.robotsimulation(action, outcome);
        });
    }


    update() {
        if (this.robotsim.x <= ROBOT_X_LEFT) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_CENTER, duration: 200, yoyo: false, ease: 'Quad.easeInOut' });
        }
        if (this.robotsim.x >= ROBOT_X_RIGHT) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_CENTER, duration: 200, yoyo: false, ease: 'Quad.easeInOut' });
        }
        if (this.robotsim.y <= ROBOT_Y_TOP) {
            this.tweens.add({ targets: this.robotsim, y: ROBOT_Y_CENTER, duration: 200, yoyo: false, ease: 'Quad.easeInOut' });
        }
    }

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------LEVEL SYSTEM--------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------

    env(action) {

        let outcome = 0;

        if (action == 0) {
            if (this.envState[0] == 1) {
                outcome = 1;
                this.envState[0] = 0;
                this.envState[1] = 1;
                this.envState[2] = 0;
            }
        }
        if (action == 1) {
            if (this.envState[1] == 1) {
                outcome = 1;
                this.envState[0] = 0;
                this.envState[1] = 0;
                this.envState[2] = 1
            }
        }
        if (action == 2) {
            if (this.envState[2] == 1) {
                outcome = 1;
                this.envState[0] = 1;
                this.envState[1] = 0;
                this.envState[2] = 0;
            }
        }
        return outcome;
    }

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------ROBOT SIM SYSTEM Left / Right / Up------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    robotsimulation(action, outcome) 
    {
        if (action == 0) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_LEFT, duration: 150, yoyo: false, ease: 'Quad.easeIn' });
            
            console.log("Rotate " + this.Wallone.rotate);
            if (outcome == 1) {
                //this.tweens.add({ targets: this.Wallone, angle: 180, duration: 150, yoyo: false, ease: 'Power2' })
                this.Wallone.setFillStyle(0xff0000);
                this.Walltwo.setFillStyle(0x00ff00);
                this.buttonup.setFillStyle(0xff0000);
            }
        }
        if (action == 1) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_RIGHT, duration: 150, yoyo: true, ease: 'Quad.easeIn' });

            if (outcome == 1) {
                this.Wallone.setFillStyle(0xff0000);
                this.Walltwo.setFillStyle(0xff0000);
                this.buttonup.setFillStyle(0x00ff00);
            }
        }
        if (action == 2) {
            this.tweens.add({ targets: this.robotsim, y: ROBOT_Y_TOP, duration: 150, yoyo: false, ease: 'Quad.easeIn' });

            if (outcome == 1) {
                //this.tweens.add({ targets: this.buttonup, angle: 180, duration: 200, yoyo: false, ease: 'Power2' })
                this.Wallone.setFillStyle(0x00ff00);
                this.Walltwo.setFillStyle(0xff0000);
                this.buttonup.setFillStyle(0xff0000);
            } else {
            //    this.tweens.add({ targets: this.buttonup, angle: 0, duration: 200, yoyo: false, ease: 'Power2' })
            };
        }       
    }

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------DRAWING TRACE SYSTEM------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    drawing(action, outcome) {
 
        if (action == 0) {
            if (outcome == 0) {
                console.log('output : ' + outcome + '  Action :' + action);
                this.interactionSprite = this.add.sprite(936, 400, 'carre_rouge');
                this.tweens.add({ targets: this.interactionSprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                this.valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
            }
            if (outcome == 1) {
                console.log('output : ' + outcome + '  Action :' + action);
                this.interactionSprite = this.add.sprite(936, 412, 'carre_vert');
                this.tweens.add({ targets: this.interactionSprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
                this.valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
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
            if (outcome == 0) {
                console.log('output : ' + outcome + '  Action :' + action);
                this.interactionSprite = this.add.sprite(1145, 412, 'cercle_rouge');
                this.tweens.add({ targets: this.interactionSprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                this.valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
            }
            if (outcome == 1) {
                console.log('output : ' + outcome + '  Action :' + action);
                this.interactionSprite = this.add.sprite(1145, 412, 'cercle_vert');
                this.tweens.add({ targets: this.interactionSprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                this.valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
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
            if (outcome == 0) {
                console.log('output : ' + outcome + '  Action :' + action);
                this.interactionSprite = this.add.sprite(1145, 412, 'triangle_jaune');
                this.tweens.add({ targets: this.interactionSprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                this.valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
            }
            if (outcome == 1) {
                console.log('output : ' + outcome + '  Action :' + action);
                this.interactionSprite = this.add.sprite(1145, 412, 'triangle_vert');
                this.tweens.add({ targets: this.interactionSprite, x: 622, y: 412, duration: 200, ease: 'Power2', });
                this.valeurInterraction = this.add.text(615, 440, "" + outcome, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
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
}