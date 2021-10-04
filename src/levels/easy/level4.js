import AbstractLevel from '../AbstractLevel.js';

export default class Level4 extends AbstractLevel {


    constructor() {
        super(4)
    }

    preload() {
    }

    create() {

        super.create();

        this.hedonist_array = [
            [-1, -1],
            [-1, 1]
        ];
        const POINTER_DOWN = "pointerdown";
        const POINTER_OVER = 'pointerover'

        this.afficheEqual = this.add.text(680, 455, "=", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);
        this.afficheEqual.setVisible(false);

        //Draw Game form/
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
            this.afficheEqual.setVisible(true);
            this.calculScore(action,outcome);
        });


        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 1;
            let outcome = this.env(action);
            this.drawing(action, outcome);
            this.Traceon();
            this.afficheEqual.setVisible(true);
            this.calculScore(action,outcome);
        });
    }


    update() {

    }

    env(action) {

        var outcome = action;
        return outcome;
    }

}