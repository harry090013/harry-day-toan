import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4Practice3Content: LessonContent = {
  lessonId: 'g7-v1-c4-practice-3',
  title: 'Luyện tập chung trang 86',
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
    notes: 'Luyện tập về tam giác cân, tam giác đều và đường trung trực của đoạn thẳng.'
  },
  objectives: [
    'Vận dụng tính chất tam giác cân để tính toán góc ở đáy, góc ở đỉnh.',
    'Sử dụng định nghĩa và tính chất của đường trung trực để chứng minh hai đoạn thẳng bằng nhau.'
  ],
  prerequisites: [
    'Đã học tam giác cân và đường trung trực.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-practice-3-theory-1',
      title: 'Tam giác cân và đường trung trực',
      content: '– **Tam giác cân**: Tam giác có hai cạnh bên bằng nhau và hai góc ở đáy bằng nhau. Công thức góc đáy: $\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}$.\n– **Đường trung trực**: Đường thẳng vuông góc với đoạn thẳng tại trung điểm của nó. Điểm nằm trên đường trung trực thì cách đều hai đầu mút.',
      diagram: {
        id: 'g7-v1-c4-practice-3-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-isosceles-bisector',
        title: 'Tam giác cân ABC',
        alt: 'Tam giác ABC cân tại A có AB = AC.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Tam giác cân có một góc bằng $60^\\circ$ là tam giác đều.',
    'Điểm cách đều hai đầu mút của một đoạn thẳng thì nằm trên đường trung trực của đoạn thẳng đó.'
  ],
  tips: [
    'Khi làm bài toán tam giác cân, luôn ghi nhớ tổng ba góc trong tam giác là $180^\\circ$ để tìm góc chưa biết.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-practice-3-mistake-1',
      mistake: 'Nhầm lẫn công thức góc ở đáy và góc ở đỉnh tam giác cân.',
      correction: 'Góc ở đỉnh $\\widehat{A} = 180^\\circ - 2\\widehat{B}$. Góc ở đáy $\\widehat{B} = \\frac{180^\\circ - \\widehat{A}}{2}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-practice-3-example-1',
      title: 'Tính góc đáy tam giác cân',
      difficulty: 'understanding',
      problem: 'Cho $\\triangle ABC$ cân tại $A$ có góc ở đỉnh $\\widehat{A} = 80^\\circ$. Tính số đo góc đáy $\\widehat{B}$.',
      steps: [
        'Bước 1: Vì $\\triangle ABC$ cân tại $A$ nên hai góc ở đáy bằng nhau: $\\widehat{B} = \\widehat{C}$.',
        'Bước 2: Ta có: $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ \\Rightarrow 80^\\circ + 2\\widehat{B} = 180^\\circ$.',
        'Bước 3: Giải ra: $\\widehat{B} = \\frac{180^\\circ - 80^\\circ}{2} = 50^\\circ$.'
      ],
      answer: '50°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-practice-3-sg-01',
      title: 'Vận dụng tam giác cân và đường trung trực',
      description: 'Bài tập tính góc, tính cạnh và chứng minh.',
      difficulty: 'understanding',
      templateIds: ['g7-c4-practice-3-tpl-01', 'g7-c4-practice-3-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c4-practice-3-tpl-01', 'g7-c4-practice-3-tpl-02', 'g7-c4-practice-3-tpl-03', 'g7-c4-practice-3-tpl-04', 'g7-c4-practice-3-tpl-05']
  }
};
