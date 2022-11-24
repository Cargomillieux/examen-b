basic.forever(function on_forever() {
    servos.P0.setAngle(150)
    let infraroug = pins.digitalReadPin(DigitalPin.P1)
    infraroug = infraroug * 100
    if (infraroug == 1) {
        basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    }
    
    basic.pause(1000)
})
