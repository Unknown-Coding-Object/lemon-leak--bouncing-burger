namespace SpriteKind {
    export const Bot = SpriteKind.create()
    export const JelloBot = SpriteKind.create()
    export const HamburgerBot = SpriteKind.create()
    export const PizzaBot = SpriteKind.create()
    export const CakeBot = SpriteKind.create()
    export const CherryBot = SpriteKind.create()
    export const Coin = SpriteKind.create()
    export const Effect = SpriteKind.create()
}
controller.combos.attachCombo("", function () {
    pause(750)
    game.over(false, effects.confetti)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite6.setImage(img`
        . . . . f f f f . . . . . 
        . . f f c c c c f f . . . 
        . f f c c c c c c f f . . 
        f f c c c c c c c c f f . 
        f f c c f c c c c c c f . 
        f f f f f c c c f c c f . 
        f f f f c c c f c c f f . 
        f f f f f f f f f f f f . 
        f f f f f f f f f f f f . 
        . f f f f f f f f f f . . 
        . f f f f f f f f f f . . 
        f e f f f f f f f f e f . 
        e 4 f 7 7 7 7 7 7 c 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Coin, function (sprite, otherSprite) {
    music.baDing.play()
    info.changeScoreBy(1)
    otherSprite.destroy(effects.halo, 500)
    sprite.startEffect(effects.confetti, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bot, function (sprite, otherSprite) {
    music.pewPew.play()
    sprite.say("Ow... :(", 2000)
    otherSprite.say("Mwahahaha", 2000)
    otherSprite.startEffect(effects.disintegrate, 1000)
    info.changeLifeBy(-1)
    info.player2.changeScoreBy(1)
    scene.cameraShake(4, 500)
    statusbar.value += -25
    pause(1000)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
	
})
statusbars.onStatusReached(StatusBarKind.Health, statusbars.StatusComparison.EQ, statusbars.ComparisonType.Percentage, 25, function (status) {
    mySprite6.say("I'm gonna die...")
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite6.setImage(img`
        . . . . . f f f f f . . . 
        . . . f f f f f f f f f . 
        . . f f f c f f f f f f . 
        . . f f c f f f c f f f f 
        f f c c f f f c c f f c f 
        f f f f f e f f f f c c f 
        . f f f e e f f f f f f f 
        . . f f e e f b f e e f f 
        . . . f 4 4 f 1 e 4 e f . 
        . . . f 4 4 4 4 e f f f . 
        . . . f f e e e e e f . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 7 7 7 e 4 4 e . . 
        . . . f 6 6 6 f e e f . . 
        . . . . f f f f f f . . . 
        . . . . . . f f f . . . . 
        `)
})
info.onCountdownEnd(function () {
    game.over(true, effects.smiles)
})
sprites.onCreated(SpriteKind.Coin, function (sprite) {
    animation.runImageAnimation(
    sprite,
    [img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `,img`
        . . . b b . . . 
        . . b 5 5 b . . 
        . . b 1 1 b . . 
        . . b 5 5 b . . 
        . . b d d b . . 
        . . c d d c . . 
        . . c 3 3 c . . 
        . . . f f . . . 
        `],
    500,
    true
    )
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    game.over(false, effects.melt)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite6.setImage(img`
        . . . f f f f f . . . . . 
        . f f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f c f f f c f f . . 
        f c f f c c f f f c c f f 
        f c c f f f f e f f f f f 
        f f f f f f f e e f f f . 
        f f e e f b f e e f f . . 
        . f e 4 e 1 f 4 4 f . . . 
        . f f f e 4 4 4 4 f . . . 
        . . f e e e e e f f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . e 4 4 e 7 7 7 f . . . 
        . . f e e f 6 6 6 f . . . 
        . . . f f f f f f . . . . 
        . . . . f f f . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite6.setImage(img`
        . . . . f f f f . . . . . 
        . . f f f f f f f f . . . 
        . f f f f f f c f f f . . 
        f f f f f f c c f f f c . 
        f f f c f f f f f f f c . 
        c c c f f f e e f f c c . 
        f f f f f e e f f c c f . 
        f f f b f e e f b f f f . 
        . f 4 1 f 4 4 f 1 4 f . . 
        . f e 4 4 4 4 4 4 e f . . 
        . f f f e e e e f f f . . 
        f e f b 7 7 7 7 b f e f . 
        e 4 f 7 7 7 7 7 7 f 4 e . 
        e e f 6 6 6 6 6 6 f e e . 
        . . . f f f f f f . . . . 
        . . . f f . . f f . . . . 
        `)
})
info.onLifeZero(function () {
    game.over(false, effects.melt)
})
/**
 * You can change your sprite/sprite image if you want.
 * 
 * You can also try changing the screen effect!
 */
/**
 * Also DO NOT change to python / javascript or when you will change back to blocks the code / game will get messed up!
 */
/**
 * When you beat the countdown try adding more time to make it harder.
 */
let mySprite7: Sprite = null
let statusbar: StatusBarSprite = null
let mySprite6: Sprite = null
scene.setBackgroundImage(img`
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999999ee999999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeee99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeee99999999999999999999999999999999999999999999999999999999999999999999999
    9999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeee9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeee9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeee9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeee9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeee9999999999999999999999999999999999999999999999999999999999999999999999
    999999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeee9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999
    99999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeee9999999999999999999999999999999999999999999999999999999999dddddddddd99
    ee999999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeee99999999999999999999999999999999999999999999999999999999ddddddddddddd
    eeeee999999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999dddddddddddddd
    eeeeee99999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999dddddddddddddd
    eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeee9999999999999999999999999999999999999999999999999999999dddddddddddddd
    eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeee999999999999999999999999999999999999999999999999ddddddddddddddddddddd
    eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeee99999999999999999999999999999999999999999999999dddddddddddddddddddddd
    eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeeee999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    eeeeeee9999999999999999999999999999999999999999999999999999999999999999999999999999eeeeeeeee999999999999999999999999999999999999999999999ddddddddddddddddddddddd
    eeeeeee999999999999999999999999999999999eee9999999999999999999999999999999999999999eeeeeeeee999999999999999999999999999999999999999999999dd7777777777777dddddddd
    eeeeeee999999999999999999999999999999eeeeeee999999999999999999999999999999999999999eeeeeeeeee999999999999999999999999999999999999999977777777777777777777ddddddd
    eeeeeee9999999999999999999999999999eeeeeeeee999999999999999999999999999999999999999eeeeeeeeee9999999999999999999999999999999999999777777777777777777777777dddddd
    eeeeeee99999999999999999999999999eeeeeeeeeeee99999999999999999999999999999999999999eeeeeeeeeee999999999999977777777777777777777777777777777777777777777777dddddd
    eeeeeee9999999999999999999999999eeeeeeeeeeeee9999999999999999999999999999999999999eeeeeeeeeeee977777777777777777777777777777777777777777777777777777777777dddddd
    eeeeeee999999999999999999999999eeeeeeeeeeeeee999999999999999999999999999999999999eeeeeeeeeeeee977777777777777777777777777777777777777777777777777777777777dddddd
    eeeeeee999999977777999999999999eeeeeeeeeeeeee999999999999999999999999999999999999eeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777dddddd
    eeeeeee999997777777799999999999eeeeeeeeeeeeee999999999999999999999999ee999999999eeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777dddddd
    eeeeeee997777777777799999999999eeeeeeeeeeeeeee9999999999999999999999eeeeeee9999eeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777dddddd
    eeeeeee77777777777779999999999eeeeeeeeeeeeeeee999999999999999999999eeeeeeeeee99eeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777dddddd
    eeeeeee77777777777779999999999eeeeeeeeeeeeeeee999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777dddddd
    eeeeeee77777777777777999999999eeeeeeeeeeeeeeee999999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777dddddd
    eeeee7777777777777777999999999eeeeeeeeeeeeeeee99999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777dddddd
    eeee77777777777777777999999eeeeeeeeeeeeeeeeeee99999999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777dddddd
    eeee77777777777777777eeeeeeeeeeeeeeeeeeeeeeeee99eee999999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777dddddd
    eee777777777777777777eeeeeeeeeeeeeeeeeeeeeeeee99eeee99999999999999eeeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777dddddd
    eee777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee9999999999999eeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777ddddd
    ee7777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee999999999999eeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777ddddd
    ee7777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777ddddd
    e77777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777ddddd
    e77777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777dddd
    e77777777777777777777eeeeeeeeeeee77777eeeeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777dddd
    7777777777777777777777eeeeeeeeeee7777777eeeeeeeeeeeeee99999999999eeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777eeeeeeeeee77777777eeeeeeeeeeeeee9999999999eeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777eeeeeee77777777777eeeeeeeeeeeeeee99999999eeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777eeee777777777777eeeeeeeeeeeeeeeee99999eeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeeeeeee7777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    77777777777777777777777777777777777777777777777777777777eeeeeeeeeeeeeeeeee77777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777eeeeee777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777
    `)
game.setDialogFrame(img`
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d 1 1 1 1 1 1 1 1 1 1 1 1 
    d d d d d d d d d d d d d 
    `)
game.setDialogTextColor(12)
game.showLongText("Your hungry for some snacks! But the food is poisoned! Avoid the snacks and See how long you can survive without food.", DialogLayout.Center)
storyboard.loaderBootSequence.register()
storyboard.start("")
scene.setBackgroundImage(img`
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 6 6 6 6 6 6 
    `)
if (Math.percentChance(25)) {
    tiles.setTilemap(tilemap`level1`)
} else {
    tiles.setTilemap(tilemap`level2`)
}
if (Math.percentChance(25)) {
    tiles.setTilemap(tilemap`level5`)
} else {
    tiles.setTilemap(tilemap`level6`)
}
scene.setBackgroundColor(6)
effects.starField.startScreenEffect()
let mySprite = sprites.create(img`
    ..............bbbbbbb...........
    ...........bb66663333baa........
    .........bb3367776333663aa......
    ........b33333888333389633aa....
    .......b3333333333333389633aa...
    ......b34443333333333338633bae..
    .....b3455433333333334443333ae..
    ....b33322333dddd3333455233daee.
    ...b3d333333dd3bbbb33322333dabe.
    ..b3d333333d3bb33bb33333333da4e.
    ..bd33333333b33aab3333333223a4ee
    .b3d3663333b33aab33366332442b4ee
    .bd3b983333a3aa3333387633ee3b4ee
    .bd6983333baaa333333387633bb4bee
    b3d6833333bba333333333863ba44ebe
    bdd3333333bb3333333333333a44bebe
    add666633333322333366333ba44bbbe
    ad67776333332442336983d3a444b4e.
    add888b333333ee3369833d3a44b44e.
    add333333333333336833d3a444b4e..
    a3dd3333344433333dddd3a444b44e..
    ab33ddd325543333dd33aa444b44e...
    .eabb3dd32233333baaa4444b44e....
    .ebabb3d333d33baa444443b44e.....
    ..ebaab3ddd3aaa4444433b44e......
    ..eebbaab33a44444333b444e.......
    ...eeebbaab444b333b4444e........
    ....ebeeebbbbbbbb4444ee.........
    .....eebbbb44444444ee...........
    .......eeebbb444eee.............
    ..........eeeeee................
    ................................
    `, SpriteKind.Bot)
mySprite.vx = 60
mySprite.vy = 60
mySprite.setBounceOnWall(true)
let mySprite2 = sprites.create(img`
    ...........ccccc66666...........
    ........ccc4444444444666........
    ......cc444444444bb4444466......
    .....cb4444bb4444b5b444444b.....
    ....eb4444b5b44444b44444444b....
    ...ebb44444b4444444444b444446...
    ..eb6bb444444444bb444b5b444446..
    ..e6bb5b44444444b5b444b44bb44e..
    .e66b4b4444444444b4444444b5b44e.
    .e6bb444444444444444444444bb44e.
    eb66b44444bb444444444444444444be
    eb66bb444b5b44444444bb44444444be
    fb666b444bb444444444b5b4444444bf
    fcb666b44444444444444bb444444bcf
    .fbb6666b44444444444444444444bf.
    .efbb66666bb4444444444444444bfe.
    .86fcbb66666bbb44444444444bcc688
    8772effcbbbbbbbbbbbbbbbbcfc22778
    87722222cccccccccccccccc22226678
    f866622222222222222222222276686f
    fef866677766667777776667777fffef
    fbff877768f86777777666776fffffbf
    fbeffeefffeff7766688effeeeefeb6f
    f6bfffeffeeeeeeeeeeeeefeeeeebb6e
    f66ddfffffeeeffeffeeeeeffeedb46e
    .c66ddd4effffffeeeeeffff4ddb46e.
    .fc6b4dddddddddddddddddddb444ee.
    ..ff6bb444444444444444444444ee..
    ....ffbbbb4444444444444444ee....
    ......ffebbbbbb44444444eee......
    .........fffffffcccccee.........
    ................................
    `, SpriteKind.Bot)
mySprite2.vx = 60
mySprite2.vy = 60
mySprite2.setBounceOnWall(true)
let mySprite3 = sprites.create(img`
    . . . . . . . e e e e . . . . . 
    . . . . . e e 4 5 5 5 e e . . . 
    . . . . e 4 5 6 2 2 7 6 6 e . . 
    . . . e 5 6 6 7 2 2 6 4 4 4 e . 
    . . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
    . e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
    . e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
    e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
    e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
    e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
    e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
    e 5 e c 5 4 5 4 5 5 5 e e . . . 
    e 5 e e 5 5 5 5 5 4 e . . . . . 
    4 5 4 e 5 5 5 5 e e . . . . . . 
    . 4 5 4 5 5 4 e . . . . . . . . 
    . . 4 4 e e e . . . . . . . . . 
    `, SpriteKind.Bot)
mySprite3.vx = 60
mySprite3.vy = 60
mySprite3.setBounceOnWall(true)
let mySprite4 = sprites.create(img`
    . . . . . . . . . . b b b . . . 
    . . . . . . . . b e e 3 3 b . . 
    . . . . . . b b e 3 2 e 3 a . . 
    . . . . b b 3 3 e 2 2 e 3 3 a . 
    . . b b 3 3 3 3 3 e e 3 3 3 a . 
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a 
    b 3 3 3 d d d d 3 3 3 3 3 d d a 
    b b b b b b b 3 d d d d d d 3 a 
    b d 5 5 5 5 d b b b a a a a a a 
    b 3 d d 5 5 5 5 5 5 5 d d d d a 
    b 3 3 3 3 3 3 d 5 5 5 d d d d a 
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a 
    b b b 3 d 5 5 5 5 5 5 5 d d b a 
    . . . b b b 3 d 5 5 5 5 d d 3 a 
    . . . . . . b b b b 3 d d d b a 
    . . . . . . . . . . b b b a a . 
    `, SpriteKind.Bot)
mySprite4.vx = 60
mySprite4.vy = 60
mySprite4.setBounceOnWall(true)
let mySprite5 = sprites.create(img`
    . . . . . . . . . . . 6 6 6 6 6 
    . . . . . . . . . 6 6 7 7 7 7 8 
    . . . . . . 8 8 8 7 7 8 8 6 8 8 
    . . e e e e c 6 6 8 8 . 8 7 8 . 
    . e 2 5 4 2 e c 8 . . . 6 7 8 . 
    e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
    e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
    e 2 e e 2 2 2 2 e e e e c 6 8 . 
    c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
    . c 2 e e e 2 e 2 4 2 2 2 2 c . 
    . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
    . . . e c c e c 2 2 2 2 2 2 2 e 
    . . . . . . . c 2 e e 2 2 e 2 c 
    . . . . . . . c e e e e e e 2 c 
    . . . . . . . . c e 2 2 2 2 c . 
    . . . . . . . . . c c c c c . . 
    `, SpriteKind.Bot)
mySprite5.setBounceOnWall(true)
mySprite5.vx = 60
mySprite5.vy = 60
mySprite6 = sprites.create(img`
    . . . . f f f f . . . . . 
    . . f f f f f f f f . . . 
    . f f f f f f c f f f . . 
    f f f f f f c c f f f c . 
    f f f c f f f f f f f c . 
    c c c f f f e e f f c c . 
    f f f f f e e f f c c f . 
    f f f b f e e f b f f f . 
    . f 4 1 f 4 4 f 1 4 f . . 
    . f e 4 4 4 4 4 4 e f . . 
    . f f f e e e e f f f . . 
    f e f b 7 7 7 7 b f e f . 
    e 4 f 7 7 7 7 7 7 f 4 e . 
    e e f 6 6 6 6 6 6 f e e . 
    . . . f f f f f f . . . . 
    . . . f f . . f f . . . . 
    `, SpriteKind.Player)
mySprite6.say("I'm hungry.")
statusbar = statusbars.create(20, 4, StatusBarKind.Health)
statusbar.attachToSprite(mySprite6, -22, 0)
statusbar.setColor(7, 2)
statusbar.setLabel("HP", 2)
statusbar.value = 100
lantern.startLanternEffect(mySprite6)
lantern.setBreathingEnabled(true)
lantern.setLightBandWidth(35)
mySprite6.setStayInScreen(true)
controller.moveSprite(mySprite6, 125, 125)
tiles.placeOnRandomTile(mySprite6, sprites.dungeon.floorLight2)
info.setLife(4)
info.startCountdown(55)
scene.cameraFollowSprite(mySprite6)
let mySprite8 = sprites.create(img`
    . . . . . . . 6 . . . . . . . . 
    . . . . . . 8 6 6 . . . 6 8 . . 
    . . . e e e 8 8 6 6 . 6 7 8 . . 
    . . e 2 2 2 2 e 8 6 6 7 6 . . . 
    . e 2 2 4 4 2 7 7 7 7 7 8 6 . . 
    . e 2 4 4 2 6 7 7 7 6 7 6 8 8 . 
    e 2 4 5 2 2 6 7 7 6 2 7 7 6 . . 
    e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 . 
    e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 . 
    e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 . 
    e 2 4 2 2 2 2 2 2 2 2 2 e c 6 . 
    e 2 2 2 2 2 2 2 4 e 2 e e c . . 
    e e 2 e 2 2 4 2 2 e e e c . . . 
    e e e e 2 e 2 2 e e e c . . . . 
    e e e 2 e e c e c c c . . . . . 
    . c c c c c c c . . . . . . . . 
    `, SpriteKind.Bot)
mySprite8.setBounceOnWall(true)
mySprite8.vx = 60
mySprite8.vy = 60
for (let value of tiles.getTilesByType(assets.tile`myTile1`)) {
    tiles.placeOnRandomTile(mySprite8, assets.tile`myTile1`)
    tiles.setTileAt(tiles.getTileLocation(10, 20), assets.tile`transparency16`)
}
for (let value2 of tiles.getTilesByType(assets.tile`myTile2`)) {
    tiles.placeOnRandomTile(mySprite5, assets.tile`myTile2`)
    tiles.setTileAt(tiles.getTileLocation(18, 8), assets.tile`transparency16`)
}
for (let value3 of tiles.getTilesByType(assets.tile`myTile6`)) {
    tiles.placeOnRandomTile(mySprite4, assets.tile`myTile6`)
    tiles.setTileAt(tiles.getTileLocation(9, 7), assets.tile`transparency16`)
}
for (let value4 of tiles.getTilesByType(assets.tile`myTile5`)) {
    tiles.placeOnRandomTile(mySprite3, assets.tile`myTile5`)
    tiles.setTileAt(tiles.getTileLocation(13, 3), assets.tile`transparency16`)
}
for (let value5 of tiles.getTilesByType(assets.tile`myTile3`)) {
    tiles.placeOnRandomTile(mySprite2, assets.tile`myTile3`)
    tiles.setTileAt(tiles.getTileLocation(4, 10), assets.tile`transparency16`)
}
for (let value6 of tiles.getTilesByType(assets.tile`myTile4`)) {
    tiles.placeOnRandomTile(mySprite, assets.tile`myTile4`)
    tiles.setTileAt(tiles.getTileLocation(19, 15), assets.tile`transparency16`)
}
game.onUpdateInterval(2000, function () {
    mySprite7 = sprites.create(img`
        . . . b b b . . 
        . . b 5 5 5 b . 
        . b 5 d 3 d 5 b 
        . b 5 1 5 3 5 b 
        . c d 1 5 3 5 c 
        . c d d 1 d 5 c 
        . . f d d d f . 
        . . . f f f . . 
        `, SpriteKind.Coin)
    tiles.placeOnRandomTile(mySprite7, assets.tile`myTile0`)
})
game.onUpdateInterval(1000, function () {
    info.changeScoreBy(1)
})
/**
 * I made some of my own music rhythms in the grey blocks.You can put them in any order or choose some from the gallery or even make your own!
 */
forever(function () {
    music.playMelody("A F E F D G E F ", 120)
    music.playMelody("E B C5 A B G A F ", 120)
    pause(500)
})