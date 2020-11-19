const array = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];

const binary_search = (array, target) => {
    let low = 0;
    let high = array.length - 1;

    while (low < high) {
        let mid = low + high;
        let guess = array[mid];

        if (guess === target) {
            return mid;
        }
        if (guess > target) {
            high = mid - 1;
        }
        if (guess < target) {
            low = mid + 1;
        }
    }

    return 'not found'
};

console.log(binary_search(array, 9))