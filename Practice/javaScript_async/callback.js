var words = ['spray','limit','elite','exuberant','destruction','present'];
function callback(element){
    console.log(element);
    if(element.length > 6){
        return true;
    }else{
        return false
    }
}
newWords = words.filter(callback);
console.log(newWords);

var words = ['spray','limit','elite','exuberant','destruction','present'];
// newWords = words.filter(element=>element.length > 6);
function myfilter(origin, callback){
    var result = [];
    for(var i = 0; i < origin.length; i++){
        var current = origin[i];
        if(callback(current)){
            result.push(current);
        } 
    }
    return result;
}
newWords = myfilter(element=>element.length > 6);
console.log(newWords);
