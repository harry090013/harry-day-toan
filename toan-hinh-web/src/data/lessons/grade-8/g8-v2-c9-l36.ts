import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9L36Content: LessonContent = {
  lessonId: 'g8-v2-c9-l36',
  title: 'Bài 36. Các trường hợp đồng dạng của hai tam giác vuông',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    lessonNo: 36,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Đồng dạng tam giác vuông: góc nhọn, hai cạnh góc vuông, cạnh huyền - cạnh góc vuông.'
  },
  objectives: [
    'Giải thích được các trường hợp đồng dạng đặc biệt của hai tam giác vuông.',
    'Nhận biết và chứng minh được hai tam giác vuông đồng dạng.',
    'Áp dụng tỉ số đồng dạng và tính chất của tam giác vuông đồng dạng để tính độ dài đoạn thẳng.'
  ],
  prerequisites: [
    'Định nghĩa tam giác đồng dạng, các trường hợp đồng dạng của tam giác thường, định lí Pythagore.'
  ],
  theory: [
    {
      id: 'g8-v2-c9-l36-theory-1',
      title: '1. Hai trường hợp đồng dạng cơ bản từ tam giác thường',
      content: 'Hai tam giác vuông đồng dạng với nhau nếu:\n- **Trường hợp 1 (Góc nhọn):** Tam giác vuông này có một góc nhọn bằng góc nhọn của tam giác vuông kia.\n- **Trường hợp 2 (Hai cạnh góc vuông):** Tam giác vuông này có hai cạnh góc vuông tỉ lệ với hai cạnh góc vuông của tam giác vuông kia.',
      diagram: {
        id: 'g8-v2-c9-l36-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c9-pythagore',
        title: 'Tam giác vuông đồng dạng',
        alt: 'Tam giác vuông ABC.',
        notToScale: true,
        data: {
          a: '3',
          b: '4',
          c: '5'
        }
      }
    },
    {
      id: 'g8-v2-c9-l36-theory-2',
      title: '2. Trường hợp đồng dạng đặc biệt (Cạnh huyền - Cạnh góc vuông)',
      content: 'Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này tỉ lệ với cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó đồng dạng với nhau.',
      formulas: [
        '\\frac{A\'B\'}{AB} = \\frac{B\'C\'}{BC} \\text{ và } \\widehat{A\'} = \\widehat{A} = 90^\\circ \\Rightarrow \\triangle A\'B\'C\' \\backsim \\triangle ABC'
      ]
    }
  ],
  remember: [
    'Tỉ số hai đường cao tương ứng, hai đường trung tuyến tương ứng cũng bằng tỉ số đồng dạng $k$.',
    'Với tam giác vuông, chỉ cần thêm 1 điều kiện (1 góc nhọn bằng nhau, hoặc tỉ số hai cạnh góc vuông bằng nhau, hoặc tỉ số cạnh huyền và cạnh góc vuông bằng nhau) là đủ kết luận đồng dạng.'
  ],
  tips: [
    'Trường hợp góc nhọn là dễ chứng minh nhất, hãy tìm các góc đối đỉnh hoặc góc có cùng phụ với một góc thứ ba để chứng minh góc nhọn bằng nhau.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-l36-mistake-1',
      mistake: 'Lập tỉ số nhầm lẫn giữa cạnh góc vuông và cạnh huyền.',
      correction: 'Hãy luôn xác định rõ đâu là cạnh huyền (cạnh đối diện góc vuông) và đâu là các cạnh góc vuông để lập tỉ số chính xác.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-l36-example-1',
      title: 'Tính cạnh bằng tam giác vuông đồng dạng',
      difficulty: 'basic',
      problem: 'Cho $\\triangle ABC$ vuông tại $A$ và $\\triangle A\'B\'C\'$ vuông tại $A\'$ đồng dạng với nhau. Biết $AB = 6\\text{ cm}, AC = 8\\text{ cm}, A\'B\' = 3\\text{ cm}$. Tính độ dài cạnh $A\'C\'$.',
      steps: [
        'Bước 1: Vì $\\triangle A\'B\'C\' \\backsim \\triangle ABC$ nên ta có tỉ số giữa các cạnh góc vuông: $\\frac{A\'B\'}{AB} = \\frac{A\'C\'}{AC}$.',
        'Bước 2: Thay các số liệu đã biết: $\\frac{3}{6} = \\frac{A\'C\'}{8}$.',
        'Bước 3: Giải tìm $A\'C\'$: $A\'C\' = \\frac{3 \\times 8}{6} = 4\\text{ cm}$.',
        'Bước 4: Trả lời: Cạnh $A\'C\'$ có độ dài $4\\text{ cm}$.'
      ],
      answer: '4 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-l36-sg-01',
      title: 'Chứng minh hai tam giác vuông đồng dạng',
      description: 'Nhận biết và chọn trường hợp phù hợp (góc nhọn, hai cạnh góc vuông, cạnh huyền - cạnh góc vuông) để chứng minh đồng dạng.',
      difficulty: 'basic',
      templateIds: ['g8-v2-c9-l36-tpl-01', 'g8-v2-c9-l36-tpl-02']
    },
    {
      id: 'g8-v2-c9-l36-sg-02',
      title: 'Tính toán các yếu tố trong tam giác vuông đồng dạng',
      description: 'Dùng tỉ số đồng dạng để tính độ dài các cạnh, đường cao hoặc tỉ số diện tích.',
      difficulty: 'understanding',
      templateIds: ['g8-v2-c9-l36-tpl-03', 'g8-v2-c9-l36-tpl-04', 'g8-v2-c9-l36-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v2-c9-l36-tpl-01',
      'g8-v2-c9-l36-tpl-02',
      'g8-v2-c9-l36-tpl-03',
      'g8-v2-c9-l36-tpl-04',
      'g8-v2-c9-l36-tpl-05'
    ]
  }
};
