import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4L12Content: LessonContent = {
  lessonId: 'g7-v1-c4-l12',
  title: 'Bài 12. Tổng các góc trong một tam giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 12,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng các góc trong một tam giác và góc ngoài của tam giác.'
  },
  objectives: [
    'Phát biểu và hiểu định lí về tổng ba góc trong một tam giác.',
    'Tính số đo góc còn thiếu trong tam giác khi biết số đo hai góc khác.',
    'Nhận biết và tính góc ngoài của tam giác bằng tổng hai góc trong không kề.'
  ],
  prerequisites: [
    'Khái niệm về tam giác, góc và số đo góc.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-l12-theory-1',
      title: '1. Định lí tổng ba góc trong một tam giác',
      content: 'Tổng ba góc trong một tam giác bằng $180^\\circ$.',
      formulas: [
        '\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ'
      ],
      diagram: {
        id: 'g7-v1-c4-l12-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-triangle-angles',
        title: 'Tam giác ABC',
        alt: 'Tam giác ABC có tổng ba góc bằng 180 độ.',
        notToScale: true,
        data: {
          labels: ['A', 'B', 'C']
        }
      }
    },
    {
      id: 'g7-v1-c4-l12-theory-2',
      title: '2. Góc ngoài của tam giác',
      content: '– **Định nghĩa**: Góc ngoài của một tam giác là góc kề bù với một góc trong của tam giác đó.\n– **Tính chất**: Mỗi góc ngoài của một tam giác bằng tổng của hai góc trong không kề với nó.\n– **So sánh**: Góc ngoài của tam giác lớn hơn mỗi góc trong không kề với nó.',
      formulas: [
        '\\widehat{ACx} = \\widehat{A} + \\widehat{B}'
      ],
      diagram: {
        id: 'g7-v1-c4-l12-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-triangle-angles',
        title: 'Góc ngoài ACx tại đỉnh C',
        alt: 'Góc ngoài ACx tại đỉnh C bằng tổng hai góc trong A và B.',
        notToScale: true,
        data: {
          labels: ['A', 'B', 'C'],
          showExterior: true,
          measures: {
            ext: 'ext'
          }
        }
      }
    }
  ],
  remember: [
    'Tổng ba góc của mọi tam giác (nhọn, vuông, tù, cân, đều) đều bằng đúng $180^\\circ$.',
    'Trong tam giác vuông, hai góc nhọn phụ nhau (tổng bằng $90^\\circ$).'
  ],
  tips: [
    'Để tính góc thứ ba, ta lấy $180^\\circ$ trừ đi tổng của hai góc đã biết.',
    'Để tính góc ngoài tại đỉnh C, thay vì tìm góc trong C rồi lấy $180^\\circ - \\widehat{C}$, ta có thể tính nhanh bằng cách lấy $\\widehat{A} + \\widehat{B}$.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-l12-mistake-1',
      mistake: 'Cộng nhầm tổng ba góc bằng $360^\\circ$ (nhầm sang tứ giác).',
      correction: 'Nhớ kỹ: Tam giác có 3 góc có tổng $180^\\circ$. Tứ giác (4 góc) mới có tổng $360^\\circ$.'
    },
    {
      id: 'g7-v1-c4-l12-mistake-2',
      mistake: 'Nghĩ rằng góc ngoài bằng góc trong kề bù với nó.',
      correction: 'Góc ngoài và góc trong kề bù có tổng bằng $180^\\circ$, chúng chỉ bằng nhau khi cả hai cùng bằng $90^\\circ$. Góc ngoài bằng TỔNG hai góc trong KHÔNG kề.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-l12-example-1',
      title: 'Tính góc còn lại trong tam giác',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ biết $\\widehat{A} = 60^\\circ$ và $\\widehat{B} = 70^\\circ$. Tính số đo góc $\\widehat{C}$.',
      steps: [
        'Bước 1: Áp dụng định lí tổng ba góc trong tam giác $ABC$: $\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ$.',
        'Bước 2: Thay số đo của hai góc đã biết vào đẳng thức: $60^\\circ + 70^\\circ + \\widehat{C} = 180^\\circ$.',
        'Bước 3: Cộng hai góc đã biết: $130^\\circ + \\widehat{C} = 180^\\circ$.',
        'Bước 4: Tính số đo góc $\\widehat{C} = 180^\\circ - 130^\\circ = 50^\\circ$.'
      ],
      answer: '50°'
    },
    {
      id: 'g7-v1-c4-l12-example-2',
      title: 'Tính góc ngoài của tam giác',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ có $\\widehat{A} = 50^\\circ$ và $\\widehat{B} = 65^\\circ$. Tính số đo góc ngoài $\\widehat{ACx}$ tại đỉnh $C$ của tam giác.',
      steps: [
        'Bước 1: Nhận biết góc ngoài $\\widehat{ACx}$ kề bù với góc trong $\\widehat{ACB}$. Hai góc trong không kề với nó là $\\widehat{A}$ và $\\widehat{B}$.',
        'Bước 2: Áp dụng tính chất góc ngoài của tam giác: $\\widehat{ACx} = \\widehat{A} + \\widehat{B}$.',
        'Bước 3: Thay số vào đẳng thức: $\\widehat{ACx} = 50^\\circ + 65^\\circ = 115^\\circ$.',
        'Bước 4: Vậy số đo góc ngoài tại đỉnh $C$ là $115^\\circ$.'
      ],
      answer: '115°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-l12-sg-01',
      title: 'Tính góc trong tam giác',
      description: 'Luyện tập tính số đo góc còn lại của một tam giác dựa vào hai góc đã biết.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c4-l12-tpl-01', 'g7-v1-c4-l12-tpl-02']
    },
    {
      id: 'g7-v1-c4-l12-sg-02',
      title: 'Vận dụng góc ngoài tam giác',
      description: 'Tìm số đo góc ngoài hoặc các góc trong kề bù/không kề.',
      difficulty: 'understanding',
      templateIds: ['g7-v1-c4-l12-tpl-03', 'g7-v1-c4-l12-tpl-04', 'g7-v1-c4-l12-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c4-l12-tpl-01',
      'g7-v1-c4-l12-tpl-02',
      'g7-v1-c4-l12-tpl-03',
      'g7-v1-c4-l12-tpl-04',
      'g7-v1-c4-l12-tpl-05'
    ]
  }
};
