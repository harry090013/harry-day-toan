# Lớp 9 — Chương 9. Đường tròn ngoại tiếp và đường tròn nội tiếp

- `chapterId`: `g9-v2-c9`
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 27. Góc nội tiếp

- `lessonId`: `g9-v2-c9-l27`
- `chapterId`: `g9-v2-c9`
- `grade`: 9
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm góc nội tiếp và cung bị chắn.
- Dùng định lí số đo góc nội tiếp bằng nửa số đo cung bị chắn.
- Nhận biết các góc nội tiếp cùng chắn một cung thì bằng nhau.
- Tính góc trong đường tròn.

### Dạng toán nhỏ nên tách trong bài
- `g9-v2-c9-l27-sg-01` — **Nhận biết góc nội tiếp** (`basic`)
- `g9-v2-c9-l27-sg-02` — **Xác định cung bị chắn** (`basic`)
- `g9-v2-c9-l27-sg-03` — **Tính góc từ cung** (`understanding`)
- `g9-v2-c9-l27-sg-04` — **Tính cung từ góc** (`understanding`)
- `g9-v2-c9-l27-sg-05` — **Dùng góc cùng chắn cung** (`application`)
- `g9-v2-c9-l27-sg-06` — **Góc nội tiếp chắn nửa đường tròn** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v2-c9-l27-tpl-01` — Cho cung, tính góc nội tiếp
- `g9-v2-c9-l27-tpl-02` — Cho góc nội tiếp, tính cung
- `g9-v2-c9-l27-tpl-03` — Chọn các góc bằng nhau cùng chắn một cung
- `g9-v2-c9-l27-tpl-04` — Góc chắn đường kính bằng 90°
- `g9-v2-c9-l27-tpl-05` — Bài toán nhiều góc trong đường tròn

### Lỗi học sinh mất gốc hay sai
- Nhầm góc nội tiếp với góc ở tâm.
- Lấy góc nội tiếp bằng cung thay vì bằng nửa cung.
- Xác định sai cung bị chắn.
- Quên hai góc cùng chắn một cung mới bằng nhau.

### Hình minh họa nên tạo nếu UI cho phép
- SVG góc nội tiếp BAC chắn cung BC
- Đường kính tạo góc vuông trên đường tròn

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

## Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác

- `lessonId`: `g9-v2-c9-l28`
- `chapterId`: `g9-v2-c9`
- `grade`: 9
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu đường tròn ngoại tiếp tam giác và tâm ngoại tiếp.
- Hiểu đường tròn nội tiếp tam giác và tâm nội tiếp.
- Nhận biết tâm ngoại tiếp là giao các đường trung trực, tâm nội tiếp là giao các phân giác.
- Xác định bán kính ngoại tiếp/nội tiếp trong hình đơn giản nếu dữ kiện cho.

### Dạng toán nhỏ nên tách trong bài
- `g9-v2-c9-l28-sg-01` — **Nhận biết đường tròn ngoại tiếp** (`basic`)
- `g9-v2-c9-l28-sg-02` — **Nhận biết đường tròn nội tiếp** (`basic`)
- `g9-v2-c9-l28-sg-03` — **Xác định tâm ngoại tiếp** (`understanding`)
- `g9-v2-c9-l28-sg-04` — **Xác định tâm nội tiếp** (`understanding`)
- `g9-v2-c9-l28-sg-05` — **Phân biệt hai loại đường tròn** (`application`)
- `g9-v2-c9-l28-sg-06` — **Chọn tính chất cách đều** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v2-c9-l28-tpl-01` — Cho hình, chọn đường tròn ngoại tiếp/nội tiếp
- `g9-v2-c9-l28-tpl-02` — Chọn tâm ngoại tiếp/tâm nội tiếp
- `g9-v2-c9-l28-tpl-03` — Suy ra OA=OB=OC với tâm ngoại tiếp
- `g9-v2-c9-l28-tpl-04` — Suy ra khoảng cách từ tâm nội tiếp đến các cạnh bằng nhau
- `g9-v2-c9-l28-tpl-05` — Chọn phát biểu đúng/sai

### Lỗi học sinh mất gốc hay sai
- Nhầm ngoại tiếp với nội tiếp.
- Nhầm tâm ngoại tiếp với trọng tâm.
- Cho rằng tâm ngoại tiếp luôn nằm trong tam giác.
- Không phân biệt cách đều đỉnh và cách đều cạnh.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác nội tiếp đường tròn
- SVG đường tròn nội tiếp tam giác tiếp xúc ba cạnh
- Bảng phân biệt O/I

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

## Luyện tập chung trang 78
- `lessonId`: `g9-v2-c9-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 29. Tứ giác nội tiếp

- `lessonId`: `g9-v2-c9-l29`
- `chapterId`: `g9-v2-c9`
- `grade`: 9
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm tứ giác nội tiếp.
- Dùng tính chất tổng hai góc đối bằng 180°.
- Nhận biết dấu hiệu tứ giác nội tiếp.
- Tính góc và chứng minh nội tiếp dạng trắc nghiệm.

### Dạng toán nhỏ nên tách trong bài
- `g9-v2-c9-l29-sg-01` — **Nhận biết tứ giác nội tiếp** (`basic`)
- `g9-v2-c9-l29-sg-02` — **Tính góc đối trong tứ giác nội tiếp** (`basic`)
- `g9-v2-c9-l29-sg-03` — **Chọn dấu hiệu nội tiếp** (`understanding`)
- `g9-v2-c9-l29-sg-04` — **Chứng minh bốn điểm cùng thuộc một đường tròn** (`understanding`)
- `g9-v2-c9-l29-sg-05` — **Bài toán góc kết hợp** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v2-c9-l29-tpl-01` — Cho tứ giác nội tiếp, tính góc đối
- `g9-v2-c9-l29-tpl-02` — Cho tổng góc đối 180°, chọn kết luận nội tiếp
- `g9-v2-c9-l29-tpl-03` — Chọn phát biểu đúng về tứ giác nội tiếp
- `g9-v2-c9-l29-tpl-04` — Bài toán góc nội tiếp kết hợp
- `g9-v2-c9-l29-tpl-05` — Sắp xếp chứng minh nội tiếp

### Lỗi học sinh mất gốc hay sai
- Cộng hai góc kề thay vì hai góc đối.
- Cho rằng mọi tứ giác đều nội tiếp.
- Quên điều kiện hai góc đối bù nhau.
- Nhầm tứ giác nội tiếp với hình tròn nội tiếp tứ giác.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tứ giác ABCD nội tiếp đường tròn
- Đánh dấu hai góc đối bù nhau

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

## Bài 30. Đa giác đều

- `lessonId`: `g9-v2-c9-l30`
- `chapterId`: `g9-v2-c9`
- `grade`: 9
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm khái niệm đa giác đều.
- Tính số đo góc ở tâm/góc trong/góc ngoài của đa giác đều nếu bài dùng.
- Nhận biết đa giác đều nội tiếp/ngoại tiếp đường tròn.
- Tính chu vi/diện tích trong tình huống đơn giản nếu công thức được cung cấp.

### Dạng toán nhỏ nên tách trong bài
- `g9-v2-c9-l30-sg-01` — **Nhận dạng đa giác đều** (`basic`)
- `g9-v2-c9-l30-sg-02` — **Tính góc ở tâm 360°/n** (`basic`)
- `g9-v2-c9-l30-sg-03` — **Tính góc trong/góc ngoài** (`understanding`)
- `g9-v2-c9-l30-sg-04` — **Đếm cạnh/đỉnh/đường chéo đơn giản** (`understanding`)
- `g9-v2-c9-l30-sg-05` — **Liên hệ đường tròn ngoại tiếp/nội tiếp** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v2-c9-l30-tpl-01` — Cho n, tính góc ở tâm
- `g9-v2-c9-l30-tpl-02` — Cho n, tính góc ngoài/góc trong
- `g9-v2-c9-l30-tpl-03` — Chọn hình là đa giác đều
- `g9-v2-c9-l30-tpl-04` — Tính chu vi khi biết cạnh
- `g9-v2-c9-l30-tpl-05` — Chọn phát biểu đúng về tâm đa giác đều

### Lỗi học sinh mất gốc hay sai
- Nhầm đa giác có các cạnh bằng nhau với đa giác đều mà không xét góc.
- Tính góc trong bằng 360°/n.
- Nhầm góc ở tâm với góc ngoài.
- Quên n >= 3.

### Hình minh họa nên tạo nếu UI cho phép
- SVG ngũ giác/lục giác đều nội tiếp đường tròn
- Tâm O nối đến các đỉnh tạo góc ở tâm

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

## Luyện tập chung trang 90
- `lessonId`: `g9-v2-c9-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 9
- `lessonId`: `g9-v2-c9-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
