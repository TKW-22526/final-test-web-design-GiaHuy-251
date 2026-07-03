const products=[
{
    id:"sp01",
    name: "Hổ Đông Dương",
    tenkh: "Panthera tigris corbetti",
    description: "Thú ăn thịt lớn với bộ lông vàng cam và sọc đen. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Sống đơn độc, săn mồi chủ yếu vào chiều tối và ban đêm.",
    mt: "Rừng nhiệt đới",
    ta: "Hươu, lợn rừng",
    bt: "Nguy cấp",
    image: "../assets/ho.jpg",
    link: "chi-tiet.html"
},
 {
    id:"sp02",
    name: "Sư tử châu Phi",
    tenkh: "Panthera leo",
    description: "Cơ thể khỏe, con đực có bờm. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Sống theo đàn, phối hợp săn mồi.",
    mt: "Đồng cỏ",
    ta: "Động vật có vú.",
    bt: "Sắp nguy cấp",
    image: "../assets/sutu.jpg",
    link: "chi-tiet.html" 
},
{
    id:"sp03",
    name: "Báo hoa mai",
    tenkh: "Panthera pardus",
    description: "Lông có đốm hoa đặc trưng. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Leo trèo giỏi, săn mồi đơn độc.",
    mt: "Rừng.",
    ta: "Thịt ",
    bt: "Sắp nguy cấp",
    image: "../assets/baohoamai.webp",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp04",
    name: "Báo đốm",
    tenkh: "Panthera onca",
    description: " Mèo lớn khỏe với đốm hình hoa hồng. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Bơi giỏi, săn phục kích.",
    mt: "Rừng mưa",
    ta: "Thịt.",
    bt: "Sắp nguy cấp",
    image: "../assets/baodom.webp",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp05",
    name: "Gấu ngựa",
    tenkh: "Ursus thibetanus",
    description: "  Có vệt trắng hình chữ V trước ngực. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Kiếm ăn sáng sớm và chiều.",
    mt: "Rừng",
    ta: "Trái cây, côn trùng.",
    bt: "Sắp nguy cấp",
    image: "../assets/gaungua.jpg",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp06",
    name: "Gấu chó",
    tenkh: "Helarctos malayanus",
    description: " Loài gấu nhỏ nhất. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Leo cây giỏi.",
    mt: "Rừng",
    ta: "Mật ong, quả",
    bt: "Sẽ nguy cấp",
    image: "../assets/gaucho.jpg",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp07",
    name: "Voi châu Á",
    tenkh: "Elephas maximus",
    description: " Động vật trên cạn lớn, vòi dài. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Sống theo đàn do con cái dẫn đầu.",
    mt: "Rừng",
    ta: "Cỏ, lá.",
    bt: "Nguy cấp",
    image: "../assets/voi.webp",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp08",
    name: "Hà mã",
    tenkh: "Hippopotamus amphibius",
    description: "Thân to, da dày. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Ban ngày ngâm nước, đêm ăn cỏ.",
    mt: "Sông hồ",
    ta: "Cỏ.",
    bt: "Sắp nguy cấp",
    image: "../assets/hama.jpg",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp09",
    name: "Tê giác trắng",
    tenkh: "Ceratotherium simum",
    description: " Mõm rộng, cơ thể đồ sộ. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:" Ăn cỏ, sống đơn lẻ hoặc nhóm nhỏ.",
    mt: "Đồng cỏ",
    ta: "Cỏ",
    bt: "Gần bị đe dọa",
    image: "../assets/tegiac.png",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
{
    id:"sp10",
    name: "Huơu cao cổ",
    tenkh: " Giraffa camelopardalis",
    description: "Cổ dài nhất trong các loài thú. Thường được nuôi bảo tồn và giáo dục tại các thảo cầm viên.",
    tt:"Ăn lá cây cao, sống theo đàn.",
    mt: "Xavan",
    ta: "Lá cây.",
    bt: "Dễ bị tổn thương.",
    image: "../assets/huou.webp",
    link: "chi-tiet.html" // Đã sửa: Thêm giá trị hợp lệ ở đây thay vì để trống
},
];

function createItem(obj) {
    // 1. Xác định khung chứa 
    const listProducts = document.getElementById("products-list");
    if (!listProducts) return; // Bảo vệ code nếu không tìm thấy thẻ HTML


    // 2. Tạo container cha có class là item
    const item = document.createElement("div");
    item.setAttribute("class", "item");
    item.style.backgroundColor="rgba(147, 226, 100, 0.2)";

    item.style.padding = "20px";
    item.style.borderRadius = "10px";
    item.style.boxSizing = "border-box";
    // Flexbox cho chính item để đẩy nút "Xem chi tiết" luôn nằm dưới đáy bằng nhau
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.justifyContent = "space-between"; 
    item.style.alignItems = "center";
    item.style.textAlign = "center";
    item.style.flex = "1 1 calc(25% - 40px)"; // Chia đều 4 cột (trừ đi khoảng cách gap)
    item.style.minWidth = "220px"; // Đảm bảo trên màn hình nhỏ không bị quá bóp nghẹt

    // 3. Tạo khung chứa ảnh (Đã sửa class thành "image-box")
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image-box");

    // Tạo ảnh
    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", "ảnh con chó");
    img.setAttribute("style", "width: 100%; max-width: 150px; border-radius: 50%");
    img.setAttribute("style", "width: 120px; height: 120px; object-fit: cover; border-radius: 50%");
    
    // Đưa ảnh vào khung chứa ảnh
    containerImage.appendChild(img);

    // 4. Tạo container chứa thông tin sản phẩm (class="info")
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info");

    containerInfo.style.display = "flex";
    containerInfo.style.flexDirection = "column";
    containerInfo.style.flexGrow = "1"; // Giúp phần thông tin tự giãn đều
    containerInfo.style.justifyContent = "space-between";
    containerInfo.style.width = "100%";

    // Tạo <p> chứa tên sản phẩm
    const name = document.createElement("p");
    name.innerHTML = obj.name;

    // Tạo <p> chứa giá sản phẩm (Thêm format VNĐ cho đẹp)
    const tenkh = document.createElement("p");
    tenkh.innerHTML = obj.tenkh;

    // Tạo <p> chứa mô tả
    const description = document.createElement("p");
    description.innerHTML = obj.description;

    // Tạo <a> chứa link chi tiết sản phẩm
    const linkProduct = document.createElement("a");
    linkProduct.innerHTML = "Xem chi tiết";
    linkProduct.innerText = " Xem chi tiết";
    linkProduct.href = `${obj.link}?masp=${obj.id}`;
    
    // Dùng luôn thuộc tính link từ object
    linkProduct.setAttribute("class", "btn btn-info");
    
    // Gán các thẻ con vào khung chứa info
    containerInfo.appendChild(name);
    containerInfo.appendChild(tenkh);
    containerInfo.appendChild(description);
    containerInfo.appendChild(linkProduct);

    // 5. Thêm khung ảnh và khung info vào item cha
    item.appendChild(containerImage);
    item.appendChild(containerInfo);

    // 6. Thêm item vào list-product trên giao diện
    listProducts.appendChild(item);
}

// 7. Gọi hàm để hiển thị sản phẩm ra màn hình

function loadAllProducts(objArray)
{
    const listProducts = document.getElementById("products-list");

    listProducts.style.display= "flex";
    listProducts.style.gap= "40px";
    listProducts.style.flexWrap= "wrap";

    let i;
    for(i = 0; i<objArray.length; i++)
    {
        createItem (objArray[i]);
    }

}