// let productsIntroduce = JSON.parse(localStorage.getItem("productsIntroduce")) || [];
// let users = JSON.parse(localStorage.getItem("users")) || [];
// let checkLogin = localStorage.getItem("checkLogin");
// if(checkLogin){
//     document.getElementsByClassName("login")[0].style.display="none";
//     document.getElementsByClassName("register")[0].style.display = "none";
//     document.getElementsByClassName("person")[0].style.display = "block";

// }
// function renderproductsIntroduce() {
//     let element2 = "";
 
//         for (let i = 0; i <productsIntroduce.length; i++) {
//             element2 +=
//                 `
               
//                 <div class="header__container">
//                     <div>
//                         <p class="p">${productsIntroduce[i].text}</p>
//                     </div>
//                     <div>
//                         <img src="${productsIntroduce[z].image}" alt="">
//                     </div>
//                </div>
//                <div class="header__container2">
//                      <div>
//                      <img src="${productsIntroduce[z].image}" alt="">
//                      </div>
            
//                      <div>
                        
//                      <p class="p">${productsIntroduce[i].text1}</p>
//                         </p>
//                     </div>
               
//                </div>
//                <div class="header__container3">
//                      <div>
                        
//                      <p class="p">${productsIntroduce[i].text2}</p>
//                      </div>
//                     <div>
//                     <img src="${productsIntroduce[z].image}" alt="">
//                     </div>
//                </div>
          
//                 `
//         }
       
        
//     }
   
//     document.getElementsByClassName("c")[0].innerHTML = element2;

// renderproductsIntroduce();