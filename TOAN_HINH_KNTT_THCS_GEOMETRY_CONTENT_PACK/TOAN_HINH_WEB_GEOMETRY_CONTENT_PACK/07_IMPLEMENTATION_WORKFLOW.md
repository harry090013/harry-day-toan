# 07 — Quy trình triển khai nội dung Toán hình

## Không làm hàng loạt ngay

Nên triển khai theo từng chương, mỗi chương qua 5 bước:

```txt
1. Scan project và xác định nơi đặt dữ liệu.
2. Tạo LessonContent + templates cho từng official_lesson.
3. Tạo/chạy test generator.
4. Kiểm tra UI hiển thị.
5. Xuất báo cáo để giáo viên duyệt.
```

## Lộ trình khuyến nghị cho học sinh mất gốc hình

### Đường A — Học lại từ nền tảng

```txt
Lớp 6 Chương 8 → Lớp 6 Chương 4 → Lớp 6 Chương 5 → Lớp 7 Chương 3 → Lớp 7 Chương 4
```

### Đường B — Đang học lớp 8 nhưng mất gốc

```txt
Lớp 6 Chương 8 → Lớp 7 Chương 3 → Lớp 7 Chương 4 → Lớp 8 Chương 3 → Lớp 8 Chương 4
```

### Đường C — Ôn lớp 9/thi vào 10 nhưng mất gốc

```txt
Lớp 7 Chương 3–4 → Lớp 8 Chương 4 và 9 → Lớp 9 Chương 4–5 → Lớp 9 Chương 9
```

## Batch size tốt nhất

- Batch nhỏ: 1 bài/lần nếu generator phức tạp.
- Batch vừa: 1 chương/lần nếu bài đơn giản.
- Không nên yêu cầu toàn bộ lớp 6–9 trong một lệnh vì khó kiểm soát sai số.

## Definition of Done cho một bài

Một bài được xem là xong bản nháp khi:

- Có đầy đủ LessonContent.
- Có ít nhất 6 exercise templates.
- Có ít nhất 3 ví dụ mẫu.
- Có test generator pass.
- Hiển thị đúng trong UI.
- Có báo cáo TODO cần giáo viên duyệt.

## Definition of Ready

Một bài chỉ được đổi `ready` khi giáo viên đã kiểm tra:

- Tên bài đúng SGK.
- Nội dung không thiếu ý chính.
- Công thức/tính chất đúng.
- Dạng bài phù hợp học sinh.
- Generator không sinh câu sai.
