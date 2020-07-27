let D0 = 1
let D1 = 1
let D2 = 1
let D3 = 1
let D4 = 1
let X0 = 0
let X1 = 1
let X2 = 2
let X3 = 3
let X4 = 4
let Y0 = -1
let Y1 = 0
let Y2 = 1
let Y3 = 2
let Y4 = 3
basic.forever(function () {
    led.unplot(X0, Y0)
    led.unplot(X1, Y1)
    led.unplot(X2, Y2)
    led.unplot(X3, Y3)
    led.unplot(X4, Y4)
    Y0 += D0
    Y1 += D1
    Y2 += D2
    Y3 += D3
    Y4 += D4
    led.plot(X0, Y0)
    led.plot(X1, Y1)
    led.plot(X2, Y2)
    led.plot(X3, Y3)
    led.plot(X4, Y4)
    if (Y0 >= 4) {
        D0 = -1
    } else if (Y0 <= 0) {
        D0 = 1
    }
    if (Y1 >= 4) {
        D1 = -1
    } else if (Y1 <= 0) {
        D1 = 1
    }
    if (Y2 >= 4) {
        D2 = -1
    } else if (Y2 <= 0) {
        D2 = 1
    }
    if (Y3 >= 4) {
        D3 = -1
    } else if (Y3 <= 0) {
        D3 = 1
    }
    if (Y4 >= 4) {
        D4 = -1
    } else if (Y4 <= 0) {
        D4 = 1
    }
    basic.pause(200)
})
