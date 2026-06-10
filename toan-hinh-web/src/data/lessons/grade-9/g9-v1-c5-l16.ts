import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5L16Content: LessonContent = {
  lessonId: 'g9-v1-c5-l16',
  title: 'Bài 16. Vị trí tương đối của đường thẳng và đường tròn',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    lessonNo: 16,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Ba vị trí tương đối của đường thẳng và đường tròn, định nghĩa tiếp tuyến và tính chất.'
  },
  objectives: [
    'Xác định được ba vị trí tương đối của đường thẳng và đường tròn (cắt nhau, tiếp xúc nhau, không giao nhau) dựa trên so sánh khoảng cách từ tâm đến đường thẳng với bán kính.',
    'Phát biểu được khái niệm tiếp tuyến của đường tròn và tính chất của tiếp tuyến.',
    'Nhận biết và vẽ được tiếp tuyến của đường tròn.'
  ],
  prerequisites: [
    'Khoảng cách từ một điểm đến một đường thẳng, định nghĩa đường tròn.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-l16-theory-1',
      title: '1. Ba vị trí tương đối',
      content: 'Gọi $d$ là khoảng cách từ tâm $O$ của đường tròn $(O; R)$ đến đường thẳng $a$:\n- **Đường thẳng và đường tròn cắt nhau:** Có 2 điểm chung $\\Leftrightarrow d < R$.\n- **Đường thẳng và đường tròn tiếp xúc nhau:** Có 1 điểm chung $\\Leftrightarrow d = R$.\n  *(Đường thẳng $a$ gọi là tiếp tuyến của đường tròn, điểm chung duy nhất gọi là tiếp điểm).* \n- **Đường thẳng và đường tròn không giao nhau:** Không có điểm chung $\\Leftrightarrow d > R$.',
      diagram: {
        id: 'g9-v1-c5-l16-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Đường thẳng tiếp xúc đường tròn',
        alt: 'Đường thẳng tiếp xúc đường tròn tại tiếp điểm A.',
        notToScale: true,
        data: {
          type: 'tangent',
          mode: 'single'
        }
      }
    },
    {
      id: 'g9-v1-c5-l16-theory-2',
      title: '2. Tính chất của tiếp tuyến',
      content: 'Nếu một đường thẳng là tiếp tuyến của một đường tròn thì nó vuông góc với bán kính đi qua tiếp điểm.',
      formulas: [
        'a \\text{ là tiếp tuyến tại } A \\Rightarrow a \\perp OA'
      ]
    }
  ],
  remember: [
    'Định lí tiếp tuyến là công cụ cực kỳ quan trọng để tạo ra các góc $90^\\circ$, giúp áp dụng tam giác vuông và các hệ thức lượng trong các bài toán chứng minh hình học.',
    'Khoảng cách $d$ luôn vuông góc với đường thẳng $a$.'
  ],
  tips: [
    'Để chứng minh một đường thẳng là tiếp tuyến của đường tròn tại điểm $A$, hãy chứng minh điểm $A$ thuộc đường tròn và đường thẳng đó vuông góc với bán kính $OA$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-l16-mistake-1',
      mistake: 'Sử dụng tính chất tiếp tuyến tại một điểm mà không chỉ ra đường thẳng đó vuông góc với bán kính.',
      correction: 'Hãy luôn đảm bảo viết rõ tiếp điểm là gì và chứng minh góc vuông giữa tiếp tuyến và bán kính đi qua tiếp điểm đó.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-l16-example-1',
      title: 'Xác định vị trí tương đối của đường thẳng và đường tròn',
      difficulty: 'basic',
      problem: 'Cho đường tròn $(O; 6\\text{ cm})$ và đường thẳng $a$. Khoảng cách từ tâm $O$ đến đường thẳng $a$ là $d = 4\\text{ cm}$. Hỏi vị trí tương đối giữa đường thẳng $a$ và đường tròn $(O)$ là gì?',
      steps: [
        'Bước 1: Xác định bán kính $R = 6\\text{ cm}$ và khoảng cách từ tâm đến đường thẳng $d = 4\\text{ cm}$.',
        'Bước 2: So sánh $d$ và $R$: Ta có $d = 4 < 6 = R$.',
        'Bước 3: Kết luận: Vì khoảng cách nhỏ hơn bán kính, đường thẳng $a$ và đường tròn $(O)$ cắt nhau.'
      ],
      answer: 'Cắt nhau'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-l16-sg-01',
      title: 'Nhận biết vị trí tương đối bằng khoảng cách',
      description: 'So sánh khoảng cách từ tâm đến đường thẳng với bán kính đường tròn để đưa ra kết luận.',
      difficulty: 'basic',
      templateIds: ['g9-v1-c5-l16-tpl-01', 'g9-v1-c5-l16-tpl-02']
    },
    {
      id: 'g9-v1-c5-l16-sg-02',
      title: 'Tính chất tiếp tuyến và tính độ dài',
      description: 'Áp dụng định lí góc vuông của tiếp tuyến và Pythagore để tính độ dài tiếp tuyến hoặc khoảng cách.',
      difficulty: 'understanding',
      templateIds: ['g9-v1-c5-l16-tpl-03', 'g9-v1-c5-l16-tpl-04', 'g9-v1-c5-l16-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v1-c5-l16-tpl-01',
      'g9-v1-c5-l16-tpl-02',
      'g9-v1-c5-l16-tpl-03',
      'g9-v1-c5-l16-tpl-04',
      'g9-v1-c5-l16-tpl-05'
    ]
  }
};
