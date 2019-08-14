function digitPerkalianMinimum(angka) {
  var hasilkali = 0 
  var awal = []
  for(var i=0;i<angka;i++){

      for(var y=0;y<angka;y++){
        hasilkali = i*y
        if(hasilkali===angka){
          // string = String(i),String(y)
          awal.push(i,y)
        }
      }
    }
    var hasilbagi = awal.length/2
    var result = []
    for(var x=0;x<awal[hasilbagi-2];x++){
      result.push(awal[x])
    }
    var hasil = result.reverse()
    var length=[hasil[0],hasil[1]]
    return length.length
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2