const array = [2,6,10,11,7,13,14,5,4,16,18,3,1,20,19,13,12,15];

// tip: best practise is to use random base element

const quickSort = (array) => {
    if (array.length < 2) return array;
    else {
        const base = array[0];
        const less = array.filter(item => item < base);
        const greater = array.filter(item => item > base);

        return [...quickSort(less), base, ...quickSort(greater)];
    }
};

console.log(quickSort(array))