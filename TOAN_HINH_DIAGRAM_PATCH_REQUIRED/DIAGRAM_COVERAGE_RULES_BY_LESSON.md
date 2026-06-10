# Quy tắc bắt buộc có diagram theo nhóm bài Toán hình

## Chuẩn tối thiểu chung

Mỗi bài Toán hình cần có:

- 1 diagram giới thiệu hoặc lý thuyết.
- 1 diagram trong ví dụ mẫu.
- Bài tập nào yêu cầu đọc hình thì bắt buộc có diagram.
- Bài tập tính toán hình học nên có diagram kèm số đo.
- Bài tập nhận dạng hình bắt buộc có diagram.

## Lớp 6

| Bài | Diagram bắt buộc |
|---|---|
| Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều | Vẽ 3 hình đều, đánh dấu cạnh bằng nhau/góc nếu cần. |
| Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân | Vẽ 4 tứ giác, thể hiện cạnh song song/cạnh bằng nhau/góc vuông nếu có. |
| Bài 20. Chu vi và diện tích của một số tứ giác đã học | Hình chữ nhật, hình vuông, hình thoi, hình bình hành, hình thang cân có kích thước. |
| Bài 21. Hình có trục đối xứng | Hình có/không có trục đối xứng, vẽ đường trục nét đứt. |
| Bài 22. Hình có tâm đối xứng | Hình có tâm đối xứng, đánh dấu tâm O và các điểm đối xứng. |
| Bài 32. Điểm và đường thẳng | Điểm thuộc/không thuộc đường thẳng, nhiều đường thẳng đi qua điểm. |
| Bài 33. Điểm nằm giữa hai điểm. Tia | Ba điểm thẳng hàng, điểm nằm giữa, tia Ox. |
| Bài 34. Đoạn thẳng. Độ dài đoạn thẳng | Đoạn AB có độ dài, so sánh đoạn thẳng. |
| Bài 35. Trung điểm của đoạn thẳng | M là trung điểm AB, AM = MB. |
| Bài 36. Góc | Hai tia chung gốc, ký hiệu góc xOy. |
| Bài 37. Số đo góc | Góc nhọn/vuông/tù/tù bẹt, cung góc có số đo. |

## Lớp 7

| Nhóm bài | Diagram bắt buộc |
|---|---|
| Góc và quan hệ góc | Hai đường thẳng cắt nhau, góc kề bù, đối đỉnh, góc tạo bởi tia phân giác nếu có. |
| Đường thẳng song song | Hai đường thẳng song song bị cắt bởi một đường thẳng, đánh dấu cặp góc đồng vị/so le trong/trong cùng phía. |
| Tam giác bằng nhau | Hai tam giác có đánh dấu cạnh/góc tương ứng bằng nhau. |
| Quan hệ trong tam giác | Tam giác có cạnh/góc cần so sánh; đường vuông góc, đường xiên, đường trung trực nếu có. |
| Hình khối thực tiễn | Hộp chữ nhật, lập phương, lăng trụ đứng, hình chóp tam giác/tứ giác nếu thuộc bài. |

## Lớp 8

| Nhóm bài | Diagram bắt buộc |
|---|---|
| Tứ giác | Tứ giác, hình thang, hình bình hành, hình chữ nhật, hình thoi, hình vuông; thể hiện song song/vuông góc/cạnh bằng nhau. |
| Định lí Thalès | Tam giác có đường thẳng song song một cạnh, ghi các đoạn tương ứng. |
| Đường trung bình | Tam giác/hình thang có đường trung bình, đánh dấu song song. |
| Tam giác đồng dạng | Hai tam giác có góc/cạnh tương ứng, đánh dấu tỉ lệ. |
| Pythagore | Tam giác vuông có hai cạnh góc vuông và cạnh huyền. |
| Hình khối | Hình chóp tam giác đều, hình chóp tứ giác đều, diện tích xung quanh/thể tích nếu có. |

## Lớp 9

| Nhóm bài | Diagram bắt buộc |
|---|---|
| Hệ thức lượng trong tam giác vuông | Tam giác vuông, đường cao xuống cạnh huyền, ký hiệu các đoạn. |
| Tỉ số lượng giác | Tam giác vuông, góc nhọn, cạnh đối/kề/huyền. |
| Đường tròn | Tâm, bán kính, đường kính, dây, tiếp tuyến, cát tuyến. |
| Góc với đường tròn | Góc ở tâm, góc nội tiếp, cung bị chắn. |
| Tứ giác nội tiếp | Tứ giác nội tiếp đường tròn, đánh dấu hai góc đối. |
| Đa giác đều | Đa giác đều nội tiếp đường tròn, tâm, bán kính. |
| Hình trụ, hình nón, hình cầu | Hình khối có bán kính, chiều cao, đường sinh nếu có. |

## QA rule

Trong audit, thêm rule:

```txt
Nếu lesson.track = 'toan-hinh' mà lesson không có bất kỳ diagram nào → FAIL.
Nếu workedExample của hình học không có diagram → WARN hoặc FAIL tùy bài.
Nếu exercise template yêu cầu đọc hình mà generated question không có diagram → FAIL.
```
