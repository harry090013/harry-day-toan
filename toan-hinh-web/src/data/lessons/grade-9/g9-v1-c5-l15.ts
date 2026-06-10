import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5L15Content: LessonContent = {
  lessonId: 'g9-v1-c5-l15',
  title: 'Bài 15. Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    lessonNo: 15,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Công thức tính độ dài cung, diện tích quạt tròn, diện tích hình vành khuyên.'
  },
  objectives: [
    'Tính được độ dài cung tròn dựa trên bán kính và số đo độ của cung.',
    'Tính được diện tích của hình quạt tròn.',
    'Tính được diện tích của hình vành khuyên giới hạn bởi hai đường tròn đồng tâm.'
  ],
  prerequisites: [
    'Chu vi và diện tích hình tròn, góc ở tâm, số đo cung.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-l15-theory-1',
      title: '1. Độ dài cung tròn',
      content: 'Độ dài cung tròn $n^\\circ$ của đường tròn bán kính $R$ được tính theo công thức:\n$$l = \\frac{\\pi R n}{180}$$',
      formulas: [
        'l = \\frac{\\pi R n}{180}',
        'C = 2\\pi R \\quad (\\text{chu vi đường tròn})'
      ]
    },
    {
      id: 'g9-v1-c5-l15-theory-2',
      title: '2. Diện tích hình quạt tròn và hình vành khuyên',
      content: '**Hình quạt tròn:**\nDiện tích hình quạt tròn bán kính $R$, cung $n^\\circ$ được tính bằng:\n$$S_q = \\frac{\\pi R^2 n}{360} = \\frac{l \\cdot R}{2}$$\n\n**Hình vành khuyên:**\nLà phần mặt phẳng giới hạn bởi hai đường tròn đồng tâm $(O; R)$ và $(O; r)$ với $R > r$. Diện tích hình vành khuyên là:\n$$S_{vk} = \\pi (R^2 - r^2)$$',
      diagram: {
        id: 'g9-v1-c5-l15-theory-2-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Hình vành khuyên',
        alt: 'Hình vành khuyên giới hạn bởi hai đường tròn đồng tâm.',
        notToScale: true,
        data: {
          type: 'two-circles',
          relation: 'separate'
        }
      }
    }
  ],
  remember: [
    'Số đo $n$ trong công thức tính độ dài cung và diện tích quạt tròn là số đo độ của cung, không viết ký hiệu góc hay đơn vị độ vào tính toán số.',
    'Số $\\pi \\approx 3,14$ hoặc giữ nguyên dưới dạng biểu thức $\\pi$ theo yêu cầu của đề bài.'
  ],
  tips: [
    'Nếu đề bài cho chiều dài cung $l$ và bán kính $R$, diện tích quạt tròn được tính cực nhanh bằng công thức $S_q = \\frac{l \\cdot R}{2}$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-l15-mistake-1',
      mistake: 'Nhầm lẫn mẫu số giữa công thức tính độ dài cung (mẫu là 180) và diện tích quạt (mẫu là 360).',
      correction: 'Độ dài cung $l$ có mẫu là $180$ vì chu vi đường tròn là $2\\pi R$, ứng với $360^\\circ$, nên $1^\\circ$ ứng với $\\frac{2\\pi R}{360} = \\frac{\\pi R}{180}$. Còn diện tích cả hình tròn là $\\pi R^2$, ứng với $360^\\circ$, nên $1^\\circ$ ứng với $\\frac{\\pi R^2}{360}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-l15-example-1',
      title: 'Tính diện tích hình quạt tròn',
      difficulty: 'basic',
      problem: 'Tính diện tích hình quạt tròn bán kính $R = 6\\text{ cm}$, số đo cung là $60^\\circ$ (lấy $\\pi \\approx 3,14$).',
      steps: [
        'Bước 1: Áp dụng công thức tính diện tích hình quạt tròn: $S_q = \\frac{\\pi R^2 n}{360}$.',
        'Bước 2: Thay số: $R = 6, n = 60$.',
        'Bước 3: Tính toán: $S_q = \\frac{\\pi \\times 6^2 \\times 60}{360} = \\frac{\\pi \\times 36 \\times 60}{360} = 6\\pi$.',
        'Bước 4: Thay số $\\pi \\approx 3,14$: $S_q \\approx 6 \\times 3,14 = 18,84\\text{ cm}^2$.'
      ],
      answer: '18.84 cm² (hoặc 6π cm²)'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-l15-sg-01',
      title: 'Độ dài cung tròn',
      description: 'Tính bán kính, số đo cung hoặc chiều dài cung khi biết hai trong ba đại lượng.',
      difficulty: 'basic',
      templateIds: ['g9-v1-c5-l15-tpl-01', 'g9-v1-c5-l15-tpl-02']
    },
    {
      id: 'g9-v1-c5-l15-sg-02',
      title: 'Diện tích hình quạt tròn và hình vành khuyên',
      description: 'Tính diện tích quạt tròn và diện tích phần giới hạn giữa hai đường tròn đồng tâm.',
      difficulty: 'understanding',
      templateIds: ['g9-v1-c5-l15-tpl-03', 'g9-v1-c5-l15-tpl-04', 'g9-v1-c5-l15-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v1-c5-l15-tpl-01',
      'g9-v1-c5-l15-tpl-02',
      'g9-v1-c5-l15-tpl-03',
      'g9-v1-c5-l15-tpl-04',
      'g9-v1-c5-l15-tpl-05'
    ]
  }
};
