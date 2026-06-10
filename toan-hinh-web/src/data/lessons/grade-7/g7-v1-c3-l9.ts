import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C3L9Content: LessonContent = {
  lessonId: 'g7-v1-c3-l9',
  title: 'Bài 9. Hai đường thẳng song song và dấu hiệu nhận biết',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 9,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt trực quan về góc so le trong, đồng vị và dấu hiệu song song.'
  },
  objectives: [
    'Nhận biết được các cặp góc so le trong, đồng vị được tạo bởi một cát tuyến.',
    'Hiểu và biết sử dụng dấu hiệu nhận biết hai đường thẳng song song.',
    'Biết cách suy luận trắc nghiệm chứng minh hai đường thẳng song song.'
  ],
  prerequisites: [
    'Khái niệm hai đường thẳng cắt nhau, hai đường thẳng song song đã học ở lớp 6.'
  ],
  theory: [
    {
      id: 'g7-v1-c3-l9-theory-1',
      title: '1. Góc so le trong và góc đồng vị',
      content: 'Cho đường thẳng $c$ cắt hai đường thẳng $a$ và $b$ lần lượt tại $A$ và $B$.\n– **Cặp góc so le trong**: Nằm ở hai phía đối lập của cát tuyến $c$ và nằm phía trong hai đường thẳng $a, b$. Ví dụ: $\\widehat{A_3}$ và $\\widehat{B_1}$, $\\widehat{A_4}$ và $\\widehat{B_2}$.\n– **Cặp góc đồng vị**: Nằm ở vị trí tương ứng giống nhau (cùng phía, cùng hướng) đối với hai giao điểm. Ví dụ: $\\widehat{A_1}$ và $\\widehat{B_1}$, $\\widehat{A_2}$ and $\\widehat{B_2}$.',
      diagram: {
        id: 'g7-v1-c3-l9-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-parallel-transversal',
        title: 'Đường thẳng c cắt hai đường thẳng a và b',
        alt: 'Đường thẳng c cắt hai đường thẳng a và b tạo ra các góc đánh số từ 1 đến 4 tại các đỉnh A và B.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: ['A3', 'B1'] // Cặp so le trong
        }
      }
    },
    {
      id: 'g7-v1-c3-l9-theory-2',
      title: '2. Dấu hiệu nhận biết hai đường thẳng song song',
      content: 'Nếu đường thẳng $c$ cắt hai đường thẳng $a, b$ và trong các góc tạo thành có:\n– Một cặp góc so le trong bằng nhau, hoặc\n– Một cặp góc đồng vị bằng nhau\nthì $a$ và $b$ song song với nhau (ký hiệu $a \\parallel b$).',
      formulas: [
        '\\widehat{A_3} = \\widehat{B_1} \\Rightarrow a \\parallel b \\quad (\\text{so le trong bằng nhau})',
        '\\widehat{A_1} = \\widehat{B_1} \\Rightarrow a \\parallel b \\quad (\\text{đồng vị bằng nhau})'
      ]
    }
  ],
  remember: [
    'Nếu hai đường thẳng không song song, ta vẫn có các góc ở vị trí so le trong hay đồng vị, nhưng chúng sẽ không bằng nhau.',
    'Để ký hiệu hai đường thẳng song song, ta dùng ký hiệu $\\parallel$.'
  ],
  tips: [
    'Nhớ hình dạng chữ cái trực quan:\n– Cặp góc so le trong tạo thành hình chữ **Z** (hoặc chữ Z ngược).\n– Cặp góc đồng vị tạo thành hình chữ **F** (hoặc chữ F xoay các hướng).'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c3-l9-mistake-1',
      mistake: 'Cứ thấy hai góc ở vị trí so le trong hoặc đồng vị là kết luận chúng bằng nhau.',
      correction: 'Chúng chỉ bằng nhau khi đề bài cho sẵn hai đường thẳng song song. Nếu đề chưa cho song song thì không được tự ý cho chúng bằng nhau.'
    },
    {
      id: 'g7-v1-c3-l9-mistake-2',
      mistake: 'Nhầm lẫn vị trí so le trong với đồng vị.',
      correction: 'Hãy dùng quy tắc chữ Z (so le trong) và chữ F (đồng vị) để đối chiếu vị trí.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c3-l9-example-1',
      title: 'Nhận dạng cặp góc từ hình vẽ',
      difficulty: 'basic',
      problem: 'Cho cát tuyến $c$ cắt hai đường thẳng $a$ và $b$. Trên hình vẽ có góc $\\widehat{A_4}$ và $\\widehat{B_4}$ nằm cùng một phía đối với đường thẳng $c$ và ở vị trí phía dưới các đường thẳng $a$ và $b$. Hỏi đó là cặp góc gì?',
      steps: [
        'Bước 1: Xác định vị trí tương đối so với cát tuyến $c$: hai góc nằm cùng một phía (bên phải cát tuyến).',
        'Bước 2: Xác định vị trí tương đối so với hai đường thẳng $a$ và $b$: cả hai góc đều nằm phía dưới.',
        'Bước 3: Vì hai góc nằm ở các vị trí tương ứng giống nhau tại hai giao điểm nên chúng là một cặp góc đồng vị.',
        'Bước 4: Kết luận: đó là cặp góc đồng vị.'
      ],
      answer: 'Cặp góc đồng vị',
      diagram: {
        id: 'g7-v1-c3-l9-example-1-diagram',
        placement: 'worked_example',
        variant: 'g7-parallel-transversal',
        title: 'Cặp góc đồng vị A4 và B4',
        alt: 'Đường thẳng c cắt hai đường thẳng a và b chỉ ra góc đồng vị A4 và B4.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: ['A4', 'B4']
        }
      }
    },
    {
      id: 'g7-v1-c3-l9-example-2',
      title: 'Chứng minh song song bằng góc đồng vị',
      difficulty: 'understanding',
      problem: 'Cho cát tuyến $c$ cắt hai đường thẳng $a$ và $b$ lần lượt tại $A$ và $B$. Biết góc $\\widehat{A_1} = 65^\\circ$ và góc đồng vị $\\widehat{B_1} = 65^\\circ$. Hỏi hai đường thẳng $a$ và $b$ có song song với nhau không? Vì sao?',
      steps: [
        'Bước 1: Tìm các góc đề bài cho: $\\widehat{A_1}$ và $\\widehat{B_1}$ có số đo cùng bằng $65^\\circ$. Suy ra $\\widehat{A_1} = \\widehat{B_1} = 65^\\circ$.',
        'Bước 2: Xác định vị trí của cặp góc này: $\\widehat{A_1}$ và $\\widehat{B_1}$ ở vị trí đồng vị.',
        'Bước 3: Áp dụng dấu hiệu nhận biết hai đường thẳng song song: Vì đường thẳng $c$ cắt hai đường thẳng $a, b$ tạo ra một cặp góc đồng vị bằng nhau nên $a$ song song với $b$ ($a \\parallel b$).'
      ],
      answer: 'a // b (đồng vị bằng nhau)'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c3-l9-sg-01',
      title: 'Nhận diện góc so le trong, đồng vị',
      description: 'Nhận biết vị trí cặp góc so le trong và đồng vị trên các hình hình học phẳng.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c3-l9-tpl-01', 'g7-v1-c3-l9-tpl-05']
    },
    {
      id: 'g7-v1-c3-l9-sg-02',
      title: 'Nhận biết hai đường thẳng song song',
      description: 'Chứng minh hai đường thẳng song song dựa vào cặp góc so le trong hoặc đồng vị bằng nhau.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c3-l9-tpl-02', 'g7-v1-c3-l9-tpl-03', 'g7-v1-c3-l9-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c3-l9-tpl-01',
      'g7-v1-c3-l9-tpl-02',
      'g7-v1-c3-l9-tpl-03',
      'g7-v1-c3-l9-tpl-04',
      'g7-v1-c3-l9-tpl-05'
    ]
  }
};
