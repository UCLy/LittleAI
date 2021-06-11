/*import phaser from 'phaser';
import MyGame from '../index';*/
import {Shapesform} from '../data/shapesdata';

export default function Levelselector(level)
    {
        if(level == 1){
            return levelone
        }
        else if (level == 2){
            return this.leveltwo
        }
        else if (level == 3){
            return this.levelthree
        }
        else if (level == 4){
            return this.levelfour
        }
        /*else if (level == 5){
            return this.levelfive
        }*/

    }

    
    const levelone = {
        level: 1,
        hedonist : [[1], [0]],
        nombreformes : 2,
        formone: Shapesform.carre,
        formtwo: Shapesform.triangle

    }
    function leveltwo(){
        const level = 2;
        const hedonist = [[1, -1], [1, -1]];
        var slots = 2;
        var forms;
        forms[0] = Shapesform.carre;
        forms[1] = Shapesform.losange;

    }
    function levelthree(){
        const level = 3;
        const hedonist = [[3, -2], [3, -2], [0]];
        var slots = 3;
        var forms;
        forms[0] = Shapesform.carre;
        forms[1] = Shapesform.losange;
        form[2] = Shapesform.triangle

    }
    function levelfour(){
        const level = 4;
        const hedonist = [[5, -1], [5, -1], [0]];
        var slots = 3;
        var forms;
        forms[0] = Shapesform.carre;
        forms[1] = Shapesform.carre;
        forms[2] = Shapesform.carre;


    }
    /*levelfive(){
        const level = 5;
        const hedonist = [[1], [0]];
        var slots = 2;
        var forms;
        this.forms[0] = Shapesform.carre;
        this.forms[1] = Shapesform.losange;

    }*/

