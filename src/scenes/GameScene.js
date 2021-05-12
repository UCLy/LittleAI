import phaser from 'phaser';
import MyGame from '../index.js';

import backgroundimage from '../assets/background.png';
import Levels from '../data/levels.json'


export default class GameScene extends Phaser.Scene {

constructor()
{
    super('GameScene')

}

init (data)
    {
        console.log('init', Levels);

        this.levelID = 1;
        
    }

preload()
{
    this.load.image ('bgi', backgroundimage);
    this.load.json('jsonData', Levels);
}

create()
{
    // background
    this.add.image(600, 400,'bgi');

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

    
}

update()
{



}
}