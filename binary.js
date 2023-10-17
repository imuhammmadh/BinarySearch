function binarySearchI(arr, target) {
    let low = 0
    let high = arr.length - 1
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] == target) {
            return mid
        } else if (target > arr[mid]) {
            low = mid + 1
        } else {
            high = mid - 1
        }
    }
    return -1
}
console.log(binarySearchI([3, 4, 6, 7, 9, 12, 16, 17], 6));