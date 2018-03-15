function hitungHuruf(kata) {
  var splitKata = kata.split(' ');
  var maxNum = 0;
  var result = '';
  for(var i=0;i<splitKata.length;i++){
    var count = 0;
    for(var j=0;j<splitKata[i].length;j++){
      for(var k=j+1;k<splitKata[i].length;k++){
        if(splitKata[i][j]==splitKata[i][k]){
             count++
         }
      }
    }
    if(count>maxNum){
      maxNum=count
      result = splitKata[i]
    }
  }
  return result
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau