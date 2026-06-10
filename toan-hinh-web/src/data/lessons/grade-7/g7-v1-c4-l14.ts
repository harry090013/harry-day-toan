import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4L14Content: LessonContent = {
  lessonId: 'g7-v1-c4-l14',
  title: 'Bài 14. Trường hợp bằng nhau thứ hai và thứ ba của tam giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 14,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Trường hợp bằng nhau thứ hai Cạnh - Góc - Cạnh (c-g-c) và thứ ba Góc - Cạnh - Góc (g-c-g).'
  },
  objectives: [
    'Phát biểu và vận dụng trường hợp bằng nhau thứ hai Cạnh - Góc - Cạnh (c-g-c) của tam giác.',
    'Phát biểu và vận dụng trường hợp bằng nhau thứ ba Góc - Cạnh - Góc (g-c-g) của tam giác.',
    'Nhận biết góc xen giữa hai cạnh và cạnh xen giữa hai góc.'
  ],
  prerequisites: [
    'Khái niệm hai tam giác bằng nhau, trường hợp c-c-c.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-l14-theory-1',
      title: '1. Trường hợp bằng nhau thứ hai: Cạnh – Góc – Cạnh (c-g-c)',
      content: 'Nếu hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia thì hai tam giác đó bằng nhau.\n*Chú ý*: Góc bằng nhau bắt buộc phải là **góc xen giữa** hai cạnh đã cho.',
      formulas: [
        'AB = A\'B\', \\ \\widehat{B} = \\widehat{B\'}, \\ BC = B\'C\' \\Rightarrow \\triangle ABC = \\triangle A\'B\'C\' \\text{ (c-g-c)}'
      ],
      diagram: {
        id: 'g7-v1-c4-l14-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-triangle-congruence',
        title: 'Trường hợp bằng nhau Cạnh - Góc - Cạnh (c-g-c)',
        alt: 'Hai tam giác bằng nhau theo trường hợp cạnh-góc-cạnh.',
        notToScale: true,
        data: {
          type: 'sas',
          label1: ['A', 'B', 'C'],
          label2: ['A\'', 'B\'', 'C\'']
        }
      }
    },
    {
      id: 'g7-v1-c4-l14-theory-2',
      title: '2. Trường hợp bằng nhau thứ ba: Góc – Cạnh – Góc (g-c-g)',
      content: 'Nếu một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia thì hai tam giác đó bằng nhau.\n*Chú ý*: Cạnh bằng nhau bắt buộc phải là **cạnh kề/xen giữa** hai góc đã cho.',
      formulas: [
        '\\widehat{B} = \\widehat{B\'}, \\ BC = B\'C\', \\ \\widehat{C} = \\widehat{C\'} \\Rightarrow \\triangle ABC = \\triangle A\'B\'C\' \\text{ (g-c-g)}'
      ],
      diagram: {
        id: 'g7-v1-c4-l14-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-triangle-congruence',
        title: 'Trường hợp bằng nhau Góc - Cạnh - Góc (g-c-g)',
        alt: 'Hai tam giác bằng nhau theo trường hợp góc-cạnh-góc.',
        notToScale: true,
        data: {
          type: 'asa',
          label1: ['A', 'B', 'C'],
          label2: ['A\'', 'B\'', 'C\'']
        }
      }
    }
  ],
  remember: [
    'Với c-g-c: Góc phải nằm xen giữa hai cạnh. (Ví dụ góc B xen giữa cạnh AB và BC).',
    'Với g-c-g: Cạnh phải nằm kề/xen giữa hai góc. (Ví dụ cạnh BC kề với góc B và góc C).'
  ],
  tips: [
    'Khi viết chứng minh, luôn ghi các điều kiện theo đúng thứ tự tên gọi của trường hợp để kiểm tra tính xen giữa dễ dàng.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-l14-mistake-1',
      mistake: 'Kết luận hai tam giác bằng nhau c-g-c khi góc không xen giữa.',
      correction: 'Ví dụ cho $AB=A\'B\'$, $AC=A\'C\'$ và góc $\\widehat{B}=\\widehat{B\'}$. Đây không phải góc xen giữa (góc xen giữa phải là $\\widehat{A}=\\widehat{A\'}$), nên hai tam giác chưa chắc bằng nhau.'
    },
    {
      id: 'g7-v1-c4-l14-mistake-2',
      mistake: 'Nhầm lẫn giữa góc xen giữa và cạnh xen giữa.',
      correction: 'Góc xen giữa là góc tạo bởi hai cạnh. Cạnh xen giữa là đoạn nối hai đỉnh chứa hai góc.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-l14-example-1',
      title: 'Nhận biết góc xen giữa',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$. Góc nào là góc xen giữa hai cạnh $AB$ và $AC$?',
      steps: [
        'Bước 1: Hai cạnh $AB$ và $AC$ chung nhau đỉnh $A$.',
        'Bước 2: Góc được tạo bởi hai tia $AB$ và $AC$ chính là góc tại đỉnh chung $A$.',
        'Bước 3: Vậy góc xen giữa hai cạnh $AB$ và $AC$ là góc $\\widehat{A}$ (hay $\\widehat{BAC}$).'
      ],
      answer: 'Góc A'
    },
    {
      id: 'g7-v1-c4-l14-example-2',
      title: 'Chứng minh tam giác bằng nhau c-g-c',
      difficulty: 'understanding',
      problem: 'Cho đoạn thẳng $AB$ có trung điểm là $O$. Đường thẳng vuông góc với $AB$ tại $O$ lấy hai điểm $C$ và $D$ đối xứng nhau qua $O$. Chứng minh $\\triangle AOC = \\triangle BOD$.',
      steps: [
        'Bước 1: Xét hai tam giác vuông $\\triangle AOC$ và $\\triangle BOD$.',
        'Bước 2: Liệt kê các yếu tố bằng nhau:\n– $OA = OB$ (vì $O$ là trung điểm của $AB$),\n– $\\widehat{AOC} = \\widehat{BOD} = 90^\\circ$ (vì $CD \\perp AB$),\n– $OC = OD$ (vì $C$ và $D$ đối xứng qua $O$).',
        'Bước 3: Nhận xét góc $\\widehat{AOC}$ xen giữa hai cạnh $OA, OC$; góc $\\widehat{BOD}$ xen giữa $OB, OD$.',
        'Bước 4: Kết luận $\\triangle AOC = \\triangle BOD$ (c-g-c).'
      ],
      answer: 'Tam giác AOC = tam giác BOD (c-g-c)'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-l14-sg-01',
      title: 'Phân biệt góc xen giữa và cạnh xen giữa',
      description: 'Nhận biết góc xen giữa hai cạnh và cạnh xen giữa hai góc trên các hình vẽ tam giác cụ thể.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c4-l14-tpl-03']
    },
    {
      id: 'g7-v1-c4-l14-sg-02',
      title: 'Vận dụng trường hợp c-g-c và g-c-g',
      description: 'Chứng minh tam giác bằng nhau và tìm các yếu tố bằng nhau thông qua c-g-c và g-c-g.',
      difficulty: 'understanding',
      templateIds: ['g7-v1-c4-l14-tpl-01', 'g7-v1-c4-l14-tpl-02', 'g7-v1-c4-l14-tpl-04', 'g7-v1-c4-l14-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c4-l14-tpl-01',
      'g7-v1-c4-l14-tpl-02',
      'g7-v1-c4-l14-tpl-03',
      'g7-v1-c4-l14-tpl-04',
      'g7-v1-c4-l14-tpl-05'
    ]
  }
};
