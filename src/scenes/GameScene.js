import Phaser from 'phaser'

export default class GameScene extends Phaser.Scene
{

	constructor()
	{
		super('game-scene');
	}


	preload()
    {
        this.load.image('carre', './game-icons/carre.png');
        this.load.image('circle', './game-icons/circle.png');
        this.load.image('losange', './game-icons/losange.png');
        this.load.image('triangle', './game-icons/triangle.png');
        this.load.image('button_menu', './assets/engrenage.png');
        this.load.image('score', './assets/score.png')
    }

    create()
    {

        this.score = 0;

        this.add.image(80, 50, 'score');
        this.btnCarre = this.add.sprite(357.5, 480, 'carre').setInteractive();
        this.btnCircle = this.add.sprite(540.5, 480, 'circle').setInteractive();
        this.btnLosange = this.add.sprite(723.5, 480, 'losange').setInteractive();
        this.btnTriangle = this.add.sprite(906.5, 480, 'triangle').setInteractive();
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive();
        this.scoreText = this.add.text(170, 45, 'score:', { fontsize: '32px Arial', fill: '#FFF' });


        //create button menu

        this.button_menu.on('pointerover', function (event) {
            this.setTint(0x999999);
        });
        this.button_menu.on('pointerout', function (event) {
            this.clearTint();
        });
        this.button_menu.on('pointerdown', function (event) {
            this.setTint(0x444444);
        });


        //create button square


        this.btnCarre.on('pointerover', function (event) {
            this.setTint(0x999999);
        });
        this.btnCarre.on('pointerout', function (event) {
            this.clearTint();
        });
        this.btnCarre.on('pointerdown', function (event) {


        });

        //create button circle


        this.btnCircle.on('pointerover', function (event) {
            this.setTint(0x999999);
        });
        this.btnCircle.on('pointerout', function (event) {
            this.clearTint();
        });
        this.btnCircle.on('pointerdown', function (event) {
            this.setTint(0x444444);
        });

        //create button losange


        this.btnLosange.on('pointerover', function (event) {
            this.setTint(0x999999);
        });
        this.btnLosange.on('pointerout', function (event) {
            this.clearTint();
        });
        this.btnLosange.on('pointerdown', function (event) {
            this.setTint(0x444444);
        });


        //create button triangle


        this.btnTriangle.on('pointerover', function (event) {
            this.setTint(0x999999);
        });
        this.btnTriangle.on('pointerout', function (event) {
            this.clearTint();
        });
        this.btnTriangle.on('pointerdown', function (event) {
            this.setTint(0x444444);
        });

    }

    update()
    {

    }

}
