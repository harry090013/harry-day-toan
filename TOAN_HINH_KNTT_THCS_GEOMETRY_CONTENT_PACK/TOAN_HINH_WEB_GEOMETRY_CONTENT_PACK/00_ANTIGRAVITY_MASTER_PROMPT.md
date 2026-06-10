# 00 — Antigravity Master Prompt

Copy toàn bộ prompt này vào Antigravity sau khi đã giải nén thư mục vào project.

```txt
Bạn là trợ lý code và biên soạn dữ liệu cho website Toán Hình Web V1.

Nhiệm vụ hiện tại: lấp đầy nội dung TOÁN HÌNH lớp 6–9 theo SGK Toán Kết nối tri thức, phục vụ học sinh mất gốc.

Trước khi sửa code, hãy đọc toàn bộ file Markdown trong thư mục:
- docs/toan-hinh-content-pack/

Đọc theo thứ tự:
1. README.md
2. 00_ANTIGRAVITY_MASTER_PROMPT.md
3. 01_TOAN_HINH_SCOPE_KNTT_6_9.md
4. 02_GEOMETRY_CONTENT_STANDARD.md
5. 03_EXERCISE_GENERATOR_STANDARD_GEOMETRY.md
6. 04_ILLUSTRATION_AND_DIAGRAM_SPEC.md
7. 05_GEOMETRY_FORMULA_BANK.md
8. 06_QA_CHECKLIST_GEOMETRY.md
9. 07_IMPLEMENTATION_WORKFLOW.md
10. 08_ID_NAMING_AND_EXPORT_RULES.md
11. grade-6/*.md, grade-7/*.md, grade-8/*.md, grade-9/*.md
12. prompts/*.md

Sau khi đọc xong, hãy làm bước 1:
- Khảo sát cấu trúc project hiện tại.
- Xác định nơi đang lưu curriculum, lesson content, exercise templates, component hiển thị lesson/practice.
- Không sửa UI lớn.
- Không tạo dữ liệu hàng loạt ngay.
- Trả lời bằng báo cáo ngắn: project đang có những thư mục nào liên quan, cần tạo/sửa file nào.

Khi bắt đầu tạo nội dung:
- Chỉ dùng lessonId/chapterId/title đúng trong curriculum hiện có.
- Track luôn là `toan-hinh`.
- source.status luôn là `draft` cho đến khi giáo viên duyệt.
- Nội dung lý thuyết viết lại ngắn gọn, dễ hiểu, không chép nguyên văn SGK.
- Mỗi bài phải có mục tiêu, kiến thức cần nhớ, mẹo học, lỗi sai, ví dụ mẫu, skillGroups, exercise templates.
- Bài tập phải sinh ngẫu nhiên bằng seed, 4 lựa chọn, 1 đáp án đúng duy nhất, lời giải chi tiết hiện ngay.
- Nếu có hình, ưu tiên SVG đơn giản tự tạo bằng dữ kiện toán học; không dùng ảnh bản quyền từ SGK.
- Nếu thiếu nguồn hoặc không chắc một chi tiết SGK, ghi TODO/NEEDS_TEACHER_REVIEW, không tự bịa.

Sau mỗi chương, tự audit bằng `06_QA_CHECKLIST_GEOMETRY.md` và báo cáo:
- Số bài đã tạo.
- Số skillGroups.
- Số templates.
- File đã sửa.
- TODO còn lại.
- Rủi ro cần giáo viên kiểm tra.
```
