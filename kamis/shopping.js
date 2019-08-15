/*
 
Diberikan sebuah function shoppingTime(memberId, money) yang menerima dua parameter berupa string dan number. Parameter pertama merupakan memberId dan parameter ke-2 merupakan value uang yang dibawa oleh member tersebut.

Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

Sepatu brand Stacattu seharga 1,500,000
Baju brand Zoro seharga 500,000
Baju brand H&N seharga 250,000
Sweater brand Uniklooh seharga 175,000
Casing Handphone seharga 50,000
Buatlah function yang akan mengembalikan sebuah object dimana object tersebut berisikan informasi memberId, money, listPurchased dan changeMoney.

Jika memberId kosong maka tampilkan "Mohon maaf, toko X hanya berlaku untuk member saja" ***********
Jika uang yang dimiliki kurang dari 50000 maka tampilkan "Mohon maaf, uang tidak cukup" ************
Member yang berbelanja di toko X akan membeli barang yang paling mahal terlebih dahulu dan akan membeli barang-barang yang sedang SALE masing-masing 1 jika uang yang dimilikinya masih cukup.
Contoh jika inputan memberId: '324193hDew2' dan money: 700000

maka output:

{ memberId: '324193hDew2', money: 700000, listPurchased: [ 'Baju Zoro', 'Sweater Uniklooh' ], changeMoney: 25000 }


*/

function shoppingTime(memberId, money) {
    var barang = [ 
      ['Sepatu Stacattu','1500000'],
      ['Baju Zoro','500000'],
      ['Baju H&N','250000'], 
      ['Sweater Uniklooh','175000'],
      ['Casing HandPhone','50000']
    ]
    var list = []
    var changemoney = []
    var totalbelanja = 0
    for(var i=0;i<barang.length;i++){
      if(memberId===''||memberId===undefined){
        return 'Mohon maaf toko X hanya berlaku untuk member!'
      }else if(money<50000){
        return 'Maaf uang anda tidak cukup!'
      }else if(money>=barang[i][1]){
        list.push(barang[i][0])
        totalbelanja+=Number(barang[i][1])
        changemoney=money-totalbelanja
        // changemoney=money-barang[i][1]
        // console.log(totalbelanja)
      }
    }

    var obj = {
      memberId: memberId,
      money: money,
      listPurchased : list,
      changeMoney: changemoney, 
    }
    return obj
    
  }
  
  // TEST CASES
  console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
  console.log(shoppingTime('82Ku8Ma742', 170000));
  // //{ memberId: '82Ku8Ma742',
  // // money: 170000,
  // // listPurchased:
  // //  [ 'Casing Handphone' ],
  // // changeMoney: 120000 }
  console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
  console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
  console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja