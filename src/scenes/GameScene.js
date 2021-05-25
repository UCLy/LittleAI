import phaser from 'phaser';
import MyGame from '../index.js';
import SetupScene from '../data/posform'


import backgroundimage from '../assets/background.png';

import Info from '../assets/icons/info.png';
import Ranking from '../assets/icons/ranking.png';
import Replay from '../assets/icons/replay.png';
import Hexagon from '../assets/icons/hexagon.png';

import Levels from '../data/levels'
import { Shapesform } from '../data/shapesdata'
import Virtualgamepad from '../data/posform';


export default class GameScene extends Phaser.Scene {


constructor()
{
    super('GameScene')

}

init (data)
    {
        var levelused = null;
        console.log('init', Levels);
        this.levelID = 2;
        
    }

preload()
{
    
    this.load.image ('bgi', backgroundimage);
    this.load.json('jsonData', Levels);
    this.load.image('info', Info);
    this.load.image('ranking', Ranking);
    this.load.image('replay', Replay);
    this.load.image('score', Hexagon);
}

create()
{

    //load Variables use on game 
    var winscore = 0;
    let posSprites = [];
    let posValeurInterraction = [];
    let tableau_feedback = [];
    let tableau_interaction = [];

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
    this.add.text(0, 0, 'Little IA Level : ' + this.levelID , {fontFamily: 'OCR A Std, monospace', fontSize: 20});
    let afficheScore = this.add.text(45, 257,{fontFamily: 'OCR A Std, monospace', fontSize: 40});

    //Affichage des formes (liasons niveau en cours)
    var slots = 6;
    if (slots == 2){
        
        var slot1 = this.add.polygon(936,350, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1145,350, Shapesform.carre , 0xffffff);
    }
    if (slots == 3){
        var slot1 = this.add.polygon(936,350, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1040,350, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(1144,350, Shapesform.carre , 0xffffff);
    }
    if (slots == 4){
        var slot1 = this.add.polygon(936,310, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1144,310, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(936,420, Shapesform.carre , 0xffffff);
        var slot4 = this.add.polygon(1144,420, Shapesform.carre , 0xffffff);
    }
    if (slots == 5){
        var slot1 = this.add.polygon(970,310, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1100,310, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(901,420, Shapesform.carre , 0xffffff);
        var slot4 = this.add.polygon(1039,420, Shapesform.carre , 0xffffff);
        var slot5 = this.add.polygon(1178,420, Shapesform.carre , 0xffffff);
    }
    if (slots == 6){
        var slot1 = this.add.polygon(901,310, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1039,310, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(1178,310, Shapesform.carre , 0xffffff);
        var slot4 = this.add.polygon(901,420, Shapesform.carre , 0xffffff);
        var slot5 = this.add.polygon(1039,420, Shapesform.carre , 0xffffff);
        var slot6 = this.add.polygon(1178,420, Shapesform.carre , 0xffffff);
    }
    //function for game use 
    function Increment() {

        afficheScore.setText(winscore);
    
     }
    Increment();
}
    

update()
{



}
}