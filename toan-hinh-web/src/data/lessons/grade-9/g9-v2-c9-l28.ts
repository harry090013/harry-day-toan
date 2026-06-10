import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C9L28Content: LessonContent = {
  lessonId: 'g9-v2-c9-l28',
  title: 'Bài 28. Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    lessonNo: 28,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Đường tròn ngoại tiếp (tâm là giao 3 trung trực) và đường tròn nội tiếp (tâm là giao 3 phân giác) của tam giác.'
  },
  objectives: [
    'Định nghĩa được đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác.',
    'Xác định được tâm và tính bán kính đường tròn ngoại tiếp/nội tiếp của một số tam giác đặc biệt (tam giác vuông, tam giác đều).',
    'Nhận biết và vẽ được hình ảnh minh họa.'
  ],
  prerequisites: [
    'Khái niệm đường tròn, khoảng cách, phân giác, trung trực.'
  ],
  theory: [
    {
      id: 'g9-v2-c9-l28-theory-1',
      title: '1. Đường tròn ngoại tiếp tam giác',
      content: 'Đường tròn đi qua cả ba đỉnh của tam giác $ABC$ được gọi là **đường tròn ngoại tiếp** tam giác đó.\n- **Tâm:** Là giao điểm của ba đường trung trực của tam giác.\n- **Tam giác vuông:** Tâm là trung điểm cạnh huyền, bán kính $R = \\frac{\\text{cạnh huyền}}{2}$.\n- **Tam giác đều:** Tâm trùng trọng tâm, bán kính $R = \\frac{a\\sqrt{3}}{3}$.',
      diagram: {
        id: 'g9-v2-c9-l28-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Đường tròn ngoại tiếp tam giác',
        alt: 'Tam giác ABC có đường tròn đi qua 3 đỉnh.',
        notToScale: true,
        data: {
          type: 'circumcircle'
        }
      }
    },
    {
      id: 'g9-v2-c9-l28-theory-2',
      title: '2. Đường tròn nội tiếp tam giác',
      content: 'Đường tròn tiếp xúc với cả ba cạnh của tam giác $ABC$ được gọi là **đường tròn nội tiếp** tam giác đó.\n- **Tâm:** Là giao điểm của ba đường phân giác trong của tam giác (cách đều 3 cạnh).\n- **Bán kính ($r$):** Được tính bằng công thức diện tích $S = p \\cdot r$ (với $p$ là nửa chu vi tam giác).\n- **Tam giác đều:** Tâm trùng trọng tâm, bán kính $r = \\frac{a\\sqrt{3}}{6}$.',
      diagram: {
        id: 'g9-v2-c9-l28-theory-2-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Đường tròn nội tiếp tam giác',
        alt: 'Tam giác ABC có đường tròn tiếp xúc 3 cạnh.',
        notToScale: true,
        data: {
          type: 'incircle'
        }
      }
    }
  ],
  remember: [
    'Trong tam giác đều, bốn tâm (trực tâm, trọng tâm, tâm ngoại tiếp, tâm nội tiếp) trùng nhau. Do đó bán kính ngoại tiếp $R$ luôn gấp đôi bán kính nội tiếp $r$ ($R = 2r$).',
    'Tâm ngoại tiếp cách đều 3 đỉnh, tâm nội tiếp cách đều 3 cạnh.'
  ],
  tips: [
    'Khi tính bán kính nội tiếp $r$, hãy tính diện tích $S$ và nửa chu vi $p$ rồi dùng công thức $r = S/p$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c9-l28-mistake-1',
      mistake: 'Nhầm lẫn giữa tâm của đường tròn ngoại tiếp (trung trực) và nội tiếp (phân giác).',
      correction: 'Ngoại tiếp = đi qua các đỉnh $\\Rightarrow$ liên quan khoảng cách đến đỉnh $\\Rightarrow$ dùng đường trung trực. Nội tiếp = tiếp xúc cạnh $\\Rightarrow$ liên quan khoảng cách đến cạnh $\\Rightarrow$ dùng đường phân giác.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c9-l28-example-1',
      title: 'Tính bán kính nội tiếp tam giác vuông',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Tính bán kính đường tròn nội tiếp tam giác $ABC$.',
      steps: [
        'Bước 1: Tính cạnh huyền $BC = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$.',
        'Bước 2: Tính diện tích tam giác: $S = \\frac{1}{2} AB \\cdot AC = \\frac{1}{2} \\times 6 \\times 8 = 24\\text{ cm}^2$.',
        'Bước 3: Tính nửa chu vi $p$: $p = \\frac{AB + AC + BC}{2} = \\frac{6 + 8 + 10}{2} = 12\\text{ cm}$.',
        'Bước 4: Tính bán kính nội tiếp $r$: $r = \\frac{S}{p} = \\frac{24}{12} = 2\\text{ cm}$.'
      ],
      answer: '2 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c9-l28-sg-01',
      title: 'Đường tròn ngoại tiếp tam giác',
      description: 'Xác định tâm và bán kính đường tròn ngoại tiếp tam giác vuông, tam giác đều, tam giác thường.',
      difficulty: 'basic',
      templateIds: ['g9-v2-c9-l28-tpl-01', 'g9-v2-c9-l28-tpl-02']
    },
    {
      id: 'g9-v2-c9-l28-sg-02',
      title: 'Đường tròn nội tiếp tam giác',
      description: 'Tính toán bán kính và khoảng cách của đường tròn nội tiếp dựa trên các công thức diện tích và nửa chu vi.',
      difficulty: 'understanding',
      templateIds: ['g9-v2-c9-l28-tpl-03', 'g9-v2-c9-l28-tpl-04', 'g9-v2-c9-l28-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v2-c9-l28-tpl-01',
      'g9-v2-c9-l28-tpl-02',
      'g9-v2-c9-l28-tpl-03',
      'g9-v2-c9-l28-tpl-04',
      'g9-v2-c9-l28-tpl-05'
    ]
  }
};
