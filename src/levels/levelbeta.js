import phaser from 'phaser';
import MyGame from '../index.js';

import backgroundimage from '../assets/background.png';

import Info from '../assets/icons/info.png';
import Ranking from '../assets/icons/ranking.png';
import Replay from '../assets/icons/replay.png';
import Backarrow from '../assets/back-arrow.png';
import Pause from '../assets/icons/pause.png';

import Robot from '../assets/littleAI.png';

import Whitesquare from'../assets/Whiteform/carre.png';
import Wcircle from '../assets/Whiteform/circle.png';
import Circlered from '../assets/game-icons/circle_red.png';
import Redsquare from '../assets/game-icons/carre_rouge.png';
import Greensquare from'../assets/game-icons/carre_vert.png';
import Greencircle from'../assets/game-icons/circle_vert.png';
import Levelselector from '../data/levels'
import { length } from 'file-loader';


export default class Level1beta extends Phaser.Scene {


constructor()
{
    super('Level1beta')

}



preload()
{
    
    this.load.image ('bgi', backgroundimage);
    this.load.image('info', Info);
    this.load.image('ranking', Ranking);
    this.load.image('replay', Replay);

    this.load.image('pause', Pause);
    this.load.image('backto', Backarrow);

    this.load.image('carre', Whitesquare);
    this.load.image('circle', Wcircle);
    this.load.image('cercle_rouge', Circlered );
    this.load.image('cercle_vert', Greencircle );
    this.load.image('carre_vert', Greensquare);
    this.load.image('carre_rouge', Redsquare);


}

create()
{
    
    //load Variables use on game 
    const hedonist = [[1, -1],[1, -1]];
    const POINTER_DOWN = "pointerdown";
    const POINTER_OVER = 'pointerover'
    let traceform = [];
    let tracevalues = [];
    var states= [1,1];
    //init Buttons 
    let btnone;
    let btntwo;
    //init sprites gen.
    var Formpush = this.add.sprite(null, null, null);
    // background & pictures
    var backgroundimg = this.add.image(600, 400,'bgi');
    backgroundimg.alpha = 0.7;

    var info = this.add.image(50, 130, 'info');
    info.setScale(1.50)

    var replay = this.add.image(250, 130, 'replay');
    replay.setScale(1.50)
    replay.setInteractive({useHandCursor: true});
    replay.on('pointerdown', () => this.scene.start("Level1"));
    var score = this.add.image(58,275,'score');
    score.setScale(0.15);


    var back = this.add.image(1200,50, 'backto');
        back.setInteractive({useHandCursor: true});
        back.setScale(0.3);
        back.on('pointerdown', () => this.scene.start("Menu"));

    //lignes de Découpage de la scenes 
    var MenutoForm = this.add.graphics();
    MenutoForm.lineStyle(1, 0xd3d3d3, 1);
    MenutoForm.lineBetween(300,0,300,275);

    var Formtochain = this.add.graphics();
    Formtochain.lineStyle(1, 0xd3d3d3, 1);
    Formtochain.lineBetween(832, 275, 832, 550);

    var ChaintoSimulation = this.add.graphics();
    ChaintoSimulation.lineStyle(1, 0xd3d3d3, 1);
    ChaintoSimulation.lineBetween(0, 275, 1250,275);

    //text and other things
    this.add.text(500, 0, 'Little IA Level 1 ', {fontFamily: 'OCR A Std, monospace', fontSize: 50});
    let TexteScore = this.add.text(700, 300,"Score \n" ,{fontFamily: 'OCR A Std, monospace', fontSize: 40});
    let afficheScore =this.add.text(745, 440, "",{fontFamily: 'OCR A Std, monospace', fontSize: 40});
    let textWin = this.add.text(330,300,"",{fontFamily: 'OCR A Std, monospace', fontSize: 20})
        textWin.setInteractive({useHandCursor:true});
        textWin.on('pointerdown',() => this.scene.start("LevelsScene"));

    //Draw Game form/
    btnone = this.add.sprite(936, 412, 'carre').setInteractive({useHandCursor: true});
    btntwo = this.add.sprite(1145, 412, 'circle').setInteractive({useHandCursor: true});

    //Draw Simulation
    let robotsim = this.add.sprite(700, 150, 'robot');
    robotsim.setScale(0.3);

    let Wallone = this.add.rectangle(580, 150,10,100, 0x00ff00);
    let Walltwo = this.add.rectangle(850, 150,10,100, 0x00ff00);

    let outcome;
    let action = null;
            //Square
                btnone.on(POINTER_DOWN, function () {
                this.setTint(0xff00ff);
                let action = 0;
                console.log(action);
                outcome = env(action, states);

            });

                btnone.on(POINTER_OVER, function () {
                this.setTint(0x999999);
            });
                btnone.on('pointerout', function () {
                this.clearTint();
            });
    
            //Circle button
                btntwo.on(POINTER_DOWN, function () {
                this.setTint(0xff00ff);
                
                let action = 1;
                console.log(action);
                outcome = env(action,states);


            });    
    
                btntwo.on(POINTER_OVER, function () {
                this.setTint(0x999999);
            });
                btntwo.on('pointerout', function () {
                this.clearTint();
            });
        
    function env(action,states){
        
        var outcome = states[action]
            if (action == 0) {
                if(states[0] == 1){
                    states[0] = 0; states[1] = 1;
                }
                
            }
            if (action == 1) {
                if (states[1] == 1) {
                    states[0] = 1; states[1] = 0;
                } 
            }
        console.log(states)
        console.log(outcome + "Outcome test");
        return outcome;
    }
    


        if (outcome = 1){
            if(action = 0){
                Formpush = this.add.sprite(622, 412, 'carre_vert');
            }
           if(action = 1){
                Formpush = this.add.sprite(622, 412, 'cercle_vert');
           }
        }
        if (outcome = 0){
            if(action = 0){
                Formpush = this.add.sprite(622, 412, 'carre_rouge');
            }
            if(action = 1){
                Formpush = this.add.sprite(622, 412, 'cercle_rouge');
            }
            
        }


    }//end create section
    


            
      /*function Increment() {
        afficheScore.setText([
            score
        ]);
        afficheScore.setFill(['white']);
        if(score >= 10){
            afficheScore.setFill(['lime']);
            textWin.setText([
                'Victoire ! press for next level'
            ]);
        } 
    }
        function feedback(parametre) {
        for (let i = 0; i < tableau_feedback.length; i++) {
            if (i >= 9) {
                tableau_feedback.shift();
            }
        }
        tableau_feedback.push(parametre);
        console.log(tableau_feedback);

    }
    function calculScore() {
        score = 0;
        for (let i = 0; i < tableau_feedback.length; i++) {
            score += tableau_feedback[i];
        }
        console.log(score); 

    }
    this.btnCarre.on(POINTER_DOWN || Squaretouch.on , () => {

        if (posSprites.length > 0) {
            for (let i = 0; i < posSprites.length; i++) {
                let sprite2posSprites = posSprites[i];
                sprite2posSprites.x -=65 ;
                toto = posValeurInterraction[i];
                toto.x -= 65;
                console.log(sprite2posSprites);
                console.log(posSprites);
                console.log(toto.x);
            }
        }
        let sprite ;
        let Formpush = null;
        let valeurInterraction;

        if(tableau_interaction[tableau_interaction.length - 1] === 'Carré'){
            feedback(hedonist[0][1]);
            Formpush = this.add.sprite(936, 400, 'carre_rouge');
            this.tweens.add({
                targets: Formpush,
                x: 622,
                y: 412,
                duration: 200,
                ease: 'Power2'
            });
            this.tweens.add({ targets: robotsim, x: 630, duration: 200, yoyo: false, ease:'Power2'})
            sprite = Formpush;
            robotsim.setPosition(700, 150);
            valeurInterraction = this.add.text(615, 440, "" + hedonist[0][1],{fontFamily: 'OCR A Std, monospace', fontSize: 30});
        }
        else{
            feedback(hedonist[0][0]);
            Formpush = this.add.sprite(936, 412, 'carre_vert');
            this.tweens.add({
                targets: Formpush,
                x: 622,
                y: 412,
                duration: 200,
                ease: 'Power2',
            });
            Wallone.setFillStyle(0xff0000);
            Walltwo.setFillStyle(0x00ff00);
            this.tweens.add({ targets: robotsim, x: 630, duration: 200, yoyo: true ,ease:'Power2'})
            sprite = Formpush;
            robotsim.setPosition(700, 150);
            valeurInterraction = this.add.text(615, 440, "+" + hedonist[0][0],{fontFamily: 'OCR A Std, monospace', fontSize: 30});
        }




        posSprites.push(sprite);
        posValeurInterraction.push(valeurInterraction);
        nombreCompteur += 1;
        tableau_interaction.push('Carré');
        console.log(tableau_interaction);


        calculScore();
        Increment();

    });


    this.btnCircle.on(POINTER_DOWN, () => {

        if (posSprites.length > 0) {
            for (let i = 0; i < posSprites.length; i++) {
                let sprite2posSprites = posSprites[i];
                sprite2posSprites.x -= 65;
                toto = posValeurInterraction[i];
                toto.x -= 65;
                console.log(sprite2posSprites + "Circle");
                console.log(posSprites + "Circle");
                console.log(toto.x + "Circle");
            }
        }

        let sprite;
        var Formpush;
        let valeurInterraction;


        if(tableau_interaction[tableau_interaction.length - 1] === 'Rond'){
            feedback(hedonist[1][1]);
            Formpush = this.add.image(1145, 400, 'cercle_rouge');
            this.tweens.add({
                targets: Formpush,
                x: 622,
                y: 412,
                duration: 200,
                ease: 'Power2',
            });
            this.tweens.add({ targets: robotsim, x: 825, duration: 200, yoyo: true, ease:'Power2'})
            sprite = Formpush;
            robotsim.setPosition(700, 150);
            valeurInterraction = this.add.text(615, 440, "" + hedonist[1][1],{fontFamily: 'OCR A Std, monospace', fontSize: 30});
        }
        else{
            feedback(hedonist[1][0]);
            Formpush = this.add.image(1145, 412, 'cercle_vert');
            this.tweens.add({
                targets: Formpush,
                x: 622,
                y: 412,
                duration: 200,
                ease: 'Linear',
            });
            Wallone.setFillStyle(0x00ff00);
            Walltwo.setFillStyle(0xff0000);
            this.tweens.add({ targets: robotsim, x: 825, duration: 200, yoyo: true, ease:'Power2'})
            sprite = Formpush;
            robotsim.setPosition(700, 150);
            valeurInterraction = this.add.text(615, 440, "+" + hedonist[1][0],{fontFamily: 'OCR A Std, monospace', fontSize: 30});
        }




        posSprites.push(sprite);
        console.log("possprite " + posSprites.length )
        posValeurInterraction.push(valeurInterraction);
        nombreCompteur += 1;
        tableau_interaction.push('Rond');
        console.log(tableau_interaction);



        calculScore();
        Increment();
        console.log(toto.x + "Toto value");
        this.tweens.add({targets: sprite, x: toto.x, y: 412, duration:100, ease:'Power1'})
        sprite.setPosition(toto.x);
    });

    this.tweens.add({

        targets: this.btnCarre,
        scaleX: 0.8,
        scaleY: 0.80,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'

    });
    this.tweens.add({

        targets: this.btnCircle,
        scaleX: 0.80,
        scaleY: 0.80,
        yoyo: true,
        repeat: -1,
        ease: 'Sine.easeInOut'

    });




*/
    

 update()
{



}

}