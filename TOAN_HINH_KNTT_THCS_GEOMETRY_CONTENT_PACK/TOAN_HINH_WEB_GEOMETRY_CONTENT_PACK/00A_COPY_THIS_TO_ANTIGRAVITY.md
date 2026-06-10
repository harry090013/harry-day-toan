# Copy prompt này vào Antigravity

> Sau khi giải nén ZIP, đặt thư mục này vào `docs/toan-hinh-content-pack/` trong project.

```txt
Bạn là trợ lý code + biên soạn dữ liệu cho website Toán Hình Web V1.

Nhiệm vụ: đọc toàn bộ thư mục `docs/toan-hinh-content-pack/`, sau đó tạo dữ liệu TOÁN HÌNH lớp 6–9 bám SGK Toán Kết nối tri thức, phục vụ học sinh mất gốc.

Bước 0 — đọc tài liệu:
- Hãy liệt kê toàn bộ file trong `docs/toan-hinh-content-pack/`.
- Đọc theo thứ tự: README.md → 00_ANTIGRAVITY_MASTER_PROMPT.md → 01_TOAN_HINH_SCOPE_KNTT_6_9.md → 02_GEOMETRY_CONTENT_STANDARD.md → 03_EXERCISE_GENERATOR_STANDARD_GEOMETRY.md → 04_ILLUSTRATION_AND_DIAGRAM_SPEC.md → 05_GEOMETRY_FORMULA_BANK.md → 06_QA_CHECKLIST_GEOMETRY.md → 07_IMPLEMENTATION_WORKFLOW.md → 08_ID_NAMING_AND_EXPORT_RULES.md → GEOMETRY_LESSON_CATALOG.md → các file grade-6/ đến grade-9/ → prompts/.

Bước 1 — khảo sát project:
- Xác định nơi đang lưu curriculum, lesson content, exercise templates và route hiển thị bài học.
- Không sửa UI lớn.
- Không tạo hàng loạt dữ liệu ngay.
- Trả lời trước bằng kế hoạch file sẽ tạo/sửa.

Bước 2 — tạo dữ liệu chương đầu tiên:
- Bắt đầu với `g6-v2-c8` — Chương 8. Những hình hình học cơ bản.
- Tạo nội dung cho official_lesson trước: Bài 32, 33, 34, 35, 36, 37.
- Mỗi bài phải có: objectives, prerequisites, theory, remember, tips, commonMistakes, workedExamples, skillGroups, practiceConfig, exercise templates.
- source.status luôn là `draft`.
- Bài tập trắc nghiệm sinh ngẫu nhiên bằng seed, 4 đáp án, đúng duy nhất 1 đáp án, hiện lời giải chi tiết ngay sau khi chọn.
- Nếu tạo hình, dùng SVG tự sinh theo dữ kiện toán học; không lấy ảnh từ SGK.

Bước 3 — tự kiểm tra:
- Chạy typecheck/test hiện có.
- Test mỗi generator tối thiểu 200 seed.
- Kiểm tra không trùng đáp án, đúng duy nhất một đáp án, lời giải khớp dữ kiện.
- Audit theo `06_QA_CHECKLIST_GEOMETRY.md`.

Bước 4 — báo cáo:
- Liệt kê file đã tạo/sửa.
- Liệt kê số bài, số skillGroups, số templates.
- Ghi rõ TODO/NEEDS_TEACHER_REVIEW nếu có điểm chưa chắc.

Quy tắc cứng:
- Không tự thêm bài/chương ngoài curriculum.
- Không chép nguyên văn dài từ SGK.
- Không chắc thì không bịa; để TODO hoặc draft.
- Chỉ sáng tạo cách dạy, ví dụ, mẹo nhớ, lỗi sai thường gặp và bài tập tương tự.
```
