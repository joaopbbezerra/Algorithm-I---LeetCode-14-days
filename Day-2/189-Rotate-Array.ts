/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const numsLength = nums.length -1;
    for (let i = 0; i<k; i++){
        const lastNumber = nums[numsLength]
        nums.length = numsLength
        nums.unshift(lastNumber)
    }
};
