/*
Toko X yang sedang melakukan SALE ingin menghitung jumlah profit untuk setiap jenis barang yang terjual pada hari itu.

Barang-barang SALE yang akan dihitung penjualannya:

Sepatu brand Stacattu seharga 1500000 dan stock barang yang tesedia 10
Baju brand Zoro seharga 500000 dan stock barang yang tesedia 2
Sweater brand Uniklooh seharga 175000 dan stock barang yang tersedia 1
Function akan menerima array yang berisikan object pembeli (nama pembeli, barang yang ingin dibeli dan jumlah barang yang dibelinya). Jika stock barang kurang dari jumlah yang ingin dibeli oleh pembeli maka pembeli batal untuk membeli barang tersebut.

Function countProfit akan mengembalikan/me-return sebuah array of object dimana array tersebut berisi objek-objek barang dari toko X tersebut yang berisikan info nama barang, siapa saja yang membeli, sisa stock barang dan total pemasukan untuk barang tersebut
*/

function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                       ['Baju Zoro', 500000, 2],
                       ['Sweater Uniklooh', 175000, 1]
                     ];
  
    //progress untuk shoppers 
    var product1 = []
    var product2 = []
    var product3 = []
    var profit1 =0
    var profit2 =0
    var profit3 =0
    var beli1 =0
    var beli2 =0
    var beli3 =0
    var sisa1 = 0
    var hasil =0
    for( var i=0; i<shoppers.length; i++){
      if(shoppers[i].product === listBarang[0][0] ){
        product1.push(shoppers[i].name)
          beli1+=shoppers[i].amount
          hasil = listBarang[0][2] - beli1
      }else if(shoppers[i].product === listBarang[1][0]){
        product2.push(shoppers[i].name)
        beli2+=shoppers[i].amount
      }else if(shoppers[i].product === listBarang[2][0]){
        product3.push(shoppers[i].name)
        beli3+=shoppers[i].amount
      }
    }
    // console.log(product3)
    // ======================================== 1
    sisa1 = listBarang[0][2]-beli1
    profit1 = listBarang[0][1]*beli1
    // console.log(hasil)
    // ======================================== 2
    sisa2 = listBarang[1][2]-beli2
    profit2 = listBarang[1][1]*beli2
    // ======================================== 3
    sisa3 = listBarang[2][2]-beli3
    profit3 = listBarang[2][1]*beli3
    // console.log(beli3)

    // ======================================== perkondisian
    
    
    var aob = [{
      product : listBarang [0][0],
      shoppers : product1,
      leftOver : sisa1,
      totalProfit : profit1
    },{
      product : listBarang [1][0],
      shoppers : product2,
      leftOver : sisa2,
      totalProfit : profit2
    },{
      product : listBarang[2][0],
      shoppers : product3,
      leftOver : sisa3,
      totalProfit : profit3
    }]
    
    // console.log(beli1)


    return aob
  }
  
  // TEST CASES
  // console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]
  
  console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // // [ { product: 'Sepatu Stacattu',
  // //     shoppers: [ 'Windi' ],
  // //     leftOver: 2,
  // //     totalProfit: 12000000 },
  // //   { product: 'Baju Zoro',
  // //     shoppers: [ 'Devi', 'Lisa' ],
  // //     leftOver: 0,
  // //     totalProfit: 1000000 },
  // //   { product: 'Sweater Uniklooh',
  // //     shoppers: [ 'Rani' ],
  // //     leftOver: 0,
  // //     totalProfit: 175000 } ]
  // console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // // [ { product: 'Sepatu Stacattu',
  // //     shoppers: [],
  // //     leftOver: 10,
  // //     totalProfit: 0 },
  // //   { product: 'Baju Zoro',
  // //     shoppers: [],
  // //     leftOver: 2,
  // //     totalProfit: 0 },
  // //   { product: 'Sweater Uniklooh',
  // //     shoppers: [],
  // //     leftOver: 1,
  // //     totalProfit: 0 } ]
  // console.log(countProfit([])); //[]