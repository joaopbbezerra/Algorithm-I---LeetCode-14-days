/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    let temp
    for(let i = nums.length - 1; i >= 0; i--) {
        if(nums[i] === 0) {
            temp = nums.splice(i, 1);
            nums.push(temp[0]);
        }
    }
};
