# Lớp 8 — Chương 3. Tứ giác

- `chapterId`: `g8-v1-c3`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 10. Tứ giác

- `lessonId`: `g8-v1-c3-l10`
- `chapterId`: `g8-v1-c3`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu tứ giác, các yếu tố đỉnh-cạnh-góc-đường chéo.
- Nắm tổng các góc trong một tứ giác bằng 360°.
- Tính góc còn thiếu trong tứ giác.
- Phân biệt tứ giác lồi/lõm ở mức phù hợp nếu UI dùng hình.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c3-l10-sg-01` — **Đọc tên tứ giác đúng thứ tự** (`basic`)
- `g8-v1-c3-l10-sg-02` — **Xác định cạnh/góc/đường chéo** (`basic`)
- `g8-v1-c3-l10-sg-03` — **Tính góc còn thiếu** (`understanding`)
- `g8-v1-c3-l10-sg-04` — **Kiểm tra bốn góc có thể là tứ giác không** (`understanding`)
- `g8-v1-c3-l10-sg-05` — **Chọn phát biểu đúng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c3-l10-tpl-01` — Cho tứ giác, hỏi cạnh/góc/đường chéo
- `g8-v1-c3-l10-tpl-02` — Cho ba góc, tính góc còn lại
- `g8-v1-c3-l10-tpl-03` — Cho bốn góc, kiểm tra tổng 360°
- `g8-v1-c3-l10-tpl-04` — Chọn tên tứ giác đúng thứ tự
- `g8-v1-c3-l10-tpl-05` — Bài toán góc ngoài/kề bù đơn giản

### Lỗi học sinh mất gốc hay sai
- Đọc tên tứ giác theo thứ tự đỉnh không kề nhau.
- Dùng tổng góc tam giác 180° cho tứ giác.
- Nhầm đường chéo với cạnh.
- Quên góc còn thiếu phải dương.

### Hình minh họa nên tạo nếu UI cho phép
- SVG tứ giác ABCD có hai đường chéo
- Sơ đồ chia tứ giác thành hai tam giác

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

## Bài 11. Hình thang cân

- `lessonId`: `g8-v1-c3-l11`
- `chapterId`: `g8-v1-c3`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm định nghĩa và tính chất hình thang cân.
- Nhận biết dấu hiệu hình thang cân.
- Tính góc/cạnh/đường chéo trong hình thang cân.
- Phân biệt hình thang cân với hình thang thường.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c3-l11-sg-01` — **Nhận dạng hình thang cân** (`basic`)
- `g8-v1-c3-l11-sg-02` — **Tính góc kề đáy** (`basic`)
- `g8-v1-c3-l11-sg-03` — **Dùng hai cạnh bên bằng nhau** (`understanding`)
- `g8-v1-c3-l11-sg-04` — **Dùng hai đường chéo bằng nhau** (`understanding`)
- `g8-v1-c3-l11-sg-05` — **Chứng minh hình thang cân dạng trắc nghiệm** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c3-l11-tpl-01` — Cho hình thang cân, tính góc còn lại
- `g8-v1-c3-l11-tpl-02` — Chọn tính chất đúng của hình thang cân
- `g8-v1-c3-l11-tpl-03` — Cho hình thang có hai đường chéo bằng nhau, chọn kết luận
- `g8-v1-c3-l11-tpl-04` — Cho cạnh bên, tính chu vi
- `g8-v1-c3-l11-tpl-05` — Chọn dữ kiện đủ để là hình thang cân

### Lỗi học sinh mất gốc hay sai
- Cho rằng hình thang nào có hai cạnh bên bằng nhau cũng là hình thang cân mà không kiểm tra hai đáy song song.
- Nhầm góc kề một cạnh bên với góc kề một đáy.
- Dùng tính chất đường chéo bằng nhau cho hình thang thường.
- Đọc sai hai đáy của hình thang.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình thang cân với hai đáy song song, cạnh bên bằng nhau
- Đánh dấu góc kề đáy bằng nhau

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

## Luyện tập chung trang 56
- `lessonId`: `g8-v1-c3-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 12. Hình bình hành

- `lessonId`: `g8-v1-c3-l12`
- `chapterId`: `g8-v1-c3`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm định nghĩa, tính chất và dấu hiệu nhận biết hình bình hành.
- Dùng cạnh đối song song/bằng nhau, góc đối bằng nhau, đường chéo cắt nhau tại trung điểm.
- Tính cạnh/góc và chọn chứng minh phù hợp.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c3-l12-sg-01` — **Nhận dạng hình bình hành** (`basic`)
- `g8-v1-c3-l12-sg-02` — **Dùng tính chất cạnh đối/góc đối** (`basic`)
- `g8-v1-c3-l12-sg-03` — **Dùng tính chất đường chéo** (`understanding`)
- `g8-v1-c3-l12-sg-04` — **Chọn dấu hiệu nhận biết** (`understanding`)
- `g8-v1-c3-l12-sg-05` — **Tính góc/cạnh trong hình bình hành** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c3-l12-tpl-01` — Cho hình bình hành, tính góc kề/góc đối
- `g8-v1-c3-l12-tpl-02` — Cho hai cạnh kề, tính chu vi
- `g8-v1-c3-l12-tpl-03` — Cho đường chéo cắt nhau, tính nửa đoạn
- `g8-v1-c3-l12-tpl-04` — Chọn dấu hiệu đủ để là hình bình hành
- `g8-v1-c3-l12-tpl-05` — Sắp xếp bước chứng minh

### Lỗi học sinh mất gốc hay sai
- Nhầm góc kề với góc đối.
- Cho rằng tứ giác có một cặp cạnh đối song song là hình bình hành.
- Quên đường chéo chỉ cắt nhau tại trung điểm, không nhất thiết bằng nhau.
- Suy ra mọi hình bình hành có góc vuông.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình bình hành có cạnh đối song song
- SVG hai đường chéo cắt nhau tại trung điểm

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

## Luyện tập chung trang 62
- `lessonId`: `g8-v1-c3-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 13. Hình chữ nhật

- `lessonId`: `g8-v1-c3-l13`
- `chapterId`: `g8-v1-c3`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm định nghĩa, tính chất và dấu hiệu nhận biết hình chữ nhật.
- Dùng đường chéo bằng nhau và cắt nhau tại trung điểm.
- Kết nối hình chữ nhật với hình bình hành có góc vuông/đường chéo bằng nhau.
- Tính cạnh, đường chéo đơn giản nếu kết hợp Pythagore sau này thì đánh dấu advanced/review.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c3-l13-sg-01` — **Nhận dạng hình chữ nhật** (`basic`)
- `g8-v1-c3-l13-sg-02` — **Tính góc trong hình chữ nhật** (`basic`)
- `g8-v1-c3-l13-sg-03` — **Dùng tính chất đường chéo** (`understanding`)
- `g8-v1-c3-l13-sg-04` — **Chọn dấu hiệu nhận biết** (`understanding`)
- `g8-v1-c3-l13-sg-05` — **Tính chu vi/diện tích ôn lại** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c3-l13-tpl-01` — Cho hình chữ nhật, tính góc/cạnh/chu vi
- `g8-v1-c3-l13-tpl-02` — Cho đường chéo cắt nhau, tính đoạn
- `g8-v1-c3-l13-tpl-03` — Chọn dấu hiệu hình bình hành là hình chữ nhật
- `g8-v1-c3-l13-tpl-04` — Chọn phát biểu đúng về đường chéo
- `g8-v1-c3-l13-tpl-05` — Bài toán thực tế khung hình

### Lỗi học sinh mất gốc hay sai
- Nghĩ hình bình hành có hai đường chéo cắt nhau tại trung điểm là hình chữ nhật.
- Nhầm đường chéo hình chữ nhật vuông góc.
- Quên bốn góc vuông.
- Dùng tính chất hình vuông cho hình chữ nhật.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình chữ nhật có hai đường chéo bằng nhau
- Bảng hình bình hành → hình chữ nhật

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

## Bài 14. Hình thoi và hình vuông

- `lessonId`: `g8-v1-c3-l14`
- `chapterId`: `g8-v1-c3`
- `grade`: 8
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm định nghĩa, tính chất, dấu hiệu nhận biết hình thoi và hình vuông.
- Phân biệt hình thoi, hình chữ nhật, hình vuông.
- Dùng đường chéo vuông góc, phân giác góc, bằng nhau tùy loại hình.
- Chọn chứng minh phù hợp.

### Dạng toán nhỏ nên tách trong bài
- `g8-v1-c3-l14-sg-01` — **Nhận dạng hình thoi** (`basic`)
- `g8-v1-c3-l14-sg-02` — **Nhận dạng hình vuông** (`basic`)
- `g8-v1-c3-l14-sg-03` — **Dùng tính chất đường chéo hình thoi** (`understanding`)
- `g8-v1-c3-l14-sg-04` — **Dùng tính chất đường chéo hình vuông** (`understanding`)
- `g8-v1-c3-l14-sg-05` — **Phân loại tứ giác theo điều kiện thêm** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g8-v1-c3-l14-tpl-01` — Cho tứ giác có bốn cạnh bằng nhau, chọn hình thoi
- `g8-v1-c3-l14-tpl-02` — Cho hình thoi có một góc vuông, chọn hình vuông
- `g8-v1-c3-l14-tpl-03` — Cho hình chữ nhật có hai cạnh kề bằng nhau, chọn hình vuông
- `g8-v1-c3-l14-tpl-04` — Tính góc/đoạn từ đường chéo
- `g8-v1-c3-l14-tpl-05` — Chọn phát biểu đúng/sai

### Lỗi học sinh mất gốc hay sai
- Cho rằng hình thoi luôn có bốn góc vuông.
- Cho rằng hình vuông không phải hình chữ nhật/hình thoi.
- Nhầm đường chéo hình thoi bằng nhau.
- Quên đường chéo hình vuông vừa bằng nhau vừa vuông góc.

### Hình minh họa nên tạo nếu UI cho phép
- SVG sơ đồ quan hệ hình bình hành-hình chữ nhật-hình thoi-hình vuông
- SVG đường chéo hình thoi/hình vuông

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

## Luyện tập chung trang 73
- `lessonId`: `g8-v1-c3-practice-3`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 3
- `lessonId`: `g8-v1-c3-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
