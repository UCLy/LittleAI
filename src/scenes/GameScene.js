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
        this.load.image('score', './assets/score.png');
        this.load.image('carre_feedback', './Whiteform/carre.png');
        this.load.image('circle_feedback', './Whiteform/circle.png');



    }




    create()
    {



        var colorPrintCircle = new Phaser.Display.Color(0, 250, 0);

        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
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

        //create button circle




        this.btnCircle.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.btnCircle.on('pointerout', function () {
            this.clearTint();
        });


        //truc de gaétan


        this.input.mouse.disableContextMenu();

        this.input.on('pointerdown', function (pointer) {

            if (pointer.getDuration() > 1000)
            {

                if (pointer.rightButtonDown())
                {
                    if (pointer.x >= 300 && pointer.x <= 520) {
                        this.add.image(300, 250, 'circle');
                        this.add.image(500, 250, 'losange');
                        console.log("formes différentes du carré")
                    }
                    if (pointer.x >= 715 && pointer.x <= 915) {
                        this.add.image(715, 250, 'carre');
                        this.add.image(915, 250, 'losange');
                        console.log("formes différentes du cercle");
                    }
                }
            }
        }, this);


        function Increment(){
            compteur.setText([
                'Nombre de coups = ' + plus1compteur
            ]);
        }



        this.btnCarre.on(POINTER_DOWN, () => {
            //this.add.rectangle(622, positions[i], 25, 25, 0xDC143C);
            if(posSprites.length > 0){
                for(let i=0; i < posSprites.length; i++){
                    let toto = posSprites[i];
                    toto.y -= 30;
                }
            }

            let sprite = this.add.image(622, 400, 'carre_feedback');
            posSprites.push(sprite);
            plus1compteur += 1;
            Increment();

        });

        this.btnCircle.on(POINTER_DOWN, () => {

            if(posSprites.length > 0){
                for(let i=0; i < posSprites.length; i++){
                    let toto = posSprites[i];
                    toto.y -= 30;
                }
            }

            let sprite = this.add.image(622, 400, 'circle_feedback');
            posSprites.push(sprite);
            plus1compteur += 1;
            Increment();
        });

        let compteur = this.add.text(100, 100, "Nombre de coups =");

    }



    update(time, delta)
    {




    }


}

let plus1compteur = 0;
let posSprites = [];