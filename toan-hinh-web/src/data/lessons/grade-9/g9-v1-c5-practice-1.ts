import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5Practice1Content: LessonContent = {
  lessonId: 'g9-v1-c5-practice-1',
  title: 'Luyện tập chung – Đường tròn: Dây cung và khoảng cách',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập về dây cung, khoảng cách từ tâm đến dây, so sánh dây cung.'
  },
  objectives: [
    'Tính được độ dài dây cung khi biết bán kính và khoảng cách từ tâm đến dây.',
    'Tính khoảng cách từ tâm đến dây khi biết bán kính và độ dài dây.',
    'So sánh các dây cung dựa trên khoảng cách đến tâm.'
  ],
  prerequisites: [
    'Định nghĩa đường tròn, bán kính, dây cung.',
    'Định lý Pythagore.',
    'Tính chất đường kính vuông góc với dây cung.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-practice-1-theory-1',
      title: 'Quan hệ giữa dây cung và khoảng cách đến tâm',
      content: 'Cho đường tròn $(O; R)$ và dây cung $AB$ với $OH \\perp AB$ ($H$ là hình chiếu của $O$ lên $AB$):\n$$AH = HB = \\frac{AB}{2}; \\quad OH^2 + AH^2 = R^2$$\n\nHệ quả:\n- **Dây gần tâm hơn thì dài hơn** (trong cùng một đường tròn).\n- **Hai dây bằng nhau thì cách tâm bằng nhau** và ngược lại.\n- **Dây dài nhất là đường kính** (khi khoảng cách $= 0$).',
      diagram: {
        id: 'g9-v1-c5-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Dây cung và khoảng cách đến tâm',
        alt: 'Đường tròn O với dây AB và hình chiếu H của O lên AB.',
        notToScale: true,
        data: { type: 'chord-distance' }
      }
    }
  ],
  remember: [
    'Công thức: $d = \\sqrt{R^2 - \\left(\\frac{AB}{2}\\right)^2}$ và $AB = 2\\sqrt{R^2 - d^2}$.',
    'Đường kính là dây dài nhất, luôn đi qua tâm.'
  ],
  tips: [
    'Khi tính dây cung, luôn dùng nửa dây (từ hình chiếu đến đầu dây) để áp dụng Pythagore.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-practice-1-mistake-1',
      mistake: 'Dùng cả dây $AB$ thay vì nửa dây $AH$ trong công thức Pythagore.',
      correction: 'Vì $OH \\perp AB$ nên $H$ là trung điểm $AB$. Phải dùng $AH = AB/2$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-practice-1-example-1',
      title: 'Tính dây cung khi biết R và d',
      difficulty: 'understanding',
      problem: 'Đường tròn bán kính $R = 10$ cm, dây $AB$ cách tâm $d = 6$ cm. Tính $AB$.',
      steps: [
        'Gọi $H$ là hình chiếu của $O$ lên $AB$. $OH = d = 6$ cm.',
        '$AH = \\sqrt{R^2 - d^2} = \\sqrt{100 - 36} = \\sqrt{64} = 8$ cm.',
        '$AB = 2 \\times AH = 16$ cm.'
      ],
      answer: '$AB = 16$ cm'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-practice-1-sg-01',
      title: 'Tính dây cung và khoảng cách',
      description: 'Vận dụng Pythagore để tính dây cung hoặc khoảng cách từ tâm đến dây.',
      difficulty: 'understanding',
      templateIds: ['g9-c5-practice-1-tpl-01', 'g9-c5-practice-1-tpl-02', 'g9-c5-practice-1-tpl-04']
    },
    {
      id: 'g9-v1-c5-practice-1-sg-02',
      title: 'Tính chất và nhận biết',
      description: 'Nhận biết và vận dụng tính chất so sánh dây cung.',
      difficulty: 'basic',
      templateIds: ['g9-c5-practice-1-tpl-03', 'g9-c5-practice-1-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c5-practice-1-tpl-01',
      'g9-c5-practice-1-tpl-02',
      'g9-c5-practice-1-tpl-03',
      'g9-c5-practice-1-tpl-04',
      'g9-c5-practice-1-tpl-05'
    ]
  }
};
