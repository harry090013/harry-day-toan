import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C4ReviewContent: LessonContent = {
  lessonId: 'g9-v1-c4-review',
  title: 'Bài tập cuối chương 4 – Hệ thức lượng trong tam giác vuông',
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
    notes: 'Ôn tập toàn bộ chương 4: tỉ số lượng giác, hệ thức lượng trong tam giác vuông, ứng dụng.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức về tỉ số lượng giác và hệ thức lượng trong tam giác vuông.',
    'Vận dụng linh hoạt các công thức để giải bài tập tổng hợp.',
    'Ứng dụng vào các bài toán thực tiễn đa dạng.'
  ],
  prerequisites: [
    'Toàn bộ nội dung chương 4: tỉ số lượng giác, hệ thức cạnh-góc, bảng giá trị đặc biệt.'
  ],
  theory: [
    {
      id: 'g9-v1-c4-review-theory-1',
      title: 'Bảng tổng kết chương 4',
      content: '**Tỉ số lượng giác (tam giác vuông tại A):**\n$$\\sin B = \\frac{AC}{BC}, \\cos B = \\frac{AB}{BC}, \\tan B = \\frac{AC}{AB}, \\cot B = \\frac{AB}{AC}$$\n\n**Giá trị đặc biệt:**\n| Góc | $30^\\circ$ | $45^\\circ$ | $60^\\circ$ |\n|---|---|---|---|\n| sin | $\\frac{1}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{\\sqrt{3}}{2}$ |\n| cos | $\\frac{\\sqrt{3}}{2}$ | $\\frac{\\sqrt{2}}{2}$ | $\\frac{1}{2}$ |\n| tan | $\\frac{\\sqrt{3}}{3}$ | $1$ | $\\sqrt{3}$ |\n\n**Hệ thức quan trọng:** $\\sin^2\\alpha + \\cos^2\\alpha = 1$; $\\tan\\alpha \\cdot \\cot\\alpha = 1$.',
      diagram: {
        id: 'g9-v1-c4-review-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c4-trig',
        title: 'Tổng kết chương 4',
        alt: 'Tam giác vuông với các tỉ số lượng giác và hệ thức.',
        notToScale: true,
        data: { type: 'summary' }
      }
    }
  ],
  remember: [
    '$\\sin^2\\alpha + \\cos^2\\alpha = 1$ — công thức quan trọng nhất của chương.',
    'Góc phụ nhau: $\\sin\\alpha = \\cos(90^\\circ-\\alpha)$; $\\tan\\alpha = \\cot(90^\\circ-\\alpha)$.',
    'Hệ thức đường cao: $CH^2 = AH \\cdot HB$ (trong tam giác vuông tại C).'
  ],
  tips: [
    'Bài tổng hợp: đọc kỹ hình vẽ, xác định tam giác vuông, sau đó áp dụng công thức phù hợp.',
    'Bài thực tế: vẽ sơ đồ phụ, đặt tên cạnh, xác định góc rồi lập phương trình.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c4-review-mistake-1',
      mistake: 'Nhầm hệ thức lượng: $AH^2 = BH \\cdot CH$ thay vì $AH^2 = HB \\cdot HC$ (hình chiếu).',
      correction: 'Bình phương hình chiếu của một cạnh góc vuông lên cạnh huyền = tích hai hình chiếu còn lại.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c4-review-example-1',
      title: 'Bài tổng hợp: Tính toàn bộ tam giác vuông',
      difficulty: 'application',
      problem: 'Tam giác $ABC$ vuông tại $A$ có $\\widehat{B} = 30^\\circ$, $BC = 10$ cm. Tính $AB$, $AC$ và diện tích tam giác.',
      steps: [
        '$\\widehat{C} = 90^\\circ - 30^\\circ = 60^\\circ$.',
        '$AB = BC \\cdot \\cos 30^\\circ = 10 \\times \\frac{\\sqrt{3}}{2} = 5\\sqrt{3}$ cm.',
        '$AC = BC \\cdot \\sin 30^\\circ = 10 \\times \\frac{1}{2} = 5$ cm.',
        '$S = \\frac{1}{2} \\cdot AB \\cdot AC = \\frac{1}{2} \\times 5\\sqrt{3} \\times 5 = \\frac{25\\sqrt{3}}{2}$ cm².'
      ],
      answer: '$AB = 5\\sqrt{3}$ cm, $AC = 5$ cm, $S = \\frac{25\\sqrt{3}}{2}$ cm²'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c4-review-sg-01',
      title: 'Nhận biết và tính tỉ số lượng giác',
      description: 'Nhớ và áp dụng đúng định nghĩa tỉ số lượng giác và các giá trị đặc biệt.',
      difficulty: 'basic',
      templateIds: ['g9-c4-review-tpl-01', 'g9-c4-review-tpl-02']
    },
    {
      id: 'g9-v1-c4-review-sg-02',
      title: 'Giải tam giác vuông và ứng dụng',
      description: 'Tính cạnh, góc và ứng dụng thực tế toàn diện.',
      difficulty: 'application',
      templateIds: ['g9-c4-review-tpl-03', 'g9-c4-review-tpl-04', 'g9-c4-review-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c4-review-tpl-01',
      'g9-c4-review-tpl-02',
      'g9-c4-review-tpl-03',
      'g9-c4-review-tpl-04',
      'g9-c4-review-tpl-05'
    ]
  }
};
