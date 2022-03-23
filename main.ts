grove.onGesture(GroveGesture.Right, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
    music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . # # .
        # . . # .
        . # # # .
        `)
    music.playTone(392, music.beat(BeatFraction.Half))
})
grove.onGesture(GroveGesture.Left, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `)
    music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.Once)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showLeds(`
        . # # # .
        # . . . .
        # . . . .
        # . . . .
        . # # # .
        `)
    music.playTone(262, music.beat(BeatFraction.Half))
})
