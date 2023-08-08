console.log('m3는 인자값을 가지는 함수를 exports');
module.exports = function(score){
  return {
    sum: function(){
      return score.kor + score.eng;
    },
    avg: function(){
      return this.sum() / 2;
    }
  };
};