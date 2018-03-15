function totalDigitRekursif(angka) {
if(angka<=0){
  return 0
}
else if(angka<10){
  return Math.floor(angka/1)
}
else if(angka<100){
  return Math.floor(angka/10) + totalDigitRekursif(angka%10)
}
else if(angka<1000){
  return Math.floor(angka/100) + totalDigitRekursif(angka%100)
}
else if(angka<10000){
  return Math.floor(angka/1000) + totalDigitRekursif(angka%1000)
}
else if(angka<100000){
  return Math.floor(angka/10000) + totalDigitRekursif(angka%10000)
}
 
}
//512/100 = 5 + 512%100 = 12 + 12%10 + 2
// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5