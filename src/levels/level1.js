import phaser from 'phaser';
import MyGame from '../index.js';

import backgroundimage from '../assets/background.png';

import Info from '../assets/icons/info.png';
import Ranking from '../assets/icons/ranking.png';
import Replay from '../assets/icons/replay.png';
import Hexagon from '../assets/icons/hexagon.png';
import Pause from '../assets/icons/pause.png' 

import Levelselector from '../data/levels'
import { Shapesform } from '../data/shapesdata'
import GameFunction from '../Gameengine/polygon'


export default class Level1 extends Phaser.Scene {


constructor()
{
    super('Level1')

}



preload()
{
    
    this.load.image ('bgi', backgroundimage);
    this.load.image('info', Info);
    this.load.image('ranking', Ranking);
    this.load.image('replay', Replay);
    this.load.image('score', Hexagon);
    this.load.image('pause', Pause);
}

create()
{
    const database = Levelselector(this.testname);
    console.log('info load data', database)
    //Initialise Vallues
    const CONFIG ={
        width : 1250,
        height : 550,
        CenterX : 675,
        CenterY : 275
    }
    
    //load Variables use on game 
    var totalscore = 10;
    var hedonist = [[1, -1], [1, -1]];
    const POINTER_DOWN = "pointerdown";
    const POINTER_OVER = 'pointerover'
    let posSprites = [];
    let posValeurInterraction = [];
    let tableau_feedback = [];
    let tableau_interaction = [];
    let borringcount = [];

    // background & pictures
    this.add.image(600, 400,'bgi');
    var info = this.add.image(50, 130, 'info');
    info.setScale(1.50)
    var ranking =this.add.image(140, 130, 'ranking');
    ranking.setScale(1.50)
    var replay = this.add.image(250, 130, 'replay');
    replay.setScale(1.50)
    var score = this.add.image(58,275,'score');
    score.setScale(0.15);

    var pause = this.add.image(1170, 80, 'pause');
    pause.setScale(0.10);
    pause.setInteractive ({useHandCursor: true});
    pause.on ('pointerdown', () => clickpause());

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
    this.add.text(0, 0, 'Little IA Level 1 ', {fontFamily: 'OCR A Std, monospace', fontSize: 20});
    let afficheScore = this.add.text(45, 257,totalscore,{fontFamily: 'OCR A Std, monospace', fontSize: 40});

    //Draw Game form/
    console.log('Test Square')
    this.CircleBtn = this.add.graphics();
    this.CircleBtn.setInteractive(console.log('yes'));
    this.CircleBtn.fillStyle(0xffffff, 1);
    this.CircleBtn.fillCircle(936, 412, 30);
    this.squareBtn = this.add.graphics();
    this.squareBtn.setInteractive(console.log('yes'));
    this.squareBtn.fillStyle(0xffffff, 1);
    this.squareBtn.fillRect(1145, 412, 30,30);
            //create button square


            this.CircleBtn.on(POINTER_OVER, function () {
                this.setTint(0x999999);
            });
            this.CircleBtn.on('pointerout', function () {
                this.clearTint();
            });
    
            //create button circle
    
    
            this.squareBtn.on(POINTER_OVER, function () {
                this.setTint(0x999999);
            });
            this.squareBtn.on('pointerout', function () {
                this.clearTint();
            });
    

    function Increment() {
        afficheScore.setText([
            'Score = ' + score
        ]);
        if(score === 10){
            afficheScore.setFill(['lime']);
            textWin.setText([
                'Victoire !!'
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
    this.CircleBtn.on(POINTER_DOWN, () => {

        if (posSprites.length > 0) {
            for (let i = 0; i < posSprites.length; i++) {
                let sprite2posSprites = posSprites[i];
                sprite2posSprites.y -= 40;
                let toto = posValeurInterraction[i];
                toto.y -= 40;
            }
        }
        let sprite;
        let valeurInterraction;

        if(tableau_interaction[tableau_interaction.length - 1] === 'Carré'){
            feedback(hedonist[0][1]);
            sprite = this.add.image(622, 400, 'carre_rouge');
            valeurInterraction = this.add.text(645, 390, "" + hedonist[0][1]);
        }
        else{
            feedback(hedonist[0][0]);
            sprite = this.add.image(622, 400, 'carre_vert');
            valeurInterraction = this.add.text(645, 390, "" + hedonist[0][0]);
        }




        posSprites.push(sprite);
        posValeurInterraction.push(valeurInterraction);
        nombreCompteur += 1;
        tableau_interaction.push('Carré');
        console.log(tableau_interaction);


        calculScore();
        Increment();

    });

    this.squareBtn.on(POINTER_DOWN, () => {

        if (posSprites.length > 0) {
            for (let i = 0; i < posSprites.length; i++) {
                let sprite2posSprites = posSprites[i];
                sprite2posSprites.y -= 40;
                let toto = posValeurInterraction[i];
                toto.y -= 40;
            }
        }


        let sprite;
        let valeurInterraction;


        if(tableau_interaction[tableau_interaction.length - 1] === 'Rond'){
            feedback(hedonist[1][1]);
            sprite = this.add.image(622, 400, 'circle_rouge');
            valeurInterraction = this.add.text(645, 390, "" + hedonist[1][1]);
        }
        else{
            feedback(hedonist[1][0]);
            sprite = this.add.image(622, 400, 'circle_vert');
            valeurInterraction = this.add.text(645, 390, "" + hedonist[1][0]);
        }




        posSprites.push(sprite);
        posValeurInterraction.push(valeurInterraction);
        nombreCompteur += 1;
        tableau_interaction.push('Rond');
        console.log(tableau_interaction);



        calculScore();
        Increment();
    });


}
    

update()
{



}
}