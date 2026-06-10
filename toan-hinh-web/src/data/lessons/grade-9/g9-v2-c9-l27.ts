import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C9L27Content: LessonContent = {
  lessonId: 'g9-v2-c9-l27',
  title: 'Bài 27. Góc nội tiếp',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    lessonNo: 27,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa góc nội tiếp, mối liên hệ giữa góc nội tiếp và góc ở tâm.'
  },
  objectives: [
    'Phát biểu được định nghĩa góc nội tiếp và cung bị chắn.',
    'Giải thích và chứng minh được định lí về góc nội tiếp (số đo góc nội tiếp bằng nửa số đo cung bị chắn).',
    'Nhận biết và vận dụng các hệ quả của góc nội tiếp để giải bài tập.'
  ],
  prerequisites: [
    'Khái niệm đường tròn, cung tròn, số đo cung, khái niệm góc ở tâm.'
  ],
  theory: [
    {
      id: 'g9-v2-c9-l27-theory-1',
      title: '1. Khái niệm góc nội tiếp',
      content: 'Góc nội tiếp là góc có đỉnh nằm trên đường tròn và hai cạnh chứa hai dây cung của đường tròn đó. Cung nằm bên trong góc gọi là **cung bị chắn**.\n\n**Định lí:** Trong một đường tròn, số đo của góc nội tiếp bằng nửa số đo của cung bị chắn.',
      diagram: {
        id: 'g9-v2-c9-l27-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Góc nội tiếp ACB',
        alt: 'Góc ACB nội tiếp đường tròn chắn cung nhỏ AB.',
        notToScale: true,
        data: {
          type: 'inscribed-angle'
        }
      }
    },
    {
      id: 'g9-v2-c9-l27-theory-2',
      title: '2. Các hệ quả quan trọng',
      content: 'Trong một đường tròn:\n- Các góc nội tiếp bằng nhau chắn các cung bằng nhau.\n- Các góc nội tiếp cùng chắn một cung hoặc chắn các cung bằng nhau thì bằng nhau.\n- Góc nội tiếp (nhỏ hơn hoặc bằng $90^\\circ$) có số đo bằng nửa số đo của góc ở tâm cùng chắn một cung.\n- Góc nội tiếp chắn nửa đường tròn là góc vuông ($90^\\circ$).',
      formulas: [
        '\\widehat{ACB} = \\frac{1}{2} \\text{sđ} \\overparen{AB}',
        '\\widehat{ACB} = \\frac{1}{2} \\widehat{AOB} \\quad (\\text{với } \\widehat{AOB} < 180^\\circ)',
        '\\widehat{AMB} = 90^\\circ \\quad (\\text{nếu AB là đường kính})'
      ]
    }
  ],
  remember: [
    'Góc nội tiếp chắn nửa đường tròn luôn luôn là góc vuông. Đây là tính chất cực kỳ thông dụng để chứng minh một tam giác là tam giác vuông hoặc tìm góc vuông khi vẽ đường kính.',
    'Góc ở tâm có số đo bằng đúng số đo cung bị chắn, còn góc nội tiếp bằng nửa số đo cung bị chắn.'
  ],
  tips: [
    'Khi chứng minh hai góc bằng nhau, hãy xem chúng có cùng chắn một cung nào trong đường tròn hay không.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c9-l27-mistake-1',
      mistake: 'Cho rằng góc có đỉnh nằm ngoài hoặc trong đường tròn (không thuộc đường biên) là góc nội tiếp.',
      correction: 'Đỉnh của góc nội tiếp bắt buộc phải nằm **trên đường tròn** (đường biên). Đỉnh nằm ngoài hay nằm trong không được tính là góc nội tiếp.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c9-l27-example-1',
      title: 'Tính số đo góc nội tiếp',
      difficulty: 'basic',
      problem: 'Cho đường tròn $(O)$ và góc ở tâm $\\widehat{AOB} = 80^\\circ$ (cung bị chắn là cung nhỏ $AB$). Điểm $C$ nằm trên cung lớn $AB$. Tính số đo góc nội tiếp $\\widehat{ACB}$.',
      steps: [
        'Bước 1: Ta có góc $\\widehat{ACB}$ là góc nội tiếp chắn cung nhỏ $AB$.',
        'Bước 2: Góc ở tâm $\\widehat{AOB}$ cũng chắn cung nhỏ $AB$, có số đo là $80^\\circ$.',
        'Bước 3: Theo định lí góc nội tiếp, số đo góc nội tiếp bằng nửa số đo góc ở tâm cùng chắn cung nhỏ $AB$:',
        '$$\\widehat{ACB} = \\frac{1}{2} \\widehat{AOB} = \\frac{1}{2} \\times 80^\\circ = 40^\\circ$$.'
      ],
      answer: '40°'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c9-l27-sg-01',
      title: 'Tính số đo góc nội tiếp và góc ở tâm',
      description: 'Dùng định lí và các hệ quả lượng giác để tính số đo góc nội tiếp, góc ở tâm hoặc số đo cung bị chắn.',
      difficulty: 'basic',
      templateIds: ['g9-v2-c9-l27-tpl-01', 'g9-v2-c9-l27-tpl-02', 'g9-v2-c9-l27-tpl-03']
    },
    {
      id: 'g9-v2-c9-l27-sg-02',
      title: 'Ứng dụng góc nội tiếp chắn nửa đường tròn',
      description: 'Chứng minh tam giác vuông và tính toán cạnh góc vuông dựa vào góc nội tiếp chắn nửa đường tròn.',
      difficulty: 'understanding',
      templateIds: ['g9-v2-c9-l27-tpl-04', 'g9-v2-c9-l27-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v2-c9-l27-tpl-01',
      'g9-v2-c9-l27-tpl-02',
      'g9-v2-c9-l27-tpl-03',
      'g9-v2-c9-l27-tpl-04',
      'g9-v2-c9-l27-tpl-05'
    ]
  }
};
