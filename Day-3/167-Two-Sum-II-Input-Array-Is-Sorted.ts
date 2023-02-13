function twoSum(numbers: number[], target: number): number[] {
    let low = 0;
    let high = numbers.length -1;

    while(numbers[low] + numbers[high] !== target){
        if (numbers[low] + numbers[high]>target){
            high--
        } else {
            low++
        }
    }
    return [low+1, high+1]
};
