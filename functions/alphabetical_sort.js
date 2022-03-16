// Napište funkci, která vrátí předaný řetězec s písmeny v abecedním pořadí.
// Vstup: "webmaster", Výstup: "abeemrstw"

function alphabet (string) {
    return string.split('').sort().join('');
}

console.log(alphabet("webmaster"))