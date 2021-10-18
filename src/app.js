console.log("Merhaba Kodlama.io")
// JS is not type safe
var dolarDun = 9.20
var dolarBugun = 9.33
// artik let keywordu kullanılıyor let dolar = 10


{
    let dolarDun = 9.10
    // eger 'var' kullansaydin burasi calisirdi
    // disardan baska bi keyword gelip bu uygulamaya
    // mudahale etmesin diye let kullanırız.
    
}
console.log(dolarDun)
const euroDun = 11.2
//euroDun = 11 const ifade değiştirilemez
// isimlendirmede camelCasing kullanıyoruz
// PascalCasing ilk baş harfler büyük
console.log(euroDun)

let konutKredileri = ["Konu Kredisi" , "Emlak Konut Kredisi","Kamu Konut Kredisi"]

console.log("<ul>")
for (let index = 0; index < 3; index++) {
    console.log("<li>"+ konutKredileri[index]+"</li>")
    
}
console.log("</log>")

console.log(konutKredileri)
