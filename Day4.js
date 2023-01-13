function solution(n, k) {
    if(n>= 10) {
        k -= (n/10);
    }
    return 12000 * n + 200 * k;
}