import Phaser from 'phaser'
import Width from "phaser3-rex-plugins/plugins/geom/hexagon/Width";
import Height from "phaser3-rex-plugins/plugins/geom/hexagon/Height";



                             //////////////////////////////////////////   LEVEL 0   ///////////////////////////////////////////




export default class GameScene extends Phaser.Scene
{
	constructor()
	{
		super('game-scene');
		this.score = 0;
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
        let chaine_reponse_niveau_1 = "RRRRRRRRRR";
        let chaine_joueur = "";

        let colorPrintRectPrincipal = new Phaser.Display.Color(250, 250, 250);
        let colorPrintRect = new Phaser.Display.Color(250, 0, 0); // la couleur du rectangle affiché
        let colorPrintCircle = new Phaser.Display.Color(0, 250, 0); // la couleur du cercle affiché

        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});


        this.add.image(80, 50, 'score');
        let Losange2Triche = this.add.image(1000, 1000, 'losange');

        this.btnCarre = this.add.sprite(417, 480, 'carre').setInteractive({useHandCursor: true});
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
        //this.btnLosange = this.add.sprite(723.5, 480, 'losange').setInteractive({useHandCursor: true});
        //this.btnTriangle = this.add.sprite(906.5, 480, 'triangle').setInteractive({useHandCursor: true});
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});

        //create button menu



        this.button_menu.on('pointerover', function () {
            this.setTint(0x999999); // ajoute un gris pour foncer un peu le bouton qd on le survole avec la souris
        });
        this.button_menu.on('pointerout', function () {
            this.clearTint(); // ajoute aucune couleur qd on ne le survole pas ou ne le clique pas
        });
        this.button_menu.on('pointerdown', function () {
            this.setTint(0x444444); // ajoute un gris plus foncé pour marquer la diff qd on le clique
        });


        //create button square


        this.btnCarre.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.btnCarre.on('pointerout', function () {
            this.clearTint();
        });
        this.btnCarre.on('pointerdown', function () {
            this.setTint(0x444444);
            chaine_joueur += "C";
            console.log(chaine_joueur);
            var position = chaine_joueur.indexOf(chaine_reponse_niveau_1);
            if( position !== -1){
                alert("C'est gagné !!")
            }
            else{
                console.log("pas encore win")
            }
        });


        for (let i = 370; i > 0;)
        {
            if (this.btnCarre.emit('pointerdown'))
            {
                this.btnCarre.on('pointerdown', () => this.add.rectangle(660, i, 100, 100, colorPrintRect.color));
            }
            i -= 100;
        }












        //create button circle


        this.btnCircle.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.btnCircle.on('pointerout', function () {
            this.clearTint();
        });
        this.btnCircle.on('pointerdown', function () {
            this.setTint(0x444444);
            chaine_joueur += "R";
            console.log(chaine_joueur);

            var position = chaine_joueur.indexOf(chaine_reponse_niveau_1);
            if( position !== -1){
                alert("C'est gagné !!")
            }
            else{
                console.log("pas encore win")
            }
        });

        //create button losange

/*
        this.btnLosange.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.btnLosange.on('pointerout', function () {
            this.clearTint();
        });
        this.btnLosange.on('pointerdown', function () {


            this.setTint(0x444444);
            console.log("salut");
            //Losange2Triche.x = 630;
            //Losange2Triche.y = 400;
            chaine_joueur += "L";
            console.log(chaine_joueur);
            var position = chaine_joueur.indexOf(chaine_reponse_niveau_1);
            if( position !== -1){
                alert("C'est gagné !!")
            }
            else{
                console.log("pas encore win")
            }
        });

*/
        //create button triangle

/*
        this.btnTriangle.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.btnTriangle.on('pointerout', function () {
            this.clearTint();
        });
        this.btnTriangle.on('pointerdown', function () {
            this.setTint(0x444444);
            chaine_joueur += "T";
            console.log(chaine_joueur);
            var position = chaine_joueur.indexOf(chaine_reponse_niveau_1);
            if( position !== -1){
                alert("C'est gagné !!")
            }
            else{
                console.log("pas encore win")
            }

        });
*/



    }



    update(time, delta)
    {

    }

}

