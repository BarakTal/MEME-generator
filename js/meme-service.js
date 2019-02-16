// ******* SERVICE ********//
'use strict'
var gCurrTextLine = 'line-one'
var gCtx
var gImg
var gCanvas = document.querySelector('.my-canvas')
var gTexts


function createTexts() {
    var textArr = [
        {
            line: 'line-one',
            font: 'Impact',
            style: 'normal',
            size: 50,
            x: 50,
            y: 50,
            color: 'black',
            text: '',
        },
        {
            line: 'line-two',
            font: 'Impact',
            style: 'normal',
            size: 50,
            x: 200,
            y: 100,
            color: 'black',
            text: ''
        },
        {
            line: 'line-three',
            font: 'Impact',
            style: 'normal',
            size: 50,
            x: 50,
            y: 150,
            color: 'black',
            text: ''
        },
    ]
    return textArr
}

function setTextHeight() {
    gTexts.forEach(element => {
        if (element.line === 'line-one') element.y = gImg.naturalHeight / 10
        if (element.line === 'line-two') element.y = element.y = gImg.naturalHeight / 2
        if (element.line === 'line-three') element.y = element.y = gImg.naturalHeight / 3

    });
}

function findTextIdx() {
    console.log('checking id')

    var index = gTexts.findIndex(function (text) {
        return (text.line === gCurrTextLine)
    })
    return index
}



function changeColor(val, index) {
    gTexts[index].color = val
}

function fontSizeChange(val, index) {
    gTexts[index].size += val
}

function alignText(val) {
    var index = findTextIdx()
    var curr = gTexts[index]
    // debugger
    if (val === "up"){
        curr.y += -5
        console.log('h')
    } 
    if (val === "down") curr.y += 5
    if (val === 'left') curr.x = 50
    if (val === 'right') curr.x = gImg.naturalWidth / 2
    if (val === 5 || val === -5) curr.x += val

}

function textDecoration(val) {
    var index = findTextIdx()
    var curr = gTexts[index]
    if (curr.style === val) curr.style = 'normal'
    else {
        curr.style = val
    }
}


function changeFont(val) {
    var index = findTextIdx()
    var curr = gTexts[index]
    curr.font = val
}

function deleteLine() {
    var index = findTextIdx()
    gTexts[index].text = ''
}
