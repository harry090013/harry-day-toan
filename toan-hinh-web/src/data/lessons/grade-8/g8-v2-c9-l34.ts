import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9L34Content: LessonContent = {
  lessonId: 'g8-v2-c9-l34',
  title: 'Bài 34. Ba trường hợp đồng dạng của hai tam giác',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    lessonNo: 34,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Ba trường hợp đồng dạng cạnh-cạnh-cạnh, cạnh-góc-cạnh, góc-góc.'
  },
  objectives: [
    'Giải thích được trường hợp đồng dạng thứ nhất (cạnh-cạnh-cạnh).',
    'Giải thích được trường hợp đồng dạng thứ hai (cạnh-góc-cạnh).',
    'Giải thích được trường hợp đồng dạng thứ ba (góc-góc).',
    'Vận dụng các trường hợp đồng dạng để chứng minh hai tam giác đồng dạng và giải quyết bài toán thực tế.'
  ],
  prerequisites: [
    'Khái niệm hai tam giác đồng dạng, tỉ lệ thức, so sánh góc.'
  ],
  theory: [
    {
      id: 'g8-v2-c9-l34-theory-1',
      title: '1. Trường hợp đồng dạng thứ nhất: Cạnh - Cạnh - Cạnh (c.c.c)',
      content: 'Nếu ba cạnh của tam giác này tỉ lệ với ba cạnh của tam giác kia thì hai tam giác đó đồng dạng với nhau.',
      formulas: [
        '\\frac{A\'B\'}{AB} = \\frac{B\'C\'}{BC} = \\frac{C\'A\'}{CA} \\Rightarrow \\triangle A\'B\'C\' \\backsim \\triangle ABC \\quad (c.c.c)'
      ]
    },
    {
      id: 'g8-v2-c9-l34-theory-2',
      title: '2. Trường hợp đồng dạng thứ hai: Cạnh - Góc - Cạnh (c.g.c)',
      content: 'Nếu hai cạnh của tam giác này tỉ lệ với hai cạnh của tam giác kia và hai góc tạo bởi các cặp cạnh đó bằng nhau thì hai tam giác đó đồng dạng với nhau.',
      diagram: {
        id: 'g8-v2-c9-l34-theory-2-diagram',
        placement: 'theory',
        variant: 'g8-c9-similarity',
        title: 'Trường hợp đồng dạng c-g-c',
        alt: 'Hai tam giác A\'B\'C\' và ABC có góc A\' bằng góc A và các cạnh kề tỉ lệ.',
        notToScale: true,
        data: {
          k: 0.7,
          labelA: 'A',
          labelB: 'B',
          labelC: 'C'
        }
      },
      formulas: [
        '\\frac{A\'B\'}{AB} = \\frac{A\'C\'}{AC} \\text{ và } \\widehat{A\'} = \\widehat{A} \\Rightarrow \\triangle A\'B\'C\' \\backsim \\triangle ABC \\quad (c.g.c)'
      ]
    },
    {
      id: 'g8-v2-c9-l34-theory-3',
      title: '3. Trường hợp đồng dạng thứ ba: Góc - Góc (g.g)',
      content: 'Nếu hai góc của tam giác này lần lượt bằng hai góc của tam giác kia thì hai tam giác đó đồng dạng với nhau.',
      formulas: [
        '\\widehat{A\'} = \\widehat{A} \\text{ và } \\widehat{B\'} = \\widehat{B} \\Rightarrow \\triangle A\'B\'C\' \\backsim \\triangle ABC \\quad (g.g)'
      ]
    }
  ],
  remember: [
    'Trường hợp góc-góc (g.g) là trường hợp thường dùng nhất trong thực tế chứng minh tam giác đồng dạng vì chỉ cần chỉ ra hai góc bằng nhau.',
    'Đối với trường hợp c.g.c, góc bằng nhau phải là **góc xen giữa** hai cạnh tỉ lệ.'
  ],
  tips: [
    'Khi làm bài tập trường hợp c.c.c, hãy sắp xếp các cạnh của mỗi tam giác theo thứ tự độ dài tăng dần rồi lập tỉ số tương ứng để kiểm tra nhanh.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-l34-mistake-1',
      mistake: 'Sử dụng góc không xen giữa cho trường hợp cạnh-góc-cạnh.',
      correction: 'Hãy vẽ góc và đảm bảo góc đó nằm kề giữa hai cạnh đang xét tỉ lệ. Ví dụ, tỉ lệ là $AB/A\'B\' = AC/A\'C\'$ thì góc bắt buộc phải là $\\widehat{A}$ và $\\widehat{A\'}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-l34-example-1',
      title: 'Chứng minh hai tam giác đồng dạng',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ có $AB = 6\\text{ cm}, AC = 9\\text{ cm}$. Trên các cạnh $AB, AC$ lấy lần lượt $M, N$ sao cho $AM = 3\\text{ cm}, AN = 2\\text{ cm}$. Chứng minh $\\triangle AMN \\backsim \\triangle ACB$.',
      steps: [
        'Bước 1: Lập tỉ số các cạnh bên kề góc chung $\\widehat{A}$:\n- Tỉ số thứ nhất: $\\frac{AM}{AC} = \\frac{3}{9} = \\frac{1}{3}$.\n- Tỉ số thứ hai: $\\frac{AN}{AB} = \\frac{2}{6} = \\frac{1}{3}$.',
        'Bước 2: Ta thấy $\\frac{AM}{AC} = \\frac{AN}{AB} = \\frac{1}{3}$.',
        'Bước 3: Xét hai tam giác $\\triangle AMN$ và $\\triangle ACB$ có:\n- Góc $\\widehat{A}$ chung.\n- Tỉ lệ cạnh kề góc $\\widehat{A}$: $\\frac{AM}{AC} = \\frac{AN}{AB}$.',
        'Bước 4: Kết luận: Theo trường hợp đồng dạng thứ hai (c.g.c), ta có $\\triangle AMN \\backsim \\triangle ACB$.'
      ],
      answer: 'Chứng minh thành công (c.g.c)'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-l34-sg-01',
      title: 'Nhận biết tam giác đồng dạng theo ba trường hợp',
      description: 'Lựa chọn và áp dụng trường hợp c.c.c, c.g.c hoặc g.g để khẳng định hai tam giác đồng dạng.',
      difficulty: 'basic',
      templateIds: ['g8-v2-c9-l34-tpl-01', 'g8-v2-c9-l34-tpl-02', 'g8-v2-c9-l34-tpl-03']
    },
    {
      id: 'g8-v2-c9-l34-sg-02',
      title: 'Ứng dụng chứng minh tỉ lệ đoạn thẳng',
      description: 'Từ tam giác đồng dạng suy ra tỉ lệ thức đoạn thẳng và chứng minh đẳng thức tích.',
      difficulty: 'understanding',
      templateIds: ['g8-v2-c9-l34-tpl-04', 'g8-v2-c9-l34-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v2-c9-l34-tpl-01',
      'g8-v2-c9-l34-tpl-02',
      'g8-v2-c9-l34-tpl-03',
      'g8-v2-c9-l34-tpl-04',
      'g8-v2-c9-l34-tpl-05'
    ]
  }
};
