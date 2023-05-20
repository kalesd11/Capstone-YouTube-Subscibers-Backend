 function factorial(n){
    if(n<=1){
        return 1
    }
    else{
        return fact = n*factorial(n-1)
    }
 }

//  console.log(factorial(5))

//  const arr = [1,2,3,4,5,6,7,8,9]

 function Bsearch(num,arr,si=0,ei=arr.length){
    
     let mid = Math.floor(si+(ei-si)/2)
     if(arr[mid]==num){
        return mid
     }else if(arr[mid]>num){
       return Bsearch(num,arr,si,mid-1)
     }else{
       return Bsearch(num,arr,mid+1,ei)
     }
 }
//  console.log(Bsearch(4,arr))
//  console.log(arr.length)

const selection=(arr)=>{
    for(i=0;i<arr.length;i++){
        let p=i;
        for(j=i+1;j<arr.length;j++){
            if(arr[j]<arr[i]){
                p=j
                let temp = arr[p]
                arr[p]=arr[i]
                arr[i]=temp
            }
        }
    }
    return arr
}
let arr = [324,445,65,767,8,898,5]

// console.log(selection(arr))

const insertion = (arr)=>{
    for(i=1;i<arr.length;i++){
        let p= arr[i]
        let j=i-1
    //  let j=i-1
        for(j;j>=0&&arr[j]>p;j--){
            arr[j+1]=arr[j]

        }
        arr[j+1]=p
    }
    return arr
}
// console.log(insertion(arr))

function mergeSort(arr) {
    const half = arr.length / 2;
  
    // the base case is array length <=1
    if (arr.length <= 1) {
      return arr;
    }
  
    const left = arr.splice(0, half); // the first half of the array
    const right = arr;
    return merge(mergeSort(left), mergeSort(right));
  }

  function merge(left, right) {
    let sortedArr = []; // the sorted elements will go here
  
    while (left.length && right.length) {
      // insert the smallest element to the sortedArr
      if (left[0] < right[0]) {
        sortedArr.push(left.shift());
      } else {
        sortedArr.push(right.shift());
      }
    }
  
    // use spread operator and create a new array, combining the three arrays
    return [...sortedArr, ...left, ...right];
  }

  const newMergeSort = (arr,si=0,ei=arr.length-1)=>{
        if(si>=ei){
            return arr[si]
        }
        else{
            let mid = Math.floor( si+(ei-si)/2)
            newMergeSort(arr,si,mid)
            newMergeSort(arr,mid+1,ei)
            newMerge(arr,si,mid,ei)
        }
        return arr
  }

  const newMerge = (arr,si,mid,ei)=>{
    let sorted = []
    let i = si
    let j=mid+1;
    let k= 0
    while(i<=mid&&j<=ei){
        if(arr[i]<=arr[j]){
            sorted[k++]= arr[i++]
        }
        else{
            sorted[k++]= arr[j++]
        }
    }
    while(i<=mid){
        sorted[k++]= arr[i++]
    }
    while(j<=ei){
        sorted[k++]= arr[j++]
    }

    for(let a=0,b=si;a<sorted.length;a++,b++)
        arr[b]=sorted[a]
  }
  console.log(mergeSort(arr))