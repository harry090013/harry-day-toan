import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9Practice1Content: LessonContent = {
  lessonId: 'g8-v2-c9-practice-1',
  title: 'Luyện tập chung trang 91',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập về tam giác đồng dạng: định nghĩa, tỉ số đồng dạng, tính chất chu vi và diện tích.'
  },
  objectives: [
    'Nhận biết và sử dụng đúng định nghĩa tam giác đồng dạng.',
    'Tính các cạnh tương ứng và tỉ số đồng dạng.',
    'Tính chu vi và diện tích của tam giác đồng dạng.'
  ],
  prerequisites: [
    'Đã học định nghĩa tam giác đồng dạng.',
    'Biết các trường hợp đồng dạng cơ bản.'
  ],
  theory: [
    {
      id: 'g8-v2-c9-practice-1-theory-1',
      title: 'Tam giác đồng dạng và tỉ số',
      content: '**Định nghĩa**: $\\triangle ABC \\sim \\triangle A\'B\'C\'$ khi và chỉ khi:\n- Ba cặp góc tương ứng bằng nhau: $\\widehat{A} = \\widehat{A\'}$, $\\widehat{B} = \\widehat{B\'}$, $\\widehat{C} = \\widehat{C\'}$.\n- Ba cặp cạnh tương ứng tỉ lệ: $\\frac{A\'B\'}{AB} = \\frac{B\'C\'}{BC} = \\frac{A\'C\'}{AC} = k$.\n\n**Tỉ lệ chu vi**: $\\frac{P\'}{P} = k$.\n\n**Tỉ lệ diện tích**: $\\frac{S\'}{S} = k^2$.',
      diagram: {
        id: 'g8-v2-c9-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hai tam giác đồng dạng',
        alt: 'Hai tam giác ABC và A\'B\'C\' đồng dạng với nhau theo tỉ số k.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Tỉ số đồng dạng $k = \\frac{A\'B\'}{AB} = \\frac{B\'C\'}{BC} = \\frac{A\'C\'}{AC}$.',
    'Chu vi tỉ lệ với $k$, diện tích tỉ lệ với $k^2$.'
  ],
  tips: [
    'Luôn xác định đúng thứ tự đỉnh tương ứng khi viết ký hiệu đồng dạng.',
    'Nếu đề cho chu vi hoặc diện tích, dùng tỉ lệ để tính ngược lại tỉ số $k$.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-practice-1-mistake-1',
      mistake: 'Viết sai thứ tự đỉnh tương ứng trong ký hiệu đồng dạng.',
      correction: 'Phải viết đúng cặp đỉnh tương ứng: nếu $\\widehat{A} = \\widehat{A\'}$ thì đỉnh $A$ ứng với đỉnh $A\'$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-practice-1-example-1',
      title: 'Tính cạnh theo tỉ số đồng dạng',
      difficulty: 'basic',
      problem: '$\\triangle ABC \\sim \\triangle A\'B\'C\'$ với tỉ số $k = 3$. Biết $AB = 4$ cm. Tính $A\'B\'$.',
      steps: [
        'Tỉ số đồng dạng $k = \\frac{A\'B\'}{AB} = 3$.',
        '$A\'B\' = k \\times AB = 3 \\times 4 = 12$ cm.'
      ],
      answer: "A'B' = 12 cm"
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-practice-1-sg-01',
      title: 'Tỉ số đồng dạng và cạnh tương ứng',
      description: 'Tính các yếu tố liên quan đến tỉ số đồng dạng.',
      difficulty: 'basic',
      templateIds: ['g8-c9-practice-1-tpl-01', 'g8-c9-practice-1-tpl-02', 'g8-c9-practice-1-tpl-03']
    },
    {
      id: 'g8-v2-c9-practice-1-sg-02',
      title: 'Chu vi và diện tích tam giác đồng dạng',
      description: 'Tính chu vi và diện tích khi biết tỉ số đồng dạng.',
      difficulty: 'understanding',
      templateIds: ['g8-c9-practice-1-tpl-04', 'g8-c9-practice-1-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c9-practice-1-tpl-01', 'g8-c9-practice-1-tpl-02', 'g8-c9-practice-1-tpl-03', 'g8-c9-practice-1-tpl-04', 'g8-c9-practice-1-tpl-05']
  }
};
