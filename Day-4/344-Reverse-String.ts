function reverseString(s: string[]): void {
    let tst = [...s]
    for (let i = 0; i < tst.length; i++){
        s.unshift(tst[i])
        s.length = tst.length
    }
};
