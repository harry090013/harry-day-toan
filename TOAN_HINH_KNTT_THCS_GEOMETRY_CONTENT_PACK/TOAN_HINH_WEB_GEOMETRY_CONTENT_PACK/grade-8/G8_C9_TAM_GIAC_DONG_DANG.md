# Lớp 8 — Chương 9. Tam giác đồng dạng

- `chapterId`: `g8-v2-c9`
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 33. Hai tam giác đồng dạng

- `lessonId`: `g8-v2-c9-l33`
- `chapterId`: `g8-v2-c9`
- `grade`: 8
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu khái niệm hai tam giác đồng dạng.
- Nhận biết các góc tương ứng bằng nhau, cạnh tương ứng tỉ lệ.
- Tính tỉ số đồng dạng và cạnh còn thiếu.
- Phân biệt đồng dạng với bằng nhau.

### Dạng toán nhỏ nên tách trong bài
- `g8-v2-c9-l33-sg-01` — **Nhận diện cặp đỉnh tương ứng** (`basic`)
- `g8-v2-c9-l33-sg-02` — **Lập tỉ số đồng dạng** (`basic`)
- `g8-v2-c9-l33-sg-03` — **Tính cạnh còn thiếu** (`understanding`)
- `g8-v2-c9-l33-sg-04` — **Chọn kết luận về góc/cạnh tương ứng** (`understanding`)
- `g8-v2-c9-l33-sg-05` — **Phân biệt đồng dạng và bằng nhau** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v2-c9-l33-tpl-01` — Cho hai tam giác đồng dạng, tìm cạnh tương ứng
- `g8-v2-c9-l33-tpl-02` — Biết tỉ số đồng dạng, tính cạnh
- `g8-v2-c9-l33-tpl-03` — Chọn cách viết đồng dạng đúng thứ tự
- `g8-v2-c9-l33-tpl-04` — Tính chu vi theo tỉ số đồng dạng
- `g8-v2-c9-l33-tpl-05` — Chọn phát biểu đúng/sai

### Lỗi học sinh mất gốc hay sai
- Viết sai thứ tự đỉnh trong ký hiệu đồng dạng.
- Lập tỉ số cạnh không tương ứng.
- Cho rằng đồng dạng thì cạnh bằng nhau.
- Nhầm tỉ số chu vi với tỉ số diện tích.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hai tam giác cùng dạng khác kích thước
- Bảng đỉnh/cạnh tương ứng

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

## Bài 34. Ba trường hợp đồng dạng của hai tam giác

- `lessonId`: `g8-v2-c9-l34`
- `chapterId`: `g8-v2-c9`
- `grade`: 8
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm ba trường hợp đồng dạng của hai tam giác.
- Chọn đúng trường hợp góc-góc, cạnh-cạnh-cạnh, cạnh-góc-cạnh.
- Từ đồng dạng suy ra tỉ số cạnh/góc tương ứng.
- Chứng minh đồng dạng dạng trắc nghiệm.

### Dạng toán nhỏ nên tách trong bài
- `g8-v2-c9-l34-sg-01` — **Áp dụng góc-góc** (`basic`)
- `g8-v2-c9-l34-sg-02` — **Áp dụng cạnh-cạnh-cạnh tỉ lệ** (`basic`)
- `g8-v2-c9-l34-sg-03` — **Áp dụng cạnh-góc-cạnh** (`understanding`)
- `g8-v2-c9-l34-sg-04` — **Chọn trường hợp phù hợp** (`understanding`)
- `g8-v2-c9-l34-sg-05` — **Tính cạnh sau khi chứng minh đồng dạng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v2-c9-l34-tpl-01` — Cho hai góc bằng nhau, chọn đồng dạng
- `g8-v2-c9-l34-tpl-02` — Cho ba cặp cạnh tỉ lệ, chọn đồng dạng
- `g8-v2-c9-l34-tpl-03` — Cho hai cặp cạnh tỉ lệ và góc xen giữa, chọn đồng dạng
- `g8-v2-c9-l34-tpl-04` — Nhận biết dữ kiện không đủ
- `g8-v2-c9-l34-tpl-05` — Tính x từ tam giác đồng dạng

### Lỗi học sinh mất gốc hay sai
- Dùng c-g-c khi góc không xen giữa.
- Chỉ có một góc bằng nhau đã kết luận đồng dạng.
- Không kiểm tra tỉ lệ cùng một hệ số.
- Suy ra cạnh không tương ứng.

### Hình minh họa nên tạo nếu UI cho phép
- SVG minh họa ba trường hợp đồng dạng
- Bảng checklist điều kiện đồng dạng

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

## Luyện tập chung trang 91
- `lessonId`: `g8-v2-c9-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 35. Định lí Pythagore và ứng dụng

- `lessonId`: `g8-v2-c9-l35`
- `chapterId`: `g8-v2-c9`
- `grade`: 8
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm định lí Pythagore và định lí đảo.
- Tính cạnh huyền/cạnh góc vuông của tam giác vuông.
- Kiểm tra tam giác có vuông không bằng bình phương độ dài.
- Ứng dụng vào khoảng cách, đường chéo, chiều cao.

### Dạng toán nhỏ nên tách trong bài
- `g8-v2-c9-l35-sg-01` — **Tính cạnh huyền** (`basic`)
- `g8-v2-c9-l35-sg-02` — **Tính cạnh góc vuông** (`basic`)
- `g8-v2-c9-l35-sg-03` — **Kiểm tra tam giác vuông** (`understanding`)
- `g8-v2-c9-l35-sg-04` — **Tính đường chéo hình chữ nhật** (`understanding`)
- `g8-v2-c9-l35-sg-05` — **Bài toán thực tế khoảng cách** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v2-c9-l35-tpl-01` — Cho hai cạnh góc vuông, tính cạnh huyền
- `g8-v2-c9-l35-tpl-02` — Cho cạnh huyền và một cạnh góc vuông, tính cạnh còn lại
- `g8-v2-c9-l35-tpl-03` — Kiểm tra bộ ba Pythagore
- `g8-v2-c9-l35-tpl-04` — Tính đường chéo hình chữ nhật
- `g8-v2-c9-l35-tpl-05` — Bài toán thang dựa tường

### Lỗi học sinh mất gốc hay sai
- Cộng độ dài hai cạnh thay vì bình phương.
- Không xác định đúng cạnh huyền.
- Quên lấy căn bậc hai.
- Dùng định lí Pythagore cho tam giác không vuông.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tam giác vuông ghi a,b,c
- Hình chữ nhật có đường chéo
- Bài thang dựa tường

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

## Bài 36. Các trường hợp đồng dạng của hai tam giác vuông

- `lessonId`: `g8-v2-c9-l36`
- `chapterId`: `g8-v2-c9`
- `grade`: 8
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm các trường hợp đồng dạng của hai tam giác vuông.
- Dùng góc nhọn, cạnh huyền-cạnh góc vuông, tỉ lệ cạnh để chứng minh đồng dạng.
- Tính cạnh trong tam giác vuông qua đồng dạng.
- Kết nối với Pythagore.

### Dạng toán nhỏ nên tách trong bài
- `g8-v2-c9-l36-sg-01` — **Nhận diện tam giác vuông** (`basic`)
- `g8-v2-c9-l36-sg-02` — **Áp dụng góc nhọn bằng nhau** (`basic`)
- `g8-v2-c9-l36-sg-03` — **Áp dụng tỉ lệ cạnh huyền-cạnh góc vuông** (`understanding`)
- `g8-v2-c9-l36-sg-04` — **Tính cạnh từ đồng dạng** (`understanding`)
- `g8-v2-c9-l36-sg-05` — **Chọn dữ kiện đủ** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v2-c9-l36-tpl-01` — Cho hai tam giác vuông có một góc nhọn bằng nhau
- `g8-v2-c9-l36-tpl-02` — Cho cạnh huyền và cạnh góc vuông tỉ lệ
- `g8-v2-c9-l36-tpl-03` — Tính x sau khi chứng minh đồng dạng
- `g8-v2-c9-l36-tpl-04` — Chọn trường hợp đồng dạng phù hợp
- `g8-v2-c9-l36-tpl-05` — Bài toán đường cao trong tam giác vuông nếu phù hợp

### Lỗi học sinh mất gốc hay sai
- Quên kiểm tra cả hai tam giác vuông.
- Nhầm cạnh huyền với cạnh góc vuông.
- Dùng cặp cạnh không tương ứng.
- Kết luận bằng nhau thay vì đồng dạng.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hai tam giác vuông có góc nhọn chung/bằng nhau
- Bảng cạnh huyền-cạnh góc vuông tương ứng

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

## Bài 37. Hình đồng dạng

- `lessonId`: `g8-v2-c9-l37`
- `chapterId`: `g8-v2-c9`
- `grade`: 8
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu hình đồng dạng trong mặt phẳng ở mức trực quan.
- Nhận biết phóng to/thu nhỏ giữ nguyên hình dạng.
- Tính kích thước theo tỉ số đồng dạng.
- Ứng dụng bản đồ, ảnh, mô hình.

### Dạng toán nhỏ nên tách trong bài
- `g8-v2-c9-l37-sg-01` — **Nhận dạng hai hình đồng dạng** (`basic`)
- `g8-v2-c9-l37-sg-02` — **Tính tỉ số phóng to/thu nhỏ** (`basic`)
- `g8-v2-c9-l37-sg-03` — **Tính kích thước tương ứng** (`understanding`)
- `g8-v2-c9-l37-sg-04` — **Bài toán tỉ lệ bản đồ** (`understanding`)
- `g8-v2-c9-l37-sg-05` — **Phân biệt đồng dạng và bằng nhau** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v2-c9-l37-tpl-01` — Cho hai hình, chọn có đồng dạng không
- `g8-v2-c9-l37-tpl-02` — Biết tỉ số, tính cạnh tương ứng
- `g8-v2-c9-l37-tpl-03` — Cho kích thước ảnh và vật, tính tỉ lệ
- `g8-v2-c9-l37-tpl-04` — Bài toán bản đồ đơn giản
- `g8-v2-c9-l37-tpl-05` — Chọn phát biểu đúng/sai về hình đồng dạng

### Lỗi học sinh mất gốc hay sai
- Cho rằng chỉ cần cùng diện tích là đồng dạng.
- Nhầm tỉ số thu nhỏ với phóng to.
- Dùng cạnh không tương ứng.
- Quên đơn vị trong bài bản đồ.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hai hình chữ nhật đồng dạng/không đồng dạng
- Hình bản đồ tỉ lệ đơn giản

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
- `lessonId`: `g8-v2-c9-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 9
- `lessonId`: `g8-v2-c9-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
