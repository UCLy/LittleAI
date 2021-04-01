import Phaser from 'phaser'



let score = 0;
let nombreCompteur = 0;
let posSprites = [];
let tableau_feedback = [];
export default class Level1Scene extends Phaser.Scene
{
    constructor()
    {
        super('level1-scene');
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

        this.load.image('carre_vert', './game-icons/carre_vert.png');
        this.load.image('carre_jaune', './game-icons/carre_jaune.png');
        this.load.image('carre_rouge', './game-icons/carre_rouge.png');

        this.load.image('circle_vert', './game-icons/circle_vert.png');
        this.load.image('circle_jaune', './game-icons/circle_jaune.png');
        this.load.image('circle_rouge', './game-icons/circle_rouge.png');
        this.load.image("win", "./game-icons/win.jpg");



    }




    create()
    {

        this.varwin = this.functwin();


        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.text(500, 0, 'LEVEL 0', { fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.image(80, 50, 'score');
        this.btnCarre = this.add.sprite(417, 480, 'carre').setInteractive({useHandCursor: true});
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});

        const POINTER_DOWN = "pointerdown";

        const hedonist = [[1], [0]];

        let score = 0;
        let nombreCompteur = 0;

        let posSprites = [];
        let posValeurInterraction = [];
        let tableau_feedback = [];

        let rouge = new Phaser.Display.Color(250, 0, 0);


        //create button menu


        this.button_menu.on('pointerover', function () {
            this.setTint(0x999999);
        });
        this.button_menu.on('pointerout', function () {
            this.clearTint();
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

        //Affiche le compteur et le score

        let compteur = this.add.text(100, 100, "Nombre de coups =");
        let afficheScore = this.add.text(100, 120, "Score =");



        function Increment(){
            compteur.setText([
                'Nombre de coups = ' + nombreCompteur
            ]);
            afficheScore.setText([
                'Score = ' + score
            ]);
        }

        function feedback(parametre){
            for(let i=0; i < tableau_feedback.length; i++){
                if(i >= 9){
                    tableau_feedback.shift();
                }
            }
            tableau_feedback.push(parametre);
            console.log(tableau_feedback);

        }


        function calculScore() {
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



        this.btnCarre.on(POINTER_DOWN, () => {

            if(posSprites.length > 0){
                for(let i=0; i < posSprites.length; i++){
                    let sprite2posSprites = posSprites[i];
                    sprite2posSprites.y -= 40;
                    let toto = posValeurInterraction[i];
                    toto.y -= 40;
                }
            }

            let sprite = this.add.image(622, 400, 'carre_vert');
            let valeurInterraction = this.add.text(645, 390, ""  + hedonist[0][0]);

            posSprites.push(sprite);
            posValeurInterraction.push(valeurInterraction);
            nombreCompteur += 1;
            feedback(hedonist[0][0]);
            calculScore();
            Increment();

        });

        this.btnCircle.on(POINTER_DOWN, () => {

            if(posSprites.length > 0){
                for(let i=0; i < posSprites.length; i++){
                    let sprite2posSprites = posSprites[i];
                    sprite2posSprites.y -= 40;
                    let toto = posValeurInterraction[i];
                    toto.y -= 40;
                }
            }

            let sprite = this.add.image(622, 400, 'circle_jaune');
            let valeurInterraction = this.add.text(645, 390, "" + hedonist[1][0]);


            posSprites.push(sprite);
            posValeurInterraction.push(valeurInterraction);

            nombreCompteur += 1;
            feedback(hedonist[1][0]);
            calculScore();
            Increment();
        });


    }





    update(time, delta)
    {

    }


    functwin() {
        if (score === 10) {

            this.add.image(625, 225, "win");
        }

    }
}
