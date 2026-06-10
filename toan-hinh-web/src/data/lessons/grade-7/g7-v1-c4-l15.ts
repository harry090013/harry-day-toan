import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4L15Content: LessonContent = {
  lessonId: 'g7-v1-c4-l15',
  title: 'Bài 15. Các trường hợp bằng nhau của tam giác vuông',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 15,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt về các trường hợp bằng nhau của tam giác vuông: cạnh góc vuông, cạnh huyền.'
  },
  objectives: [
    'Biết và áp dụng các trường hợp bằng nhau của tam giác vuông từ trường hợp tam giác thường.',
    'Phát biểu và áp dụng trường hợp bằng nhau Cạnh huyền - Cạnh góc vuông và Cạnh huyền - Góc nhọn.',
    'Nhận biết và phân biệt chính xác cạnh huyền và cạnh góc vuông trong tam giác vuông.'
  ],
  prerequisites: [
    'Khái niệm tam giác vuông, các trường hợp bằng nhau c-c-c, c-g-c, g-c-g.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-l15-theory-1',
      title: '1. Các trường hợp suy ra từ tam giác thường',
      content: 'Hai tam giác vuông bằng nhau nếu có:\n– **Hai cạnh góc vuông bằng nhau** (suy ra từ c-g-c).\n– **Một cạnh góc vuông và một góc nhọn kề cạnh ấy bằng nhau** (suy ra từ g-c-g).',
      diagram: {
        id: 'g7-v1-c4-l15-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-right-triangle',
        title: 'Tam giác vuông ABC vuông tại B',
        alt: 'Tam giác vuông ABC vuông tại B.',
        notToScale: true,
        data: {
          labels: ['A', 'B', 'C']
        }
      }
    },
    {
      id: 'g7-v1-c4-l15-theory-2',
      title: '2. Các trường hợp bằng nhau đặc biệt của tam giác vuông',
      content: '– **Trường hợp Cạnh huyền – Góc nhọn**: Nếu cạnh huyền và một góc nhọn của tam giác vuông này bằng cạnh huyền và một góc nhọn của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.\n– **Trường hợp Cạnh huyền – Cạnh góc vuông**: Nếu cạnh huyền và một cạnh góc vuông của tam giác vuông này bằng cạnh huyền và một cạnh góc vuông của tam giác vuông kia thì hai tam giác vuông đó bằng nhau.',
      formulas: [
        '\\text{Cạnh huyền } BC = B\'C\', \\ \\widehat{C} = \\widehat{C\'} \\Rightarrow \\triangle ABC = \\triangle A\'B\'C\' \\text{ (ch - gn)}',
        '\\text{Cạnh huyền } BC = B\'C\', \\ AB = A\'B\' \\Rightarrow \\triangle ABC = \\triangle A\'B\'C\' \\text{ (ch - cgv)}'
      ]
    }
  ],
  remember: [
    'Cạnh đối diện với góc vuông luôn là cạnh huyền (cạnh dài nhất). Hai cạnh tạo nên góc vuông là cạnh góc vuông.',
    'Trước khi kết luận hai tam giác vuông bằng nhau, phải ghi rõ giả thiết góc vuông $90^\\circ$ của hai tam giác.'
  ],
  tips: [
    'Nếu hai tam giác vuông có cạnh huyền bằng nhau, ta lập tức đi tìm thêm 1 cạnh góc vuông bằng nhau nữa (để dùng ch-cgv) hoặc tìm thêm 1 góc nhọn bằng nhau nữa (để dùng ch-gn).'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-l15-mistake-1',
      mistake: 'Coi cạnh góc vuông là cạnh huyền trong tính toán.',
      correction: 'Hãy vẽ góc vuông trước, cạnh nào đối diện với góc vuông đó mới là cạnh huyền.'
    },
    {
      id: 'g7-v1-c4-l15-mistake-2',
      mistake: 'Quên không ghi điều kiện hai tam giác vuông khi trình bày chứng minh.',
      correction: 'Phải ghi dòng mở đầu: "Xét $\\triangle ABC$ vuông tại $A$ và $\\triangle A\'B\'C\'$ vuông tại $A\'$."'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-l15-example-1',
      title: 'Nhận biết cạnh huyền và cạnh góc vuông',
      difficulty: 'basic',
      problem: 'Cho tam giác $DEF$ vuông tại $D$. Hãy chỉ ra cạnh huyền và hai cạnh góc vuông của tam giác đó.',
      steps: [
        'Bước 1: Góc vuông là góc tại đỉnh $D$ ($\\widehat{D} = 90^\\circ$).',
        'Bước 2: Cạnh đối diện với đỉnh $D$ là cạnh $EF$. Đây là cạnh huyền.',
        'Bước 3: Hai cạnh tạo nên góc vuông tại đỉnh $D$ là $DE$ và $DF$. Đây là hai cạnh góc vuông.',
        'Bước 4: Kết luận: Cạnh huyền là $EF$; Hai cạnh góc vuông là $DE, DF$.'
      ],
      answer: 'Cạnh huyền: EF, cạnh góc vuông: DE, DF'
    },
    {
      id: 'g7-v1-c4-l15-example-2',
      title: 'Chứng minh tam giác vuông bằng nhau',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ cân tại $A$. Kẻ $AH \\perp BC$ tại $H$. Chứng minh rằng $HB = HC$.',
      steps: [
        'Bước 1: Xét hai tam giác vuông $\\triangle AHB$ và $\\triangle AHC$ vuông tại $H$ (vì $AH \\perp BC$).',
        'Bước 2: Chỉ ra các yếu tố bằng nhau:\n– Cạnh huyền $AB = AC$ (vì $\\triangle ABC$ cân tại $A$),\n– Cạnh góc vuông $AH$ là cạnh chung.',
        'Bước 3: Suy ra $\\triangle AHB = \\triangle AHC$ theo trường hợp Cạnh huyền – Cạnh góc vuông (ch-cgv).',
        'Bước 4: Từ hai tam giác bằng nhau, ta suy ra các cạnh tương ứng bằng nhau: $HB = HC$ (hai cạnh tương ứng).'
      ],
      answer: 'HB = HC (hai cạnh tương ứng)',
      diagram: {
        id: 'g7-v1-c4-l15-example-2-diagram',
        placement: 'worked_example',
        variant: 'g7-right-triangle',
        title: 'Tam giác cân ABC và đường cao AH',
        alt: 'Tam giác cân ABC có AH vuông góc với BC.',
        notToScale: true,
        data: {
          symmetric: true,
          labels: ['A', 'B', 'C', 'H']
        }
      }
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-l15-sg-01',
      title: 'Nhận diện các yếu tố trong tam giác vuông',
      description: 'Chỉ ra cạnh huyền, cạnh góc vuông và góc nhọn của tam giác vuông.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c4-l15-tpl-02']
    },
    {
      id: 'g7-v1-c4-l15-sg-02',
      title: 'Áp dụng các trường hợp bằng nhau tam giác vuông',
      description: 'Chứng minh hai tam giác vuông bằng nhau bằng cạnh huyền - góc nhọn hoặc cạnh huyền - cạnh góc vuông.',
      difficulty: 'understanding',
      templateIds: ['g7-v1-c4-l15-tpl-01', 'g7-v1-c4-l15-tpl-03', 'g7-v1-c4-l15-tpl-04', 'g7-v1-c4-l15-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c4-l15-tpl-01',
      'g7-v1-c4-l15-tpl-02',
      'g7-v1-c4-l15-tpl-03',
      'g7-v1-c4-l15-tpl-04',
      'g7-v1-c4-l15-tpl-05'
    ]
  }
};
