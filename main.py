def on_forever():
    servos.P0.set_angle(150)
    infraroug = pins.digital_read_pin(DigitalPin.P1)
    infraroug = infraroug * 100
    if infraroug == 1:

        basic.show_leds("""
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        """)
    basic.pause(1000)

basic.forever(on_forever)
