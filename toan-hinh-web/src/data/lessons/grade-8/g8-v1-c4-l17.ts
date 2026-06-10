import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C4L17Content: LessonContent = {
  lessonId: 'g8-v1-c4-l17',
  title: 'Bài 17. Tính chất đường phân giác của tam giác',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 17,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tính chất đường phân giác của một góc trong tam giác.'
  },
  objectives: [
    'Phát biểu được định lí về tính chất đường phân giác của tam giác.',
    'Viết đúng tỉ lệ thức tương ứng giữa các đoạn thẳng được chia bởi tia phân giác và các cạnh kề.',
    'Vận dụng định lí để tính toán độ dài đoạn thẳng và giải quyết các bài toán liên quan.'
  ],
  prerequisites: [
    'Khái niệm phân giác của góc, tỉ số đoạn thẳng, định lí Thalès.'
  ],
  theory: [
    {
      id: 'g8-v1-c4-l17-theory-1',
      title: '1. Định lí đường phân giác của tam giác',
      content: 'Trong một tam giác, đường phân giác của một góc chia cạnh đối diện thành hai đoạn thẳng tỉ lệ với hai cạnh kề hai đoạn thẳng ấy.',
      diagram: {
        id: 'g8-v1-c4-l17-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c4-thales',
        title: 'Đường phân giác AD',
        alt: 'Tam giác ABC có AD là tia phân giác góc A, D thuộc BC.',
        notToScale: true,
        data: {
          type: 'bisector-ratio',
          labelA: 'A',
          labelB: 'B',
          labelC: 'C',
          labelD: 'D'
        }
      },
      formulas: [
        'AD \\text{ là phân giác góc A } \\Rightarrow \\frac{DB}{DC} = \\frac{AB}{AC}'
      ]
    }
  ],
  remember: [
    'Định lí vẫn đúng với đường phân giác của góc ngoài tam giác (khi đó điểm chia nằm trên đường thẳng kéo dài của cạnh đối diện).',
    'Để thuận tiện tính toán khi biết tổng độ dài của cạnh bị chia (ví dụ biết $BC = BD + CD$), ta thường áp dụng tính chất của dãy tỉ số bằng nhau.'
  ],
  tips: [
    'Công thức nhớ nhanh: $\\frac{\\text{Đoạn bên trái}}{\\text{Đoạn bên phải}} = \\frac{\\text{Cạnh bên trái}}{\\text{Cạnh bên phải}}$, nghĩa là: $\\frac{DB}{DC} = \\frac{AB}{AC}$.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c4-l17-mistake-1',
      mistake: 'Viết tỉ lệ thức ngược các cạnh kề.',
      correction: 'Hãy cẩn thận: góc đỉnh $A$ có các cạnh kề tương ứng là $AB$ và $AC$. Do đó, phần kề $B$ ($DB$) phải tương ứng với $AB$ trên tử số, phần kề $C$ ($DC$) tương ứng với $AC$ dưới mẫu số.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c4-l17-example-1',
      title: 'Tính độ dài đoạn thẳng trên cạnh đáy',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ có $AD$ là phân giác của góc $A$ ($D \\in BC$). Biết $AB = 6\\text{ cm}, AC = 9\\text{ cm}$ và $BC = 10\\text{ cm}$. Tính độ dài hai đoạn thẳng $DB$ và $DC$.',
      steps: [
        'Bước 1: Áp dụng định lí đường phân giác trong tam giác $ABC$: $\\frac{DB}{DC} = \\frac{AB}{AC}$.',
        'Bước 2: Thay số vào biểu thức: $\\frac{DB}{DC} = \\frac{6}{9} = \\frac{2}{3} \\Rightarrow 3DB = 2DC$.',
        'Bước 3: Ta có $DB + DC = BC = 10\\text{ cm}$. Áp dụng tính chất của dãy tỉ số bằng nhau:\n$$\\frac{DB}{2} = \\frac{DC}{3} = \\frac{DB + DC}{2 + 3} = \\frac{10}{5} = 2$$',
        'Bước 4: Tính $DB$ và $DC$:\n- $DB = 2 \\times 2 = 4\\text{ cm}$.\n- $DC = 3 \\times 2 = 6\\text{ cm}$.',
        'Bước 5: Kết luận: $DB = 4\\text{ cm}$ và $DC = 6\\text{ cm}$.'
      ],
      answer: 'DB = 4 cm, DC = 6 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c4-l17-sg-01',
      title: 'Tính độ dài đoạn thẳng được chia bởi phân giác',
      description: 'Áp dụng định lí tính chất đường phân giác để tính độ dài các đoạn thẳng.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c4-l17-tpl-01', 'g8-v1-c4-l17-tpl-02', 'g8-v1-c4-l17-tpl-03']
    },
    {
      id: 'g8-v1-c4-l17-sg-02',
      title: 'Ứng dụng tính chất dãy tỉ số bằng nhau',
      description: 'Kết hợp tính chất phân giác và dãy tỉ số bằng nhau khi biết tổng độ dài cạnh đối diện.',
      difficulty: 'understanding',
      templateIds: ['g8-v1-c4-l17-tpl-04', 'g8-v1-c4-l17-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c4-l17-tpl-01',
      'g8-v1-c4-l17-tpl-02',
      'g8-v1-c4-l17-tpl-03',
      'g8-v1-c4-l17-tpl-04',
      'g8-v1-c4-l17-tpl-05'
    ]
  }
};
