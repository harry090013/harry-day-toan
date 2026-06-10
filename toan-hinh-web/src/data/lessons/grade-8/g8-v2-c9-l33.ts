import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9L33Content: LessonContent = {
  lessonId: 'g8-v2-c9-l33',
  title: 'Bài 33. Hai tam giác đồng dạng',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    lessonNo: 33,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa và tính chất của hai tam giác đồng dạng.'
  },
  objectives: [
    'Phát biểu được định nghĩa hai tam giác đồng dạng.',
    'Nhận biết và viết đúng tỉ số đồng dạng k giữa hai tam giác.',
    'Vận dụng các tính chất đồng dạng để tính số đo góc và độ dài các cạnh.'
  ],
  prerequisites: [
    'Khái niệm tam giác bằng nhau, tỉ số đoạn thẳng, định lí Thalès.'
  ],
  theory: [
    {
      id: 'g8-v2-c9-l33-theory-1',
      title: '1. Định nghĩa hai tam giác đồng dạng',
      content: 'Tam giác $A\'B\'C\'$ gọi là đồng dạng với tam giác $ABC$ nếu:\n- Các góc tương ứng bằng nhau: $$\\widehat{A\'} = \\widehat{A}, \\quad \\widehat{B\'} = \\widehat{B}, \\quad \\widehat{C\'} = \\widehat{C}$$\n- Các cạnh tương ứng tỉ lệ: $$\\frac{A\'B\'}{AB} = \\frac{B\'C\'}{BC} = \\frac{C\'A\'}{CA} = k$$\n*(Ký hiệu là $\\triangle A\'B\'C\' \\backsim \\triangle ABC$, trong đó $k$ là tỉ số đồng dạng).*',
      diagram: {
        id: 'g8-v2-c9-l33-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c9-similarity',
        title: 'Hai tam giác đồng dạng',
        alt: 'Tam giác A\'B\'C\' đồng dạng với tam giác ABC với tỉ số k.',
        notToScale: true,
        data: {
          k: 0.7
        }
      }
    },
    {
      id: 'g8-v2-c9-l33-theory-2',
      title: '2. Tính chất và định lí',
      content: '**Tính chất:**\n- Mỗi tam giác đồng dạng với chính nó theo tỉ số $k = 1$.\n- Nếu $\\triangle A\'B\'C\' \\backsim \\triangle ABC$ thì $\\triangle ABC \\backsim \\triangle A\'B\'C\'$ theo tỉ số $\\frac{1}{k}$.\n- Nếu $\\triangle A\'\'B\'\'C\'\' \\backsim \\triangle A\'B\'C\'$ và $\\triangle A\'B\'C\' \\backsim \\triangle ABC$ thì $\\triangle A\'\'B\'\'C\'\' \\backsim \\triangle ABC$ (tính chất bắc cầu).\n\n**Định lí (Định lí Thalès mở rộng):**\nNếu một đường thẳng cắt hai cạnh của một tam giác và song song với cạnh còn lại thì nó tạo thành một tam giác mới đồng dạng với tam giác đã cho.',
      formulas: [
        'MN \\parallel BC \\Rightarrow \\triangle AMN \\backsim \\triangle ABC'
      ]
    }
  ],
  remember: [
    'Khi viết ký hiệu đồng dạng $\\triangle A\'B\'C\' \\backsim \\triangle ABC$, ta phải viết các đỉnh tương ứng theo đúng thứ tự.',
    'Tỉ số chu vi của hai tam giác đồng dạng bằng đúng tỉ số đồng dạng $k$, trong khi tỉ số diện tích bằng bình phương tỉ số đồng dạng $k^2$.'
  ],
  tips: [
    'Nếu đề bài yêu cầu tìm tỉ số đồng dạng của $\\triangle A\'B\'C\'$ và $\\triangle ABC$, hãy lấy độ dài một cạnh của tam giác thứ nhất chia cho độ dài cạnh tương ứng của tam giác thứ hai.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-l33-mistake-1',
      mistake: 'Viết sai thứ tự đỉnh tương ứng khi lập tỉ lệ cạnh.',
      correction: 'Hãy dùng các đỉnh tương ứng để lập tỉ lệ: đỉnh thứ 1 và 2 tạo thành $A\'B\'$ trên $AB$, đỉnh 2 và 3 tạo thành $B\'C\'$ trên $BC$. Viết sai thứ tự đỉnh sẽ dẫn đến lập công thức sai.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-l33-example-1',
      title: 'Tính cạnh tam giác đồng dạng',
      difficulty: 'basic',
      problem: 'Cho $\\triangle A\'B\'C\' \\backsim \\triangle ABC$ với tỉ số đồng dạng $k = \\frac{2}{3}$. Biết $AB = 9\\text{ cm}$. Tính độ dài cạnh $A\'B\'$.',
      steps: [
        'Bước 1: Từ định nghĩa tam giác đồng dạng, ta có tỉ số cạnh tương ứng: $\\frac{A\'B\'}{AB} = k$.',
        'Bước 2: Thay các giá trị đã biết vào công thức: $\\frac{A\'B\'}{9} = \\frac{2}{3}$.',
        'Bước 3: Giải tìm $A\'B\'$: $A\'B\' = \\frac{2}{3} \\times 9 = 6\\text{ cm}$.',
        'Bước 4: Kết luận: Cạnh $A\'B\'$ có độ dài $6\\text{ cm}$.'
      ],
      answer: '6 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-l33-sg-01',
      title: 'Xác định tỉ số đồng dạng và viết tỉ lệ thức',
      description: 'Lập tỉ số đồng dạng k và tính độ dài các cạnh tương ứng giữa hai tam giác đồng dạng.',
      difficulty: 'basic',
      templateIds: ['g8-v2-c9-l33-tpl-01', 'g8-v2-c9-l33-tpl-02']
    },
    {
      id: 'g8-v2-c9-l33-sg-02',
      title: 'Tính chất góc và chu vi tam giác đồng dạng',
      description: 'Sử dụng các góc tương ứng bằng nhau và tỉ số chu vi để tính các yếu tố trong tam giác.',
      difficulty: 'understanding',
      templateIds: ['g8-v2-c9-l33-tpl-03', 'g8-v2-c9-l33-tpl-04', 'g8-v2-c9-l33-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v2-c9-l33-tpl-01',
      'g8-v2-c9-l33-tpl-02',
      'g8-v2-c9-l33-tpl-03',
      'g8-v2-c9-l33-tpl-04',
      'g8-v2-c9-l33-tpl-05'
    ]
  }
};
