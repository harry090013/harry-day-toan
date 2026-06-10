import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4ReviewContent: LessonContent = {
  lessonId: 'g7-v1-c4-review',
  title: 'Bài tập cuối chương 4',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng hợp ôn tập cuối chương 4 về tam giác bằng nhau.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ các trường hợp bằng nhau của tam giác thường và tam giác vuông.',
    'Vận dụng tổng hợp tính chất tam giác cân, đường trung trực để chứng minh hình học phức tạp.'
  ],
  prerequisites: [
    'Đã học toàn bộ các bài trong chương 4.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-review-theory-1',
      title: 'Hệ thống hóa Chương 4',
      content: 'Chương 4 ôn tập lại:\n1. **Tổng ba góc trong tam giác**: Luôn bằng $180^\\circ$.\n2. **Bằng nhau của hai tam giác**: c-c-c, c-g-c, g-c-g.\n3. **Tam giác vuông bằng nhau**: Hai cạnh góc vuông, Cạnh góc vuông - góc nhọn kề, Cạnh huyền - góc nhọn, Cạnh huyền - cạnh góc vuông.\n4. **Tam giác cân & đều**: Hai cạnh bằng nhau, hai góc kề đáy bằng nhau.\n5. **Đường trung trực**: Tập hợp các điểm cách đều hai đầu mút đoạn thẳng.',
      diagram: {
        id: 'g7-v1-c4-review-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-triangle-angles',
        title: 'Tổng ba góc trong tam giác',
        alt: 'Tam giác ABC minh họa định lí tổng ba góc.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Mỗi góc của tam giác đều bằng $60^\\circ$.',
    'Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng $90^\\circ$).'
  ],
  tips: [
    'Khi chứng minh một điểm nằm trên đường trung trực, hãy chỉ ra điểm đó cách đều hai đầu mút của đoạn thẳng.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-review-mistake-1',
      mistake: 'Kết luận góc nhọn của tam giác vuông bằng $60^\\circ$ mà không có cơ sở.',
      correction: 'Góc nhọn chỉ bằng $60^\\circ$ nếu tam giác vuông đó là nửa tam giác đều hoặc có giả thiết cho sẵn.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-review-example-1',
      title: 'Tính góc của tam giác vuông cân',
      difficulty: 'understanding',
      problem: 'Cho $\\triangle ABC$ vuông cân tại $A$. Tính số đo các góc nhọn $\\widehat{B}$ và $\\widehat{C}$.',
      steps: [
        'Bước 1: Vì tam giác vuông tại $A$ nên $\\widehat{B} + \\widehat{C} = 90^\\circ$.',
        'Bước 2: Vì tam giác cân tại $A$ nên $\\widehat{B} = \\widehat{C}$.',
        'Bước 3: Suy ra: $\\widehat{B} = \\widehat{C} = \\frac{90^\\circ}{2} = 45^\\circ$.'
      ],
      answer: '45°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-review-sg-01',
      title: 'Ôn tập tổng hợp tam giác',
      description: 'Luyện tập chứng minh hình học và tính toán góc/cạnh phức tạp.',
      difficulty: 'understanding',
      templateIds: ['g7-c4-review-tpl-01', 'g7-c4-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c4-review-tpl-01', 'g7-c4-review-tpl-02', 'g7-c4-review-tpl-03', 'g7-c4-review-tpl-04', 'g7-c4-review-tpl-05']
  }
};
