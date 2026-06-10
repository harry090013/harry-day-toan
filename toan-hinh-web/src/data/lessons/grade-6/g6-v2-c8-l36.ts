import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8L36Content: LessonContent = {
  lessonId: 'g6-v2-c8-l36',
  title: 'Bài 36. Góc',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    lessonNo: 36,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa góc, đỉnh, cạnh, góc bẹt và điểm nằm trong góc.'
  },
  objectives: [
    'Nhận biết được góc, đỉnh của góc, và cạnh của góc trong các hình vẽ trực quan.',
    'Biết đọc và viết ký hiệu góc đúng cách (dùng ký hiệu mũ hoặc chữ hoa).',
    'Nhận biết được góc bẹt (góc tạo bởi hai tia đối nhau).',
    'Nhận biết điểm nằm trong góc.'
  ],
  prerequisites: [
    'Khái niệm điểm, đường thẳng.',
    'Khái niệm tia, hai tia đối nhau.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-l36-theory-1',
      title: '1. Góc là gì?',
      content: 'Góc là hình gồm hai tia chung gốc.\n\n– Gốc chung của hai tia gọi là **đỉnh** của góc.\n– Hai tia gọi là hai **cạnh** của góc.\n\n*Ví dụ*: Góc $xOy$ (Ký hiệu: $\\widehat{xOy}$) được tạo bởi hai tia chung gốc $Ox$ và $Oy$.\n– Đỉnh của góc là $O$.\n– Hai cạnh của góc là hai tia $Ox$ và $Oy$.',
      formulas: ['\\widehat{xOy} \\text{ hoặc } \\widehat{O}'],
      diagram: {
        id: 'g6-v2-c8-l36-theory-1-diagram',
        placement: 'theory',
        variant: 'angle-basic',
        title: 'Góc xOy',
        alt: 'Góc xOy được tạo bởi hai tia Ox và Oy chung gốc O.',
        notToScale: true,
        data: {
          vertex: 'O',
          rays: [
            { label: 'x', angleDeg: 0 },
            { label: 'y', angleDeg: 45 }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l36-theory-2',
      title: '2. Góc bẹt',
      content: 'Góc bẹt là góc có hai cạnh là hai tia đối nhau.\n\n*Hình ảnh*: Góc bẹt tạo thành một đường thẳng nằm ngang qua đỉnh.',
    },
    {
      id: 'g6-v2-c8-l36-theory-3',
      title: '3. Điểm nằm trong góc',
      content: 'Cho góc $xOy$ khác góc bẹt. Điểm $M$ nằm trong góc $xOy$ nếu tia $OM$ nằm giữa hai tia $Ox$ và $Oy$.',
    }
  ],
  remember: [
    'Khi viết tên góc bằng 3 chữ cái (ví dụ: $\\widehat{AOB}$), chữ cái chỉ đỉnh ($O$) bắt buộc phải đặt ở chính giữa.',
    'Góc bẹt có hai cạnh là hai tia đối nhau và có số đo tương ứng thẳng hàng.',
    'Ký hiệu mũ $\\widehat{...}$ biểu thị góc.'
  ],
  tips: [
    'Để đếm số góc tạo bởi nhiều tia chung gốc, ta có thể ghép lần lượt từng cặp tia hoặc sử dụng công thức tính nhanh.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-l36-mistake-1',
      mistake: 'Đọc tên góc sai thứ tự đỉnh, ví dụ viết $\\widehat{OAB}$ thay vì $\\widehat{AOB}$ khi đỉnh là $O$.',
      correction: 'Đỉnh luôn luôn ở giữa: $\\widehat{AOB}$.'
    },
    {
      id: 'g6-v2-c8-l36-mistake-2',
      mistake: 'Coi cạnh của góc là các đoạn thẳng ngắn.',
      correction: 'Cạnh của góc là các **tia** nên kéo dài vô tận.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-l36-example-1',
      title: 'Xác định đỉnh và cạnh của góc',
      difficulty: 'basic',
      problem: 'Cho góc $\\widehat{mOn}$. Hãy chỉ ra đỉnh và các cạnh của góc này.',
      steps: [
        'Bước 1: Tên góc viết là $\\widehat{mOn}$, chữ cái viết ở giữa là $O$. Vậy đỉnh của góc là điểm $O$.',
        'Bước 2: Hai tia tạo nên góc xuất phát từ đỉnh $O$ là tia $Om$ và tia $On$.',
        'Bước 3: Kết luận: Đỉnh là $O$, các cạnh là tia $Om$ và tia $On$.'
      ],
      answer: 'Đỉnh O, cạnh là tia Om và tia On',
      diagram: {
        id: 'g6-v2-c8-l36-example-1-diagram',
        placement: 'worked_example',
        variant: 'angle-basic',
        title: 'Góc mOn',
        alt: 'Góc mOn được tạo bởi hai tia Om và On chung gốc O.',
        notToScale: true,
        data: {
          vertex: 'O',
          rays: [
            { label: 'm', angleDeg: 0 },
            { label: 'n', angleDeg: 60 }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l36-example-2',
      title: 'Nhận biết góc bẹt',
      difficulty: 'understanding',
      problem: 'Cho ba điểm thẳng hàng theo thứ tự $A, O, B$. Góc $\\widehat{AOB}$ là góc gì?',
      steps: [
        'Bước 1: Vì $A, O, B$ thẳng hàng theo thứ tự đó nên điểm $O$ nằm giữa $A$ và $B$.',
        'Bước 2: Suy ra hai tia $OA$ và $OB$ là hai tia đối nhau.',
        'Bước 3: Góc có hai cạnh là hai tia đối nhau chính là góc bẹt.',
        'Bước 4: Kết luận: $\\widehat{AOB}$ là góc bẹt.'
      ],
      answer: 'Góc bẹt'
    },
    {
      id: 'g6-v2-c8-l36-example-3',
      title: 'Đếm số góc tạo bởi các tia chung gốc',
      difficulty: 'application',
      problem: 'Vẽ 3 tia chung gốc $Ox, Oy, Oz$. Hỏi có tất cả bao nhiêu góc được tạo thành?',
      steps: [
        'Bước 1: Liệt kê các góc tạo bởi từng cặp tia chung gốc:',
        '– Góc tạo bởi tia $Ox$ và $Oy$: $\\widehat{xOy}$.',
        '– Góc tạo bởi tia $Oy$ và $Oz$: $\\widehat{yOz}$.',
        '– Góc tạo bởi tia $Ox$ và $Oz$: $\\widehat{xOz}$.',
        'Bước 2: Cả ba góc này đều phân biệt và không trùng nhau.',
        'Bước 3: Vậy tổng cộng có 3 góc.'
      ],
      answer: '3 góc'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-l36-sg-01',
      title: 'Đọc tên đỉnh và cạnh góc',
      description: 'Nhận diện đỉnh và hai tia cạnh góc của các ký hiệu góc cho trước.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l36-tpl-doc-ten-goc']
    },
    {
      id: 'g6-v2-c8-l36-sg-02',
      title: 'Nhận dạng góc bẹt',
      description: 'Xác định góc bẹt thông qua hình ảnh hai tia đối nhau hoặc ba điểm thẳng hàng.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l36-tpl-nhan-biet-goc-bet']
    },
    {
      id: 'g6-v2-c8-l36-sg-03',
      title: 'Đếm số góc tạo bởi nhiều tia',
      description: 'Bài toán đếm số lượng góc được tạo bởi một nhóm các tia chung gốc.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l36-tpl-dem-so-goc']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v2-c8-l36-tpl-doc-ten-goc',
      'g6-v2-c8-l36-tpl-nhan-biet-goc-bet',
      'g6-v2-c8-l36-tpl-dem-so-goc'
    ]
  }
};
