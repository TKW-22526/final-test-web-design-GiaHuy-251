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
    link: "chi-tiet.html" 
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
    link: "chi-tiet.html" 
},
{
    id:"sp11",
    name: "Ngựa vằn",
    tenkh: " Equus quagga ",
    description: " Có sọc đen trắng đặc trưng.",
    tt:" Sống theo bầy, ăn cỏ.",
    mt: "Đồng cỏ",
    ta: "Cỏ.",
    bt: "Gần bị đe dọa.",
    image: "../assets/nguavan.jpg",
    link: "chi-tiet.html" 

},

  {
    id: "sp12",
    name: "Lạc đà một bướu",
    tenkh: "Camelus dromedarius",
    description: "Một bướu chứa mỡ.",
    tt: "Chịu hạn tốt.",
    mt: "Sa mạc",
    ta: "Cỏ, lá",
    bt: "Ít quan tâm",
    image: "../assets/lacda.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp13",
    name: "Linh dương",
    tenkh: "Antelope",
    description: "Thân thon, chạy nhanh.",
    tt: "Sống theo đàn.",
    mt: "Đồng cỏ",
    ta: "Cỏ",
    bt: "Tùy loài",
    image: "../assets/linhduong.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp14",
    name: "Hươu sao",
    tenkh: "Cervus nippon",
    description: "Lông có đốm trắng.",
    tt: "Hiền lành.",
    mt: "Rừng",
    ta: "Cỏ, lá",
    bt: "Ít quan tâm",
    image: "../assets/huousao.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp15",
    name: "Nai",
    tenkh: "Rusa unicolor",
    description: "Thân lớn, gạc phát triển.",
    tt: "Hoạt động sáng sớm.",
    mt: "Rừng",
    ta: "Thực vật",
    bt: "Sẽ nguy cấp",
    image: "../assets/nai.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp16",
    name: "Khỉ đuôi dài",
    tenkh: "Macaca fascicularis",
    description: "Đuôi dài, nhanh nhẹn.",
    tt: "Sống bầy đàn.",
    mt: "Rừng",
    ta: "Quả, côn trùng",
    bt: "Ít quan tâm",
    image: "../assets/khiduoidai.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp17",
    name: "Khỉ mặt đỏ",
    tenkh: "Macaca arctoides",
    description: "Mặt đỏ, thân chắc.",
    tt: "Sống theo nhóm.",
    mt: "Rừng",
    ta: "Trái cây",
    bt: "Sắp nguy cấp",
    image: "../assets/khimatdo.webp",
    link: "chi-tiet.html"
  },
  {
    id: "sp19",
    name: "Vượn má vàng",
    tenkh: "Nomascus gabriellae",
    description: "Lông vàng đen, hót vang.",
    tt: "Sống theo cặp.",
    mt: "Rừng",
    ta: "Quả",
    bt: "Nguy cấp",
    image: "../assets/vuonmavang.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp20",
    name: "Đười ươi",
    tenkh: "Pongo pygmaeus",
    description: "Tay dài, lông đỏ.",
    tt: "Sống trên cây.",
    mt: "Rừng mưa",
    ta: "Quả",
    bt: "Cực kỳ nguy cấp",
    image: "../assets/duoiuoi.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp21",
    name: "Tinh tinh",
    tenkh: "Pan troglodytes",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt với môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/tinhtinh.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp22",
    name: "Voọc bạc",
    tenkh: "Trachypithecus germaini",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt với môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/voocvoocbac.jpg",
    link: "chi-tiet.html"
  },
  
  {
    id: "sp24",
    name: "Rái cá",
    tenkh: "Lutra lutra",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt với môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/raica.webp",
    link: "chi-tiet.html"
  },
  {
    id: "sp25",
    name: "Nhím",
    tenkh: "Hystrix brachyura",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt với môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/nhim.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp26",
    name: "Sóc đỏ",
    tenkh: "Sciurus vulgaris",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt với môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/socdo.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp27",
    name: "Thỏ",
    tenkh: "Oryctolagus cuniculus",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt with môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/tho.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp28",
    name: "Cá sấu Xiêm",
    tenkh: "Crocodylus siamensis",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt với môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/casau.jpeg",
    link: "chi-tiet.html"
  },
  {
    id: "sp29",
    name: "Trăn gấm",
    tenkh: "Malayopython reticulatus",
    description: "Có hình thái đặc trưng của loài, thích nghi tốt với môi trường sống tự nhiên và thường được nuôi bảo tồn trong thảo cầm viên.",
    tt: "Hoạt động, kiếm ăn và sinh sản theo đặc điểm sinh học của loài; góp phần duy trì cân bằng hệ sinh thái.",
    mt: "Phụ thuộc từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được quan tâm bảo tồn ở nhiều khu bảo tồn và vườn thú.",
    image: "../assets/trangam.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp30",
    name: "Rắn hổ mang",
    tenkh: "Naja naja",
    description: "Dễ nhận biết nhờ đặc điểm hình thái riêng, thích nghi tốt với môi trường sống.",
    tt: "Có hành vi kiếm ăn và sinh sản đặc trưng của loài.",
    mt: "Tùy theo loài.",
    ta: "Tùy theo loài.",
    bt: "Được theo dõi và bảo tồn.",
    image: "../assets/ranhomang.jpg",
    link: "chi-tiet.html"
  },
  
  {
    id: "sp32",
    name: "Rùa sao",
    tenkh: "Geochelone elegans",
    description: "Dễ nhận biết nhờ đặc điểm hình thái riêng, thích nghi tốt với môi trường sống.",
    tt: "Có hành vi kiếm ăn và sinh sản đặc trưng của loài.",
    mt: "Tùy theo loài.",
    ta: "Tùy theo loài.",
    bt: "Được theo dõi và bảo tồn.",
    image: "../assets/rua.webp",
    link: "chi-tiet.html"
  },
  {
    id: "sp33",
    name: "Đà điểu",
    tenkh: "Struthio camelus",
    description: "Dễ nhận biết nhờ đặc điểm hình thái riêng, thích nghi tốt với môi trường sống.",
    tt: "Có hành vi kiếm ăn và sinh sản đặc trưng của loài.",
    mt: "Tùy theo loài.",
    ta: "Tùy theo loài.",
    bt: "Được theo dõi và bảo tồn.",
    image: "../assets/dadieu.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp34",
    name: "Công xanh",
    tenkh: "Pavo cristatus",
    description: "Dễ nhận biết nhờ đặc điểm hình thái riêng, thích nghi tốt với môi trường sống.",
    tt: "Có hành vi kiếm ăn và sinh sản đặc trưng của loài.",
    mt: "Tùy theo loài.",
    ta: "Tùy theo loài.",
    bt: "Được theo dõi và bảo tồn.",
    image: "../assets/cong.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp35",
    name: "Hồng hạc",
    tenkh: "Phoenicopterus roseus",
    description: "Dễ nhận biết nhờ đặc điểm hình thái riêng, thích nghi tốt với môi trường sống.",
    tt: "Có hành vi kiếm ăn và sinh sản đặc trưng của loài.",
    mt: "Tùy theo loài.",
    ta: "Tùy theo loài.",
    bt: "Được theo dõi và bảo tồn.",
    image: "../assets/honghac.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp36",
    name: "Thiên nga",
    tenkh: "Cygnus",
    description: "Dễ nhận biết nhờ đặc điểm hình thái riêng, thích nghi tốt với môi trường sống.",
    tt: "Có hành vi kiếm ăn và sinh sản đặc trưng của loài.",
    mt: "Tùy theo loài.",
    ta: "Tùy theo loài.",
    bt: "Được theo dõi và bảo tồn.",
    image: "../assets/thiennga.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp37",
    name: "Bồ nông",
    tenkh: "Pelecanus",
    description: "Dễ nhận biết nhờ đặc điểm hình thái riêng, thích nghi tốt với môi trường sống.",
    tt: "Có hành vi kiếm ăn và sinh sản đặc trưng của loài.",
    mt: "Tùy theo loài.",
    ta: "Tùy theo loài.",
    bt: "Được theo dõi và bảo tồn.",
    image: "../assets/bonong.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp38",
    name: "Vẹt Macaw",
    tenkh: "Ara",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/vec.jpg",
    link: "chi-tiet.html"
  },
  
  
  {
    id: "sp41",
    name: "Chim trĩ đỏ",
    tenkh: "Chrysolophus pictus",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/chimtrido.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp42",
    name: "Gà lôi trắng",
    tenkh: "Lophura nycthemera",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/galoi.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp43",
    name: "Vịt trời",
    tenkh: "Anas platyrhynchos",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/vittroi.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp44",
    name: "Ngỗng",
    tenkh: "Anser",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/ngong.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp45",
    name: "Cò trắng",
    tenkh: "Ardea alba",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/cotrang.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp46",
    name: "Khỉ đầu chó",
    tenkh: "Papio",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/khidaucho.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp57",
    name: "Lợn rừng",
    tenkh: "Sus scrofa",
    description: "Có đặc điểm nhận dạng nổi bật và giá trị trong công tác giáo dục, bảo tồn.",
    tt: "Tùy loài, có thể sống theo đàn hoặc đơn độc; kiếm ăn và sinh sản theo mùa.",
    mt: "Phù hợp với điều kiện sinh thái của từng loài.",
    ta: "Phụ thuộc từng loài.",
    bt: "Được bảo tồn tại nhiều vườn thú và khu bảo tồn.",
    image: "../assets/lorung.jpg",
    link: "chi-tiet.html"
  },

  {
    id: "sp53",
    name: "Cây me",
    tenkh: "Tamarindus indica",
    description: "Là cây thân gỗ hoặc cây lâu năm có giá trị cảnh quan và sinh thái.",
    dt: "Phát triển tốt trong khí hậu nhiệt đới, cần ánh sáng và đất phù hợp.",
    mts: "Công viên, rừng hoặc khu bảo tồn.",
    vt: "Tạo bóng mát, hấp thụ CO₂, góp phần bảo tồn đa dạng sinh học.",
    image: "../assets/me.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp54",
    name: "Cây xà cừ",
    tenkh: "Khaya senegalensis",
    description: "Là cây thân gỗ hoặc cây lâu năm có giá trị cảnh quan và sinh thái.",
    dt: "Phát triển tốt trong khí hậu nhiệt đới, cần ánh sáng và đất phù hợp.",
    mts: "Công viên, rừng hoặc khu bảo tồn.",
    vt: "Tạo bóng mát, hấp thụ CO₂, góp phần bảo tồn đa dạng sinh học.",
    image: "../assets/cayxacu.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp55",
    name: "Cây lim xẹt",
    tenkh: "Peltophorum pterocarpum",
    description: "Là cây thân gỗ hoặc cây lâu năm có giá trị cảnh quan và sinh thái.",
    dt: "Phát triển tốt trong khí hậu nhiệt đới, cần ánh sáng và đất phù hợp.",
    mts: "Công viên, rừng hoặc khu bảo tồn.",
    vt: "Tạo bóng mát, hấp thụ CO₂, góp phần bảo tồn đa dạng sinh học.",
    image: "../assets/caylimxet.webp",
    link: "chi-tiet.html"
  },
  {
    id: "sp56",
    name: "Cây bằng lăng",
    tenkh: "Lagerstroemia speciosa",
    description: "Là cây thân gỗ hoặc cây lâu năm có giá trị cảnh quan và sinh thái.",
    dt: "Phát triển tốt trong khí hậu nhiệt đới, cần ánh sáng và đất phù hợp.",
    mts: "Công viên, rừng hoặc khu bảo tồn.",
    vt: "Tạo bóng mát, hấp thụ CO₂, góp phần bảo tồn đa dạng sinh học.",
    image: "../assets/banglang.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp57",
    name: "Cây phượng vĩ",
    tenkh: "Delonix regia",
    description: "Là cây thân gỗ hoặc cây lâu năm có giá trị cảnh quan và sinh thái.",
    dt: "Phát triển tốt trong khí hậu nhiệt đới, cần ánh sáng và đất phù hợp.",
    mts: "Công viên, rừng hoặc khu bảo tồn.",
    vt: "Tạo bóng mát, hấp thụ CO₂, góp phần bảo tồn đa dạng sinh học.",
    image: "../assets/phuongvy.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp59",
    name: "Cây đa",
    tenkh: "Ficus benghalensis",
    description: "Là cây thân gỗ hoặc cây lâu năm có giá trị cảnh quan và sinh thái.",
    dt: "Phát triển tốt trong khí hậu nhiệt đới, cần ánh sáng và đất phù hợp.",
    mts: "Công viên, rừng hoặc khu bảo tồn.",
    vt: "Tạo bóng mát, hấp thụ CO₂, góp phần bảo tồn đa dạng sinh học.",
    image: "../assets/cayda.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp60",
    name: "Cây bồ đề",
    tenkh: "Ficus religiosa",
    description: "Là cây thân gỗ hoặc cây lâu năm có giá trị cảnh quan và sinh thái.",
    dt: "Phát triển tốt trong khí hậu nhiệt đới, cần ánh sáng và đất phù hợp.",
    mts: "Công viên, rừng hoặc khu bảo tồn.",
    vt: "Tạo bóng mát, hấp thụ CO₂, góp phần bảo tồn đa dạng sinh học.",
    image: "../assets/bode.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp61",
    name: "Cây cau vua",
    tenkh: "Roystonea regia",
    description: "Có hình thái đặc trưng, được trồng làm cảnh hoặc bảo tồn.",
    dt: "Sinh trưởng tốt trong điều kiện phù hợp về đất, nước và ánh sáng.",
    mts: "Công viên, vườn thực vật hoặc tự nhiên.",
    vt: "Tăng giá trị cảnh quan, cải thiện môi trường và góp phần bảo tồn thực vật.",
    image: "../assets/cauvua.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp62",
    name: "Cây dừa",
    tenkh: "Cocos nucifera",
    description: "Có hình thái đặc trưng, được trồng làm cảnh hoặc bảo tồn.",
    dt: "Sinh trưởng tốt trong điều kiện phù hợp về đất, nước và ánh sáng.",
    mts: "Công viên, vườn thực vật hoặc tự nhiên.",
    vt: "Tăng giá trị cảnh quan, cải thiện môi trường và góp phần bảo tồn thực vật.",
    image: "../assets/caydua.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp63",
    name: "Tre",
    tenkh: "Bambusa",
    description: "Có hình thái đặc trưng, được trồng làm cảnh hoặc bảo tồn.",
    dt: "Sinh trưởng tốt trong điều kiện phù hợp về đất, nước và ánh sáng.",
    mts: "Công viên, vườn thực vật hoặc tự nhiên.",
    vt: "Tăng giá trị cảnh quan, cải thiện môi trường và góp phần bảo tồn thực vật.",
    image: "../assets/tre.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp64",
    name: "Trúc",
    tenkh: "Bambusoideae",
    description: "Có hình thái đặc trưng, được trồng làm cảnh hoặc bảo tồn.",
    dt: "Sinh trưởng tốt trong điều kiện phù hợp về đất, nước và ánh sáng.",
    mts: "Công viên, vườn thực vật hoặc tự nhiên.",
    vt: "Tăng giá trị cảnh quan, cải thiện môi trường và góp phần bảo tồn thực vật.",
    image: "../assets/truc.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp65",
    name: "Lan",
    tenkh: "Orchidaceae",
    description: "Có hình thái đặc trưng, được trồng làm cảnh hoặc bảo tồn.",
    dt: "Sinh trưởng tốt trong điều kiện phù hợp về đất, nước và ánh sáng.",
    mts: "Công viên, vườn thực vật hoặc tự nhiên.",
    vt: "Tăng giá trị cảnh quan, cải thiện môi trường và góp phần bảo tồn thực vật.",
    image: "../assets/lan.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp66",
    name: "Sen",
    tenkh: "Nelumbo nucifera",
    description: "Có hình thái đặc trưng, được trồng làm cảnh hoặc bảo tồn.",
    dt: "Sinh trưởng tốt trong điều kiện phù hợp về đất, nước và ánh sáng.",
    mts: "Công viên, vườn thực vật hoặc tự nhiên.",
    vt: "Tăng giá trị cảnh quan, cải thiện môi trường và góp phần bảo tồn thực vật.",
    image: "../assets/sen.jpg",
    link: "chi-tiet.html"
  },
  {
    id: "sp68",
    name: "Vạn tuế",
    tenkh: "Cycas revoluta",
    description: "Có hình thái đặc trưng, được trồng làm cảnh hoặc bảo tồn.",
    dt: "Sinh trưởng tốt trong điều kiện phù hợp về đất, nước và ánh sáng.",
    mts: "Công viên, vườn thực vật hoặc tự nhiên.",
    vt: "Tăng giá trị cảnh quan, cải thiện môi trường và góp phần bảo tồn thực vật.",
    image: "../assets/vantue.webp",
    link: "chi-tiet.html"
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
  
    item.style.display = "flex";
    item.style.flexDirection = "column";
    item.style.justifyContent = "space-between"; 
    item.style.alignItems = "center";
    item.style.textAlign = "center";
    item.style.flex = "1 1 calc(25% - 40px)";
    item.style.minWidth = "220px"; 

    // 3. Tạo khung chứa ảnh (Đã sửa class thành "image-box")
    const containerImage = document.createElement("div");
    containerImage.setAttribute("class", "image-box");

    // Tạo ảnh
    const img = document.createElement("img");
    img.setAttribute("src", obj.image);
    img.setAttribute("alt", "ảnh");
    img.setAttribute("style", "width: 100%; max-width: 150px; border-radius: 50%");
    img.setAttribute("style", "width: 120px; height: 120px; object-fit: cover; border-radius: 50%");
    
    // Đưa ảnh vào khung chứa ảnh
    containerImage.appendChild(img);

    // 4. Tạo container chứa thông tin sản phẩm (class="info")
    const containerInfo = document.createElement("div");
    containerInfo.setAttribute("class", "info");

    containerInfo.style.display = "flex";
    containerInfo.style.flexDirection = "column";
    containerInfo.style.flexGrow = "1"; 
    containerInfo.style.justifyContent = "space-between";
    containerInfo.style.width = "100%";

    // Tạo <p> chứa tên sản phẩm
    const name = document.createElement("p");
    name.innerHTML = obj.name;

    
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