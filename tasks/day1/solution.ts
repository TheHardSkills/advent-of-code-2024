//import  {rawDataDraft} from './draftData';
import { rawData } from './data';

const inputData = rawData.trim().split('\n');
const firstColumnValues = inputData.map(line => parseInt(line.split(/\s+/)[0], 10)).sort();
const secondColumnValues = inputData.map(line => parseInt(line.split(/\s+/)[1], 10)).sort();

const firstTaskRes = firstColumnValues.map((value: number, index: number) =>  (secondColumnValues[index] > value ? secondColumnValues[index] - value : value - secondColumnValues[index])
).reduce((acc: number, value: number) => acc + value, 0);

console.log({firstTaskRes});

const secondTaskRes = firstColumnValues.map(element => {
    const repetitions = secondColumnValues.reduce((count, currentElement)=>{ return element === currentElement ? count + 1 : count}, 0);
    return element * repetitions;
}).reduce((acc, value) => acc + value, 0);

console.log({secondTaskRes});


