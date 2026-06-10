import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8L32Content: LessonContent = {
  lessonId: 'g6-v2-c8-l32',
  title: 'Bài 32. Điểm và đường thẳng',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    lessonNo: 32,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Nội dung biên soạn lại cho học sinh mất gốc học nhận biết điểm và đường thẳng.'
  },
  objectives: [
    'Nhận biết được hình ảnh của điểm và đường thẳng trong thực tế.',
    'Sử dụng đúng các ký hiệu điểm thuộc đường thẳng (∈) và không thuộc đường thẳng (∉).',
    'Nhận biết ba điểm thẳng hàng, ba điểm không thẳng hàng và điểm nằm giữa hai điểm còn lại.',
    'Nhận biết hai đường thẳng cắt nhau, song song và xác định được giao điểm.'
  ],
  prerequisites: [
    'Nhận biết các hình vẽ trực quan đơn giản.',
    'Sử dụng các chữ cái để đặt tên.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-l32-theory-1',
      title: '1. Điểm và đường thẳng',
      content: '– **Điểm**: Là một vị trí được đánh dấu bằng một chấm nhỏ trên giấy. Người ta dùng các chữ cái in hoa như $A, B, C, ...$ để đặt tên cho điểm.\n– **Đường thẳng**: Là một vệt thẳng kéo dài mãi về hai phía mà không bị giới hạn. Người ta dùng các chữ cái thường như $a, b, c, d, ...$ hoặc tên hai điểm đi qua để đặt tên cho đường thẳng (ví dụ đường thẳng $xy$, đường thẳng $AB$).',
    },
    {
      id: 'g6-v2-c8-l32-theory-2',
      title: '2. Điểm thuộc đường thẳng và điểm không thuộc đường thẳng',
      content: '– Nếu điểm $A$ nằm trên đường thẳng $d$, ta nói điểm $A$ thuộc đường thẳng $d$. Ký hiệu: $A \\in d$.\n– Nếu điểm $B$ không nằm trên đường thẳng $d$, ta nói điểm $B$ không thuộc đường thẳng $d$. Ký hiệu: $B \\notin d$.',
      formulas: ['A \\in d', 'B \\notin d'],
      diagram: {
        id: 'g6-v2-c8-l32-theory-2-diagram',
        placement: 'theory',
        variant: 'point-line-membership',
        title: 'Điểm thuộc và không thuộc đường thẳng',
        alt: 'Đường thẳng d đi qua điểm A và không đi qua điểm B.',
        notToScale: true,
        data: {
          lineLabel: 'd',
          points: [
            { label: 'A', x: 125, y: 80, onLine: true },
            { label: 'B', x: 190, y: 35, onLine: false }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l32-theory-3',
      title: '3. Ba điểm thẳng hàng',
      content: '– Khi ba điểm $A, B, C$ cùng nằm trên một đường thẳng, ta nói chúng **thẳng hàng**.\n– Khi ba điểm $A, B, C$ không cùng nằm trên bất kỳ đường thẳng nào, ta nói chúng **không thẳng hàng**.\n– Trong ba điểm thẳng hàng, có một và chỉ một điểm nằm giữa hai điểm còn lại.',
      diagram: {
        id: 'g6-v2-c8-l32-theory-3-diagram',
        placement: 'theory',
        variant: 'between-points',
        title: 'Ba điểm thẳng hàng',
        alt: 'Ba điểm A, B, C thẳng hàng với B nằm giữa A và C.',
        notToScale: true,
        data: {
          points: [
            { label: 'A', x: 70, y: 60 },
            { label: 'B', x: 160, y: 60 },
            { label: 'C', x: 250, y: 60 }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l32-theory-4',
      title: '4. Hai đường thẳng cắt nhau, song song',
      content: '– **Hai đường thẳng song song**: Là hai đường thẳng không có điểm chung nào (dù kéo dài mãi về hai phía).\n– **Hai đường thẳng cắt nhau**: Là hai đường thẳng chỉ có duy nhất một điểm chung. Điểm chung đó gọi là **giao điểm**.',
    }
  ],
  remember: [
    'Dùng chữ IN HOA cho điểm: $A, B, C$. Dùng chữ thường cho đường thẳng: $a, b, d$.',
    'Ký hiệu thuộc ($\\in$) và không thuộc ($\\notin$) chỉ dùng cho quan hệ giữa **điểm** và **đường thẳng** (Không ghi ngược lại như $d \\in A$).',
    'Đường thẳng $AB$ và đường thẳng $BA$ là cùng một đường thẳng duy nhất.',
    'Qua hai điểm phân biệt, ta vẽ được đúng một và chỉ một đường thẳng.'
  ],
  tips: [
    'Muốn kiểm tra một điểm có thuộc đường thẳng không, hãy đặt mép thước thẳng dọc theo đường thẳng xem điểm đó có đè lên mép thước không.',
    'Khi đếm số đường thẳng đi qua các cặp điểm, hãy liệt kê theo thứ tự bảng chữ cái để tránh đếm trùng $AB$ và $BA$.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-l32-mistake-1',
      mistake: 'Ghi ký hiệu ngược dạng $d \\in A$ (Đường thẳng thuộc điểm).',
      correction: 'Phải viết điểm trước, đường thẳng sau: $A \\in d$.'
    },
    {
      id: 'g6-v2-c8-l32-mistake-2',
      mistake: 'Cho rằng hai đoạn thẳng ngắn không chạm nhau trên hình vẽ là song song.',
      correction: 'Đường thẳng kéo dài vô hạn. Cần kéo dài thử hai đường thẳng đó xem chúng có cắt nhau ở phía xa hơn không.'
    },
    {
      id: 'g6-v2-c8-l32-mistake-3',
      mistake: 'Đếm trùng đường thẳng $PQ$ và $QP$ là hai đường thẳng khác nhau.',
      correction: 'Chúng chỉ là hai cách gọi khác nhau của cùng một đường thẳng duy nhất.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-l32-example-1',
      title: 'Nhận biết điểm thuộc và không thuộc đường thẳng',
      difficulty: 'basic',
      problem: 'Cho điểm $M$ nằm trên đường thẳng $a$, điểm $N$ nằm ngoài đường thẳng $a$. Hãy dùng ký hiệu toán học thích hợp để biểu diễn mối quan hệ này.',
      steps: [
        'Bước 1: Điểm $M$ nằm trên đường thẳng $a$, do đó $M$ thuộc đường thẳng $a$. Ký hiệu toán học là: $M \\in a$.',
        'Bước 2: Điểm $N$ nằm ngoài đường thẳng $a$, do đó $N$ không thuộc đường thẳng $a$. Ký hiệu toán học là: $N \\notin a$.'
      ],
      answer: 'M \\in a và N \\notin a',
      diagram: {
        id: 'g6-v2-c8-l32-example-1-diagram',
        placement: 'worked_example',
        variant: 'point-line-membership',
        title: 'M thuộc a và N không thuộc a',
        alt: 'Đường thẳng a đi qua điểm M và không đi qua điểm N.',
        notToScale: true,
        data: {
          lineLabel: 'a',
          points: [
            { label: 'M', x: 140, y: 80, onLine: true },
            { label: 'N', x: 200, y: 40, onLine: false }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l32-example-2',
      title: 'Xác định giao điểm của hai đường thẳng',
      difficulty: 'understanding',
      problem: 'Cho hai đường thẳng $d_1$ và $d_2$ cắt nhau tại điểm $I$. Điểm $I$ có thuộc đường thẳng $d_1$ không? Điểm $I$ có thuộc đường thẳng $d_2$ không?',
      steps: [
        'Bước 1: Định nghĩa giao điểm của hai đường thẳng là điểm chung của cả hai đường thẳng đó.',
        'Bước 2: Vì $I$ là giao điểm nên $I$ phải nằm trên cả hai đường thẳng $d_1$ và $d_2$.',
        'Bước 3: Suy ra $I \\in d_1$ và $I \\in d_2$.'
      ],
      answer: 'I thuộc cả hai đường thẳng (I \\in d_1 và I \\in d_2)'
    },
    {
      id: 'g6-v2-c8-l32-example-3',
      title: 'Đếm đường thẳng qua các điểm không thẳng hàng',
      difficulty: 'application',
      problem: 'Cho 3 điểm $A, B, C$ không thẳng hàng. Vẽ tất cả các đường thẳng đi qua mỗi cặp điểm. Có tất cả bao nhiêu đường thẳng phân biệt?',
      steps: [
        'Bước 1: Liệt kê các đường thẳng đi qua từng cặp điểm: đường thẳng qua $A$ và $B$ ($AB$), đường thẳng qua $B$ and $C$ ($BC$), đường thẳng qua $A$ và $C$ ($AC$).',
        'Bước 2: Vì ba điểm này không thẳng hàng nên ba đường thẳng $AB, BC, AC$ là hoàn toàn khác nhau.',
        'Bước 3: Không tính các đường thẳng đảo ngược tên như $BA, CB, CA$ vì chúng trùng với các đường thẳng ở trên.',
        'Bước 4: Kết luận có tất cả 3 đường thẳng.'
      ],
      answer: '3 đường thẳng'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-l32-sg-01',
      title: 'Đọc ký hiệu thuộc/không thuộc đường thẳng',
      description: 'Luyện tập chuyển từ hình vẽ hoặc phát biểu bằng lời sang ký hiệu ∈, ∉ và ngược lại.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l32-tpl-thuoc-khong-thuoc']
    },
    {
      id: 'g6-v2-c8-l32-sg-02',
      title: 'Nhận biết điểm thẳng hàng và nằm giữa',
      description: 'Nhận biết ba điểm thẳng hàng và xác định điểm nằm giữa hai điểm còn lại trên hình vẽ.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l32-tpl-diem-thang-hang']
    },
    {
      id: 'g6-v2-c8-l32-sg-03',
      title: 'Đếm số đường thẳng đi qua các điểm',
      description: 'Bài toán đếm số đường thẳng đi qua từng cặp điểm trong các trường hợp thẳng hàng hoặc không thẳng hàng.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l32-tpl-dem-duong-thang']
    },
    {
      id: 'g6-v2-c8-l32-sg-04',
      title: 'Xác định giao điểm và quan hệ song song',
      description: 'Xác định giao điểm của các đường thẳng cắt nhau và phân biệt với hai đường thẳng song song.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l32-tpl-giao-diem-song-song']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v2-c8-l32-tpl-thuoc-khong-thuoc',
      'g6-v2-c8-l32-tpl-diem-thang-hang',
      'g6-v2-c8-l32-tpl-dem-duong-thang',
      'g6-v2-c8-l32-tpl-giao-diem-song-song'
    ]
  }
};
