import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C9ReviewContent: LessonContent = {
  lessonId: 'g9-v2-c9-review',
  title: 'Bài tập cuối chương 9 – Đường tròn: Góc và tứ giác nội tiếp',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Ôn tập toàn bộ chương 9: góc nội tiếp, đường tròn ngoại tiếp, nội tiếp, tứ giác nội tiếp, đa giác đều.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức chương 9.',
    'Vận dụng tổng hợp các định lý về góc nội tiếp, tứ giác nội tiếp và đa giác đều.',
    'Giải quyết các bài tập đa dạng và bài toán tổng hợp.'
  ],
  prerequisites: ['Toàn bộ nội dung chương 9.'],
  theory: [
    {
      id: 'g9-v2-c9-review-theory-1',
      title: 'Bảng tổng kết chương 9',
      content: '**Góc nội tiếp:** $\\widehat{ACB} = \\frac{1}{2}\\text{sđ}\\overset{\\frown}{AB}$\n\n**Tứ giác nội tiếp:** $\\widehat{A} + \\widehat{C} = 180^\\circ$ (hai góc đối)\n\n**Tam giác vuông:** Ngoại tiếp bởi đường tròn có tâm là trung điểm cạnh huyền, $R = \\frac{c}{2}$\n\n**Đa giác đều $n$ cạnh:** Góc ở tâm $= \\frac{360^\\circ}{n}$; Bán kính ngoại tiếp đã cho → tính cạnh bằng $a = R \\cdot 2\\sin\\frac{180^\\circ}{n}$',
      diagram: {
        id: 'g9-v2-c9-review-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Tổng kết chương 9',
        alt: 'Đường tròn với góc nội tiếp, tứ giác nội tiếp và đa giác đều.',
        notToScale: true,
        data: { type: 'chapter-summary' }
      }
    }
  ],
  remember: [
    'Góc nội tiếp = nửa góc ở tâm cùng chắn cung.',
    'Tứ giác nội tiếp: hai góc đối bù nhau.',
    'Đường tròn ngoại tiếp tam giác vuông: tâm là trung điểm cạnh huyền.'
  ],
  tips: [
    'Bài tổng hợp: xác định loại bài (góc nội tiếp, tứ giác nội tiếp, hay đa giác đều) trước khi giải.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c9-review-mistake-1',
      mistake: 'Nhầm tứ giác nội tiếp: "hai góc liên tiếp bù nhau" thay vì "hai góc đối bù nhau".',
      correction: 'Phải là hai góc ĐỐI NHAU của tứ giác (không liền nhau) mới có tổng $180^\\circ$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c9-review-example-1',
      title: 'Bài tổng hợp',
      difficulty: 'application',
      problem: 'Tam giác $ABC$ nội tiếp đường tròn $(O)$. Biết $\\widehat{A} = 70^\\circ$, $AB$ là đường kính. Tính $\\widehat{ACB}$ và $\\widehat{C}$.',
      steps: [
        'Vì $AB$ là đường kính nên $\\widehat{ACB} = 90^\\circ$ (góc nội tiếp chắn nửa đường tròn).',
        '$\\widehat{C} = 180^\\circ - \\widehat{A} - \\widehat{ACB} = 180^\\circ - 70^\\circ - 90^\\circ = 20^\\circ$.',
        'Vậy $\\widehat{ABC} = 70^\\circ$ và $\\widehat{BAC} = 20^\\circ$... (không, đề là $\\widehat{A}=70°$, $\\widehat{ACB}=90°$, suy ra $\\widehat{B} = 20°$).'
      ],
      answer: '$\\widehat{ACB} = 90^\\circ$; $\\widehat{B} = 20^\\circ$'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c9-review-sg-01',
      title: 'Góc nội tiếp và tứ giác nội tiếp',
      description: 'Ôn tập tổng hợp góc nội tiếp và tứ giác nội tiếp.',
      difficulty: 'understanding',
      templateIds: ['g9-c9-review-tpl-01', 'g9-c9-review-tpl-02', 'g9-c9-review-tpl-03']
    },
    {
      id: 'g9-v2-c9-review-sg-02',
      title: 'Đa giác đều và tổng hợp',
      description: 'Đa giác đều nội tiếp và bài toán tổng hợp chương.',
      difficulty: 'application',
      templateIds: ['g9-c9-review-tpl-04', 'g9-c9-review-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c9-review-tpl-01',
      'g9-c9-review-tpl-02',
      'g9-c9-review-tpl-03',
      'g9-c9-review-tpl-04',
      'g9-c9-review-tpl-05'
    ]
  }
};
