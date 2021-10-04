import AbstractLevel from '../AbstractLevel.js';

const POINTER_DOWN = "pointerdown";
const POINTER_OVER = 'pointerover';

export default class Level9 extends AbstractLevel {


    constructor() {
        super(9)
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
        this.afficheEqual = this.add.text(680, 455, "=", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);
        this.afficheEqual.setVisible(false);

        this.btnCarre = this.add.sprite(930, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1040, 412, 'circle').setInteractive({ useHandCursor: true });
        this.btnTriangle = this.add.sprite(1145, 412, 'triangle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnTriangle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });

        // Anim buttons

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
            this.afficheEqual.setVisible(true);
            this.calculScore(action, outcome);
        });


        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 1;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.afficheEqual.setVisible(true);
            this.calculScore(action, outcome);
        });

        this.btnTriangle.on(POINTER_DOWN, () => {
            let action = 2;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.afficheEqual.setVisible(true);
            this.calculScore(action, outcome);
        });
    }


    update() {

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