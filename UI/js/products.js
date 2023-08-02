// let products=[
//     {
//         name:"Ghế Ăn Coastal KD1085-18",
//         price:"5100000",
//         image:"./asset/image/ghean.jpg",
//         quantity:1,
//         rewe
//     },
//     {
//         name: "Sofa Coastal 2 Chỗ vải Sevilla ",
//         price: "32000000",
//         image: "./asset/image/Sofa2cho.jpg",
//         quantity: 1,
//     },
//     {
//         name: "Armchair Coastal vải Sevilla",
//         price: "15600000",
//         image: "./asset/image/Sofa1cho.jpg",
//         quantity: 1,
//     },
//     {
//         name: "Bàn Làm Việc Wing màu đen ",
//         price: "14600000",
//         image: "./asset/image/banmauden.jpg",
//         quantity: 1,
//     }, {
//         name: "Bàn Làm Việc Wing màu Trắng",
//         price: "14600000",
//         image: "./asset/image/banmautrang.jpg",
//         quantity: 1,
//     },
//     {
//         name: "Giường Coastal 1m8 vàng",
//         price: "32000000",
//         image: "./asset/image/giuong.jpg",
//         quantity: 1,
//     },
//     {
//         name: "Bàn làm Việc Coastal",
//         price: "14900000",
//         image: "./asset/image/banlamviec.jpg",
//         quantity: 1,
//     },
//     {
//         name: "Tủ Coastal ",
//         price: "18000000",
//         image: "./asset/image/tu.jpg",
//         quantity: 1,
//     },
    
// ]
// // function tạo id
// function createId() {
//     return Math.floor(Math.random()*9999999999999 +new Date().getMilliseconds())
// }
// for (let i = 0; i < products.length; i++) {
//     products[i].id=createId();
// }
// console.log(products);
// localStorage.setItem("products",JSON.stringify(products));
let products=[
    {
        name:"Sofa Coastal",
        price:"32000000",
        image:"../asset/image/phongkhach1.jpg",
        quantity:1,
        
    },
    {
        name: " Sofa Jadora-Sắc màu  ",
        price: "54000000",
        image:"../asset/image/phongkhach2.jpg",
        quantity: 1,
       
    },
    {
        name: "Sofa 3 chỗ bolera  ",
        price: "24000000",
        image:"../asset/image/phongkhach3.jpg",
        quantity: 1,
        
    },
    {
        name: "Sofa Elegance hiện đại ",
        price: "132000000",
        image:"../asset/image/phongkhach4.jpg",
        quantity: 1,
       
    },
    {
        name: "Sofa Pio  ",
        price: "36000000",
        image:"../asset/image/phongkhach5.jpg",
        quantity: 1,
       
    },
    {
        name: "Sofa Penny thanh lịch ",
        price: "24000000",
        image:"../asset/image/phongkhach6.jpg",
        quantity: 1,
        
    },
    {
        name: "Sofa Miami  ",
        price: "14000000",
        image:"../asset/image/phongkhach7.jpg",
        quantity: 1,
        
    },
    {
        name: "Sofa góc Monaco  ",
        price: "42000000",
        image:"../asset/image/phongkhach8.jpg",
        quantity: 1,
       
    },
    {
        name: "Sofa Royal  ",
        price: "19000000",
        image:"../asset/image/phongkhach9.jpg",
        quantity: 1,
     
    },
    {
        name: "Sofa Cabo thời thượng ",
        price: "35000000",
        image:"../asset/image/phongkhach10.jpg",
        quantity: 1,
       
    },
    {
        name: "Sofa Bridge Da Cognac ",
        price: "109000000",
        image:"../asset/image/phongkhach11.jpg",
        quantity: 1,
       
    },
    {
        name: "Sofa combo ",
        price: "96000000",
        image:"../asset/image/phongkhach12.jpg",
        quantity: 1,
       
    },
]
// function tạo id
function createId() {
    return Math.floor(Math.random()*9999999999999 +new Date().getMilliseconds())
}
for (let i = 0; i < products.length; i++) {
    products[i].id=createId();
}
console.log(products);
localStorage.setItem("products",JSON.stringify(products));