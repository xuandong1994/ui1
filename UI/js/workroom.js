let start;
let end;
let perPage =12;
let currenPage = 1;
let productsWorkroom = JSON.parse(localStorage.getItem("productsWorkroom")) || [];
let totalPage = Math.ceil(productsWorkroom.length / perPage);
// function convert sang tiền Việt
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
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
    renderproductsWorkroom();
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

function renderproductsWorkroom() {
    let elementwork = "";
    for (let i = 0; i <productsWorkroom.length; i++) {
        if (i >= start && i < end)
        elementwork +=
            `
               <div class="product__itemwork">

                    <div class="product__item--imagework">
                        <img src="${productsWorkroom[i].image}" alt="">
                    </div>

                    <div class="product__item--inforwork">
                        <div class="product__item--namework">
                            ${productsWorkroom[i].name}
                        </div>

                        <div class="product__item--pricework">
                         ${VND.format(productsWorkroom[i].price)}
                            <span onclick="addToCart(${productsWorkroom[i].id})" class="material-symbols-outlined choose-cart">
                                shopping_cart_checkout
                            </span>
                        </div>
                    </div>
                   
                </div> 
            `
    }
    document.getElementsByClassName("productWorkroom")[0].innerHTML = elementwork;
}
renderproductsWorkroom();