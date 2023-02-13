function searchInsert(nums: number[], target: number): number {
    return binarySearch(nums, target)
};

function binarySearch(list: number[], item: number): number | null {
    let low = 0
    let high = list.length - 1
    let counter = 0
    while (low <= high) {
        counter++
        let mid = Math.floor((low + high)/2)
        let guess = list[mid];
        if (guess === item){
            return mid
        }
        if (guess > item){
            high = mid - 1
        }
        if (guess < item){
            low = mid + 1
        }
    }
    return low
}
