# Lớp 7 — Chương 3. Góc và đường thẳng song song

- `chapterId`: `g7-v1-c3`
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`

## Cách triển khai chương

- Tạo nội dung cho `official_lesson` trước.
- Sau khi xong official lessons, tạo `common_practice` và `chapter_review` bằng cách trộn template trong chương.
- Mỗi bài để `source.status = 'draft'` cho tới khi giáo viên duyệt.

## Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc

- `lessonId`: `g7-v1-c3-l8`
- `chapterId`: `g7-v1-c3`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết các góc ở vị trí đặc biệt: kề nhau, kề bù, đối đỉnh.
- Dùng tính chất góc kề bù và góc đối đỉnh để tính số đo góc.
- Hiểu tia phân giác và tính nửa số đo góc.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c3-l8-sg-01` — **Nhận dạng góc kề/góc kề bù/góc đối đỉnh** (`basic`)
- `g7-v1-c3-l8-sg-02` — **Tính góc kề bù** (`basic`)
- `g7-v1-c3-l8-sg-03` — **Tính góc đối đỉnh** (`understanding`)
- `g7-v1-c3-l8-sg-04` — **Tính góc do tia phân giác tạo ra** (`understanding`)
- `g7-v1-c3-l8-sg-05` — **Kết hợp hai bước kề bù và đối đỉnh** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c3-l8-tpl-01` — Cho hình hai đường cắt nhau, tìm góc đối đỉnh
- `g7-v1-c3-l8-tpl-02` — Biết một góc, tính góc kề bù
- `g7-v1-c3-l8-tpl-03` — Biết một góc, tính góc đối đỉnh
- `g7-v1-c3-l8-tpl-04` — Biết góc lớn và tia phân giác, tính góc nhỏ
- `g7-v1-c3-l8-tpl-05` — Chọn khẳng định đúng về cặp góc

### Lỗi học sinh mất gốc hay sai
- Nhầm góc kề với góc đối đỉnh.
- Nghĩ mọi góc kề đều có tổng 180°.
- Chia đôi góc không phải tia phân giác.
- Nhầm cặp góc đối đỉnh với cặp góc bù nhau.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hai đường thẳng cắt nhau tạo 4 góc
- SVG góc xOy có tia phân giác Oz

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

## Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết

- `lessonId`: `g7-v1-c3-l9`
- `chapterId`: `g7-v1-c3`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nhận biết các góc tạo bởi một đường thẳng cắt hai đường thẳng.
- Sử dụng dấu hiệu nhận biết hai đường thẳng song song.
- Tính góc cơ bản khi hai đường thẳng song song hoặc cần chứng minh song song.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c3-l9-sg-01` — **Nhận dạng góc so le trong, đồng vị, trong cùng phía** (`basic`)
- `g7-v1-c3-l9-sg-02` — **Chọn dấu hiệu song song phù hợp** (`basic`)
- `g7-v1-c3-l9-sg-03` — **Tính góc từ cặp góc bằng nhau/bù nhau** (`understanding`)
- `g7-v1-c3-l9-sg-04` — **Chứng minh hai đường thẳng song song dạng trắc nghiệm** (`understanding`)
- `g7-v1-c3-l9-sg-05` — **Phân biệt song song và cắt nhau** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c3-l9-tpl-01` — Cho hình, chọn cặp góc so le trong/đồng vị
- `g7-v1-c3-l9-tpl-02` — Biết hai góc bằng nhau, chọn kết luận song song
- `g7-v1-c3-l9-tpl-03` — Biết hai góc trong cùng phía bù nhau, chọn kết luận
- `g7-v1-c3-l9-tpl-04` — Tính góc còn lại khi có song song
- `g7-v1-c3-l9-tpl-05` — Chọn phát biểu sai về dấu hiệu song song

### Lỗi học sinh mất gốc hay sai
- Nhầm so le trong với đồng vị.
- Quên điều kiện có một đường thẳng cắt hai đường thẳng.
- Dùng dấu hiệu song song khi cặp góc không đúng vị trí.
- Nhầm bằng nhau với bù nhau.

### Hình minh họa nên tạo nếu UI cho phép
- SVG hai đường thẳng cắt bởi một cát tuyến, đánh số góc
- Bảng nhận diện cặp góc

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

## Luyện tập chung trang 50
- `lessonId`: `g7-v1-c3-practice-1`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song

- `lessonId`: `g7-v1-c3-l10`
- `chapterId`: `g7-v1-c3`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Nắm tiên đề Euclid qua một điểm ngoài đường thẳng chỉ có một đường thẳng song song với đường thẳng đã cho.
- Dùng tính chất của hai đường thẳng song song để suy ra các góc bằng nhau/bù nhau.
- Tính góc trong hình có đường song song.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c3-l10-sg-01` — **Áp dụng tiên đề Euclid** (`basic`)
- `g7-v1-c3-l10-sg-02` — **Tính góc đồng vị/so le trong khi hai đường song song** (`basic`)
- `g7-v1-c3-l10-sg-03` — **Tính góc trong cùng phía** (`understanding`)
- `g7-v1-c3-l10-sg-04` — **Suy luận nhiều bước với kề bù** (`understanding`)
- `g7-v1-c3-l10-sg-05` — **Chọn kết luận đúng từ giả thiết song song** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c3-l10-tpl-01` — Cho đường thẳng a và điểm M, hỏi số đường song song qua M
- `g7-v1-c3-l10-tpl-02` — Biết a // b và một góc, tính góc đồng vị
- `g7-v1-c3-l10-tpl-03` — Biết a // b và góc trong cùng phía, tính góc còn lại
- `g7-v1-c3-l10-tpl-04` — Kết hợp đối đỉnh-kề bù-song song
- `g7-v1-c3-l10-tpl-05` — Chọn chuỗi suy luận đúng

### Lỗi học sinh mất gốc hay sai
- Phát biểu sai tiên đề Euclid thành “có nhiều đường song song”.
- Lẫn dấu hiệu nhận biết song song với tính chất của hai đường song song.
- Tính góc trong cùng phía bằng nhau thay vì bù nhau.
- Bỏ qua giả thiết hai đường thẳng song song.

### Hình minh họa nên tạo nếu UI cho phép
- SVG điểm M ngoài đường thẳng a và đường thẳng b qua M // a
- Hình hai đường song song cắt bởi cát tuyến

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

## Bài 11. Định lí và chứng minh định lí

- `lessonId`: `g7-v1-c3-l11`
- `chapterId`: `g7-v1-c3`
- `grade`: 7
- `volume`: 1
- `track`: `toan-hinh`
- `strand`: `hinh-hoc-phang`
- `source.status`: `draft` cho tới khi giáo viên duyệt với SGK/tài liệu dạy thêm.
- Mức ưu tiên: `core`

### Trọng tâm kiến thức cần viết lại ngắn gọn
- Hiểu cấu trúc một định lí: giả thiết, kết luận.
- Biết phát biểu định lí dạng “nếu... thì...”.
- Làm quen với chứng minh hình học ngắn bằng các bước có lý do.
- Chọn GT/KL đúng trong bài toán hình.

### Dạng toán nhỏ nên tách trong bài
- `g7-v1-c3-l11-sg-01` — **Tách giả thiết và kết luận** (`basic`)
- `g7-v1-c3-l11-sg-02` — **Viết mệnh đề nếu-thì** (`basic`)
- `g7-v1-c3-l11-sg-03` — **Chọn bước chứng minh hợp lý** (`understanding`)
- `g7-v1-c3-l11-sg-04` — **Nhận diện định lí đảo ở mức đơn giản** (`understanding`)
- `g7-v1-c3-l11-sg-05` — **Sắp xếp các bước chứng minh** (`application`)

### Exercise templates cần sinh ngẫu nhiên
- `g7-v1-c3-l11-tpl-01` — Cho phát biểu, chọn GT/KL
- `g7-v1-c3-l11-tpl-02` — Cho hình và phát biểu, chọn kết luận
- `g7-v1-c3-l11-tpl-03` — Sắp xếp 3-4 bước chứng minh
- `g7-v1-c3-l11-tpl-04` — Chọn lý do đúng cho một bước
- `g7-v1-c3-l11-tpl-05` — Chọn mệnh đề đảo đúng/sai

### Lỗi học sinh mất gốc hay sai
- Chép lại đề bài mà không tách GT/KL.
- Nhầm giả thiết với điều cần chứng minh.
- Viết chứng minh thiếu lý do.
- Cho rằng mệnh đề đảo luôn đúng.

### Hình minh họa nên tạo nếu UI cho phép
- Sơ đồ GT → suy luận → KL
- Bảng hai cột Mệnh đề/Giải thích

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

## Luyện tập chung trang 58
- `lessonId`: `g7-v1-c3-practice-2`
- `type`: `common_practice`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---

## Bài tập cuối chương 3
- `lessonId`: `g7-v1-c3-review`
- `type`: `chapter_review`
- Chỉ tạo sau khi các official_lesson trong chương đã có templates.
- Nội dung: trộn câu hỏi theo mức độ, có lời giải, không thêm kiến thức mới.

---
