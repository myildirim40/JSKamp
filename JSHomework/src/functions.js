function addToCart(quantity,productName="Elma") {
    console.log("Sepete Eklendi: " + productName +" Adet: " + quantity)
}

// addToCart(3,"Armut")
// addToCart(5)

let sayHello = ()=>{
    console.log("Hello word")
}

//sayHello()

let sayHello2 = function(){
    console.log("Hello word2")
}
//sayHello2()

let product={productName:"Elma",unitPrice:5,quantity:3}

function addToCart3(product1){
    console.log("ürün: " + product1.productName)
    console.log("adet fiyati: " + product1.unitPrice)
    console.log("adet: " +product1.quantity)
}

// addToCart3(product)
//objeler referans tiptir.

let product2={productName:"Elma",unitPrice:5,quantity:3}
let product3={productName:"Elma",unitPrice:5,quantity:3}
product2 = product3
product2.productName="Karpuz"
console.log(product3.productName) // Neden karpuz oldu.

// sayılar değer tiptir
let sayi1=10
let sayi2 = 20
sayi1=sayi2
sayi2=100
console.log(sayi1) // Olması gereken ama neden objede beklenen değer çıkmadı!!

// değer tip ile referans tip farklıdır. Referans tipte sadece adres değişiyor. Ayrıntılı için stack ve heap i araştırabilirsin

function addToCart4(x) {
    console.log(x)
}

let products = [
    {productName:"Elma", unitPrice:5, quantity:3},
    {productName:"Armut", unitPrice:4, quantity:5},
    {productName:"Karpuz", unitPrice:6, quantity:7}
]

// addToCart4(products)

function add(...numbers) { // rest

    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]        
    }
    console.log(total)
}

// add(10,20,30)
// add(50,30,20,10,20,20)

console.log(Math.max(10,20,600,500,30,1,0,85))

let numbers2 = [10,20,600,500,30,1,0,85]
console.log(Math.max(numbers2)) // NaN verir çünkü array kabul etmiyor çözüm için
console.log(Math.max(...numbers2))

//let [icAnadolu,marmara,karadeniz] = ["İç Anadolu","Marmara","Karadeniz"]

console.log(icAnadolu,marmara,karadeniz)

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri,marmaraSehirleri,karadenizSehirleri]] = [
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Artvin"]
    ]
]
console.log(icAnadolu,icAnadolu.name,karadeniz.population)
console.log(icAnadoluSehirleri)

let newProductName, newUnitPrice, newQuantity

({productName:newProductName, unitPrice:newQuantity, quantity:newQuantity} 
    ={productName:"Elma", unitPrice:5, quantity:3} )

    console.log(newProductName)
