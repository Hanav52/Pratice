function solution(order) {
    let value = order.toString().matchAll(/[369]/g ?? [])
    return value.length;
}
// ?? 연산자 : 앞에 값이 null 또는 undefined이면 뒤에 값을 반환한다.