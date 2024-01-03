namespace SpriteKind {
    export const Misc = SpriteKind.create()
}
info.onScore(3000, function () {
    currentLevel = 3
    textLevel.setText("Level " + convertToText(currentLevel))
})
function placeMiscellaneous () {
    listMisc = []
    mySprite = sprites.create(img`
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        ....................
        eeeeeeeeeeeeeeeeeeee
        .eee.eeee...eee..ee.
        ..eee..e.eee.e.eee..
        ...eeee.eeeee.eee...
        ....eeeeeeeeeeee....
        `, SpriteKind.Misc)
    mySprite.setPosition(134, 96)
    listMisc.push(mySprite)
    mySprite = sprites.create(img`
        ...................e
        ..................ee
        .................eee
        ................eeee
        ...............eee.e
        ...............ee.ee
        ...............ee.ee
        ...............e.eee
        ...............ee.ee
        ...............eee.e
        ...............eee.e
        ...............eee.e
        ...............ee.ee
        ...............e.eee
        ...............ee.ee
        ...............eee.e
        ................ee.e
        .................eee
        ..................ee
        ...................e
        `, SpriteKind.Misc)
    mySprite.setPosition(134, 91)
    listMisc.push(mySprite)
    mySprite = sprites.create(img`
        . . . . . . 5 . 5 . . . . . . . 
        . . . . . f 5 5 5 f f . . . . . 
        . . . . f 1 5 2 5 1 6 f . . . . 
        . . . f 1 6 6 6 6 6 1 6 f . . . 
        . . . f 6 6 f f f f 6 1 f . . . 
        . . . f 6 f f d d f f 6 f . . . 
        . . f 6 f d f d d f d f 6 f . . 
        . . f 6 f d 3 d d 3 d f 6 f . . 
        . . f 6 6 f d d d d f 6 6 f . . 
        . f 6 6 f 3 f f f f 3 f 6 6 f . 
        . . f f d 3 5 3 3 5 3 d f f . . 
        . . f d d f 3 5 5 3 f d d f . . 
        . . . f f 3 3 3 3 3 3 f f . . . 
        . . . f 3 3 5 3 3 5 3 3 f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Misc)
    mySprite.setPosition(150, 42)
    listMisc.push(mySprite)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . b b b b b . . . . . . . . 
        . . b d 1 1 1 b b b b . . . . . 
        . . b 1 d 1 1 1 1 1 1 b b b . . 
        . . b 1 d 1 1 1 1 1 1 1 d d b . 
        . . b 1 1 d 1 1 1 1 d d 1 d b . 
        . b 1 1 1 d 1 1 1 d 1 1 1 d b . 
        . b 1 1 1 1 d 1 d 1 1 1 1 d b . 
        b 1 1 1 1 1 1 d 1 1 1 1 1 d b . 
        b 1 1 1 1 1 1 1 1 1 1 1 1 d b . 
        . b b 1 1 1 1 1 1 1 1 1 1 b . . 
        . . . b b 1 1 1 1 1 1 1 1 b . . 
        . . . . . b b b b b 1 1 1 b . . 
        . . . . . . . . . b b b b b . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Misc)
    mySprite.setPosition(136, 40)
    listMisc.push(mySprite)
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 . . . . 2 2 2 . . . 
        . . 2 3 2 2 2 . . 2 2 2 2 2 . . 
        . . 2 3 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 3 2 2 2 2 2 2 2 2 2 2 . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 b 2 . . . 
        . . . 2 2 2 2 2 2 2 b 2 2 . . . 
        . . . . 2 2 2 2 2 b 2 2 . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . 2 2 2 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Misc)
    mySprite.setPosition(150, 28)
    listMisc.push(mySprite)
}
function updateMisc () {
    nextBridgeFlipCounter += -1
    if (nextBridgeFlipCounter <= 0) {
        isBridgeAvailable = !(isBridgeAvailable)
        nextBridgeFlipCounter = randint(10, 40)
        updateBridge()
    }
    nextCallForHelpCounter += -1
    if (nextCallForHelpCounter <= 0) {
        isCallForHelp = !(isCallForHelp)
        nextCallForHelpCounter = randint(30, 90)
        updateCallForHelp()
    }
    if (isCallForHelp) {
        updateCallForHelp()
    }
}
function updateBombSet () {
    tempCounter = 0
    for (let index = 0; index <= listBombVisibleSet.length - 1; index++) {
        listLevelRateCount = listBombVisibleSet[index]
        if (playerLocation == index + 1 && listLevelRateCount[listLevelRateCount.length - 1] == 1) {
            music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.InBackground)
            listExplosion[index].setFlag(SpriteFlag.Invisible, false)
            isExploding = true
            info.changeLifeBy(-1)
            info.startCountdown(2)
        }
        for (let index2 = 0; index2 <= listLevelRateCount.length - 2; index2++) {
            tempIndex = listLevelRateCount.length - (index2 + 1)
            listLevelRateCount[tempIndex] = listLevelRateCount[tempIndex - 1]
            updateBombVisible(index, tempIndex)
            if (listLevelRateCount[tempIndex - 1]) {
                tempCounter += 1
            }
        }
        listLevelRateCount[0] = 0
        updateBombVisible(index, 0)
    }
    if (tempCounter > 0) {
        music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
    }
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (controller.up.isPressed()) {
        setAllSpriteVisible(true)
    } else if (controller.down.isPressed()) {
        setAllSpriteVisible(false)
    } else {
        goingLeft()
    }
})
function placeBomb () {
    listBombSet = []
    listBombVisibleSet = []
    listExplosion = []
    for (let value of [
    25,
    50,
    75,
    100
    ]) {
        listBombCol = []
        listBombVisibleCol = []
        for (let value2 of [
        0,
        13,
        26,
        39,
        52
        ]) {
            mySprite = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . 2 2 1 1 1 1 2 . . 
                . . . . 2 2 3 3 1 1 1 1 1 1 . . 
                . . 3 3 3 3 1 1 1 1 1 1 1 1 . . 
                . . 1 1 1 1 1 1 1 1 1 1 1 1 . . 
                . . 3 3 2 2 3 1 1 1 1 1 1 1 . . 
                . . . . . . 2 2 3 1 1 1 1 2 . . 
                . . . . . . . . . 2 2 2 2 . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Projectile)
            mySprite.setPosition(15 + value, 23 + value2)
            listBombCol.push(mySprite)
            listBombVisibleCol.push(0)
        }
        listBombSet.push(listBombCol)
        listBombVisibleSet.push(listBombVisibleCol)
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . 3 3 . . . 3 3 . . . . . . . 
            . 3 1 1 2 . . 3 1 3 . . . 3 3 3 
            . 3 1 1 2 . . 3 1 3 . . 3 1 1 3 
            . . 3 2 2 . . 2 1 2 . . 2 1 1 3 
            . 3 3 . . . . . 2 2 . . 2 2 2 . 
            3 1 1 2 2 . . . . . . . . 3 3 . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Projectile)
        mySprite.setPosition(15 + value, 23 + 65)
        listExplosion.push(mySprite)
    }
}
function goingLeft () {
    if (!(isExploding) && !(isScoring)) {
        if (playerLocation > 1) {
            listTank[playerLocation].setFlag(SpriteFlag.Invisible, true)
            playerLocation += -1
            listTank[playerLocation].setFlag(SpriteFlag.Invisible, false)
        }
    }
}
function initGlobals () {
    playerLocation = 0
    bomberLocation = -1
    bombRoundCounter = 0
    forceGoCounter = 70
    isFlyingBy = false
    isExploding = false
    isScoring = false
    isBridgeAvailable = false
    isCallForHelp = false
    isShowLetter = false
    isShowHeart = false
    listLevelMax = [
    12,
    8,
    5,
    3,
    1
    ]
    currentLevel = 1
    bombUpdateCounter = 10
    nextFlyByCounter = randint(10, 30)
    nextBridgeFlipCounter = randint(10, 40)
    nextCallForHelpCounter = randint(30, 90)
    textLevel = textsprite.create("Level " + convertToText(currentLevel))
    textLevel.setPosition(80, 114)
    listTank[playerLocation].setFlag(SpriteFlag.Invisible, false)
    updateBridge()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    goingRight()
})
function goingRight () {
    if (!(isExploding) && !(isScoring)) {
        if (playerLocation < 4) {
            listTank[playerLocation].setFlag(SpriteFlag.Invisible, true)
            playerLocation += 1
            listTank[playerLocation].setFlag(SpriteFlag.Invisible, false)
        } else if (playerLocation == 4) {
            if (isBridgeAvailable) {
                listTank[playerLocation].setFlag(SpriteFlag.Invisible, true)
                playerLocation += 1
                listTank[playerLocation].setFlag(SpriteFlag.Invisible, false)
                if (isCallForHelp) {
                    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)
                    info.changeScoreBy(500)
                    isShowLetter = false
                    listMisc[3].setFlag(SpriteFlag.Invisible, true)
                    isShowHeart = true
                    showHeartCounter = 10
                } else {
                    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.InBackground)
                    info.changeScoreBy(100)
                }
                listTank[playerLocation].startEffect(effects.blizzard)
                isScoring = true
                info.startCountdown(1)
            } else {
                music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
            }
        } else {
        	
        }
    }
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    goingLeft()
})
function placeTank () {
    listTank = []
    for (let value2 of [
    0,
    25,
    50,
    75,
    100,
    137
    ]) {
        mySprite = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . 2 2 2 2 2 2 2 2 . . . . 
            . . . 2 4 2 2 2 2 2 2 c 2 . . . 
            . . 2 c 4 2 2 2 2 2 2 c c 2 . . 
            . 2 c c 4 4 4 4 4 4 2 c c 4 2 d 
            . 2 c 2 e e e e e e e b c 4 2 2 
            . 2 2 e b b e b b b e e b 4 2 2 
            . 2 e b b b e b b b b e 2 2 2 2 
            . e e 2 2 2 e 2 2 2 2 2 e 2 2 2 
            . e e e e e e f e e e f e 2 d d 
            . e e e e e e f e e f e e e 2 d 
            . e e e e e e f f f e e e e e e 
            . e f f f f e e e e f f f e e e 
            . . f f f f f e e f f f f f e . 
            . . . f f f . . . . f f f f . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        mySprite.setPosition(15 + value2, 95)
        listTank.push(mySprite)
    }
}
info.onCountdownEnd(function () {
    if (haveWon) {
        game.gameOver(true)
    } else if (isScoring) {
        isScoring = false
        effects.clearParticles(listTank[playerLocation])
        listTank[playerLocation].setFlag(SpriteFlag.Invisible, true)
        playerLocation = 0
        listTank[playerLocation].setFlag(SpriteFlag.Invisible, false)
        forceGoCounter = 70
    } else if (isExploding) {
        isExploding = false
        listExplosion[playerLocation - 1].setFlag(SpriteFlag.Invisible, true)
        listTank[playerLocation].setFlag(SpriteFlag.Invisible, true)
        playerLocation = 0
        listTank[playerLocation].setFlag(SpriteFlag.Invisible, false)
        forceGoCounter = 70
    } else {
    	
    }
})
info.onScore(6000, function () {
    haveWon = true
    info.startCountdown(1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    goingRight()
})
function updateBombVisible (col: number, row: number) {
    listVisibleCol = listBombVisibleSet[col]
    if (listVisibleCol[row] == 0) {
        listBombSet[col][row].setFlag(SpriteFlag.Invisible, true)
    } else {
        listBombSet[col][row].setFlag(SpriteFlag.Invisible, false)
    }
}
function setAllSpriteVisible (visible: boolean) {
    for (let value2 of sprites.allOfKind(SpriteKind.Player)) {
        value2.setFlag(SpriteFlag.Invisible, !(visible))
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Projectile)) {
        value2.setFlag(SpriteFlag.Invisible, !(visible))
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Enemy)) {
        value2.setFlag(SpriteFlag.Invisible, !(visible))
    }
    for (let value2 of sprites.allOfKind(SpriteKind.Misc)) {
        value2.setFlag(SpriteFlag.Invisible, !(visible))
    }
}
info.onScore(4000, function () {
    currentLevel = 4
    textLevel.setText("Level " + convertToText(currentLevel))
})
function placeBomber () {
    listBomber = []
    for (let value2 of [
    0,
    25,
    50,
    75,
    100,
    125
    ]) {
        mySprite = sprites.create(img`
            ...ffffff..........ccc..
            ...ff22ccff.......c44f..
            ....fffccccfff...c442f..
            ....cc24442222ccc4422f..
            ...c99b222222222cc22fc..
            ..c999111b222222222222c.
            .c2bb11199222ccccccc222f
            c22222222222c222cccfffff
            f22222222222442222ccc...
            .f222222222224442222c...
            ..ff2222222cffc44222c...
            ....fffffffcffffcccc....
            .........f2c2ffff.......
            .........fcc2ffff.......
            ..........ffffff........
            ........................
            `, SpriteKind.Enemy)
        mySprite.setPosition(15 + value2, 12)
        listBomber.push(mySprite)
    }
}
info.onScore(2000, function () {
    currentLevel = 2
    textLevel.setText("Level " + convertToText(currentLevel))
})
info.onLifeZero(function () {
    game.gameOver(false)
})
function updateBridge () {
    if (isBridgeAvailable) {
        listMisc[0].setFlag(SpriteFlag.Invisible, false)
        listMisc[1].setFlag(SpriteFlag.Invisible, true)
    } else {
        listMisc[0].setFlag(SpriteFlag.Invisible, true)
        listMisc[1].setFlag(SpriteFlag.Invisible, false)
    }
}
info.onScore(5000, function () {
    currentLevel = 5
    textLevel.setText("Level " + convertToText(currentLevel))
})
function updateFlyBy () {
    if (isFlyingBy) {
        listBomber[bomberLocation].setFlag(SpriteFlag.Invisible, true)
        bomberLocation += -1
        if (bomberLocation < 0) {
            isFlyingBy = false
            nextFlyByCounter = randint(10, 50)
        } else {
            listBomber[bomberLocation].setFlag(SpriteFlag.Invisible, false)
            mayDropBomb()
        }
    } else if (nextFlyByCounter > 0) {
        nextFlyByCounter += -1
    } else {
        bomberLocation = 5
        listBomber[bomberLocation].setFlag(SpriteFlag.Invisible, false)
        isFlyingBy = true
        music.play(music.melodyPlayable(music.sonar), music.PlaybackMode.InBackground)
        bombRoundCounter = 0
    }
}
function mayDropBomb () {
    if (bomberLocation < 1 || bomberLocation > 4) {
        return
    }
    if (Math.percentChance(55) && bombRoundCounter < 3) {
        bombRoundCounter += 1
        listBombVisibleSet[bomberLocation - 1][0] = 1
        updateBombVisible(bomberLocation - 1, 0)
    }
}
function updateCallForHelp () {
    if (isCallForHelp) {
        listMisc[2].setFlag(SpriteFlag.Invisible, false)
        if (showHeartCounter > 0) {
            showHeartCounter += -1
            isShowHeart = !(isShowHeart)
            if (isShowHeart) {
                listMisc[4].setFlag(SpriteFlag.Invisible, true)
            } else {
                listMisc[4].setFlag(SpriteFlag.Invisible, false)
            }
        } else {
            isShowLetter = !(isShowLetter)
            if (isShowLetter) {
                listMisc[3].setFlag(SpriteFlag.Invisible, true)
            } else {
                listMisc[3].setFlag(SpriteFlag.Invisible, false)
            }
        }
    } else {
        listMisc[2].setFlag(SpriteFlag.Invisible, true)
        isShowLetter = false
        listMisc[3].setFlag(SpriteFlag.Invisible, true)
        isShowHeart = false
        listMisc[4].setFlag(SpriteFlag.Invisible, true)
        showHeartCounter = 0
    }
}
let listBomber: Sprite[] = []
let listVisibleCol: number[] = []
let showHeartCounter = 0
let nextFlyByCounter = 0
let bombUpdateCounter = 0
let listLevelMax: number[] = []
let isShowHeart = false
let isShowLetter = false
let isFlyingBy = false
let forceGoCounter = 0
let bombRoundCounter = 0
let bomberLocation = 0
let listTank: Sprite[] = []
let isScoring = false
let listBombVisibleCol: number[] = []
let listBombCol: Sprite[] = []
let listBombSet: Sprite[][] = []
let tempIndex = 0
let isExploding = false
let listExplosion: Sprite[] = []
let playerLocation = 0
let listLevelRateCount: number[] = []
let listBombVisibleSet: number[][] = []
let tempCounter = 0
let isCallForHelp = false
let nextCallForHelpCounter = 0
let isBridgeAvailable = false
let nextBridgeFlipCounter = 0
let mySprite: Sprite = null
let listMisc: Sprite[] = []
let textLevel: TextSprite = null
let currentLevel = 0
let haveWon = false
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999111199999999999999999999999999999999999999999999999999999999999999999999999999999911119999999999999999999999999999999999999999999999999999
    9999999999999999999991111119999999999999999999999999999999999999999999999999999999999999999999999999999111111999999999999999999999999999999999999999999999999999
    9999999999999999999991111119911999999999999999999999999999999999999999999999999999999999999999999999999111111991199999999999999999999999999999999999999999999999
    9999999999999999991111111119111119999999999999999999999999999999999999999999999999999999999999999999111111111911111999999999999999999999999999999999999999999999
    9999999999999999911111111111111119999999999999999999999999999999999999999999999999999999999999999991111111111111111999999999999999999999999999999999999999999999
    9999999999999999111111111111111111199999999999999999999999999999999999999999999999999999999999999911111111111111111119999999999999999999999999999999999999999999
    9999999999999999111111111111111111119999999999999999999999999999999999999999999999999999999999999911111111111111111111999999999999999999999999999999999999999999
    9999999999999999911111111111111111119991199999999999999999999999999999999999999999999999999999999991111111111111111111999119999999999999999999999999999999999999
    9999999999999111191111111111111111119911111999999999999999999999999999999999999999999999999999911119111111111111111111991111199999999999999999999999999999999999
    9999999999991111119111111111111111199911111999999999999999999999999999999999999999999999999999111111911111111111111119991111199999999999999999999999999999999999
    9999999999991111111111111111111111911111111199999999999999999999999999999999999999999999999999111111111111111111111191111111119999999999999999999999999999999999
    9999999999991111111111111111111111111111111199999999999999999999999999999999999999999999999999111111111111111111111111111111119999999999999999999999999999999999
    9999999999999111111111111111111111111111111199999999999999999999999999999999999999999999999999911111111111111111111111111111119999999999999999999999999999999999
    9911199991111911111111111111111111111111111991199999999999991111999999999999999999991119999111191111111111111111111111111111199119999999999999111199999999999999
    9111119911111111111111111111111111111111111911119999999999911111199999999999999999911111991111111111111111111111111111111111191111999999999991111119999999999999
    9111119111111111111111111111111111111111111911119999999999911111191119999999999999911111911111111111111111111111111111111111191111999999999991111119111999999999
    9911111111111111111111111111111111111111111111119999999999999111111111999999999999991111111111111111111111111111111111111111111111999999999999911111111199999999
    9111111111111111111111111111111111111111111111199999999911119111111111999999999999911111111111111111111111111111111111111111111119999999991111911111111199999999
    1111111111111111111111111111111111111111111111119999999111111111111119999999999199111111111dd1111111111111111111111111111111111111999999911111111111111999999999
    1111111111111111111111111111111111111111111111111911199111111111111111111999999ddd111111111ddd111111111111111111111111111111111111191119911111111111111111199999
    1111111111111111111111111111111111111111111111111111111111111111111111111199991ddd111111111ddd111111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111111111111111111111111111111111111999ddddddd111111ddddd11111111111111111111111111111111111111111111111111111111111119999
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    11111111111111111111111111111111111111111ddddddddd111111111111111111111111111ddddddd111111ddddd111111111111111111111111111111111111111111dddddddddd1111111111111
    1111111111111111111ddd1111111111111111111d11dddddd111111111111111111111111111d11dddd11111ddddddd11111111111111111111dd1111111111111111111dd1d1ddddd1111111111111
    111111111111111111ddddd111111111111111111ddddddd1d111111111111111111111111111ddddddd11111ddddddd1111111111111111111dddd111111111111111111dddddd11dd1111111111111
    11111111111111111dddddd111111111111111111ddddddddd1111111111d11111111ddddd111d1ddddd11111ddddddd11111111111111111dddddd111111111111111111dddddddddd1111111111111
    11111111111111111ddd1d111111d111111111111ddddddddd111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111ddd1d111111dd11111111111dddd1ddddd11111111dd111
    11111111111111111dddddd11111d111111111111ddddddd1d111111111dd11111111ddddd111ddddddd11111ddddddd11111111111111111dddddd11111dd11111111111ddddddd1dd11111111dd111
    11111111ddd111111dd11d11111ddd11111111111ddddddddd11dddddd1dd11111111ddddd111ddddddd11111ddddddd111111111dd111111ddd1d11111ddd11111111111dddddddddd1ddddddddd111
    d1dd1111ddddddddddd1ddd111ddddd1111111111ddddddd1d11d11ddd1dd111111111dd1dd11ddddddd111dddddddddd1dd1111ddddddddddddd1d1111dddd1111111111dddddd11dd1d11dddddd111
    dddd11111d1dd1ddddddddd111ddddd1111111111ddddddddd11dddd1d1dd11111111dddddd11dd1dddd111ddddddddddddd1111dd1ddd1dddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dd1d11111ddd1111ddddddd111ddddd1111111111ddddddddd11dddd1dddd11111111dddddd11ddddddd111ddddddddddd1d1111dddd1d11ddddddd1111dddd1111111111dddddddddd1dddd1dddd111
    dddd1111dddddddddddddddd11dddddd11dd1dd1ddddddddddd1d11dddddd11111111dddddd11ddddddd111ddddddddddddd1111dddddddddddddddd11dddddd111d11ddddddddddddd1d11dddddd111
    dd1d1111dddddddddddddddd11dddddd11ddddddddddddddddd1ddddddddd11d11d11dddddd11ddddddd111ddddddddddd1d1111dddddddddddddddd11dddddd111dddddddddddddddd1ddddddddd111
    ddddd1dd1d1ddddddddddddd11ddddddd1dddd11ddddddddddddd11bbddddddd1ddd11dd1dd11ddddddd111ddddddddddddddd1ddd1ddddddddddddd11ddddddd111d11ddddddbddddddd11bbbddd1dd
    ddddd1dddddddddddddddddddd1dddddd1dddddddddbbbdddddddddbbbdddddd1ddd1dddddd11ddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbddd1dd
    ddddd1ddddddddddddddddddddddddddd1dddddddddbbbdddddddddbbbdddddddddddddddddddddddddd111ddddddddddddddd1dddddddddddddddddddddddddd1ddddddddddbbdddddddddbbbdddddd
    ddddd1ddddddddddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddd1dddddddddddddddddddddddddd1d1ddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbbbbbbbbbddddddddddddddddddd1dddddddbbbbbbbddddddbbbbbddddddddddddddddddddddddddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddd1ddddddddbbbbbbbdddddbbbbbddddd
    dddddbddbbbbbbddddddddddddddddddd1dddddddbddbbbbdddddbbbbbbbdd111dddddddddddddddbbdddd1ddddddddddddddbbdbdbbbbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbdbddddddddddddddddddd1dddddddbbbbbbbdddddbbbbbbbddd11ddddddddddddddbbbbddd1ddddddddddddddbbbbbbddbbdddddddddddddddddd1ddddddddbbbbbbbddddbbbbbbbbddd
    dddddbbbbbbbbbddddddddddbddddddddbbbbbdddbdbbbbbdddddbbbbbbbddddddddddd1dddddbbbbbbddd1ddddddddddddddbbbbbbbbbbdddddddddddddddddddbbbbddddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbbbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd1ddddddddddddddbbbdbddddddbbdddddddddddbbbbdbbbbbddddddddbbdddddddddbbbbddddbbbdbbbddddbbbbbbbbd1d
    dddddbbbbbbbdbdddddddddbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdd111ddddddddddddbbbbbbdddddbbdddddddddddbbbbbbbdbbddddddddbbddddddddbbbbbbdddbbbbbbbddddbbbbbbbb11d
    dddddbbbbbbbbbddbbbbbbdbbddddddddbbbbbdddbbbbbbbdddddbbbbbbbdddddddddbb1dddddbbbdbdddddbbbdddddddddddbbbbbbbbbbdbbbbbbbbbddddddddbbbbbbdddbbbdbbbddddbbbbbbbbddd
    dddddbbbbbbbdbddbddbbbdbbdddddddddbbdbbddbbbbbbbdddbbbbbbbbbbdbbddddbbbbbbbbbbbbbdbddddbbbbddddddddddbbbbbbddbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbdbbddddddddbbbbbbddbbdbbbbdddbbbbbbbbbbbbbddddbbdbbbdbbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    dddddbbbbbbbbbddbbbbdbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbdbddbbbbbbbddddbbbbddddddddddbbbbbbbbbbdbbbbdbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    dbbdbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbddbbbbbbbdddbbbbbbbbbbbbbddddbbbbbbbbbbbbbbbbddbbbbbbdddbddbbbbbbbbbbbbbdbddbbbbbbddddddddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbdbbbbbbbbbddbddbddbbbbbbddbbbbbbbdddbbbbbbbbbbbdbddddbbbbbbbbbbbbbbbbddbbbbbbdddbbbbbbbbbbbbbbbbdbbbbbbbbbdddddbddbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbddbbbbbbbbbbbbbddddbbbbbbbdbbbddbbdbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbdbbbbbbbbbbbbbddbbbbbbbdddbddbbbbbbbbbbbbbbddbdbbbbdbbdbbbdbbbbbbbddbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbdbbbbbbddbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbdbbbbbbbbbbbddbbbbdbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbddbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbdddbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbddbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbdbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
    bbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbbbbbbbb7bbbbbbbbbbbbbbbb7bbbbb
    bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7bbbbbb7bbb77bbbbb77bbbb7bbb7bbbb7b77bbb7
    bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77bb7bbb77b77bb7bbb77bbb77bbb77bbb7bb77b77
    bb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777bbb77bb77b77bb77bbb77b77bbbb77b7b77b7777b
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799996999977777777777777777777
    777777ddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799966999977777777777777777777
    7777ddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799969999977777777777777777777
    777dddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799669999777777777777777777777
    7dddddddddddddddddddddddddd7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999699999777777777777777777777
    7ddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999699999777777777777777777777
    dddddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777996999999777777777777777777777
    ddddddddddddddddddddddddd777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777996999699777777777777777777777
    ddddddddddddddddddddddd77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999699777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999697777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999697777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999697777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999697777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999697777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999697777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999697777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799996997777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799996997777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799969999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779969999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779969999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779969999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779969999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779969999777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779999999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996996977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996996977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996996977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996969977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777779996969977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999969977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777799999969977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999969999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999669999977777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777999999999777777777777777777777
    `)
placeTank()
placeBomber()
placeBomb()
placeMiscellaneous()
setAllSpriteVisible(false)
info.setLife(3)
haveWon = false
initGlobals()
game.splash("Get 6000 score to win")
game.onUpdateInterval(100, function () {
    if (bombUpdateCounter <= 0) {
        bombUpdateCounter = listLevelMax[currentLevel - 1]
        updateBombSet()
    } else {
        bombUpdateCounter += -1
    }
    if (forceGoCounter >= 0) {
        forceGoCounter += -1
    }
    if (forceGoCounter == 0 && playerLocation == 0) {
        listTank[playerLocation].setFlag(SpriteFlag.Invisible, true)
        playerLocation += 1
        listTank[playerLocation].setFlag(SpriteFlag.Invisible, false)
    }
})
game.onUpdateInterval(200, function () {
    updateFlyBy()
    updateMisc()
})
