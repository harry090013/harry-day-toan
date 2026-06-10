# Prompt — Tạo một chương Toán hình

```txt
Nhiệm vụ: tạo dữ liệu hoàn chỉnh cho một chương Toán hình.

Chương cần tạo:
- grade: [điền]
- volume: [điền]
- chapterId: [điền]
- chapterTitle: [điền]
- file hướng dẫn chương: docs/toan-hinh-content-pack/grade-[x]/[file chương].md

Yêu cầu:
1. Đọc kỹ file chương tương ứng.
2. Chỉ tạo official_lesson trước; common_practice và chapter_review tạo sau.
3. Mỗi bài phải có:
   - objectives 3–6 ý
   - prerequisites 1–4 ý
   - theory 3–6 khối
   - remember 4–8 ý
   - tips 2–5 ý
   - commonMistakes 3–6 lỗi
   - workedExamples 3–5 ví dụ
   - skillGroups 4–8 dạng
   - exerciseTemplates 6–15 template
4. Mỗi template có generator seed, 4 đáp án, 1 đáp án đúng duy nhất, lời giải chi tiết.
5. Tạo test generator tối thiểu 500 seed/template.
6. Cập nhật index/export để UI hiển thị.
7. Không sửa UI lớn.
8. source.status = 'draft'.

Sau khi xong, báo cáo file đã tạo/sửa, số lượng bài, skillGroups, templates, test pass/fail, TODO cần giáo viên duyệt.
```
