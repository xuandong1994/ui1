const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
let users = JSON.parse(localStorage.getItem("users")) || [];
// function sản phẩm 
let productsLiving = JSON.parse(localStorage.getItem("productsLiving")) || [];
function loadProducts() {
    let element1 = "";
    for (let i = 0; i < productsLiving.length; i++) {
        element1 +=
            `
         <tr>
             <td>${i + 1}</td>
             <td>  <img class="img" src="${productsLiving[i].image}" alt=""</td>
             <td style = "width:400px;"> ${productsLiving[i].review}
             <td> <span class="rendername" href=""> ${productsLiving[i].name}</span></td>
             <td> ${VND.format(productsLiving[i].price)}</td>
             <td>
                 <button onclick ="editProducts(${productsLiving[i].id})">Sửa</button>
                 <button onclick ="deleteProducts(${productsLiving[i].id})">Xóa</button>
             </td>
         </tr>
                 
                 `
    }
    document.getElementById("tbody").innerHTML = element1;
}
loadProducts()
//function xóa
function deleteProducts(id) {
    // Tìm sản phẩm có id tương ứng trong mảng productsLiving
    const index = productsLiving.findIndex((product) => product.id === id);
    if (index !== -1) {
        productsLiving.splice(index, 1);
        localStorage.setItem("productsLiving", JSON.stringify(productsLiving));
        loadProducts();
    }
}
//function thêm sản phẩm 
function saveProduct() {
    let productName = document.getElementById("productName").value;
    let productImage = document.getElementById("productImage").value;
    let productPrice = document.getElementById("productPrice").value;
    let textarea = document.getElementById("textarea").value

    let newProduct = {
        id: productsLiving.length + 1,
        name: productName,
        image: productImage,
        price: productPrice,
        review: textarea
    };

    productsLiving.unshift(newProduct);
    localStorage.setItem("productsLiving", JSON.stringify(productsLiving));
    document.getElementById("productName").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("textarea").value = "";
    loadProducts();

}
//function ediet 
function editProducts(id) {
    localStorage.setItem("idUser", id);
    document.getElementById("saveProductButton").innerHTML = "save Edit";
    for (let i = 0; i < productsLiving.length; i++) {
        if (productsLiving[i].id == id) {

            document.getElementById("productName").value = productsLiving[i].name;
            document.getElementById("productImage").value = productsLiving[i].image;
            document.getElementById("productPrice").value = productsLiving[i].price;
            document.getElementById("textarea").value = productsLiving[i].review
            productsLiving.splice(i, 1)

        }


    }
}


