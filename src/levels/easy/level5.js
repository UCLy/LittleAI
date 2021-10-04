import AbstractLevel from '../AbstractLevel.js';

const POINTER_DOWN = "pointerdown";
const POINTER_OVER = 'pointerover';
const ROBOT_X_LEFT = 630;
const ROBOT_X_CENTER = 715;
const ROBOT_X_RIGHT = 825;

export default class Level5 extends AbstractLevel {


    constructor() {
        super(5)
    }

    preload() {
    }

    create() {

        super.create();

        this.hedonist_array = [
            [0, 1],
            [-1, 1]
        ];

        //Draw Game form/
        this.afficheEqual = this.add.text(680, 455, "=", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);
        this.afficheEqual.setVisible(false);

        this.btnCarre = this.add.sprite(936, 412, 'carre').setInteractive({ useHandCursor: true });
        this.btnCircle = this.add.sprite(1145, 412, 'circle').setInteractive({ useHandCursor: true });
        this.add.tween({ targets: this.btnCarre, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });
        this.add.tween({ targets: this.btnCircle, scaleX: 0.8, scaleY: 0.8, repeat: -1, duration: 500, yoyo: true, ease: 'Sine.easeInOut' });

        //Draw Simulation
        this.robotsim = this.add.sprite(ROBOT_X_CENTER, 150, 'robot');
        this.robotsim.setScale(0.3);
        this.Wallone = this.add.rectangle(580, 150, 30, 30, 0x00ff00);
        this.Walltwo = this.add.circle(850, 150, 15, 0xff0000);

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
            this.robotsimulation(action, outcome);
            this.drawing(action, outcome);
            this.Traceon();
            this.afficheEqual.setVisible(true);
            this.calculScore(action, outcome);
         });


        this.btnCircle.on(POINTER_DOWN, () => {
            let action = 1;
            let outcome = this.env(action);
            this.robotsimulation(action, outcome);
            this.drawing(action, outcome);
            this.Traceon();
            this.afficheEqual.setVisible(true);
            this.calculScore(action, outcome);
         });
    }


    update() {
        if (this.robotsim.x == ROBOT_X_LEFT) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_CENTER, duration: 200, yoyo: false, ease: 'Quad.easeInOut' });
        }
        if (this.robotsim.x == ROBOT_X_RIGHT) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_CENTER, duration: 200, yoyo: false, ease: 'Quad.easeInOut' });
        }
    }

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------LEVEL SYSTEM--------------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------

    env(action) 
    {
        let outcome = 0;
        if (action == 0) {outcome = 1};
        return outcome;
    }

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------ROBOT SIM SYSTEM ON // OFF------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    robotsimulation(action, outcome) 
    {
        // The return to center position is implementented in udate() 

        if (action == 0) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_LEFT, duration: 200, yoyo: false, ease: 'Quad.easeIn' });
        }
        if (action == 1) {
            this.tweens.add({ targets: this.robotsim, x: ROBOT_X_RIGHT, duration: 200, yoyo: false, ease: 'Quad.easeIn' });
        }
    }
}