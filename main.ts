input.onButtonPressed(Button.A, function () {
    Mode += 1
    Start_Time = input.runningTime()
    basic.showIcon(IconNames.Happy)
})
input.onButtonPressed(Button.B, function () {
    Mode = 0
})
let Duration = 0
let Start_Time = 0
let Mode = 0
Mode = 0
basic.forever(function () {
    if (Mode == 0) {
        Duration = Math.round(pins.map(
        edubitPotentioBit.readPotValue(),
        0,
        1023,
        0,
        60
        ))
        basic.showNumber(Duration)
    } else if (Mode == 1) {
        if (input.runningTime() - Start_Time >= Duration * 1000) {
            music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
            Mode = 2
        }
        basic.showIcon(IconNames.Sad)
    }
})
