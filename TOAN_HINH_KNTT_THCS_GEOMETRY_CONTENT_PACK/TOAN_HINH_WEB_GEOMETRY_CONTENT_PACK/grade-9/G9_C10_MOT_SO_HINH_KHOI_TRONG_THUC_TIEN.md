# Lớp 9 — Chương 10. Một số hình khối trong thực tiễn

- `chapterId`: `g9-v2-c10`
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 31. Hình trụ và hình nón

- `lessonId`: `g9-v2-c10-l31`
- `chapterId`: `g9-v2-c10`
- `grade`: 9
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết hình trụ và hình nón.
- Nắm bán kính đáy, chiều cao, đường sinh của hình nón.
- Tính diện tích xung quanh/toàn phần và thể tích theo công thức chương trình.
- Giải bài thực tế lon, ống, phễu, nón.

### Dạng toán nhỏ nên tách trong bài
- `g9-v2-c10-l31-sg-01` — **Nhận dạng hình trụ/hình nón** (`basic`)
- `g9-v2-c10-l31-sg-02` — **Xác định bán kính/chiều cao/đường sinh** (`basic`)
- `g9-v2-c10-l31-sg-03` — **Tính Sxq/Stp hình trụ** (`understanding`)
- `g9-v2-c10-l31-sg-04` — **Tính V hình trụ** (`understanding`)
- `g9-v2-c10-l31-sg-05` — **Tính Sxq/Stp/V hình nón** (`application`)
- `g9-v2-c10-l31-sg-06` — **Bài toán thực tế** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v2-c10-l31-tpl-01` — Cho R,h tính V trụ
- `g9-v2-c10-l31-tpl-02` — Cho R,h tính Sxq/Stp trụ
- `g9-v2-c10-l31-tpl-03` — Cho R,l tính Sxq nón
- `g9-v2-c10-l31-tpl-04` — Cho R,h tính V nón
- `g9-v2-c10-l31-tpl-05` — Chọn công thức đúng
- `g9-v2-c10-l31-tpl-06` — Bài toán làm lon/chiếc nón

### Lỗi học sinh mất gốc hay sai
- Nhầm chiều cao và đường sinh của hình nón.
- Quên nhân 1/3 khi tính thể tích nón.
- Dùng đường kính thay bán kính.
- Quên cộng diện tích đáy khi tính toàn phần.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình trụ ghi R,h
- SVG hình nón ghi R,h,l
- Mạng triển khai mặt xung quanh hình trụ/nón đơn giản

### Gợi ý cấu trúc ví dụ mẫu
- Ví dụ 1: nhận biết/đọc hình mức cơ bản.
- Ví dụ 2: tính toán trực tiếp theo công thức hoặc tính chất trọng tâm.
- Ví dụ 3: bài có 2 bước suy luận, lời giải từng bước, nêu rõ vì sao chọn đáp án đúng.
- Ví dụ 4 nếu bài trọng tâm: câu vận dụng thực tế hoặc chứng minh ngắn dạng chọn bước đúng.

### Quy tắc generator riêng cho bài này
- Chỉ sinh số liệu đẹp, tránh nghiệm âm hoặc căn xấu ở mức cơ bản.
- Với câu có hình, tạo dữ kiện nhất quán giữa stem, SVG và đáp án.
- Các phương án nhiễu nên đến từ lỗi sai phổ biến ở trên.
- Mỗi câu phải có đúng 4 lựa chọn, 1 đáp án đúng duy nhất, lời giải hiện ngay sau khi chọn.

---

## Bài 32. Hình cầu

- `lessonId`: `g9-v2-c10-l32`
- `chapterId`: `g9-v2-c10`
- `grade`: 9
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết hình cầu, mặt cầu, bán kính, đường kính.
- Tính diện tích mặt cầu và thể tích hình cầu.
- Vận dụng vào bóng, quả địa cầu, bồn chứa dạng cầu.
- Phân biệt hình cầu với hình tròn/đường tròn.

### Dạng toán nhỏ nên tách trong bài
- `g9-v2-c10-l32-sg-01` — **Nhận dạng hình cầu/mặt cầu** (`basic`)
- `g9-v2-c10-l32-sg-02` — **Tính diện tích mặt cầu** (`basic`)
- `g9-v2-c10-l32-sg-03` — **Tính thể tích hình cầu** (`understanding`)
- `g9-v2-c10-l32-sg-04` — **Tìm R/D khi biết đại lượng đơn giản** (`understanding`)
- `g9-v2-c10-l32-sg-05` — **Bài toán thực tế** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v2-c10-l32-tpl-01` — Cho R, tính S mặt cầu
- `g9-v2-c10-l32-tpl-02` — Cho R, tính V hình cầu
- `g9-v2-c10-l32-tpl-03` — Cho đường kính, tính R rồi tính S/V
- `g9-v2-c10-l32-tpl-04` — Chọn công thức đúng
- `g9-v2-c10-l32-tpl-05` — Bài toán quả bóng/bồn chứa

### Lỗi học sinh mất gốc hay sai
- Nhầm hình cầu với hình tròn.
- Dùng công thức diện tích hình tròn cho mặt cầu.
- Quên lũy thừa ba khi tính thể tích.
- Dùng đường kính thay bán kính.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình cầu có tâm O, bán kính R
- Bảng công thức S=4πR², V=4/3πR³

### Gợi ý cấu trúc ví dụ mẫu
- Ví dụ 1: nhận biết/đọc hình mức cơ bản.
- Ví dụ 2: tính toán trực tiếp theo công thức hoặc tính chất trọng tâm.
- Ví dụ 3: bài có 2 bước suy luận, lời giải từng bước, nêu rõ vì sao chọn đáp án đúng.
- Ví dụ 4 nếu bài trọng tâm: câu vận dụng thực tế hoặc chứng minh ngắn dạng chọn bước đúng.

### Quy tắc generator riêng cho bài này
- Chỉ sinh số liệu đẹp, tránh nghiệm âm hoặc căn xấu ở mức cơ bản.
- Với câu có hình, tạo dữ kiện nhất quán giữa stem, SVG và đáp án.
- Các phương án nhiễu nên đến từ lỗi sai phổ biến ở trên.
- Mỗi câu phải có đúng 4 lựa chọn, 1 đáp án đúng duy nhất, lời giải hiện ngay sau khi chọn.

---

## Luyện tập chung trang 106
- `lessonId`: `g9-v2-c10-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 10
- `lessonId`: `g9-v2-c10-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
