import Phaser from 'phaser';

import LevelsScene from "./scenes/LevelsScene";
import CreditScene from "./scenes/credits";
import Level0 from "./levels/easy/level0";
import Level1 from "./levels/easy/level1";
import Level2 from "./levels/easy/level2";
import Level3 from "./levels/easy/level3";
import Level4 from "./levels/easy/level4";
import Level5 from "./levels/easy/level5";
import Level6 from "./levels/easy/level6";
import Level7 from "./levels/easy/level7";

import Level8 from "./levels/medium/level8";
import Level9 from "./levels/medium/level9";
import Level10 from "./levels/medium/level10";
import Level11 from "./levels/medium/level11";
import Level12 from "./levels/medium/level12";
import Level13 from "./levels/medium/level13";

import speedchallenge from "./levels/epic/speedchallenge";

import Settings from './scenes/params';

import Menu from "./scenes/Menu";


const config = {
    type: Phaser.AUTO,
    parent: 'Little IA',
    width: 1250, // initial width that determines the scaled size
    height: 550,
    scale: {
        mode: Phaser.Scale.WIDTH_CONTROLS_HEIGHT,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    // scene: [Menu, LevelsScene, CreditScene, Level0, Level1, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10, Level11, Level12, Level13, Settings, speedchallenge],
    scene: [Level1, Menu, LevelsScene, CreditScene, Level0, Level2, Level3, Level4, Level5, Level6, Level7, Level8, Level9, Level10, Level11, Level12, Level13, Settings, speedchallenge],
};

const configmusic = {
    //a utilisé pour modifiée le volume ou le son
    mute: true,
    volume: 1,
    rate: 1,
    detune: 0,
    seek: 0,
    loop: true,
    delay: 0

};

var game = new Phaser.Game(config);

localStorage.setItem('maxUnlockedLevel',1); // For debug
