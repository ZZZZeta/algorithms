const array = [2,6,10,11,7,13,14,5,4,16,18,3,1,20,19,13,12,15];

const findSmallest = (array) => {
    let smallest = array[0];
    let smallestIndex = 0;

    for (let i = 1; i < array.length; i++) {
        if (array[i] < smallest) {
            smallest = array[i];
            smallestIndex = i;
        }
    }

    return smallestIndex;
};

const selectionSort = (array) => {
    let arrayToSort = array;
    let sortedArray = [];

    for (let i = 0; i < array.length; i++) {
        let smallest = findSmallest(arrayToSort);
        sortedArray.push(arrayToSort[smallest]);

        if (arrayToSort.length > 1) {
            arrayToSort = arrayToSort.filter(item => item !== arrayToSort[smallest])
        }
    }

    return sortedArray;
};

console.log(selectionSort(array))