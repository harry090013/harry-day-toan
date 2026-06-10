import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C4L11Content: LessonContent = {
  lessonId: 'g9-v1-c4-l11',
  title: 'Bài 11. Tỉ số lượng giác của góc nhọn',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    lessonNo: 11,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm tỉ số lượng giác sin, cos, tan, cot của một góc nhọn.'
  },
  objectives: [
    'Định nghĩa được các tỉ số lượng giác của một góc nhọn (sin, cos, tan, cot).',
    'Tính được tỉ số lượng giác của các góc nhọn đặc biệt (30°, 45°, 60°).',
    'Sử dụng máy tính cầm tay để tìm tỉ số lượng giác của góc nhọn hoặc tìm số đo góc khi biết tỉ số lượng giác.'
  ],
  prerequisites: [
    'Tam giác vuông, định lí Pythagore, định nghĩa các cạnh đối, cạnh kề và cạnh huyền.'
  ],
  theory: [
    {
      id: 'g9-v1-c4-l11-theory-1',
      title: '1. Định nghĩa tỉ số lượng giác',
      content: 'Trong tam giác vuông, với một góc nhọn $\\alpha$:\n- **Sin** của góc $\\alpha$ (kí hiệu $\\sin \\alpha$) là tỉ số giữa cạnh đối và cạnh huyền:\n  $$\\sin \\alpha = \\frac{\\text{Cạnh đối}}{\\text{Cạnh huyền}}$$\n- **Cos** của góc $\\alpha$ (kí hiệu $\\cos \\alpha$) là tỉ số giữa cạnh kề và cạnh huyền:\n  $$\\cos \\alpha = \\frac{\\text{Cạnh kề}}{\\text{Cạnh huyền}}$$\n- **Tan** của góc $\\alpha$ (kí hiệu $\\tan \\alpha$) là tỉ số giữa cạnh đối và cạnh kề:\n  $$\\tan \\alpha = \\frac{\\text{Cạnh đối}}{\\text{Cạnh kề}}$$\n- **Cot** của góc $\\alpha$ (kí hiệu $\\cot \\alpha$) là tỉ số giữa cạnh kề và cạnh đối:\n  $$\\cot \\alpha = \\frac{\\text{Cạnh kề}}{\\text{Cạnh đối}}$$',
      diagram: {
        id: 'g9-v1-c4-l11-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c4-trig',
        title: 'Tỉ số lượng giác góc nhọn α',
        alt: 'Tam giác vuông ABC với góc nhọn α tại C, chỉ rõ cạnh đối, cạnh kề, cạnh huyền.',
        notToScale: true,
        data: {
          angleLabel: 'α',
          opp: 'đối',
          adj: 'kề',
          hyp: 'huyền'
        }
      }
    },
    {
      id: 'g9-v1-c4-l11-theory-2',
      title: '2. Tính chất lượng giác nhọn',
      content: '- Với mọi góc nhọn $\\alpha$, ta luôn có: $0 < \\sin \\alpha < 1$ và $0 < \\cos \\alpha < 1$.\n- **Các hệ thức liên hệ cơ bản:**\n  $$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}; \\quad \\cot \\alpha = \\frac{\\cos \\alpha}{\\sin \\alpha}; \\quad \\tan \\alpha \\cdot \\cot \\alpha = 1; \\quad \\sin^2 \\alpha + \\cos^2 \\alpha = 1$$\n- **Góc phụ nhau:** Nếu hai góc nhọn phụ nhau (tổng bằng $90^\\circ$) thì sin góc này bằng cos góc kia, tan góc này bằng cot góc kia.',
      formulas: [
        '\\sin^2 \\alpha + \\cos^2 \\alpha = 1',
        '\\tan \\alpha \\cdot \\cot \\alpha = 1',
        '\\sin \\beta = \\cos (90^\\circ - \\beta)'
      ]
    }
  ],
  remember: [
    'Mẹo nhớ tỉ số lượng giác: "Sin đi học (đối/huyền), Cos khóc hoài (kề/huyền), Tan đoàn kết (đối/kề), Cot kết đoàn (kề/đối)".',
    'Các giá trị lượng giác đặc biệt: $\\sin 30^\\circ = \\frac{1}{2}$, $\\sin 45^\\circ = \\frac{\\sqrt{2}}{2}$, $\\sin 60^\\circ = \\frac{\\sqrt{3}}{2}$.'
  ],
  tips: [
    'Nếu đề bài cho $\\sin \\alpha$ và bắt tìm $\\cos \\alpha$, hãy sử dụng ngay công thức $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c4-l11-mistake-1',
      mistake: 'Nhầm lẫn giữa cạnh đối và cạnh kề đối với góc đang xét.',
      correction: 'Hãy nhớ cạnh đối diện với góc nhọn đang xét gọi là cạnh đối. Cạnh tạo nên góc nhọn đó (không phải cạnh huyền) gọi là cạnh kề. Thay đổi góc xét sẽ thay đổi vai trò của cạnh đối và cạnh kề.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c4-l11-example-1',
      title: 'Tính tỉ số lượng giác từ tam giác vuông',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ vuông tại $A$ có $AB = 3\\text{ cm}, AC = 4\\text{ cm}$. Tính các tỉ số lượng giác của góc $B$.',
      steps: [
        'Bước 1: Tính cạnh huyền $BC$ bằng Pythagore: $BC = \\sqrt{AB^2 + AC^2} = \\sqrt{3^2 + 4^2} = 5\\text{ cm}$.',
        'Bước 2: Đối với góc $B$, cạnh đối là $AC = 4\\text{ cm}$ và cạnh kề là $AB = 3\\text{ cm}$.',
        'Bước 3: Áp dụng định nghĩa tỉ số lượng giác:\n- $\\sin B = \\frac{AC}{BC} = \\frac{4}{5} = 0,8$\n- $\\cos B = \\frac{AB}{BC} = \\frac{3}{5} = 0,6$\n- $\\tan B = \\frac{AC}{AB} = \\frac{4}{3}$\n- $\\cot B = \\frac{AB}{AC} = \\frac{3}{4} = 0,75$.'
      ],
      answer: 'sin B = 0.8, cos B = 0.6, tan B = 4/3, cot B = 0.75'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c4-l11-sg-01',
      title: 'Tính tỉ số lượng giác cơ bản',
      description: 'Lập tỉ số lượng giác sin, cos, tan, cot từ tam giác vuông cho trước độ dài các cạnh.',
      difficulty: 'basic',
      templateIds: ['g9-v1-c4-l11-tpl-01', 'g9-v1-c4-l11-tpl-02']
    },
    {
      id: 'g9-v1-c4-l11-sg-02',
      title: 'Hệ thức liên hệ giữa các tỉ số lượng giác',
      description: 'Tính một tỉ số lượng giác khi biết các tỉ số lượng giác khác của cùng một góc hoặc dùng góc phụ nhau.',
      difficulty: 'understanding',
      templateIds: ['g9-v1-c4-l11-tpl-03', 'g9-v1-c4-l11-tpl-04', 'g9-v1-c4-l11-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v1-c4-l11-tpl-01',
      'g9-v1-c4-l11-tpl-02',
      'g9-v1-c4-l11-tpl-03',
      'g9-v1-c4-l11-tpl-04',
      'g9-v1-c4-l11-tpl-05'
    ]
  }
};
