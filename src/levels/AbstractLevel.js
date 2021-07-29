//import phaser from 'phaser';

export default class AbstractLevel extends Phaser.Scene {

    constructor(level) {
        super('Level' + level);
        this.level = level;
    }

    preload(){}

    create(){}
    
    update(){}

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------PRINT SCORE & TEXT -------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    Increment(score, afficheScore, textWin) 
    {
        afficheScore.setText([score]);
        afficheScore.setFill(['white']);

        if (score >= 10) {
            afficheScore.setFill(['lime']);
            textWin.setText([
                'You win! Click > to proceed to next level'
            ]);
            textWin.setStroke('#ffd700');
            let maxUnlockedLevel = this.registry.get('maxUnlockedLevel');
            if (this.level >= maxUnlockedLevel) {
                this.registry.set('maxUnlockedLevel', maxUnlockedLevel + 1);
            }
        }
    }

}