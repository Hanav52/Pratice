function solution(n) {
    console.log(Array(n).fill().map((_, i) => i + 1).filter(a => a % 2 === 0).reduce((b,c) => b+c))
    return Array(n).fill().map((_, i) => i + 1).filter(a => a % 2 === 0).reduce((b,c) => b+c);
}
solution(10)