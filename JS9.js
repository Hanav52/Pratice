function solution(n) {
    if(n / 7 == ~~(n / 7)) {
        return n / 7;
    }
    return ~~(n / 7) + 1;
}
function solution1(n) {
    return Math.ceil(n / 7);
}
solution(7)