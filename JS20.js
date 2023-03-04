function solution(age) {
    return Array.from(age.toString().map(v => char[v]).join(''));  
}