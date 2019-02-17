//  ***** CONTROLLER****///
'use strict'



function init() {
    var imgSrc = getImageFromStorage()

    gCtx = gCanvas.getContext('2d')
    console.log(gCanvas)
    setCanvas(imgSrc)
    gTexts = createTexts()
    renderCanvas(gCanvas)
}

// function resizeCanvas(canvas) {
    //     var elCanvasContainer = document.querySelector('.canvas-container')
    //     canvas.width = elCanvasContainer.offsetWidth
    //     canvas.height = elCanvasContainer.offsetHeight
    // }
    
    function setCanvas(imgSrc) {
    var bodyWidth = document.querySelector('body').clientWidth
    if (bodyWidth > 750) renderDesktopCanvas(imgSrc)
    else renderMobileCanvas(imgSrc)
}

function renderCanvas() {
    gCtx.clearRect(0, 0, gCanvas.width, gCanvas.height)
    gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
    renderText()
}

function renderMobileCanvas(imgSrc) {
    gImg = new Image();
    gImg.onload = function () {
        // setTextHeight()
        var elCanvasContainer = document.querySelector('.canvas-container')
        var aspectRatio = gImg.width / gImg.height
        gCanvas.width = elCanvasContainer.clientHeight
        gCanvas.height = gCanvas.width * aspectRatio
        elCanvasContainer.height = gCanvas.height;
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
        renderText()
    };
    gImg.src = imgSrc;
    
}


function renderDesktopCanvas(imgSrc) {
    gImg = new Image();
    gImg.onload = function () {
        // setTextHeight()
        var elCanvasContainer = document.querySelector('.canvas-container')
        var aspectRatio = gImg.width / gImg.height
        gCanvas.height = elCanvasContainer.clientHeight
        gCanvas.width = gCanvas.height * aspectRatio
        elCanvasContainer.height = gCanvas.height;
        gCtx.drawImage(gImg, 0, 0, gCanvas.width, gCanvas.height);
        renderText()
    };
    gImg.src = imgSrc;
}


function renderText() {
    for (var i = 0; i < gTexts.length; i++) {
        var currText = gTexts[i]
        gCtx.font = `${currText.style} ${currText.size}px ${currText.font}`
        gCtx.fillStyle = currText.color;
        gCtx.strokeStyle = 'white';
        gCtx.lineWidth = 2;
        gCtx.strokeText(currText.text, currText.x, currText.y)
        gCtx.fillText(currText.text, currText.x, currText.y)

    }
}

function onFontSizeChange(val) {
    var index = findTextIdx()
    fontSizeChange(val, index)
    renderCanvas()
}

function onWriteOnCanvas(txt) {
    //getting the text input, finding the index of the text array, puting the text inside the obj.
    var index = findTextIdx()
    gTexts[index].text = txt
    gTexts[index].width = gCtx.measureText(txt).width
    renderCanvas()
}

function onColorChange(val) {
    var index = findTextIdx()
    changeColor(val, index)
    renderCanvas()
}

function downloadImg(elLink) {
    var imgContent = gCanvas.toDataURL('image/jpeg');
    elLink.href = imgContent
}

function onChangeCurrLine(val) {
    gCurrTextLine = val
    var index = findTextIdx()
    document.querySelector('#text-input').value = gTexts[index].text
    document.querySelector('#font-color').value = gTexts[index].color
}

function onAlignText(val) {
    alignText(val)
    renderCanvas()
}

function onTextDecoration(val) {
    textDecoration(val)
    renderCanvas()
}

function onChangeFont(val) {
    changeFont(val)
    renderCanvas()
}
function onDeleteLine() {
    document.querySelector('#text-input').value = ''
    deleteLine()
    renderCanvas()
}
function textInputToDefault(idx) {

}

function onSendEmail() {
    var name = $('#user-name').val()
    var subject = $('#user-subject').val()
    var msg = $('#contact-form').val()

    var url = `https://mail.google.com/mail/?view=cm&fs=1&to=tal63566@gmail.com&su=${subject}-${name}&body=${msg}`
    window.open(url, '_blank')
}

function clickedText(idx) {
    console.log(idx)
    document.querySelector('#line-selector').value = gTexts[idx].line
    document.querySelector('#text-input').value = gTexts[idx].text
    document.querySelector('#font-color').value = gTexts[idx].color
    gCurrTextLine = gTexts[idx].line
    gIsDragActive = true

}

function onActiveDrag(ev) {
    gIsDragActive = true
}


function onMouseReleased(ev) {
    gIsDragActive = false
}

function onMouseMove(ev) {
    if (!gIsDragActive) return;
    moveText(ev)
    renderCanvas()
}