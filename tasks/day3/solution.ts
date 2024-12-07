// @ts-nocheck
import {day3Data} from "./data";

const data = day3Data;
const freeArr = [data.split(/don't|do/)[0]];
const mulPattern = /mul\((\d+),\s*(\d+)\)/g;
const patternDo = /do\(\)([^]*?)(?:don't\(\)|$)/g;

const doArr = [];
let match;

while ((match = patternDo.exec(data)) !== null) {
    doArr.push(match[1]);
}

const getAllSum = (stringData) => {
    let result= 0;

    const match = stringData.match(mulPattern);
    match?.forEach(element=> {
        const numbs = element.replace('mul(', '').replace(')', '').split(',');
        result += (Number(numbs[0])*Number(numbs[1]))
    });

    return result;
};

const mergedArray = [...freeArr, ...doArr];

let generalSum = 0;
mergedArray.forEach(element=>{
    generalSum += getAllSum(element);
});

console.log({generalSum})