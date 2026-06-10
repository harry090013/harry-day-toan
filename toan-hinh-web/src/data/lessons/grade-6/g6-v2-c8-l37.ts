import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8L37Content: LessonContent = {
  lessonId: 'g6-v2-c8-l37',
  title: 'Bài 37. Số đo góc',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    lessonNo: 37,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Số đo góc, so sánh góc, phân loại góc nhọn, vuông, tù, bẹt.'
  },
  objectives: [
    'Biết cách đo góc bằng thước đo độ và đọc đúng trị số góc.',
    'Nhận biết và phân loại được các góc: vuông ($90^\\circ$), nhọn ($<90^\\circ$), tù ($>90^\\circ$ và $<180^\\circ$), bẹt ($180^\\circ$).',
    'So sánh được hai góc dựa trên số đo của chúng.',
    'Áp dụng tính chất cộng số đo góc khi có tia nằm giữa để tính toán.'
  ],
  prerequisites: [
    'Khái niệm góc, đỉnh, cạnh góc.',
    'Nhận biết góc bẹt.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-l37-theory-1',
      title: '1. Đo góc',
      content: '– Mỗi góc có một số đo. Số đo của góc bẹt là $180^\\circ$.\n– Số đo của mỗi góc không vượt quá $180^\\circ$.\n– Cách đo góc bằng thước đo góc: đặt tâm thước trùng với đỉnh góc, một cạnh của góc đi qua vạch $0$ độ, cạnh còn lại đi qua vạch chỉ số đo trên thước.',
    },
    {
      id: 'g6-v2-c8-l37-theory-2',
      title: '2. Phân loại góc theo số đo',
      content: 'Ta phân loại góc dựa trên số đo tương ứng:\n– **Góc vuông**: Có số đo bằng $90^\\circ$.\n– **Góc nhọn**: Có số đo lớn hơn $0^\\circ$ và nhỏ hơn $90^\\circ$.\n– **Góc tù**: Có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$.\n– **Góc bẹt**: Có số đo bằng $180^\\circ$.',
      diagram: {
        id: 'g6-v2-c8-l37-theory-2-diagram',
        placement: 'theory',
        variant: 'angle-measure',
        title: 'Các loại góc',
        alt: 'Góc nhọn xOy có số đo bằng 60 độ.',
        notToScale: true,
        data: {
          vertex: 'O',
          rays: [
            { label: 'x', angleDeg: 0 },
            { label: 'y', angleDeg: 60 }
          ],
          measure: 60
        }
      }
    },
    {
      id: 'g6-v2-c8-l37-theory-3',
      title: '3. Cộng số đo góc',
      content: 'If tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ thì ta có công thức cộng số đo góc:\n\n$$\\widehat{xOy} + \\widehat{yOz} = \\widehat{xOz}$$\n\nNgược lại, nếu $\\widehat{xOy} + \\widehat{yOz} = \\widehat{xOz}$ thì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$.',
      formulas: ['\\widehat{xOy} + \\widehat{yOz} = \\widehat{xOz}']
    }
  ],
  remember: [
    'Ký hiệu độ là $^\\circ$ bắt buộc phải viết sau trị số đo góc: $30^\\circ, 90^\\circ, ...$',
    'Góc vuông thường được ký hiệu đặc biệt bằng một hình vuông nhỏ ở góc.',
    'Tia nằm giữa hai tia cạnh góc đóng vai trò tương tự điểm nằm giữa trên đoạn thẳng.'
  ],
  tips: [
    'Khi đo góc bằng thước hai thang số (trong và ngoài), hãy nhìn xem góc đó là góc nhọn hay tù để chọn đúng thang đo: nếu là góc nhọn thì số đo phải $<90^\\circ$, nếu tù thì phải $>90^\\circ$.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-l37-mistake-1',
      mistake: 'Đọc nhầm thang số trên thước đo độ (ví dụ đọc góc nhọn $60^\\circ$ thành góc tù $120^\\circ$).',
      correction: 'Hãy định dạng trực quan xem góc đó nhỏ hơn hay lớn hơn góc vuông trước khi đọc số đo.'
    },
    {
      id: 'g6-v2-c8-l37-mistake-2',
      mistake: 'Tự ý cộng góc khi chưa biết tia có nằm giữa hay không.',
      correction: 'Cần chỉ ra tia nằm giữa hoặc hai góc kề nhau trước khi cộng.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-l37-example-1',
      title: 'Phân loại góc theo số đo',
      difficulty: 'basic',
      problem: 'Cho các góc có số đo sau: $\\widehat{A} = 45^\\circ$, $\\widehat{B} = 90^\\circ$, $\\widehat{C} = 120^\\circ$, $\\widehat{D} = 180^\\circ$. Hãy phân loại các góc này.',
      steps: [
        'Bước 1: Góc $\\widehat{A} = 45^\\circ$ nhỏ hơn $90^\\circ$ nên là góc nhọn.',
        'Bước 2: Góc $\\widehat{B} = 90^\\circ$ nên là góc vuông.',
        'Bước 3: Góc $\\widehat{C} = 120^\\circ$ lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$ nên là góc tù.',
        'Bước 4: Góc $\\widehat{D} = 180^\\circ$ nên là góc bẹt.'
      ],
      answer: 'A: nhọn, B: vuông, C: tù, D: bẹt'
    },
    {
      id: 'g6-v2-c8-l37-example-2',
      title: 'Tính tổng hai góc kề',
      difficulty: 'understanding',
      problem: 'Cho tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$. Biết $\\widehat{xOy} = 35^\\circ$ và $\\widehat{yOz} = 55^\\circ$. Tính số đo góc $\\widehat{xOz}$. Góc $\\widehat{xOz}$ là góc gì?',
      steps: [
        'Bước 1: Vì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ nên ta có công thức: $\\widehat{xOy} + \\widehat{yOz} = \\widehat{xOz}$.',
        'Bước 2: Thay số đo vào công thức: $\\widehat{xOz} = 35^\\circ + 55^\\circ$.',
        'Bước 3: Tính toán: $\\widehat{xOz} = 90^\\circ$.',
        'Bước 4: Góc có số đo bằng $90^\\circ$ là góc vuông.'
      ],
      answer: 'xOz = 90 độ (góc vuông)',
      diagram: {
        id: 'g6-v2-c8-l37-example-2-diagram',
        placement: 'worked_example',
        variant: 'angle-measure',
        title: 'Góc vuông xOz',
        alt: 'Tia Oy nằm giữa Ox và Oz tạo thành góc vuông xOz = 90 độ.',
        notToScale: true,
        data: {
          vertex: 'O',
          rays: [
            { label: 'x', angleDeg: 0 },
            { label: 'y', angleDeg: 35 },
            { label: 'z', angleDeg: 90 }
          ],
          measure: 90
        }
      }
    },
    {
      id: 'g6-v2-c8-l37-example-3',
      title: 'Tìm góc thành phần còn lại',
      difficulty: 'understanding',
      problem: 'Cho góc bẹt $\\widehat{xOz}$. Vẽ tia $Oy$ sao cho $\\widehat{xOy} = 110^\\circ$. Tính số đo góc $\\widehat{yOz}$.',
      steps: [
        'Bước 1: Vì $\\widehat{xOz}$ là góc bẹt nên số đo của nó bằng $180^\\circ$.',
        'Bước 2: Vì tia $Oy$ nằm giữa hai tia $Ox$ và $Oz$ nên ta có: $\\widehat{xOy} + \\widehat{yOz} = \\widehat{xOz}$.',
        'Bước 3: Thay số: $110^\\circ + \\widehat{yOz} = 180^\\circ$.',
        'Bước 4: Tính toán: $\\widehat{yOz} = 180^\\circ - 110^\\circ = 70^\\circ$.'
      ],
      answer: '70 độ'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-l37-sg-01',
      title: 'Phân loại góc theo số đo',
      description: 'Luyện tập phân biệt góc nhọn, góc vuông, góc tù và góc bẹt dựa vào trị số độ.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l37-tpl-phan-loai-goc']
    },
    {
      id: 'g6-v2-c8-l37-sg-02',
      title: 'Tính tổng số đo góc',
      description: 'Áp dụng công thức cộng số đo góc $\\widehat{xOy} + \\widehat{yOz} = \\widehat{xOz}$ để tìm số đo góc lớn.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l37-tpl-tong-so-do-goc']
    },
    {
      id: 'g6-v2-c8-l37-sg-03',
      title: 'Tìm góc chưa biết khi biết góc bẹt/góc lớn',
      description: 'Tính số đo góc còn lại bằng cách trừ số đo góc thành phần ra khỏi góc lớn hoặc góc bẹt kề bù.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l37-tpl-hieu-so-do-goc']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v2-c8-l37-tpl-phan-loai-goc',
      'g6-v2-c8-l37-tpl-tong-so-do-goc',
      'g6-v2-c8-l37-tpl-hieu-so-do-goc'
    ]
  }
};
