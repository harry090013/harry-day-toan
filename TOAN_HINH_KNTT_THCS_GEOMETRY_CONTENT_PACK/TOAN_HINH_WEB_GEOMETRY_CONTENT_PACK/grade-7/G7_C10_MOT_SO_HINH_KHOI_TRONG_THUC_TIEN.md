# Lớp 7 — Chương 10. Một số hình khối trong thực tiễn

- `chapterId`: `g7-v2-c10`
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 36. Hình hộp chữ nhật và hình lập phương

- `lessonId`: `g7-v2-c10-l36`
- `chapterId`: `g7-v2-c10`
- `grade`: 7
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết hình hộp chữ nhật và hình lập phương.
- Biết số mặt, cạnh, đỉnh; các mặt song song/bằng nhau.
- Tính diện tích xung quanh, diện tích toàn phần và thể tích ở mức cơ bản.
- Vận dụng vào hộp, phòng, bể cá.

### Dạng toán nhỏ nên tách trong bài
- `g7-v2-c10-l36-sg-01` — **Nhận dạng hình hộp chữ nhật/lập phương** (`basic`)
- `g7-v2-c10-l36-sg-02` — **Đếm đỉnh-cạnh-mặt** (`basic`)
- `g7-v2-c10-l36-sg-03` — **Tính diện tích xung quanh** (`understanding`)
- `g7-v2-c10-l36-sg-04` — **Tính diện tích toàn phần** (`understanding`)
- `g7-v2-c10-l36-sg-05` — **Tính thể tích** (`application`)
- `g7-v2-c10-l36-sg-06` — **Bài toán thực tế hộp/bể** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v2-c10-l36-tpl-01` — Cho kích thước a,b,c tính V
- `g7-v2-c10-l36-tpl-02` — Cho hình lập phương cạnh a tính Sxq/Stp/V
- `g7-v2-c10-l36-tpl-03` — Đếm số mặt/cạnh/đỉnh
- `g7-v2-c10-l36-tpl-04` — Tìm một kích thước khi biết thể tích
- `g7-v2-c10-l36-tpl-05` — Bài toán sơn hộp/làm hộp không nắp

### Lỗi học sinh mất gốc hay sai
- Nhầm diện tích xung quanh với toàn phần.
- Quên đơn vị khối khi tính thể tích.
- Dùng công thức lập phương cho hình hộp chữ nhật bất kỳ.
- Quên hộp không nắp thì thiếu một mặt.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình hộp chữ nhật ghi dài-rộng-cao
- SVG hình lập phương
- Mạng lưới hộp đơn giản

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

## Luyện tập trang 93
- `lessonId`: `g7-v2-c10-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 37. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác

- `lessonId`: `g7-v2-c10-l37`
- `chapterId`: `g7-v2-c10`
- `grade`: 7
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết lăng trụ đứng tam giác và lăng trụ đứng tứ giác.
- Biết mặt đáy, mặt bên, cạnh bên, chiều cao.
- Tính diện tích xung quanh và thể tích theo đáy và chiều cao.
- Liên hệ vật thể thực tế dạng lăng trụ.

### Dạng toán nhỏ nên tách trong bài
- `g7-v2-c10-l37-sg-01` — **Nhận dạng lăng trụ đứng** (`basic`)
- `g7-v2-c10-l37-sg-02` — **Xác định đáy và chiều cao** (`basic`)
- `g7-v2-c10-l37-sg-03` — **Tính diện tích xung quanh** (`understanding`)
- `g7-v2-c10-l37-sg-04` — **Tính thể tích** (`understanding`)
- `g7-v2-c10-l37-sg-05` — **Tính diện tích toàn phần khi biết diện tích đáy** (`application`)
- `g7-v2-c10-l37-sg-06` — **Bài toán thực tế** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v2-c10-l37-tpl-01` — Cho đáy và chiều cao, tính V
- `g7-v2-c10-l37-tpl-02` — Cho chu vi đáy và chiều cao, tính Sxq
- `g7-v2-c10-l37-tpl-03` — Cho Stp, Sxq, tính diện tích hai đáy
- `g7-v2-c10-l37-tpl-04` — Chọn mặt đáy/mặt bên đúng
- `g7-v2-c10-l37-tpl-05` — Bài toán khối lều/hộp quà

### Lỗi học sinh mất gốc hay sai
- Nhầm chiều cao lăng trụ với cạnh đáy.
- Dùng diện tích đáy sai khi đáy là tam giác.
- Quên nhân hai diện tích đáy trong Stp.
- Nhầm lăng trụ đứng với hình chóp.

### Hình minh họa nên tạo nếu UI cho phép
- SVG lăng trụ đứng tam giác
- SVG lăng trụ đứng tứ giác
- Tô màu đáy và mặt bên

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

## Luyện tập trang 101
- `lessonId`: `g7-v2-c10-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 10
- `lessonId`: `g7-v2-c10-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
