// Napište funkci, která obrátí číslo, které dostane zadané parametrem.
// Vstup: 3245, Výstup: 5423

function reverseNumber (number) {
    number += "";
    return number.split("").reverse().join("")
}

console.log(reverseNumber(3245))