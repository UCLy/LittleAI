//import phaser from 'phaser';

export default class AbstractLevel extends Phaser.Scene {

    constructor(level) {
        super('Level' + level);
        this.level = level;
    }

    preload(){}

    create(){

        this.score = 0;
//        this.nombreCompteur = 0;
        this.posSprites = [];
        this.posValeurInterraction = [];
        //this.tableau_interaction = [];
        this.valeurInterraction = 0;
        this.hedonist_array = [
            [0, 1],
            [0, 1]
        ];
        this.valence_array = [];

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
        this.afficheScore = this.add.text(750, 455, "0", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);
        this.textWin = this.add.text(625, 300, "", { fontFamily: 'OCR A Std, monospace', fontSize: 40 }).setOrigin(0.5);
        //this.textWin.setFill(['lime']);
        this.textWin.setInteractive({ useHandCursor: true });
        this.textWin.on('pointerdown', () => this.scene.start('Level' + (this.level + 1)));
   }

    update(){}

     //------------------------------------------------------------------------------------------------------------------------
    //---------------------------------------- SCORE SYSTEM  -----------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------
    calculScore(action, outcome) 
    {
        // Update valence array
        for (let i = 0; i < this.valence_array.length; i++) {
            if (i >= 9) {
                this.valence_array.shift();
            }
        }
        this.valence_array.push(this.hedonist_array[action][outcome]);

        // computes score
        this.score = 0;
        for (let i = 0; i < this.valence_array.length; i++) {
            this.score += this.valence_array[i];
        }
        console.log(this.score);

        // Display score
        this.afficheScore.setText([this.score]);
        this.afficheScore.setFill(['white']);

        // Unlock level
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
            this.updateNextLevelLink();
        }
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

    // Shift the trace
    Traceon() 
    {
        if (this.posSprites.length > 0 ) {
            console.log("POS SPRITE LENGTH " + this.posSprites.length);
            for (let i = 0; i < this.posSprites.length; i++) {
                console.log("POS SPRITE : " + i + " " + this.posSprites[i]);
                let sprite2posSprites = this.posSprites[i];
                let animatepos = sprite2posSprites.x;
                animatepos -= 65;
                //this.add.tween({ targets: sprite2posSprites, x: animatepos, duration: 180, ease: 'Linear' });
                this.add.tween({ targets: sprite2posSprites, x: animatepos, duration: 200, ease: 'Power2' });
                let valencetab = this.posValeurInterraction[i];
                let animatevalence = valencetab.x;
                animatevalence -= 65
                this.add.tween({ targets: valencetab, x: animatevalence, duration: 200, ease: 'Power2' });
                //this.add.tween({ targets: valencetab, x: animatevalence, duration: 180, ease: 'Linear' });
                console.log("valence = " + animatevalence)
            }
        }
        this.posSprites.push(this.interactionSprite);
        this.posValeurInterraction.push(this.valeurInterraction);
    }
 

    //------------------------------------------------------------------------------------------------------------------------
    //----------------------------------------DRAWING TRACE SYSTEM------------------------------------------------------------
    //------------------------------------------------------------------------------------------------------------------------

    drawing(action, outcome) {
        console.log('Action :' + action + ' Outcome : ' + outcome );
        let valence = this.hedonist_array[action][outcome];
        if (action == 0) {
            if (outcome == 0) {
                this.interactionSprite = this.add.sprite(936, 400, 'carre_rouge');
            }
            if (outcome == 1) {
                this.interactionSprite = this.add.sprite(936, 412, 'carre_vert');
            }
        }
        if (action == 1) {
            if (outcome == 0) {
                this.interactionSprite = this.add.sprite(1145, 412, 'cercle_rouge');
            }
            if (outcome == 1) {
                this.interactionSprite = this.add.sprite(1145, 412, 'cercle_vert');
            }
        }
        this.tweens.add({ targets: this.interactionSprite, x: 622, y: 412, duration: 200, ease: 'Power2' });
        this.valeurInterraction = this.add.text(615, 440, "" + valence, { fontFamily: 'OCR A Std, monospace', fontSize: 30 });
    }

}