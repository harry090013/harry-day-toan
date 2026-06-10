# 03 — Chuẩn generator bài tập Toán hình

## Bắt buộc

Mỗi `ExerciseTemplateDefinition.generate(seed)` phải tạo ra:

- `stem`: đề bài rõ ràng.
- `choices`: đúng 4 đáp án A/B/C/D.
- `correctChoiceId`: đúng duy nhất 1 đáp án.
- `solution.summary` và `solution.steps` không rỗng.
- `metadata.lessonId`, `metadata.skillGroupId`, `tags`.

## Quy trình sinh câu hỏi

```txt
1. Sinh dữ kiện hợp lệ.
2. Tính đáp án đúng bằng hàm riêng.
3. Sinh đáp án nhiễu từ lỗi sai thường gặp.
4. Chuẩn hóa đơn vị/ký hiệu.
5. Loại đáp án trùng.
6. Shuffle lựa chọn bằng seed.
7. Kiểm tra đúng duy nhất một đáp án.
8. Sinh lời giải từng bước.
```

## Các loại câu Toán hình nên có

| Loại câu | Ví dụ |
|---|---|
| Nhận biết hình | Hình nào là hình thang cân? |
| Đọc hình | Cạnh nào là cạnh huyền? Góc nào là góc đối diện cạnh AB? |
| Tính trực tiếp | Tính chu vi, diện tích, thể tích, số đo góc. |
| Chọn công thức | Công thức nào dùng để tính diện tích hình thang? |
| Chọn tính chất | Trong hình bình hành, hai đường chéo có tính chất gì? |
| Chứng minh ngắn | Chọn bộ dữ kiện đủ để kết luận hai tam giác bằng nhau. |
| Sắp xếp bước | Sắp xếp các bước chứng minh theo thứ tự đúng. |
| Phát hiện lỗi | Bạn A giải sai ở bước nào? |

## Sinh số liệu đẹp

- Lớp 6–7: ưu tiên số nguyên nhỏ, kết quả nguyên.
- Lớp 8: có thể dùng phân số/tỉ lệ nhưng tránh quá xấu ở mức basic.
- Lớp 9: có thể dùng căn, π, lượng giác; nhưng với mất gốc nên có chế độ basic số đẹp.

## Chống lỗi đáp án

Antigravity phải tạo hoặc cập nhật test chạy nhiều seed:

```txt
- 500 seed/template cho bài thường.
- 1000 seed/template cho bài công thức nhiều nhánh.
```

Kiểm tra tự động:

```txt
choices.length === 4
không có nội dung đáp án trùng
correctChoiceId tồn tại
chỉ có một đáp án đúng theo validator
solution.steps.length >= 2
stem không rỗng
```

## Mẫu nhiễu tốt

Nhiễu không nên ngẫu nhiên vô nghĩa. Nên đến từ lỗi phổ biến:

- Nhầm chu vi với diện tích.
- Dùng đường kính thay bán kính.
- Quên chia 2 hoặc nhân 1/3.
- Nhầm cạnh đối/kề/huyền.
- Dùng góc kề thay vì góc đối.
- Lập tỉ số đoạn thẳng sai cặp tương ứng.
- Quên điều kiện song song/vuông góc/trung điểm.
