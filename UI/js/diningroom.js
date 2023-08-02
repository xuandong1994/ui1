let start;
let end;
let perPage = 9;
let currenPage = 1;
let productsDining = JSON.parse(localStorage.getItem("productsDining")) || [];
let totalPage = Math.ceil(productsDining.length / perPage);
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
    renderproductsDining();
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

function renderproductsDining() {
    let element2 = "";
    for (let i = 0; i <productsDining.length; i++) {
        if (i >= start && i < end)
        element2 +=
            `
               <div class="product__itemtow">

                    <div class="product__item--imagetow">
                        <img src="${productsDining[i].image}" alt="">
                    </div>

                    <div class="product__item--infortow">
                        <div class="product__item--nametow">
                            ${productsDining[i].name}
                        </div>

                        <div class="product__item--pricetow">
                         ${VND.format(productsDining[i].price)}
                            <span onclick="addToCart(${productsDining[i].id})" class="material-symbols-outlined choose-cart">
                                shopping_cart_checkout
                            </span>
                        </div>
                    </div>
                   
                </div> 
            `
    }
    document.getElementsByClassName("productsDining")[0].innerHTML = element2;
}
renderproductsDining();