const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
let idUser = localStorage.getItem("checkLogin") || [];
let users = JSON.parse(localStorage.getItem("users")) || [];
//funciton login cart
let checkLogin = localStorage.getItem("checkLogin");
if (checkLogin) {
    document.getElementsByClassName("login")[0].style.display = "none";
    document.getElementsByClassName("register")[0].style.display = "none";
    document.getElementsByClassName("person")[0].style.display = "block";

}
//function render
function rederCarts() {
    let total = 0;
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            // lấy giỏ hàng ra users[i].cart
            let element = "";
            let result = users[i].cart;

            for (let j = 0; j < result.length; j++) {
                total += result[j].price * result[j].quantity;
                element +=
                    `
                    <tr>
                        <td>${j + 1}</td>
                        <td >
                            <img class="img" src="${result[j].image}" alt=""> 
                        </td>
                        <td>
                            ${result[j].name}
                        </td>
                        <td>${VND.format(result[j].price)}</td>
                        <td class = "action-quantity">
                            <span onclick="remove(${result[j].id})" class="material-symbols-outlined">
                            remove
                            </span>
                            ${result[j].quantity}
                            <span onclick="increaseQuantity(${result[j].id})" class="material-symbols-outlined">
                            add
                            </span>
                        </td>
                        <td>
                            ${VND.format(result[j].price * result[j].quantity)}
                        </td>
                        <td> 
                            <span onclick = "detelea(${result[j].id}) " class="material-symbols-outlined">
                            delete
                            </span>
                        </td>
                       
                    </tr>
                `

            }
            document.getElementById("tbody").innerHTML = element;
            document.getElementById("total").innerHTML = `<button class = "intomoney">Tổng tiền = ${VND.format(total)} </button> <button onclick="toltalo" class=btnntb>Thanh toán</button> `;

        }

    }
}
rederCarts();
//funciton xóa
function detelea(idProduct) {
    let resultConfirm = confirm("Bạn muốn xóa sản phẩm hay không")
    if (!resultConfirm) {
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == idProduct) {
                    users[i].cart.splice(j, 1);
                    localStorage.setItem("users", JSON.stringify(users));
                    rederCarts()
                }

            }
        }

    }
}

function increaseQuantity(idProduct) {
    //lấy giỏ hàng ra
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == idProduct) {
                    users[i].cart[j].quantity = ++users[i].cart[j].quantity;
                    localStorage.setItem("users", JSON.stringify(users));
                    rederCarts();
                    return;
                }
            }
        }

    }
}
//function tìm kiếm
function searchProducts() {
    let resultSearch = document.getElementsByClassName("header__search-ipt")[0].value.toLowerCase();
    if (resultSearch != "") {
        let search1 = [];
        for (let i = 0; i < productsLiving.length; i++) {
            if (productsLiving[i].name.toLowerCase().indexOf(resultSearch) != -1) {
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
//function giảm số lượng sản  phẩm
function remove(idProduct) {
    for (let i = 0; i < users.length; i++) {
        if (users[i].idUser == idUser) {
            for (let j = 0; j < users[i].cart.length; j++) {
                if (users[i].cart[j].id == idProduct) {
                    if (users[i].cart[j].quantity == 1) {
                        return;
                    }
                    users[i].cart[j].quantity = --users[i].cart[j].quantity;
                    localStorage.setItem("users", JSON.stringify(users));
                    rederCarts();
                    return;
                }
            }
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
showQuantity()
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
    setTimeout(function () { notification.className = notification.className.replace("show", ""); }, 4000);
}
