import phaser from 'phaser';
import MyGame from '../index.js';

import backgroundimage from '../assets/background.png';

import Info from '../assets/icons/info.png';
import Ranking from '../assets/icons/ranking.png';
import Replay from '../assets/icons/replay.png';

import Pause from '../assets/icons/pause.png';
import Whitesquare from'../assets/Whiteform/carre.png';
import Wcircle from '../assets/Whiteform/circle.png';
import Redsquare from '../assets/game-icons/carre_rouge.png';
import Cerclerouge from '../assets/game-icons/rougecercle.png';
import Greensquare from'../assets/game-icons/carre_vert.png';
import Greencircle from'../assets/game-icons/circle_vert.png';
import Levelselector from '../data/levels'


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

    this.load.image('pause', Pause);

    this.load.image('carre', Whitesquare);
    this.load.image('circle', Wcircle);
    //this.load.image('losange', '../assets/Whiteform/losange.png');
    //this.load.image('triangle', '../assets/Whiteform/triangle.png');


    this.load.image('carre_vert', Greensquare);
    //this.load.image('carre_jaune', '../assets/game-icons/carre_jaune.png');
    this.load.image('carre_rouge', Redsquare);

    this.load.image('cercle_vert', Greencircle );
    this.load.image('cercle_rouge', Cerclerouge );
    //this.load.image('circle_jaune', '../assets/game-icons/circle_jaune.png');

    //this.load.image("win", "../assets/game-icons/win.jpg");
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
    var totalscore = 0;
    let nombreCompteur = 0;
    const hedonist = [[1, -1], [1, -1]];
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
    this.btnCarre = this.add.sprite(936, 412, 'carre').setInteractive({useHandCursor: true});
    this.btnCircle = this.add.sprite(1145, 412, 'circle').setInteractive({useHandCursor: true});
    
            //create button square


            this.btnCircle.on(POINTER_OVER, function () {
                this.setTint(0x999999);
            });
            this.btnCircle.on('pointerout', function () {
                this.clearTint();
            });
    
            //create button circle
    
    
            this.btnCarre.on(POINTER_OVER, function () {
                this.setTint(0x999999);
            });
            this.btnCarre.on('pointerout', function () {
                this.clearTint();
            });
    

    function Increment() {
        afficheScore.setText([
            'Score :' + score
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
    this.btnCarre.on(POINTER_DOWN, () => {

        if (posSprites.length > 0) {
            for (let i = 0; i < posSprites.length; i++) {
                let sprite2posSprites = posSprites[i];
                sprite2posSprites.x -= 45;
                let toto = posValeurInterraction[i];
                toto.x -= 45;
            }
        }
        let sprite;
        let valeurInterraction;

        if(tableau_interaction[tableau_interaction.length - 1] === 'Carré'){
            feedback(hedonist[0][1]);
            sprite = this.add.image(622, 400, 'carre_rouge');
            valeurInterraction = this.add.text(615, 420, "" + hedonist[0][1]);
        }
        else{
            feedback(hedonist[0][0]);
            sprite = this.add.image(622, 400, 'carre_vert');
            valeurInterraction = this.add.text(615, 420, "" + hedonist[0][0]);
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
                sprite2posSprites.x -= 50;
                let toto = posValeurInterraction[i];
                toto.x -= 50;
            }
        }


        let sprite;
        let valeurInterraction;


        if(tableau_interaction[tableau_interaction.length - 1] === 'Rond'){
            feedback(hedonist[1][1]);
            sprite = this.add.graphics(622, 400, 'cercle_rouge');
            valeurInterraction = this.add.text(615, 420, "" + hedonist[1][1]);
        }
        else{
            feedback(hedonist[1][0]);
            sprite = this.add.image(622, 400, 'cercle_vert');
            valeurInterraction = this.add.text(615, 420, "" + hedonist[1][0]);
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