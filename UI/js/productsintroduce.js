let productsIntroduce=[
    {
        text:"Coastal - miền duyên hải, hứa hẹn sẽ mang đến cảm giác mát lành của biển xanh, cát vàng và gió biển tươi mới cho không gian của bạn. Ngôn ngữ thiết kế của Coastal kết hợp đường nét mềm mại và tự nhiên, chất vải xanh tươi mát mang màu sắc của biển cùng nét vững chãi, tông gỗ ấm áp tạo nên sự tương phản hài hòa tựa như biển rộng bí ẩn và đất liền thân thuộc. Những đường nét tinh khôi ấy tạo nên một tổng thể phòng khách hài hòa, ấm cúng.",
        image:"../asset/image/phongkhach1.jpg",
        image:"../asset/image/phongkhach1.jpg",
        text1:"Sofa Coastal với hình khối lạ mắt, gồm những đường cong bồng bềnh, theo xu hướng Modern Organic, mang lại cảm giác êm ái, thư giãn. Bàn nước Coastal với 2 bề mặt trên và dưới mang hai tông màu gỗ khác nhau, tạo hiệu ứng thị giác tăng chiều sâu.",
        text2:"Bên cạnh sofa, bạn có thể đặt thêm chiếc bàn bên với kiểu dáng tối giản để bài trí các vật trang trí như bình hoa, tượng, khung hình, đèn trang trí,… Bàn bên Coastal mang đường nét thanh lịch cùng màu sắc nhã nhặn sẽ làm nổi bật vẻ đẹp của sofa và giúp cho các sản phẩm trong không gian phòng khách được kết nối hài hòa với nhauĐể tăng thêm cảm giác mát lành của biển cả, ngoài việc bài trí thêm các chậu cây xanh ở góc phòng, bạn nên treo thêm một bức tranh cùng tông màu với sofa. Bên cạnh đó, những chiếc thảm trang trí với tông màu của cát vàng sẽ giúp cho phòng khách của bạn tựa như một bãi biển thu nhỏ, mang đến cảm giác tươi mới và tinh khiết", 
        image:"../asset/image/phongkhach1.jpg",
    },
    {
        text:"Trong phiên bản mới, Jadora khoác lên mình màu sắc trang nhã cùng hoa văn độc đáo, hứa hẹn sẽ là điểm nhấn tuyệt vời cho không gian phòng khách. Với kiểu dáng rộng rãi cùng phần đệm ngồi êm ái, đây sẽ là chốn dừng chân lý tưởng để nằm hoặc ngồi đọc sách và nhâm nhi một tách tràBàn nước Bolero với tông màu ánh đồng cùng ba chân inox màu gold được thiết kế vững chắc, khi kết hợp cùng sofa Jadora sẽ mang đến không gian ngày hè phảng phất không khí cổ điểnThêm một chút sắc xanh cho không gian dịu mát với một bình hoa rực rỡ trên bàn nước Bolero.",
        image:"../asset/image/phongkhach2.jpg",
        image:"../asset/image/phongkhach2.jpg",
        text1:"Để tạo tính liên kết giữa các sản phẩm trong cùng một không gian, có thể đặt thêm một chiếc thảm trang trí với màu sắc hài hòa. Những khoảng tường trống sẽ là vị trí tuyệt vời để bài trí khung gương nhằm tạo sự tương phản và tăng chiều sâu cho không gian phòng khách",
        text2:"Tông màu của Jadora là sự liên tưởng giữa thiên nhiên cùng ánh mặt trời, đó là sự kết hợp hoàn hảo của màu sắc tươi mát và sự ấm cúng. Sản phẩm dễ dàng phối hợp với các thiết kế khác như bàn nước hoặc bàn bên để tạo nên không gian sống độc đáo." ,
        image:"../asset/image/phongkhach2.jpg",
    },
    {
        text:"Cuốn hút ở mọi góc nhìn với sofa Bolero màu xanh, thiết kế và kiểu dáng hiện đại, êm ái. Chiếc sofa là điểm nhấn kết hợp với bộ 3 bàn linh động, gọn nhẹ giúp không gian trở nên ấn tượng hơn.",
        image:"../asset/image/phongkhach3.jpg",
        image:"../asset/image/phongkhach3.jpg",
        text1:"Với màu xanh chủ đạo, nhấn nhá thêm màu đen của phần chân và chút màu gỗ nhẹ điểm xuyết cho không gian.",
        text2:"Điểm đặc biệt trong những chiếc sofa Nhà Xinh chính là chi tiết chất lượng, gọn nhẹ để bạn có thể dễ dàng thay đổi vị trí. Hoàn thiện sắc xảo và tinh tế ở mọi chi tiết." ,
        image:"../asset/image/phongkhach3.jpg",
    },
]
function createId() {
    return Math.floor(Math.random()*9999999999999 +new Date().getMilliseconds())
}
for (let i = 0; i < productsIntroduce.length; i++) {
    productsIntroduce[i].id=createId();
}
console.log(productsIntroduce);
localStorage.setItem("productsIntroduce",JSON.stringify(productsIntroduce));