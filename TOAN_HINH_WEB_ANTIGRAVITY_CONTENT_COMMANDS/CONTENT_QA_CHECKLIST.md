# CONTENT QA CHECKLIST — Checklist duyệt nội dung Toán Hình Web

> Dùng checklist này sau khi Antigravity soạn xong từng bài hoặc từng chương.

---

## 1. Kiểm tra đúng SGK

- [ ] `lessonId` có trong curriculum.
- [ ] Tên bài khớp curriculum.
- [ ] Lớp, tập, chương đúng.
- [ ] Bài được phân đúng Toán số / Toán hình.
- [ ] Không có bài/chương tự thêm vào phần SGK chính.
- [ ] Nếu có chuyên đề bổ sung, đã để ở vùng `teacher_supplement`.

---

## 2. Kiểm tra lý thuyết

- [ ] Lý thuyết ngắn, dễ hiểu.
- [ ] Không chép nguyên văn dài từ SGK.
- [ ] Không đưa kiến thức vượt bài.
- [ ] Có đủ mục tiêu bài học.
- [ ] Có mục “cần nhớ”.
- [ ] Có mẹo/cách nhớ nếu phù hợp.
- [ ] Có lỗi sai thường gặp và cách sửa.

---

## 3. Kiểm tra ví dụ mẫu

- [ ] Có ít nhất 3 ví dụ mẫu nếu bài là bài trọng tâm.
- [ ] Ví dụ đi từ dễ đến khó.
- [ ] Mỗi ví dụ có lời giải từng bước.
- [ ] Có kết luận rõ ràng.
- [ ] Có cảnh báo lỗi sai nếu dạng bài dễ nhầm.

---

## 4. Kiểm tra dạng toán

- [ ] Bài được tách thành các `skillGroups` nhỏ.
- [ ] Tên dạng toán dễ hiểu với học sinh.
- [ ] Dạng toán không quá rộng.
- [ ] Mỗi dạng có template bài tập tương ứng.
- [ ] Mức độ difficulty hợp lý.

---

## 5. Kiểm tra bài tập trắc nghiệm

- [ ] Mỗi câu có đúng 4 lựa chọn A/B/C/D.
- [ ] Chỉ có 1 đáp án đúng.
- [ ] Không có đáp án trùng hoặc tương đương nhau.
- [ ] Đáp án nhiễu dựa trên lỗi sai thật của học sinh.
- [ ] Sau khi chọn đáp án hiện đúng/sai ngay.
- [ ] Có lời giải chi tiết khớp dữ kiện câu hỏi.
- [ ] Nếu có giải thích đáp án sai, giải thích không mâu thuẫn.

---

## 6. Kiểm tra generator

- [ ] Generator nhận `seed` và tái tạo được cùng một câu.
- [ ] Chạy thử ít nhất 500 seed/template.
- [ ] Không sinh dữ kiện ngoài phạm vi bài học.
- [ ] Không sinh số quá xấu ở mức cơ bản.
- [ ] Không sinh trường hợp đặc biệt làm sai đáp án.
- [ ] Có validate unique choices.
- [ ] Có validate single correct answer.

---

## 7. Kiểm tra tích hợp web

- [ ] Bài học xuất hiện đúng ở menu lớp/chương.
- [ ] Route bài học mở được.
- [ ] Công thức LaTeX hiển thị đúng.
- [ ] Hình minh họa/SVG nếu có không lỗi layout.
- [ ] Luyện tập hoạt động trên điện thoại và máy tính.
- [ ] Không làm hỏng UI cũ.

---

## 8. Quyết định trạng thái

- [ ] Nếu chưa duyệt: `source.status = 'draft'`.
- [ ] Nếu giáo viên đã đọc nhưng còn sửa nhỏ: `source.status = 'teacher_reviewed'`.
- [ ] Nếu sẵn sàng cho học sinh học: `source.status = 'ready'`.

Ghi chú duyệt:

```txt
Người duyệt:
Ngày duyệt:
Bài/chương:
Các điểm đã sửa:
Các điểm cần theo dõi thêm:
```
