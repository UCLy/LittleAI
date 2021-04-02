import Phaser from 'phaser'


let score = 0;

export default class Level2Scene extends Phaser.Scene {
    constructor() {
        super('level2-scene');
    }


    preload() {
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


    create() {



        this.add.text(500, 0, 'LEVEL 2', {fontFamily: 'OCR A Std, monospace', fontSize: 64});
        this.add.image(80, 50, 'score');
        this.btnCarre = this.add.sprite(417, 480, 'carre').setInteractive({useHandCursor: true});
        this.btnCircle = this.add.sprite(833, 480, 'circle').setInteractive({useHandCursor: true});
        this.button_menu = this.add.sprite(1170, 80, 'button_menu').setInteractive({useHandCursor: true});

        const POINTER_DOWN = "pointerdown";

        const hedonist = [[2, -1], [2, -1]];


        let nombreCompteur = 0;
        let score = 0;

        let posSprites = [];
        let posValeurInterraction = [];
        let tableau_feedback = [];
        let tableau_interaction = [];

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

            if (pointer.getDuration() > 1000) {

                if (pointer.rightButtonDown()) {
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
        let textWin = this.add.text(100, 140, "", { font: "60px calibri", fill: "orange"});


        function Increment() {
            compteur.setText([
                'Nombre de coups = ' + nombreCompteur
            ]);
            afficheScore.setText([
                'Score = ' + score
            ]);
            if(score === 5){
                afficheScore.setFill(['lime']);
                textWin.setText([
                    'Victoire !!'
                ]);
            }
        }

        function feedback(parametre) {
            for (let i = 0; i < tableau_feedback.length; i++) {
                if (i >= 9) {
                    tableau_feedback.shift();
                }
            }
            tableau_feedback.push(parametre);
            console.log(tableau_feedback);

        }


        function calculScore() {
            score = 0;
            for (let i = 0; i < tableau_feedback.length; i++) {
                score += tableau_feedback[i];
            }
            console.log(score);

        }


        this.btnCarre.on(POINTER_DOWN, () => {

            if (posSprites.length > 0) {
                for (let i = 0; i < posSprites.length; i++) {
                    let sprite2posSprites = posSprites[i];
                    sprite2posSprites.y -= 40;
                    let toto = posValeurInterraction[i];
                    toto.y -= 40;
                }
            }
            let sprite;
            let valeurInterraction;

            if(tableau_interaction[tableau_interaction.length - 2] === 'Rond' && tableau_interaction[tableau_interaction.length - 1] === 'Carré'){
                feedback(hedonist[0][0]);
                sprite = this.add.image(622, 400, 'carre_vert');
                valeurInterraction = this.add.text(645, 390, "" + hedonist[0][0]);
            }
            else{
                feedback(hedonist[0][1]);
                sprite = this.add.image(622, 400, 'carre_rouge');
                valeurInterraction = this.add.text(645, 390, "" + hedonist[0][1]);
            }




            posSprites.push(sprite);
            posValeurInterraction.push(valeurInterraction);
            nombreCompteur += 1;
            tableau_interaction.push('Carré');
            console.log(tableau_interaction);


            calculScore();
            Increment();

        });

        this.btnCircle.on(POINTER_DOWN, () => {

            if (posSprites.length > 0) {
                for (let i = 0; i < posSprites.length; i++) {
                    let sprite2posSprites = posSprites[i];
                    sprite2posSprites.y -= 40;
                    let toto = posValeurInterraction[i];
                    toto.y -= 40;
                }
            }


            let sprite;
            let valeurInterraction;


            if(tableau_interaction[tableau_interaction.length - 2] === 'Carré' && tableau_interaction[tableau_interaction.length - 1] === 'Rond'){
                feedback(hedonist[1][0]);
                sprite = this.add.image(622, 400, 'circle_vert');
                valeurInterraction = this.add.text(645, 390, "" + hedonist[1][0]);
            }
            else{
                feedback(hedonist[1][1]);
                sprite = this.add.image(622, 400, 'circle_rouge');
                valeurInterraction = this.add.text(645, 390, "" + hedonist[1][1]);
            }




            posSprites.push(sprite);
            posValeurInterraction.push(valeurInterraction);
            nombreCompteur += 1;
            tableau_interaction.push('Rond');
            console.log(tableau_interaction);



            calculScore();
            Increment();
        });


    }


    update(time, delta) {

    }


}