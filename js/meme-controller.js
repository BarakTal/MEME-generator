//  ***** CONTROLLER****///
'use strict'



function init() {
    
    gCtx = gCanvas.getContext('2d')
    gTexts = createTexts()
    console.log(gCanvas)
    renderCanvas(gCanvas)
}



function renderCanvas() {
    gImg = new Image();
    gImg.onload = function () {
        setTextHeight()
        gCanvas.width = gImg.naturalWidth
        gCanvas.height = gImg.naturalHeight
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
        renderText()
    };
    gImg.src = 'img/2.jpg';
}

function renderText() {
    for (var i = 0; i < gTexts.length; i++) {
var currText=gTexts[i]
        gCtx.font =`${currText.style} ${currText.size}px ${currText.font}`
        gCtx.fillStyle = currText.color;
        gCtx.strokeStyle = 'white';
        gCtx.lineWidth = 2;
        gCtx.strokeText(currText.text, currText.x, currText.y)
        gCtx.fillText(currText.text, currText.x, currText.y)

    }
}

function onFontSizeChange(val) {
    var index = findTextIdx()
    fontSizeChange(val,index)
    renderCanvas()
}

function onWriteOnCanvas(txt) {
    //getting the text input, finding the index of the text array, puting the text inside the obj.
    var index = findTextIdx()
    gTexts[index].text = txt
    renderCanvas()
}

function onColorChange(val) {
    var index = findTextIdx()
changeColor(val,index)
    renderCanvas()
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function onChangeCurrLine(val) {
    gCurrTextLine = val
    var index = findTextIdx()
    document.querySelector('#text-input').value=gTexts[index].text
    document.querySelector('#font-color').value=gTexts[index].color
}

function onAlignText(val){
    alignText(val)
    renderCanvas()
}

function onTextDecoration(val){
textDecoration(val)
renderCanvas()
}

function onChangeFont(val){
    changeFont(val)
    renderCanvas()
}
function onDeleteLine(){
    deleteLine()
    renderCanvas()
}