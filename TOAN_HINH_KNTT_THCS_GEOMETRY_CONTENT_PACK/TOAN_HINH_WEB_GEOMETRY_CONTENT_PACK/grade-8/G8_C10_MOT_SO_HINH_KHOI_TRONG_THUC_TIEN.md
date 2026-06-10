# Lớp 8 — Chương 10. Một số hình khối trong thực tiễn

- `chapterId`: `g8-v2-c10`
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 38. Hình chóp tam giác đều

- `lessonId`: `g8-v2-c10-l38`
- `chapterId`: `g8-v2-c10`
- `grade`: 8
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết hình chóp tam giác đều.
- Xác định đỉnh, đáy, cạnh bên, cạnh đáy, mặt bên, trung đoạn nếu dùng.
- Tính diện tích xung quanh/toàn phần ở mức công thức phù hợp.
- Liên hệ mô hình kim tự tháp/lều.

### Dạng toán nhỏ nên tách trong bài
- `g8-v2-c10-l38-sg-01` — **Nhận dạng hình chóp tam giác đều** (`basic`)
- `g8-v2-c10-l38-sg-02` — **Đếm đỉnh-cạnh-mặt** (`basic`)
- `g8-v2-c10-l38-sg-03` — **Xác định đáy và mặt bên** (`understanding`)
- `g8-v2-c10-l38-sg-04` — **Tính diện tích xung quanh** (`understanding`)
- `g8-v2-c10-l38-sg-05` — **Tính diện tích toàn phần** (`application`)
- `g8-v2-c10-l38-sg-06` — **Bài toán mô hình** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v2-c10-l38-tpl-01` — Cho hình, hỏi số mặt/cạnh/đỉnh
- `g8-v2-c10-l38-tpl-02` — Cho diện tích một mặt bên, tính Sxq
- `g8-v2-c10-l38-tpl-03` — Cho diện tích đáy và Sxq, tính Stp
- `g8-v2-c10-l38-tpl-04` — Chọn đáy/mặt bên đúng
- `g8-v2-c10-l38-tpl-05` — Bài toán làm mô hình giấy

### Lỗi học sinh mất gốc hay sai
- Nhầm hình chóp với lăng trụ.
- Đếm thiếu mặt đáy.
- Quên cộng diện tích đáy khi tính toàn phần.
- Dùng chiều cao khối thay cho trung đoạn mặt bên nếu công thức cần trung đoạn.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình chóp tam giác đều
- Mạng lưới gồm 1 tam giác đáy và 3 tam giác bên

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

## Bài 39. Hình chóp tứ giác đều

- `lessonId`: `g8-v2-c10-l39`
- `chapterId`: `g8-v2-c10`
- `grade`: 8
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-khoi-do-luong`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết hình chóp tứ giác đều.
- Xác định đáy là hình vuông, các mặt bên là tam giác cân bằng nhau.
- Tính diện tích xung quanh/toàn phần theo dữ kiện phù hợp.
- Bài toán thực tế mái nhà/mô hình.

### Dạng toán nhỏ nên tách trong bài
- `g8-v2-c10-l39-sg-01` — **Nhận dạng hình chóp tứ giác đều** (`basic`)
- `g8-v2-c10-l39-sg-02` — **Đếm đỉnh-cạnh-mặt** (`basic`)
- `g8-v2-c10-l39-sg-03` — **Xác định đáy/mặt bên** (`understanding`)
- `g8-v2-c10-l39-sg-04` — **Tính Sxq** (`understanding`)
- `g8-v2-c10-l39-sg-05` — **Tính Stp** (`application`)
- `g8-v2-c10-l39-sg-06` — **Phân biệt với chóp tam giác đều** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v2-c10-l39-tpl-01` — Cho hình, hỏi số mặt/cạnh/đỉnh
- `g8-v2-c10-l39-tpl-02` — Cho diện tích một mặt bên, tính Sxq
- `g8-v2-c10-l39-tpl-03` — Cho cạnh đáy và trung đoạn, tính Sxq nếu phù hợp
- `g8-v2-c10-l39-tpl-04` — Tính Stp khi biết Sđáy
- `g8-v2-c10-l39-tpl-05` — Chọn mô tả đúng của hình chóp tứ giác đều

### Lỗi học sinh mất gốc hay sai
- Nhầm đáy tứ giác đều với hình chữ nhật bất kỳ.
- Đếm 4 mặt bên nhưng quên mặt đáy.
- Dùng công thức lăng trụ.
- Quên các mặt bên bằng nhau trong chóp đều.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình chóp tứ giác đều
- Mạng lưới hình vuông và 4 tam giác cân

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

## Luyện tập chung trang 121
- `lessonId`: `g8-v2-c10-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 10
- `lessonId`: `g8-v2-c10-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
