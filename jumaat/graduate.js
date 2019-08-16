// Implementasikan function graduates untuk mendapatkan daftar student yang lulus dengan aturan:

// Student dapat dinyatakan lulus apabila score lebih besar dari 75.
// Masukkan name dan score dari student ke class yang dia ikuti.
// Student yang tidak lulus tidak perlu ditampilkan.


function graduates (students) {
    var hasil = {}

    for(var i=0; i<students.length; i++) {
        if(hasil[students[i].class]===undefined){
            hasil[students[i].class] = []
            if(students[i].score>=75){
                let passed = {
                    name : students[i].name,
                    score : students[i].score
                }
                hasil[students[i].class].push(passed)
            }


            // if(hasil[students[i].class][0]===undefined){
            //     hasil[students[i].class][0]={}
            //     if(hasil[students[i].class][0]['score']===undefined){
            //         hasil[students[i].class][0]['name']=students[i].name,
            //         hasil[students[i].class][0]['score']=students[i].score
            //     }else{
            //         if(hasil[students[i].class][0]['score']<students[i].score){
            //             hasil[students[i].class][0]['score'] = students[i].score
            //         }
            //     }
            //     hasil[students[i].class].push(hasil[students[i].class][0])
            // }
        }else{
            if(students[i].score>=75){
                let passed1 = {
                    name : students[i].name,
                    score : students[i].score
                }
                hasil[students[i].class].push(passed1)
            }
        }
    }

    return hasil

  }
  
  console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}