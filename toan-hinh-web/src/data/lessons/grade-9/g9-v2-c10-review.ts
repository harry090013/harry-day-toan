import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C10ReviewContent: LessonContent = {
  lessonId: 'g9-v2-c10-review',
  title: 'Bài tập cuối chương 10 – Hình trụ, hình nón, hình cầu',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g9-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Ôn tập toàn bộ chương 10: hình trụ, hình nón, hình cầu – diện tích và thể tích.'
  },
  objectives: [
    'Hệ thống hóa công thức diện tích và thể tích của hình trụ, hình nón, hình cầu.',
    'Vận dụng tổng hợp vào bài tập đa dạng.',
    'Ứng dụng vào các bài toán thực tiễn.'
  ],
  prerequisites: ['Toàn bộ nội dung chương 10.'],
  theory: [
    {
      id: 'g9-v2-c10-review-theory-1',
      title: 'Bảng tổng kết chương 10',
      content: '| Hình | $S_{xq}$ | $S_{tp}$ | $V$ |\n|---|---|---|---|\n| Hình trụ ($r, h$) | $2\\pi rh$ | $2\\pi r(r+h)$ | $\\pi r^2 h$ |\n| Hình nón ($r, h, l$) | $\\pi rl$ | $\\pi r(r+l)$ | $\\frac{1}{3}\\pi r^2 h$ |\n| Hình cầu ($R$) | — | $4\\pi R^2$ | $\\frac{4}{3}\\pi R^3$ |',
      diagram: {
        id: 'g9-v2-c10-review-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Tổng kết hình trụ, nón, cầu',
        alt: 'Bảng so sánh hình trụ, hình nón và hình cầu.',
        notToScale: true,
        data: { type: 'solids-summary' }
      }
    }
  ],
  remember: [
    'Hình trụ: $V = \\pi r^2 h$.',
    'Hình nón: $V = \\frac{1}{3}\\pi r^2 h$ (bằng $\\frac{1}{3}$ hình trụ cùng đáy cùng cao).',
    'Hình cầu: $V = \\frac{4}{3}\\pi R^3$; $S = 4\\pi R^2$.'
  ],
  tips: [
    'Bài tổng hợp: đọc kỹ tên hình (trụ/nón/cầu), rồi chọn đúng công thức.',
    'Diện tích hình cầu $= 4 \\times$ diện tích hình tròn bán kính $R$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c10-review-mistake-1',
      mistake: 'Dùng công thức hình trụ ($V = \\pi r^2 h$) cho hình nón.',
      correction: 'Hình nón có $V = \\frac{1}{3}\\pi r^2 h$ (nhỏ hơn hình trụ $3$ lần).'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c10-review-example-1',
      title: 'Tính thể tích hình cầu',
      difficulty: 'understanding',
      problem: 'Hình cầu bán kính $R = 3$ cm. Tính thể tích và diện tích mặt cầu.',
      steps: [
        '$V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\times 27 = 36\\pi$ cm³.',
        '$S = 4\\pi R^2 = 4\\pi \\times 9 = 36\\pi$ cm².'
      ],
      answer: '$V = 36\\pi$ cm³; $S = 36\\pi$ cm²'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c10-review-sg-01',
      title: 'Ôn tập hình trụ và hình cầu',
      description: 'Tính diện tích và thể tích hình trụ, hình cầu.',
      difficulty: 'understanding',
      templateIds: ['g9-c10-review-tpl-01', 'g9-c10-review-tpl-02', 'g9-c10-review-tpl-03']
    },
    {
      id: 'g9-v2-c10-review-sg-02',
      title: 'Nhận biết công thức và bài tổng hợp',
      description: 'Phân biệt công thức và giải bài tổng hợp.',
      difficulty: 'application',
      templateIds: ['g9-c10-review-tpl-04', 'g9-c10-review-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c10-review-tpl-01',
      'g9-c10-review-tpl-02',
      'g9-c10-review-tpl-03',
      'g9-c10-review-tpl-04',
      'g9-c10-review-tpl-05'
    ]
  }
};
