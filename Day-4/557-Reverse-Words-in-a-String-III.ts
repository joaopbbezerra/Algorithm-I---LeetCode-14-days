function reverseWords(s: string): string {
    const splitedString = s.split(' ');
    const lastArray = []
    for (let i = 0; i<splitedString.length; i++){
        lastArray.push(splitedString[i].split('').reverse().join(''))
    }
    return  lastArray.join(' ')
};
