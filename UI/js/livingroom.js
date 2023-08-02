let start;
let end;
let perPage = 9;
let currenPage = 1;
let productsLiving = JSON.parse(localStorage.getItem("productsLiving")) || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
let totalPage = Math.ceil(productsLiving.length / perPage);
// function convert sang tiền Việt
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
let checkLogin = localStorage.getItem("checkLogin");
if(checkLogin){
    document.getElementsByClassName("login")[0].style.display="none";
    document.getElementsByClassName("register")[0].style.display = "none";
    document.getElementsByClassName("person")[0].style.display = "block";

}
//pagination
function pagination() {
    let text = "";
    for (let i = 0; i < totalPage; i++) {
        text +=
            `
        <li class="page" onclick=pageNow(${i + 1})>${i + 1}</li>
        `
    }
    document.getElementById("pages").innerHTML = text;
    
}
pagination()
//function showStarEnd
function calculateStartEnd(current) {
    
    start = (currenPage - 1) * perPage;
    end = currenPage * perPage;
}
calculateStartEnd(currenPage)
//function chonj page
function pageNow(page) {
    let pages1 = document.getElementsByClassName("page");
    for (let i = 0; i < pages1.length; i++) {
        if (page - 1 == i) {
            pages1[i].classList.add("page-now")
        } else {
            pages1[i].classList.remove("page-now")
        }
    }
    currenPage = page;
    calculateStartEnd(currenPage);
    renderproductsLiving();
}
pageNow(1)
function increasepage() {
    currenPage = currenPage + 1
    if (currenPage > totalPage) {
        currenPage = 3
        return;
    }
    pageNow(currenPage)
}
//function giảm
function decreasePage() {
    currenPage = currenPage - 1
    if (currenPage < 1) {
        currenPage = 1
        return;
    }
    pageNow(currenPage)
}
//functinon render sản phẩm
function renderproductsLiving() {
    let element2 = "";
   
    for (let i = 0; i <productsLiving.length; i++) {
        if (i >= start && i < end)
        element2 +=
            `
             <div class="product__all">
                    <div class="product__item1">

                    <div class="product__item--image1">
                        <a href=""> <img src="${productsLiving[i].image}" alt=""></a>
                    </div>

                    <div class="product__item--infor1">
                        <div class="product__item--name1">
                            <a class="rendername" href=""> ${productsLiving[i].name}</a>
                            
                    </div>

                        <div class="product__item--price1">
                        ${VND.format(productsLiving[i].price)}
                            
                        </div>
                    
                    </div>
                    
                    <div class="bntspan">
                        <div> 
                                <span class="rendercart" onclick="addToCart(${productsLiving[i].id})" >
                                    <button class="renderbutton">Thêm giỏ hàng </button>
                                </span>
                        </div>
                                
                        <div class="introduceall" >
                              <button onclick="xemchitiet(${productsLiving[i].id})"class=" btnright"> Xem chi tiết 
                             </button>
                        </div>
                      
                    </div>
                  
                 </div> 
             </div>
            `

    }

    document.getElementsByClassName("productsLiving")[0].innerHTML = element2;
  
   
}





renderproductsLiving();
//function add giỏ hàng
function addToCart(idProduct) {
    if (checkLogin == null) {
        myFunction("bạn phải đăng nhập để mua hàng");
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == checkLogin) {
            let productDetail = productsLiving.filter((phat) => {
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
//function clickUser các icon
function clickUser() {
    document.getElementsByClassName("infor__list")[0].style.display = "block";
    document.getElementsByClassName("close")[0].addEventListener("click", () => {
    document.getElementsByClassName("infor__list")[0].style.display = "none";
    })
}
//hàm tăng sản phẩm
function showQuantity() {
    if (checkLogin == null) {
        document.getElementsByClassName("header__cart-cire")[0].innerHTML = 0;
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == checkLogin) {
            document.getElementsByClassName("header__cart-cire")[0].innerHTML = users[i].cart.length;
        }

    }
}
showQuantity()
//function  tìm kiếm sản phẩm
function searchProducts() {
    let resultSearch = document.getElementsByClassName("header__search-ipt")[0].value.toLowerCase();
    if (resultSearch != "") {
        let search1 = [];
        for (let i = 0; i < productsLiving.length; i++) {
            if (productsLiving[i].name.toLowerCase().indexOf(resultSearch) != -1){
                search1.push(productsLiving[i]);
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
//function sắp xếp
    let count = 0;
    function sortByName() {
        count++;
        
        if(count==2){
           let resultSort = [...productsLiving];
           resultSort.sort((a,b)=>{
            return a.name > b.name ? -1 : 1
           })
          renderproductsLiving(resultSort)
        }else if ( count = 1) {
            let resultSort = [...productsLiving];
            resultSort.sort((a,b)=> {
              return a.name > b.name ? 1 : -1
            })
            renderproductsLiving(resultSort);
        }else if (count==3) {
            renderproductsLiving(productsLiving)
            count = 0;
            return;
        }
        console.log(count);
    }

function logOut() {
    let confirmq = confirm("Bạn có muốn thoát hay không?")
    if (confirmq) {
        localStorage.removeItem("checkLogin")
        window.location.reload();

    }
}
//function xem chi tiết
function xemchitiet(id){
    let element=''
    let productsLiving=JSON.parse(localStorage.getItem('productsLiving'))||[];
    for(let i=0 ;i<productsLiving.length;i++){
        if(id==productsLiving[i].id){
            element=
        
            `
            <div class="card">
            <div class="card-header">
              <span class="material-symbols-outlined card-header__icon ">
                close
              </span>
              <a href=""> <img class="card-header__img" src="${productsLiving[i].image}" alt=""></a>
            </div>
            <div class="card-body">
              <h4 class="card-body__title">
              ${productsLiving[i].name}
              </h4>
                <div id="text" style="height: 110px;overflow:hidden;">
                  <p class="card-body__text" >${productsLiving[i].review}</p>
                </div>
                <button onclick="btn()" class="card-body__btn">Xem thêm</button>
            </div>
          </div>

            `
        }

    }
    document.getElementById('asd').innerHTML=element

    document.getElementsByClassName("card")[0].style.display = "block";
    document.getElementsByClassName(" card-header__icon")[0].addEventListener("click", () => {
    document.getElementsByClassName("card")[0].style.display = "none";
    })
}

function myFunction(text) {
    var notification = document.getElementById("snackbar");
    notification.innerHTML = text;
    notification.className = "show";
    setTimeout(function () { notification.className = notification.className.replace("show", ""); }, 4000);
}
function btn(){
   document.getElementById("text").style.height="300px"
}