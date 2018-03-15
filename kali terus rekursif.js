function kaliTerusRekursif(angka) {
  if(angka<10){
    return angka
  }
  var count = angka
  var result = 1
  while(count>0){
    var digit = count%10;
    result *= digit;
    var count = Math.floor(count/10);
  }
  if(result>=10){
    return kaliTerusRekursif(result)
  }
  else{
    return result
  }
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6