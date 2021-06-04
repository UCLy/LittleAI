import phaser from 'phaser';
import MyGame from '../index';
import GameScene from '../scenes/GameScene';

export default class GameFunction extends Phaser.GameObjects.Polygon {

     feedback(parametre){
        for(let i=0; i < tableau_feedback.length; i++){
            if(i >= 9){
                tableau_feedback.shift();
            }
        }
        tableau_feedback.push(parametre);
        console.log(tableau_feedback);

    }
    calculScore() {
        score = 0;
        for(let i =0; i < tableau_feedback.length; i++){
            score += tableau_feedback[i];
        }
        console.log(score);
        if(score === 10){
            //alert("Gagné !!")

            //this.scene.start('level1-scene');
            //////////////////////////////////////alert("Gagné !!");


        }
    }
    Increment() {

        GameScene.afficheScore.setText(GameScene.totalscore);
    
     }
     Dataconfig(){
        const param = (centerX = 1250, CenterYs = 550)
        return param;
     }

}