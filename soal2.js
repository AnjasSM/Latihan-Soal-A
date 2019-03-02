isPasswordValid = (pass) => {
    var upperCase = /[A-Z]/g;
    var lowerCase = /[a-z]/g;
    var numbers = /[0-9]/g;
    var special = /[-_&$@#!]/g;
    var minKarakter = 8;

    if( upperCase.test(pass)                        //validasi huruf besar
        && lowerCase.test(pass)                     //validasi huruf kecil
        && numbers.test(pass)                       //validasi angka
        && special.test(pass)                       //validasi karakter special
        && pass.length >= minKarakter ) {           //validasi panjang password
            return(true)
        } else {
            return(false)
        }
};

console.log(isPasswordValid(pass));         // ganti kata pass sesuai password yg diinginkan dalam bentuk string
