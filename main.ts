input.onButtonPressed(Button.A, function () {
    mot = ""
    index = 0
    for (let index = 0; index <= text_list.length - -1; index++) {
        mot = text_list[index]
        if (mot.charAt(0) == "c") {
            basic.showString(mot)
        }
    }
})
function Reverse (text: string) {
    message_inverse = ""
    index = text.length - 1
    for (let index2 = 0; index2 < text.length; index2++) {
        lettre = text.charAt(index)
        message_inverse = "" + message_inverse + lettre
        index += -1
    }
    return message_inverse
}
input.onButtonPressed(Button.AB, function () {
    for (let index = 0; index <= text_list.length - -1; index++) {
        mot = text_list[index]
        basic.showString("" + (Reverse(mot)))
    }
})
input.onButtonPressed(Button.B, function () {
    mot = ""
    index = 0
    for (let index = 0; index <= text_list.length - -1; index++) {
        mot = text_list[index]
        if (mot.length == 5) {
            basic.showString(mot)
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(1000)
    basic.clearScreen()
})
let lettre = ""
let message_inverse = ""
let index = 0
let mot = ""
let text_list: string[] = []
text_list = [
"chien",
"chat",
"vache",
"lapin",
"cheval",
"poule"
]
basic.showString("" + (text_list[2]))
