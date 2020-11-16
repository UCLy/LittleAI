import Phaser from 'phaser'


export default class GameScene extends Phaser.Scene

{
	constructor()
	{
		super('game-scene');
		this.score = 0;
	}


	preload()
    {
        this.load.scenePlugin('rexuiplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexuiplugin.min.js', 'rexUI', 'rexUI');

        this.load.image('carre', './game-icons/carre.png');
        this.load.image('circle', './game-icons/circle.png');
        this.load.image('losange', './game-icons/losange.png');
        this.load.image('triangle', './game-icons/triangle.png');
        this.load.image('button_menu', './assets/engrenage.png');
        this.load.image('score', './assets/score.png')


    }

    create()
    {
        var score = 0;
        this.add.image(80, 50, 'score');
        this.btnCarre = this.add.sprite(357.5, 480, 'carre').setInteractive();
        this.btnCircle = this.add.sprite(540.5, 480, 'circle').setInteractive();
        this.btnLosange = this.add.sprite(723.5, 480, 'losange').setInteractive();
        this.btnTriangle = this.add.sprite(906.5, 480, 'triangle').setInteractive();
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive();
        this.printScore = this.add.text(80, 80, score, {  });

        //create button menu

        this.button_menu.on('pointerover', function (event) {
            this.setTint(0x999999); // ajoute un gris pour foncer un peu le bouton qd on le survole avec la souris
        });
        this.button_menu.on('pointerout', function (event) {
            this.clearTint(); // ajoute aucune couleur qd on ne le survole pas ou ne le clique pas
        });
        this.button_menu.on('pointerdown', function (event) {
            this.setTint(0x444444); // ajoute un gris plus foncé pour marquer la diff qd on le clique
        });


        //create button square


        this.btnCarre.on('pointerover', function (event) {
            this.setTint(0x999999);
        });
        this.btnCarre.on('pointerout', function (event) {
            this.clearTint();
        });
        this.btnCarre.on('pointerdown', function (event) {
            this.setTint(0x444444);
            console.log('blabla ta mere');
            score += 1;
            return this.printScore;
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
            //console.log('down circle');
            //score += 1;
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



    update(time, delta)
    {

    }


}
