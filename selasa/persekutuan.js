function fpb(angka1, angka2) {
    var hasil1 = []
    var hasil2 = []

    for(var i=0;i<angka1;i++) {
        if(angka1%i===0){
            hasil1.push(i)
        }
        if(angka2%i===0){
            hasil2.push(i)
        }
    }

    var newarr =[]

    for( var a=0;a<hasil1.length;a++){
        for(var b=0;b<hasil2.length;b++){
            if(hasil1[a]===hasil2[b]){
                newarr.push(hasil2[b])
            }
        }
    }
    // console.log(newarr)
    // console.log(hasil1)
    return newarr.reverse()[0]
  }
  
  // TEST CASES
  console.log(fpb(12, 16)); // 4
  console.log(fpb(50, 40)); // 10
  console.log(fpb(22, 99)); // 11
  console.log(fpb(24, 36)); // 12
  console.log(fpb(17, 23)); // 1
  console.log(fpb(50,38)); //2
  