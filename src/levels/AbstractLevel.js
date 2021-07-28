//import phaser from 'phaser';

export default class AbstractLevel extends Phaser.Scene {

    constructor(level) {
        super(level);
    }

    preload(){}

    create() {}
    
    update(){}

        //------------------------------------------------------------------------------------------------------------------------
        //----------------------------------------PRINT SCORE & TEXT -------------------------------------------------------------
        //------------------------------------------------------------------------------------------------------------------------
        Increment(score, afficheScore, textWin) {
        afficheScore.setText([
            score
        ]);
        afficheScore.setFill(['white']);
        if (score >= 10) {
            afficheScore.setFill(['lime']);
            textWin.setText([
                'Victoire! Click here to access next level'
            ]);
            textWin.setStroke('#ffd700');
        }
    }

}