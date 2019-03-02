
// drawImage = (input) => {
//     var x = input/2 + 0.5;
//     var y = input - input +1;
    
//     for( i = 1; i <= input; i++){
//         var str = "";
//             for( j = 1; j <= input; j++){
//                 if (j === x) {
//                     str += "*"
//                 } else {
//                     str += "="
//                 }
//             }
//         console.log(str)
//     };
// }

// drawImage(7)

drawImage = (input) => {
    var x = input/2 + 0.5;      //mencari nilai tengah 
    var y = 1;   
    
    //i untuk looping gambar kebawah dan j untuk looping gambar kesamping
    for( var i = 1; i <= input; i++){       
        var str = "";

        if (i === x) {            //cetak bintang pada baris tengah
            for( j = 1; j <= input; j++){
                str+= "*"
            }

        } else if ( i === y || i === input ) {
            for( var j = 1; j <= input; j++){               //cetak bintang diujung gambar dan tengah pada baris awal dan terakhir
                if (j === x || j === y || j === input) {
                    str += "*"
                } else {
                    str += "="
                }
            }
        } else {
            for( var j = 1; j <= input; j++){       // cetak bintang hanya ditengah gambar pada setiap baris
                if (j === x) {
                    str += "*"   
                } else {
                    str += "="
                }
            }
        }    
        console.log(str)
    };
};

drawImage(7);
