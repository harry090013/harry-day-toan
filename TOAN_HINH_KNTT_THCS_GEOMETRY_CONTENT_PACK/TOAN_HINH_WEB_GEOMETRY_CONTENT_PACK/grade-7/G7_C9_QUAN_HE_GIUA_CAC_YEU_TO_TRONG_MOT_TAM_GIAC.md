# Lớp 7 — Chương 9. Quan hệ giữa các yếu tố trong một tam giác

- `chapterId`: `g7-v2-c9`
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 31. Quan hệ giữa góc và cạnh đối diện trong một tam giác

- `lessonId`: `g7-v2-c9-l31`
- `chapterId`: `g7-v2-c9`
- `grade`: 7
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm quan hệ giữa góc và cạnh đối diện trong tam giác.
- So sánh cạnh dựa vào góc đối diện và ngược lại.
- Xác định cạnh lớn nhất/góc lớn nhất trong tam giác.

### Dạng toán nhỏ nên tách trong bài
- `g7-v2-c9-l31-sg-01` — **So sánh cạnh khi biết góc** (`basic`)
- `g7-v2-c9-l31-sg-02` — **So sánh góc khi biết cạnh** (`basic`)
- `g7-v2-c9-l31-sg-03` — **Xác định cạnh lớn nhất/nhỏ nhất** (`understanding`)
- `g7-v2-c9-l31-sg-04` — **Xác định góc lớn nhất/nhỏ nhất** (`understanding`)
- `g7-v2-c9-l31-sg-05` — **Kiểm tra phát biểu đúng/sai** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v2-c9-l31-tpl-01` — Cho ba góc, chọn cạnh lớn nhất
- `g7-v2-c9-l31-tpl-02` — Cho ba cạnh, chọn góc lớn nhất
- `g7-v2-c9-l31-tpl-03` — So sánh hai cạnh đối diện hai góc
- `g7-v2-c9-l31-tpl-04` — So sánh hai góc đối diện hai cạnh
- `g7-v2-c9-l31-tpl-05` — Kết hợp tam giác cân

### Lỗi học sinh mất gốc hay sai
- So sánh cạnh kề góc thay vì cạnh đối diện.
- Không xác định đúng góc đối diện cạnh.
- Nghĩ cạnh dài hơn đối diện góc nhỏ hơn.
- Quên trong tam giác cân hai góc đáy bằng nhau.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác có đánh dấu góc và cạnh đối diện
- Bảng cặp góc-cạnh đối diện

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

## Bài 32. Quan hệ giữa đường vuông góc và đường xiên

- `lessonId`: `g7-v2-c9-l32`
- `chapterId`: `g7-v2-c9`
- `grade`: 7
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu quan hệ đường vuông góc, đường xiên, hình chiếu.
- Biết đường vuông góc là khoảng cách ngắn nhất từ điểm đến đường thẳng.
- So sánh đường xiên theo hình chiếu.

### Dạng toán nhỏ nên tách trong bài
- `g7-v2-c9-l32-sg-01` — **Nhận biết đường vuông góc và đường xiên** (`basic`)
- `g7-v2-c9-l32-sg-02` — **Xác định hình chiếu** (`basic`)
- `g7-v2-c9-l32-sg-03` — **So sánh đường xiên** (`understanding`)
- `g7-v2-c9-l32-sg-04` — **So sánh hình chiếu** (`understanding`)
- `g7-v2-c9-l32-sg-05` — **Bài toán khoảng cách từ điểm đến đường thẳng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v2-c9-l32-tpl-01` — Cho hình, chọn đường vuông góc/đường xiên
- `g7-v2-c9-l32-tpl-02` — Chọn khoảng cách từ điểm đến đường thẳng
- `g7-v2-c9-l32-tpl-03` — Biết hình chiếu dài hơn, chọn đường xiên dài hơn
- `g7-v2-c9-l32-tpl-04` — So sánh hai đường xiên
- `g7-v2-c9-l32-tpl-05` — Chọn phát biểu đúng/sai

### Lỗi học sinh mất gốc hay sai
- Lấy đường xiên làm khoảng cách ngắn nhất.
- Nhầm hình chiếu với đường xiên.
- So sánh sai chiều giữa hình chiếu và đường xiên.
- Không kiểm tra chân đường vuông góc nằm trên đường thẳng.

### Hình minh họa nên tạo nếu UI cho phép
- SVG điểm A ngoài đường thẳng d, AH vuông góc d, AB/AC là đường xiên

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

## Bài 33. Quan hệ giữa ba cạnh của một tam giác

- `lessonId`: `g7-v2-c9-l33`
- `chapterId`: `g7-v2-c9`
- `grade`: 7
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm bất đẳng thức tam giác.
- Kiểm tra ba độ dài có lập thành tam giác không.
- Tìm khoảng giá trị của cạnh còn lại.
- So sánh chu vi/độ dài trong tình huống đơn giản.

### Dạng toán nhỏ nên tách trong bài
- `g7-v2-c9-l33-sg-01` — **Kiểm tra điều kiện lập tam giác** (`basic`)
- `g7-v2-c9-l33-sg-02` — **Tìm cạnh lớn nhất phải nhỏ hơn tổng hai cạnh còn lại** (`basic`)
- `g7-v2-c9-l33-sg-03` — **Tìm khoảng cạnh thứ ba** (`understanding`)
- `g7-v2-c9-l33-sg-04` — **Chọn bộ ba độ dài đúng** (`understanding`)
- `g7-v2-c9-l33-sg-05` — **Giải bài thực tế về độ dài đường đi** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v2-c9-l33-tpl-01` — Cho ba số, hỏi có lập thành tam giác không
- `g7-v2-c9-l33-tpl-02` — Cho hai cạnh, tìm giá trị cạnh thứ ba phù hợp
- `g7-v2-c9-l33-tpl-03` — Chọn phát biểu đúng về bất đẳng thức tam giác
- `g7-v2-c9-l33-tpl-04` — Tìm giá trị nguyên của cạnh còn lại
- `g7-v2-c9-l33-tpl-05` — Bài toán đường đi ngắn hơn tổng hai đoạn

### Lỗi học sinh mất gốc hay sai
- Chỉ kiểm tra một bất đẳng thức không đủ.
- Cho phép cạnh bằng tổng hai cạnh còn lại.
- Quên cạnh phải dương.
- Nhầm điều kiện tam giác với điều kiện tam giác vuông.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác có ba cạnh a,b,c
- Trục số biểu diễn khoảng cạnh thứ ba

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

## Luyện tập chung trang 71
- `lessonId`: `g7-v2-c9-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 34. Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác

- `lessonId`: `g7-v2-c9-l34`
- `chapterId`: `g7-v2-c9`
- `grade`: 7
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm ba đường trung tuyến đồng quy tại trọng tâm.
- Nắm ba đường phân giác đồng quy tại điểm cách đều ba cạnh.
- Nhận biết trọng tâm và tâm đường tròn nội tiếp ở mức cơ bản.
- Tính tỉ lệ trên trung tuyến nếu SGK/giáo viên xác nhận mức cần dùng.

### Dạng toán nhỏ nên tách trong bài
- `g7-v2-c9-l34-sg-01` — **Nhận biết đường trung tuyến** (`basic`)
- `g7-v2-c9-l34-sg-02` — **Xác định trọng tâm** (`basic`)
- `g7-v2-c9-l34-sg-03` — **Nhận biết đường phân giác** (`understanding`)
- `g7-v2-c9-l34-sg-04` — **Xác định điểm đồng quy phân giác** (`understanding`)
- `g7-v2-c9-l34-sg-05` — **Chọn tính chất đúng của trọng tâm/tâm trong** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v2-c9-l34-tpl-01` — Cho tam giác, chọn đường trung tuyến
- `g7-v2-c9-l34-tpl-02` — Cho giao điểm hai trung tuyến, chọn kết luận về trung tuyến thứ ba
- `g7-v2-c9-l34-tpl-03` — Cho điểm trên phân giác, chọn khoảng cách đến hai cạnh
- `g7-v2-c9-l34-tpl-04` — Chọn tâm cách đều ba cạnh
- `g7-v2-c9-l34-tpl-05` — Tính đoạn trên trung tuyến theo tỉ lệ 2:1 nếu được dùng

### Lỗi học sinh mất gốc hay sai
- Nhầm trung tuyến với đường cao hoặc phân giác.
- Cho rằng trọng tâm cách đều ba đỉnh.
- Nhầm tâm đường tròn nội tiếp với ngoại tiếp.
- Dùng tỉ lệ 2:1 sai chiều từ đỉnh/trung điểm.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác có ba trung tuyến đồng quy G
- SVG ba phân giác đồng quy I

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

## Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác

- `lessonId`: `g7-v2-c9-l35`
- `chapterId`: `g7-v2-c9`
- `grade`: 7
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm ba đường trung trực đồng quy tại điểm cách đều ba đỉnh.
- Nắm ba đường cao đồng quy tại trực tâm.
- Phân biệt tâm ngoại tiếp và trực tâm.
- Nhận biết các đường đặc biệt trong tam giác.

### Dạng toán nhỏ nên tách trong bài
- `g7-v2-c9-l35-sg-01` — **Nhận biết đường trung trực** (`basic`)
- `g7-v2-c9-l35-sg-02` — **Xác định tâm ngoại tiếp** (`basic`)
- `g7-v2-c9-l35-sg-03` — **Nhận biết đường cao** (`understanding`)
- `g7-v2-c9-l35-sg-04` — **Xác định trực tâm** (`understanding`)
- `g7-v2-c9-l35-sg-05` — **Chọn tính chất đúng của điểm đồng quy** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v2-c9-l35-tpl-01` — Cho tam giác, chọn đường trung trực
- `g7-v2-c9-l35-tpl-02` — Cho giao điểm đường trung trực, suy ra cách đều ba đỉnh
- `g7-v2-c9-l35-tpl-03` — Cho đường cao, xác định chân đường cao
- `g7-v2-c9-l35-tpl-04` — Chọn trực tâm
- `g7-v2-c9-l35-tpl-05` — Phân biệt trọng tâm/tâm nội tiếp/tâm ngoại tiếp/trực tâm

### Lỗi học sinh mất gốc hay sai
- Nhầm đường trung trực với trung tuyến.
- Nhầm đường cao với cạnh bên.
- Cho rằng trực tâm luôn nằm trong tam giác.
- Nhầm tâm ngoại tiếp với tâm nội tiếp.

### Hình minh họa nên tạo nếu UI cho phép
- SVG ba trung trực đồng quy O
- SVG ba đường cao đồng quy H
- Bảng bốn điểm đặc biệt trong tam giác

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

## Luyện tập chung trang 83
- `lessonId`: `g7-v2-c9-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 9
- `lessonId`: `g7-v2-c9-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
