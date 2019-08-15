function digitPerkalianMinimum(angka) {
  
  var hasil=''
  var angka1 = []

  // for(var i=1;i<=angka;i++){
  //   if(angka%i===0){
  //     hasil.push(i)
  //   }
  // }
  // for(var i=0;i<=angka;i++){

    var test = ''
    var panjang = Number.MAX_SAFE_INTEGER // untuk input maksimal number
    for(var j=1;j<=Math.round(Math.sqrt(angka));j++){
      if(angka%j===0){
        hasil = String(angka/j)+String(j)
        if(hasil.length < panjang){
          panjang = hasil.length
        }
      }
    }
    return panjang
  }
  
  // TEST CASES
  console.log(digitPerkalianMinimum(24)); // 2
  console.log(digitPerkalianMinimum(90)); // 3
  console.log(digitPerkalianMinimum(20)); // 2
  console.log(digitPerkalianMinimum(179)); // 4
  console.log(digitPerkalianMinimum(1)); // 2
  console.log(digitPerkalianMinimum(300));
  

  