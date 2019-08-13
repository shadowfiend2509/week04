function checkAB(num) {
    var jarak = 0
    var angkab = []
    var angkaa = []

    for(var i=0;i<num.length;i++){
        for(var y=0;y<num.length;y++){
            if(num[i]==='a' && num[y]==='b' && i!==y ){
                jarak = y-i
                // console.log(y)
                // console.log(i);
                
            }
        }
    }
    if(jarak===4 ||jarak===-4){
        return true
    }else{
        return false
    }
  }
  
  // TEST CASES
  console.log(checkAB('lane borrowed')); // true
  console.log(checkAB('i am sick')); // false
  console.log(checkAB('you are boring')); // true
  console.log(checkAB('barbarian')); // true
  console.log(checkAB('bacon and meat')); // false