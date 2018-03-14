function digitPerkalianMinimum(angka) {
  var result = []
  for(var i=1;i<=angka;i++){
    var digit  = ''
    var count = angka
    count = angka/i
    pembagi = Math.floor(count)
    if(count%pembagi == 0){
      digit = count.toString() + i.toString()
      result.push(digit)
    }
  }
  result.sort()
  return result[result.length-1].length
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2