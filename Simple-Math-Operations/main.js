function addNumber(a, b){
    return a + b;
}
function subNumber(a, b){
    return a - b;
}
function mulNumber(a, b){
    return a * b;
}
function divNumber(a, b){
    if(b < 0){
        throw new Error('Dividing by negative number is not allowed');
    }
    return a / b;
}