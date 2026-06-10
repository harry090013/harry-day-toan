import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8ReviewContent: LessonContent = {
  lessonId: 'g6-v2-c8-review',
  title: 'Bài tập cuối chương 8',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Bài tập ôn tập tổng hợp cuối chương 8.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức hình học phẳng cơ bản: Điểm, đường thẳng, tia, đoạn thẳng, trung điểm, góc và số đo góc.',
    'Rèn luyện kỹ năng vẽ hình từ mô tả lời văn và phân tích các mối quan hệ hình học.',
    'Giải quyết thành thạo các bài toán tính toán độ dài và số đo góc kết hợp.'
  ],
  prerequisites: [
    'Đã học toàn bộ các bài trong chương 8.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-review-theory-1',
      title: 'Tóm tắt toàn bộ chương 8',
      content: 'Chương 8 bao gồm:\n1. **Điểm và đường thẳng**: Quan hệ thuộc ($A \\in d$) và không thuộc ($B \\notin d$), ba điểm thẳng hàng.\n2. **Tia**: Hình gồm điểm gốc $O$ và một phần đường thẳng bị chia ra bởi $O$.\n3. **Đoạn thẳng**: Hình gồm hai điểm $A, B$ và tất cả các điểm nằm giữa $A, B$.\n4. **Trung điểm**: Điểm nằm giữa và cách đều hai đầu mút đoạn thẳng.\n5. **Góc**: Hình tạo bởi hai tia chung gốc. Có góc nhọn, góc vuông, góc tù, góc bẹt.',
      diagram: {
        id: 'g6-v2-c8-review-theory-1-diagram',
        placement: 'theory',
        variant: 'point-line-membership',
        title: 'Quan hệ điểm thuộc đường thẳng',
        alt: 'Đường thẳng d chứa điểm A và không chứa điểm B.',
        notToScale: true,
        data: {
          pointsOn: ['A'],
          pointsOff: ['B']
        }
      }
    }
  ],
  remember: [
    'Qua hai điểm phân biệt, chỉ vẽ được duy nhất một đường thẳng.',
    'Mỗi góc chỉ có một số đo xác định. Số đo của góc bẹt là $180^\\circ$.'
  ],
  tips: [
    'Khi đếm số góc tạo bởi $n$ tia chung gốc: Công thức tính nhanh số góc là: $\\frac{n(n-1)}{2}$.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-review-mistake-1',
      mistake: 'Nhầm lẫn giữa tia $Ox$ và tia $Oy$ khi $O$ nằm giữa $x$ và $y$.',
      correction: 'Chúng là hai tia đối nhau. Điểm gốc $O$ là chung nhưng hướng đi ngược nhau tạo thành hai tia phân biệt.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-review-example-1',
      title: 'Bài toán đếm số góc tạo bởi nhiều tia',
      difficulty: 'understanding',
      problem: 'Cho điểm $O$ nằm trên đường thẳng $xy$. Vẽ thêm hai tia $Om$ và $On$ sao cho không có tia nào trùng nhau. Hỏi có tất cả bao nhiêu góc đỉnh $O$ được tạo thành (không kể góc bẹt)?',
      steps: [
        'Bước 1: Trên mặt phẳng ta có các tia chung gốc $O$ là: $Ox, Oy, Om, On$. Tổng cộng có $n = 4$ tia.',
        'Bước 2: Áp dụng công thức tính số góc: $N = \\frac{4 \\times (4 - 1)}{2} = 6$ góc.',
        'Bước 3: Các góc được tạo thành là: $\\widehat{xOy}, \\widehat{xOm}, \\widehat{xOn}, \\widehat{yOm}, \\widehat{yOn}, \\widehat{mOn}$.',
        'Bước 4: Trong các góc này, góc $\\widehat{xOy}$ là góc bẹt vì $O$ nằm trên đường thẳng $xy$.',
        'Bước 5: Trừ góc bẹt $\\widehat{xOy}$, số góc còn lại là: $6 - 1 = 5$ góc.'
      ],
      answer: '5 góc'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-review-sg-01',
      title: 'Hệ thống hóa hình học cơ bản',
      description: 'Luyện tập các bài toán nâng cao tổng hợp của chương 8.',
      difficulty: 'understanding',
      templateIds: ['g6-c8-review-tpl-01', 'g6-c8-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g6-c8-review-tpl-01', 'g6-c8-review-tpl-02', 'g6-c8-review-tpl-03', 'g6-c8-review-tpl-04', 'g6-c8-review-tpl-05']
  }
};
