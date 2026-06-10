import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C4Practice1Content: LessonContent = {
  lessonId: 'g9-v1-c4-practice-1',
  title: 'Luyện tập chung – Tỉ số lượng giác và ứng dụng',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập tổng hợp về tỉ số lượng giác của góc nhọn và ứng dụng vào giải tam giác vuông.'
  },
  objectives: [
    'Củng cố kỹ năng tính tỉ số lượng giác sin, cos, tan, cot từ tam giác vuông.',
    'Sử dụng tỉ số lượng giác để tính cạnh và góc trong tam giác vuông.',
    'Vận dụng vào bài toán thực tế (đo chiều cao gián tiếp, độ dốc, góc ngẩng).'
  ],
  prerequisites: [
    'Định nghĩa tỉ số lượng giác của góc nhọn (sin, cos, tan, cot).',
    'Các giá trị lượng giác đặc biệt (30°, 45°, 60°).',
    'Định lý Pythagore.'
  ],
  theory: [
    {
      id: 'g9-v1-c4-practice-1-theory-1',
      title: 'Tổng hợp tỉ số lượng giác và ứng dụng',
      content: '**Công thức tỉ số lượng giác** trong tam giác vuông tại $A$:\n$$\\sin B = \\frac{AC}{BC}, \\quad \\cos B = \\frac{AB}{BC}, \\quad \\tan B = \\frac{AC}{AB}, \\quad \\cot B = \\frac{AB}{AC}$$\n\n**Ứng dụng thực tế:** Nếu biết một cạnh và một góc nhọn, có thể tính được các cạnh còn lại.\n- Tính cạnh đối: $\\text{cạnh đối} = \\text{cạnh huyền} \\cdot \\sin\\alpha$\n- Tính cạnh kề: $\\text{cạnh kề} = \\text{cạnh huyền} \\cdot \\cos\\alpha$\n- Tính cạnh đối: $\\text{cạnh đối} = \\text{cạnh kề} \\cdot \\tan\\alpha$',
      diagram: {
        id: 'g9-v1-c4-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c4-trig',
        title: 'Tam giác vuông và tỉ số lượng giác',
        alt: 'Tam giác ABC vuông tại A thể hiện các tỉ số lượng giác của góc B.',
        notToScale: true,
        data: { type: 'right-triangle' }
      }
    }
  ],
  remember: [
    'Mẹo: "Sin đối huyền, Cos kề huyền, Tan đối kề, Cot kề đối".',
    '$\\sin^2\\alpha + \\cos^2\\alpha = 1$ luôn đúng với mọi góc nhọn $\\alpha$.'
  ],
  tips: [
    'Khi giải tam giác vuông, hãy xác định trước: góc nào đang xét, cạnh nào là đối, kề, huyền với góc đó.',
    'Với bài toán thực tế: vẽ hình phụ để xác định tam giác vuông ẩn.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c4-practice-1-mistake-1',
      mistake: 'Nhầm cạnh đối và cạnh kề khi thay đổi góc xét.',
      correction: 'Cạnh đối và kề phụ thuộc vào góc đang xét, không phải cố định theo tên đỉnh.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c4-practice-1-example-1',
      title: 'Tính chiều cao cột cờ từ bóng và góc ngẩng',
      difficulty: 'application',
      problem: 'Một cột cờ thẳng đứng tạo bóng dài $20$ m. Góc ngẩng từ đầu bóng lên đỉnh cột là $45^\\circ$. Tính chiều cao cột cờ.',
      steps: [
        'Vẽ tam giác vuông: cột là cạnh đối, bóng là cạnh kề, góc nhìn $45^\\circ$.',
        '$\\tan 45^\\circ = \\frac{h}{20} \\Rightarrow h = 20 \\times \\tan 45^\\circ = 20 \\times 1 = 20$ m.'
      ],
      answer: '20 m'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c4-practice-1-sg-01',
      title: 'Tính cạnh và góc trong tam giác vuông',
      description: 'Vận dụng tỉ số lượng giác để tính cạnh chưa biết hoặc góc nhọn.',
      difficulty: 'understanding',
      templateIds: ['g9-c4-practice-1-tpl-01', 'g9-c4-practice-1-tpl-02', 'g9-c4-practice-1-tpl-03']
    },
    {
      id: 'g9-v1-c4-practice-1-sg-02',
      title: 'Ứng dụng vào bài toán thực tế',
      description: 'Đo chiều cao gián tiếp và các bài toán thực tế liên quan.',
      difficulty: 'application',
      templateIds: ['g9-c4-practice-1-tpl-04', 'g9-c4-practice-1-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c4-practice-1-tpl-01',
      'g9-c4-practice-1-tpl-02',
      'g9-c4-practice-1-tpl-03',
      'g9-c4-practice-1-tpl-04',
      'g9-c4-practice-1-tpl-05'
    ]
  }
};
