const array = [
    {item: "one", bought: false},
    {item: "two", bought: true},
    {item: "three", bought: false},
    {item: "four", bought: true},
    {item: "five", bought: false},
    {item: "six", bought: true}
    ]
    
    console.log(array[1]);
    
    array1 = [true, false, true, false, false]
    let lh = array1.sort((a, b) => a - b);
    console.log(lh)
    
    const arrSorted = [...array]

    arrSorted.sort((a, b)=> {
        const result =  a.bought - b.bought;
        return result;
    })
    // arrSorted.sort(function(a,b){
    //   return a.bought - b.bought
    // })
    
    console.log("sorted", arrSorted);


const arrSorted1 = [...array]

        arrSorted1.sort(function(b,a){
      return a.bought - b.bought
    })
    console.log('reverse', arrSorted1);

