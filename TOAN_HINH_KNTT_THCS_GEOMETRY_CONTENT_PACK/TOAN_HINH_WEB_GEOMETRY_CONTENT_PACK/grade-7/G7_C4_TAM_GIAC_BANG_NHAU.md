# Lớp 7 — Chương 4. Tam giác bằng nhau

- `chapterId`: `g7-v1-c4`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 12. Tổng các góc trong một tam giác

- `lessonId`: `g7-v1-c4-l12`
- `chapterId`: `g7-v1-c4`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm tổng ba góc trong một tam giác bằng 180°.
- Tính góc còn thiếu trong tam giác.
- Nhận biết và dùng góc ngoài của tam giác ở mức cơ bản.
- Phân loại tam giác theo góc nếu cần.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c4-l12-sg-01` — **Tính góc thứ ba của tam giác** (`basic`)
- `g7-v1-c4-l12-sg-02` — **Kiểm tra ba góc có lập thành tam giác không** (`basic`)
- `g7-v1-c4-l12-sg-03` — **Tính góc ngoài** (`understanding`)
- `g7-v1-c4-l12-sg-04` — **Bài toán tam giác cân kết hợp tổng góc** (`understanding`)
- `g7-v1-c4-l12-sg-05` — **Chọn khẳng định đúng/sai** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c4-l12-tpl-01` — Cho hai góc, tính góc còn lại
- `g7-v1-c4-l12-tpl-02` — Cho ba góc, kiểm tra có thể là tam giác không
- `g7-v1-c4-l12-tpl-03` — Cho góc ngoài, tìm góc trong kề bù
- `g7-v1-c4-l12-tpl-04` — Góc ngoài bằng tổng hai góc trong không kề
- `g7-v1-c4-l12-tpl-05` — Bài toán hình đơn giản nhiều bước

### Lỗi học sinh mất gốc hay sai
- Quên tổng góc tam giác là 180°.
- Nhầm góc ngoài với góc trong.
- Cộng cả góc ngoài vào tổng 180°.
- Không kiểm tra góc phải dương.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác ABC có ba góc
- Tam giác có góc ngoài tại một đỉnh

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

## Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác

- `lessonId`: `g7-v1-c4-l13`
- `chapterId`: `g7-v1-c4`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu hai tam giác bằng nhau và ký hiệu tương ứng đỉnh.
- Nắm trường hợp bằng nhau cạnh-cạnh-cạnh.
- Suy ra cạnh/góc tương ứng bằng nhau sau khi chứng minh tam giác bằng nhau.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c4-l13-sg-01` — **Nhận biết cặp đỉnh tương ứng** (`basic`)
- `g7-v1-c4-l13-sg-02` — **Áp dụng trường hợp c-c-c** (`basic`)
- `g7-v1-c4-l13-sg-03` — **Chọn kết luận tương ứng sau bằng nhau** (`understanding`)
- `g7-v1-c4-l13-sg-04` — **Tính cạnh/góc từ hai tam giác bằng nhau** (`understanding`)
- `g7-v1-c4-l13-sg-05` — **Sắp xếp chứng minh tam giác bằng nhau** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c4-l13-tpl-01` — Cho hai tam giác có 3 cặp cạnh, chọn bằng nhau theo c-c-c
- `g7-v1-c4-l13-tpl-02` — Chọn thứ tự viết tam giác bằng nhau đúng
- `g7-v1-c4-l13-tpl-03` — Từ tam giác bằng nhau, tìm cạnh tương ứng
- `g7-v1-c4-l13-tpl-04` — Từ tam giác bằng nhau, tìm góc tương ứng
- `g7-v1-c4-l13-tpl-05` — Chọn bộ dữ kiện đủ/không đủ

### Lỗi học sinh mất gốc hay sai
- Viết sai thứ tự đỉnh khi ký hiệu hai tam giác bằng nhau.
- Dùng c-c-c khi chỉ có hai cạnh bằng nhau.
- Suy ra cạnh không tương ứng bằng nhau.
- Nhầm bằng nhau với đồng dạng.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hai tam giác có cạnh đánh dấu 1/2/3 vạch
- Bảng tương ứng đỉnh-cạnh-góc

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

## Luyện tập chung trang 68
- `lessonId`: `g7-v1-c4-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 14. Trường hợp bằng nhau thứ hai và thứ ba của tam giác

- `lessonId`: `g7-v1-c4-l14`
- `chapterId`: `g7-v1-c4`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm trường hợp cạnh-góc-cạnh và góc-cạnh-góc.
- Chọn đúng trường hợp bằng nhau dựa vào dữ kiện.
- Dùng tam giác bằng nhau để suy ra các yếu tố tương ứng.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c4-l14-sg-01` — **Áp dụng c-g-c** (`basic`)
- `g7-v1-c4-l14-sg-02` — **Áp dụng g-c-g** (`basic`)
- `g7-v1-c4-l14-sg-03` — **Phân biệt góc xen giữa và cạnh xen giữa** (`understanding`)
- `g7-v1-c4-l14-sg-04` — **Chọn trường hợp phù hợp** (`understanding`)
- `g7-v1-c4-l14-sg-05` — **Suy luận kết quả sau chứng minh** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c4-l14-tpl-01` — Cho dữ kiện, chọn trường hợp c-g-c
- `g7-v1-c4-l14-tpl-02` — Cho dữ kiện, chọn trường hợp g-c-g
- `g7-v1-c4-l14-tpl-03` — Nhận biết dữ kiện không đủ
- `g7-v1-c4-l14-tpl-04` — Tính cạnh/góc tương ứng
- `g7-v1-c4-l14-tpl-05` — Sắp xếp chứng minh ngắn

### Lỗi học sinh mất gốc hay sai
- Dùng c-g-c khi góc không xen giữa hai cạnh.
- Dùng g-c-g khi cạnh không xen giữa hai góc.
- Không kiểm tra thứ tự tương ứng đỉnh.
- Thiếu kết luận sau khi chứng minh tam giác bằng nhau.

### Hình minh họa nên tạo nếu UI cho phép
- SVG minh họa c-g-c
- SVG minh họa g-c-g
- Bảng nhận diện trường hợp

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

## Luyện tập chung trang 74
- `lessonId`: `g7-v1-c4-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 15. Các trường hợp bằng nhau của tam giác vuông

- `lessonId`: `g7-v1-c4-l15`
- `chapterId`: `g7-v1-c4`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm các trường hợp bằng nhau của tam giác vuông.
- Nhận biết yếu tố cạnh huyền, cạnh góc vuông, góc nhọn.
- Áp dụng để chứng minh hai tam giác vuông bằng nhau và suy ra kết quả.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c4-l15-sg-01` — **Nhận diện tam giác vuông** (`basic`)
- `g7-v1-c4-l15-sg-02` — **Áp dụng cạnh huyền-cạnh góc vuông** (`basic`)
- `g7-v1-c4-l15-sg-03` — **Áp dụng cạnh góc vuông-góc nhọn/cạnh góc vuông-cạnh góc vuông** (`understanding`)
- `g7-v1-c4-l15-sg-04` — **Chọn dữ kiện đủ** (`understanding`)
- `g7-v1-c4-l15-sg-05` — **Suy ra cạnh/góc tương ứng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c4-l15-tpl-01` — Cho hai tam giác vuông, chọn trường hợp bằng nhau
- `g7-v1-c4-l15-tpl-02` — Chọn cạnh huyền đúng
- `g7-v1-c4-l15-tpl-03` — Tìm cạnh/góc tương ứng
- `g7-v1-c4-l15-tpl-04` — Chọn bộ dữ kiện không đủ
- `g7-v1-c4-l15-tpl-05` — Chứng minh hai đoạn bằng nhau qua tam giác vuông

### Lỗi học sinh mất gốc hay sai
- Nhầm cạnh huyền với cạnh góc vuông.
- Quên phải chứng minh cả hai tam giác đều vuông.
- Áp dụng trường hợp tam giác thường mà bỏ qua điều kiện vuông.
- Suy ra yếu tố không tương ứng.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác vuông có cạnh huyền tô nhấn
- Hai tam giác vuông đặt đối xứng

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

## Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng

- `lessonId`: `g7-v1-c4-l16`
- `chapterId`: `g7-v1-c4`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu tam giác cân và các tính chất/góc ở đáy.
- Nhận biết đường trung trực của đoạn thẳng.
- Dùng tính chất điểm trên đường trung trực cách đều hai đầu đoạn thẳng.
- Giải bài toán chứng minh/calculate cơ bản.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c4-l16-sg-01` — **Nhận dạng tam giác cân** (`basic`)
- `g7-v1-c4-l16-sg-02` — **Tính góc trong tam giác cân** (`basic`)
- `g7-v1-c4-l16-sg-03` — **Chứng minh tam giác cân từ hai cạnh/góc** (`understanding`)
- `g7-v1-c4-l16-sg-04` — **Nhận biết đường trung trực** (`understanding`)
- `g7-v1-c4-l16-sg-05` — **Dùng tính chất cách đều** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c4-l16-tpl-01` — Cho tam giác cân, tính góc đáy/góc đỉnh
- `g7-v1-c4-l16-tpl-02` — Cho hai góc bằng nhau, chọn tam giác cân
- `g7-v1-c4-l16-tpl-03` — Cho điểm nằm trên đường trung trực, suy ra hai khoảng cách bằng nhau
- `g7-v1-c4-l16-tpl-04` — Chọn đường trung trực đúng
- `g7-v1-c4-l16-tpl-05` — Kết hợp tam giác cân và tổng góc

### Lỗi học sinh mất gốc hay sai
- Nhầm góc ở đáy với góc ở đỉnh.
- Tính hai góc đáy không bằng nhau trong tam giác cân.
- Cho rằng đường trung tuyến nào cũng là đường trung trực.
- Quên đường trung trực phải vuông góc và đi qua trung điểm.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác cân có hai cạnh bên bằng nhau
- SVG đường trung trực đoạn AB

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

## Luyện tập chung trang 86
- `lessonId`: `g7-v1-c4-practice-3`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 4
- `lessonId`: `g7-v1-c4-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
