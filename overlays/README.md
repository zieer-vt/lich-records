# Zi Eer — Retro CRT Stream Scenes

Ba màn hình chờ cho OBS, phong cách TV CRT đỏ retro, có animation:

| File | Màn hình |
|---|---|
| `starting-soon.html` | Starting Soon (có đồng hồ đếm ngược) |
| `brb.html` | Be Right Back |
| `ending.html` | Stream Has Ended |

Canvas cố định 1920×1080, tự co giãn theo kích thước Browser Source. Font đã nhúng sẵn trong `fonts/`, không cần mạng.

## Thêm vào OBS

1. **Sources → + → Browser**.
2. Tích **Local file**, chọn file `.html` (giữ nguyên cả thư mục `overlays/`, đừng tách file ra).
3. Width `1920`, Height `1080`.
4. Tích **Refresh browser when scene becomes active** để mỗi lần chuyển cảnh, TV "bật nguồn" lại và đồng hồ đếm ngược chạy lại từ đầu.

## Tuỳ chỉnh qua URL

Muốn dùng tham số thì bỏ tích *Local file* và dán vào ô **URL**, ví dụ:

```
file:///D:/stream/overlays/starting-soon.html?t=10&msg=LOADING%20RECORD%2008
```

| Tham số | Ý nghĩa | Mặc định |
|---|---|---|
| `t` | Số phút đếm ngược (chỉ Starting Soon) | không đếm |
| `name` | Tên kênh trên TV và poster | `ZI EER` |
| `msg` | Dòng chữ nhỏ dưới tiêu đề | tuỳ màn |
| `tape` | Chữ viết tay trên băng VHS | tuỳ màn |

Dấu cách trong URL viết là `%20`.
