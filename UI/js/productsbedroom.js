let productsBedroom=[
    {
        name:"Phòng Ngủ Cabo",
        price:"25000000",
        image:"../asset/image/phongngu1.jpg",
        quantity:1,
        
    },
    {
        name: " Phòng Ngủ Pio",
        price: "25500000",
        image:"../asset/image/phongngu2.jpg",
        quantity: 1,
       
    },
    {
        name: "Phòng Ngủ Dubai ",
        price: "14000000",
        image:"../asset/image/phongngu3.jpg",
        quantity: 1,
        
    },
    {
        name: "Phòng Ngủ Bắc Âu ",
        price: "88000000",
        image:"../asset/image/phongngu4.jpg",
        quantity: 1,
       
    },
    {
        name: "Phòng Ngủ Gỗ ",
        price: "23000000",
        image:"../asset/image/phongngu5.jpg",
        quantity: 1,
       
    },
    {
        name: "Phòng Ngủ Iris ",
        price: "16000000",
        image:"../asset/image/phongngu6.jpg",
        quantity: 1,
        
    },
    {
        name: "Phòng Ngủ Victoria  ",
        price: "28000000",
        image:"../asset/image/phongngu7.jpg",
        quantity: 1,
        
    },
    {
        name: "Phòng Ngủ Peak  ",
        price: "28000000",
        image:"../asset/image/phongngu8.jpg",
        quantity: 1,
       
    },
    {
        name: "Phòng Ngủ Pop  ",
        price: "28000000",
        image:"../asset/image/phongngu9.jpg",
        quantity: 1,
     
    },
    {
        name: "Phòng ngủ Iris2 ",
        price: "35000000",
        image:"../asset/image/phongngu10.jpg",
        quantity: 1,
       
    },
    {
        name: "Phòng Ngủ Maxine ",
        price: "30000000",
        image:"../asset/image/phongngu11.jpg",
        quantity: 1,
       
    },
    {
        name: "Phòng Ngủ Mây ",
        price: "35000000",
        image:"../asset/image/phongngu12.jpg",
        quantity: 1,
       
    },
  
   
]
// function tạo id
function createId() {
    return Math.floor(Math.random()*9999999999999 +new Date().getMilliseconds())
}
for (let i = 0; i < productsBedroom.length; i++) {
    productsBedroom[i].id=createId();
}
console.log(productsBedroom);
localStorage.setItem("productsBedroom",JSON.stringify(productsBedroom));  