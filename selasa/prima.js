function angkaPrima(angka) {


    for(var i=2;i<angka;i++){
        if(angka % i == 0 ){
            return false
        }
    }
    return true


  }
  
  // TEST CASES
  console.log(angkaPrima(3)); // true
  console.log(angkaPrima(7)); // true
  console.log(angkaPrima(6)); // false
  console.log(angkaPrima(23)); // true
  console.log(angkaPrima(33)); // false


  /*
  bilangan prima jika 
  angka hanya bisa dibagi angka 1 dan angka itu sendiri
  cek satu persatu
  */