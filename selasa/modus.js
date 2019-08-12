function cariModus(arr) {
    var angkaterbanyak = 0
    var modus = 0
    for(var i=0;i<arr.length;i++){
        var hitung=0
        for(var y=0;y<arr.length;y++){
            if(arr[i]===arr[y] && i!==y){
                hitung++
                if(hitung>angkaterbanyak){
                    angkaterbanyak=hitung
                    modus = i
                    // console.log(hitung)
            }
            }
        }
    }
    if(angkaterbanyak===0){
        return -1
    }
    var angka=0
    for(var m=0;m<arr.length;m++){
        angka+=arr[m]
        if((angka/arr.length===arr[m])){
            return -1
        }
    }

    // console.log(uji);
    // console.log(angkaterbanyak);
    
    return arr[modus]
  }
  
  // TEST CASES
  console.log(cariModus([10, 4, 5, 2, 4])); // 4
  console.log(cariModus([5, 10, 10, 1, 5])); // 5
  console.log(cariModus([10, 3, 1, 2, 5])); // -1
  console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
  console.log(cariModus([7, 7, 7, 7, 7])); // -1