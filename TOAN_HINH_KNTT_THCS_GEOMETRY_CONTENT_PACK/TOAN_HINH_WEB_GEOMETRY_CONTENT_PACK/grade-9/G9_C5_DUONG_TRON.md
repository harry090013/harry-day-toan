# Lớp 9 — Chương 5. Đường tròn

- `chapterId`: `g9-v1-c5`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 13. Mở đầu về đường tròn

- `lessonId`: `g9-v1-c5-l13`
- `chapterId`: `g9-v1-c5`
- `grade`: 9
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm các khái niệm cơ bản của đường tròn: tâm, bán kính, đường kính, dây, cung ở mức mở đầu.
- Nhận biết điểm thuộc/trong/ngoài đường tròn qua khoảng cách đến tâm.
- Dùng quan hệ bán kính-đường kính.
- Đọc ký hiệu đường tròn.

### Dạng toán nhỏ nên tách trong bài
- `g9-v1-c5-l13-sg-01` — **Xác định tâm/bán kính/đường kính/dây** (`basic`)
- `g9-v1-c5-l13-sg-02` — **Tính đường kính từ bán kính và ngược lại** (`basic`)
- `g9-v1-c5-l13-sg-03` — **Kiểm tra điểm thuộc/trong/ngoài đường tròn** (`understanding`)
- `g9-v1-c5-l13-sg-04` — **Chọn phát biểu đúng về dây và đường kính** (`understanding`)
- `g9-v1-c5-l13-sg-05` — **Đọc ký hiệu đường tròn** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v1-c5-l13-tpl-01` — Cho hình, chọn bán kính/đường kính/dây
- `g9-v1-c5-l13-tpl-02` — Biết R, tính D
- `g9-v1-c5-l13-tpl-03` — Biết D, tính R
- `g9-v1-c5-l13-tpl-04` — Cho OM và R, xác định vị trí điểm M
- `g9-v1-c5-l13-tpl-05` — Chọn dây lớn nhất là đường kính

### Lỗi học sinh mất gốc hay sai
- Nhầm dây bất kỳ với đường kính.
- Quên đường kính đi qua tâm.
- So sánh khoảng cách đến tâm sai khi xét điểm trong/ngoài.
- Dùng đường kính làm bán kính trong công thức.

### Hình minh họa nên tạo nếu UI cho phép
- SVG đường tròn tâm O, bán kính OA, đường kính BC, dây DE
- Minh họa điểm trong/trên/ngoài đường tròn

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

## Bài 14. Cung và dây của một đường tròn

- `lessonId`: `g9-v1-c5-l14`
- `chapterId`: `g9-v1-c5`
- `grade`: 9
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu cung và dây trong một đường tròn.
- Dùng quan hệ giữa cung bằng nhau và dây bằng nhau ở mức bài học.
- So sánh cung/dây theo độ lớn.
- Tính số đo cung đơn giản nếu dữ kiện trực tiếp.

### Dạng toán nhỏ nên tách trong bài
- `g9-v1-c5-l14-sg-01` — **Nhận biết cung và dây** (`basic`)
- `g9-v1-c5-l14-sg-02` — **Chọn cung tương ứng với dây** (`basic`)
- `g9-v1-c5-l14-sg-03` — **Dùng dây bằng nhau suy ra cung bằng nhau** (`understanding`)
- `g9-v1-c5-l14-sg-04` — **So sánh dây/cung** (`understanding`)
- `g9-v1-c5-l14-sg-05` — **Tính số đo cung đơn giản** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v1-c5-l14-tpl-01` — Cho hình, chọn cung chắn bởi dây
- `g9-v1-c5-l14-tpl-02` — Cho hai dây bằng nhau, chọn kết luận về cung
- `g9-v1-c5-l14-tpl-03` — Cho hai cung bằng nhau, chọn kết luận về dây
- `g9-v1-c5-l14-tpl-04` — So sánh hai dây khi biết cung
- `g9-v1-c5-l14-tpl-05` — Chọn phát biểu đúng/sai

### Lỗi học sinh mất gốc hay sai
- Nhầm cung nhỏ với cung lớn.
- Không xét cùng một đường tròn hoặc hai đường tròn bằng nhau.
- Nhầm dây với tiếp tuyến.
- Đọc ký hiệu cung sai.

### Hình minh họa nên tạo nếu UI cho phép
- SVG đường tròn có dây AB và cung AB nhỏ/lớn
- Hai dây bằng nhau đánh dấu

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

## Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên

- `lessonId`: `g9-v1-c5-l15`
- `chapterId`: `g9-v1-c5`
- `grade`: 9
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm công thức độ dài cung tròn.
- Nắm công thức diện tích hình quạt tròn và hình vành khuyên.
- Tính toán theo bán kính và số đo cung/góc ở tâm.
- Giải bài toán thực tế về quạt, bánh, vành tròn.

### Dạng toán nhỏ nên tách trong bài
- `g9-v1-c5-l15-sg-01` — **Tính độ dài cung** (`basic`)
- `g9-v1-c5-l15-sg-02` — **Tính diện tích hình quạt** (`basic`)
- `g9-v1-c5-l15-sg-03` — **Tính diện tích hình vành khuyên** (`understanding`)
- `g9-v1-c5-l15-sg-04` — **Tìm bán kính/góc khi biết đại lượng còn lại mức cơ bản** (`understanding`)
- `g9-v1-c5-l15-sg-05` — **Bài toán thực tế** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v1-c5-l15-tpl-01` — Cho R và n°, tính cung
- `g9-v1-c5-l15-tpl-02` — Cho R và n°, tính diện tích quạt
- `g9-v1-c5-l15-tpl-03` — Cho R lớn/R nhỏ, tính diện tích vành khuyên
- `g9-v1-c5-l15-tpl-04` — Chọn công thức đúng
- `g9-v1-c5-l15-tpl-05` — Bài toán miếng pizza/quạt giấy

### Lỗi học sinh mất gốc hay sai
- Dùng công thức chu vi cả đường tròn cho cung mà quên nhân n/360.
- Nhầm bán kính với đường kính.
- Quên bình phương bán kính trong diện tích.
- Tính vành khuyên bằng cộng diện tích hai hình tròn.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hình quạt tròn có góc ở tâm
- SVG hình vành khuyên với hai bán kính

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

## Luyện tập chung trang 96
- `lessonId`: `g9-v1-c5-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 16. Vị trí tương đối của đường thẳng và đường tròn

- `lessonId`: `g9-v1-c5-l16`
- `chapterId`: `g9-v1-c5`
- `grade`: 9
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết vị trí tương đối của đường thẳng và đường tròn: cắt, tiếp xúc, không giao.
- Dùng khoảng cách từ tâm đến đường thẳng so với bán kính.
- Nắm tính chất tiếp tuyến vuông góc với bán kính tại tiếp điểm.
- Tính/kiểm tra điều kiện tiếp tuyến.

### Dạng toán nhỏ nên tách trong bài
- `g9-v1-c5-l16-sg-01` — **Phân loại vị trí đường thẳng-đường tròn** (`basic`)
- `g9-v1-c5-l16-sg-02` — **So sánh d và R** (`basic`)
- `g9-v1-c5-l16-sg-03` — **Dùng tính chất tiếp tuyến vuông góc bán kính** (`understanding`)
- `g9-v1-c5-l16-sg-04` — **Tính khoảng cách/bán kính trong bài tiếp xúc** (`understanding`)
- `g9-v1-c5-l16-sg-05` — **Chọn phát biểu đúng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v1-c5-l16-tpl-01` — Cho d(O,a) và R, chọn vị trí tương đối
- `g9-v1-c5-l16-tpl-02` — Cho tiếp tuyến tại A, chọn OA vuông góc đường thẳng
- `g9-v1-c5-l16-tpl-03` — Tính R hoặc d để tiếp xúc
- `g9-v1-c5-l16-tpl-04` — Đếm số giao điểm
- `g9-v1-c5-l16-tpl-05` — Chọn hình đúng

### Lỗi học sinh mất gốc hay sai
- Nhầm tiếp tuyến với dây.
- Quên khoảng cách từ tâm đến đường thẳng là đoạn vuông góc.
- Dùng d > R nhưng kết luận cắt.
- Không xác định tiếp điểm.

### Hình minh họa nên tạo nếu UI cho phép
- SVG đường thẳng cắt/tiếp xúc/ngoài đường tròn
- Tiếp tuyến tại A vuông góc OA

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

## Bài 17. Vị trí tương đối của hai đường tròn

- `lessonId`: `g9-v1-c5-l17`
- `chapterId`: `g9-v1-c5`
- `grade`: 9
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết vị trí tương đối của hai đường tròn.
- Dùng khoảng cách hai tâm và tổng/hiệu bán kính để phân loại.
- Xác định số điểm chung.
- Giải bài toán tiếp xúc/cắt nhau đơn giản.

### Dạng toán nhỏ nên tách trong bài
- `g9-v1-c5-l17-sg-01` — **Phân loại hai đường tròn** (`basic`)
- `g9-v1-c5-l17-sg-02` — **So sánh OO' với R+r và |R-r|** (`basic`)
- `g9-v1-c5-l17-sg-03` — **Đếm số điểm chung** (`understanding`)
- `g9-v1-c5-l17-sg-04` — **Tính khoảng cách hai tâm trong trường hợp tiếp xúc** (`understanding`)
- `g9-v1-c5-l17-sg-05` — **Chọn hình/phát biểu đúng** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g9-v1-c5-l17-tpl-01` — Cho R,r,d, chọn vị trí tương đối
- `g9-v1-c5-l17-tpl-02` — Cho tiếp xúc ngoài, tính d = R+r
- `g9-v1-c5-l17-tpl-03` — Cho tiếp xúc trong, tính d = |R-r|
- `g9-v1-c5-l17-tpl-04` — Cho cắt nhau, chọn điều kiện
- `g9-v1-c5-l17-tpl-05` — Chọn số giao điểm

### Lỗi học sinh mất gốc hay sai
- Quên lấy giá trị tuyệt đối của hiệu bán kính.
- Nhầm tiếp xúc ngoài với tiếp xúc trong.
- Kết luận cắt nhau khi d bằng tổng bán kính.
- Không xét trường hợp một đường tròn nằm trong đường tròn kia.

### Hình minh họa nên tạo nếu UI cho phép
- SVG các vị trí hai đường tròn
- Trục so sánh |R-r|, d, R+r

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
- `lessonId`: `g9-v1-c5-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 5
- `lessonId`: `g9-v1-c5-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
