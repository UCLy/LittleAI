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
        this.load.image('score', './assets/score.png');
        this.load.image('childcarre', './game-icons/carre.png');
        this.load.image('childcercle', './game-icons/circle.png');


    }

    create()
    {
        this.createButtons();
        this.createButtonMenu();
        this.displayTitle();
        this.displayForms();
        this.buttonSquare();
        this.buttonCircle();
        this.win();
        this.calculScore();
        this.choiceFormsPrinc();
    }



    createButtons()
    {
        this.btnCarre = this.add.sprite(417, 480, 'carre').setInteractive({useHandCursor: true});
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
    }


    createButtonMenu()
    {
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});

        this.button_menu.on(POINTER_OVER, function () {
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
            this.setTint(0x444444);
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
            this.setTint(0x444444);
        });
    }

    displayTitle()
    {
        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
    }

    displayForms()
    {
        this.x = 640;
        this.y = 500;
        this.j = 0;
        this.i = 0;
        this.groupForms = this.add.group();
        this.groupForms.add(this.add.rectangle(300, 100, 50, 50, COLOR_PRINT_CIRCLE.color));
       // this.groupForms.shiftPosition(640, 500, -1);
        //this.rectTest = this.add.rectangle(640, 500, 50, 50, COLOR_PRINT_CIRCLE.color);
        //this.btnCarre.on(POINTER_DOWN, () => {
        //    if (this.i === 0) {
        //        return this.rectTest;
        //    }
        //    if (this.i === this.j){
        //
        //    }
        //    this.i++;
        //    this.j++;
        //});
    };

    win()
    {
        let chaine_reponse_niveau_1 = "RRRRRRRRRR";
        let chaine_joueur = "";



        //bouton carre

        this.btnCarre.on(POINTER_DOWN, function () {
            chaine_joueur += "C";
            console.log(chaine_joueur);
            let position = chaine_joueur.indexOf(chaine_reponse_niveau_1);
            if( position !== -1){
                alert("C'est gagné !!")
            }
            else{
                console.log("pas encore win")
            }

        });


        //bouton circle

        this.btnCircle.on(POINTER_DOWN, function () {
            chaine_joueur += "R";
            console.log(chaine_joueur);


            let position = chaine_joueur.indexOf(chaine_reponse_niveau_1);
            if( position !== -1){
                alert("C'est gagné !!")
            }
            else{
                console.log("pas encore win")
            }
        });

    }

    choiceFormsPrinc()
    {
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
    }

    calculScore()
    {
        this.add.image(80, 50, 'score');
    }


    update(time, delta)
    {

    }



}
