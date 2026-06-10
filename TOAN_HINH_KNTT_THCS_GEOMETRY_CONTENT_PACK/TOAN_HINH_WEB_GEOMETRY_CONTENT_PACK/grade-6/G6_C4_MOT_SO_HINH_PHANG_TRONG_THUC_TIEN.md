# Lớp 6 — Chương 4. Một số hình phẳng trong thực tiễn

- `chapterId`: `g6-v1-c4`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-truc-quan`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều

- `lessonId`: `g6-v1-c4-l18`
- `chapterId`: `g6-v1-c4`
- `grade`: 6
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-truc-quan`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết tam giác đều, hình vuông, lục giác đều qua số cạnh, số góc, độ dài cạnh và số đo góc.
- Gọi tên đỉnh, cạnh, góc của hình; đọc hình bằng ngôn ngữ Toán.
- Thấy được lục giác đều có thể ghép từ 6 tam giác đều bằng nhau.
- Làm quen với thao tác vẽ/ghép/cắt hình đơn giản.

### Dạng toán nhỏ nên tách trong bài
- `g6-v1-c4-l18-sg-01` — **Nhận dạng hình đều từ mô tả tính chất** (`basic`)
- `g6-v1-c4-l18-sg-02` — **Đếm đỉnh, cạnh, góc và gọi tên cạnh/góc** (`basic`)
- `g6-v1-c4-l18-sg-03` — **Tính chu vi khi biết cạnh** (`understanding`)
- `g6-v1-c4-l18-sg-04` — **Tách lục giác đều thành tam giác đều** (`understanding`)
- `g6-v1-c4-l18-sg-05` — **Chọn bước vẽ hình đúng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v1-c4-l18-tpl-01` — Nhận dạng hình qua thuộc tính cạnh-góc
- `g6-v1-c4-l18-tpl-02` — Cho hình/tên hình, hỏi số cạnh/số góc
- `g6-v1-c4-l18-tpl-03` — Biết cạnh a, tính chu vi tam giác đều/hình vuông/lục giác đều
- `g6-v1-c4-l18-tpl-04` — Cho lục giác đều tâm O, chọn các tam giác đều tạo bởi tâm và hai đỉnh kề nhau
- `g6-v1-c4-l18-tpl-05` — Chọn nhận xét đúng/sai về hình đều

### Lỗi học sinh mất gốc hay sai
- Gọi mọi tam giác có ba cạnh gần bằng nhau là tam giác đều mà không kiểm tra cả ba cạnh.
- Nhầm hình vuông với hình chữ nhật vì đều có bốn góc vuông.
- Nhầm lục giác bất kỳ với lục giác đều.
- Quên đơn vị độ dài khi tính chu vi.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác đều có đánh dấu 3 cạnh bằng nhau
- SVG hình vuông có 4 cạnh bằng nhau và 4 góc vuông
- SVG lục giác đều kèm tâm O và 6 tam giác đều

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

## Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân

- `lessonId`: `g6-v1-c4-l19`
- `chapterId`: `g6-v1-c4`
- `grade`: 6
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-truc-quan`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết hình chữ nhật, hình thoi, hình bình hành, hình thang cân.
- Phân biệt các hình qua cặp cạnh song song, cạnh bằng nhau, góc, đường chéo ở mức trực quan.
- Gắn hình học với vật thể/hoa văn trong thực tiễn.

### Dạng toán nhỏ nên tách trong bài
- `g6-v1-c4-l19-sg-01` — **Nhận dạng hình từ hình vẽ** (`basic`)
- `g6-v1-c4-l19-sg-02` — **Nhận dạng hình từ mô tả tính chất** (`basic`)
- `g6-v1-c4-l19-sg-03` — **So sánh điểm giống/khác giữa các tứ giác** (`understanding`)
- `g6-v1-c4-l19-sg-04` — **Tính cạnh còn thiếu trong tình huống chu vi đơn giản** (`understanding`)
- `g6-v1-c4-l19-sg-05` — **Chọn phát biểu đúng về cạnh song song/bằng nhau** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v1-c4-l19-tpl-01` — Cho thuộc tính, chọn tên hình
- `g6-v1-c4-l19-tpl-02` — Cho hình vẽ đơn giản, chọn nhận xét đúng
- `g6-v1-c4-l19-tpl-03` — Tính chu vi hình chữ nhật/hình bình hành/hình thoi khi biết cạnh
- `g6-v1-c4-l19-tpl-04` — Tìm cạnh còn lại khi biết chu vi và một cạnh
- `g6-v1-c4-l19-tpl-05` — Phân loại vật thể thực tế theo dạng hình

### Lỗi học sinh mất gốc hay sai
- Cho rằng hình thoi luôn là hình vuông.
- Nhầm hình bình hành với hình thang cân.
- Chỉ nhìn hình nghiêng rồi kết luận sai vì không dựa vào tính chất.
- Tính chu vi hình thang cân nhưng quên hai cạnh bên bằng nhau.

### Hình minh họa nên tạo nếu UI cho phép
- SVG bốn tứ giác đặt cạnh nhau kèm ký hiệu cạnh song song
- Thẻ so sánh thuộc tính giữa hình chữ nhật/thoi/bình hành/thang cân

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

## Bài 20. Chu vi và diện tích của một số tứ giác đã học

- `lessonId`: `g6-v1-c4-l20`
- `chapterId`: `g6-v1-c4`
- `grade`: 6
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-truc-quan`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Ôn công thức chu vi và diện tích các tứ giác quen thuộc.
- Biết chọn đúng công thức theo hình.
- Giải bài toán thực tế đơn giản về lát nền, rào vườn, khung tranh.
- Chuyển đổi đơn vị đơn giản khi cần.

### Dạng toán nhỏ nên tách trong bài
- `g6-v1-c4-l20-sg-01` — **Tính chu vi hình chữ nhật, hình vuông, hình bình hành, hình thoi, hình thang cân** (`basic`)
- `g6-v1-c4-l20-sg-02` — **Tính diện tích hình chữ nhật, hình vuông, hình bình hành, hình thoi, hình thang** (`basic`)
- `g6-v1-c4-l20-sg-03` — **Tìm cạnh/chiều cao khi biết diện tích** (`understanding`)
- `g6-v1-c4-l20-sg-04` — **Bài toán thực tế một bước** (`understanding`)
- `g6-v1-c4-l20-sg-05` — **So sánh diện tích hai hình** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v1-c4-l20-tpl-01` — Chọn công thức đúng
- `g6-v1-c4-l20-tpl-02` — Biết số đo, tính chu vi
- `g6-v1-c4-l20-tpl-03` — Biết số đo, tính diện tích
- `g6-v1-c4-l20-tpl-04` — Biết diện tích và đáy, tìm chiều cao
- `g6-v1-c4-l20-tpl-05` — Bài toán lát nền/rào quanh hình chữ nhật
- `g6-v1-c4-l20-tpl-06` — So sánh hai diện tích cùng đơn vị

### Lỗi học sinh mất gốc hay sai
- Lẫn chu vi với diện tích.
- Dùng cạnh bên thay cho chiều cao của hình bình hành/hình thang.
- Quên nhân đôi trong công thức chu vi hình chữ nhật.
- Cộng hai đáy rồi quên chia 2 trong diện tích hình thang.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình bình hành có đáy và chiều cao
- SVG hình thang có hai đáy và chiều cao
- Bảng công thức chu vi/diện tích

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

## Luyện tập chung trang 95
- `lessonId`: `g6-v1-c4-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 4
- `lessonId`: `g6-v1-c4-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
