import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C4L12Content: LessonContent = {
  lessonId: 'g9-v1-c4-l12',
  title: 'Bài 12. Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    lessonNo: 12,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Hệ thức cạnh và góc nhọn trong tam giác vuông, giải tam giác vuông và ứng dụng thực tiễn.'
  },
  objectives: [
    'Phát biểu và viết được các hệ thức giữa cạnh và góc trong tam giác vuông.',
    'Giải được tam giác vuông (tìm tất cả các cạnh và góc chưa biết của tam giác vuông).',
    'Áp dụng tỉ số lượng giác để tính toán khoảng cách, chiều cao trong thực tế.'
  ],
  prerequisites: [
    'Định nghĩa các tỉ số lượng giác của góc nhọn, định lí Pythagore.'
  ],
  theory: [
    {
      id: 'g9-v1-c4-l12-theory-1',
      title: '1. Hệ thức giữa cạnh và góc trong tam giác vuông',
      content: 'Trong một tam giác vuông, mỗi cạnh góc vuông bằng:\n- Cạnh huyền nhân với sin của góc đối hoặc nhân với cos của góc kề:\n  $$b = a \\cdot \\sin B = a \\cdot \\cos C$$\n  $$c = a \\cdot \\sin C = a \\cdot \\cos B$$\n- Cạnh góc vuông kia nhân với tan của góc đối hoặc nhân với cot của góc kề:\n  $$b = c \\cdot \\tan B = c \\cdot \\cot C$$\n  $$c = b \\cdot \\tan C = b \\cdot \\cot B$$',
      diagram: {
        id: 'g9-v1-c4-l12-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c4-trig',
        title: 'Hệ thức cạnh - góc',
        alt: 'Tam giác vuông ABC vuông tại A với các cạnh a, b, c tương ứng.',
        notToScale: true,
        data: {
          angleLabel: 'B',
          opp: 'b',
          adj: 'c',
          hyp: 'a'
        }
      }
    },
    {
      id: 'g9-v1-c4-l12-theory-2',
      title: '2. Giải tam giác vuông',
      content: 'Giải tam giác vuông là tìm tất cả các cạnh và góc chưa biết của tam giác vuông đó khi đã biết trước hai yếu tố (trong đó phải có ít nhất một yếu tố về cạnh).',
      formulas: [
        'b = a \\cdot \\sin B',
        'b = c \\cdot \\tan B',
        '\\widehat{B} + \\widehat{C} = 90^\\circ'
      ]
    }
  ],
  remember: [
    'Khi giải tam giác vuông, ta có thể dùng cả định lí Pythagore lẫn hệ thức lượng giác để tính độ dài cạnh sao cho nhanh và chính xác nhất.',
    'Góc nâng (góc elevation) và góc hạ (góc depression) là các khái niệm quan trọng để giải các bài toán thực tế.'
  ],
  tips: [
    'Nếu đề bài cho một góc nhọn và một cạnh kề góc đó, muốn tìm cạnh đối hãy nhân cạnh kề với tan góc nhọn.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c4-l12-mistake-1',
      mistake: 'Nhầm lẫn giữa nhân với sin và cos khi dùng cạnh huyền.',
      correction: 'Cạnh góc vuông = Cạnh huyền × sin góc **đối** = Cạnh huyền × cos góc **kề**. Hãy vẽ hình phác thảo để xác định rõ góc đang xét là đối hay kề với cạnh cần tính.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c4-l12-example-1',
      title: 'Giải tam giác vuông biết cạnh huyền và một góc nhọn',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ vuông tại $A$ có $BC = 10\\text{ cm}$ và góc $\\widehat{B} = 30^circ$. Giải tam giác vuông $ABC$.',
      steps: [
        'Bước 1: Tính góc nhọn còn lại: $\\widehat{C} = 90^\\circ - \\widehat{B} = 90^\\circ - 30^\\circ = 60^\\circ$.',
        'Bước 2: Áp dụng hệ thức tính cạnh góc vuông $AC$: $AC = BC \\cdot \\sin B = 10 \\cdot \\sin 30^\\circ = 10 \\cdot 0,5 = 5\\text{ cm}$.',
        'Bước 3: Tính cạnh $AB$: $AB = BC \\cdot \\cos B = 10 \\cdot \\cos 30^\\circ = 10 \\cdot \\frac{\\sqrt{3}}{2} = 5\\sqrt{3} \\approx 8,66\\text{ cm}$.'
      ],
      answer: 'C = 60°, AC = 5 cm, AB = 5√3 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c4-l12-sg-01',
      title: 'Giải tam giác vuông cơ bản',
      description: 'Tính các cạnh và góc chưa biết trong tam giác vuông khi biết một góc và một cạnh hoặc hai cạnh.',
      difficulty: 'basic',
      templateIds: ['g9-v1-c4-l12-tpl-01', 'g9-v1-c4-l12-tpl-02']
    },
    {
      id: 'g9-v1-c4-l12-sg-02',
      title: 'Bài toán thực tế ứng dụng hệ thức lượng',
      description: 'Tính chiều cao cây, độ rộng sông, chiều cao tháp hoặc khoảng cách tàu thuyền dựa trên góc nâng và hạ.',
      difficulty: 'understanding',
      templateIds: ['g9-v1-c4-l12-tpl-03', 'g9-v1-c4-l12-tpl-04', 'g9-v1-c4-l12-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v1-c4-l12-tpl-01',
      'g9-v1-c4-l12-tpl-02',
      'g9-v1-c4-l12-tpl-03',
      'g9-v1-c4-l12-tpl-04',
      'g9-v1-c4-l12-tpl-05'
    ]
  }
};
