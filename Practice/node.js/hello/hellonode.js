const helloMessage = 'Hello';

function hello(msg){
    return helloMessage + msg;
}

console.log(hello('Node'));

module.exports = {
    hi: hello,
    msg: helloMessage
}