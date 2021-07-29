//import phaser from 'phaser';

export default class AbstractLevel extends Phaser.Scene {

    constructor(level) {
        super('Level' + level);
        this.level = level;
    }

    preload(){}

    create(){
        this.backgroundimg = this.add.image(600, 300, 'bgi');

        this.add.text(500, 0, 'Level ' + this.level, { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        this.nextlevel = this.add.text(720, 2, '>', { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        this.previouslevel = this.add.text(455, 2, '<', { fontFamily: 'OCR A Std, monospace', fontSize: 50 })
        this.nextlevel.setInteractive({ useHandCursor: true });
        this.nextlevel.on('pointerdown', () => 
            {if (this.registry.get('maxUnlockedLevel') > this.level) 
                {this.scene.start('Level' + (this.level + 1))}
            });
        this.previouslevel.setInteractive({ useHandCursor: true });
        this.previouslevel.on('pointerdown', () => this.scene.start('Level' + (this.level - 1)));

        this.back = this.add.image(50, 50, 'backto');
        this.back.setInteractive({ useHandCursor: true });
        this.back.setScale(0.07);
        this.back.on('pointerdown', () => this.scene.start("Menu"));

                //text and other things
        //this.add.text(500, 0, 'Level 3 ', { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        this.TexteScore = this.add.text(700, 500, "Score \n", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        this.afficheScore = this.add.text(745, 440, "", { fontFamily: 'OCR A Std, monospace', fontSize: 40 });
        this.textWin = this.add.text(330, 300, "", { fontFamily: 'OCR A Std, monospace', fontSize: 20 })
        this.textWin.setInteractive({ useHandCursor: true });
        this.textWin.on('pointerdown', () => this.scene.start("Level4"));


        //this.createNavigationBar();
    }

    update(){}

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------PRINT SCORE & TEXT -------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    Increment() 
    {
        this.afficheScore.setText([this.score]);
        this.afficheScore.setFill(['white']);

        if (this.score >= 10) {
            this.afficheScore.setFill(['lime']);
            this.textWin.setText([
                'You win! Click > to proceed to next level'
            ]);
            this.textWin.setStroke('#ffd700');
            let maxUnlockedLevel = this.registry.get('maxUnlockedLevel');
            if (this.level >= maxUnlockedLevel) {
                this.registry.set('maxUnlockedLevel', maxUnlockedLevel + 1);
            }
        }
    }
    createNavigationBar()
    {
        this.add.text(500, 0, 'Level ' + this.level, { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        this.nextlevel = this.add.text(720, 2, '>', { fontFamily: 'OCR A Std, monospace', fontSize: 50 });
        this.previouslevel = this.add.text(455, 2, '<', { fontFamily: 'OCR A Std, monospace', fontSize: 50 })
        this.nextlevel.setInteractive({ useHandCursor: true });
        this.nextlevel.on('pointerdown', () => 
            {if (this.registry.get('maxUnlockedLevel') > this.level) 
                {this.scene.start('Level' + (this.level + 1))}
            });
        this.previouslevel.setInteractive({ useHandCursor: true });
        this.previouslevel.on('pointerdown', () => this.scene.start('Level' + (this.level - 1)));

        this.back = this.add.image(50, 50, 'backto');
        this.back.setInteractive({ useHandCursor: true });
        this.back.setScale(0.07);
        this.back.on('pointerdown', () => this.scene.start("Menu"));
    }
    
    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------SCORE SYSTEM  (Need improuvement)-----------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    calculScore(valence_array) 
    {
        this.score = 0;
        for (let i = 0; i < valence_array.length; i++) {
            this.score += valence_array[i];
        }
        console.log(this.score);
    }

}