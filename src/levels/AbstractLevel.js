//import phaser from 'phaser';

export default class AbstractLevel extends Phaser.Scene {

    constructor(level) {
        super(level);
        this.victoireMsg = 'Victoire ! Click here to access next level';
    }

    //static victoireMsg = 1

    preload(){}

    create() {}
    
    update(){}

}