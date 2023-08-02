let productsWorkroom=[
    {
        name:" Ghế Armchair xoay",
        price:"15000000",
        image:"../asset/image/phonglamviec.jpg",
        quantity:1,
        
    },
    {
        name: " Bàn làm việc Coastal ",
        price: "14000000",
        image:"../asset/image/phonglamviec2.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn làm việc Finn 260011  ",
        price: "25000000",
        image:"../asset/image/phonglamviec3.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn làm việc Hopper 38929P ",
        price: "29000000",
        image:"../asset/image/phonglamviec4.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn làm việc màu đen ",
        price: "14500000",
        image:"../asset/image/phonglamviec5.jpg",
        quantity: 1,
       
    },
    {
        name: "Ghế làm việc Checkout 83959K ",
        price: "24000000",
        image:"../asset/image/phonglamviec6.jpg",
        quantity: 1,
        
    },
    {
        name: "Ghế làm việc Labora   ",
        price: "11000000",
        image:"../asset/image/phonglamviec7.jpg",
        quantity: 1,
        
    },
    {
        name: "Ghế làm việc Labora high ligh ",
        price: "14000000",
        image:"../asset/image/phonglamviec8.jpg",
        quantity: 1,
       
    },
    {
        name: "Ghế làm việc Labora light  ",
        price: "19000000",
        image:"../asset/image/phonglamviec9.jpg",
        quantity: 1,
     
    },
    {
        name: "Ghế làm việc xoay Franky Brown ",
        price: "12000000",
        image:"../asset/image/phonglamviec10.jpg",
        quantity: 1,
       
    },
    {
        name: "Ghế làm việc xoay Marla ",
        price: "11000000",
        image:"../asset/image/phonglamviec2.jpg",
        quantity: 1,
       
    },
    {
        name: "Ghế xoay Patron walnut ",
        price: "14000000",
        image:"../asset/image/phonglamviec12.jpg",
        quantity: 1,
       
    },
    {
        name: "Ghế xoay High Bossy ",
        price: "59000000",
        image:"../asset/image/phonglamviec13.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn làm việc MAXINE ",
        price: "51000000",
        image:"../asset/image/phonglamviec14.jpg",
        quantity: 1,
       
    },
    {
        name: "Kệ sách Cabo",
        price: "17000000",
        image:"../asset/image/phonglamviec15.jpg",
        quantity: 1,
        
    },
    {
        name: "Kệ sách Maxine ",
        price: "30000000",
        image:"../asset/image/phonglamviec16.jpg",
        quantity: 1,
       
    },
    {
        name: "Bàn làm việc Osaka ",
        price: "22000000",
        image:"../asset/image/phonglamviec17.jpg",
        quantity: 1,
        
    },
    {
        name: "Bàn làm việc Osaka KA ",
        price: "48000000",
        image:"../asset/image/phonglamviec18.jpg",
        quantity: 1,
        
    },
    {
        name: "Kệ sách Artigo",
        price: "28000000",
        image:"../asset/image/phonglamviec19.jpg",
        quantity: 1,
       
    },
    {
        name: "Kệ sách Brem ",
        price: "240000000",
        image:"../asset/image/phonglamviec20.jpg",
        quantity: 1,
        
    },
    {
        name: "Kệ sách Gamma ",
        price: "16000000",
        image:"../asset/image/phonglamviec21.jpg",
        quantity: 1,
        
    },
    {
        name: "Kệ sách Glamour ",
        price: "24000000",
        image:"../asset/image/phonglamviec22.jpg",
        quantity: 1,
       
    },
   
]
// function tạo id
function createId() {
    return Math.floor(Math.random()*9999999999999 +new Date().getMilliseconds())
}
for (let i = 0; i < productsWorkroom.length; i++) {
    productsWorkroom[i].id=createId();
}
console.log(productsWorkroom);
localStorage.setItem("productsWorkroom",JSON.stringify(productsWorkroom));