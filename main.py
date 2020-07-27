function faireQuelqueChose (num: number) {
	
}
let dir = 1
let listeX: number = [0, 1, 2, 3, 4]
let listeY: number = [0, 1, 2, 3, 4]
basic.forever(function () {
    led.unplot(listeX, listeY)
    dir += 1
    led.plot(listeX, listeY)
    if (0 >= 4) {
        dir = -1
    } else if (0 <= 0) {
        dir = 1
    }
    basic.pause(200)
})
