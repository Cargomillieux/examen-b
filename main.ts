basic.forever(function on_forever() {
    servos.P0.setAngle(150)
    let infraroug = pins.digitalReadPin(DigitalPin.P1)
    if (infraroug == 1) {
        servos.P0.setAngle(60)
        basic.pause(2000)
    }
    
})
