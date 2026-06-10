import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C9Practice1Content: LessonContent = {
  lessonId: 'g9-v2-c9-practice-1',
  title: 'Luyện tập chung – Góc nội tiếp và số đo cung',
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
    notes: 'Luyện tập về góc nội tiếp, mối liên hệ với góc ở tâm và số đo cung.'
  },
  objectives: [
    'Tính số đo góc nội tiếp từ số đo cung bị chắn và ngược lại.',
    'Vận dụng tính chất góc nội tiếp chắn nửa đường tròn.',
    'Nhận biết và ứng dụng các hệ quả của góc nội tiếp.'
  ],
  prerequisites: [
    'Định nghĩa góc nội tiếp, cung bị chắn, số đo cung.',
    'Định lí góc nội tiếp.',
    'Góc ở tâm và mối liên hệ với cung.'
  ],
  theory: [
    {
      id: 'g9-v2-c9-practice-1-theory-1',
      title: 'Tổng hợp: Góc nội tiếp',
      content: '**Định lí:** Số đo góc nội tiếp $= \\frac{1}{2}$ số đo cung bị chắn.\n\n**Hệ quả:**\n- Các góc nội tiếp cùng chắn một cung thì bằng nhau.\n- Góc nội tiếp chắn nửa đường tròn $= 90^\\circ$.\n- Góc ở tâm $= 2 \\times$ góc nội tiếp cùng chắn cung.\n\n**Ứng dụng:** Nếu $AB$ là đường kính và $C$ thuộc đường tròn thì $\\widehat{ACB} = 90^\\circ$.',
      diagram: {
        id: 'g9-v2-c9-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c9-circle-angles',
        title: 'Góc nội tiếp và góc ở tâm',
        alt: 'Đường tròn với góc nội tiếp ACB và góc ở tâm AOB cùng chắn cung AB.',
        notToScale: true,
        data: { type: 'inscribed-central-angle' }
      }
    }
  ],
  remember: [
    'Góc nội tiếp $= \\frac{1}{2}$ cung bị chắn; Góc ở tâm $= $ cung bị chắn.',
    'Góc nội tiếp chắn đường kính (nửa đường tròn) luôn bằng $90^\\circ$.'
  ],
  tips: [
    'Khi giải, hãy xác định cung bị chắn trước, rồi nhân/chia 2 tùy theo đề hỏi góc nội tiếp hay số đo cung.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c9-practice-1-mistake-1',
      mistake: 'Nhầm: góc nội tiếp = cung bị chắn (thay vì bằng nửa).',
      correction: 'Góc nội tiếp = nửa số đo cung bị chắn. Góc ở tâm mới bằng số đo cung.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c9-practice-1-example-1',
      title: 'Tính góc nội tiếp từ góc ở tâm',
      difficulty: 'understanding',
      problem: 'Đường tròn $(O)$, góc ở tâm $\\widehat{AOB} = 120^\\circ$. Điểm $C$ trên cung lớn $AB$. Tính $\\widehat{ACB}$.',
      steps: [
        'Góc $\\widehat{ACB}$ nội tiếp chắn cung nhỏ $AB$ có số đo $120^\\circ$.',
        '$\\widehat{ACB} = \\frac{1}{2} \\times 120^\\circ = 60^\\circ$.'
      ],
      answer: '$60^\\circ$'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c9-practice-1-sg-01',
      title: 'Tính số đo góc nội tiếp và cung',
      description: 'Vận dụng định lí để tính góc nội tiếp và số đo cung.',
      difficulty: 'basic',
      templateIds: ['g9-c9-practice-1-tpl-01', 'g9-c9-practice-1-tpl-02', 'g9-c9-practice-1-tpl-03']
    },
    {
      id: 'g9-v2-c9-practice-1-sg-02',
      title: 'Mối liên hệ góc ở tâm và góc nội tiếp',
      description: 'So sánh và liên hệ giữa góc ở tâm và góc nội tiếp.',
      difficulty: 'understanding',
      templateIds: ['g9-c9-practice-1-tpl-04', 'g9-c9-practice-1-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c9-practice-1-tpl-01',
      'g9-c9-practice-1-tpl-02',
      'g9-c9-practice-1-tpl-03',
      'g9-c9-practice-1-tpl-04',
      'g9-c9-practice-1-tpl-05'
    ]
  }
};
