function lengthOfLongestSubstring(s: string): number {
    let longestSubstring: string[] = [];
    let actualSubstring: string[] = []
    let splitedArray = s.split('')

    for (let i = 0; i<splitedArray.length; i++){

        if (!actualSubstring.some(eaLetter => eaLetter === splitedArray[i])){
            actualSubstring.push(splitedArray[i]);
        } else {
            splitedArray = [...splitedArray.slice(splitedArray.indexOf(splitedArray[i])+1)]
            i = 0
            if (actualSubstring.length > longestSubstring.length){
                longestSubstring = [...actualSubstring]
            }
            actualSubstring = [splitedArray[i]]
        }
    }
    return longestSubstring.length > actualSubstring.length ? longestSubstring.length : actualSubstring.length
};
