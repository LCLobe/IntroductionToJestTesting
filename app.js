// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
//module.exports = { sum };

//----

const ONE_EURO_IS = {
    JPY: 127.9,
    USD: 1.2,
    GBP: 0.8
}

const fromEuroToDollar = (quantityInEuro) => {
    const quantityInDollar = (quantityInEuro*ONE_EURO_IS.USD).toFixed(4);
    return Number(quantityInDollar);
}

const fromDollarToYen = (quantityInDollars) => {
    //const quantityInEuro = (quantityInDollars/ONE_EURO_IS.USD).toFixed(4);
    //const quantityInYen = (quantityInEuro*ONE_EURO_IS.JPY).toFixed(4); //These two give rounding error.
    const quantityInYen = ((quantityInDollars/ONE_EURO_IS.USD)*ONE_EURO_IS.JPY).toFixed(4);
    return Number(quantityInYen);
}

const fromYenToEuro = (quantityInYen) =>{
    const quantityInEuro = (quantityInYen/ONE_EURO_IS.JPY).toFixed(4);
    return Number(quantityInEuro);
}

const fromYenToPound =  (quantityInYen)=>{
    const quantityInEuro = fromYenToEuro(quantityInYen);
    const quantityInPound = (quantityInEuro*ONE_EURO_IS.GBP).toFixed(4);
    return Number(quantityInPound);
}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToEuro, fromYenToPound };

//console.log (fromYenToPound(1000));