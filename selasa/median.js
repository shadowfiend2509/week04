function cariMedian(arr) {
    var newarr = []
    newarr.push(Math.floor(arr.length/2))
    var hasil = []
    if(arr.length%2){
        hasil.push(arr[newarr])
    }else{
        hasil.push((arr[newarr-1]+arr[newarr])/2)
    }
    return hasil.toString() //output
}

  // TEST CASES
  console.log(cariMedian([1, 2, 3, 4, 5])); // 3
  console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
  console.log(cariMedian([3, 4, 7, 6, 10])); // 7
  console.log(cariMedian([1, 3, 3])); // 3
  console.log(cariMedian([7, 7, 8, 8])); // 7.5