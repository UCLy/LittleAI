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
<<<<<<< HEAD
=======

        var score = 1;
        let conteur = 0;
>>>>>>> 50fb303bbe8fa5a58cf8ae93ddc314b3c78c5e70
        let chaine_reponse_niveau_1 = "RRRRRRRRRR";
        let chaine_joueur = "";

        let colorPrintRectPrincipal = new Phaser.Display.Color(250, 250, 250);
        let colorPrintRect = new Phaser.Display.Color(250, 0, 0); // la couleur du rectangle affiché
        let colorPrintCircle = new Phaser.Display.Color(0, 250, 0); // la couleur du cercle affiché

        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});


        this.add.image(80, 50, 'score');
<<<<<<< HEAD
        let Losange2Triche = this.add.image(1000, 1000, 'losange');

=======
       var Losange2Triche = this.add.image(1000, 1000, 'losange');
>>>>>>> 50fb303bbe8fa5a58cf8ae93ddc314b3c78c5e70
        this.btnCarre = this.add.sprite(417, 480, 'carre').setInteractive({useHandCursor: true});
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
        //this.btnLosange = this.add.sprite(723.5, 480, 'losange').setInteractive({useHandCursor: true});
        //this.btnTriangle = this.add.sprite(906.5, 480, 'triangle').setInteractive({useHandCursor: true});
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});

        var color1 = new Phaser.Display.Color(250, 0, 0);
        var rectLevel = this.add.rectangle(417, 480, 100, 100, color1.color);
        var rect1 = this.add.rectangle(0, 0, 0, 0, color1.color);
        var rect2 = this.add.rectangle(0, 0, 0, 0, color1.color);
        var rect3 = this.add.rectangle(0, 0, 0, 0, color1.color);
        rectLevel.setInteractive ({useHandCursor: true});
        rectLevel.on('pointerdown', () => conteur += 1);
        if( conteur === 0){
            rectLevel.on('pointerdown', () => {rect2.x = 550,rect2.y = 430, rect2.height = 100, rect2.width = 100});


        }else if (conteur === 1){
            rectLevel.on('pointerdown', () => {rect2.x = 550,rect2.y = 300, rect2.height = 100, rect2.width = 100});
            rectLevel.on('pointerdown', () => {rect1.x = 550,rect1.y = 430, rect1.height = 100, rect1.width = 100});
        }else if (conteur === 2){
            rectLevel.on('pointerdown', () => {rect2.x = 550,rect2.y = 170, rect2.height = 100, rect2.width = 100});
            rectLevel.on('pointerdown', () => {rect1.x = 550,rect1.y = 300, rect1.height = 100, rect1.width = 100});
            rectLevel.on('pointerdown', () => {rect3.x = 550,rect3.y = 430, rect3.height = 100, rect3.width = 100});
        }





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

