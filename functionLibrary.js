
function getMedian(arr) {
    // sort and get the middle item 
    const mid = Math.floor(arr.length / 2);
    nums = [...arr].sort((a, b) => a - b);
    return (arr.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2);
}

function getMean(arr) {
    // get the avarage = total / array length
    if (arr.length === 0) return 0; 
    const mean = arr.reduce((a, b) => a + b) / arr.length;
    return mean;
}

function elementFrequency(arr) {
    // return the object with element frequancy
    const counts = {};
    arr.forEach(el => {
        if (counts[el] === undefined) {
            counts[el] = 0
        }
        counts[el] += 1;
    });
    return counts;
}

function getMode(arr) {
    // get the first most frequent element
    let max;
    let count = 0;
    const frequency = elementFrequency(arr);
    for (let key in frequency)
        if (frequency[key] > count) {
            max = key;
            count = frequency[key];
        }
        return Number(max);
}

function validateQuery(str) {
    // validate and convert query to an array 
    const arr = [];
    // query converted into string array
    try {
        const strArr = str.split(',');
        for (let i = 0; i < strArr.length; i++) {
            console.log(strArr[i]);
            let num = Number(strArr[i]);
            if (Number.isNaN(num)) {
                return new Error(`The '${strArr[i]}' is not a number.`)
            }
            // add to a result array a valid number
            arr.push(num);
        }
        return arr;        
    } catch (e) {
        console.error(e.name + ':' + e.message)
    }
}

module.exports = { 
    getMedian,
    getMean,
    getMode,
    elementFrequency, 
    validateQuery
}