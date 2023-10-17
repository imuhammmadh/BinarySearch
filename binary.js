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

function lowerBound(arr, target) {
    let n = arr.length
    let low = 0
    let high = n - 1
    let ans = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] >= target) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
}
console.log(lowerBound([1, 2, 3, 3, 5, 8, 8, 10, 10, 11], 7));

function upperBound(arr, target) {
    let n = arr.length
    let low = 0
    let high = n - 1
    let ans = n
    while (low <= high) {
        let mid = Math.floor((low + high) / 2)
        if (arr[mid] > target) {
            ans = mid
            high = mid - 1
        } else {
            low = mid + 1
        }
    }
    return ans
} console.log(upperBound([2, 3, 6, 7, 8, 8, 11, 11, 11, 12], 6));