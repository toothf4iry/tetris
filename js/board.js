/**
 * Created with IntelliJ IDEA.
 * User: severus
 * Date: 2014.05.08.
 * Time: 16:06
 * To change this template use File | Settings | File Templates.
 */

function Boardz (z, color) {
    this.color = color;
    this.colorBackground =   function (color) {
        var backgroundColorJS = document.getElementById("boarddiv");
        backgroundColorJS.style.backgroundColor = color
    };
    this.createBoard = function(size) {
        var cell = []
        for (var i = 1; i < size; i++) {
            cell [i] = '#'  ;
            if (i % 10 ===0 )
                cell [i]= "<br>"
        }

        var fill = document.getElementById("boarddiv");
        fill.innerHTML = cell
    }
}

var board = new Boardz(120,"red");