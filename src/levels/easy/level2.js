import AbstractLevel from '../AbstractLevel.js';

export default class Level2 extends AbstractLevel {


    constructor() {
        super(2)
    }

    preload() {    }

    create() {

        super.create();

        this.afficheScore.setPosition(625, 490);

        const POINTER_DOWN = "pointerdown";
        const POINTER_OVER = 'pointerover'

        this.hedonist_array = [
            [-1, 1],
            [1, 1]
        ];

        // Draw Game 
        this.btnCarre = this.add.sprite(625 - 100, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(625 + 100, 412, 'circle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });

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

        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------BUTTON INTERACTION SYSTEM-------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        this.btnCarre.on(POINTER_DOWN, () => {
            let action = 0;
            let outcome = this.env(action);
            this.calculScore(action,outcome);
        });

        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 1;
            let outcome = this.env(action);
            this.calculScore(action,outcome);
        });
    }

    update() {}

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------LEVEL SYSTEM--------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------

    env(action) 
    {
        let outcome = 0;
        return outcome;
    }

}