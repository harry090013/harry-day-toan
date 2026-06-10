import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C9L29Content: LessonContent = {
  lessonId: 'g9-v2-c9-l29',
  title: 'Bài 29. Tứ giác nội tiếp',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    lessonNo: 29,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa tứ giác nội tiếp, tính chất góc và các dấu hiệu nhận biết tứ giác nội tiếp.'
  },
  objectives: [
    'Phát biểu được định nghĩa tứ giác nội tiếp đường tròn.',
    'Nhận biết và vận dụng được tính chất của tứ giác nội tiếp (tổng hai góc đối diện bằng 180°).',
    'Nhận biết được dấu hiệu nhận biết tứ giác nội tiếp để giải quyết các bài toán chứng minh.'
  ],
  prerequisites: [
    'Góc nội tiếp, các loại hình tứ giác (hình vuông, hình chữ nhật, hình thang cân).'
  ],
  theory: [
    {
      id: 'g9-v2-c9-l29-theory-1',
      title: '1. Khái niệm tứ giác nội tiếp',
      content: 'Một tứ giác có bốn đỉnh nằm trên một đường tròn được gọi là **tứ giác nội tiếp** đường tròn (gọi tắt là tứ giác nội tiếp).\n\n**Tính chất:** Trong một tứ giác nội tiếp, tổng số đo hai góc đối diện bằng $180^\\circ$.',
      diagram: {
        id: 'g9-v2-c9-l29-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Tứ giác nội tiếp',
        alt: 'Tứ giác ABCD nội tiếp đường tròn.',
        notToScale: true,
        data: {
          type: 'circumcircle'
        }
      }
    },
    {
      id: 'g9-v2-c9-l29-theory-2',
      title: '2. Dấu hiệu nhận biết (Cách chứng minh)',
      content: 'Một tứ giác là tứ giác nội tiếp nếu thỏa mãn một trong các điều kiện sau:\n- Có tổng hai góc đối diện bằng $180^\\circ$.\n- Có góc ngoài tại một đỉnh bằng góc trong tại đỉnh đối diện.\n- Có bốn đỉnh cách đều một điểm (điểm đó là tâm đường tròn ngoại tiếp).\n- Có hai đỉnh kề nhau cùng nhìn cạnh nối hai đỉnh còn lại dưới một góc bằng nhau.',
      formulas: [
        '\\widehat{A} + \\widehat{C} = 180^\\circ \\text{ hoặc } \\widehat{B} + \\widehat{D} = 180^\\circ \\Rightarrow ABCD \\text{ nội tiếp}',
        '\\widehat{ADB} = \\widehat{ACB} \\Rightarrow ABCD \\text{ nội tiếp}'
      ]
    }
  ],
  remember: [
    'Các hình đặc biệt luôn nội tiếp đường tròn: Hình chữ nhật, hình vuông, hình thang cân.',
    'Hình bình hành, hình thoi (không phải hình vuông) nói chung không nội tiếp đường tròn vì tổng hai góc đối diện không bằng $180^\\circ$.'
  ],
  tips: [
    'Để chứng minh tứ giác nội tiếp, phương pháp phổ biến nhất là tìm hai góc đối diện có tổng bằng $180^\\circ$ (thường là hai góc vuông đối diện).'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c9-l29-mistake-1',
      mistake: 'Khẳng định hình bình hành hoặc hình thoi bất kỳ là tứ giác nội tiếp.',
      correction: 'Tổng hai góc đối diện của hình bình hành không nhất thiết bằng $180^\\circ$. Chỉ khi hình bình hành đó là hình chữ nhật hoặc hình vuông thì mới nội tiếp.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c9-l29-example-1',
      title: 'Tính góc đối diện của tứ giác nội tiếp',
      difficulty: 'basic',
      problem: 'Cho tứ giác $ABCD$ nội tiếp đường tròn $(O)$. Biết số đo góc $\\widehat{A} = 75^\\circ$. Tính số đo góc $\\widehat{C}$.',
      steps: [
        'Bước 1: Vì tứ giác $ABCD$ nội tiếp đường tròn $(O)$, tổng hai góc đối diện bằng $180^\\circ$.',
        'Bước 2: Hai góc đối diện trong tứ giác này là $\\widehat{A}$ và $\\widehat{C}$. Do đó: $\\widehat{A} + \\widehat{C} = 180^\\circ$.',
        'Bước 3: Thay số và giải tìm $\\widehat{C}$: $\\widehat{C} = 180^\\circ - \\widehat{A} = 180^\\circ - 75^\\circ = 105^\\circ$.'
      ],
      answer: '105°'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c9-l29-sg-01',
      title: 'Tính góc trong tứ giác nội tiếp',
      description: 'Áp dụng tính chất tổng góc đối diện bằng 180 độ để tính các góc chưa biết.',
      difficulty: 'basic',
      templateIds: ['g9-v2-c9-l29-tpl-01', 'g9-v2-c9-l29-tpl-02', 'g9-v2-c9-l29-tpl-03']
    },
    {
      id: 'g9-v2-c9-l29-sg-02',
      title: 'Nhận biết tứ giác nội tiếp',
      description: 'Nhận diện hình chữ nhật, hình vuông, hình thang cân hoặc các tứ giác có tổng góc đối diện bằng 180 độ là nội tiếp.',
      difficulty: 'understanding',
      templateIds: ['g9-v2-c9-l29-tpl-04', 'g9-v2-c9-l29-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v2-c9-l29-tpl-01',
      'g9-v2-c9-l29-tpl-02',
      'g9-v2-c9-l29-tpl-03',
      'g9-v2-c9-l29-tpl-04',
      'g9-v2-c9-l29-tpl-05'
    ]
  }
};
