exports.min = function min(array) {
    if (!array || !array.length) return 0;

    return array.sort((a, b) => { return a - b })[0]
}

exports.max = function max(array) {
    if (!array || !array.length) return 0;
    return array.sort((a, b) => { return b - a })[0]
}

exports.avg = function avg(array) {
    if (!array || !array.length) return 0;
    return array.reduce((acc, curr) => { return acc + curr }) / array.length
}