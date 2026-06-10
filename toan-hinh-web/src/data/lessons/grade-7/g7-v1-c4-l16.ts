import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4L16Content: LessonContent = {
  lessonId: 'g7-v1-c4-l16',
  title: 'Bài 16. Tam giác cân. Đường trung trực của đoạn thẳng',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 16,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt về tam giác cân, các góc ở đáy, góc ở đỉnh và đường trung trực.'
  },
  objectives: [
    'Định nghĩa được tam giác cân và chỉ ra các cạnh bên, cạnh đáy, góc ở đáy, góc ở đỉnh.',
    'Nhận biết và vẽ được đường trung trực của đoạn thẳng.',
    'Sử dụng tính chất điểm thuộc đường trung trực cách đều hai mút của đoạn thẳng để giải toán.'
  ],
  prerequisites: [
    'Khái niệm tam giác, hai tam giác bằng nhau.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-l16-theory-1',
      title: '1. Tam giác cân',
      content: '– **Định nghĩa**: Tam giác cân là tam giác có hai cạnh bằng nhau.\n– **Tính chất**: Trong một tam giác cân, hai góc ở đáy bằng nhau. Ngược lại, nếu một tam giác có hai góc bằng nhau thì tam giác đó là tam giác cân.',
      formulas: [
        'AB = AC \\Rightarrow \\triangle ABC \\text{ cân tại } A \\Rightarrow \\widehat{B} = \\widehat{C}',
        '\\widehat{B} = \\widehat{C} \\Rightarrow \\triangle ABC \\text{ cân tại } A \\Rightarrow AB = AC',
        '\\widehat{B} = \\widehat{C} = \\frac{180^\\circ - \\widehat{A}}{2}'
      ],
      diagram: {
        id: 'g7-v1-c4-l16-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-isosceles-bisector',
        title: 'Tam giác cân ABC tại A',
        alt: 'Tam giác ABC cân tại A có hai cạnh bên AB = AC và hai góc đáy B = C.',
        notToScale: true,
        data: {
          type: 'isosceles',
          labels: ['A', 'B', 'C']
        }
      }
    },
    {
      id: 'g7-v1-c4-l16-theory-2',
      title: '2. Đường trung trực của một đoạn thẳng',
      content: '– **Định nghĩa**: Đường thẳng vuông góc với một đoạn thẳng tại trung điểm của nó được gọi là đường trung trực của đoạn thẳng đó.\n– **Tính chất**: Một điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.',
      formulas: [
        'd \\perp AB \\text{ tại } M, \\ MA = MB \\Rightarrow d \\text{ là đường trung trực của } AB',
        'd \\text{ là trung trực của } AB, \\ N \\in d \\Rightarrow NA = NB'
      ],
      diagram: {
        id: 'g7-v1-c4-l16-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-isosceles-bisector',
        title: 'Đường trung trực d của đoạn thẳng AB',
        alt: 'Đường thẳng d vuông góc với đoạn AB tại trung điểm M.',
        notToScale: true,
        data: {
          type: 'bisector',
          labels: ['A', 'B', '', 'd', 'M']
        }
      }
    }
  ],
  remember: [
    'Góc ở đỉnh của tam giác cân có thể là góc nhọn, vuông hoặc tù, nhưng góc ở đáy luôn luôn là góc nhọn (số đo bé hơn $90^\\circ$).',
    'Đường trung trực của một đoạn thẳng bắt buộc phải thỏa mãn đồng thời hai yếu tố: ĐI QUA TRUNG ĐIỂM và VUÔNG GÓC.'
  ],
  tips: [
    'Để tính nhanh góc ở đáy của tam giác cân, ta lấy $180^\\circ$ trừ đi góc ở đỉnh rồi chia đôi.',
    'Để tính góc ở đỉnh của tam giác cân, ta lấy $180^\\circ$ trừ đi hai lần góc ở đáy.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-l16-mistake-1',
      mistake: 'Nhầm lẫn công thức tính góc đáy và góc đỉnh.',
      correction: 'Góc ở đáy: $\\widehat{B} = (180^\\circ - \\widehat{A}) / 2$. Góc ở đỉnh: $\\widehat{A} = 180^\\circ - 2\\widehat{B}$. Đừng nhầm lẫn giữa hai công thức này.'
    },
    {
      id: 'g7-v1-c4-l16-mistake-2',
      mistake: 'Coi mọi đường thẳng vuông góc với đoạn thẳng là đường trung trực.',
      correction: 'Nếu chỉ vuông góc mà không đi qua trung điểm thì không phải là đường trung trực.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-l16-example-1',
      title: 'Tính góc đáy trong tam giác cân',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ cân tại $A$. Biết góc ở đỉnh $\\widehat{A} = 50^\\circ$. Tính số đo góc ở đáy $\\widehat{B}$.',
      steps: [
        'Bước 1: Vì $\\triangle ABC$ cân tại $A$ nên hai góc ở đáy bằng nhau: $\\widehat{B} = \\widehat{C}$.',
        'Bước 2: Áp dụng tổng ba góc trong tam giác: $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.',
        'Bước 3: Thay $\\widehat{C} = \\widehat{B}$ và $\\widehat{A} = 50^\\circ$ vào đẳng thức: $50^\\circ + 2\\widehat{B} = 180^\\circ$.',
        'Bước 4: Tính toán: $2\\widehat{B} = 180^\\circ - 50^\\circ = 130^\\circ \\Rightarrow \\widehat{B} = 130^\\circ / 2 = 65^\\circ$.'
      ],
      answer: '65°'
    },
    {
      id: 'g7-v1-c4-l16-example-2',
      title: 'Áp dụng tính chất đường trung trực',
      difficulty: 'understanding',
      problem: 'Cho đoạn thẳng $AB$. Đường trung trực $d$ của đoạn thẳng $AB$ cắt $AB$ tại $M$. Lấy điểm $N$ trên đường thẳng $d$ sao cho $N$ khác $M$. Biết khoảng cách $AN = 8\\text{ cm}$. Tính độ dài đoạn thẳng $BN$.',
      steps: [
        'Bước 1: Xác định điểm $N$ nằm trên đường trung trực $d$ của đoạn thẳng $AB$.',
        'Bước 2: Áp dụng định lí tính chất đường trung trực: Một điểm nằm trên đường trung trực của một đoạn thẳng thì cách đều hai đầu mút của đoạn thẳng đó.',
        'Bước 3: Do đó, khoảng cách từ $N$ đến hai đầu mút $A$ và $B$ là bằng nhau: $BN = AN$.',
        'Bước 4: Thay số đo $AN = 8\\text{ cm}$ ta được: $BN = 8\\text{ cm}$.'
      ],
      answer: '8 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-l16-sg-01',
      title: 'Tính toán trong tam giác cân',
      description: 'Luyện tập các phép tính tìm góc ở đáy hoặc góc ở đỉnh trong tam giác cân.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c4-l16-tpl-01', 'g7-v1-c4-l16-tpl-02', 'g7-v1-c4-l16-tpl-05']
    },
    {
      id: 'g7-v1-c4-l16-sg-02',
      title: 'Vận dụng tính chất đường trung trực',
      description: 'Sử dụng định nghĩa và tính chất đường trung trực để chứng minh đoạn thẳng bằng nhau và xác định tính chất cách đều.',
      difficulty: 'understanding',
      templateIds: ['g7-v1-c4-l16-tpl-03', 'g7-v1-c4-l16-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c4-l16-tpl-01',
      'g7-v1-c4-l16-tpl-02',
      'g7-v1-c4-l16-tpl-03',
      'g7-v1-c4-l16-tpl-04',
      'g7-v1-c4-l16-tpl-05'
    ]
  }
};
