function login(e) {
    e.preventDefault();
    let users=JSON.parse(localStorage.getItem("users"))||[];
    let email=document.getElementById("email").value;
     let password = document.getElementById("password").value;
    if (email === "admin@gmail.com" && password ==="12345") {
        let adminUser = users.find((item) => {
            return item.email = email;
        } ) ;
        adminUser.isAdmin = true;
        localStorage.setItem("users",JSON.stringify(users)) 
        window.location.href = "../html/admin1.html" 
    }else {
        for (let i = 0; i < users.length; i++) {
            if(users[i].email==email && users[i].password==password){
                localStorage.setItem("checkLogin",users[i].idUser)
                window.location.href="../index.html";
                return;
            }
            
        }  
    }
    
     myFunction("Tài khoản không tồn  tại!");

 }
 function myFunction(text) {
    var notification = document.getElementById("loginsnackbar");
    notification.innerHTML=text;
    notification.className = "show";
    setTimeout(function(){ notification.className = notification.className.replace("show", ""); }, 4000);
  }
