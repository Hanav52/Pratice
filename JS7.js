function solution(array, height) {
    var answer = array.filter((me) => me > height);
    return answer.length;
}
const array = [149, 180, 192, 170]
solution(array, 167);