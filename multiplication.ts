let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
for (let value of array){
        for (let val2 of array){
        console.table(value + " X " + val2 + " = " + (val2 * value));
    }
}