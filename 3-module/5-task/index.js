function getMinMax(str) {
    let newArray = str.split(' ');
    let numberArray = newArray.filter(item => isFinite(item));

    let result = {
        min: Math.min.apply(null, numberArray),
        max: Math.max.apply(null, numberArray),
    };
    return result;

}
