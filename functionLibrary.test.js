const  { getMedian, getMean, getMode, elementFrequency } = require('./functionLibrary');
let arr;

describe("median function testing", function () {
   
    test("check on positive numbers array", function() {
       arr = [5, 2, 7];
       expect(getMedian(arr)).toEqual(5);
    }); 

    test("check on arbitrary numbers array", function() {
        arr = [3, -1, 5, 7];
        expect(getMedian(arr)).toEqual(4);
     });
}); 

describe("mean function testing", function () {
   
    test("check on integer numbers array", function() {
       arr = [2, 1, 4, 3];
       expect(getMean(arr)).toEqual(2.5);
    }); 

    test("check on arbitrary numbers array", function() {
        arr = [1, 2.7, 3.2, 4];
        expect(getMean(arr)).toEqual(2.725);
     });
}); 


describe("element counter function testing", function () {
   
    test("the function returns the correct object", function() {
       arr = [2, 1, 4, 3, 1];
       expect(elementFrequency(arr)).toEqual({"2": 1, "1": 2, "4": 1, "3": 1});
    }); 

    test("the function returns an empty object if an array is empty", function() {
        arr = [];
        expect(elementFrequency(arr)).toEqual({});
     });
});

describe("mode function testing", function () {
   
    test("check an array with one most repeated element", function() {
       arr = [2, 1, 4, 3, 1];
       expect(getMode(arr)).toEqual(1);
    }); 
});