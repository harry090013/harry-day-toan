# Prompt — Audit nội dung Toán hình

```txt
Hãy audit dữ liệu Toán hình vừa tạo theo checklist:
- docs/toan-hinh-content-pack/06_QA_CHECKLIST_GEOMETRY.md

Phạm vi:
- grade/chapterId/lessonId: [điền]

Kiểm tra:
1. Curriculum: ID/title/track/strand có khớp không?
2. Schema: đủ trường, templateIds khớp không?
3. Nội dung: có vượt bài, sai công thức, thiếu lời giải không?
4. Generator: test 500 seed/template, 4 đáp án, không trùng, đúng duy nhất 1 đáp án.
5. UI: bài hiển thị đúng, chọn đáp án hiện lời giải ngay.

Không sửa ngay nếu lỗi lớn. Trước tiên báo cáo lỗi cụ thể và đề xuất bản vá.
```
