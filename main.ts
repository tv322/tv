let potentiometer = 0
basic.forever(function () {
    potentiometer = pins.analogReadPin(AnalogPin.P1)
    motors.dualMotorPower(Motor.A, pins.map(
    potentiometer,
    0,
    1023,
    0,
    100
    ))
})
