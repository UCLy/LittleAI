import Phaser from 'phaser'

const POINTER_DOWN = "pointerdown";

export default class GameScene extends Phaser.Scene
{
	constructor()
	{
		super('game-scene');
	}


	preload()
    {
        //scene.load.plugin('rexcanvasplugin', 'https://raw.githubusercontent.com/rexrainbow/phaser3-rex-notes/master/dist/rexcanvasplugin.min.js', true);

        this.load.image('carre', './Whiteform/carre.png');
        this.load.image('circle', './Whiteform/circle.png');
        this.load.image('losange', './Whiteform/losange.png');
        this.load.image('triangle', './Whiteform/triangle.png');
        this.load.image('button_menu', './assets/engrenage.png');
        this.load.image('score', './assets/score.png')


    }




    create()
    {



        var colorPrintCircle = new Phaser.Display.Color(0, 250, 0);

        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});


        cursors = this.input.keyboard.createCursorKeys();

        this.add.image(80, 50, 'score');
        this.btnCarre = this.add.sprite(417, 480, 'carre').setInteractive({useHandCursor: true});
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});




        //create button menu


        this.button_menu.on('pointerover', function () {
            this.setTint(0x999999); // ajoute un gris pour foncer un peu le bouton qd on le survole avec la souris
        });
        this.button_menu.on('pointerout', function () {
            this.clearTint(); // ajoute aucune couleur qd on ne le survole pas ou ne le clique pas
        });
        this.button_menu.on('pointerdown', function () {

        });


        //create button square


        this.btnCarre.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.btnCarre.on('pointerout', function () {
            this.clearTint();
        });
        this.btnCarre.on('pointerdown', function () {

        });

        //create button circle




        this.btnCircle.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.btnCircle.on('pointerout', function () {
            this.clearTint();
        });
        this.btnCircle.on('pointerdown', function () {

        });


        this.input.mouse.disableContextMenu();

        this.input.on('pointerdown', function (pointer) {

            if (pointer.getDuration() > 1000)
            {

                if (pointer.rightButtonDown())
                {
                    if (pointer.x >= 300 && pointer.x <= 520) {
                        this.add.image(300, 250, 'circle');
                        this.add.image(500, 250, 'losange');
                        console.log("formes différentes du carrée")
                    }
                    if (pointer.x >= 715 && pointer.x <= 915) {
                        this.add.image(715, 250, 'carre');
                        this.add.image(915, 250, 'losange');
                        console.log("formes différentes du cercle")
                    }
                }
            }
        }, this);


        this.btnCarre.on(POINTER_DOWN, () => {
            this.add.rectangle(622, positions[i], 25, 25, 0xDC143C);
            i++;

        });

        this.btnCircle.on(POINTER_DOWN, () => {
            this.add.circle(622, positions[i], 12.5, 0x32CD32);
            i++;
        });



    }



    update(time, delta)
    {



    }


}


let i = 0;
let cursors;
let position1 = 400;
let position2 = 370;
let position3 = 340;
let position4 = 310;
let position5 = 280;
let position6 = 250;
let position7 = 220;
let position8 = 190;
let position9 = 160;
let position10 = 130;

let positions = [
    position1, position2, position3, position4, position5, position6, position7, position8, position9, position10
];