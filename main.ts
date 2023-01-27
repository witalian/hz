let t = 0
basic.forever(function () {
    t = input.soundLevel()
    led.plotBarGraph(
    t,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(t)
    }
})
