basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(input.temperature())
    }
})
