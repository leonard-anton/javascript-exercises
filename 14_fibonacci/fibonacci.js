const fibonacci = function (n) {

    if (n < 0)
        return "OOPS";

    if (n == 0)
        return 0;

    if (n < 3)
        return 1;

    let f1 = 1, f2 = 1, f3, count = 2;

    do {
        f3 = f1 + f2;
        f1 = f2;
        f2 = f3;
        count++;
    } while (count < n);

    return f3;
};

// Do not edit below this line
module.exports = fibonacci;
