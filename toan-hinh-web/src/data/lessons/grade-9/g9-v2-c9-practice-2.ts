import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C9Practice2Content: LessonContent = {
  lessonId: 'g9-v2-c9-practice-2',
  title: 'Luyện tập chung – Đường tròn ngoại tiếp, nội tiếp và đa giác đều',
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
    notes: 'Luyện tập về đường tròn ngoại tiếp, nội tiếp tam giác, tứ giác nội tiếp và đa giác đều.'
  },
  objectives: [
    'Tính bán kính đường tròn ngoại tiếp và nội tiếp tam giác đặc biệt.',
    'Nhận biết và vận dụng tính chất tứ giác nội tiếp đường tròn.',
    'Tính số đo góc ở tâm của đa giác đều nội tiếp.'
  ],
  prerequisites: [
    'Đường tròn ngoại tiếp và nội tiếp tam giác.',
    'Tứ giác nội tiếp đường tròn.',
    'Đa giác đều nội tiếp đường tròn.'
  ],
  theory: [
    {
      id: 'g9-v2-c9-practice-2-theory-1',
      title: 'Tổng hợp: Ngoại tiếp, nội tiếp và đa giác đều',
      content: '**Tam giác đều cạnh $a$:**\n- Bán kính ngoại tiếp: $R = \\frac{a\\sqrt{3}}{3}$\n- Bán kính nội tiếp: $r = \\frac{a\\sqrt{3}}{6}$\n- Tỉ số: $R = 2r$\n\n**Tứ giác nội tiếp đường tròn:** Tổng hai góc đối $= 180^\\circ$.\n\n**Đa giác đều $n$ cạnh nội tiếp:**\n- Góc ở tâm $= \\frac{360^\\circ}{n}$\n- Góc ở đỉnh $= \\frac{(n-2) \\times 180^\\circ}{n}$',
      diagram: {
        id: 'g9-v2-c9-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Đường tròn ngoại tiếp, nội tiếp và đa giác đều',
        alt: 'Đường tròn ngoại tiếp và nội tiếp tam giác đều.',
        notToScale: true,
        data: { type: 'inscribed-circumscribed' }
      }
    }
  ],
  remember: [
    'Tứ giác nội tiếp: hai góc đối bù nhau (tổng $180^\\circ$).',
    'Hình chữ nhật, hình thang cân, hình vuông luôn nội tiếp được đường tròn; hình bình hành chỉ khi là hình chữ nhật.'
  ],
  tips: [
    'Để kiểm tra tứ giác nội tiếp: tính tổng các góc đối. Nếu bằng $180^\\circ$ thì tứ giác nội tiếp.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c9-practice-2-mistake-1',
      mistake: 'Cho rằng mọi hình bình hành đều nội tiếp được đường tròn.',
      correction: 'Chỉ hình chữ nhật (hình bình hành có góc vuông) mới nội tiếp được đường tròn.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c9-practice-2-example-1',
      title: 'Tính góc tứ giác nội tiếp',
      difficulty: 'understanding',
      problem: 'Tứ giác $ABCD$ nội tiếp đường tròn có $\\widehat{A} = 70^\\circ$ và $\\widehat{B} = 85^\\circ$. Tính $\\widehat{C}$ và $\\widehat{D}$.',
      steps: [
        '$\\widehat{C} = 180^\\circ - \\widehat{A} = 110^\\circ$.',
        '$\\widehat{D} = 180^\\circ - \\widehat{B} = 95^\\circ$.'
      ],
      answer: '$\\widehat{C} = 110^\\circ$, $\\widehat{D} = 95^\\circ$'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c9-practice-2-sg-01',
      title: 'Đường tròn ngoại tiếp và nội tiếp',
      description: 'Tính bán kính đường tròn ngoại tiếp và nội tiếp.',
      difficulty: 'understanding',
      templateIds: ['g9-c9-practice-2-tpl-01', 'g9-c9-practice-2-tpl-02']
    },
    {
      id: 'g9-v2-c9-practice-2-sg-02',
      title: 'Tứ giác nội tiếp và đa giác đều',
      description: 'Tính chất tứ giác nội tiếp và đa giác đều.',
      difficulty: 'understanding',
      templateIds: ['g9-c9-practice-2-tpl-03', 'g9-c9-practice-2-tpl-04', 'g9-c9-practice-2-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c9-practice-2-tpl-01',
      'g9-c9-practice-2-tpl-02',
      'g9-c9-practice-2-tpl-03',
      'g9-c9-practice-2-tpl-04',
      'g9-c9-practice-2-tpl-05'
    ]
  }
};
