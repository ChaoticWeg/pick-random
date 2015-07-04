var pick = function (arr) {
    if (!Array.isArray(arr)) return;

    var randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
};