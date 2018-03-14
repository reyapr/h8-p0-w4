function hitungHuruf(kata) {
  var splitKata = kata.split(' ')
  var pembanding = []
  for(var i=0;i<splitKata.length;i++){
    var arr = '';
    var huruf = ''
    for(var j=0;j<splitKata[i].length;j++){
      if(arr.indexOf(splitKata[i][j])==-1){
        arr += splitKata[i][j]
      }
      else{
        huruf += splitKata[i][j]
      }
    }
    pembanding.push(huruf)
  }
  for(var k=0;k<pembanding.length;k++){
    var value = false
    for(var l=1;l<pembanding.length;l++){
      if(pembanding[k].length<pembanding[l].length){
        value = true
      }
    }
      if(value==false){
      return splitKata[k]
    }
  }
}

// TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau