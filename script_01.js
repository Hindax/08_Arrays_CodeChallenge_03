
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

// function output( outputStr1 ) { console.log( outputStr1 ); }
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