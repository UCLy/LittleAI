import AbstractLevel from '../AbstractLevel.js';

const POINTER_DOWN = "pointerdown";
const POINTER_OVER = 'pointerover'

export default class Level1 extends AbstractLevel {


    constructor() {
        super(7)
    }

    preload() {
    }

    create() {

        super.create();

        this.envState = [1, 1];
        this.hedonist_array = [
            [0, 1],
            [0, 1]
        ];

        //Draw Game form/
        this.afficheEqual = this.add.text(700, 455, "=", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);;
 
        this.btnCarre = this.add.sprite(936, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1145, 412, 'circle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });

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

        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------BUTTON INTERACTION SYSTEM-------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        this.btnCarre.on(POINTER_DOWN, () => {
            let action = 0;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.calculScore(action, outcome);
        });

        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 1;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.calculScore(action, outcome);
        });
    }

    update() {

    }

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------LEVEL SYSTEM--------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------

    env(action) 
    {
        let outcome = 0;

        if (action == 0) {
            if (this.envState[0] == 1) {
                outcome = 1;
                this.envState[0] = 0;
                this.envState[1] = 1;
            }
        }
        if (action == 1) {
            if (this.envState[1] == 1) {
                outcome = 1;
                this.envState[0] = 1;
                this.envState[1] = 0;
            }
        }
        return outcome;
    }

}