# Lớp 8 — Chương 4. Định lí Thalès

- `chapterId`: `g8-v1-c4`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 15. Định lí Thalès trong tam giác

- `lessonId`: `g8-v1-c4-l15`
- `chapterId`: `g8-v1-c4`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm tỉ số hai đoạn thẳng và đoạn thẳng tỉ lệ.
- Hiểu định lí Thalès trong tam giác và định lí đảo nếu bài có dùng.
- Tính độ dài đoạn thẳng trong tam giác có đường thẳng song song.
- Chọn cặp tỉ số đúng theo hình.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c4-l15-sg-01` — **Lập tỉ số đoạn thẳng** (`basic`)
- `g8-v1-c4-l15-sg-02` — **Áp dụng Thalès thuận** (`basic`)
- `g8-v1-c4-l15-sg-03` — **Áp dụng Thalès đảo** (`understanding`)
- `g8-v1-c4-l15-sg-04` — **Tìm độ dài x** (`understanding`)
- `g8-v1-c4-l15-sg-05` — **Chọn cặp đoạn tương ứng đúng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c4-l15-tpl-01` — Cho hình có DE // BC, tính x
- `g8-v1-c4-l15-tpl-02` — Chọn đẳng thức tỉ lệ đúng
- `g8-v1-c4-l15-tpl-03` — Kiểm tra hai đoạn thẳng song song bằng tỉ lệ
- `g8-v1-c4-l15-tpl-04` — Bài toán chia đoạn theo tỉ lệ
- `g8-v1-c4-l15-tpl-05` — Sắp xếp lời giải Thalès

### Lỗi học sinh mất gốc hay sai
- Lập tỉ số sai cặp đoạn tương ứng.
- Quên điều kiện đường thẳng song song với một cạnh tam giác.
- Dùng cộng đoạn sai khi điểm không nằm trên cạnh.
- Nhân chéo sai.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác ABC có DE // BC
- Bảng cặp đoạn tương ứng trên hai cạnh

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

## Bài 16. Đường trung bình của tam giác

- `lessonId`: `g8-v1-c4-l16`
- `chapterId`: `g8-v1-c4`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm định nghĩa đường trung bình của tam giác.
- Dùng tính chất đường trung bình song song với cạnh thứ ba và bằng nửa cạnh ấy.
- Nhận biết dấu hiệu trung điểm trên hai cạnh.
- Tính độ dài và chứng minh song song.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c4-l16-sg-01` — **Nhận biết đường trung bình** (`basic`)
- `g8-v1-c4-l16-sg-02` — **Tính độ dài đường trung bình** (`basic`)
- `g8-v1-c4-l16-sg-03` — **Tìm cạnh thứ ba khi biết đường trung bình** (`understanding`)
- `g8-v1-c4-l16-sg-04` — **Chứng minh song song** (`understanding`)
- `g8-v1-c4-l16-sg-05` — **Kết hợp trung điểm và Thalès** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c4-l16-tpl-01` — Cho M,N trung điểm, tính MN
- `g8-v1-c4-l16-tpl-02` — Cho MN, tính BC
- `g8-v1-c4-l16-tpl-03` — Chọn kết luận MN // BC
- `g8-v1-c4-l16-tpl-04` — Chọn điều kiện để MN là đường trung bình
- `g8-v1-c4-l16-tpl-05` — Bài toán nhiều đường trung bình

### Lỗi học sinh mất gốc hay sai
- Quên đường trung bình nối trung điểm của hai cạnh.
- Lấy đường trung bình bằng cạnh thứ ba thay vì bằng nửa.
- Dùng tính chất trong tứ giác không phù hợp.
- Nhầm trung điểm với điểm bất kỳ.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác với đường trung bình MN
- Đánh dấu M,N là trung điểm

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

## Bài 17. Tính chất đường phân giác của tam giác

- `lessonId`: `g8-v1-c4-l17`
- `chapterId`: `g8-v1-c4`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm tính chất đường phân giác của tam giác.
- Lập tỉ lệ giữa hai đoạn trên cạnh đối diện và hai cạnh kề.
- Tính đoạn thẳng theo tỉ lệ.
- Chọn đúng cạnh kề với góc được phân giác.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c4-l17-sg-01` — **Nhận biết đường phân giác trong tam giác** (`basic`)
- `g8-v1-c4-l17-sg-02` — **Lập tỉ lệ đúng** (`basic`)
- `g8-v1-c4-l17-sg-03` — **Tìm đoạn x bằng tính chất phân giác** (`understanding`)
- `g8-v1-c4-l17-sg-04` — **Kiểm tra một tia có là phân giác qua tỉ lệ** (`understanding`)
- `g8-v1-c4-l17-sg-05` — **Bài toán chu vi/tỉ lệ liên quan** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c4-l17-tpl-01` — Cho AD là phân giác, chọn tỉ lệ đúng
- `g8-v1-c4-l17-tpl-02` — Biết AB, AC, BD, tìm DC
- `g8-v1-c4-l17-tpl-03` — Biết tỉ lệ và tổng BC, tìm BD/DC
- `g8-v1-c4-l17-tpl-04` — Kiểm tra AD có phải phân giác không
- `g8-v1-c4-l17-tpl-05` — Sắp xếp lời giải tính x

### Lỗi học sinh mất gốc hay sai
- Lập tỉ lệ với cạnh không kề góc.
- Đảo tỉ số sai.
- Quên D nằm trên cạnh đối diện.
- Nhầm đường phân giác với đường trung tuyến.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác ABC có AD là phân giác
- Bảng đối chiếu AB/AC = BD/DC

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

## Luyện tập chung trang 87
- `lessonId`: `g8-v1-c4-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 4
- `lessonId`: `g8-v1-c4-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
