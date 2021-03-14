input.onPinPressed(TouchPin.P0, function () {
    _13_temps = MaxTime / 3
    if (MaxTime > 15) {
        Very_last = 10
    } else {
        Very_last = MaxTime * 0.1
    }
    basic.showString("" + (MaxTime))
    LastP = _13_temps - Very_last
    for (let index = 0; index < _13_temps; index++) {
        led.plotBarGraph(
        Secondes,
        MaxTime
        )
        music.playTone(175, music.beat(BeatFraction.Quarter))
        basic.pause(MS)
        Secondes += 1
    }
    for (let index = 0; index < _13_temps; index++) {
        led.plotBarGraph(
        Secondes,
        MaxTime
        )
        music.playTone(262, music.beat(BeatFraction.Quarter))
        basic.pause(MS)
        Secondes += 1
    }
    for (let index = 0; index < LastP; index++) {
        led.plotBarGraph(
        Secondes,
        MaxTime
        )
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.pause(MS)
        Secondes += 1
    }
    for (let index = 0; index < Very_last; index++) {
        led.plotBarGraph(
        Secondes,
        MaxTime
        )
        music.playTone(698, music.beat(BeatFraction.Eighth))
        music.playTone(988, music.beat(BeatFraction.Eighth))
        basic.pause(MS)
        Secondes += 1
    }
    music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    basic.showLeds(`
        # # # # #
        # # # . #
        # # # # #
        # . # # #
        # # # # .
        `)
    basic.showLeds(`
        . # # # .
        # # # . #
        . # . # #
        # . . . .
        # # # # .
        `)
    basic.showLeds(`
        . # . # .
        # # # . #
        . # . # .
        # . # # #
        # # . # .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        # . # . #
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    if (MaxTime > 60) {
        MaxTime = MaxTime - _13_temps
        basic.showString("" + (MaxTime))
    } else {
        MaxTime = 180
        basic.showString("" + (MaxTime))
    }
})
let LastP = 0
let Very_last = 0
let _13_temps = 0
let Secondes = 0
let MS = 0
let MaxTime = 0
basic.clearScreen()
MaxTime = 180
MS = 900
Secondes = 0
_13_temps = MaxTime / 3
led.setBrightness(200)
basic.showString("" + (MaxTime))
basic.forever(function () {
	
})
