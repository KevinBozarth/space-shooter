enum ActionKind {
    Walking,
    Idle,
    Jumping,
    explode
}
namespace SpriteKind {
    export const playerProjectile = SpriteKind.create()
    export const enemyProjectile = SpriteKind.create()
    export const MotherShip = SpriteKind.create()
    export const fireball = SpriteKind.create()
}
function explode () {
    anim = animation.createAnimation(ActionKind.explode, 1)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
    anim.addAnimationFrame(img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `)
    anim.addAnimationFrame(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `)
    animation.attachAnimation(explosion, anim)
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . 2 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, Shooter, 0, -100)
    projectile.setKind(SpriteKind.playerProjectile)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.playerProjectile, SpriteKind.MotherShip, function (sprite, otherSprite) {
    music.smallCrash.play()
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyProjectile, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.smallCrash.play()
    otherSprite.destroy()
    scene.cameraShake(5, 500)
    Shooter.startEffect(effects.fire, 500)
})
function createShooter () {
    info.setLife(10)
    Shooter = sprites.create(img`
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . . 1 . . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . 8 8 8 . . . . . . . 
        . . . . . . d d d . . . . . . . 
        . . . 2 . . d 1 d . . 2 . . . . 
        . . . 2 . 1 1 1 1 1 . 2 . . . . 
        . . . 1 8 1 1 5 1 1 8 1 . . . . 
        2 . . 8 d 1 5 5 5 1 d 8 . . 2 . 
        2 . . d d 1 5 1 5 1 d d . . 2 . 
        d . 1 d d 1 1 1 1 1 d d 1 . d . 
        d 1 1 1 d 2 1 1 1 2 d 1 1 1 d . 
        d 1 1 . 2 2 1 1 1 2 2 . 1 1 d . 
        d 1 . . 2 2 . 1 . 2 2 . . 1 d . 
        d . . . . . . 1 . . . . . . d . 
        `, SpriteKind.Player)
    Shooter.setPosition(80, 107)
    Shooter.setStayInScreen(true)
    controller.moveSprite(Shooter, 100, 0)
}
function spawnMotherShip () {
    Enemy3 = sprites.create(img`
        ...................................................111111111111111...................................................
        ..................................................1fffffffffffffff1..................................................
        ..........................................111111111fffffffffffffff111111111..........................................
        .........................................1fffffffff887888888888788fffffffff1.........................................
        .........................................1fffffffff888788888887888fffffffff1.........................................
        .................................111111111fffffffff888777777777888fffffffff111111111.................................
        ................................1fffffffff888888888887f7777777f788888888888fffffffff1................................
        ................................1fffffffff888888888887ff77777ff788888888888fffffffff1................................
        .....................111111111111fffffffff888888888877fff777fff778888888888fffffffff11111111111......................
        ....................1ffffffffffffccccccfff8888888888777ff777ff7778888888888fffbbbbbbffffffffffff1....................
        ....................1ffffffffffffccccccfff888888888877777777777778888888888fffbbbbbbffffffffffff1....................
        .........111111111111ffffffffffffccccccfff888888888877777f7f777778888888888fffbbbbbbffffffffffff111111111111.........
        ........1ffffffffffffbbbbbb555bbbbbbccccccfffffffff877777777777778fffffffffbbbbbbbbbbbb555bbbbbbffffffffffff1........
        ........1ffffffffffffbbbbbb555bbbbbbccccccfffffffff887777fff777788fffffffffbbbbbbbbbbbb555bbbbbbffffffffffff1........
        ...111111ffffffffffffbbbbbb555bbbbbbccccccfffffffff887777777777788fffffffffbbbbbbbbbbbb555bbbbbbffffffffffff111111...
        ..1ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccffffff1..
        ..1ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccffffff1..
        .11ffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccfffffffffffffffbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbcccccccccffffff11.
        1ff111111111bbbbbbbbbbbbbbbbbbbb222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222bbbbbbbbbccccccccccccccc999999999ff1
        1ff111111111bbbbbbbbbbbbbbbbbbbb222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222bbbbbbbbbccccccccccccccc999999999ff1
        1ff111111111bbbbbbbbbbbbbbbbbbbb222bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb222bbbbbbbbbccccccccccccccc999999999ff1
        1ff999111111111111111111bbbbbbbbbbbbbbbbbbbbb555bbbbbbbbb222bbbbbbbbb555bbbbbbbbbbbbccccccccc999999999999999999999ff1
        1ff999111111111111111111bbbbbbbbbbbbbbbbbbbbb555bbbbbbbbb222bbbbbbbbb555bbbbbbbbbbbbccccccccc999999999999999999999ff1
        1ff999111111111111111111bbbbbbbbbbbbbbbbbbbbb555bbbbbbbbb222bbbbbbbbb555bbbbbbbbbbbbccccccccc999999999999999999999ff1
        1ffcccccc999999999999999111111999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999111111ffffffff1
        1ffcccccc999999999999999111111999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999111111ffffffff1
        1ffcccccc999999999999999111111999999999999bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb999999999999999999999999999111111ffffffff1
        .11ffffffcccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999cccfffffffffffffff11.
        ..1ffffffcccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999cccfffffffffffffff1..
        ..1ffffffcccccccccccc999999999999999999999999999999999999999999999999999999999999999999999999999cccfffffffffffffff1..
        ...111111ffffffcccccccccccccccccccccccc999999999999999999999999999999999999999cccccccccccccccfffffffffffffff111111...
        ........1ffffffcccccccccccccccccccccccc999999999999999999999999999999999999999cccccccccccccccfffffffffffffff1........
        ........1ffffffcccccccccccccccccccccccc999999999999999999999999999999999999999cccccccccccccccfffffffffffffff1........
        ........1fff222fffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffff222fff1........
        ........1fff222fffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffff222fff1........
        ........1fff222fffffffffccccccccccccccccccccccccccccccccccccccccccccccccccccccffffffffffffffffffffffff222fff1........
        .........111fff222222222fffffffffccccccccccccccccccccccccccccccffffffffffffffffffffffffffffff222222222fff111.........
        ...........1fff222222222fffffffffccccccccccccccccccccccccccccccffffffffffffffffffffffffffffff222222222fff1...........
        ...........1fff222222222fffffffffccccccccccccccccccccccccccccccffffffffffffffffffffffffffffff222222222fff1...........
        ............111fffffffff111111111fffffffffffffffffffffffffffffffffffffffffffffffffff111111111fffffffff111............
        ..............1fffffffff1.......1fffffffffffffffffffffffffffffffffffffffffffffffffff1.......1fffffffff1..............
        ..............1fffffffff1.......1fffffffffffffffffffffffffffffffffffffffffffffffffff1.......1fffffffff1..............
        ...............111111111.........111111111fff222222222222222222222222222fff111111111.........111111111...............
        .........................................1fff222222222222222222222222222fff1.........................................
        .........................................1fff222222222222222222222222222fff1.........................................
        ..........................................111ffffff222222222222222ffffff111..........................................
        ............................................1ffffff222222222222222ffffff1............................................
        ............................................1ffffff222222222222222ffffff1............................................
        .............................................111111fffffffffffffff111111.............................................
        ..................................................1fffffffffffffff1..................................................
        ...................................................111111111111111...................................................
        `, SpriteKind.MotherShip)
    Enemy3.setPosition(80, 20)
    animation.runMovementAnimation(
    Enemy3,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
}
function spawnEnemy2 () {
    Enemy2 = sprites.create(img`
        .........................
        ...........888...........
        ..........81118..........
        .........811199a.........
        ........81119996a........
        ........81199996a........
        .......89999999668.......
        .......89999996668.......
        ....ccccc9966666ccccc....
        ..ccbbbbbcccccccbbbbbcc..
        .88888888888888888888888.
        8888888888888888888888888
        ..ccbbbbbbbbbbbbbbbbbcc..
        ....ccbbbbbbbbbbbbbcc....
        ......ccccbbbbbcccc......
        ..........ccccc..........
        `, SpriteKind.Enemy)
    Enemy2.setPosition(randint(10, 150), 0)
    Enemy2.setVelocity(randint(-10, 10), randint(10, 50))
}
function spawnEnemy1 () {
    Enemy1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . a . . . . . . . . . . a . . 
        . . c a . . f f f f . . a c . . 
        . . . c a f 9 9 1 9 f a c . . . 
        . . . . f 8 9 9 1 1 9 f . . . . 
        . . . f 8 8 9 9 9 9 1 9 f . . . 
        . . . f 8 8 8 9 9 9 9 9 f . . . 
        . f f f c c 8 8 8 9 9 9 f f f . 
        f b b b f f f f f f f f b b c f 
        f c c b b b b b b b b b b b b f 
        f c c 2 c b 2 b b 2 b b 2 b b f 
        . f f c c c c c c c b b b f f . 
        . . . f f f f f f f f f f . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    Enemy1.setPosition(randint(10, 150), 0)
    Enemy1.setVelocity(randint(-10, 10), randint(20, 40))
}
sprites.onOverlap(SpriteKind.playerProjectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.destroy(effects.fountain, 100)
    sprite.destroy()
    info.changeScoreBy(1)
})
function nextLevel () {
    if (level == 2) {
        game.splash("LEVEL " + level, "Destroy 15 alien ships")
    }
    if (level == 3) {
        game.splash("BOSS" + " LEVEL", "Shoot the mothership 50 times!")
        game.showLongText("You found a note: 1", DialogLayout.Center)
        spawnMotherShip()
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireball, function (sprite, otherSprite) {
    info.changeLifeBy(-2)
    music.smallCrash.play()
    otherSprite.destroy()
    scene.cameraShake(5, 500)
    Shooter.startEffect(effects.halo, 500)
})
sprites.onOverlap(SpriteKind.playerProjectile, SpriteKind.fireball, function (sprite, otherSprite) {
    music.smallCrash.play()
    otherSprite.destroy(effects.fountain, 100)
    sprite.destroy()
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.bigCrash.play()
    scene.cameraShake(5, 500)
    Shooter.startEffect(effects.fire, 500)
    otherSprite.destroy()
})
let Input = ""
let enemyProjectile: Sprite = null
let asteroid: Sprite = null
let Enemy1: Sprite = null
let Enemy2: Sprite = null
let Enemy3: Sprite = null
let Shooter: Sprite = null
let projectile: Sprite = null
let explosion: Sprite = null
let anim: animation.Animation = null
let level = 0
game.splash("Space Shooter", "You must defend earth from an alien invasion")
game.splash("Press B to fire", "Use the left and right keys to move")
level = 1
createShooter()
game.splash("LEVEL " + level, "Destroy 10 alien ships")
info.setScore(0)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
scroller.scrollBackgroundWithSpeed(randint(-5, 5), randint(50, 100))
game.onUpdateInterval(5000, function () {
    asteroid = sprites.create(img`
        . . . . . . . c c c a c . . . . 
        . . c c b b b a c a a a c . . . 
        . c c a b a c b a a a b c c . . 
        . c a b c f f f b a b b b a . . 
        . c a c f f f 8 a b b b b b a . 
        . c a 8 f f 8 c a b b b b b a . 
        c c c a c c c c a b c f a b c c 
        c c a a a c c c a c f f c b b a 
        c c a b 6 a c c a f f c c b b a 
        c a b c 8 6 c c a a a b b c b c 
        c a c f f a c c a f a c c c b . 
        c a 8 f c c b a f f c b c c c . 
        . c b c c c c b f c a b b a c . 
        . . a b b b b b b b b b b b c . 
        . . . c c c c b b b b b c c . . 
        . . . . . . . . c b b c . . . . 
        `, SpriteKind.enemyProjectile)
    asteroid.x = 0
    asteroid.y = randint(-100, 100)
    asteroid.vx = randint(50, 100)
    asteroid.vy = randint(-10, 10)
})
game.onUpdateInterval(2000, function () {
    if (level == 3) {
        enemyProjectile = sprites.createProjectileFromSprite(img`
            . . . . . . . . 2 2 2 2 . . . . 
            . . . . 2 2 2 2 2 2 2 2 2 . . . 
            . . . 2 1 2 2 4 4 4 4 2 4 2 . . 
            . . 2 2 1 1 1 1 4 4 4 2 4 4 2 . 
            . . 2 2 4 1 1 2 4 4 1 1 1 4 4 2 
            . . 2 2 4 4 4 4 5 2 1 1 1 4 4 2 
            . 2 2 2 2 4 2 2 5 4 1 2 4 4 2 2 
            2 4 1 1 2 2 2 4 5 5 1 5 5 5 2 2 
            2 4 1 1 1 1 2 2 2 1 5 5 5 4 4 2 
            2 4 4 2 1 1 2 4 1 1 5 5 5 4 4 2 
            2 2 5 4 4 4 4 5 1 5 5 4 5 5 4 . 
            . 2 2 5 5 5 5 5 5 5 4 2 2 5 4 . 
            . . 2 2 2 5 2 2 2 5 4 4 5 2 . . 
            . . . . 2 5 4 2 2 5 5 5 2 . . . 
            . . . . 2 5 5 4 4 1 5 2 . . . . 
            . . . . . . 5 1 1 2 2 . . . . . 
            `, Enemy3, 0, 0)
        enemyProjectile.setKind(SpriteKind.fireball)
        enemyProjectile.follow(Shooter, randint(70, 150))
    }
})
/**
 * fix explosion animation after enter code
 */
game.onUpdateInterval(1000, function () {
    if (info.score() >= 10 && level == 1) {
        Enemy1.destroy()
        game.splash("Level 1 Complete!", "Press A to continue")
        game.showLongText("You found a note: 3", DialogLayout.Center)
        info.setScore(0)
        level += 1
        nextLevel()
    } else {
        if (level == 1) {
            spawnEnemy1()
        } else if (level == 2) {
            spawnEnemy2()
            enemyProjectile = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . 7 7 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Enemy2, 0, randint(70, 100))
            enemyProjectile.setKind(SpriteKind.enemyProjectile)
        } else if (level == 3) {
        	
        }
    }
    if (info.score() >= 15 && level == 2) {
        Enemy2.destroy()
        enemyProjectile.destroy()
        game.splash("Level 2 Complete!", "Press A to continue")
        info.setScore(0)
        level += 1
        nextLevel()
    }
    if (info.score() >= 50 && level == 3) {
        enemyProjectile.destroy()
        info.setScore(0)
        game.splash("Mothership weapons have been disabled", "Press A to continue")
        game.showLongText("You found a note: 9", DialogLayout.Center)
        Input = game.askForString("Input the 3-digit code to activate the mothership's self destruct", 3)
        if (Input == "319") {
            pause(1000)
            explode()
            animation.runMovementAnimation(
            Enemy3,
            animation.animationPresets(animation.shake),
            5000,
            false
            )
            explosion = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . 4 4 . . . . . . . 
                . . . . . . 4 5 5 4 . . . . . . 
                . . . . . . 2 5 5 2 . . . . . . 
                . . . . . . . 2 2 . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, Enemy3, 0, 0)
            Enemy3.destroy()
            animation.setAction(explosion, ActionKind.explode)
            pause(2000)
            game.over(true)
        } else {
            game.over(false)
        }
    }
})
