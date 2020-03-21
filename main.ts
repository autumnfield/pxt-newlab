enum ShowNums {
    //% block="一"
    One = 1,
    //% block="二"
    Two = 2,
    //% block="三"
    Three = 3,
    //% block="四"
    Four = 4,
    //% block="五"
    Five = 5,
    //% block="六"
    Six = 6,
    //% block="七"
    Seven = 7,
    //% block="八"
    Eight = 8,
    //% block="九"
    Night = 9
}
//% color="#6d5ba5" icon="\uf110"
namespace nlnewlab {
    //% block
    export function printNumber(n: ShowNums) {
        switch (n) {
            case 1:
                basic.plotLeds(`
                    . . . . .
                    . . . . .
                    # # # # #
                    . . . . .
                    . . . . .
                    `)
                break;
            case 2:
                basic.plotLeds(`
                . . . . .
                . # # # .
                . . . . .
                # # # # #
                . . . . .
                `)
                break;
            case 3:
                basic.plotLeds(`
                . # # # .
                . . . . .
                . # # # .
                . . . . .
                # # # # #
                `)
                break;
            case 4:
                basic.plotLeds(`
                # # # # #
                # # . # #
                # . . . #
                # . . . #
                # # # # #
                `)
                break;
            case 5:
                basic.plotLeds(`
                # # # # #
                . # . . .
                . # # # #
                . # . . #
                # # # # #
                `)
                break;
            case 6:
                basic.plotLeds(`
                . . # . .
                # # # # #
                . . # . .
                . # . # .
                # . . . #
                `)
                break;
            case 7:
                basic.plotLeds(`
                . . # . .
                . . # . .
                # # # # #
                . . # . .
                . . # # #
                `)
                break;
            case 8:
                basic.plotLeds(`
                . . . . .
                . # . # .
                . # . # .
                # . . # .
                . . . . #
                `)
                break;
            case 9:
                basic.plotLeds(`
                . . # . .
                # # # # .
                . # . # .
                . # . # .
                # . . . #
                `)
                break;
        }
    }
    /**
     * TODO: 在此处描述您的函数
     * @param n 在此处描述参数, eg: "name"
     * @param s 在此处描述参数, eg: 12
     */
    //% block
    // export function sayName(n: string, s: number) {
    //     if (n) {
    //         basic.showString(n)
    //         basic.pause(5000)
    //         basic.showNumber(s)
    //     }
    // }
    /**
     * TODO: 在此处描述您的函数
     * @param n 在此处描述参数, eg: 1
     * @param s 在此处描述参数, eg: "name1"
     * @param e 在此处描述参数
     */
    //% block
    // export function fun1(n: number, s: string): void {
    //     // Add code here
    //     let num: number = n
    // }
    //% block
    // export function setPinValue(pin: DigitalPin, n: number) {
    //     pins.digitalWritePin(pin, n)
    // }
}