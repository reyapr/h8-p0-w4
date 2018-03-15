function cariModus(arr) {
  var result = 0
  var maxNum = 0
  for(var i=0;i<arr.length;i++){
    var num = 0
    for(var j=1+i;j<arr.length;j++){
      if(arr[i]==arr[j]){
        num++
      }
    }
    if(num==arr.length-1){
    return -1
    }
    if(num>maxNum){
      maxNum = num
      result = arr[i]
    }
  }
  if(result==0){
    return -1
  }
  return result
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 1, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1
console.log(cariModus([7, 7, 7, 7, 6,1,6,1,6,1,6,1,6,1,6,1,2,3])); // 6