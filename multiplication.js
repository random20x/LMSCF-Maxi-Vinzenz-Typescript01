var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var value = array_1[_i];
    for (var _a = 0, array_2 = array; _a < array_2.length; _a++) {
        var val2 = array_2[_a];
        console.table(value + " X " + val2 + " = " + (val2 * value));
    }
}
