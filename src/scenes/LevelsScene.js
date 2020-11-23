import Phaser from 'phaser'

export default class LevelsScene extends Phaser.Scene
{
    constructor()
    {
        super('levels-scene')

    }

    preload()
    {
        // fait beleck
    }

    create()
    {
        var level0 = this.add.text(1, 1, 'LEVEL_O', { fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif',fontSize:50});
        level0.setInteractive ({useHandCursor: true});
        level0.on('pointerdown', () => this.scene.start("game-scene"));

    }



}
