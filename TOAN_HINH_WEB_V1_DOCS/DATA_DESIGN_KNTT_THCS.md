# DATA DESIGN — SGK Toán THCS Kết nối tri thức, V1

> File này mô tả thiết kế dữ liệu cho website Toán Hình Web V1. Trọng tâm là **mục lục chuẩn theo SGK Toán 6–9 Kết nối tri thức với cuộc sống**, phân vào hai nhóm hiển thị: **Toán số** và **Toán hình**.

---

## 1. Nguyên tắc dữ liệu

### 1.1. Không bịa bài học

- Chỉ đưa vào các chương/bài có trong mục lục SGK Toán 6–9 Kết nối tri thức.
- Không tự sáng tạo bài học mới trong phần SGK chính.
- Các chuyên đề dạy thêm của giáo viên phải để ở vùng riêng: `teacher_supplement`.

### 1.2. Nội dung được phép sáng tạo

Có thể sáng tạo:

- Cách tóm tắt lý thuyết.
- Cách nhớ, mẹo làm bài.
- Ví dụ mẫu tự biên soạn.
- Bài tập trắc nghiệm tự sinh theo dạng.
- Lời giải từng bước.
- Giải thích lỗi sai thường gặp.

Không nên đưa nguyên văn lý thuyết/bài tập SGK vào dữ liệu website.

### 1.3. Phân nhóm V1

Website V1 chỉ có 2 nhóm lớn:

```txt
Toán số
Toán hình
```

Trong dữ liệu vẫn giữ `strand` chi tiết hơn:

```txt
so-hoc
đai-so
ham-so
phuong-trinh
thong-ke-xac-suat
hinh-hoc-truc-quan
hinh-hoc-phang
hinh-khoi-do-luong
```

Quy ước V1:

- `thong-ke-xac-suat` tạm nằm trong nhóm **Toán số** để UI không có nhánh thứ ba.
- Khi cần mở rộng, có thể tách thành menu riêng **Thống kê – Xác suất** mà không cần đổi dữ liệu lõi.

---

## 2. Trạng thái xác minh dữ liệu

### 2.1. Mức xác minh

```ts
type VerificationStatus =
  | 'toc_verified_online'
  | 'teacher_confirmed'
  | 'needs_teacher_confirmation';
```

### 2.2. Ghi chú hiện tại

- Mục lục lớp 6–9 đã được tổng hợp từ các trang xem SGK online và nguồn NXB/Chương trình GDPT có liên quan.
- Trước khi dùng làm bản chính thức trong lớp học, giáo viên nên đối chiếu nhanh với bản SGK đang dùng tại trường, đặc biệt nếu có tái bản/cập nhật nội dung.
- Link Claude public artifact giáo viên cung cấp hiện chưa truy cập được trong quá trình tra cứu, nên chưa được dùng làm nguồn thiết kế dữ liệu.

---

## 3. Schema curriculum chuẩn

```ts
export type Track = 'toan-so' | 'toan-hinh';

export type Strand =
  | 'so-hoc'
  | 'dai-so'
  | 'ham-so'
  | 'phuong-trinh'
  | 'thong-ke-xac-suat'
  | 'hinh-hoc-truc-quan'
  | 'hinh-hoc-phang'
  | 'hinh-khoi-do-luong';

export type LessonType =
  | 'official_lesson'
  | 'common_practice'
  | 'chapter_review'
  | 'experiential'
  | 'final_review';

export interface CurriculumBook {
  program: 'KNTT';
  subject: 'Toán';
  level: 'THCS';
  grades: Grade[];
}

export interface Grade {
  grade: 6 | 7 | 8 | 9;
  title: string;
  volumes: Volume[];
}

export interface Volume {
  volume: 1 | 2;
  title: string;
  chapters: Chapter[];
}

export interface Chapter {
  id: string;
  grade: 6 | 7 | 8 | 9;
  volume: 1 | 2;
  chapterNo: number;
  title: string;
  track: Track;
  strand: Strand;
  lessons: LessonMeta[];
}

export interface LessonMeta {
  id: string;
  type: LessonType;
  lessonNo?: number;
  title: string;
  contentStatus: 'metadata_only' | 'draft' | 'ready';
  verificationStatus: VerificationStatus;
}
```

---

## 4. Mục lục dữ liệu chuẩn — Toán 6 KNTT

### 4.1. Toán 6 tập 1

#### Chương 1. Tập hợp các số tự nhiên

- Track: `toan-so`
- Strand: `so-hoc`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v1-c1-l1 | official_lesson | Bài 1. Tập hợp |
| g6-v1-c1-l2 | official_lesson | Bài 2. Cách ghi số tự nhiên |
| g6-v1-c1-l3 | official_lesson | Bài 3. Thứ tự trong tập hợp các số tự nhiên |
| g6-v1-c1-l4 | official_lesson | Bài 4. Phép cộng và phép trừ số tự nhiên |
| g6-v1-c1-l5 | official_lesson | Bài 5. Phép nhân và phép chia số tự nhiên |
| g6-v1-c1-practice-1 | common_practice | Luyện tập chung trang 20 |
| g6-v1-c1-l6 | official_lesson | Bài 6. Luỹ thừa với số mũ tự nhiên |
| g6-v1-c1-l7 | official_lesson | Bài 7. Thứ tự thực hiện các phép tính |
| g6-v1-c1-practice-2 | common_practice | Luyện tập chung trang 27 |
| g6-v1-c1-review | chapter_review | Bài tập cuối chương 1 |

#### Chương 2. Tính chia hết trong tập hợp các số tự nhiên

- Track: `toan-so`
- Strand: `so-hoc`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v1-c2-l8 | official_lesson | Bài 8. Quan hệ chia hết và tính chất |
| g6-v1-c2-l9 | official_lesson | Bài 9. Dấu hiệu chia hết |
| g6-v1-c2-l10 | official_lesson | Bài 10. Số nguyên tố |
| g6-v1-c2-practice-1 | common_practice | Luyện tập chung trang 43 |
| g6-v1-c2-l11 | official_lesson | Bài 11. Ước chung. Ước chung lớn nhất |
| g6-v1-c2-l12 | official_lesson | Bài 12. Bội chung. Bội chung nhỏ nhất |
| g6-v1-c2-practice-2 | common_practice | Luyện tập chung trang 54 |
| g6-v1-c2-review | chapter_review | Bài tập cuối chương 2 |

#### Chương 3. Số nguyên

- Track: `toan-so`
- Strand: `so-hoc`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v1-c3-l13 | official_lesson | Bài 13. Tập hợp các số nguyên |
| g6-v1-c3-l14 | official_lesson | Bài 14. Phép cộng và phép trừ số nguyên |
| g6-v1-c3-l15 | official_lesson | Bài 15. Quy tắc dấu ngoặc |
| g6-v1-c3-practice-1 | common_practice | Luyện tập chung trang 69 |
| g6-v1-c3-l16 | official_lesson | Bài 16. Phép nhân số nguyên |
| g6-v1-c3-l17 | official_lesson | Bài 17. Phép chia hết. Ước và bội của một số nguyên |
| g6-v1-c3-practice-2 | common_practice | Luyện tập chung trang 75 |
| g6-v1-c3-review | chapter_review | Bài tập cuối chương 3 |

#### Chương 4. Một số hình phẳng trong thực tiễn

- Track: `toan-hinh`
- Strand: `hinh-hoc-truc-quan`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v1-c4-l18 | official_lesson | Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều |
| g6-v1-c4-l19 | official_lesson | Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân |
| g6-v1-c4-l20 | official_lesson | Bài 20. Chu vi và diện tích của một số tứ giác đã học |
| g6-v1-c4-practice-1 | common_practice | Luyện tập chung trang 95 |
| g6-v1-c4-review | chapter_review | Bài tập cuối chương 4 |

#### Chương 5. Tính đối xứng của hình phẳng trong tự nhiên

- Track: `toan-hinh`
- Strand: `hinh-hoc-truc-quan`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v1-c5-l21 | official_lesson | Bài 21. Hình có trục đối xứng |
| g6-v1-c5-l22 | official_lesson | Bài 22. Hình có tâm đối xứng |
| g6-v1-c5-practice-1 | common_practice | Luyện tập chung trang 108 |
| g6-v1-c5-review | chapter_review | Bài tập cuối chương 5 |

#### Hoạt động thực hành trải nghiệm — Toán 6 tập 1

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v1-exp-1 | experiential | Tấm thiệp và phòng học của em |
| g6-v1-exp-2 | experiential | Vẽ hình đơn giản với phần mềm GeoGebra |
| g6-v1-exp-3 | experiential | Sử dụng máy tính cầm tay |

### 4.2. Toán 6 tập 2

#### Chương 6. Phân số

- Track: `toan-so`
- Strand: `so-hoc`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v2-c6-l23 | official_lesson | Bài 23. Mở rộng phân số. Phân số bằng nhau |
| g6-v2-c6-l24 | official_lesson | Bài 24. So sánh phân số. Hỗn số dương |
| g6-v2-c6-practice-1 | common_practice | Luyện tập chung trang 13 |
| g6-v2-c6-l25 | official_lesson | Bài 25. Phép cộng và phép trừ phân số |
| g6-v2-c6-l26 | official_lesson | Bài 26. Phép nhân và phép chia phân số |
| g6-v2-c6-l27 | official_lesson | Bài 27. Hai bài toán về phân số |
| g6-v2-c6-practice-2 | common_practice | Luyện tập chung trang 25 |
| g6-v2-c6-review | chapter_review | Bài tập cuối chương 6 |

#### Chương 7. Số thập phân

- Track: `toan-so`
- Strand: `so-hoc`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v2-c7-l28 | official_lesson | Bài 28. Số thập phân |
| g6-v2-c7-l29 | official_lesson | Bài 29. Tính toán với số thập phân |
| g6-v2-c7-l30 | official_lesson | Bài 30. Làm tròn và ước lượng |
| g6-v2-c7-l31 | official_lesson | Bài 31. Một số bài toán về tỉ số và tỉ số phần trăm |
| g6-v2-c7-practice-1 | common_practice | Luyện tập chung trang 41 |
| g6-v2-c7-review | chapter_review | Bài tập cuối chương 7 |

#### Chương 8. Những hình hình học cơ bản

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v2-c8-l32 | official_lesson | Bài 32. Điểm và đường thẳng |
| g6-v2-c8-l33 | official_lesson | Bài 33. Điểm nằm giữa hai điểm. Tia |
| g6-v2-c8-l34 | official_lesson | Bài 34. Đoạn thẳng. Độ dài đoạn thẳng |
| g6-v2-c8-l35 | official_lesson | Bài 35. Trung điểm của đoạn thẳng |
| g6-v2-c8-practice-1 | common_practice | Luyện tập chung trang 57 |
| g6-v2-c8-l36 | official_lesson | Bài 36. Góc |
| g6-v2-c8-l37 | official_lesson | Bài 37. Số đo góc |
| g6-v2-c8-practice-2 | common_practice | Luyện tập chung trang 65 |
| g6-v2-c8-review | chapter_review | Bài tập cuối chương 8 |

#### Chương 9. Dữ liệu và xác suất thực nghiệm

- Track: `toan-so`
- Strand: `thong-ke-xac-suat`

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v2-c9-l38 | official_lesson | Bài 38. Dữ liệu và thu thập dữ liệu |
| g6-v2-c9-l39 | official_lesson | Bài 39. Bảng thống kê và biểu đồ tranh |
| g6-v2-c9-l40 | official_lesson | Bài 40. Biểu đồ cột |
| g6-v2-c9-l41 | official_lesson | Bài 41. Biểu đồ cột kép |
| g6-v2-c9-practice-1 | common_practice | Luyện tập chung trang 87 |
| g6-v2-c9-l42 | official_lesson | Bài 42. Kết quả có thể và sự kiện trong trò chơi, thí nghiệm |
| g6-v2-c9-l43 | official_lesson | Bài 43. Xác suất thực nghiệm |
| g6-v2-c9-practice-2 | common_practice | Luyện tập chung trang 97 |
| g6-v2-c9-review | chapter_review | Bài tập cuối chương 9 |

#### Hoạt động thực hành trải nghiệm — Toán 6 tập 2

| Mã | Loại | Tên mục |
|---|---|---|
| g6-v2-exp-1 | experiential | Kế hoạch chi tiêu cá nhân và gia đình |
| g6-v2-exp-2 | experiential | Hoạt động thể thao nào được yêu thích nhất trong hè? |
| g6-v2-exp-3 | experiential | Vẽ hình đơn giản với phần mềm GeoGebra |
| g6-v2-final-review | final_review | Bài tập ôn tập cuối năm |

---

## 5. Mục lục dữ liệu chuẩn — Toán 7 KNTT

### 5.1. Toán 7 tập 1

#### Chương 1. Số hữu tỉ

- Track: `toan-so`
- Strand: `so-hoc`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v1-c1-l1 | official_lesson | Bài 1. Tập hợp các số hữu tỉ |
| g7-v1-c1-l2 | official_lesson | Bài 2. Cộng, trừ, nhân, chia số hữu tỉ |
| g7-v1-c1-practice-1 | common_practice | Luyện tập chung trang 14 |
| g7-v1-c1-l3 | official_lesson | Bài 3. Lũy thừa với số mũ tự nhiên của một số hữu tỉ |
| g7-v1-c1-l4 | official_lesson | Bài 4. Thứ tự thực hiện các phép tính. Quy tắc chuyển vế |
| g7-v1-c1-practice-2 | common_practice | Luyện tập chung trang 24 |
| g7-v1-c1-review | chapter_review | Bài tập cuối chương 1 |

#### Chương 2. Số thực

- Track: `toan-so`
- Strand: `so-hoc`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v1-c2-l5 | official_lesson | Bài 5. Làm quen với số thập phân vô hạn tuần hoàn |
| g7-v1-c2-l6 | official_lesson | Bài 6. Số vô tỉ. Căn bậc hai số học |
| g7-v1-c2-l7 | official_lesson | Bài 7. Tập hợp các số thực |
| g7-v1-c2-practice-1 | common_practice | Luyện tập chung trang 38 |
| g7-v1-c2-review | chapter_review | Bài tập cuối chương 2 |

#### Chương 3. Góc và đường thẳng song song

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v1-c3-l8 | official_lesson | Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc |
| g7-v1-c3-l9 | official_lesson | Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết |
| g7-v1-c3-practice-1 | common_practice | Luyện tập chung trang 50 |
| g7-v1-c3-l10 | official_lesson | Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song |
| g7-v1-c3-l11 | official_lesson | Bài 11. Định lí và chứng minh định lí |
| g7-v1-c3-practice-2 | common_practice | Luyện tập chung trang 58 |
| g7-v1-c3-review | chapter_review | Bài tập cuối chương 3 |

#### Chương 4. Tam giác bằng nhau

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v1-c4-l12 | official_lesson | Bài 12. Tổng các góc trong một tam giác |
| g7-v1-c4-l13 | official_lesson | Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác |
| g7-v1-c4-practice-1 | common_practice | Luyện tập chung trang 68 |
| g7-v1-c4-l14 | official_lesson | Bài 14. Trường hợp bằng nhau thứ hai và thứ ba của tam giác |
| g7-v1-c4-practice-2 | common_practice | Luyện tập chung trang 74 |
| g7-v1-c4-l15 | official_lesson | Bài 15. Các trường hợp bằng nhau của tam giác vuông |
| g7-v1-c4-l16 | official_lesson | Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng |
| g7-v1-c4-practice-3 | common_practice | Luyện tập chung trang 86 |
| g7-v1-c4-review | chapter_review | Bài tập cuối chương 4 |

#### Chương 5. Thu thập và biểu diễn dữ liệu

- Track: `toan-so`
- Strand: `thong-ke-xac-suat`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v1-c5-l17 | official_lesson | Bài 17. Thu thập và phân loại dữ liệu |
| g7-v1-c5-l18 | official_lesson | Bài 18. Biểu đồ hình quạt tròn |
| g7-v1-c5-l19 | official_lesson | Bài 19. Biểu đồ đoạn thẳng |
| g7-v1-c5-practice-1 | common_practice | Luyện tập chung trang 106, 107 |
| g7-v1-c5-review | chapter_review | Bài tập cuối chương 5 |

#### Hoạt động thực hành trải nghiệm — Toán 7 tập 1

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v1-exp-1 | experiential | Vẽ hình đơn giản với phần mềm GeoGebra |
| g7-v1-exp-2 | experiential | Dân số và cơ cấu dân số Việt Nam |

### 5.2. Toán 7 tập 2

#### Chương 6. Tỉ lệ thức và đại lượng tỉ lệ

- Track: `toan-so`
- Strand: `dai-so`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v2-c6-l20 | official_lesson | Bài 20. Tỉ lệ thức |
| g7-v2-c6-l21 | official_lesson | Bài 21. Tính chất của dãy tỉ số bằng nhau |
| g7-v2-c6-practice-1 | common_practice | Luyện tập chung trang 10 |
| g7-v2-c6-l22 | official_lesson | Bài 22. Đại lượng tỉ lệ thuận |
| g7-v2-c6-l23 | official_lesson | Bài 23. Đại lượng tỉ lệ nghịch |
| g7-v2-c6-practice-2 | common_practice | Luyện tập chung trang 20 |
| g7-v2-c6-review | chapter_review | Bài tập cuối chương 6 |

#### Chương 7. Biểu thức đại số và đa thức một biến

- Track: `toan-so`
- Strand: `dai-so`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v2-c7-l24 | official_lesson | Bài 24. Biểu thức đại số |
| g7-v2-c7-l25 | official_lesson | Bài 25. Đa thức một biến |
| g7-v2-c7-l26 | official_lesson | Bài 26. Phép cộng và phép trừ đa thức một biến |
| g7-v2-c7-practice-1 | common_practice | Luyện tập chung trang 35 |
| g7-v2-c7-l27 | official_lesson | Bài 27. Phép nhân đa thức một biến |
| g7-v2-c7-l28 | official_lesson | Bài 28. Phép chia đa thức một biến |
| g7-v2-c7-practice-2 | common_practice | Luyện tập chung trang 45 |
| g7-v2-c7-review | chapter_review | Bài tập cuối chương 7 |

#### Chương 8. Làm quen với biến cố và xác suất của biến cố

- Track: `toan-so`
- Strand: `thong-ke-xac-suat`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v2-c8-l29 | official_lesson | Bài 29. Làm quen với biến cố |
| g7-v2-c8-l30 | official_lesson | Bài 30. Làm quen với xác suất của biến cố |
| g7-v2-c8-practice-1 | common_practice | Luyện tập chung trang 57 |
| g7-v2-c8-review | chapter_review | Bài tập cuối chương 8 |

#### Chương 9. Quan hệ giữa các yếu tố trong một tam giác

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v2-c9-l31 | official_lesson | Bài 31. Quan hệ giữa góc và cạnh đối diện trong một tam giác |
| g7-v2-c9-l32 | official_lesson | Bài 32. Quan hệ giữa đường vuông góc và đường xiên |
| g7-v2-c9-l33 | official_lesson | Bài 33. Quan hệ giữa ba cạnh của một tam giác |
| g7-v2-c9-practice-1 | common_practice | Luyện tập chung trang 71 |
| g7-v2-c9-l34 | official_lesson | Bài 34. Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác |
| g7-v2-c9-l35 | official_lesson | Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác |
| g7-v2-c9-practice-2 | common_practice | Luyện tập chung trang 83 |
| g7-v2-c9-review | chapter_review | Bài tập cuối chương 9 |

#### Chương 10. Một số hình khối trong thực tiễn

- Track: `toan-hinh`
- Strand: `hinh-khoi-do-luong`

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v2-c10-l36 | official_lesson | Bài 36. Hình hộp chữ nhật và hình lập phương |
| g7-v2-c10-practice-1 | common_practice | Luyện tập trang 93 |
| g7-v2-c10-l37 | official_lesson | Bài 37. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác |
| g7-v2-c10-practice-2 | common_practice | Luyện tập trang 101 |
| g7-v2-c10-review | chapter_review | Bài tập cuối chương 10 |

#### Hoạt động thực hành trải nghiệm — Toán 7 tập 2

| Mã | Loại | Tên mục |
|---|---|---|
| g7-v2-exp-1 | experiential | Đại lượng tỉ lệ trong đời sống |
| g7-v2-exp-2 | experiential | Hộp quà và chân đế lịch để bàn của em |
| g7-v2-final-review | final_review | Bài tập ôn tập cuối năm |

---

## 6. Mục lục dữ liệu chuẩn — Toán 8 KNTT

### 6.1. Toán 8 tập 1

#### Chương 1. Đa thức

- Track: `toan-so`
- Strand: `dai-so`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v1-c1-l1 | official_lesson | Bài 1. Đơn thức |
| g8-v1-c1-l2 | official_lesson | Bài 2. Đa thức |
| g8-v1-c1-l3 | official_lesson | Bài 3. Phép cộng và phép trừ đa thức |
| g8-v1-c1-practice-1 | common_practice | Luyện tập chung trang 17 |
| g8-v1-c1-l4 | official_lesson | Bài 4. Phép nhân đa thức |
| g8-v1-c1-l5 | official_lesson | Bài 5. Phép chia đa thức cho đơn thức |
| g8-v1-c1-practice-2 | common_practice | Luyện tập chung trang 25 |
| g8-v1-c1-review | chapter_review | Bài tập cuối chương 1 |

#### Chương 2. Hằng đẳng thức đáng nhớ và ứng dụng

- Track: `toan-so`
- Strand: `dai-so`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v1-c2-l6 | official_lesson | Bài 6. Hiệu hai bình phương. Bình phương của một tổng hay một hiệu |
| g8-v1-c2-l7 | official_lesson | Bài 7. Lập phương của một tổng. Lập phương của một hiệu |
| g8-v1-c2-l8 | official_lesson | Bài 8. Tổng và hiệu hai lập phương |
| g8-v1-c2-practice-1 | common_practice | Luyện tập chung trang 40 |
| g8-v1-c2-l9 | official_lesson | Bài 9. Phân tích đa thức thành nhân tử |
| g8-v1-c2-practice-2 | common_practice | Luyện tập chung trang 45 |
| g8-v1-c2-review | chapter_review | Bài tập cuối chương 2 |

#### Chương 3. Tứ giác

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v1-c3-l10 | official_lesson | Bài 10. Tứ giác |
| g8-v1-c3-l11 | official_lesson | Bài 11. Hình thang cân |
| g8-v1-c3-practice-1 | common_practice | Luyện tập chung trang 56 |
| g8-v1-c3-l12 | official_lesson | Bài 12. Hình bình hành |
| g8-v1-c3-practice-2 | common_practice | Luyện tập chung trang 62 |
| g8-v1-c3-l13 | official_lesson | Bài 13. Hình chữ nhật |
| g8-v1-c3-l14 | official_lesson | Bài 14. Hình thoi và hình vuông |
| g8-v1-c3-practice-3 | common_practice | Luyện tập chung trang 73 |
| g8-v1-c3-review | chapter_review | Bài tập cuối chương 3 |

#### Chương 4. Định lí Thalès

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v1-c4-l15 | official_lesson | Bài 15. Định lí Thalès trong tam giác |
| g8-v1-c4-l16 | official_lesson | Bài 16. Đường trung bình của tam giác |
| g8-v1-c4-l17 | official_lesson | Bài 17. Tính chất đường phân giác của tam giác |
| g8-v1-c4-practice-1 | common_practice | Luyện tập chung trang 87 |
| g8-v1-c4-review | chapter_review | Bài tập cuối chương 4 |

#### Chương 5. Dữ liệu và biểu đồ

- Track: `toan-so`
- Strand: `thong-ke-xac-suat`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v1-c5-l18 | official_lesson | Bài 18. Thu thập và phân loại dữ liệu |
| g8-v1-c5-l19 | official_lesson | Bài 19. Biểu diễn dữ liệu bằng bảng, biểu đồ |
| g8-v1-c5-l20 | official_lesson | Bài 20. Phân tích số liệu thống kê dựa vào biểu đồ |
| g8-v1-c5-practice-1 | common_practice | Luyện tập chung trang 106 |
| g8-v1-c5-review | chapter_review | Bài tập cuối chương 5 |

#### Hoạt động thực hành trải nghiệm — Toán 8 tập 1

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v1-exp-1 | experiential | Công thức lãi kép |
| g8-v1-exp-2 | experiential | Thực hiện tính toán trên đa thức với phần mềm GeoGebra |
| g8-v1-exp-3 | experiential | Vẽ hình đơn giản với phần mềm GeoGebra |
| g8-v1-exp-4 | experiential | Phân tích đặc điểm khí hậu Việt Nam |

### 6.2. Toán 8 tập 2

#### Chương 6. Phân thức đại số

- Track: `toan-so`
- Strand: `dai-so`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v2-c6-l21 | official_lesson | Bài 21. Phân thức đại số |
| g8-v2-c6-l22 | official_lesson | Bài 22. Tính chất cơ bản của phân thức đại số |
| g8-v2-c6-practice-1 | common_practice | Luyện tập chung trang 13 |
| g8-v2-c6-l23 | official_lesson | Bài 23. Phép cộng và phép trừ phân thức đại số |
| g8-v2-c6-l24 | official_lesson | Bài 24. Phép nhân và phép chia phân thức đại số |
| g8-v2-c6-practice-2 | common_practice | Luyện tập chung trang 23 |
| g8-v2-c6-review | chapter_review | Bài tập cuối chương 6 |

#### Chương 7. Phương trình bậc nhất và hàm số bậc nhất

- Track: `toan-so`
- Strand: `phuong-trinh`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v2-c7-l25 | official_lesson | Bài 25. Phương trình bậc nhất một ẩn |
| g8-v2-c7-l26 | official_lesson | Bài 26. Giải bài toán bằng cách lập phương trình |
| g8-v2-c7-practice-1 | common_practice | Luyện tập chung trang 37 |
| g8-v2-c7-l27 | official_lesson | Bài 27. Khái niệm hàm số và đồ thị của hàm số |
| g8-v2-c7-l28 | official_lesson | Bài 28. Hàm số bậc nhất và đồ thị của hàm số bậc nhất |
| g8-v2-c7-l29 | official_lesson | Bài 29. Hệ số góc của đường thẳng |
| g8-v2-c7-practice-2 | common_practice | Luyện tập chung trang 55 |
| g8-v2-c7-review | chapter_review | Bài tập cuối chương 7 |

#### Chương 8. Mở đầu về tính xác suất của biến cố

- Track: `toan-so`
- Strand: `thong-ke-xac-suat`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v2-c8-l30 | official_lesson | Bài 30. Kết quả có thể và kết quả thuận lợi |
| g8-v2-c8-l31 | official_lesson | Bài 31. Cách tính xác suất của biến cố bằng tỉ số |
| g8-v2-c8-l32 | official_lesson | Bài 32. Mối liên hệ giữa xác suất thực nghiệm với xác suất và ứng dụng |
| g8-v2-c8-practice-1 | common_practice | Luyện tập chung trang 74 |
| g8-v2-c8-review | chapter_review | Bài tập cuối chương 8 |

#### Chương 9. Tam giác đồng dạng

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v2-c9-l33 | official_lesson | Bài 33. Hai tam giác đồng dạng |
| g8-v2-c9-l34 | official_lesson | Bài 34. Ba trường hợp đồng dạng của hai tam giác |
| g8-v2-c9-practice-1 | common_practice | Luyện tập chung trang 91 |
| g8-v2-c9-l35 | official_lesson | Bài 35. Định lí Pythagore và ứng dụng |
| g8-v2-c9-l36 | official_lesson | Bài 36. Các trường hợp đồng dạng của hai tam giác vuông |
| g8-v2-c9-l37 | official_lesson | Bài 37. Hình đồng dạng |
| g8-v2-c9-practice-2 | common_practice | Luyện tập chung trang 108 |
| g8-v2-c9-review | chapter_review | Bài tập cuối chương 9 |

#### Chương 10. Một số hình khối trong thực tiễn

- Track: `toan-hinh`
- Strand: `hinh-khoi-do-luong`

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v2-c10-l38 | official_lesson | Bài 38. Hình chóp tam giác đều |
| g8-v2-c10-l39 | official_lesson | Bài 39. Hình chóp tứ giác đều |
| g8-v2-c10-practice-1 | common_practice | Luyện tập chung trang 121 |
| g8-v2-c10-review | chapter_review | Bài tập cuối chương 10 |

#### Hoạt động thực hành trải nghiệm — Toán 8 tập 2

| Mã | Loại | Tên mục |
|---|---|---|
| g8-v2-exp-1 | experiential | Một vài ứng dụng của hàm số bậc nhất trong tài chính |
| g8-v2-exp-2 | experiential | Ứng dụng định lí Thalès, định lí Pythagore và tam giác đồng dạng để đo chiều cao, khoảng cách |
| g8-v2-exp-3 | experiential | Thực hành tính toán trên phân thức đại số và vẽ đồ thị hàm số với phần mềm GeoGebra |
| g8-v2-exp-4 | experiential | Mô tả thí nghiệm ngẫu nhiên với phần mềm Excel |
| g8-v2-final-review | final_review | Bài tập ôn tập cuối năm |

---

## 7. Mục lục dữ liệu chuẩn — Toán 9 KNTT

### 7.1. Toán 9 tập 1

#### Chương 1. Phương trình và hệ hai phương trình bậc nhất hai ẩn

- Track: `toan-so`
- Strand: `phuong-trinh`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v1-c1-l1 | official_lesson | Bài 1. Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn |
| g9-v1-c1-l2 | official_lesson | Bài 2. Giải hệ hai phương trình bậc nhất hai ẩn |
| g9-v1-c1-practice-1 | common_practice | Luyện tập chung trang 19 |
| g9-v1-c1-l3 | official_lesson | Bài 3. Giải bài toán bằng cách lập hệ phương trình |
| g9-v1-c1-review | chapter_review | Bài tập cuối chương 1 |

#### Chương 2. Phương trình và bất phương trình bậc nhất một ẩn

- Track: `toan-so`
- Strand: `phuong-trinh`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v1-c2-l4 | official_lesson | Bài 4. Phương trình quy về phương trình bậc nhất một ẩn |
| g9-v1-c2-l5 | official_lesson | Bài 5. Bất đẳng thức và tính chất |
| g9-v1-c2-practice-1 | common_practice | Luyện tập chung trang 36 |
| g9-v1-c2-l6 | official_lesson | Bài 6. Bất phương trình bậc nhất một ẩn |
| g9-v1-c2-review | chapter_review | Bài tập cuối chương 2 |

#### Chương 3. Căn bậc hai và căn bậc ba

- Track: `toan-so`
- Strand: `dai-so`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v1-c3-l7 | official_lesson | Bài 7. Căn bậc hai và căn thức bậc hai |
| g9-v1-c3-l8 | official_lesson | Bài 8. Khai căn bậc hai với phép nhân và phép chia |
| g9-v1-c3-practice-1 | common_practice | Luyện tập chung trang 52 |
| g9-v1-c3-l9 | official_lesson | Bài 9. Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai |
| g9-v1-c3-l10 | official_lesson | Bài 10. Căn bậc ba và căn thức bậc ba |
| g9-v1-c3-practice-2 | common_practice | Luyện tập chung trang 63 |
| g9-v1-c3-review | chapter_review | Bài tập cuối chương 3 |

#### Chương 4. Hệ thức lượng trong tam giác vuông

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v1-c4-l11 | official_lesson | Bài 11. Tỉ số lượng giác của góc nhọn |
| g9-v1-c4-l12 | official_lesson | Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng |
| g9-v1-c4-practice-1 | common_practice | Luyện tập chung trang 79 |
| g9-v1-c4-review | chapter_review | Bài tập cuối chương 4 |

#### Chương 5. Đường tròn

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v1-c5-l13 | official_lesson | Bài 13. Mở đầu về đường tròn |
| g9-v1-c5-l14 | official_lesson | Bài 14. Cung và dây của một đường tròn |
| g9-v1-c5-l15 | official_lesson | Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên |
| g9-v1-c5-practice-1 | common_practice | Luyện tập chung trang 96 |
| g9-v1-c5-l16 | official_lesson | Bài 16. Vị trí tương đối của đường thẳng và đường tròn |
| g9-v1-c5-l17 | official_lesson | Bài 17. Vị trí tương đối của hai đường tròn |
| g9-v1-c5-practice-2 | common_practice | Luyện tập chung trang 108 |
| g9-v1-c5-review | chapter_review | Bài tập cuối chương 5 |

#### Hoạt động thực hành trải nghiệm — Toán 9 tập 1

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v1-exp-1 | experiential | Pha chế dung dịch theo nồng độ yêu cầu |
| g9-v1-exp-2 | experiential | Tính chiều cao và xác định khoảng cách |

### 7.2. Toán 9 tập 2

#### Chương 6. Hàm số y = ax², a ≠ 0. Phương trình bậc hai một ẩn

- Track: `toan-so`
- Strand: `phuong-trinh`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v2-c6-l18 | official_lesson | Bài 18. Hàm số y = ax², a ≠ 0 |
| g9-v2-c6-l19 | official_lesson | Bài 19. Phương trình bậc hai một ẩn |
| g9-v2-c6-practice-1 | common_practice | Luyện tập chung trang 18 |
| g9-v2-c6-l20 | official_lesson | Bài 20. Định lí Viète và ứng dụng |
| g9-v2-c6-l21 | official_lesson | Bài 21. Giải bài toán bằng cách lập phương trình |
| g9-v2-c6-practice-2 | common_practice | Luyện tập chung trang 28 |
| g9-v2-c6-review | chapter_review | Bài tập cuối chương 6 |

#### Chương 7. Tần số và tần số tương đối

- Track: `toan-so`
- Strand: `thong-ke-xac-suat`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v2-c7-l22 | official_lesson | Bài 22. Bảng tần số và biểu đồ tần số |
| g9-v2-c7-l23 | official_lesson | Bài 23. Bảng tần số tương đối và biểu đồ tần số tương đối |
| g9-v2-c7-practice-1 | common_practice | Luyện tập chung trang 43 |
| g9-v2-c7-l24 | official_lesson | Bài 24. Bảng tần số, tần số tương đối ghép nhóm và biểu đồ |
| g9-v2-c7-review | chapter_review | Bài tập cuối chương 7 |

#### Chương 8. Xác suất của biến cố trong một số mô hình xác suất đơn giản

- Track: `toan-so`
- Strand: `thong-ke-xac-suat`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v2-c8-l25 | official_lesson | Bài 25. Phép thử ngẫu nhiên và không gian mẫu |
| g9-v2-c8-l26 | official_lesson | Bài 26. Xác suất của biến cố liên quan tới phép thử |
| g9-v2-c8-practice-1 | common_practice | Luyện tập chung trang 64 |
| g9-v2-c8-review | chapter_review | Bài tập cuối chương 8 |

#### Chương 9. Đường tròn ngoại tiếp và đường tròn nội tiếp

- Track: `toan-hinh`
- Strand: `hinh-hoc-phang`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v2-c9-l27 | official_lesson | Bài 27. Góc nội tiếp |
| g9-v2-c9-l28 | official_lesson | Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác |
| g9-v2-c9-practice-1 | common_practice | Luyện tập chung trang 78 |
| g9-v2-c9-l29 | official_lesson | Bài 29. Tứ giác nội tiếp |
| g9-v2-c9-l30 | official_lesson | Bài 30. Đa giác đều |
| g9-v2-c9-practice-2 | common_practice | Luyện tập chung trang 90 |
| g9-v2-c9-review | chapter_review | Bài tập cuối chương 9 |

#### Chương 10. Một số hình khối trong thực tiễn

- Track: `toan-hinh`
- Strand: `hinh-khoi-do-luong`

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v2-c10-l31 | official_lesson | Bài 31. Hình trụ và hình nón |
| g9-v2-c10-l32 | official_lesson | Bài 32. Hình cầu |
| g9-v2-c10-practice-1 | common_practice | Luyện tập chung trang 106 |
| g9-v2-c10-review | chapter_review | Bài tập cuối chương 10 |

#### Hoạt động thực hành trải nghiệm — Toán 9 tập 2

| Mã | Loại | Tên mục |
|---|---|---|
| g9-v2-exp-1 | experiential | Giải phương trình, hệ phương trình và vẽ đồ thị hàm số với phần mềm GeoGebra |
| g9-v2-exp-2 | experiential | Vẽ hình đơn giản với phần mềm GeoGebra |
| g9-v2-exp-3 | experiential | Xác định tần số, tần số tương đối, vẽ các biểu đồ biểu diễn bảng tần số, tần số tương đối bằng Excel |
| g9-v2-exp-4 | experiential | Gene trội trong các thế hệ lai |
| g9-v2-final-review | final_review | Bài tập ôn tập cuối năm |

---

## 8. Dữ liệu bài học chi tiết

Mỗi bài học sẽ có một file riêng trong `src/data/lessons`.

Ví dụ:

```txt
src/data/lessons/grade-6/g6-v1-c1-l1.ts
```

Mẫu:

```ts
export const lesson_g6_v1_c1_l1: LessonContent = {
  lessonId: 'g6-v1-c1-l1',
  objectives: [
    'Nhận biết được khái niệm tập hợp thông qua ví dụ quen thuộc.',
    'Biết dùng kí hiệu thuộc và không thuộc trong tình huống đơn giản.',
  ],
  prerequisites: [],
  theoryBlocks: [
    {
      title: 'Tập hợp là gì?',
      body: 'Tập hợp là một nhóm đối tượng được xác định rõ ràng theo một tiêu chí nào đó.',
    },
  ],
  remember: [
    'Một phần tử hoặc thuộc tập hợp, hoặc không thuộc tập hợp.',
  ],
  tips: [
    'Hãy kiểm tra tiêu chí của tập hợp trước khi kết luận một phần tử có thuộc tập hợp hay không.',
  ],
  commonMistakes: [
    {
      mistake: 'Nhầm giữa tên tập hợp và phần tử của tập hợp.',
      whyWrong: 'Tên tập hợp thường được đặt bằng chữ in hoa, còn phần tử là đối tượng nằm trong tập hợp.',
      correction: 'Luôn xác định đâu là “nhóm”, đâu là “đối tượng trong nhóm”.',
    },
  ],
  workedExamples: [],
  exerciseTemplateIds: [],
};
```

---

## 9. Dữ liệu bài tập trắc nghiệm

### 9.1. Exercise template

```ts
export interface ExerciseTemplate {
  id: string;
  lessonId: string;
  title: string;
  difficulty: 'basic' | 'understanding' | 'application' | 'high_application';
  skillTags: string[];
  generator: (seed: number) => ExerciseInstance;
}
```

### 9.2. Exercise instance

```ts
export interface ExerciseInstance {
  templateId: string;
  seed: number;
  prompt: string;
  choices: {
    id: 'A' | 'B' | 'C' | 'D';
    text: string;
  }[];
  correctChoiceId: 'A' | 'B' | 'C' | 'D';
  solution: {
    summary: string;
    steps: string[];
    finalAnswer: string;
    mistakeExplanations?: Partial<Record<'A' | 'B' | 'C' | 'D', string>>;
  };
}
```

### 9.3. Quy tắc sinh đáp án nhiễu

Đáp án nhiễu nên phản ánh lỗi sai thường gặp, ví dụ:

- Quên đổi dấu.
- Nhầm thứ tự phép tính.
- Rút gọn phân số sai.
- Nhầm công thức diện tích/chu vi.
- Nhầm điều kiện xác định.
- Nhầm cạnh tương ứng trong hình đồng dạng.

Không nên tạo đáp án nhiễu quá vô lý vì học sinh dễ đoán.

---

## 10. Mapping UI

### 10.1. Trang Toán số

Hiển thị các chương có:

```txt
track = 'toan-so'
```

Bao gồm:

- Số học.
- Đại số.
- Hàm số.
- Phương trình.
- Thống kê – xác suất.

### 10.2. Trang Toán hình

Hiển thị các chương có:

```txt
track = 'toan-hinh'
```

Bao gồm:

- Hình học trực quan.
- Hình học phẳng.
- Hình khối và đo lường.

---

## 11. Validation bắt buộc

### 11.1. Curriculum validation

```txt
- Mỗi grade phải có 2 volume.
- Mỗi chapterId duy nhất.
- Mỗi lessonId duy nhất.
- Mỗi official_lesson phải có lessonNo.
- Track chỉ được là toan-so hoặc toan-hinh.
- Strand phải thuộc danh sách strand chuẩn.
```

### 11.2. Exercise validation

```txt
- Câu hỏi không rỗng.
- Có đúng 4 đáp án.
- Các đáp án không trùng nội dung.
- correctChoiceId nằm trong A/B/C/D.
- solution.steps có ít nhất 1 bước.
- Không sinh dữ liệu ngoài phạm vi bài học.
```

---

## 12. Dữ liệu bổ sung của giáo viên

Khi giáo viên cung cấp tài liệu dạy thêm, lưu theo cấu trúc riêng:

```ts
export interface TeacherSupplement {
  id: string;
  title: string;
  relatedLessonIds: string[];
  contentBlocks: TheoryBlock[];
  workedExamples: WorkedExample[];
  exerciseTemplateIds: string[];
  sourceNote: string;
}
```

Quy tắc:

- Không đổi tên chương/bài SGK gốc.
- Không đưa chuyên đề dạy thêm thành bài SGK chính.
- Chuyên đề có thể liên kết với nhiều bài học SGK.

---

## 13. Thứ tự triển khai nội dung đề xuất

Nên triển khai theo nhu cầu học kèm thực tế:

1. Lớp 6 Toán số: số tự nhiên, chia hết, số nguyên, phân số, số thập phân.
2. Lớp 7 Toán số: số hữu tỉ, số thực, tỉ lệ thức, đa thức một biến.
3. Lớp 8 Toán số: đa thức, hằng đẳng thức, phân thức, phương trình, hàm số bậc nhất.
4. Lớp 9 Toán số: hệ phương trình, căn thức, phương trình bậc hai, Viète.
5. Sau đó mở rộng Toán hình theo từng lớp.

Lý do: học sinh yếu thường hổng kỹ năng tính toán/biến đổi trước, nếu Toán số vững thì Toán hình cũng dễ học hơn.
