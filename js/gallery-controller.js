'use strict'


function init() {
    renderMemes()
}

function renderMemes() {
    var strHtml = ''
    var hex= document.querySelector('.hexagon-container')
    for (var i = 0; i < gMemes.length; i++) {
        strHtml += `
            <div class="hexagon" onclick="onPickMeme(event, '${gMemes[i].id}')">
                <div class="hexagon-inside">
                    <div class="hexagon-img" style="background-image: url(${gMemes[i].url})" ></div>
                </div>
            </div>`
        }
        hex.innerHTML=strHtml
}

function onPickMeme(val, id){
    console.log(val, id)
    
}