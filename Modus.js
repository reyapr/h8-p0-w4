function cariModus(arr) {
  for(var i=0;i<arr.length;i++){
    var modus = false
    var num = []
    for(var j=1+i;j<arr.length;j++){
      if(arr[i]==arr[j]){
        modus = true
        num.push(arr[i])
      }
    }
    if(num.length==arr.length-1){
      return -1
    }
    if(modus==true){
      return arr[i]
    }
  }
  return -1
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1