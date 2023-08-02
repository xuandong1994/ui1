let users = JSON.parse(localStorage.getItem("users")) || [];

function renderUser(param) {
    let element = ""
    for (let i = 0; i < param.length; i++) {
        element +=
            `
       <tr i>
            <td>${i + 1}</td>
            <td>${param[i].email}</td>
            <td >
                <button class="bnt" onclick = "removeUsers(${param[i].idUser})">Xóa</button>
            </td>
        </tr>
       `

    }
    document.getElementById("tbody").innerHTML = element;
}
renderUser(users)
//funtion xóa
function removeUsers(id) {
    users = users.filter(function (user) {
        return user.idUser != id;
    });
    localStorage.setItem("users", JSON.stringify(users));
    renderUser(users);
}
//function tìm kiếm user
function searchUser() {
    let resultSearch = document.getElementsByClassName("search")[0].value;
    let search = [];
    for (let i = 0; i < users.length; i++) {
        if (users[i].email.indexOf(resultSearch) !== -1) {
            search.push(users[i])
        }


    }
    renderUser(search)
}