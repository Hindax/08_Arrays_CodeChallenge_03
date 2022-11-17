
/*** Mini-Challenge  */
// Satzbau + Punktuation

// Vereinbarung:
// "S" (sentence) --> "."  Ich bin Max.
// "Q" (question) --> "?"  Bist du Max?
// "E" (exclamation) --> "!"  Ich bin!

// Parameter --> funktion getSentence([ ...], "Q"){ ...}


/*** Funktion mit Array als Parameter */
// mögliche Tests:
// output(getSentence(["Ich","bin","Max"],"S"));
// output(getSentence(["Bist","du","Max"],"Q"));
// output(getSentence(["Ich","bin"],"E"));
// output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,"," habbe","Sie","die"],"Q"));


output(getSentence( [ "Ich","bin","Max"],"S"));
output(getSentence( [ "Bist","du","Max"],"Q"));
output(getSentence( [ "Ich","bin"],"E"));
output(getSentence( [ "Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));

function output( outputStr1 ) { console.log( outputStr1 ); }
    // get the strings
function getSentence( iArr, iSng ) {
    let iArrStr = "";
    let iSngStr = ( iSng == "Q" ) ? "?" : ( iSng == "E" ) ? "!" : ".";

    for ( let i = 0; i < iArr.length; i ++ ) {
        ( i < iArr.length - 1 ) ? iArrStr += ( iArr[ i ] + " " ) : iArrStr += iArr[ i ];
    }
    return iArrStr + iSngStr;
}

// output(getSentence)
// // function getSentence (givenSentence) {
//     let givenSentence
//     var index = items.indexof("S");

//     if (~index) {
//         items[index] = ".";

//     var index = items.indexOf("Q");

//     if (~index) {
//         items[index] = "?";

//     var index = items.indexOf("E");

//     if (~index) {
//         items[index] = "!";
    
// }

/*** Funktion mit Array als Parameter */
// mögliche Tests:
output(getSentence(["Ich","bin","Max"],"S"));
output(getSentence(["Bist","du","Max"],"Q"));
output(getSentence(["Ich","bin"],"E"));
output(getSentence(["Ich","hätt","gern","die","Platt","von","dene","zwei","diwodaso","Spass","mache,","habbe","Sie","die"],"Q"));
function getSentence(arr,op) {

    const GAP = " ";
    let punct = getPunct(op);
    let str = "";

    for (let i = 0; i < arr.length; i++) {
        if ( i != arr.length-1 ) {
            str += arr[i] + GAP; 
        } else {
            str += arr[i] + punct; 
        }
    }

    return str;
}

// Modul Punktuation
// output(getPunct("S"));
// output(getPunct("Q"));
// output(getPunct("E"));
// output(getPunct("#!2"));
function getPunct(op){
    switch (op) {
        case "S":
            return ".";
        case "Q":
            return "?";
        case "E":
            return "!";
        default:
            return "#Error";  // TBA
    }
}

// Modul: Ausgabe in Konsole : Test
// output("hi"); 
function output(inputStr) {
    console.log(inputStr);
}