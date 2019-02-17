'use strict'

var gMemes = [
    {
        id: makeId(),
        url: 'img/patrick.jpg'
    },
    {
        id: makeId(),
        url: 'img/2.jpg'
    },
    {
        id: makeId(),
        url: 'img/3.jpg'
    },
    {
        id: makeId(),
        url: 'img/4.jpg'
    },
    {
        id: makeId(),
        url: 'img/5.jpg'
    },
    {
        id: makeId(),
        url: 'img/img11.jpg'
    },
    {
        id: makeId(),
        url: 'img/X-Everywhere.jpg'
    },
    {
        id: makeId(),
        url: 'img/drevil.jpg'
    }
]

function makeId() {
    var length = 6;
    var txt = '';
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

    for (var i = 0; i < length; i++) {
        txt += possible.charAt(Math.floor(Math.random() * possible.length));
    }

    return txt;
}

function findImgById(id){
    
        var index = gMemes.findIndex(function (meme) {
            return (meme.id === id)
        })
        return index
}