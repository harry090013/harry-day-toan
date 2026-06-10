# Lớp 9 — Chương 4. Hệ thức lượng trong tam giác vuông

- `chapterId`: `g9-v1-c4`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 11. Tỉ số lượng giác của góc nhọn

- `lessonId`: `g9-v1-c4-l11`
- `chapterId`: `g9-v1-c4`
- `grade`: 9
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm các tỉ số lượng giác của góc nhọn trong tam giác vuông: sin, cos, tan, cot nếu chương dùng.
- Xác định cạnh đối, cạnh kề, cạnh huyền theo góc đang xét.
- Tính tỉ số lượng giác từ độ dài cạnh.
- Dùng bảng/máy tính ở mức phù hợp nếu giáo viên cho.

### Dạng toán nhỏ nên tách trong bài
- `g9-v1-c4-l11-sg-01` — **Xác định cạnh đối/kề/huyền** (`basic`)
- `g9-v1-c4-l11-sg-02` — **Tính sin/cos/tan/cot từ cạnh** (`basic`)
- `g9-v1-c4-l11-sg-03` — **Chọn tỉ số đúng theo góc** (`understanding`)
- `g9-v1-c4-l11-sg-04` — **Tìm cạnh khi biết tỉ số** (`understanding`)
- `g9-v1-c4-l11-sg-05` — **So sánh/nhận xét tỉ số lượng giác cơ bản** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v1-c4-l11-tpl-01` — Cho tam giác vuông và góc B, chọn cạnh đối/kề
- `g9-v1-c4-l11-tpl-02` — Cho cạnh, tính sin/cos/tan
- `g9-v1-c4-l11-tpl-03` — Chọn công thức đúng
- `g9-v1-c4-l11-tpl-04` — Biết sin hoặc tan và một cạnh, tìm cạnh còn lại mức cơ bản
- `g9-v1-c4-l11-tpl-05` — Chọn phát biểu đúng về sin/cos góc nhọn

### Lỗi học sinh mất gốc hay sai
- Xác định cạnh đối/kề theo sai góc.
- Dùng cạnh huyền trong tan/cot.
- Nhầm sin với cos.
- Không kiểm tra góc nhọn trong tam giác vuông.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác vuông ABC đánh dấu góc nhọn và cạnh đối-kề-huyền
- Bảng SOH-CAH-TOA tiếng Việt hóa

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

## Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng

- `lessonId`: `g9-v1-c4-l12`
- `chapterId`: `g9-v1-c4`
- `grade`: 9
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Dùng hệ thức giữa cạnh và góc trong tam giác vuông để giải tam giác vuông.
- Tính cạnh/góc trong bài toán thực tế chiều cao, khoảng cách.
- Chọn tỉ số lượng giác phù hợp với dữ kiện.
- Làm quen mô hình hóa hình học từ tình huống thực tế.

### Dạng toán nhỏ nên tách trong bài
- `g9-v1-c4-l12-sg-01` — **Chọn tỉ số lượng giác phù hợp** (`basic`)
- `g9-v1-c4-l12-sg-02` — **Tính cạnh trong tam giác vuông** (`basic`)
- `g9-v1-c4-l12-sg-03` — **Tính góc nhọn khi biết tỉ số** (`understanding`)
- `g9-v1-c4-l12-sg-04` — **Bài toán chiều cao/khoảng cách** (`understanding`)
- `g9-v1-c4-l12-sg-05` — **Kiểm tra đơn vị và làm tròn** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v1-c4-l12-tpl-01` — Biết góc và cạnh huyền, tính cạnh góc vuông
- `g9-v1-c4-l12-tpl-02` — Biết góc và cạnh kề/đối, tính cạnh còn lại
- `g9-v1-c4-l12-tpl-03` — Biết hai cạnh, tính góc
- `g9-v1-c4-l12-tpl-04` — Bài toán bóng cây/góc nâng
- `g9-v1-c4-l12-tpl-05` — Bài toán khoảng cách không đo trực tiếp

### Lỗi học sinh mất gốc hay sai
- Chọn sai cạnh đối/kề trong tình huống thực tế.
- Dùng sin/cos/tan không phù hợp với dữ kiện.
- Làm tròn quá sớm.
- Quên đổi đơn vị hoặc ghi đơn vị.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác vuông mô phỏng chiều cao cây
- Sơ đồ góc nâng/góc hạ

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

## Luyện tập chung trang 79
- `lessonId`: `g9-v1-c4-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 4
- `lessonId`: `g9-v1-c4-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
