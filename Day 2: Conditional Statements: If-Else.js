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
function getGrade(score) {
    let g,f=parseInt(score);
     if(25<f&&f<=30){g='A'}
    else if(20<f&&f<=25){g='B'}
    else if(15<f&&f<=20){g='C'}
    else if(10<f&&f<=15){g='D'}
    else if(5<f&&f<=10){g='E'}
    else {g='F'}
    
    return g;
}

function main() {
    const score = +(readLine());
    
    console.log(getGrade(score));
}
