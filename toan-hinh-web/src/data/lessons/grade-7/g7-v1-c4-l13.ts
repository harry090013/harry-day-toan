import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4L13Content: LessonContent = {
  lessonId: 'g7-v1-c4-l13',
  title: 'Bài 13. Hai tam giác bằng nhau. Trường hợp bằng nhau thứ nhất của tam giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 13,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khai niệm hai tam giác bằng nhau và trường hợp bằng nhau thứ nhất Cạnh - Cạnh - Cạnh (c-c-c).'
  },
  objectives: [
    'Hiểu định nghĩa hai tam giác bằng nhau và cách viết ký hiệu bằng nhau đúng thứ tự đỉnh.',
    'Phát biểu và vận dụng trường hợp bằng nhau thứ nhất Cạnh - Cạnh - Cạnh (c-c-c) của tam giác.',
    'Suy ra được các cạnh tương ứng và góc tương ứng bằng nhau từ hai tam giác bằng nhau.'
  ],
  prerequisites: [
    'Khái niệm góc, đoạn thẳng và kỹ năng đo đạc cơ bản.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-l13-theory-1',
      title: '1. Hai tam giác bằng nhau',
      content: 'Hai tam giác $ABC$ và $A\'B\'C\'$ bằng nhau là hai tam giác có các cạnh tương ứng bằng nhau và các góc tương ứng bằng nhau:\n– Cạnh bằng nhau: $AB = A\'B\'$, $BC = B\'C\'$, $AC = A\'C\'$.\n– Góc bằng nhau: $\\widehat{A} = \\widehat{A\'}$, $\\widehat{B} = \\widehat{B\'}$, $\\widehat{C} = \\widehat{C\'}$.\nKý hiệu: $\\triangle ABC = \\triangle A\'B\'C\'$ (viết các đỉnh tương ứng theo cùng thứ tự).',
      diagram: {
        id: 'g7-v1-c4-l13-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-triangle-congruence',
        title: 'Hai tam giác bằng nhau ABC và A\'B\'C\'',
        alt: 'Hai tam giác ABC và A\'B\'C\' bằng nhau có các cạnh tương ứng bằng nhau.',
        notToScale: true,
        data: {
          type: 'sss',
          label1: ['A', 'B', 'C'],
          label2: ['A\'', 'B\'', 'C\'']
        }
      }
    },
    {
      id: 'g7-v1-c4-l13-theory-2',
      title: '2. Trường hợp bằng nhau thứ nhất: Cạnh – Cạnh – Cạnh (c-c-c)',
      content: 'Nếu ba cạnh của tam giác này bằng ba cạnh của tam giác kia thì hai tam giác đó bằng nhau.',
      formulas: [
        'AB = A\'B\', \\ BC = B\'C\', \\ AC = A\'C\' \\Rightarrow \\triangle ABC = \\triangle A\'B\'C\' \\text{ (c-c-c)}'
      ]
    }
  ],
  remember: [
    'Viết ký hiệu bằng nhau $\\triangle ABC = \\triangle A\'B\'C\'$ bắt buộc các đỉnh phải tương ứng. Ví dụ nếu đỉnh A tương ứng A\', B tương ứng B\', C tương ứng C\' thì không được viết $\\triangle ABC = \\triangle B\'A\'C\'$.'
  ],
  tips: [
    'Để kiểm tra hai tam giác bằng nhau theo trường hợp c-c-c, ta chỉ cần tìm 3 cặp cạnh bằng nhau từng đôi một, không cần quan tâm đến các góc.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-l13-mistake-1',
      mistake: 'Viết sai thứ tự đỉnh tương ứng khi viết ký hiệu bằng nhau.',
      correction: 'Hãy lập bảng tương ứng đỉnh trước: Đỉnh A tương ứng đỉnh nào? Đỉnh B tương ứng đỉnh nào? Sau đó ghép đúng thứ tự.'
    },
    {
      id: 'g7-v1-c4-l13-mistake-2',
      mistake: 'Suy ra cạnh bằng nhau nhưng không tương ứng.',
      correction: 'Từ $\\triangle ABC = \\triangle MNP$, ta chỉ được suy ra các cặp cạnh tương ứng ở cùng vị trí ký hiệu: $AB = MN$ (vị trí 1-2), $BC = NP$ (vị trí 2-3), $AC = MP$ (vị trí 1-3).'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-l13-example-1',
      title: 'Xác định cạnh tương ứng bằng nhau',
      difficulty: 'basic',
      problem: 'Cho biết $\\triangle ABC = \\triangle MNP$. Cạnh nào của tam giác $MNP$ có độ dài bằng cạnh $BC$?',
      steps: [
        'Bước 1: Nhìn vào ký hiệu $\\triangle ABC = \\triangle MNP$, ta đối chiếu thứ tự các đỉnh.',
        'Bước 2: Cạnh $BC$ được tạo từ đỉnh thứ 2 ($B$) và đỉnh thứ 3 ($C$).',
        'Bước 3: Đỉnh tương ứng với $B$ là $N$ (vị trí thứ 2), đỉnh tương ứng với $C$ là $P$ (vị trí thứ 3).',
        'Bước 4: Vậy cạnh tương ứng bằng với $BC$ là cạnh $NP$.'
      ],
      answer: 'NP'
    },
    {
      id: 'g7-v1-c4-l13-example-2',
      title: 'Chứng minh tam giác bằng nhau c-c-c',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ và tam giác $ABD$ có $AC = AD$, $BC = BD$. Chứng minh rằng $\\triangle CAB = \\triangle DAB$.',
      steps: [
        'Bước 1: Xét hai tam giác $\\triangle CAB$ và $\\triangle DAB$.',
        'Bước 2: Liệt kê các cặp cạnh bằng nhau:\n– $AC = AD$ (theo giả thiết),\n– $BC = BD$ (theo giả thiết),\n– Cạnh $AB$ là cạnh chung.',
        'Bước 3: Vì có 3 cặp cạnh tương ứng bằng nhau nên $\\triangle CAB = \\triangle DAB$ (theo trường hợp cạnh-cạnh-cạnh).'
      ],
      answer: 'Tam giác CAB = tam giác DAB (c-c-c)'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-l13-sg-01',
      title: 'Xác định yếu tố tương ứng',
      description: 'Nhận biết các đỉnh, góc, cạnh tương ứng từ ký hiệu hai tam giác bằng nhau.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c4-l13-tpl-02', 'g7-v1-c4-l13-tpl-03', 'g7-v1-c4-l13-tpl-04']
    },
    {
      id: 'g7-v1-c4-l13-sg-02',
      title: 'Áp dụng trường hợp c-c-c',
      description: 'Chứng minh hai tam giác bằng nhau theo c-c-c và kiểm tra điều kiện.',
      difficulty: 'understanding',
      templateIds: ['g7-v1-c4-l13-tpl-01', 'g7-v1-c4-l13-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c4-l13-tpl-01',
      'g7-v1-c4-l13-tpl-02',
      'g7-v1-c4-l13-tpl-03',
      'g7-v1-c4-l13-tpl-04',
      'g7-v1-c4-l13-tpl-05'
    ]
  }
};
