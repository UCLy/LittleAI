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


export default class GameScene extends Phaser.Scene {


constructor()
{
    super('GameScene')

}

init (data)
    {
        console.log('init', data);
        this.testname = data.levelused;
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
    var hedonist = database.hedonist
    const POINTER_DOWN = "pointerdown";
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
    console.log('Level print', database.level)
    this.add.text(0, 0, 'Little IA Level : ' +  database.level , {fontFamily: 'OCR A Std, monospace', fontSize: 20});
    let afficheScore = this.add.text(45, 257,totalscore,{fontFamily: 'OCR A Std, monospace', fontSize: 40});

    /*pause fuction 
    function createPauseScreen()
    {
        //Transparence background
        this.veille = this.add.graphics({x: 0, y: 0});
        this.veille.fillStyle(0x000000, 0.3);
       this.veille.fillRect(0,0, CONFIG.width, CONFIG.height);
        
        //texte de Pause
        this.pausetext = new Text(
            this, CONFIG.centerX, CONFIG.centerY - 32,
            'Pause', 'Title'
        );
        //ne pas faire apparaître au démmarage
        this.togglePauseScreen(false);
    }
    function clickpause()
    {
        //if (!this.allow_imput) return;
        //flag
        this.is_pause = !this.is_pause;
        //toogle pause overlay 
        this.togglePauseScreen(this.is_pause);
        //pause
        if (this.is_pause)
       {
            this.startPause();
       } 
       else
       {
            this.endpause();
       }

    }
    function startpause() {
        
    }
    function endpause() {

    }

    function togglePauseScreen (is_visible)
    {
       this.veille.setVisible(is_visible);
       this.pausetext.setVisible(is_visible); 
    }*/

    //Affichage des formes (liasons niveau en cours)
    var slot = database.nombreformes;
    if (slot == 2){
        
        var slot1 = this.add.polygon(936,350, database.formone , 0xffffff);
        var slot2 = this.add.polygon(1145,350, database.formtwo , 0xffffff);
        slot1.setInteractive({useHandCursor: true});
        slot2.setInteractive({useHandCursor: true});
    }
    if (slot == 3){
        var slot1 = this.add.polygon(936,350, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1040,350, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(1144,350, Shapesform.carre , 0xffffff);
        slot1.setInteractive({useHandCursor: true});
        slot2.setInteractive({useHandCursor: true});
        slot3.setInteractive({useHandCursor: true});
    }
    if (slot == 4){
        var slot1 = this.add.polygon(936,310, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1144,310, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(936,420, Shapesform.carre , 0xffffff);
        var slot4 = this.add.polygon(1144,420, Shapesform.carre , 0xffffff);
        slot1.setInteractive({useHandCursor: true});
        slot2.setInteractive({useHandCursor: true});
        slot3.setInteractive({useHandCursor: true});
        slot4.setInteractive({useHandCursor: true});
    }
    if (slot == 5){
        var slot1 = this.add.polygon(970,310, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1100,310, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(901,420, Shapesform.carre , 0xffffff);
        var slot4 = this.add.polygon(1039,420, Shapesform.carre , 0xffffff);
        var slot5 = this.add.polygon(1178,420, Shapesform.carre , 0xffffff);
        slot1.setInteractive({useHandCursor: true});
        slot2.setInteractive({useHandCursor: true});
        slot3.setInteractive({useHandCursor: true});
        slot4.setInteractive({useHandCursor: true});
        slot5.setInteractive({useHandCursor: true});
    }
    if (slot == 6){
        var slot1 = this.add.polygon(901,310, Shapesform.carre , 0xffffff);
        var slot2 = this.add.polygon(1039,310, Shapesform.carre , 0xffffff);
        var slot3 = this.add.polygon(1178,310, Shapesform.carre , 0xffffff);
        var slot4 = this.add.polygon(901,420, Shapesform.carre , 0xffffff);
        var slot5 = this.add.polygon(1039,420, Shapesform.carre , 0xffffff);
        var slot6 = this.add.polygon(1178,420, Shapesform.carre , 0xffffff);
        slot1.setInteractive({useHandCursor: true});
        slot2.setInteractive({useHandCursor: true});
        slot3.setInteractive({useHandCursor: true});
        slot4.setInteractive({useHandCursor: true});
        slot5.setInteractive({useHandCursor: true});
        slot6.setInteractive({useHandCursor: true});
    }



    //function for game use 

}
    

update()
{



}
}