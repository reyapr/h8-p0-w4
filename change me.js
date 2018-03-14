function changeMe(arr) {
  var data = {}
  var num = 1
    for(var i=0;i<arr.length;i++){
      data.firstName = arr[i][0];
      data.lastName = arr[i][1];
      data.gender = arr[i][2];
      data.age = 2018-arr[i][3];
      if(arr[i][3] == undefined || arr[i][3] > 2018){
        data.age = 'Invalid Birth Year'
      }
      console.log(num++ + '. ' + arr[i][0] + ' ' +  arr[i][1])
      console.log(data)
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 
//1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""