function solution(array, n) {
    let count = 0;
    for (i of array) {
        if(i === n) {
            count += 1
        }
    }
    return count;
}
function solution1(array, n) {
    return array.filter(a => a === n),length;
}
const array = [0, 2, 1, 3, 4];
solution(array, 1)