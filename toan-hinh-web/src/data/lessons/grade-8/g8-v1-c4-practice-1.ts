import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C4Practice1Content: LessonContent = {
  lessonId: 'g8-v1-c4-practice-1',
  title: 'Luyện tập chung trang 87',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập về định lí Thalès và hệ quả, tia phân giác trong tam giác.'
  },
  objectives: [
    'Vận dụng định lí Thalès và hệ quả để tính độ dài đoạn thẳng.',
    'Sử dụng tính chất tia phân giác trong tam giác để giải bài toán.'
  ],
  prerequisites: [
    'Đã học định lí Thalès và hệ quả.',
    'Biết tính chất tia phân giác trong tam giác.'
  ],
  theory: [
    {
      id: 'g8-v1-c4-practice-1-theory-1',
      title: 'Định lí Thalès và hệ quả',
      content: '**Định lí Thalès**: Nếu một đường thẳng song song với một cạnh của tam giác và cắt hai cạnh còn lại, thì nó chia hai cạnh đó theo cùng một tỉ số:\n$$\\frac{AM}{MB} = \\frac{AN}{NC}$$\n\n**Hệ quả**: Ba đường thẳng song song chắn trên hai cát tuyến bất kỳ các đoạn tỉ lệ:\n$$\\frac{AB}{BC} = \\frac{A\'B\'}{B\'C\'}$$\n\n**Tia phân giác**: Tia phân giác của một góc trong tam giác chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề góc đó:\n$$\\frac{BD}{DC} = \\frac{AB}{AC}$$',
      diagram: {
        id: 'g8-v1-c4-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Định lí Thalès trong tam giác',
        alt: 'Tam giác ABC với đường thẳng MN song song BC, cắt AB tại M và AC tại N.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Định lí Thalès: $\\frac{AM}{MB} = \\frac{AN}{NC}$ khi $MN \\parallel BC$.',
    'Tia phân giác góc $A$ trong $\\triangle ABC$: $\\frac{BD}{DC} = \\frac{AB}{AC}$.'
  ],
  tips: [
    'Xác định đúng cặp cạnh tương ứng khi áp dụng định lí Thalès.',
    'Với bài toán tia phân giác, hãy lập tỉ lệ trước rồi kết hợp với tổng của hai đoạn để giải.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c4-practice-1-mistake-1',
      mistake: 'Nhầm lẫn tỉ lệ khi áp dụng định lí Thalès: viết $\\frac{AM}{AB}$ thay vì $\\frac{AM}{MB}$.',
      correction: 'Tỉ lệ đúng là: $\\frac{AM}{MB} = \\frac{AN}{NC}$, không phải $\\frac{AM}{AB} = \\frac{AN}{AC}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c4-practice-1-example-1',
      title: 'Tính đoạn thẳng theo định lí Thalès',
      difficulty: 'understanding',
      problem: 'Trong tam giác $ABC$, $MN \\parallel BC$ với $M \\in AB$, $N \\in AC$. Biết $AM = 3$ cm, $MB = 6$ cm, $AN = 4$ cm. Tính $NC$.',
      steps: [
        'Vì $MN \\parallel BC$, theo định lí Thalès: $\\frac{AM}{MB} = \\frac{AN}{NC}$.',
        'Thay số: $\\frac{3}{6} = \\frac{4}{NC}$.',
        'Giải ra: $NC = \\frac{6 \\times 4}{3} = 8$ cm.'
      ],
      answer: 'NC = 8 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c4-practice-1-sg-01',
      title: 'Tính đoạn thẳng bằng định lí Thalès',
      description: 'Áp dụng định lí Thalès và hệ quả để tính các đoạn thẳng.',
      difficulty: 'understanding',
      templateIds: ['g8-c4-practice-1-tpl-01', 'g8-c4-practice-1-tpl-02', 'g8-c4-practice-1-tpl-03']
    },
    {
      id: 'g8-v1-c4-practice-1-sg-02',
      title: 'Tia phân giác và định lí Thalès đảo',
      description: 'Bài toán về tia phân giác và kiểm tra đường thẳng song song.',
      difficulty: 'understanding',
      templateIds: ['g8-c4-practice-1-tpl-04', 'g8-c4-practice-1-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c4-practice-1-tpl-01', 'g8-c4-practice-1-tpl-02', 'g8-c4-practice-1-tpl-03', 'g8-c4-practice-1-tpl-04', 'g8-c4-practice-1-tpl-05']
  }
};
