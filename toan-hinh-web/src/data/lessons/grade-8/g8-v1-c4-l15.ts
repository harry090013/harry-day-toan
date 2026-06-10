import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C4L15Content: LessonContent = {
  lessonId: 'g8-v1-c4-l15',
  title: 'Bài 15. Định lí Thalès trong tam giác',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 15,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định lí Thalès thuận và đảo.'
  },
  objectives: [
    'Hiểu được khái niệm tỉ số của hai đoạn thẳng và đoạn thẳng tỉ lệ.',
    'Phát biểu và giải thích được định lí Thalès trong tam giác (thuận và đảo).',
    'Vận dụng định lí Thalès để tính độ dài đoạn thẳng và chứng minh hai đường thẳng song song.'
  ],
  prerequisites: [
    'Đoạn thẳng, tỉ số số học, các đường thẳng song song.'
  ],
  theory: [
    {
      id: 'g8-v1-c4-l15-theory-1',
      title: '1. Tỉ số của hai đoạn thẳng',
      content: 'Tỉ số của hai đoạn thẳng là tỉ số độ dài của chúng theo cùng một đơn vị đo. Tỉ số của hai đoạn thẳng $AB$ và $CD$ ký hiệu là $\\frac{AB}{CD}$.\n\n**Đoạn thẳng tỉ lệ:** Hai đoạn thẳng $AB$ và $CD$ tỉ lệ với hai đoạn thẳng $A\'B\'$ và $C\'D\'$ nếu có tỉ lệ thức:\n$$\\frac{AB}{CD} = \\frac{A\'B\'}{C\'D\'}$$',
      formulas: [
        '\\frac{AB}{CD} = \\frac{A\'B\'}{C\'D\'}'
      ]
    },
    {
      id: 'g8-v1-c4-l15-theory-2',
      title: '2. Định lí Thalès trong tam giác (Thuận)',
      content: 'Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại thì nó định ra trên hai cạnh đó những đoạn thẳng tương ứng tỉ lệ.',
      diagram: {
        id: 'g8-v1-c4-l15-theory-2-diagram',
        placement: 'theory',
        variant: 'g8-c4-thales',
        title: 'Định lí Thalès với MN // BC',
        alt: 'Tam giác ABC có đường thẳng MN song song BC cắt AB tại M, AC tại N.',
        notToScale: true,
        data: {
          type: 'thales',
          labelA: 'A',
          labelB: 'B',
          labelC: 'C',
          labelM: 'M',
          labelN: 'N'
        }
      },
      formulas: [
        'MN \\parallel BC \\Rightarrow \\frac{AM}{AB} = \\frac{AN}{AC}, \\quad \\frac{AM}{MB} = \\frac{AN}{NC}, \\quad \\frac{MB}{AB} = \\frac{NC}{AC}'
      ]
    },
    {
      id: 'g8-v1-c4-l15-theory-3',
      title: '3. Định lí Thalès đảo',
      content: 'Nếu một đường thẳng cắt hai cạnh của một tam giác và định ra trên hai cạnh này những đoạn thẳng tương ứng tỉ lệ thì đường thẳng đó song song với cạnh còn lại của tam giác.',
      formulas: [
        '\\frac{AM}{MB} = \\frac{AN}{NC} \\Rightarrow MN \\parallel BC'
      ]
    }
  ],
  remember: [
    'Luôn đảm bảo hai đoạn thẳng được đổi về cùng một đơn vị đo trước khi lập tỉ số.',
    'Hệ quả định lí Thalès (áp dụng cho tam giác đồng dạng) sẽ được giới thiệu ở bài học sau. Định lí Thalès ở bài này chỉ cho phép lập tỉ lệ các đoạn thẳng trên hai cạnh bên.'
  ],
  tips: [
    'Khi làm bài tính toán độ dài, hãy viết tỉ lệ thức tổng quát trước, sau đó thay các giá trị đã biết vào rồi thực hiện nhân chéo chia ngang để tìm đoạn thẳng chưa biết.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c4-l15-mistake-1',
      mistake: 'Lập tỉ số không tương ứng vị trí các đoạn thẳng.',
      correction: 'Hãy nhớ: Đoạn trên trên đoạn dưới của cạnh này phải bằng đoạn trên trên đoạn dưới của cạnh kia: $\\frac{AM}{MB} = \\frac{AN}{NC}$. Tránh viết nhầm lẫn chéo đầu đuôi như $\\frac{AM}{MB} = \\frac{NC}{AN}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c4-l15-example-1',
      title: 'Tính độ dài đoạn thẳng bằng định lí Thalès',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ có $MN \\parallel BC$ ($M \\in AB, N \\in AC$). Biết $AM = 3\\text{ cm}, MB = 2\\text{ cm}$ và $AN = 4.5\\text{ cm}$. Tính độ dài đoạn thẳng $NC$.',
      steps: [
        'Bước 1: Do $MN \\parallel BC$, áp dụng định lí Thalès cho tam giác $ABC$, ta có tỉ lệ thức: $\\frac{AM}{MB} = \\frac{AN}{NC}$.',
        'Bước 2: Thay số đo vào hệ thức: $\\frac{3}{2} = \\frac{4.5}{NC}$.',
        'Bước 3: Thực hiện nhân chéo chia ngang để tính $NC$: $NC = \\frac{2 \\times 4.5}{3} = \\frac{9}{3} = 3\\text{ cm}$.',
        'Bước 4: Trả lời: Độ dài đoạn thẳng $NC$ là $3\\text{ cm}$.'
      ],
      answer: '3 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c4-l15-sg-01',
      title: 'Tính toán tỉ số và đoạn thẳng tỉ lệ',
      description: 'Lập tỉ số và tìm chiều dài đoạn thẳng dựa trên định lí Thalès.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c4-l15-tpl-01', 'g8-v1-c4-l15-tpl-02', 'g8-v1-c4-l15-tpl-03']
    },
    {
      id: 'g8-v1-c4-l15-sg-02',
      title: 'Chứng minh đường thẳng song song',
      description: 'Áp dụng định lí Thalès đảo để chứng minh hai đường thẳng song song với nhau.',
      difficulty: 'understanding',
      templateIds: ['g8-v1-c4-l15-tpl-04', 'g8-v1-c4-l15-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c4-l15-tpl-01',
      'g8-v1-c4-l15-tpl-02',
      'g8-v1-c4-l15-tpl-03',
      'g8-v1-c4-l15-tpl-04',
      'g8-v1-c4-l15-tpl-05'
    ]
  }
};
