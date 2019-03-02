

// x adalah total Belanja sedangkan y adalah Jumlah Uang
// hitungKembalian = (x,y) => {
//     var stockUang = [500,1000,2000,5000,10000,20000,50000]
//     var count = [0,0,0,0,0,0,0]
//     var kembalian = y-x;

//     for(i=stockUang.length; i<stockUang.length ;i--) {
//         if(kembalian > stockUang[i]){
//             var sisa
//             sisa = kembalian - stockUang[i]
//             count[i] +=1
//         }
//     }

//     for(j=0 ; j < count.length; j++) {
        
//         if(count[j] > 0) {
            
//         }
//     }
// };

// hitungKembalian(15500,50000);


hitungKembalian = (x,y) => {
    var stockUang = [500,1000,2000,5000,10000,20000,50000]
    var count = [0,0,0,0,0,0,0]
    var kembalian = y-x;

    for(var i=stockUang.length; i<stockUang.length ;i--) {
        var sisa = kembalian;
        if(kembalian > stockUang[i]){
            stockUang[i] = a
            sisa -= a
            count[i] += 1;
        }
        
    };
        
};

console.log(hitungKembalian(15500,50000));