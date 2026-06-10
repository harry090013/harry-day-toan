import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5L13Content: LessonContent = {
  lessonId: 'g9-v1-c5-l13',
  title: 'Bài 13. Mở đầu về đường tròn',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    lessonNo: 13,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa đường tròn, hình tròn, vị trí tương đối của điểm và đường tròn, tính đối xứng.'
  },
  objectives: [
    'Phát biểu được định nghĩa đường tròn, hình tròn, tâm và bán kính.',
    'Xác định được vị trí tương đối của một điểm đối với một đường tròn.',
    'Nhận biết được tính chất đối xứng tâm và đối xứng trục của đường tròn.'
  ],
  prerequisites: [
    'Khái niệm điểm, khoảng cách giữa hai điểm, định lí Pythagore.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-l13-theory-1',
      title: '1. Định nghĩa đường tròn',
      content: 'Đường tròn tâm $O$ bán kính $R$ ($R > 0$), kí hiệu $(O; R)$, là hình gồm các điểm cách điểm $O$ một khoảng bằng $R$.\n\n**Vị trí tương đối của điểm M và đường tròn (O; R):**\n- Điểm $M$ nằm **trong** đường tròn $\\Leftrightarrow OM < R$.\n- Điểm $M$ nằm **trên** (thuộc) đường tròn $\\Leftrightarrow OM = R$.\n- Điểm $M$ nằm **ngoài** đường tròn $\\Leftrightarrow OM > R$.',
      diagram: {
        id: 'g9-v1-c5-l13-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Đường tròn tâm O',
        alt: 'Đường tròn tâm O và bán kính R.',
        notToScale: true,
        data: {
          type: 'basic',
          chord: false
        }
      }
    },
    {
      id: 'g9-v1-c5-l13-theory-2',
      title: '2. Tính chất đối xứng của đường tròn',
      content: '- **Đối xứng tâm:** Đường tròn là hình có đối xứng tâm. Tâm của đường tròn là tâm đối xứng của đường tròn đó.\n- **Đối xứng trục:** Đường tròn là hình có đối xứng trục. Bất kỳ đường kính nào cũng là một trục đối xứng của đường tròn.',
      formulas: [
        'M \\in (O; R) \\Leftrightarrow OM = R',
        '\\text{Trục đối xứng} = \\text{Đường kính}'
      ]
    }
  ],
  remember: [
    'Đường tròn đi qua 3 đỉnh của một tam giác được gọi là đường tròn ngoại tiếp tam giác đó, và tam giác đó gọi là tam giác nội tiếp đường tròn.',
    'Tâm của đường tròn ngoại tiếp tam giác vuông là trung điểm của cạnh huyền.'
  ],
  tips: [
    'Để so sánh vị trí của điểm $M$ với đường tròn $(O; R)$, ta đi tính khoảng cách $OM$ rồi so sánh trực tiếp với bán kính $R$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-l13-mistake-1',
      mistake: 'Nhầm lẫn giữa "đường tròn" (chỉ gồm đường biên ngoài) và "hình tròn" (gồm cả phần biên và phần bên trong).',
      correction: 'Đường tròn $(O; R)$ chỉ là tập hợp các điểm cách $O$ đúng một khoảng bằng $R$. Hình tròn $(O; R)$ là tập hợp các điểm cách $O$ một khoảng nhỏ hơn hoặc bằng $R$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-l13-example-1',
      title: 'Xác định vị trí tương đối của điểm và đường tròn',
      difficulty: 'basic',
      problem: 'Cho đường tròn tâm $O$ bán kính $R = 5\\text{ cm}$. Điểm $M$ cách $O$ một khoảng $OM = 4\\text{ cm}$. Hỏi điểm $M$ nằm ở đâu so với đường tròn $(O)$?',
      steps: [
        'Bước 1: So sánh khoảng cách $OM = 4\\text{ cm}$ với bán kính $R = 5\\text{ cm}$.',
        'Bước 2: Ta thấy $OM = 4 < 5 = R$.',
        'Bước 3: Kết luận: Vì khoảng cách từ điểm $M$ đến tâm bé hơn bán kính, điểm $M$ nằm trong đường tròn $(O)$.'
      ],
      answer: 'Nằm trong đường tròn'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-l13-sg-01',
      title: 'So sánh vị trí của điểm và đường tròn',
      description: 'Tính khoảng cách từ điểm đến tâm và so sánh với bán kính để xác định điểm nằm trong, trên hay ngoài đường tròn.',
      difficulty: 'basic',
      templateIds: ['g9-v1-c5-l13-tpl-01', 'g9-v1-c5-l13-tpl-02']
    },
    {
      id: 'g9-v1-c5-l13-sg-02',
      title: 'Đường tròn ngoại tiếp tam giác đặc biệt',
      description: 'Xác định bán kính đường tròn ngoại tiếp tam giác vuông, tam giác đều.',
      difficulty: 'understanding',
      templateIds: ['g9-v1-c5-l13-tpl-03', 'g9-v1-c5-l13-tpl-04', 'g9-v1-c5-l13-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v1-c5-l13-tpl-01',
      'g9-v1-c5-l13-tpl-02',
      'g9-v1-c5-l13-tpl-03',
      'g9-v1-c5-l13-tpl-04',
      'g9-v1-c5-l13-tpl-05'
    ]
  }
};
