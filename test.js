// const { default: expect } = require('expect');
// const { test } = require('picomatch');
const {sum, fromEuroToDollar, fromDollarToYen, fromYenToEuro, fromYenToPound } = require('./app.js')

test(`adds 14 + 9 to equal 23`, ()=>{
    let total = sum(14,9);

    expect(sum(14,9)).toBe(23);

});
describe(`Set of tests fromEuroToDollar`, ()=>{
    test(`fromEuroToDollar must be a function`, ()=>{
        expect(typeof(fromEuroToDollar)).toBe("function");
    });   
    test(`fromEuroToDollar must return a number`, ()=>{
        expect(typeof(fromEuroToDollar(3.5))).toBe("number");
    });  
    test(`One euro should be 1.206 dollars`, ()=>{
        // const dollars = fromEuroToDollar(3.5);
        // const expected = 3.5*1.2;
        expect(fromEuroToDollar(3.5)).toBe(4.2);
    });
});
describe(`Set of tests fromDollarToYen`, ()=>{
    test(`fromDollarToYen must be a function`, ()=>{
        expect(typeof(fromDollarToYen)).toBe("function");
    });   
    test(`fromDollarToYen must return a number`, ()=>{
        expect(typeof(fromDollarToYen(3.5))).toBe("number");
    });  
    test(`One dollar should be 106.5833 yen`, ()=>{
        // const dollars = fromDollarToYen(1);
        // const expected = 1/1.2*127.9;
        expect(fromDollarToYen(1)).toBe(106.5833);
    });
});
describe(`Set of tests fromYenToPound`, ()=>{
    test(`fromYenToPound must be a function`, ()=>{
        expect(typeof(fromYenToPound)).toBe("function");
    });   
    test(`fromYenToPound must return a number`, ()=>{
        expect(typeof(fromYenToPound(3.5))).toBe("number");
    });  
    test(`319.75 yen should be 2 pounds`, ()=>{
        // const dollars = fromYenToPound(1);
        // const expected = 1/1.2*127.9;
        expect(fromYenToPound(319.75)).toBe(2);
    });
});

