def on_forever():
    servos.P0.set_angle(150)
    infraroug = pins.digital_read_pin(DigitalPin.P1)
    if infraroug == 1:
        servos.P0.set_angle(60)
        basic.pause(2000)
basic.forever(on_forever)
