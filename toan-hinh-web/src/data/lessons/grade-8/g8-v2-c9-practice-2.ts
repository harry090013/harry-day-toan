import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9Practice2Content: LessonContent = {
  lessonId: 'g8-v2-c9-practice-2',
  title: 'Luyện tập chung trang 108',
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
    notes: 'Luyện tập về ba trường hợp đồng dạng (g.g), (c.g.c), (c.c.c) và ứng dụng vào tam giác vuông.'
  },
  objectives: [
    'Vận dụng thành thạo ba trường hợp đồng dạng của tam giác.',
    'Nhận biết và chứng minh đồng dạng trong các hình vẽ cụ thể.',
    'Áp dụng tam giác đồng dạng vào tam giác vuông và đường cao.'
  ],
  prerequisites: [
    'Định nghĩa và tính chất tam giác đồng dạng.',
    'Ba trường hợp đồng dạng: (g.g), (c.g.c), (c.c.c).'
  ],
  theory: [
    {
      id: 'g8-v2-c9-practice-2-theory-1',
      title: 'Ba trường hợp đồng dạng',
      content: '**1. Trường hợp (g.g)**: Hai tam giác có hai cặp góc tương ứng bằng nhau thì đồng dạng.\n\n**2. Trường hợp (c.g.c)**: Hai tam giác có hai cặp cạnh tỉ lệ và góc xen giữa bằng nhau thì đồng dạng.\n\n**3. Trường hợp (c.c.c)**: Hai tam giác có ba cặp cạnh tương ứng tỉ lệ thì đồng dạng.\n\n**Tam giác vuông**: Nếu $\\triangle ABC$ vuông tại $C$, $CH$ là đường cao thì $\\triangle AHC \\sim \\triangle ACB$ và $\\triangle BHC \\sim \\triangle BCA$.',
      diagram: {
        id: 'g8-v2-c9-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Các trường hợp đồng dạng',
        alt: 'Minh họa ba trường hợp đồng dạng của tam giác.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Ba trường hợp đồng dạng: (g.g), (c.g.c), (c.c.c).',
    'Trong tam giác vuông với đường cao: $CH^2 = AH \\cdot BH$, $AC^2 = AH \\cdot AB$, $BC^2 = BH \\cdot AB$.'
  ],
  tips: [
    'Với trường hợp (g.g), chỉ cần tìm hai cặp góc bằng nhau (góc thứ ba tự suy ra).',
    'Với tam giác vuông và đường cao, xác định đúng cặp tam giác đồng dạng trước khi lập tỉ lệ.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-practice-2-mistake-1',
      mistake: 'Nhầm thứ tự đỉnh khi viết ký hiệu đồng dạng trong tam giác vuông với đường cao.',
      correction: 'Phải xác định đúng góc tương ứng: $\\triangle AHC$ và $\\triangle ACB$ cùng có $\\widehat{A}$ và góc vuông.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-practice-2-example-1',
      title: 'Nhận biết trường hợp đồng dạng (c.c.c)',
      difficulty: 'understanding',
      problem: 'Tam giác $ABC$ có các cạnh $3, 4, 5$ cm. Tam giác $A\'B\'C\'$ có các cạnh $6, 8, 10$ cm. Hỏi hai tam giác có đồng dạng không?',
      steps: [
        'Tính tỉ số các cạnh tương ứng: $\\frac{6}{3} = \\frac{8}{4} = \\frac{10}{5} = 2$.',
        'Ba cặp cạnh tỉ lệ bằng nhau nên hai tam giác đồng dạng theo (c.c.c) với tỉ số $k = 2$.'
      ],
      answer: 'Hai tam giác đồng dạng theo (c.c.c), k = 2'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-practice-2-sg-01',
      title: 'Ba trường hợp đồng dạng',
      description: 'Nhận biết và áp dụng các trường hợp đồng dạng.',
      difficulty: 'understanding',
      templateIds: ['g8-c9-practice-2-tpl-01', 'g8-c9-practice-2-tpl-02', 'g8-c9-practice-2-tpl-03']
    },
    {
      id: 'g8-v2-c9-practice-2-sg-02',
      title: 'Ứng dụng trong tam giác vuông',
      description: 'Bài toán về đường cao và đồng dạng trong tam giác vuông.',
      difficulty: 'advanced',
      templateIds: ['g8-c9-practice-2-tpl-04', 'g8-c9-practice-2-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c9-practice-2-tpl-01', 'g8-c9-practice-2-tpl-02', 'g8-c9-practice-2-tpl-03', 'g8-c9-practice-2-tpl-04', 'g8-c9-practice-2-tpl-05']
  }
};
