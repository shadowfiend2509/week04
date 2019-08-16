/**
 Diberikan function naikAngkot(listPenumpang) yang akan menerima satu parameter berupa array dua dimensi. Function akan me-return array of object.

Diberikan sebuah rute, dari A - F. Penumpang diwajibkan membayar Rp2000 setiap melewati satu rute.

Contoh: input: [['Dimitri', 'B', 'F']] output: [{ penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 }]

 
 */


function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var array = [] 

    for(var i=0; i<arrPenumpang.length; i++ ) {
        var obj = {}
        var carinaik = 0
        var cariturun = 0
        for(var j=0; j<rute.length; j++ ) {
            if(arrPenumpang[i][1]===rute[j]){
                carinaik = j
            }
            if(arrPenumpang[i][2]===rute[j]){
                cariturun = j
            }
        var selisih = cariturun-carinaik
        obj['penumpang']=arrPenumpang[i][0],
        obj['naikDari']=arrPenumpang[i][1],
        obj['tujuan']=arrPenumpang[i][2],
        obj['bayarr']=selisih*2000
    }
    array.push(obj)
    }
    return array
}
  
  
  //TEST CASE
  console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'C']]));
  // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
  //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]
  
  console.log(naikAngkot([])); //[]