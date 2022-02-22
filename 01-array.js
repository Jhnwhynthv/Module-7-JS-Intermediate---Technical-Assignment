//Soal-1
const arr = [1, 2, 3];
const arr2 = [8, 1, 5, 7];
function reverseArr(arr) {
    const duplicateArr = {...arr};
    const result = duplicateArr.reverse();
    return result;
}

const newArr = reverse(arr);
const newArr2 = reverse(arr2);

console.log(arr, newArr);
console.log(arr2, newArr2);


//Soal-02
const arr1 = [1, 3, 4, 1, 2, 8];
const arr2 = [5, 6, 7, 8, 1, 3];

function getAverage(arr1) {
    let total = 0;
    arr1.forEach(function(score) {
    total += score;
    });

    let avg = total/arr1.length
    return Math.round(avg);
}


console.log(getAverage(arr1));
console.log(getAverage(arr2))


//soal-03
const arr = [
    [10],
    [9, 7, 1],
    [2, 8],
  ];
  
  function searchInArray(arr, number) {
      const newArray = [];

      

      const isIndex = (element) => element === number;
      console.log(newArray.findIndex(isIndex));
      const result = newArray.findIndex(isIndex);
        if (result === -1) {
            return null; 
        } else {
            return result;
        }
}

  console.log(searchInArray(arr, 3));
  console.log(searchInArray(arr, 2));
  console.log(searchInArray(arr, 4));
  console.log(searchInArray(arr, 8));