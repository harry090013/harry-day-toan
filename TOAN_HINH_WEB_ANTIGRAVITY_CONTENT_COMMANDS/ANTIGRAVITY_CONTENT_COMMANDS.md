# ANTIGRAVITY CONTENT COMMANDS — Lấp đầy dữ liệu bài học Toán Hình Web V1

> Dùng file này để ra lệnh cho Antigravity khi biên soạn dữ liệu bài học Toán THCS Kết nối tri thức. Nguyên tắc quan trọng nhất: **làm từng bài / từng chương nhỏ, có kiểm tra, không bịa mục lục và không tự thêm bài SGK mới**.

---

## 0. Cách dùng nhanh

Trước khi yêu cầu Antigravity soạn nội dung, hãy đảm bảo trong project có các file sau trong thư mục `docs/` hoặc thư mục tương đương:

```txt
docs/
├── PROJECT_SPEC_TOAN_HINH_WEB_V1.md
├── DATA_DESIGN_KNTT_THCS.md
├── CONTENT_IMPLEMENTATION_GUIDE_KNTT_THCS.md
├── LESSON_CONTENT_SCHEMA.ts
├── SAMPLE_LESSON_G6_BAI_1_TAP_HOP.ts
└── EXERCISE_TEMPLATE_GUIDE_WITH_SAMPLE.md
```

Nếu project đã có cấu trúc khác, Antigravity được phép thích nghi với code hiện tại, nhưng **không được tự ý đổi schema cốt lõi** nếu chưa cần.

---

## 1. Quy trình đúng để lấp đầy dữ liệu

Không yêu cầu:

```txt
Hãy soạn toàn bộ Toán 6–9.
```

Vì yêu cầu như vậy rất dễ sinh dữ liệu mỏng, thiếu kiểm tra, sai mục lục hoặc lệch chương trình.

Nên đi theo quy trình:

```txt
Bước 1. Chuẩn hóa cấu trúc dữ liệu trong code hiện tại.
Bước 2. Soạn hoàn chỉnh 1 bài mẫu.
Bước 3. Test hiển thị và generator của bài mẫu.
Bước 4. Soạn tiếp các bài còn lại trong 1 chương.
Bước 5. Sinh file index để website đọc được chương đó.
Bước 6. Kiểm tra toàn chương: ID, schema, route, generator, lời giải.
Bước 7. Giáo viên duyệt rồi chuyển status từ draft sang teacher_reviewed/ready.
```

---

## 2. Lệnh 1 — Cho Antigravity đọc hiểu dự án trước khi soạn nội dung

Copy toàn bộ lệnh sau vào Antigravity:

```txt
Bạn là trợ lý code và biên soạn dữ liệu cho website Toán Hình Web V1.

Hãy đọc kỹ các file tài liệu trong project trước khi sửa code:
- docs/PROJECT_SPEC_TOAN_HINH_WEB_V1.md
- docs/DATA_DESIGN_KNTT_THCS.md
- docs/CONTENT_IMPLEMENTATION_GUIDE_KNTT_THCS.md
- docs/LESSON_CONTENT_SCHEMA.ts
- docs/SAMPLE_LESSON_G6_BAI_1_TAP_HOP.ts
- docs/EXERCISE_TEMPLATE_GUIDE_WITH_SAMPLE.md

Mục tiêu của website:
- Dạy kèm nội bộ Toán THCS lớp 6–9.
- Bám sát SGK Toán Kết nối tri thức.
- UI chia thành Toán số và Toán hình.
- Mỗi bài gồm: lý thuyết tóm tắt → ví dụ mẫu → bài tập trắc nghiệm → chọn đáp án hiện đúng/sai và lời giải ngay.
- V1 chưa cần đăng nhập, chưa lưu tiến độ.

Yêu cầu khi làm:
1. Không thay đổi UI lớn nếu không cần.
2. Không tự thêm bài/chương SGK mới ngoài curriculum đã có.
3. Không chép nguyên văn dài từ SGK.
4. Nội dung giảng dạy được phép viết lại ngắn gọn, dễ hiểu, có mẹo nhớ và lỗi sai thường gặp.
5. Mọi bài học phải có source.status = 'draft' cho đến khi giáo viên duyệt.
6. Bài tập ngẫu nhiên phải có generator, đáp án đúng duy nhất, 4 lựa chọn, lời giải chi tiết.
7. Nếu thiếu dữ liệu SGK hoặc không chắc tên bài/chương, hãy dừng và ghi TODO/NEEDS_TEACHER_SOURCE, không tự bịa.

Nhiệm vụ lần này:
- Khảo sát cấu trúc code hiện tại.
- Xác định nơi đặt dữ liệu bài học và exercise templates.
- Đề xuất/thiết lập cấu trúc thư mục phù hợp với project hiện tại.
- Không soạn hàng loạt bài học ở bước này.
- Trả về kế hoạch file sẽ tạo/sửa trước khi sửa nhiều.
```

---

## 3. Lệnh 2 — Soạn hoàn chỉnh 1 bài học

Dùng lệnh này cho từng bài. Thay phần trong ngoặc vuông `[...]`.

```txt
Nhiệm vụ: Soạn dữ liệu hoàn chỉnh cho 1 bài học theo schema của Toán Hình Web V1.

Bài cần soạn:
- Lớp: [6/7/8/9]
- Track: [toan-so/toan-hinh]
- Strand: [so-hoc/dai-so/ham-so/phuong-trinh/thong-ke-xac-suat/hinh-hoc-truc-quan/hinh-hoc-phang/hinh-khoi-do-luong]
- Tập: [1/2]
- Chapter ID: [ví dụ g6-v1-c1]
- Lesson ID: [ví dụ g6-v1-c1-l2]
- Tên bài chính xác theo curriculum: [ví dụ Bài 2. Cách ghi số tự nhiên]
- Nguồn đối chiếu giáo viên cung cấp: [mô tả tài liệu/ảnh/PDF/trang SGK nếu có]

Yêu cầu nội dung:
1. Không đổi lessonId, chapterId, title trong curriculum.
2. Không tự thêm kiến thức ngoài chương trình của bài.
3. Viết lại lý thuyết dạng ngắn gọn, dễ hiểu, không chép nguyên văn dài từ SGK.
4. Mỗi bài phải có:
   - objectives: 3–6 ý.
   - prerequisites: 1–4 ý.
   - theory: 3–6 khối kiến thức.
   - remember: 4–8 ý cần nhớ.
   - tips: 2–5 mẹo/cách nhớ.
   - commonMistakes: 3–6 lỗi sai thường gặp kèm cách sửa.
   - workedExamples: tối thiểu 3 ví dụ mẫu có lời giải từng bước.
   - skillGroups: 4–8 dạng toán nhỏ.
   - practiceConfig: liên kết đầy đủ templateIds.
5. Mỗi dạng toán nhỏ phải có ít nhất 1–3 exercise templates.
6. Mỗi exercise template phải sinh câu hỏi trắc nghiệm 4 đáp án, có đúng duy nhất 1 đáp án, có lời giải chi tiết và giải thích đáp án sai nếu phù hợp.
7. Mức độ bài tập phải chia thành:
   - basic
   - understanding
   - application
   - advanced nếu phù hợp với bài.
8. Nếu bài quá cơ bản, có thể không dùng advanced, nhưng phải ghi lý do trong comment.
9. Tất cả công thức viết bằng LaTeX khi cần.
10. source.status để 'draft'.

File cần tạo/sửa:
- Tạo file lesson content tại đúng thư mục dữ liệu của project, ví dụ:
  src/data/lessons/grade-[x]/[lessonId].ts
- Tạo file exercise templates nếu project đang tách riêng, ví dụ:
  src/data/exercise-templates/grade-[x]/[lessonId].templates.ts
- Cập nhật index/export để website nhận ra bài học.
- Không sửa UI trừ khi cần để hiển thị đủ trường dữ liệu.

Sau khi làm xong, hãy tự kiểm tra:
- TypeScript không lỗi.
- LessonContent khớp schema.
- Không trùng id.
- practiceConfig.templateIds khớp templateIds thật.
- Mỗi generator chạy thử nhiều seed không sinh đáp án trùng.
- Mỗi câu có đúng 4 lựa chọn và đúng duy nhất 1 đáp án.
- Lời giải không rỗng.

Cuối cùng, báo cáo:
- Các file đã tạo/sửa.
- Danh sách skillGroups.
- Danh sách exercise templates.
- Những điểm cần giáo viên duyệt.
```

---

## 4. Lệnh 3 — Soạn cả một chương sau khi đã ổn bài mẫu

Chỉ dùng lệnh này khi đã có ít nhất 1 bài mẫu hoạt động tốt.

```txt
Nhiệm vụ: Soạn dữ liệu bài học và bài tập cho toàn bộ một chương SGK Toán Kết nối tri thức theo chuẩn Toán Hình Web V1.

Phạm vi chương:
- Lớp: [6/7/8/9]
- Tập: [1/2]
- Chapter ID: [ví dụ g6-v1-c1]
- Tên chương chính xác: [ví dụ Chương I. Tập hợp các số tự nhiên]
- Track: [toan-so/toan-hinh]
- Strand chính: [ví dụ so-hoc]
- Danh sách lessonId/title lấy từ curriculum hiện có:
  1. [lessonId] — [title]
  2. [lessonId] — [title]
  3. ...

Yêu cầu:
1. Chỉ soạn các bài official_lesson trước.
2. Các mục Luyện tập chung/Bài tập cuối chương có thể tạo sau thành bài ôn tập riêng, không làm trong đợt này nếu chưa được yêu cầu.
3. Mỗi bài tuân thủ schema LessonContent.
4. Mỗi bài có skillGroups và exercise templates riêng.
5. Không tạo kiến thức vượt bài.
6. Nếu bài nào cần nguồn giáo viên để đảm bảo chính xác, hãy tạo skeleton với status draft và ghi TODO rõ, không tự bịa.
7. Ưu tiên chất lượng hơn số lượng: nếu chương dài, chia làm 2 đợt.

Mức tối thiểu mỗi bài:
- 3–6 objectives.
- 3–6 theory blocks.
- 3–5 workedExamples.
- 4–8 skillGroups.
- 6–15 exercise templates tùy độ trọng tâm.

Generator:
- Mỗi template phải có seed.
- Mỗi template phải sinh đúng 4 lựa chọn.
- Không trùng đáp án.
- Đáp án đúng duy nhất.
- Có lời giải chi tiết hiện ngay.
- Có wrongChoiceExplanations nếu có thể.

Sau khi soạn xong:
- Cập nhật index/export.
- Chạy typecheck/test hiện có.
- Tạo báo cáo chất lượng chương gồm:
  - Tổng số bài đã soạn.
  - Tổng số skillGroups.
  - Tổng số exercise templates.
  - Bài nào còn TODO/needs_teacher_review.
  - Rủi ro nội dung cần giáo viên kiểm tra.
```

---

## 5. Lệnh 4 — Tạo generator bài tập cho một dạng toán cụ thể

Dùng khi bạn muốn tập trung làm thật nhiều bài tập cho một dạng.

```txt
Nhiệm vụ: Tạo exercise generator chính xác cho một dạng toán cụ thể.

Thông tin dạng toán:
- Lesson ID: [ví dụ g6-v1-c2-l9]
- SkillGroup ID: [ví dụ g6-v1-c2-l9-skill-1]
- Tên dạng toán: [ví dụ Nhận biết dấu hiệu chia hết cho 2, 5]
- Mức độ: [basic/understanding/application/advanced]
- Học sinh lớp: [6/7/8/9]
- Giới hạn số liệu: [ví dụ số tự nhiên từ 10 đến 999]
- Lỗi sai muốn dùng làm đáp án nhiễu: [liệt kê]

Yêu cầu generator:
1. Nhận input seed:number và trả về GeneratedQuestion.
2. Sinh dữ kiện hợp lệ trong phạm vi lớp học.
3. Tính đáp án đúng bằng hàm solve rõ ràng.
4. Sinh 3 đáp án nhiễu dựa trên lỗi sai thường gặp, không sinh nhiễu bừa.
5. Trộn đáp án A/B/C/D.
6. Validate:
   - đúng 4 lựa chọn;
   - nội dung lựa chọn không trùng;
   - đáp án đúng tồn tại;
   - chỉ có một đáp án đúng;
   - lời giải có ít nhất 2 bước.
7. Sinh solution.summary, solution.steps, wrongChoiceExplanations.
8. Thêm test chạy ít nhất 500 seed cho template này.

Không được:
- Sinh số quá xấu nếu dạng cơ bản.
- Sinh câu có nhiều đáp án đúng.
- Sinh câu vượt kiến thức của bài.
- Tạo lời giải chung chung không khớp dữ kiện.

Sau khi hoàn thành, báo cáo:
- Template ID.
- 5 câu hỏi mẫu từ 5 seed khác nhau.
- Các validate đã chạy.
- Rủi ro/cạnh biên đã xử lý.
```

---

## 6. Lệnh 5 — Kiểm tra chất lượng dữ liệu sau khi Antigravity soạn xong

Dùng lệnh này sau mỗi bài hoặc mỗi chương.

```txt
Nhiệm vụ: Kiểm tra chất lượng dữ liệu bài học và bài tập vừa được thêm vào.

Phạm vi kiểm tra:
- [lessonId hoặc chapterId]

Hãy kiểm tra các nhóm lỗi sau:

A. Lỗi curriculum
- lessonId có tồn tại trong curriculum không?
- title có khớp curriculum không?
- grade/volume/chapterId/track/strand có khớp không?
- Có tự thêm bài SGK mới không?

B. Lỗi schema
- LessonContent có đủ trường bắt buộc không?
- source.status có phải draft/teacher_reviewed/ready hợp lệ không?
- skillGroups có id không trùng không?
- practiceConfig.templateIds có khớp templates thật không?

C. Lỗi nội dung
- Lý thuyết có quá dài hoặc giống chép nguyên văn SGK không?
- Có kiến thức vượt bài không?
- Ví dụ mẫu có lời giải từng bước không?
- Lỗi sai thường gặp có cách sửa không?

D. Lỗi generator
- Mỗi template sinh được câu hỏi với seed.
- Mỗi câu có đúng 4 đáp án.
- Không có đáp án trùng.
- Chỉ có 1 đáp án đúng.
- Lời giải khớp dữ kiện.
- wrongChoiceExplanations không mâu thuẫn đáp án đúng.

E. Lỗi UI tích hợp
- Bài học xuất hiện đúng route.
- Lý thuyết hiển thị được công thức LaTeX.
- Học sinh chọn đáp án thì hiện đúng/sai và lời giải ngay.

Sau khi kiểm tra, tạo báo cáo ngắn:
- PASS/FAIL từng nhóm.
- File nào cần sửa.
- Lỗi cụ thể.
- Đề xuất bản vá.
```

---

## 7. Lệnh 6 — Tạo bài ôn tập cuối chương

Dùng sau khi đã hoàn thành các bài chính thức trong chương.

```txt
Nhiệm vụ: Tạo bài ôn tập cuối chương cho một chương đã có đầy đủ lesson content và exercise templates.

Thông tin:
- Lớp: [6/7/8/9]
- Chapter ID: [ví dụ g6-v1-c1]
- Review lesson ID: [ví dụ g6-v1-c1-review]
- Tên mục theo curriculum: [Bài tập cuối chương ...]

Yêu cầu:
1. Không tạo kiến thức mới.
2. Tổng hợp lại các dạng toán đã có trong các bài chính của chương.
3. Chia bài ôn tập thành các nhóm:
   - Nhận biết kiến thức.
   - Kỹ năng tính toán/cơ bản.
   - Bài vận dụng.
   - Bài tổng hợp nhiều bước nếu phù hợp.
4. Reuse templateIds từ các bài chính nếu hợp lý.
5. Có thể tạo thêm template tổng hợp, nhưng không vượt chương.
6. Có đề luyện ngẫu nhiên 10–20 câu.
7. Có lời giải chi tiết ngay sau khi chọn đáp án.

Sau khi xong, báo cáo:
- Các bài nguồn đã dùng.
- Số template reuse.
- Số template mới.
- Các dạng toán trọng tâm của chương.
```

---

## 8. Lệnh 7 — Chuyển trạng thái sau khi giáo viên duyệt

Chỉ dùng khi giáo viên đã kiểm tra nội dung.

```txt
Nhiệm vụ: Cập nhật trạng thái nội dung sau khi giáo viên duyệt.

Phạm vi:
- [lessonId hoặc chapterId]

Yêu cầu:
1. Chỉ đổi source.status từ 'draft' sang 'teacher_reviewed' hoặc 'ready' cho các bài đã được giáo viên xác nhận.
2. Không sửa nội dung khác nếu không được yêu cầu.
3. Ghi chú vào source.notes: “Đã được giáo viên đối chiếu và duyệt ngày [ngày/tháng/năm].”
4. Chạy typecheck/test sau khi cập nhật.
5. Báo cáo danh sách bài đã đổi trạng thái.
```

---

## 9. Gói thông tin giáo viên nên cung cấp cho mỗi bài

Mỗi khi yêu cầu soạn bài mới, giáo viên nên cung cấp ít nhất:

```txt
1. Lớp:
2. Tập:
3. Chương:
4. Lesson ID trong curriculum:
5. Tên bài đúng theo SGK:
6. Ảnh/PDF/trích mục tiêu hoặc phần kiến thức chính nếu có:
7. Ghi chú kinh nghiệm dạy thêm của giáo viên:
8. Các lỗi học sinh hay sai:
9. Muốn nhiều bài tập dạng nào nhất:
10. Có cần hình minh họa không:
```

Nếu không có mục 6–8, Antigravity vẫn có thể tạo bản nháp, nhưng phải để `source.status = 'draft'` và ghi rõ `needs_teacher_review`.

---

## 10. Thứ tự triển khai khuyến nghị

Nên triển khai theo thứ tự phục vụ dạy kèm tốt nhất:

```txt
Đợt 1: Lớp 6 Toán số nền tảng
- Chương 1. Tập hợp các số tự nhiên
- Chương 2. Tính chia hết trong tập hợp các số tự nhiên
- Chương 3. Số nguyên
- Phân số
- Số thập phân

Đợt 2: Lớp 7 Toán số
- Số hữu tỉ
- Số thực
- Tỉ lệ thức và đại lượng tỉ lệ
- Biểu thức đại số và đa thức một biến

Đợt 3: Lớp 8 Đại số
- Đa thức
- Hằng đẳng thức đáng nhớ
- Phân tích đa thức thành nhân tử
- Phân thức đại số
- Phương trình bậc nhất một ẩn

Đợt 4: Lớp 9 trọng tâm thi vào 10
- Hệ phương trình bậc nhất hai ẩn
- Căn bậc hai, căn bậc ba
- Hàm số y = ax²
- Phương trình bậc hai một ẩn
- Hệ thức lượng trong tam giác vuông
- Đường tròn

Đợt 5: Toán hình theo từng lớp
- Lớp 6: Hình phẳng, chu vi, diện tích, đối xứng
- Lớp 7: Góc, đường thẳng song song, tam giác bằng nhau
- Lớp 8: Tứ giác, Thalès, tam giác đồng dạng
- Lớp 9: Đường tròn, hệ thức lượng, hình trụ/nón/cầu
```

---

## 11. Câu lệnh ngắn dùng hằng ngày

### Soạn một bài

```txt
Hãy soạn đầy đủ dữ liệu cho lessonId [ID] theo schema LessonContent và tạo exercise templates tương ứng. Không sửa UI. Không thêm bài ngoài curriculum. Đặt status draft. Tạo báo cáo sau khi xong.
```

### Tăng số lượng bài tập cho một bài

```txt
Hãy bổ sung thêm exercise templates cho lessonId [ID], ưu tiên các dạng học sinh hay sai: [liệt kê]. Mỗi template phải có generator seed, 4 đáp án, 1 đáp án đúng duy nhất, lời giải chi tiết, test 500 seed.
```

### Kiểm tra một bài

```txt
Hãy audit lessonId [ID]: kiểm tra curriculum, schema, nội dung, generator, route hiển thị và báo cáo lỗi cụ thể. Chưa sửa vội nếu lỗi lớn; hãy đề xuất trước.
```

### Soạn một chương

```txt
Hãy soạn các official_lesson trong chapterId [ID] theo curriculum hiện có. Mỗi bài tạo LessonContent + exercise templates + index export + test. Không làm bài ôn tập cuối chương trong đợt này.
```

### Tạo bài ôn tập

```txt
Hãy tạo bài ôn tập cuối chương cho chapterId [ID], chỉ dùng kiến thức và templates đã có trong chương, không thêm kiến thức mới.
```

---

## 12. Quy tắc dừng bắt buộc

Antigravity phải dừng và hỏi giáo viên hoặc ghi TODO nếu gặp một trong các trường hợp:

```txt
- Không tìm thấy lessonId trong curriculum.
- Tên bài trong yêu cầu khác với title trong curriculum.
- Không rõ bài thuộc Toán số hay Toán hình.
- Không chắc kiến thức có thuộc bài đó hay không.
- Generator có nguy cơ sinh nhiều đáp án đúng.
- Bài toán cần hình nhưng chưa có quy ước tạo hình.
- Cần tài liệu giáo viên để bám sát cách dạy riêng.
```

Không được xử lý bằng cách đoán.
