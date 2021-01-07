import Phaser from 'phaser'
import Width from "phaser3-rex-plugins/plugins/geom/hexagon/Width";
import Height from "phaser3-rex-plugins/plugins/geom/hexagon/Height";




                             //////////////////////////////////////////   LEVEL 0   ///////////////////////////////////////////


const COLOR_PRINT_RECT_PRINCIPAL = new Phaser.Display.Color(250, 250, 250);
const COLOR_PRINT_RECT = new Phaser.Display.Color(250, 0, 0); // la couleur du rectangle affiché
const COLOR_PRINT_CIRCLE = new Phaser.Display.Color(0, 250, 0); // la couleur du cercle affiché

const POINTER_OVER = 'pointerover';
const POINTER_OUT = 'pointerout';
const POINTER_DOWN = 'pointerdown';




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
        this.createButtonCarre();
        this.createButtonCircle();
        this.createButtonMenu();
        this.displayTitle();
        this.displayForms();
        this.buttonSquare();
        this.buttonCircle();
        this.win();
        this.nScore();
        this.choiceFormsPrinc();
        this.choiceFormsPrinc();
    }



        var colorPrintCircle = new Phaser.Display.Color(0, 250, 0);


    createButtonCarre()
    {

        cursors = this.input.keyboard.createCursorKeys();

        this.add.image(80, 50, 'score');
        this.btnCarre = this.add.sprite(417, 480, 'carre').setInteractive({useHandCursor: true});
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});


    }
    createButtonCircle()
    {
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
    }

    createButtonMenu()
    {
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});

        //create button menu


        this.button_menu.on('pointerover', function () {
            this.setTint(0x999999); // ajoute un gris pour foncer un peu le bouton qd on le survole avec la souris
        });
        this.button_menu.on(POINTER_OUT, function () {
            this.clearTint(); // ajoute aucune couleur qd on ne le survole pas ou ne le clique pas
        });
        this.button_menu.on(POINTER_DOWN, function () {
            this.setTint(0x444444); // ajoute un gris plus foncé pour marquer la diff qd on le clique
        });

    }

    buttonSquare()
    {
        this.btnCarre.on(POINTER_OVER, function () {
            this.setTint(0x999999);
        });
        this.btnCarre.on(POINTER_OUT, function () {
            this.clearTint();
        });
        this.btnCarre.on(POINTER_DOWN, function () {

        });

    }

    buttonCircle()
    {
        this.btnCircle.on(POINTER_OVER, function () {
            this.setTint(0x999999);
        });
        this.btnCircle.on(POINTER_OUT, function () {
            this.clearTint();
        });
        this.btnCircle.on(POINTER_DOWN, function () {

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

    choiceFormsPrinc()
    {
        this.input.mouse.disableContextMenu();
        this.input.on('pointerdown', function (pointer) {
                if (pointer.rightButtonDown())
                {

                    if (pointer.x >= 300 && pointer.x <= 520) {
                        const circle = this.add.sprite(300, 250, 'circle');
                        circle.setInteractive().on('pointerdown', function(){
                            this.setTint(0x999999);
                            losange.destroy();
                            circle.destroy();
                        });
                        const losange = this.add.sprite(500, 250, 'losange');
                        losange.setInteractive().on('pointerdown', function() {
                            this.setTint(0x999999);
                            losange.destroy();
                            circle.destroy();
                        });
                        console.log("formes différentes du carrée")
                    }
                    if (pointer.x >= 715 && pointer.x <= 915) {
                        const carre = this.add.sprite(715, 250, 'carre');
                        carre.setInteractive().on('pointerdown', function(){
                            this.setTint(0x999999);
                            losange.destroy();
                            carre.destroy();
                        });
                        const losange = this.add.sprite(915, 250, 'losange');
                        losange.setInteractive().on('pointerdown', function(){
                            this.setTint(0x999999);
                            losange.destroy();
                            carre.destroy();
                        });
                        console.log("formes différentes du cercle")
                    }
                }

        }, this);
    }

    nScore()
    {
        this.add.image(80, 50, 'score');
    }


    update(time, delta)
    {



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
