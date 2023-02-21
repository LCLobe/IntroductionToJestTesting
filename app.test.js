const {sum, fromEuroToDollar, fromDollarToYen, fromYenToEuro, fromYenToPound } = require('./app.js')

describe(`app.js`, ()=>{
    it (`should be a function`, ()=>{
        //Arrange
        const type = typeof(fromDollarToYen);

        //Act
        const result = type === "function";

        //Assert
        expect(result).toBe(true);
    })

    it('should return a quantity', ()=>{
        const result = fromDollarToYen(2);

        expect (result).toBeDefined();

    })

    it(`should return a number`, ()=>{
        const result = fromDollarToYen();
        const isNumber = typeof(result) === "number";

        expect(isNumber).toBe(true);
    })
});