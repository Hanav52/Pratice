function solution(my_string, letter) {
    let reg = new RexExp(letter, 'g')
    return my_string.replace(reg,'')
}