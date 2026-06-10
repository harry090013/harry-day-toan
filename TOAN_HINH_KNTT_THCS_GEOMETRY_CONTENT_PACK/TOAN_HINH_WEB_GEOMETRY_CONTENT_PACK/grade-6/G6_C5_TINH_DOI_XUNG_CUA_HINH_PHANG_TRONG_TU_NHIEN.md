# Lớp 6 — Chương 5. Tính đối xứng của hình phẳng trong tự nhiên

- `chapterId`: `g6-v1-c5`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-truc-quan`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 21. Hình có trục đối xứng

- `lessonId`: `g6-v1-c5-l21`
- `chapterId`: `g6-v1-c5`
- `grade`: 6
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-truc-quan`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu trực quan hình có trục đối xứng.
- Nhận biết và đếm trục đối xứng của hình quen thuộc.
- Vẽ ảnh của điểm/hình đơn giản qua một trục.
- Liên hệ đối xứng với hoa văn, kiến trúc, tự nhiên.

### Dạng toán nhỏ nên tách trong bài
- `g6-v1-c5-l21-sg-01` — **Nhận biết hình có trục đối xứng** (`basic`)
- `g6-v1-c5-l21-sg-02` — **Đếm số trục đối xứng** (`basic`)
- `g6-v1-c5-l21-sg-03` — **Xác định trục đối xứng đúng** (`understanding`)
- `g6-v1-c5-l21-sg-04` — **Vẽ/nhận ảnh qua trục trên lưới ô vuông** (`understanding`)
- `g6-v1-c5-l21-sg-05` — **Sửa hình để có trục đối xứng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v1-c5-l21-tpl-01` — Cho nhiều hình, chọn hình có trục đối xứng
- `g6-v1-c5-l21-tpl-02` — Cho hình quen thuộc, hỏi số trục đối xứng
- `g6-v1-c5-l21-tpl-03` — Cho trục và điểm trên lưới, chọn điểm đối xứng
- `g6-v1-c5-l21-tpl-04` — Chọn đường thẳng là trục đối xứng
- `g6-v1-c5-l21-tpl-05` — Hoàn thiện hình đối xứng

### Lỗi học sinh mất gốc hay sai
- Nhầm đường chia hình thành hai phần bằng diện tích với trục đối xứng.
- Đếm thiếu trục của hình vuông/hình chữ nhật.
- Vẽ ảnh qua trục nhưng không giữ khoảng cách vuông góc đến trục.
- Cho rằng mọi đường đi qua tâm đều là trục đối xứng.

### Hình minh họa nên tạo nếu UI cho phép
- SVG gấp giấy qua trục
- Lưới ô vuông có điểm và trục đối xứng
- Các hình cơ bản kèm trục đối xứng

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

## Bài 22. Hình có tâm đối xứng

- `lessonId`: `g6-v1-c5-l22`
- `chapterId`: `g6-v1-c5`
- `grade`: 6
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-truc-quan`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu trực quan hình có tâm đối xứng.
- Nhận biết tâm đối xứng của một số hình quen thuộc.
- Xác định ảnh của điểm qua tâm đối xứng trên lưới.
- Phân biệt trục đối xứng và tâm đối xứng.

### Dạng toán nhỏ nên tách trong bài
- `g6-v1-c5-l22-sg-01` — **Nhận biết hình có tâm đối xứng** (`basic`)
- `g6-v1-c5-l22-sg-02` — **Xác định tâm đối xứng** (`basic`)
- `g6-v1-c5-l22-sg-03` — **Vẽ điểm đối xứng qua tâm** (`understanding`)
- `g6-v1-c5-l22-sg-04` — **Phân biệt trục và tâm đối xứng** (`understanding`)
- `g6-v1-c5-l22-sg-05` — **Chọn phát biểu đúng về hình có tâm đối xứng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v1-c5-l22-tpl-01` — Cho hình, hỏi có tâm đối xứng không
- `g6-v1-c5-l22-tpl-02` — Cho điểm A và tâm O trên trục/lưới, chọn A' sao cho O là trung điểm
- `g6-v1-c5-l22-tpl-03` — Chọn tâm đối xứng của hình bình hành/hình chữ nhật
- `g6-v1-c5-l22-tpl-04` — So sánh trục đối xứng và tâm đối xứng
- `g6-v1-c5-l22-tpl-05` — Hoàn thiện hình qua phép quay nửa vòng

### Lỗi học sinh mất gốc hay sai
- Nghĩ hình có tâm đối xứng thì chắc chắn có trục đối xứng.
- Chọn điểm ở cùng phía tâm thay vì đối phía.
- Không kiểm tra O là trung điểm của đoạn nối hai điểm đối xứng.
- Nhầm tâm hình với một đỉnh của hình.

### Hình minh họa nên tạo nếu UI cho phép
- SVG quay 180 độ quanh tâm
- Lưới ô vuông minh họa A, O, A'
- Bảng phân biệt trục đối xứng/tâm đối xứng

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

## Luyện tập chung trang 108
- `lessonId`: `g6-v1-c5-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 5
- `lessonId`: `g6-v1-c5-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
