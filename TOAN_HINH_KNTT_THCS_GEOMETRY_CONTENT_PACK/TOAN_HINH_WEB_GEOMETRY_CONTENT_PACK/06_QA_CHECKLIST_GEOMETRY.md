# 06 — QA Checklist Toán hình

## A. Kiểm tra curriculum

- [ ] `lessonId` tồn tại trong `curriculum-kntt-thcs.seed`.
- [ ] `chapterId`, `grade`, `volume`, `title` khớp curriculum.
- [ ] `track = 'toan-hinh'`.
- [ ] Không thêm bài/chương SGK mới.
- [ ] `source.status = 'draft'` nếu chưa được giáo viên duyệt.

## B. Kiểm tra schema

- [ ] Đủ `objectives`, `prerequisites`, `theory`, `remember`, `tips`, `commonMistakes`, `workedExamples`, `skillGroups`, `practiceConfig`.
- [ ] `templateIds` trong `skillGroups` khớp templates thật.
- [ ] Không trùng `skillGroup.id`, `templateId`, `workedExample.id`.
- [ ] Công thức LaTeX render được.

## C. Kiểm tra nội dung Toán hình

- [ ] Lý thuyết ngắn, đúng, không chép nguyên văn SGK dài.
- [ ] Mỗi ví dụ có lời giải từng bước.
- [ ] Dạng toán phù hợp học sinh mất gốc.
- [ ] Không dùng kiến thức vượt bài nếu không ghi rõ ôn lại/nâng cao.
- [ ] Có lỗi sai thường gặp và cách sửa.

## D. Kiểm tra generator

- [ ] Mỗi template chạy được với seed.
- [ ] Mỗi câu có đúng 4 lựa chọn.
- [ ] Không trùng đáp án.
- [ ] Chỉ có 1 đáp án đúng.
- [ ] Lời giải khớp dữ kiện.
- [ ] Nếu có hình SVG, hình khớp dữ kiện.
- [ ] Test tối thiểu 500 seed/template.

## E. Kiểm tra UI

- [ ] Bài xuất hiện đúng dưới Toán hình/lớp/chương.
- [ ] Học sinh chọn đáp án thì hiện đúng/sai và lời giải ngay.
- [ ] Công thức và SVG hiển thị tốt trên mobile.
- [ ] Không phá layout hiện tại.

## F. Báo cáo sau mỗi chương

Antigravity phải báo cáo:

```txt
Chapter: ...
Lessons created: ...
SkillGroups: ...
ExerciseTemplates: ...
Tests run: ...
Failed tests: ...
TODO/NEEDS_TEACHER_REVIEW: ...
Files changed: ...
```
