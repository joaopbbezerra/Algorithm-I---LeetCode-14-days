function search(nums: number[], target: number): number {
    const originalArray = [...nums]
    let low = 0
    let high = nums.length - 1
    let counter = 0
    while (low <= high) {
        counter++
        let mid = Math.floor((low + high)/2)
        let guess = nums[mid];
        if (guess === target) return originalArray.indexOf(guess)
        if (guess > target) high = mid - 1
        if (guess < target) low = mid + 1
    }
    return - 1
};
