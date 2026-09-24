/*
 * Dữ liệu sự kiện Trung Thu — trang trung-thu.html đọc file này.
 * Chỉ cần sửa file này, không cần đụng vào HTML.
 *
 * ── THÊM FANART ──────────────────────────────────────────────
 * 1. Bỏ ảnh vào thư mục  fanart/   (jpg, png hoặc webp; nên < 1MB)
 * 2. Thêm một dòng vào danh sách "fanarts" bên dưới, ví dụ:
 *
 *    { tacGia: "Mây Chiều", kenh: "@maychieu", anh: "fanart/may-chieu.jpg",
 *      link: "https://facebook.com/...", qua: 50000, daGui: false },
 *
 *    tacGia : tên hiển thị của người vẽ (bắt buộc)
 *    anh    : đường dẫn tới ảnh trong thư mục fanart/ (bắt buộc)
 *    kenh   : tên kênh / tài khoản của họ (không bắt buộc)
 *    link   : link bài đăng gốc, phải bắt đầu bằng https:// (không bắt buộc)
 *    tieuDe : tên tranh (không bắt buộc)
 *    qua    : số tiền quà, mặc định 50000
 *    daGui  : true khi đã gửi quà, false khi chưa
 *
 * ── THÊM NGƯỜI XEM THƯỜNG XUYÊN ──────────────────────────────
 *    { ten: "Tên Discord", qua: 20000, daGui: false },
 *
 * Lưu ý: KHÔNG ghi số tài khoản, số điện thoại hay thông tin MoMo ở đây.
 * File này công khai với mọi người xem trang.
 */

window.TRUNG_THU_EVENT = {
  hanNopTranh: "24/9",
  hanGuiQua: "30/9",

  fanarts: [
    // { tacGia: "Tên người vẽ", kenh: "@kenh", anh: "fanart/ten-file.jpg", link: "", qua: 50000, daGui: false },
  ],

  regulars: [
    // { ten: "Tên Discord", qua: 20000, daGui: false },
  ],

  // Nhạc riêng (không bắt buộc). Trang đã có sẵn 3 bản nhạc tự tạo.
  // Muốn thêm bài mp3 của bạn: bỏ file vào repo rồi thêm một dòng, ví dụ:
  //   { ten: "Celeste", moTa: "nhạc nền stream", file: "celeste.mp3" },
  nhac: [
  ]
};
