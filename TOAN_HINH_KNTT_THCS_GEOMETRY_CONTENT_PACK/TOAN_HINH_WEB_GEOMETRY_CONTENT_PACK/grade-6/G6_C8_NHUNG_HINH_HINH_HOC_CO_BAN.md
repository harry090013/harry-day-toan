# Lớp 6 — Chương 8. Những hình hình học cơ bản

- `chapterId`: `g6-v2-c8`
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 32. Điểm và đường thẳng

- `lessonId`: `g6-v2-c8-l32`
- `chapterId`: `g6-v2-c8`
- `grade`: 6
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm các khái niệm điểm, đường thẳng, điểm thuộc/không thuộc đường thẳng.
- Nhận biết ba điểm thẳng hàng và không thẳng hàng.
- Nhận biết hai đường thẳng cắt nhau, song song trong hình vẽ.
- Viết ký hiệu hình học cơ bản đúng.

### Dạng toán nhỏ nên tách trong bài
- `g6-v2-c8-l32-sg-01` — **Đọc ký hiệu điểm thuộc/không thuộc đường thẳng** (`basic`)
- `g6-v2-c8-l32-sg-02` — **Nhận biết bộ ba điểm thẳng hàng** (`basic`)
- `g6-v2-c8-l32-sg-03` — **Đếm số đường thẳng qua các cặp điểm** (`understanding`)
- `g6-v2-c8-l32-sg-04` — **Xác định giao điểm của hai đường thẳng** (`understanding`)
- `g6-v2-c8-l32-sg-05` — **Phân biệt đường thẳng song song và cắt nhau** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v2-c8-l32-tpl-01` — Cho hình, chọn ký hiệu đúng
- `g6-v2-c8-l32-tpl-02` — Cho n điểm đơn giản, đếm số đường thẳng qua hai điểm
- `g6-v2-c8-l32-tpl-03` — Chọn bộ ba điểm thẳng hàng
- `g6-v2-c8-l32-tpl-04` — Xác định giao điểm
- `g6-v2-c8-l32-tpl-05` — Chọn đường thẳng song song/cắt nhau

### Lỗi học sinh mất gốc hay sai
- Dùng ký hiệu thuộc cho đường thẳng thay vì điểm.
- Đọc sai tên đường thẳng qua hai điểm.
- Nghĩ hai đường thẳng không cắt trong hình vẽ ngắn là song song mà không xét kéo dài.
- Đếm trùng đường thẳng AB và BA.

### Hình minh họa nên tạo nếu UI cho phép
- SVG điểm A trên đường thẳng d và điểm B không thuộc d
- Hình ba điểm thẳng hàng/không thẳng hàng
- Hai đường thẳng cắt nhau/song song

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

## Bài 33. Điểm nằm giữa hai điểm. Tia

- `lessonId`: `g6-v2-c8-l33`
- `chapterId`: `g6-v2-c8`
- `grade`: 6
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu điểm nằm giữa hai điểm.
- Nhận biết tia, gốc của tia, hai tia đối nhau/trùng nhau ở mức cơ bản.
- Đọc và viết tên tia đúng.
- Sử dụng quan hệ nằm giữa để suy luận đơn giản.

### Dạng toán nhỏ nên tách trong bài
- `g6-v2-c8-l33-sg-01` — **Xác định điểm nằm giữa** (`basic`)
- `g6-v2-c8-l33-sg-02` — **Đọc tên tia và gốc tia** (`basic`)
- `g6-v2-c8-l33-sg-03` — **Nhận biết hai tia đối nhau** (`understanding`)
- `g6-v2-c8-l33-sg-04` — **Nhận biết hai tia trùng nhau** (`understanding`)
- `g6-v2-c8-l33-sg-05` — **Chọn phát biểu đúng từ hình vẽ** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v2-c8-l33-tpl-01` — Cho ba điểm thẳng hàng, chọn điểm nằm giữa
- `g6-v2-c8-l33-tpl-02` — Cho hình tia, chọn tên tia đúng
- `g6-v2-c8-l33-tpl-03` — Chọn cặp tia đối nhau
- `g6-v2-c8-l33-tpl-04` — Chọn cặp tia trùng nhau
- `g6-v2-c8-l33-tpl-05` — Điền phát biểu đúng/sai về vị trí điểm

### Lỗi học sinh mất gốc hay sai
- Cho rằng điểm nằm giữa chỉ dựa vào thứ tự chữ cái.
- Đọc tia AB và tia BA như nhau.
- Nhầm tia đối nhau với hai tia không chung gốc.
- Quên điều kiện ba điểm thẳng hàng khi nói điểm nằm giữa.

### Hình minh họa nên tạo nếu UI cho phép
- SVG đường thẳng có A-B-C theo thứ tự
- SVG tia Ox và gốc O
- Hai tia đối nhau chung gốc

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

## Bài 34. Đoạn thẳng. Độ dài đoạn thẳng

- `lessonId`: `g6-v2-c8-l34`
- `chapterId`: `g6-v2-c8`
- `grade`: 6
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu đoạn thẳng và độ dài đoạn thẳng.
- Đo/đọc độ dài đoạn thẳng.
- Dùng hệ thức cộng đoạn thẳng khi có điểm nằm giữa.
- Tìm độ dài đoạn thẳng còn thiếu trong bài đơn giản.

### Dạng toán nhỏ nên tách trong bài
- `g6-v2-c8-l34-sg-01` — **Nhận biết đoạn thẳng** (`basic`)
- `g6-v2-c8-l34-sg-02` — **Đọc tên đoạn thẳng** (`basic`)
- `g6-v2-c8-l34-sg-03` — **Tính tổng độ dài khi điểm nằm giữa** (`understanding`)
- `g6-v2-c8-l34-sg-04` — **Tìm phần còn lại của đoạn thẳng** (`understanding`)
- `g6-v2-c8-l34-sg-05` — **So sánh độ dài đoạn thẳng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v2-c8-l34-tpl-01` — Chọn đoạn thẳng trong các hình
- `g6-v2-c8-l34-tpl-02` — Cho AB, BC, điểm B nằm giữa A và C, tính AC
- `g6-v2-c8-l34-tpl-03` — Cho AC, AB, tìm BC
- `g6-v2-c8-l34-tpl-04` — So sánh hai đoạn thẳng
- `g6-v2-c8-l34-tpl-05` — Chuyển đơn vị cm/mm đơn giản

### Lỗi học sinh mất gốc hay sai
- Nhầm đường thẳng/tia với đoạn thẳng.
- Cộng độ dài dù điểm không nằm giữa.
- Đổi đơn vị sai.
- Ghi độ dài đoạn thẳng không có đơn vị.

### Hình minh họa nên tạo nếu UI cho phép
- SVG đoạn AB hữu hạn
- Hình A-B-C thẳng hàng có số đo
- Thước đo minh họa độ dài

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

## Bài 35. Trung điểm của đoạn thẳng

- `lessonId`: `g6-v2-c8-l35`
- `chapterId`: `g6-v2-c8`
- `grade`: 6
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu trung điểm của đoạn thẳng.
- Biết điều kiện để M là trung điểm của AB: M nằm giữa A, B và MA = MB.
- Tính độ dài khi biết trung điểm.
- Xác định trung điểm trên hình/lưới/thước.

### Dạng toán nhỏ nên tách trong bài
- `g6-v2-c8-l35-sg-01` — **Kiểm tra một điểm có là trung điểm không** (`basic`)
- `g6-v2-c8-l35-sg-02` — **Tính nửa độ dài đoạn thẳng** (`basic`)
- `g6-v2-c8-l35-sg-03` — **Tìm độ dài cả đoạn khi biết một nửa** (`understanding`)
- `g6-v2-c8-l35-sg-04` — **Chọn vị trí trung điểm trên trục số/lưới** (`understanding`)
- `g6-v2-c8-l35-sg-05` — **Phân biệt điểm nằm giữa và trung điểm** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v2-c8-l35-tpl-01` — Cho MA, MB, chọn M có là trung điểm không
- `g6-v2-c8-l35-tpl-02` — Cho AB, tìm AM = MB
- `g6-v2-c8-l35-tpl-03` — Cho AM, tìm AB
- `g6-v2-c8-l35-tpl-04` — Chọn phát biểu đúng về trung điểm
- `g6-v2-c8-l35-tpl-05` — Đánh dấu trung điểm trên lưới

### Lỗi học sinh mất gốc hay sai
- Chỉ kiểm tra MA = MB mà quên M phải nằm giữa A và B.
- Chỉ kiểm tra M nằm giữa mà quên hai đoạn bằng nhau.
- Lấy trung điểm bằng cách chia nhầm số lẻ.
- Nhầm trung điểm với điểm bất kỳ trên đoạn.

### Hình minh họa nên tạo nếu UI cho phép
- SVG đoạn AB với M chính giữa
- Trục số có trung điểm
- Hình phản ví dụ: M nằm ngoài nhưng MA = MB không xảy ra trong đoạn

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

## Luyện tập chung trang 57
- `lessonId`: `g6-v2-c8-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 36. Góc

- `lessonId`: `g6-v2-c8-l36`
- `chapterId`: `g6-v2-c8`
- `grade`: 6
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết góc, đỉnh, cạnh của góc.
- Đọc tên góc đúng bằng ba chữ hoặc ký hiệu góc.
- Phân biệt góc bẹt, góc không, góc thường ở mức cơ bản nếu UI hỗ trợ.
- Nhận biết điểm nằm trong/trên/ngoài góc qua hình.

### Dạng toán nhỏ nên tách trong bài
- `g6-v2-c8-l36-sg-01` — **Xác định đỉnh và cạnh của góc** (`basic`)
- `g6-v2-c8-l36-sg-02` — **Đọc tên góc** (`basic`)
- `g6-v2-c8-l36-sg-03` — **Đếm số góc trong hình đơn giản** (`understanding`)
- `g6-v2-c8-l36-sg-04` — **Nhận biết điểm trong/ngoài góc** (`understanding`)
- `g6-v2-c8-l36-sg-05` — **Chọn hình biểu diễn một góc** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v2-c8-l36-tpl-01` — Cho hình, chọn đỉnh/cạnh của góc
- `g6-v2-c8-l36-tpl-02` — Cho ba điểm, đọc tên góc
- `g6-v2-c8-l36-tpl-03` — Đếm góc tạo bởi các tia chung gốc
- `g6-v2-c8-l36-tpl-04` — Chọn điểm nằm trong góc
- `g6-v2-c8-l36-tpl-05` — Chọn phát biểu đúng/sai

### Lỗi học sinh mất gốc hay sai
- Đọc tên góc mà chữ đỉnh không đặt giữa.
- Nhầm cạnh của góc với đoạn thẳng nối hai điểm bất kỳ.
- Đếm thiếu góc khi có nhiều tia chung gốc.
- Không phân biệt điểm nằm trên cạnh và nằm trong góc.

### Hình minh họa nên tạo nếu UI cho phép
- SVG góc xOy
- Nhiều tia chung gốc O để đếm góc
- Minh họa điểm trong/trên/ngoài góc

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

## Bài 37. Số đo góc

- `lessonId`: `g6-v2-c8-l37`
- `chapterId`: `g6-v2-c8`
- `grade`: 6
- `volume`: 2
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Đo góc bằng thước đo góc.
- Phân loại góc nhọn, vuông, tù, bẹt theo số đo.
- Tính số đo góc đơn giản khi một tia nằm trong góc.
- Vận dụng cộng/trừ số đo góc trong hình đơn giản.

### Dạng toán nhỏ nên tách trong bài
- `g6-v2-c8-l37-sg-01` — **Đọc số đo góc** (`basic`)
- `g6-v2-c8-l37-sg-02` — **Phân loại góc theo số đo** (`basic`)
- `g6-v2-c8-l37-sg-03` — **Tính tổng hai góc kề** (`understanding`)
- `g6-v2-c8-l37-sg-04` — **Tìm góc còn thiếu khi biết góc lớn** (`understanding`)
- `g6-v2-c8-l37-sg-05` — **Chọn thước đo/góc đúng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g6-v2-c8-l37-tpl-01` — Cho số đo, chọn loại góc
- `g6-v2-c8-l37-tpl-02` — Cho góc AOB và tia OC nằm trong, biết hai góc nhỏ, tính góc lớn
- `g6-v2-c8-l37-tpl-03` — Cho góc lớn và một phần, tìm phần còn lại
- `g6-v2-c8-l37-tpl-04` — Chọn phát biểu đúng về góc vuông/nhọn/tù/bẹt
- `g6-v2-c8-l37-tpl-05` — Bài thực tế đo góc đơn giản

### Lỗi học sinh mất gốc hay sai
- Đọc nhầm hai thang số trên thước đo góc.
- Dùng công thức cộng góc dù tia không nằm trong góc.
- Nhầm góc tù với góc bẹt.
- Quên ký hiệu độ.

### Hình minh họa nên tạo nếu UI cho phép
- SVG thước đo góc đơn giản
- Hình góc AOB có tia OC nằm trong
- Bảng phân loại góc

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

## Luyện tập chung trang 65
- `lessonId`: `g6-v2-c8-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 8
- `lessonId`: `g6-v2-c8-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
