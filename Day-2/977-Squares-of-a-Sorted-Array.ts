function sortedSquares(nums: number[]): number[] {
    const squaredArray: number[] = []
    nums.forEach((eachNumber:number)=> {
        squaredArray.push(Math.pow(eachNumber, 2))
    })
    return squaredArray.sort((a:number,b:number) => {
        if (a > b){return 1}
        if (a < b){return -1}
        else {return 0}
    })
};
