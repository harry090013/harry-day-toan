import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C3L11Content: LessonContent = {
  lessonId: 'g7-v1-c3-l11',
  title: 'Bài 11. Định lí và chứng minh định lí',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 11,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt về cấu trúc định lí (Giả thiết - Kết luận) và phương pháp chứng minh.'
  },
  objectives: [
    'Biết định lí là gì và cấu trúc của định lí.',
    'Phân biệt được Giả thiết (GT) và Kết luận (KL) của một định lí hoặc bài toán chứng minh.',
    'Hiểu các bước lập luận lô-gích và lý do cho mỗi bước chứng minh.'
  ],
  prerequisites: [
    'Khái niệm về các góc ở vị trí đặc biệt, hai đường thẳng song song.'
  ],
  theory: [
    {
      id: 'g7-v1-c3-l11-theory-1',
      title: '1. Định lí là gì?',
      content: 'Định lí là một khẳng định toán học được suy ra từ những khẳng định được coi là đúng bằng các lập luận lô-gích.\nMỗi định lí thường có hai phần:\n– **Giả thiết (GT)**: Những điều cho biết trước (nằm sau từ "Nếu" và trước từ "thì").\n– **Kết luận (KL)**: Những điều cần suy ra (nằm sau từ "thì").',
      formulas: [
        '\\text{Nếu A (Giả thiết)} \\Rightarrow \\text{Thì B (Kết luận)}'
      ]
    },
    {
      id: 'g7-v1-c3-l11-theory-2',
      title: '2. Chứng minh định lí',
      content: 'Chứng minh một định lí là dùng lập luận lô-gích để từ giả thiết suy ra kết luận.\nCách viết chứng minh:\n– Viết các khẳng định liên tiếp.\n– Với mỗi khẳng định, phải chỉ ra lý do (căn cứ) chứng minh khẳng định đó là đúng (ví dụ: theo giả thiết, theo định nghĩa, hoặc theo một định lí đã học trước đó).'
    }
  ],
  remember: [
    'Khi phát biểu định lí dưới dạng "Nếu... thì...", phần giữa "Nếu" và "thì" là Giả thiết, phần sau "thì" là Kết luận.',
    'Một chứng minh hình học hoàn chỉnh không bao giờ được thiếu lý do cho mỗi bước khẳng định.'
  ],
  tips: [
    'Để dễ tìm GT và KL, hãy cố gắng phát biểu lại định lí dưới dạng câu "Nếu ... thì ...". Ví dụ: "Hai góc đối đỉnh thì bằng nhau" viết lại thành "Nếu hai góc đối đỉnh thì chúng bằng nhau".'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c3-l11-mistake-1',
      mistake: 'Nhầm lẫn giữa Giả thiết và Kết luận.',
      correction: 'Giả thiết là cái đề bài đã cho sẵn, ta dùng nó làm điểm xuất phát. Kết luận là cái ta phải đi tìm hoặc chứng minh, không được dùng kết luận để giải thích cho các bước trước đó.'
    },
    {
      id: 'g7-v1-c3-l11-mistake-2',
      mistake: 'Khẳng định một điều đúng nhưng không kèm theo lý do giải thích.',
      correction: 'Trong hình học, mọi lập luận đều cần có căn cứ. Ví dụ không thể chỉ ghi $\\widehat{A_1} = \\widehat{B_1}$ mà không mở ngoặc giải thích lý do (như "hai góc đồng vị của $a \\parallel b$").'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c3-l11-example-1',
      title: 'Xác định Giả thiết và Kết luận',
      difficulty: 'basic',
      problem: 'Xác định Giả thiết (GT) và Kết luận (KL) của định lí sau: "Nếu hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì chúng song song với nhau."',
      steps: [
        'Bước 1: Tìm mệnh đề nằm giữa từ "Nếu" và từ "thì". Đó là "hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba". Đây là Giả thiết (GT).',
        'Bước 2: Tìm mệnh đề nằm sau từ "thì". Đó là "chúng song song với nhau". Đây là Kết luận (KL).',
        'Bước 3: Viết lại dưới dạng ký hiệu hình học:\n– GT: $a \\perp c$, $b \\perp c$, $a$ và $b$ phân biệt.\n– KL: $a \\parallel b$.'
      ],
      answer: 'GT: a c, b c; KL: a // b'
    },
    {
      id: 'g7-v1-c3-l11-example-2',
      title: 'Sắp xếp bước chứng minh định lí',
      difficulty: 'understanding',
      problem: 'Để chứng minh định lí: "Nếu hai góc đối đỉnh thì chúng bằng nhau", bạn An đưa ra các bước chứng minh sau:\n(1) Ta có $\\widehat{O_1} + \\widehat{O_2} = 180^\\circ$ (hai góc kề bù).\n(2) Suy ra $\\widehat{O_1} = \\widehat{O_3}$ (cùng bớt đi $\\widehat{O_2}$).\n(3) Lại có $\\widehat{O_2} + \\widehat{O_3} = 180^\\circ$ (hai góc kề bù).\nHãy sắp xếp các khẳng định trên thành một chuỗi lập luận đúng.',
      steps: [
        'Bước 1: Ta cần xuất phát từ các khẳng định ban đầu dựa trên góc kề bù để lập đẳng thức tổng $180^\\circ$. Lấy bước (1) và bước (3).',
        'Bước 2: So sánh hai đẳng thức: từ $\\widehat{O_1} + \\widehat{O_2} = 180^\\circ$ và $\\widehat{O_2} + \\widehat{O_3} = 180^\\circ$, ta thấy cả hai vế trái đều cộng với $\\widehat{O_2}$ và bằng $180^\\circ$.',
        'Bước 3: Thực hiện phép bắc cầu lô-gích hoặc rút gọn $\\widehat{O_2}$ ở cả hai đẳng thức, ta thu được kết quả ở bước (2): $\\widehat{O_1} = \\widehat{O_3}$.',
        'Bước 4: Thứ tự đúng là: (1) $\\rightarrow$ (3) $\\rightarrow$ (2).'
      ],
      answer: '(1) -> (3) -> (2)'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c3-l11-sg-01',
      title: 'Xác định Giả thiết và Kết luận',
      description: 'Nhận diện giả thiết và kết luận của định lí hoặc bài toán chứng minh.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c3-l11-tpl-01', 'g7-v1-c3-l11-tpl-02']
    },
    {
      id: 'g7-v1-c3-l11-sg-02',
      title: 'Lập luận chứng minh định lí',
      description: 'Luyện tập các bước chứng minh, điền lý do thích hợp và sắp xếp chuỗi lập luận.',
      difficulty: 'understanding',
      templateIds: ['g7-v1-c3-l11-tpl-03', 'g7-v1-c3-l11-tpl-04', 'g7-v1-c3-l11-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 6,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c3-l11-tpl-01',
      'g7-v1-c3-l11-tpl-02',
      'g7-v1-c3-l11-tpl-03',
      'g7-v1-c3-l11-tpl-04',
      'g7-v1-c3-l11-tpl-05'
    ]
  }
};
