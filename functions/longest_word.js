// Napište funkci, která jako parametr přijme řetězec a najde nejdelší slovo v řetězci.
// Vstup: "Web Development Tutorial", Výstup: "Development"

//NEVIM :( 

function longestArray (array) {
    let max = array[0].length;
    let separation = array[0].split(" ");
        for (let i = 0; i < array.length; i++) {
            const individually = array[i].length;
            if (individually > max) {
                separation = array[i];
                max = individually;
            }
    } 
    return separation
}


console.log (longestArray(["Web Development Tutorial"]))
