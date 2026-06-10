import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C9L30Content: LessonContent = {
  lessonId: 'g9-v2-c9-l30',
  title: 'Bài 30. Đa giác đều',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    lessonNo: 30,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa đa giác đều, tâm, đường tròn ngoại tiếp, đường tròn nội tiếp đa giác đều.'
  },
  objectives: [
    'Phát biểu được định nghĩa đa giác đều.',
    'Nhận biết được tâm, đường tròn ngoại tiếp, đường tròn nội tiếp của đa giác đều.',
    'Tính được số đo góc của đa giác đều và các kích thước cơ bản.'
  ],
  prerequisites: [
    'Khái niệm đa giác, tam giác đều, hình vuông, đường tròn ngoại tiếp/nội tiếp.'
  ],
  theory: [
    {
      id: 'g9-v2-c9-l30-theory-1',
      title: '1. Khái niệm đa giác đều',
      content: 'Đa giác đều là đa giác có tất cả các cạnh bằng nhau và tất cả các góc bằng nhau.\n- **Ví dụ:** Tam giác đều, hình vuông, ngũ giác đều, lục giác đều.\n- **Số đo góc:** Mỗi góc ở đỉnh của đa giác đều $n$ cạnh ($n \\ge 3$) có số đo bằng:\n  $$\\alpha = \\frac{(n-2) \\cdot 180^\\circ}{n}$$',
      diagram: {
        id: 'g9-v2-c9-l30-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Đa giác đều và đường tròn',
        alt: 'Tam giác đều nội tiếp đường tròn.',
        notToScale: true,
        data: {
          type: 'circumcircle'
        }
      }
    },
    {
      id: 'g9-v2-c9-l30-theory-2',
      title: '2. Đường tròn ngoại tiếp và nội tiếp đa giác đều',
      content: 'Bất kỳ đa giác đều nào cũng có một đường tròn ngoại tiếp và một đường tròn nội tiếp.\n- Tâm của hai đường tròn này trùng nhau và được gọi là **tâm của đa giác đều**.\n- Bán kính đường tròn nội tiếp $r$ chính là khoảng cách từ tâm đến mỗi cạnh đa giác (còn gọi là trung đoạn). Bán kính ngoại tiếp $R$ là khoảng cách từ tâm đến mỗi đỉnh.',
      formulas: [
        '\\text{Góc ở đỉnh } \\alpha = \\frac{(n-2) \\cdot 180^\\circ}{n}',
        '\\text{Góc ở tâm } \\beta = \\frac{360^\\circ}{n}',
        'r = R \\cdot \\cos \\left(\\frac{180^\\circ}{n}\\right)'
      ]
    }
  ],
  remember: [
    'Lục giác đều có 6 cạnh bằng nhau. Góc ở tâm tạo bởi 2 đỉnh kề nhau là $60^\\circ$, tạo nên các tam giác đều. Do đó, bán kính đường tròn ngoại tiếp lục giác đều bằng đúng độ dài cạnh của nó ($R = a$).',
    'Góc của hình vuông là $90^\\circ$, tam giác đều là $60^\\circ$, lục giác đều là $120^\\circ$.'
  ],
  tips: [
    'Khi giải bài toán đa giác đều, hãy vẽ tam giác cân nối từ tâm đến hai đỉnh kề nhau để sử dụng các công thức lượng giác trong nửa tam giác cân đó.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c9-l30-mistake-1',
      mistake: 'Cho rằng mọi đa giác có các cạnh bằng nhau là đa giác đều.',
      correction: 'Hình thoi có các cạnh bằng nhau nhưng các góc không bằng nhau nên không phải là đa giác đều. Đa giác đều bắt buộc phải thỏa mãn **cả hai** điều kiện: các cạnh bằng nhau và các góc bằng nhau.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c9-l30-example-1',
      title: 'Tính góc của ngũ giác đều',
      difficulty: 'basic',
      problem: 'Tính số đo mỗi góc ở đỉnh của một ngũ giác đều ($n = 5$).',
      steps: [
        'Bước 1: Sử dụng công thức tính số đo góc ở đỉnh của đa giác đều $n$ cạnh: $\\alpha = \\frac{(n-2) \\cdot 180^\\circ}{n}$.',
        'Bước 2: Thay $n = 5$ vào công thức:',
        '$$\\alpha = \\frac{(5-2) \\cdot 180^\\circ}{5} = \\frac{3 \\cdot 180^\\circ}{5} = \\frac{540^\\circ}{5} = 108^\\circ$$.',
        'Bước 3: Trả lời: Mỗi góc của ngũ giác đều bằng $108^\\circ$.'
      ],
      answer: '108°'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c9-l30-sg-01',
      title: 'Tính số đo góc của đa giác đều',
      description: 'Tính góc ở đỉnh hoặc góc ở tâm của các đa giác đều khi biết số cạnh n.',
      difficulty: 'basic',
      templateIds: ['g9-v2-c9-l30-tpl-01', 'g9-v2-c9-l30-tpl-02']
    },
    {
      id: 'g9-v2-c9-l30-sg-02',
      title: 'Tính toán kích thước đa giác đều',
      description: 'Tính độ dài cạnh, bán kính ngoại tiếp R hoặc bán kính nội tiếp r của tam giác đều, hình vuông, lục giác đều.',
      difficulty: 'understanding',
      templateIds: ['g9-v2-c9-l30-tpl-03', 'g9-v2-c9-l30-tpl-04', 'g9-v2-c9-l30-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v2-c9-l30-tpl-01',
      'g9-v2-c9-l30-tpl-02',
      'g9-v2-c9-l30-tpl-03',
      'g9-v2-c9-l30-tpl-04',
      'g9-v2-c9-l30-tpl-05'
    ]
  }
};
