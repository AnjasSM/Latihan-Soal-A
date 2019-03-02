countHandshake = (input) => {
    let hasil = 0;
        for(i=1; i < input; i++) {
            hasil += i
        };
    return(hasil);
};

console.log(countHandshake(6));