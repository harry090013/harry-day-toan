import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C10Practice1Content: LessonContent = {
  lessonId: 'g9-v2-c10-practice-1',
  title: 'Luyện tập chung – Hình trụ và hình nón',
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
    notes: 'Luyện tập về diện tích và thể tích hình trụ, hình nón.'
  },
  objectives: [
    'Tính diện tích xung quanh và thể tích hình trụ.',
    'Tính diện tích xung quanh và thể tích hình nón.',
    'Vận dụng vào bài toán thực tế liên quan đến hình trụ và hình nón.'
  ],
  prerequisites: [
    'Công thức tính diện tích và thể tích hình trụ.',
    'Công thức tính diện tích và thể tích hình nón.',
    'Khái niệm đường sinh của hình nón.'
  ],
  theory: [
    {
      id: 'g9-v2-c10-practice-1-theory-1',
      title: 'Công thức hình trụ và hình nón',
      content: '**Hình trụ** (bán kính $r$, chiều cao $h$):\n- Diện tích xung quanh: $S_{xq} = 2\\pi rh$\n- Diện tích toàn phần: $S_{tp} = 2\\pi r(r+h)$\n- Thể tích: $V = \\pi r^2 h$\n\n**Hình nón** (bán kính $r$, chiều cao $h$, đường sinh $l = \\sqrt{r^2+h^2}$):\n- Diện tích xung quanh: $S_{xq} = \\pi r l$\n- Diện tích toàn phần: $S_{tp} = \\pi r(r+l)$\n- Thể tích: $V = \\frac{1}{3}\\pi r^2 h$',
      diagram: {
        id: 'g9-v2-c10-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình trụ và hình nón',
        alt: 'Hình trụ và hình nón với các kích thước r, h, l.',
        notToScale: true,
        data: { type: 'cylinder-cone' }
      }
    }
  ],
  remember: [
    'Hình trụ: $V = \\pi r^2 h$; $S_{xq} = 2\\pi rh$.',
    'Hình nón: $V = \\frac{1}{3}\\pi r^2 h$; $S_{xq} = \\pi r l$ (l là đường sinh).',
    'Thể tích hình nón = $\\frac{1}{3}$ thể tích hình trụ cùng đáy cùng chiều cao.'
  ],
  tips: [
    'Chú ý phân biệt chiều cao $h$ và đường sinh $l$ của hình nón: $l = \\sqrt{r^2 + h^2}$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c10-practice-1-mistake-1',
      mistake: 'Nhầm đường sinh và chiều cao của hình nón trong công thức.',
      correction: 'Diện tích xung quanh dùng đường sinh $l$; Thể tích dùng chiều cao $h$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c10-practice-1-example-1',
      title: 'Tính thể tích hình nón',
      difficulty: 'understanding',
      problem: 'Hình nón có bán kính đáy $r = 6$ cm, chiều cao $h = 8$ cm. Tính thể tích.',
      steps: [
        '$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\times 36 \\times 8 = 96\\pi$ cm³.'
      ],
      answer: '$96\\pi$ cm³'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c10-practice-1-sg-01',
      title: 'Tính diện tích và thể tích hình trụ',
      description: 'Áp dụng công thức tính diện tích xung quanh và thể tích hình trụ.',
      difficulty: 'basic',
      templateIds: ['g9-c10-practice-1-tpl-01', 'g9-c10-practice-1-tpl-02']
    },
    {
      id: 'g9-v2-c10-practice-1-sg-02',
      title: 'Tính diện tích và thể tích hình nón',
      description: 'Áp dụng công thức hình nón và bài toán thực tế.',
      difficulty: 'understanding',
      templateIds: ['g9-c10-practice-1-tpl-03', 'g9-c10-practice-1-tpl-04', 'g9-c10-practice-1-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c10-practice-1-tpl-01',
      'g9-c10-practice-1-tpl-02',
      'g9-c10-practice-1-tpl-03',
      'g9-c10-practice-1-tpl-04',
      'g9-c10-practice-1-tpl-05'
    ]
  }
};
