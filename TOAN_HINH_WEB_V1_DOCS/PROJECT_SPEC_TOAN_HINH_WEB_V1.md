# PROJECT SPEC — Toán Hình Web V1

> Website nội bộ cho giáo viên dạy kèm Toán THCS, bám sát SGK Toán 6–9 bộ **Kết nối tri thức với cuộc sống**, chia rõ **Toán số** và **Toán hình**, mỗi bài gồm **lý thuyết → ví dụ mẫu → bài tập trắc nghiệm sinh ngẫu nhiên → lời giải chi tiết hiện ngay**.

---

## 1. Tầm nhìn sản phẩm

### 1.1. Mục tiêu chính

Xây dựng một website học và luyện Toán nội bộ, giúp học sinh:

- Học lại kiến thức theo đúng bài/chương của SGK Toán THCS Kết nối tri thức.
- Ôn lại nhiều lần cùng một dạng toán bằng bài tập sinh ngẫu nhiên.
- Chọn đáp án trắc nghiệm và nhận phản hồi ngay tại chỗ.
- Đọc lời giải chi tiết từng bước, hiểu vì sao đúng/sai.
- Luyện theo mức độ: cơ bản, thông hiểu, vận dụng, vận dụng cao.

### 1.2. Đối tượng sử dụng V1

- Giáo viên: quản lý nội dung bằng cách code trực tiếp vào dữ liệu web.
- Học sinh lớp 6–9: học bài, xem ví dụ, luyện trắc nghiệm.
- V1 chưa cần tài khoản học sinh, chưa cần lưu tiến độ.

### 1.3. Tư duy cốt lõi

> Không biến website thành kho chép SGK. Website là hệ thống **tóm tắt – phân dạng – luyện tập lặp lại – phản hồi tức thì** bám sát SGK.

---

## 2. Phạm vi V1

### 2.1. Có trong V1

- Trang chọn lớp: 6, 7, 8, 9.
- Mỗi lớp chia thành 2 nhóm chính:
  - **Toán số**: số học, đại số, hàm số, phương trình, thống kê – xác suất.
  - **Toán hình**: hình học trực quan, hình học phẳng, hình khối, đo lường.
- Mỗi nhóm hiển thị chương/bài tương ứng theo SGK.
- Mỗi bài học gồm:
  1. Lý thuyết tóm tắt.
  2. Lưu ý cần nhớ.
  3. Mẹo/cách nhớ nếu phù hợp.
  4. Ví dụ mẫu có lời giải từng bước.
  5. Bài tập trắc nghiệm sinh ngẫu nhiên.
  6. Hiển thị kết quả và lời giải ngay sau khi chọn đáp án.
- Hỗ trợ công thức Toán bằng LaTeX.
- Hỗ trợ hình minh họa bằng SVG hoặc hình tĩnh do code tạo ra.

### 2.2. Không có trong V1

- Đăng nhập học sinh.
- Lưu tiến độ, điểm số, lịch sử làm bài.
- Trang admin nhập liệu.
- Giao bài tập theo lớp học.
- Chấm tự luận.
- Chatbot giải bài tự do.

### 2.3. Chuẩn bị cho V2

Dù V1 không lưu tiến độ, cấu trúc dữ liệu vẫn cần sẵn sàng cho V2:

- Mỗi bài học có `lessonId` ổn định.
- Mỗi dạng bài có `templateId` ổn định.
- Mỗi lần sinh câu hỏi có `seed` để tái tạo lại đề.
- Kết quả làm bài có thể lưu sau này theo `studentId`, `lessonId`, `templateId`, `seed`, `selectedChoiceId`, `isCorrect`.

---

## 3. Nguyên tắc bản quyền và độ chính xác

### 3.1. Bám sát SGK nhưng không chép nguyên văn

Được phép:

- Bám theo lớp, tập, chương, bài trong SGK.
- Bám theo mạch kiến thức và dạng toán.
- Viết lại lý thuyết bằng ngôn ngữ cô đọng, dễ hiểu hơn.
- Tạo ví dụ mới tương tự dạng toán.
- Tạo bài tập luyện tập mới, sinh ngẫu nhiên theo khuôn dạng.

Không nên:

- Chép nguyên văn đoạn lý thuyết dài từ SGK.
- Chép nguyên bài tập SGK làm ngân hàng chính.
- Dùng hình ảnh scan từ SGK nếu chưa rõ quyền sử dụng.

### 3.2. Quy tắc chống bịa dữ liệu SGK

- Không tự thêm chương/bài mới vào mục lục SGK.
- Mọi chương/bài phải có trong dữ liệu chuẩn `curriculum-kntt-thcs.seed.json` hoặc được giáo viên xác nhận.
- Nếu giáo viên bổ sung chuyên đề dạy thêm, lưu riêng dưới `teacher_supplement`, không trộn vào SGK chính.
- Nội dung sáng tạo chỉ áp dụng cho cách giảng, ví dụ, mẹo nhớ, bài tập luyện tập.

---

## 4. Gợi ý công nghệ V1

### 4.1. Stack đề xuất

V1 nên ưu tiên đơn giản, dễ sửa, dễ chạy nội bộ:

- Front-end: **Next.js + TypeScript** hoặc **React + Vite + TypeScript**.
- Styling: Tailwind CSS hoặc CSS module đơn giản.
- Math render: KaTeX hoặc MathJax.
- Data: file `.ts` hoặc `.json` nội bộ.
- Không cần backend.
- Không cần database ở V1.

### 4.2. Lựa chọn khuyến nghị

Khuyến nghị dùng:

```txt
Next.js App Router + TypeScript + Tailwind + KaTeX
```

Lý do:

- Dễ chia route theo lớp/bài.
- Dễ deploy lên Vercel nếu cần.
- Dễ nâng cấp V2 sang Supabase/PostgreSQL.
- TypeScript giúp kiểm tra dữ liệu bài tập tốt hơn.

---

## 5. Kiến trúc thư mục đề xuất

```txt
toan-hinh-web/
├── README.md
├── package.json
├── next.config.ts
├── tsconfig.json
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   ├── lop/[grade]/page.tsx
│   │   ├── lop/[grade]/[track]/page.tsx
│   │   ├── hoc/[lessonId]/page.tsx
│   │   └── luyen-tap/[lessonId]/page.tsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppShell.tsx
│   │   │   └── Breadcrumbs.tsx
│   │   ├── curriculum/
│   │   │   ├── GradeSelector.tsx
│   │   │   ├── TrackTabs.tsx
│   │   │   ├── ChapterList.tsx
│   │   │   └── LessonCard.tsx
│   │   ├── lesson/
│   │   │   ├── TheoryBlock.tsx
│   │   │   ├── RememberBox.tsx
│   │   │   ├── TipBox.tsx
│   │   │   ├── WorkedExample.tsx
│   │   │   └── LessonNavigator.tsx
│   │   ├── practice/
│   │   │   ├── PracticePanel.tsx
│   │   │   ├── MultipleChoiceQuestion.tsx
│   │   │   ├── FeedbackBox.tsx
│   │   │   ├── SolutionSteps.tsx
│   │   │   └── DifficultyFilter.tsx
│   │   ├── math/
│   │   │   ├── MathInline.tsx
│   │   │   ├── MathBlock.tsx
│   │   │   └── SvgFigure.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       ├── Badge.tsx
│   │       └── Tabs.tsx
│   ├── data/
│   │   ├── curriculum/
│   │   │   ├── curriculum-kntt-thcs.ts
│   │   │   └── types.ts
│   │   ├── lessons/
│   │   │   ├── grade-6/
│   │   │   ├── grade-7/
│   │   │   ├── grade-8/
│   │   │   └── grade-9/
│   │   └── exercise-templates/
│   │       ├── grade-6/
│   │       ├── grade-7/
│   │       ├── grade-8/
│   │       └── grade-9/
│   ├── lib/
│   │   ├── curriculum.ts
│   │   ├── exercise-engine/
│   │   │   ├── types.ts
│   │   │   ├── random.ts
│   │   │   ├── validators.ts
│   │   │   └── generateQuestion.ts
│   │   ├── math/
│   │   │   ├── gcd.ts
│   │   │   ├── fraction.ts
│   │   │   ├── polynomial.ts
│   │   │   └── geometry.ts
│   │   └── slug.ts
│   └── tests/
│       ├── exercise-generators.test.ts
│       └── curriculum-integrity.test.ts
└── docs/
    ├── PROJECT_SPEC_TOAN_HINH_WEB_V1.md
    └── DATA_DESIGN_KNTT_THCS.md
```

---

## 6. Route chi tiết

### 6.1. Trang chủ

```txt
/
```

Nội dung:

- Tiêu đề: Toán Hình Web.
- Chọn lớp: 6, 7, 8, 9.
- Mô tả ngắn: học theo bài, luyện trắc nghiệm, xem lời giải ngay.

### 6.2. Trang lớp

```txt
/lop/6
/lop/7
/lop/8
/lop/9
```

Nội dung:

- Hai nút lớn:
  - Toán số.
  - Toán hình.
- Thống kê đơn giản: số chương, số bài.

### 6.3. Trang nhóm kiến thức

```txt
/lop/6/toan-so
/lop/6/toan-hinh
```

Nội dung:

- Danh sách chương thuộc nhóm đó.
- Mỗi chương hiển thị danh sách bài học.
- Bài học có trạng thái nội dung:
  - `ready`: đã có lý thuyết + ví dụ + bài tập.
  - `theory_ready`: có lý thuyết, chưa đủ bài tập.
  - `draft`: mới có metadata.

### 6.4. Trang bài học

```txt
/hoc/toan-6-tap-1-chuong-1-bai-1
```

Cấu trúc trang:

```txt
Breadcrumb
Tên bài
Mục tiêu bài học
Tab 1: Lý thuyết
Tab 2: Ví dụ mẫu
Tab 3: Luyện tập
Tab 4: Tổng kết lỗi sai
```

### 6.5. Trang luyện tập riêng

```txt
/luyen-tap/toan-6-tap-1-chuong-1-bai-1
```

Dùng khi muốn cho học sinh luyện nhiều câu liên tục.

---

## 7. Mô hình dữ liệu tổng quát

### 7.1. Curriculum

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

export interface CurriculumBook {
  program: 'KNTT';
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
  lessonNo?: number;
  title: string;
  type: 'official_lesson' | 'common_practice' | 'chapter_review' | 'experiential' | 'final_review';
  status: 'metadata_only' | 'draft' | 'ready';
}
```

### 7.2. Lesson content

```ts
export interface LessonContent {
  lessonId: string;
  objectives: string[];
  prerequisites: string[];
  theoryBlocks: TheoryBlock[];
  remember: string[];
  commonMistakes: CommonMistake[];
  tips: string[];
  workedExamples: WorkedExample[];
  exerciseTemplateIds: string[];
}

export interface TheoryBlock {
  title: string;
  body: string;
  formula?: string;
  note?: string;
}

export interface CommonMistake {
  mistake: string;
  whyWrong: string;
  correction: string;
}

export interface WorkedExample {
  id: string;
  title: string;
  problem: string;
  steps: string[];
  answer: string;
  relatedTemplateIds?: string[];
}
```

---

## 8. Thiết kế engine bài tập sinh ngẫu nhiên

### 8.1. Mục tiêu

Bài tập không chỉ là danh sách câu hỏi cố định. Mỗi dạng toán cần có template sinh câu hỏi mới nhiều lần nhưng vẫn:

- Đúng kiến thức.
- Có đúng một đáp án đúng.
- Có lời giải chi tiết tương ứng với dữ liệu đã sinh.
- Có độ khó kiểm soát được.
- Có seed để tái tạo khi cần debug.

### 8.2. Kiểu dữ liệu exercise

```ts
export type Difficulty = 'basic' | 'understanding' | 'application' | 'high_application';

export interface ExerciseTemplate {
  id: string;
  lessonId: string;
  title: string;
  difficulty: Difficulty;
  skillTags: string[];
  estimatedSeconds: number;
  generator: (seed: number) => ExerciseInstance;
  validate?: (instance: ExerciseInstance) => ValidationResult;
}

export interface ExerciseInstance {
  templateId: string;
  seed: number;
  prompt: string;
  choices: Choice[];
  correctChoiceId: string;
  solution: Solution;
  metadata?: Record<string, string | number | boolean>;
}

export interface Choice {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Solution {
  summary: string;
  steps: string[];
  finalAnswer: string;
  mistakeExplanations?: Record<'A' | 'B' | 'C' | 'D', string>;
}

export interface ValidationResult {
  ok: boolean;
  errors: string[];
}
```

### 8.3. Quy tắc bắt buộc khi sinh câu hỏi

Mỗi generator phải đảm bảo:

1. Không sinh mẫu số bằng 0.
2. Không sinh căn thức không xác định trong phạm vi bài học.
3. Không sinh đáp án trùng nhau.
4. Có đúng một đáp án đúng.
5. Lời giải dùng chính dữ liệu đã sinh, không hard-code sai.
6. Dạng bài không vượt quá kiến thức của bài học.
7. Dùng số nhỏ ở mức cơ bản, số phức tạp hơn ở vận dụng.
8. Có test tự động chạy nhiều seed liên tiếp.

### 8.4. Ví dụ generator đơn giản

```ts
export const addNaturalNumbersTemplate: ExerciseTemplate = {
  id: 'g6-c1-l4-add-natural-basic-001',
  lessonId: 'g6-v1-c1-l4',
  title: 'Cộng hai số tự nhiên',
  difficulty: 'basic',
  skillTags: ['phep-cong-so-tu-nhien'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const a = rng.int(10, 99);
    const b = rng.int(10, 99);
    const correct = a + b;
    const distractors = uniqueNumbers([
      correct + 10,
      correct - 10,
      a + b + rng.int(1, 5),
    ], correct);

    return buildMultipleChoice({
      templateId: 'g6-c1-l4-add-natural-basic-001',
      seed,
      prompt: `Tính: ${a} + ${b}`,
      correctText: `${correct}`,
      distractorTexts: distractors.map(String),
      solution: {
        summary: `Ta cộng ${a} với ${b}.`,
        steps: [
          `${a} + ${b} = ${correct}`,
          `Vậy đáp án đúng là ${correct}.`,
        ],
        finalAnswer: `${correct}`,
      },
    });
  },
};
```

---

## 9. Giao diện luyện tập

### 9.1. Trạng thái câu hỏi

```txt
idle → answered_correct / answered_wrong → next_question
```

### 9.2. Sau khi học sinh chọn đáp án

Hiển thị ngay:

- Đúng/Sai.
- Đáp án đúng.
- Lời giải chi tiết từng bước.
- Nếu có: giải thích vì sao đáp án học sinh chọn sai.
- Nút “Làm câu tương tự”.
- Nút “Đổi mức độ”.

### 9.3. Không cần điểm số trong V1

Có thể hiển thị tạm trong phiên hiện tại:

```txt
Đúng: 7 / 10 câu trong phiên này
```

Nhưng không lưu khi reload trang.

---

## 10. Thiết kế nội dung bài học

### 10.1. Template chuẩn cho mỗi bài

```md
# Tên bài

## Mục tiêu
- Học sinh nhận biết được ...
- Học sinh thực hiện được ...
- Học sinh tránh được lỗi ...

## Kiến thức cần nhớ
### Ý 1
Diễn giải ngắn, dễ hiểu.

### Ý 2
Diễn giải ngắn, dễ hiểu.

## Công thức / quy tắc
- Công thức 1
- Công thức 2

## Cách nhớ nhanh
- Mẹo 1
- Mẹo 2

## Ví dụ mẫu
### Ví dụ 1
Đề bài.

Lời giải:
1. Bước 1
2. Bước 2
3. Kết luận

## Lỗi sai thường gặp
- Lỗi 1: ...
- Vì sao sai: ...
- Cách sửa: ...

## Bài tập luyện tập
- Dạng 1
- Dạng 2
- Dạng 3
```

### 10.2. Mật độ nội dung đề xuất

Mỗi bài V1 nên ngắn, rõ, không quá dài:

- Lý thuyết: 3–7 khối kiến thức.
- Ví dụ mẫu: 2–5 ví dụ.
- Bài tập template: tối thiểu 6–10 template/bài.
- Mỗi template sinh vô hạn câu tương tự.

---

## 11. Phân mức độ bài tập

| Mức độ | Tên dùng trong code | Mô tả |
|---|---|---|
| Cơ bản | `basic` | Nhận biết, tính trực tiếp, 1–2 bước |
| Thông hiểu | `understanding` | Hiểu quy tắc, có biến đổi nhẹ |
| Vận dụng | `application` | Bài toán nhiều bước, có ngữ cảnh |
| Vận dụng cao | `high_application` | Cần chọn chiến lược, phối hợp nhiều kiến thức |

---

## 12. Hình minh họa

### 12.1. V1 ưu tiên SVG tự sinh

Không cần hình tương tác phức tạp. Với hình học, nên dùng SVG hoặc component React vẽ:

- Điểm, đoạn thẳng, góc.
- Tam giác, tứ giác, đường tròn.
- Hình hộp chữ nhật, lăng trụ, hình chóp đơn giản.

### 12.2. Ví dụ kiểu dữ liệu hình

```ts
export interface SvgFigureSpec {
  type: 'triangle' | 'quadrilateral' | 'circle' | 'line-angle' | 'solid';
  labels: Record<string, string>;
  measurements?: Record<string, string>;
  highlight?: string[];
}
```

### 12.3. Nguyên tắc hình học

- Hình minh họa không cần đúng tỉ lệ tuyệt đối, trừ bài yêu cầu đo/so sánh trực quan.
- Nếu bài toán có số liệu, số liệu trong hình phải khớp đề.
- Nếu hình “không vẽ theo tỉ lệ”, cần ghi rõ.

---

## 13. Kiểm thử chất lượng

### 13.1. Test curriculum

- Không trùng `lessonId`.
- Không trùng `chapterId`.
- Mọi `lessonId` trong template phải tồn tại.
- Mọi chương có `track` hợp lệ.
- Mọi bài SGK trong seed data phải có mặt.

### 13.2. Test bài tập sinh ngẫu nhiên

Với mỗi template:

```txt
for seed = 1..500:
  generate question
  validate:
    - có 4 đáp án
    - đáp án không trùng
    - correctChoiceId tồn tại
    - solution không rỗng
    - không có NaN/Infinity
```

### 13.3. Checklist thủ công cho giáo viên

Trước khi đưa bài lên dùng:

- Tên bài khớp SGK.
- Lý thuyết không sai bản chất.
- Ví dụ không vượt kiến thức bài.
- Mỗi dạng có ít nhất 5 câu thử.
- Lời giải đúng với đáp án.
- Đáp án sai đủ “nhiễu” nhưng không gây tranh cãi.

---

## 14. Quy trình nhập nội dung V1

### Bước 1: Tạo metadata bài học

Dựa vào `curriculum-kntt-thcs.seed.json`.

### Bước 2: Viết lý thuyết tóm tắt

Không chép nguyên SGK. Viết theo lối:

```txt
Cần nhớ → Cách làm → Lỗi hay sai → Mẹo kiểm tra
```

### Bước 3: Viết ví dụ mẫu

Mỗi dạng nên có ít nhất 1 ví dụ mẫu.

### Bước 4: Viết template sinh bài tập

Mỗi template chỉ nên kiểm tra một kỹ năng rõ ràng.

### Bước 5: Test generator

Chạy kiểm thử nhiều seed.

### Bước 6: Dùng thử với học sinh

Ghi lại dạng học sinh sai nhiều để bổ sung `commonMistakes`.

---

## 15. Quy ước ID

### 15.1. Lesson ID

```txt
g{grade}-v{volume}-c{chapterNo}-l{lessonNo}
```

Ví dụ:

```txt
g6-v1-c1-l1
g7-v2-c6-l20
g9-v1-c3-l7
```

### 15.2. Luyện tập chung / bài tập cuối chương

```txt
g6-v1-c1-practice-1
g6-v1-c1-review
```

### 15.3. Exercise template ID

```txt
g{grade}-c{chapterNo}-l{lessonNo}-{skill}-{difficulty}-{index}
```

Ví dụ:

```txt
g6-c1-l4-add-natural-basic-001
g7-c1-l2-rational-add-understanding-001
g8-c2-l9-factorization-application-001
```

---

## 16. V2 định hướng

Khi nâng cấp V2:

- Thêm đăng nhập học sinh.
- Lưu lịch sử làm bài.
- Lưu dạng toán học sinh sai nhiều.
- Gợi ý ôn lại theo lỗi sai.
- Giáo viên giao bài.
- Xuất báo cáo Excel/PDF.
- Admin nhập bài học/câu hỏi qua giao diện.
- Database: PostgreSQL/Supabase.

Cấu trúc dữ liệu V1 phải giữ ID ổn định để migration sang V2 không mất dữ liệu.

---

## 17. Chỉ dẫn cho Antigravity

Khi code dự án này, hãy ưu tiên theo thứ tự:

1. Tạo khung route và UI tối giản.
2. Import curriculum seed data.
3. Hiển thị lớp → Toán số/Toán hình → chương → bài.
4. Tạo trang bài học có tab lý thuyết/ví dụ/luyện tập.
5. Làm engine sinh trắc nghiệm seed-based.
6. Làm feedback đúng/sai + lời giải ngay.
7. Tạo test cho generator.
8. Chỉ sau đó mới làm đẹp giao diện.

Không tự thêm bài học ngoài mục lục SGK. Nếu cần chuyên đề bổ sung của giáo viên, tạo nhánh riêng `teacher_supplement`.
