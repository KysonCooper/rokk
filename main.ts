controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3.setImage(assets.image`Ghost note5`)
    pause(100)
    mySprite3.setImage(assets.image`Ghost note1`)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (mySprite.image.equals(otherSprite.image)) {
        info.changeScoreBy(1)
        projectile.destroy(effects.confetti, 100)
    } else {
        otherSprite.setFlag(SpriteFlag.Ghost, true)
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setImage(assets.image`Ghost note3`)
    pause(100)
    mySprite.setImage(assets.image`Ghost note`)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite4.setImage(assets.image`Ghost note6`)
    pause(100)
    mySprite4.setImage(assets.image`Ghost note2`)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite2.setImage(assets.image`Ghost note4`)
    pause(100)
    mySprite2.setImage(assets.image`Ghost note0`)
})
let projectile: Sprite = null
let mySprite4: Sprite = null
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(15)
mySprite = sprites.create(assets.image`Ghost note`, SpriteKind.Player)
mySprite.setPosition(61, 101)
mySprite2 = sprites.create(assets.image`Ghost note0`, SpriteKind.Player)
mySprite2.setPosition(71, 98)
mySprite3 = sprites.create(assets.image`Ghost note1`, SpriteKind.Player)
mySprite3.setPosition(82, 103)
mySprite4 = sprites.create(assets.image`Ghost note2`, SpriteKind.Player)
mySprite4.setPosition(91, 101)
let list = [
assets.image`Green Note Left`,
assets.image`Red Note Down`,
assets.image`Yellow Note Up`,
assets.image`Blue Note Right`
]
info.setLife(3)
game.onUpdateInterval(1000, function () {
    if (Math.percentChance(21)) {
        projectile = sprites.createProjectileFromSide(list[randint(0, 0)], 0, 101)
        projectile.setPosition(61, 1)
    }
    if (Math.percentChance(21)) {
        projectile = sprites.createProjectileFromSide(list[randint(1, 1)], 0, 101)
        projectile.setPosition(71, 1)
    }
    if (Math.percentChance(21)) {
        projectile = sprites.createProjectileFromSide(list[randint(2, 2)], 0, 101)
        projectile.setPosition(82, 1)
    }
    if (Math.percentChance(21)) {
        projectile = sprites.createProjectileFromSide(list[randint(3, 3)], 0, 101)
        projectile.setPosition(91, 1)
    }
})
