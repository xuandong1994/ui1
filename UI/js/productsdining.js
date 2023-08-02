let productsDining=[
    {
        name:"Bàn ăn BTS Jazz",
        price:"32000000",
        image:"../asset/image/phongan1.jpg",
        quantity:1,
        
    },
    {
        name: " Bàn ăn Cult",
        price: "34000000",
        image:"../asset/image/phongan2.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn Delta ",
        price: "54000000",
        image:"../asset/image/phongan3.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn ăn Bắc Âu ",
        price: "88000000",
        image:"../asset/image/phongan4.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn Elegance ",
        price: "56000000",
        image:"../asset/image/phongan5.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn Shadow ",
        price: "54000000",
        image:"../asset/image/phongan6.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn ăn 6 ghế Skagen  ",
        price: "78000000",
        image:"../asset/image/phongan7.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn ăn Peak  ",
        price: "28000000",
        image:"../asset/image/phongan8.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn hiện đại  ",
        price: "38000000",
        image:"../asset/image/phongan9.jpg",
        quantity: 1,
     
    },
    {
        name: "Bàn an Cult ",
        price: "35000000",
        image:"../asset/image/phongan10.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn Jazz ",
        price: "80000000",
        image:"../asset/image/phongan11.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn Tristan ",
        price: "55000000",
        image:"../asset/image/phongan12.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn Maxine ",
        price: "59000000",
        image:"../asset/image/phongan13.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn ăn Elegance ",
        price: "47000000",
        image:"../asset/image/phongan14.jpg",
        quantity: 1,
       
    },
    {
        name: " Bàn ăn Mây",
        price: "59000000",
        image:"../asset/image/phongan15.jpg",
        quantity: 1,
        
    },
    {
        name: "Sofa Royal thiết kế nổi bật",
        price: "35000000",
        image:"../asset/image/phongan16.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn ăn Bridge ",
        price: "54000000",
        image:"../asset/image/phongan17.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn ăn victori ",
        price: "108000000",
        image:"../asset/image/phongan18.jpg",
        quantity: 1,
        
    },
   
]
// function tạo id
function createId() {
    return Math.floor(Math.random()*9999999999999 +new Date().getMilliseconds())
}
for (let i = 0; i < productsDining.length; i++) {
    productsDining[i].id=createId();
}
console.log(productsDining);
localStorage.setItem("productsDining",JSON.stringify(productsDining));