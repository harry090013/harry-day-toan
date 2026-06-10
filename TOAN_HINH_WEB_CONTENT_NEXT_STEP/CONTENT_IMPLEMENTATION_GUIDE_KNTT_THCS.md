# CONTENT IMPLEMENTATION GUIDE — Toán Hình Web V1

> Mục tiêu: biến khung website đã lập trình thành hệ thống bài học Toán THCS Kết nối tri thức, phục vụ dạy kèm nội bộ, chia rõ **Toán số** và **Toán hình**, mỗi bài có **lý thuyết tóm tắt → ví dụ mẫu → bài tập trắc nghiệm sinh ngẫu nhiên → lời giải chi tiết hiện ngay**.

---

## 1. Tư duy triển khai nội dung

Không nên triển khai theo kiểu:

```txt
Một bài SGK = một trang lý thuyết dài + vài câu hỏi tĩnh
```

Nên triển khai theo kiểu:

```txt
Một bài SGK = một cụm kiến thức + nhiều dạng toán nhỏ + nhiều template sinh bài tập
```

Vì mục tiêu của website là giúp học sinh **quen dạng toán**, nên đơn vị quan trọng nhất trong dữ liệu không chỉ là `lesson`, mà là:

```txt
lesson → skillGroups → exerciseTemplates
```

Trong đó:

- `lesson`: bài theo SGK.
- `skillGroup`: dạng toán nhỏ trong bài.
- `exerciseTemplate`: khuôn sinh câu hỏi trắc nghiệm ngẫu nhiên.

Ví dụ:

```txt
Bài 1. Tập hợp
├── Dạng 1. Nhận biết phần tử thuộc/không thuộc tập hợp
├── Dạng 2. Viết tập hợp bằng cách liệt kê phần tử
├── Dạng 3. Viết tập hợp bằng tính chất đặc trưng
├── Dạng 4. Đếm số phần tử của một tập hợp đơn giản
└── Dạng 5. Nhận biết hai tập hợp bằng nhau
```

---

## 2. Ba lớp dữ liệu cần có

### 2.1. Lớp 1 — Curriculum metadata

Đây là dữ liệu mục lục, đã có trong file:

```txt
curriculum-kntt-thcs.seed.json
curriculum-kntt-thcs.seed.ts
```

Vai trò:

- Giữ đúng lớp, tập, chương, bài.
- Phân bài vào `toan-so` hoặc `toan-hinh`.
- Không chứa lý thuyết dài.
- Không chứa câu hỏi luyện tập.

### 2.2. Lớp 2 — Lesson content

Đây là nội dung giảng dạy tự biên soạn, bám theo bài SGK.

Mỗi bài nên có file riêng:

```txt
src/data/lessons/grade-6/g6-v1-c1-l1.ts
src/data/lessons/grade-6/g6-v1-c1-l2.ts
...
src/data/lessons/grade-9/g9-v2-c10-l32.ts
```

Mỗi file bài học chứa:

```txt
- Mục tiêu bài học
- Kiến thức cần nhớ
- Lưu ý / lỗi sai thường gặp
- Mẹo nhớ
- Ví dụ mẫu có lời giải từng bước
- Dạng toán của bài
- Danh sách template bài tập liên quan
```

### 2.3. Lớp 3 — Exercise templates

Đây là dữ liệu hoặc code sinh bài tập.

Mỗi template phải trả về:

```txt
- Câu hỏi
- 4 đáp án
- Đáp án đúng
- Lời giải chi tiết
- Giải thích lỗi sai cho đáp án nhiễu nếu có thể
- Mức độ
- Seed để tái tạo
```

Ví dụ đường dẫn:

```txt
src/data/exercise-templates/grade-6/tap-hop.ts
src/data/exercise-templates/grade-6/phep-cong-tru-so-tu-nhien.ts
src/data/exercise-templates/grade-8/don-thuc.ts
src/data/exercise-templates/grade-9/he-phuong-trinh-bac-nhat-hai-an.ts
```

---

## 3. Cấu trúc chuẩn của một bài học

Mỗi bài nên thống nhất theo cấu trúc sau.

### 3.1. Header bài học

Hiển thị:

```txt
Lớp 6 / Toán số / Chương 1
Bài 1. Tập hợp
Trạng thái: Đã biên soạn / Cần giáo viên duyệt
```

Dữ liệu cần có:

```ts
lessonId: string;
grade: 6 | 7 | 8 | 9;
track: 'toan-so' | 'toan-hinh';
chapterId: string;
title: string;
sourceTextbook: 'SGK Toán KNTT';
sourceStatus: 'draft' | 'teacher_reviewed' | 'ready';
```

### 3.2. Mục tiêu bài học

Không viết quá nhiều. Nên dùng 3–5 gạch đầu dòng.

Mẫu:

```txt
Sau bài này, học sinh cần:
- Nhận biết được khái niệm ...
- Sử dụng được kí hiệu ...
- Làm được dạng toán ...
- Tránh được lỗi sai ...
```

### 3.3. Kiến thức cần nhớ

Chia thành các thẻ nhỏ, mỗi thẻ chỉ nói một ý.

Mẫu:

```txt
Thẻ 1. Khái niệm
Thẻ 2. Kí hiệu
Thẻ 3. Quy tắc
Thẻ 4. Công thức
```

Mỗi thẻ nên có:

```ts
{
  title: string;
  content: string;
  formulas?: string[];
  note?: string;
}
```

### 3.4. Cách nhớ / mẹo làm bài

Phần này là lợi thế riêng của giáo viên, không chép SGK.

Ví dụ:

```txt
Muốn kiểm tra a có thuộc A không, hãy đọc A trước, sau đó so sánh a với điều kiện của A.
```

### 3.5. Ví dụ mẫu

Mỗi bài nên có ít nhất 2–4 ví dụ:

| Loại ví dụ | Mục đích |
|---|---|
| Ví dụ 1 | Nhận biết kiến thức mới |
| Ví dụ 2 | Làm dạng cơ bản |
| Ví dụ 3 | Dễ sai / có bẫy |
| Ví dụ 4 | Vận dụng nếu bài phù hợp |

Mỗi ví dụ cần lời giải từng bước:

```ts
{
  problem: string;
  steps: string[];
  answer: string;
  commonMistake?: string;
}
```

### 3.6. Luyện tập trắc nghiệm

Phần luyện tập chia theo mức:

```txt
Cơ bản → Thông hiểu → Vận dụng → Vận dụng cao
```

Nhưng trong web nên cho học sinh chọn nhanh:

```txt
[10 câu cơ bản] [10 câu thông hiểu] [10 câu vận dụng] [Ôn sai] [Làm ngẫu nhiên]
```

### 3.7. Lời giải hiện ngay

Sau khi học sinh chọn đáp án, hiển thị:

```txt
✅ Đúng / ❌ Chưa đúng
Đáp án đúng: B
Lời giải:
Bước 1. ...
Bước 2. ...
Kết luận. ...
Vì sao đáp án A sai: ...
Vì sao đáp án C sai: ...
Vì sao đáp án D sai: ...
```

---

## 4. Cấu trúc dữ liệu bài học đề xuất

```ts
export interface LessonContent {
  lessonId: string;
  title: string;
  grade: 6 | 7 | 8 | 9;
  track: 'toan-so' | 'toan-hinh';
  strand: string;
  chapterId: string;
  source: {
    textbook: 'Toán Kết nối tri thức';
    grade: 6 | 7 | 8 | 9;
    volume: 1 | 2;
    lessonNo?: number;
    verifiedBy: 'online_toc' | 'teacher_textbook' | 'teacher_material';
    status: 'draft' | 'teacher_reviewed' | 'ready';
  };
  objectives: string[];
  prerequisites: string[];
  theory: TheoryBlock[];
  remember: string[];
  tips: string[];
  commonMistakes: CommonMistake[];
  workedExamples: WorkedExample[];
  skillGroups: SkillGroup[];
  practiceConfig: PracticeConfig;
}

export interface TheoryBlock {
  id: string;
  title: string;
  content: string;
  formulas?: string[];
  note?: string;
}

export interface CommonMistake {
  mistake: string;
  correction: string;
}

export interface WorkedExample {
  id: string;
  title: string;
  difficulty: 'basic' | 'understanding' | 'application' | 'advanced';
  problem: string;
  steps: string[];
  answer: string;
}

export interface SkillGroup {
  id: string;
  title: string;
  description: string;
  difficulty: 'basic' | 'understanding' | 'application' | 'advanced';
  templateIds: string[];
}

export interface PracticeConfig {
  defaultQuestionCount: number;
  allowRandom: boolean;
  allowDifficultyFilter: boolean;
  templateIds: string[];
}
```

---

## 5. Cấu trúc template sinh bài tập

Mỗi template không nên chỉ là câu hỏi tĩnh. Nó phải là một “máy sinh câu hỏi”.

### 5.1. Schema chuẩn

```ts
export interface GeneratedQuestion {
  id: string;
  templateId: string;
  seed: number;
  difficulty: 'basic' | 'understanding' | 'application' | 'advanced';
  stem: string;
  choices: Choice[];
  correctChoiceId: string;
  solution: Solution;
  metadata: {
    lessonId: string;
    skillGroupId: string;
    tags: string[];
  };
}

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D';
  content: string;
}

export interface Solution {
  summary: string;
  steps: string[];
  wrongChoiceExplanations?: Record<string, string>;
}
```

### 5.2. Quy tắc bắt buộc để đảm bảo chính xác

Mỗi generator phải có:

```txt
1. Ràng buộc dữ liệu đầu vào.
2. Hàm tính đáp án đúng độc lập.
3. Hàm tạo đáp án nhiễu.
4. Hàm kiểm tra không có 2 đáp án giống nhau.
5. Hàm kiểm tra chỉ có duy nhất 1 đáp án đúng.
6. Unit test chạy nhiều seed.
```

Ví dụ test:

```txt
Với mỗi template, sinh 1000 câu bằng seed khác nhau.
Kiểm tra:
- Có đúng 4 đáp án.
- Đáp án đúng xuất hiện đúng 1 lần.
- Không có đáp án trùng.
- Lời giải không rỗng.
- Dữ liệu sinh ra phù hợp cấp lớp.
```

---

## 6. Quy trình biên soạn nội dung từng bài

### Bước 1 — Khóa mục lục bài học

Dùng file curriculum hiện có làm khung:

```txt
Lớp → Tập → Chương → Bài → Toán số / Toán hình
```

Không thêm bài mới vào phần SGK chính.

### Bước 2 — Đọc bài SGK và rút ra “đầu ra học sinh phải làm được”

Với mỗi bài, giáo viên hoặc người biên soạn ghi:

```txt
Bài này học sinh phải làm được những dạng nào?
Bài này hay sai ở đâu?
Bài này cần thuộc công thức/quy tắc nào?
Bài này cần ví dụ mẫu nào?
```

### Bước 3 — Chia bài thành skillGroups

Mỗi `skillGroup` nên tương ứng một dạng toán nhỏ.

Ví dụ Bài 8 lớp 6 — Quan hệ chia hết và tính chất:

```txt
- Nhận biết a chia hết cho b
- Tìm ước / bội đơn giản
- Dùng tính chất chia hết của tổng
- Dùng tính chất chia hết của hiệu
- Kiểm tra phát biểu đúng/sai về chia hết
```

### Bước 4 — Viết lý thuyết tóm tắt

Chỉ viết những gì phục vụ làm bài.

Không viết dài theo sách. Mẫu tốt:

```txt
Khái niệm: ...
Kí hiệu: ...
Cách làm nhanh: ...
Lỗi hay gặp: ...
```

### Bước 5 — Viết ví dụ mẫu

Mỗi dạng toán nên có ít nhất 1 ví dụ mẫu.

Một ví dụ tốt phải có:

```txt
Đề bài → Phân tích → Các bước giải → Kết luận → Lỗi sai cần tránh
```

### Bước 6 — Thiết kế template bài tập

Mỗi dạng toán nên có 2–5 template:

```txt
Template dễ: nhận biết trực tiếp
Template trung bình: thay số, biến đổi nhỏ
Template vận dụng: có ngữ cảnh hoặc cần 2 bước
Template bẫy: kiểm tra lỗi sai thường gặp
```

### Bước 7 — Duyệt sư phạm

Mỗi bài chỉ chuyển `ready` khi giáo viên xác nhận:

```txt
- Đúng bài SGK.
- Không thiếu ý chính.
- Không có bài tập vượt quá chương trình.
- Đáp án/lời giải đúng.
- Ngôn ngữ phù hợp học sinh.
```

---

## 7. Mức độ bài tập

### 7.1. Cơ bản

Đặc điểm:

```txt
- Áp dụng trực tiếp định nghĩa/công thức.
- Ít biến đổi.
- Số đẹp.
- Không bẫy.
```

Ví dụ:

```txt
Cho A = {1; 2; 3; 4}. Khẳng định nào đúng?
```

### 7.2. Thông hiểu

Đặc điểm:

```txt
- Cần hiểu ý nghĩa, không chỉ thay công thức.
- Có thể đổi cách biểu diễn.
- Có một bước suy luận.
```

Ví dụ:

```txt
Tập hợp các số tự nhiên nhỏ hơn 5 được viết là gì?
```

### 7.3. Vận dụng

Đặc điểm:

```txt
- Cần 2–3 bước.
- Có thể gắn với tình huống thực tế.
- Có thể kết hợp hai kiến thức trong cùng bài/chương.
```

### 7.4. Vận dụng cao

Đặc điểm:

```txt
- Có bẫy tư duy.
- Cần chọn cách giải hợp lý.
- Chỉ dùng cho bài/chủ đề phù hợp, không ép mọi bài đều có.
```

---

## 8. Quy tắc viết lời giải chi tiết

Lời giải nên thân thiện với học sinh yếu.

Mẫu chuẩn:

```txt
Bước 1. Nhắc lại kiến thức dùng trong bài.
Bước 2. Thay dữ kiện vào.
Bước 3. Tính toán / suy luận.
Bước 4. Kết luận đáp án.
```

Tránh:

```txt
- “Dễ thấy...”
- “Hiển nhiên...”
- Bỏ qua bước biến đổi quan trọng.
- Chỉ ghi đáp án mà không giải thích.
```

Nên có:

```txt
- Vì sao chọn đáp án đúng.
- Vì sao các đáp án sai dễ bị chọn.
- Lỗi thường gặp.
```

---

## 9. Ưu tiên triển khai nội dung

Không nên nhập 6–9 đồng loạt. Nên triển khai theo cụm có giá trị dạy kèm cao.

### Giai đoạn 1 — Lớp 6 Toán số nền tảng

Ưu tiên:

```txt
1. Tập hợp các số tự nhiên
2. Tính chia hết
3. Số nguyên
4. Phân số
5. Số thập phân
```

Lý do:

- Học sinh yếu thường hổng các phần này.
- Đây là nền cho lớp 7–9.
- Dễ tạo generator chính xác.

### Giai đoạn 2 — Lớp 7 Toán số và Đại số đầu cấp

Ưu tiên:

```txt
1. Số hữu tỉ
2. Số thực
3. Tỉ lệ thức và đại lượng tỉ lệ
4. Biểu thức đại số và đa thức một biến
```

### Giai đoạn 3 — Lớp 8 Đại số trọng tâm

Ưu tiên:

```txt
1. Đơn thức, đa thức
2. Hằng đẳng thức đáng nhớ
3. Phân tích đa thức thành nhân tử
4. Phân thức đại số
5. Phương trình bậc nhất một ẩn
```

### Giai đoạn 4 — Lớp 9 phần thi vào 10

Ưu tiên:

```txt
1. Hệ phương trình bậc nhất hai ẩn
2. Phương trình và bất phương trình bậc nhất một ẩn
3. Căn bậc hai, căn bậc ba
4. Hàm số y = ax²
5. Phương trình bậc hai một ẩn
6. Hệ thức lượng trong tam giác vuông
7. Đường tròn
```

### Giai đoạn 5 — Toán hình song song

Nên làm hình học sau khi đã có engine vẽ/hiển thị hình cơ bản.

Ưu tiên:

```txt
Lớp 6: Hình phẳng, chu vi, diện tích, đối xứng
Lớp 7: Góc, song song, tam giác bằng nhau
Lớp 8: Tứ giác, Thalès, tam giác đồng dạng
Lớp 9: Đường tròn, hệ thức lượng, tỉ số lượng giác, hình khối
```

---

## 10. Checklist cho mỗi bài trước khi đưa lên web

```txt
[ ] lessonId đúng với curriculum seed
[ ] Tên bài đúng SGK
[ ] Track đúng: toan-so / toan-hinh
[ ] Có 3–5 mục tiêu
[ ] Có kiến thức cần nhớ
[ ] Có ít nhất 2 ví dụ mẫu
[ ] Có ít nhất 3 dạng toán nhỏ
[ ] Mỗi dạng có ít nhất 1 template bài tập
[ ] Có bài tập mức cơ bản
[ ] Có bài tập mức thông hiểu
[ ] Có bài tập mức vận dụng nếu phù hợp
[ ] Lời giải có từng bước
[ ] Đáp án nhiễu không trùng đáp án đúng
[ ] Generator đã test nhiều seed
[ ] Giáo viên đã duyệt nội dung
```

---

## 11. Quy ước đặt mã

### 11.1. Skill group ID

```txt
{lessonId}-skill-{so-thu-tu}
```

Ví dụ:

```txt
g6-v1-c1-l1-skill-1
```

### 11.2. Template ID

```txt
{lessonId}-tpl-{ten-ngan}
```

Ví dụ:

```txt
g6-v1-c1-l1-tpl-thuoc-khong-thuoc
g6-v1-c1-l1-tpl-liet-ke-phan-tu
```

### 11.3. Question ID sinh động

```txt
{templateId}-{seed}
```

Ví dụ:

```txt
g6-v1-c1-l1-tpl-thuoc-khong-thuoc-102938
```

---

## 12. Kết luận triển khai

Thứ tự làm tốt nhất:

```txt
1. Giữ curriculum seed làm khung mục lục.
2. Chọn 1 chương làm mẫu hoàn chỉnh.
3. Với mỗi bài, tách thành dạng toán nhỏ.
4. Viết lý thuyết ngắn, dễ nhớ.
5. Viết ví dụ mẫu theo từng dạng.
6. Tạo generator cho từng dạng.
7. Test generator bằng nhiều seed.
8. Giáo viên duyệt.
9. Nhân rộng sang các chương tiếp theo.
```

Chương nên làm mẫu đầu tiên:

```txt
Lớp 6 — Chương 1. Tập hợp các số tự nhiên
```

Vì chương này có nền tảng tốt, bài tập dễ sinh ngẫu nhiên, dễ kiểm tra tính đúng sai, phù hợp để hoàn thiện chuẩn dữ liệu trước khi nhân rộng.
