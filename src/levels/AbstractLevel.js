//import phaser from 'phaser';

export default class AbstractLevel extends Phaser.Scene {

    constructor(level) {
        super('Level' + level);
        this.level = level;
    }

    preload(){}

    create(){

        this.score = 0;

        // Create the background image before enything else
        this.backgroundimg = this.add.image(600, 300, 'bgi');

        // Create the navigation bar
        this.add.text(625, 30, 'Level ' + this.level, { fontFamily: 'OCR A Std, monospace', fontSize: 50 }).setOrigin(0.5);
        this.nextlevel = this.add.text(625 + 150, 30, '>', { fontFamily: 'OCR A Std, monospace', fontSize: 50 }).setOrigin(0.5);
        this.updateNextLevelLink();
        this.previouslevel = this.add.text(625 - 150, 30, '<', { fontFamily: 'OCR A Std, monospace', fontSize: 50 }).setOrigin(0.5);
        if (this.level > 1)
        {
            this.previouslevel.setInteractive({ useHandCursor: true });
            this.previouslevel.setFill(['lime']);
            this.previouslevel.on('pointerdown', () => this.scene.start('Level' + (this.level - 1)));
        }
        // Create the menu button    
        this.back = this.add.image(50, 50, 'backto');
        this.back.setInteractive({ useHandCursor: true });
        this.back.setScale(0.07);
        this.back.on('pointerdown', () => this.scene.start("Menu"));

        // Create the score 
        this.TexteScore = this.add.text(750, 510, "Score", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);
        this.afficheScore = this.add.text(750, 455, "", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);;
        this.textWin = this.add.text(625, 300, "", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);
        //this.textWin.setFill(['lime']);
        this.textWin.setInteractive({ useHandCursor: true });
        this.textWin.on('pointerdown', () => this.scene.start('Level' + (this.level + 1)));
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
                'You win! Click here to proceed to next level'
            ]);
            this.textWin.setStroke('#ffd700');
            //let maxUnlockedLevel = this.registry.get('maxUnlockedLevel');
            let maxUnlockedLevel = parseInt(localStorage.getItem('maxUnlockedLevel')) || 1; 
            
            if (this.level >= maxUnlockedLevel) {
                //this.registry.set('maxUnlockedLevel', this.level + 1);
                localStorage.setItem('maxUnlockedLevel',this.level + 1);
            }
            updateNextLevelLink();
        }
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

    updateNextLevelLink()
    {
        if ((parseInt(localStorage.getItem('maxUnlockedLevel')) || 1) > this.level) 
        {
            this.nextlevel.setInteractive({ useHandCursor: true });
            this.nextlevel.setFill(['lime']);
            this.nextlevel.on('pointerdown', () => this.scene.start('Level' + (this.level + 1)));
        }
    }
}