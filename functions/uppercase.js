// Napište funkci, která přijme jako parametr řetězec a převede první písmeno každého slova řetězce na velká písmena.
// Vstup: "the quick brown fox", Výstup: "The Quick Brown Fox"

function upperFirst (string) {
    
    const arr = string.split(" ");

    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    
    } return arr.join(" ")
}
console.log(upperFirst("the quick brown fox"))