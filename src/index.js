
exports.min = function min (array) {
    if (array) {
        array = array.sort((a, b) => {
            return a - b
        });
        return (array[0] = array[0] === undefined ? 0 : array[0]);
    }
    return 0
}

exports.max = function max (array) {
    if (array) {
        array = array.sort((a, b) => {
            return a - b
        });
        return (array[array.length - 1] = array[array.length - 1] === undefined ? 0 : array[array.length - 1]);
    }
    return 0
}

exports.avg = function avg (array) {
    if (array) {
        let arrayLength = array.length > 0 ? array.length : 1;
        return array.reduce((x, y) => x + y, 0) / arrayLength;
    }
    return 0
}
