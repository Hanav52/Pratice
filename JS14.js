function solution(s1, s2) {


// 교집합(Intersection)
console.log(s1.filter(x => s2.includes(x)).length);
}
const arr1 = ['1','2','3','4','5'];
const arr2 = ['1','2'];
solution(arr1, arr2)