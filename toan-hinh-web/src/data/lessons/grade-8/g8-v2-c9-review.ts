import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9ReviewContent: LessonContent = {
  lessonId: 'g8-v2-c9-review',
  title: 'Bài tập cuối chương 9',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Ôn tập tổng hợp chương 9: Tam giác đồng dạng, chu vi, diện tích và ứng dụng.'
  },
  objectives: [
    'Tổng hợp kiến thức toàn chương về tam giác đồng dạng.',
    'Giải các bài toán tổng hợp kết hợp nhiều tính chất.',
    'Vận dụng vào bài toán thực tiễn.'
  ],
  prerequisites: [
    'Ba trường hợp đồng dạng của tam giác.',
    'Tỉ số chu vi và diện tích của hai tam giác đồng dạng.'
  ],
  theory: [
    {
      id: 'g8-v2-c9-review-theory-1',
      title: 'Tổng hợp chương 9 – Tam giác đồng dạng',
      content: '**Tóm tắt**:\n- $\\triangle ABC \\sim \\triangle A\'B\'C\'$ theo tỉ số $k$ thì:\n  - Các cạnh: $\\frac{A\'B\'}{AB} = \\frac{B\'C\'}{BC} = \\frac{A\'C\'}{AC} = k$.\n  - Chu vi: $\\frac{P\'}{P} = k$.\n  - Diện tích: $\\frac{S\'}{S} = k^2$.\n- Ba trường hợp: (g.g), (c.g.c), (c.c.c).\n- Trong $\\triangle ABC$ vuông tại $C$, đường cao $CH$: $$AH \\cdot AB = AC^2, \\quad BH \\cdot BA = BC^2, \\quad CH^2 = AH \\cdot BH.$$',
      diagram: {
        id: 'g8-v2-c9-review-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Tổng hợp tam giác đồng dạng',
        alt: 'Minh họa tổng hợp tính chất tam giác đồng dạng.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Tỉ số diện tích = bình phương tỉ số đồng dạng.',
    'Trong tam giác vuông: $AC^2 = AH \\cdot AB$ (hệ thức lượng).'
  ],
  tips: [
    'Với bài toán tổng hợp, hãy liệt kê tất cả các tỉ lệ trước, sau đó chọn tỉ lệ phù hợp để giải.',
    'Khi tính diện tích từ tỉ số, nhớ bình phương tỉ số đó.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-review-mistake-1',
      mistake: 'Dùng tỉ số đồng dạng $k$ để tính diện tích thay vì dùng $k^2$.',
      correction: 'Diện tích tỉ lệ với bình phương tỉ số đồng dạng: $\\frac{S\'}{S} = k^2$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-review-example-1',
      title: 'Tính diện tích tam giác đồng dạng',
      difficulty: 'understanding',
      problem: 'Hai tam giác đồng dạng theo tỉ số $k = 3$. Biết diện tích tam giác nhỏ là $12$ cm². Tính diện tích tam giác lớn.',
      steps: [
        'Tỉ số diện tích: $\\frac{S\'}{S} = k^2 = 3^2 = 9$.',
        '$S\' = 9 \\times 12 = 108$ cm².'
      ],
      answer: "S' = 108 cm²"
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-review-sg-01',
      title: 'Ôn tập tổng hợp tam giác đồng dạng',
      description: 'Các bài toán kết hợp nhiều tính chất của tam giác đồng dạng.',
      difficulty: 'understanding',
      templateIds: ['g8-c9-review-tpl-01', 'g8-c9-review-tpl-02', 'g8-c9-review-tpl-03', 'g8-c9-review-tpl-04', 'g8-c9-review-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c9-review-tpl-01', 'g8-c9-review-tpl-02', 'g8-c9-review-tpl-03', 'g8-c9-review-tpl-04', 'g8-c9-review-tpl-05']
  }
};
