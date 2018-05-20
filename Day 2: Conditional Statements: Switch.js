'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}
function getLetter(s) {
    
let a="aeiou";
    if(a.search(s[0])!=-1)return 'A';
     if("bcdfg".search(s[0])!=-1)return 'B';
     if("hjklm".search(s[0])!=-1)return 'C';
     if("npqrstvwxyz".search(s[0])!=-1)return 'D';
}

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}
