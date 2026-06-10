# Toán Hình Web — Patch bắt buộc có hình minh họa

Gói này dùng để sửa yêu cầu trước đó: phần Toán hình không được chỉ có chữ và bài tập. Antigravity cần bổ sung hệ thống diagram/SVG và gắn hình minh họa vào lý thuyết, ví dụ mẫu, bài tập trắc nghiệm và lời giải.

## Cách dùng nhanh

1. Giải nén ZIP này vào project, ví dụ:

```bash
mkdir -p docs/toan-hinh-diagram-patch
unzip TOAN_HINH_DIAGRAM_PATCH_REQUIRED.zip -d docs/toan-hinh-diagram-patch
find docs/toan-hinh-diagram-patch -type f | sort
```

2. Copy nội dung file `ANTIGRAVITY_PATCH_DIAGRAMS_REQUIRED.md` vào Antigravity.

3. Yêu cầu Antigravity làm theo thứ tự:

```txt
- Trước hết tạo renderer/Component hiển thị diagram bằng SVG.
- Sau đó bổ sung diagram vào các bài Toán hình đã tạo.
- Cuối cùng, từ nay mọi bài Toán hình mới phải có diagram theo chuẩn trong patch này.
```

## Nguyên tắc chính

- Không dùng ảnh chụp từ SGK.
- Không dùng ảnh mạng.
- Dùng SVG tự vẽ trong code hoặc data-driven SVG.
- Hình phải khớp với dữ kiện toán học trong đề bài.
- Nếu hình chỉ minh họa không theo tỉ lệ, phải ghi `notToScale: true`.
- Bài Toán hình không có diagram thì coi như chưa đạt QA, trừ khi có lý do cụ thể.
