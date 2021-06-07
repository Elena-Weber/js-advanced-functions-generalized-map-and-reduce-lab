function map(arr, func) {
    const newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const each = arr[i];
        newArr.push(func(each));
    }
    return newArr;
}
function reduce(arr, func, startingValue=0) {
    let total;
    if (startingValue) {
        total = startingValue;
        for (let i = 0; i < arr.length; i++) {
        total = func(arr[i], total);
    }
    return total;
    } else {
        total = arr[0];
        for (let i = 1; i < arr.length; i++) {
        total = func(arr[i], total);
    }
    return total;
    }
}