
export function levelSwitch(Currentlevel, situation, scene) {
    if (situation == 'NEXT') {
        if (Currentlevel == 0) {
            return this.scene.start('level1')
        }
        if (Currentlevel == 1) {
            return this.scene.start('level2')
        }
        if (Currentlevel == 2) {
            return this.scene.start('level3')
        }
        if (Currentlevel == 3) {
            return this.scene.start('level4')
        }
        if (Currentlevel == 4) {
            return this.scene.start('level5')
        }
        if (Currentlevel == 5) {
            return this.scene.start('level6')
        }
        if (Currentlevel == 6) {
            return this.scene.start('level7')
        }
        if (Currentlevel == 7) {
            return this.scene.start('level8')
        }
        if (Currentlevel == 8) {
            return this.scene.start('level9')
        }
        if (Currentlevel == 9) {
            return this.scene.start('level10')
        }
        if (Currentlevel == 10) {
            return this.scene.start('level11')
        }
        if (Currentlevel == 11) {
            return this.scene.start('level12')
        }
        if (Currentlevel == 12) {
            return this.scene.start('level13')
        }
        if (Currentlevel == 13) {
            return this.scene.start('level14')
        }
        if (Currentlevel == 14) {
            return this.scene.start('level15')
        }
        if (Currentlevel == 15) {
            return this.scene.start('level16')
        }
        if (Currentlevel == 16) {
            return this.scene.start('level17')
        }
        if (Currentlevel == 17) {
            return this.scene.start('level18')
        }
        if (Currentlevel == 18) {
            return this.scene.start('level19')
        }

    }
    if (situation == 'PREVIOUS') {
        if (Currentlevel == 1) {
            return this.scene.start('level10')
        }
        if (Currentlevel == 2) {
            return this.scene.start('level1')
        }
        if (Currentlevel == 3) {
            return this.scene.start('level2')
        }
        if (Currentlevel == 4) {
            return this.scene.start('level3')
        }
        if (Currentlevel == 5) {
            return this.scene.start('level4')
        }
        if (Currentlevel == 6) {
            return this.scene.start('level5')
        }
        if (Currentlevel == 7) {
            return this.scene.start('level6')
        }
        if (Currentlevel == 8) {
            return this.scene.start('level7')
        }
        if (Currentlevel == 9) {
            return this.scene.start('level8')
        }
        if (Currentlevel == 10) {
            return this.scene.start('level9')
        }
        if (Currentlevel == 11) {
            return this.scene.start('level10')
        }
        if (Currentlevel == 12) {
            return this.scene.start('level11')
        }
        if (Currentlevel == 13) {
            return this.scene.start('level12')
        }
        if (Currentlevel == 14) {
            return this.scene.start('level13')
        }
        if (Currentlevel == 15) {
            return this.scene.start('level14')
        }
        if (Currentlevel == 16) {
            return this.scene.start('level15')
        }
        if (Currentlevel == 17) {
            return this.scene.start('level16')
        }
        if (Currentlevel == 18) {
            return this.scene.start('level17')
        }
    }
}