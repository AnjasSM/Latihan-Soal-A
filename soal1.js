biodata = () => {
    var obj = {};
    obj.name = "Anjas Syarifudin Maharesi";
    obj.address = "Gg. Kebon suruh 4 no.35, Karangmangu, Baturraden, Banyumas, Jawa Tengah"
    obj.hobbies = ["Berenang","Membaca","bermain game"];
    obj.is_married = false;
    obj.school = { highSchol : "Sma Negeri Baturraden", university : null };
    obj.skills = [{javascript: true, React: true, mysql: false}, {adobePremiere: true, googleScetchup: true}]

    json = JSON.stringify(obj, '', '\t');
    return(json)
};

console.log(biodata());