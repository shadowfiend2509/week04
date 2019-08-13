function digitPerkalianMinimum(angka) {
  var hasil = []
  for(var i=0;i<angka ; i++){
    if(angka%i===0){
      hasil.push(i)
    }
  }
  var hasil2 = []
  // var test = []
  for(var y=0;y<hasil.length;y++){
    var test =[]
    for(var x=0;x<hasil.length;x++){
      if(hasil[y]*hasil[x] === angka && i!==y ){
        test.push(hasil[y],hasil[x])
      }
    }
    hasil2.push(test)
  }
  hasil2.shift()
  // console.log(hasil);
  console.log(hasil2);

  
  // return test
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  // console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  // console.log(digitPerkalianMinimum(179)); // 4
  // console.log(digitPerkalianMinimum(1)); // 2