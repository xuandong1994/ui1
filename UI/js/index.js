// function convert sang tiền Việt
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
// lấy danh sách sản phẩm trên local về để render
let products = JSON.parse(localStorage.getItem("products")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];

// function render danh sách sản phẩm
let checkLogin = localStorage.getItem("checkLogin");
if(checkLogin){
    document.getElementsByClassName("login")[0].style.display="none";
    document.getElementsByClassName("register")[0].style.display = "none";
    document.getElementsByClassName("person")[0].style.display = "block";

}
function renderProducts() {
    let element = "";
    for (let i = 0; i < products.length; i++) {
        element +=
            `
            <div class = "product__itemall">
                     <div class="product__item1">

                        <div class="product__item--image1">
                            <a href=""> <img src="${products[i].image}" alt=""></a>
                    </div>

                    <div class="product__item--infor1">
                            <div class="product__item--name1">
                                <a class="rendername" href=""> ${products[i].name}</a>
                        
                            </div>

                            <div class="product__item--price1">
                            ${VND.format(products[i].price)}
                        
                            </div>
                
                    </div>
                
                    <div class="bntspan">
                        <div> 
                                <span class="rendercart" onclick="addToCart(${products[i].id})" >
                                    <button class="renderbutton">Thêm giỏ hàng </button>
                                </span>
                        </div>
                            <a href="../html/introduce.html">  <button onclick="xemchitiet(${products[i].id})"class="btnright">Xem chi tiết </button> </a>
                    <div>
                </div>
                    </div>
                 </div> 
            </div>
            `
    }
    document.getElementsByClassName("products")[0].innerHTML = element;
   
}
renderProducts();
// function mua hàng
function addToCart(idProduct) {
    if (checkLogin == null) {
        myFunction("bạn phải đăng nhập để mua hàng");
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == checkLogin) {
            let productDetail = products.filter((phat) => {
                return phat.id == idProduct
            })
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == idProduct) {
                    myFunction("sản phẩm đã có trong giỏ hàng!")
                    return;
                }
            }
            users[i].cart.push(productDetail[0]);
            showQuantity();
            localStorage.setItem("users", JSON.stringify(users))

        }

    }
}
// function click user
function clickUser() {
    document.getElementsByClassName("infor__list")[0].style.display = "block";
    document.getElementsByClassName("close")[0].addEventListener("click", () => {
    document.getElementsByClassName("infor__list")[0].style.display = "none";
    })
}
//function tìm kiếm
function searchProducts() {
    let resultSearch = document.getElementsByClassName("header__search-ipt")[0].value.toLowerCase();
    if (resultSearch != "") {
        let search1 = [];
        for (let i = 0; i < products.length; i++) {
            if (products[i].name.toLowerCase().indexOf(resultSearch) != -1){
                search1.push(products[i]);
            }
        }
        let element = "";
        if (search1.length > 0) {
            for (let i = 0; i < search1.length; i++) {
                element +=
                    `
                    <div class="product__item2">
                        <div class="product__item--image2">
                            <a href="../html/livingroom.html"> <img class ="imga" src="${search1[i].image}" alt=""></a>
                        </div>
            
                        <div class="product__item--name2">
                            <a class="rendername" href="../html/livingroom.html"> ${search1[i].name}</a>
                        </div>
                  
                
                    </div> 
                    `;
            }
            document.getElementById("search").innerHTML = element;
        } else {
            document.getElementById("search").innerHTML = "";
        }
    } else {
        document.getElementById("search").innerHTML = "";
    }
}
//hàm tăng sản phẩm
function showQuantity() {
    if (checkLogin == null) {
        document.getElementsByClassName("header__cart-cire")[0].innerHTML = "0";
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == checkLogin) {
            document.getElementsByClassName("header__cart-cire")[0].innerHTML = users[i].cart.length;
        }

    }
}
showQuantity()
//function logout
function logOut() {
    let confirmq = confirm("Bạn có muốn thoát hay không?")
    if (confirmq) {
        localStorage.removeItem("checkLogin")
        window.location.reload();

    }
}

function myFunction(text) {
    var notification = document.getElementById("snackbar");
    notification.innerHTML = text;
    notification.className = "show";
    setTimeout(function () {  notification.className =  notification.className.replace("show", ""); }, 3000);
}