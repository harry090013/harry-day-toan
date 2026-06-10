import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9L31Content: LessonContent = {
  lessonId: 'g7-v2-c9-l31',
  title: 'Bài 31. Quan hệ giữa góc và cạnh đối diện trong một tam giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    lessonNo: 31,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Quan hệ giữa góc và cạnh đối diện trong tam giác.'
  },
  objectives: [
    'Phát biểu và hiểu định lí về góc đối diện với cạnh lớn hơn và cạnh đối diện với góc lớn hơn.',
    'So sánh được độ dài các cạnh của tam giác khi biết số đo các góc.',
    'So sánh được các góc của tam giác khi biết độ dài các cạnh.'
  ],
  prerequisites: [
    'Khái niệm tam giác, so sánh số đo góc và độ dài đoạn thẳng.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-l31-theory-1',
      title: '1. Góc đối diện với cạnh lớn hơn',
      content: 'Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn.',
      formulas: [
        'AC > AB \\Rightarrow \\widehat{B} > \\widehat{C}'
      ],
      diagram: {
        id: 'g7-v2-c9-l31-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c9-angle-side',
        title: 'Góc đối diện với cạnh lớn hơn',
        alt: 'Trong tam giác ABC, nếu AC > AB thì góc B đối diện AC lớn hơn góc C đối diện AB.',
        notToScale: true,
        data: {
          highlightAngle: 'B',
          highlightSide: 'AC'
        }
      }
    },
    {
      id: 'g7-v2-c9-l31-theory-2',
      title: '2. Cạnh đối diện với góc lớn hơn',
      content: 'Trong một tam giác, cạnh đối diện với góc lớn hơn là cạnh lớn hơn.',
      formulas: [
        '\\widehat{B} > \\widehat{C} \\Rightarrow AC > AB'
      ]
    }
  ],
  remember: [
    'Trong tam giác vuông, góc vuông là góc lớn nhất nên cạnh huyền (đối diện góc vuông) là cạnh lớn nhất.',
    'Trong tam giác tù, góc tù là góc lớn nhất nên cạnh đối diện góc tù là cạnh lớn nhất.'
  ],
  tips: [
    'Góc đối diện với cạnh $AB$ là góc $C$ (góc không chứa ký tự A và B).',
    'Cạnh đối diện với góc $A$ là cạnh $BC$ (cạnh không chứa ký tự A).'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-l31-mistake-1',
      mistake: 'So sánh cạnh kề thay vì cạnh đối diện.',
      correction: 'Góc $B$ đối diện với cạnh $AC$, góc $C$ đối diện với cạnh $AB$. Hãy vẽ mũi tên từ đỉnh góc sang cạnh đối diện để tránh nhầm lẫn.'
    },
    {
      id: 'g7-v2-c9-l31-mistake-2',
      mistake: 'Áp dụng so sánh cạnh và góc của hai tam giác khác nhau.',
      correction: 'Định lí này chỉ áp dụng trong phạm vi **MỘT tam giác**. Không được so sánh cạnh của tam giác này với góc của tam giác kia.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-l31-example-1',
      title: 'So sánh độ dài các cạnh của tam giác',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ có $\\widehat{A} = 80^\\circ$ và $\\widehat{B} = 60^\\circ$. Hãy so sánh ba cạnh $AB, BC, AC$.',
      steps: [
        'Bước 1: Tính góc thứ ba $\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (80^\\circ + 60^\\circ) = 40^\\circ$.',
        'Bước 2: So sánh số đo ba góc: $\\widehat{C} < \\widehat{B} < \\widehat{A}$ (vì $40^\\circ < 60^\\circ < 80^\\circ$).',
        'Bước 3: Xác định cạnh đối diện từng góc:\n– Đối diện với $\\widehat{C}$ là cạnh $AB$.\n– Đối diện với $\\widehat{B}$ là cạnh $AC$.\n– Đối diện với $\\widehat{A}$ là cạnh $BC$.',
        'Bước 4: Áp dụng định lí cạnh đối diện với góc lớn hơn là cạnh lớn hơn: $AB < AC < BC$.'
      ],
      answer: 'AB < AC < BC'
    },
    {
      id: 'g7-v2-c9-l31-example-2',
      title: 'So sánh các góc của tam giác',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ có $AB = 5\\text{ cm}$, $BC = 7\\text{ cm}$, và $AC = 6\\text{ cm}$. So sánh ba góc của tam giác.',
      steps: [
        'Bước 1: So sánh độ dài các cạnh: $AB < AC < BC$ (vì $5 < 6 < 7$).',
        'Bước 2: Xác định góc đối diện từng cạnh:\n– Đối diện với $AB$ là góc $\\widehat{C}$.\n– Đối diện với $AC$ là góc $\\widehat{B}$.\n– Đối diện với $BC$ là góc $\\widehat{A}$.',
        'Bước 3: Áp dụng định lí góc đối diện với cạnh lớn hơn là góc lớn hơn: $\\widehat{C} < \\widehat{B} < \\widehat{A}$.'
      ],
      answer: 'góc C < góc B < góc A'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-l31-sg-01',
      title: 'So sánh cạnh khi biết góc',
      description: 'Tìm cạnh lớn nhất hoặc so sánh các cạnh của tam giác khi biết số đo các góc.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c9-l31-tpl-01', 'g7-v2-c9-l31-tpl-03']
    },
    {
      id: 'g7-v2-c9-l31-sg-02',
      title: 'So sánh góc khi biết cạnh',
      description: 'Tìm góc lớn nhất hoặc so sánh các góc của tam giác khi biết độ dài các cạnh.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c9-l31-tpl-02', 'g7-v2-c9-l31-tpl-04', 'g7-v2-c9-l31-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v2-c9-l31-tpl-01',
      'g7-v2-c9-l31-tpl-02',
      'g7-v2-c9-l31-tpl-03',
      'g7-v2-c9-l31-tpl-04',
      'g7-v2-c9-l31-tpl-05'
    ]
  }
};
