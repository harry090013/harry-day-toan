import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C10L32Content: LessonContent = {
  lessonId: 'g9-v2-c10-l32',
  title: 'Bài 32. Hình cầu',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-khoi-do-luong',
  chapterId: 'g9-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    lessonNo: 32,
    verifiedBy: 'online_toc',
    notes: 'Định nghĩa mặt cầu, hình cầu, công thức tính diện tích mặt cầu và thể tích hình cầu.',
    status: 'draft'
  },
  objectives: [
    'Mô tả được hình cầu, mặt cầu, tâm, bán kính, đường kính.',
    'Tính được diện tích mặt cầu khi biết bán kính hoặc đường kính.',
    'Tính được thể tích hình cầu.',
    'Giải quyết được một số vấn đề thực tiễn gắn với hình cầu (ví dụ: quả bóng, Trái Đất, kiến trúc quả cầu).'
  ],
  prerequisites: [
    'Hình nón, hình trụ, lũy thừa bậc ba, công thức tính chu vi diện tích hình tròn.'
  ],
  theory: [
    {
      id: 'g9-v2-c10-l32-theory-1',
      title: '1. Khái niệm hình cầu',
      content: 'Khi quay một nửa hình tròn tâm $O$ bán kính $R$ một vòng quanh đường kính cố định ta được một hình cầu.\n- **Mặt cầu:** Là nửa đường tròn quét nên, gồm các điểm cách $O$ một khoảng bằng $R$.\n- **Hình cầu:** Gồm mặt cầu và tất cả các điểm nằm trong mặt cầu đó.',
      diagram: {
        id: 'g9-v2-c10-l32-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c10-solids',
        title: 'Hình cầu',
        alt: 'Hình cầu tâm O bán kính R.',
        notToScale: true,
        data: {
          type: 'sphere',
          r: 'R'
        }
      }
    },
    {
      id: 'g9-v2-c10-l32-theory-2',
      title: '2. Diện tích mặt cầu và Thể tích hình cầu',
      content: '**Diện tích mặt cầu ($S$):**\n$$S = 4\\pi R^2 = \\pi d^2$$\n*(với d là đường kính hình cầu $d = 2R$)*\n\n**Thể tích hình cầu ($V$):**\n$$V = \\frac{4}{3} \\pi R^3$$',
      formulas: [
        'S = 4\\pi R^2',
        'V = \\frac{4}{3} \\pi R^3'
      ]
    }
  ],
  remember: [
    'Trái Đất có thể coi gần đúng là một hình cầu lớn có bán kính $R \\approx 6400\\text{ km}$.',
    'Nếu bán kính tăng lên $k$ lần thì diện tích mặt cầu tăng lên $k^2$ lần và thể tích hình cầu tăng lên $k^3$ lần.'
  ],
  tips: [
    'Để tính diện tích mặt cầu nhanh khi có đường kính $d$, hãy áp dụng công thức $S = \\pi d^2$. Nếu dùng bán kính, hãy nhớ hệ số 4: $S = 4\\pi R^2$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c10-l32-mistake-1',
      mistake: 'Nhầm lẫn khi tính thể tích hình cầu dùng đường kính thay cho bán kính mà quên không chia 2.',
      correction: 'Hãy luôn đổi đường kính thành bán kính bằng cách chia 2 ($R = d/2$) trước khi thế vào công thức thể tích $V = \\frac{4}{3}\\pi R^3$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c10-l32-example-1',
      title: 'Tính diện tích mặt cầu',
      difficulty: 'basic',
      problem: 'Tính diện tích mặt cầu có bán kính $R = 5\\text{ cm}$ (để kết quả chứa hằng số $\\pi$).',
      steps: [
        'Bước 1: Sử dụng công thức diện tích mặt cầu: $S = 4\\pi R^2$.',
        'Bước 2: Thay số $R = 5\\text{ cm}$: $S = 4 \\times \\pi \\times 5^2$.',
        'Bước 3: Tính toán: $S = 4 \\times 25 \\times \\pi = 100\\pi\\text{ cm}^2$.'
      ],
      answer: '100π cm²'
    },
    {
      id: 'g9-v2-c10-l32-example-2',
      title: 'Tính thể tích hình cầu',
      difficulty: 'basic',
      problem: 'Tính thể tích của quả bóng hình cầu có đường kính $d = 6\\text{ cm}$ (lấy $\\pi \\approx 3,14$).',
      steps: [
        'Bước 1: Tính bán kính quả bóng: $R = \\frac{d}{2} = \\frac{6}{2} = 3\\text{ cm}$.',
        'Bước 2: Sử dụng công thức thể tích hình cầu: $V = \\frac{4}{3}\\pi R^3$.',
        'Bước 3: Thay số: $V = \\frac{4}{3} \\times 3,14 \\times 3^3 = \\frac{4}{3} \\times 3,14 \\times 27 = 36 \\times 3,14 = 113,04\\text{ cm}^3$.'
      ],
      answer: '113.04 cm³'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c10-l32-sg-01',
      title: 'Tính diện tích mặt cầu',
      description: 'Tính diện tích mặt cầu khi biết bán kính hoặc đường kính và ngược lại.',
      difficulty: 'basic',
      templateIds: ['g9-v2-c10-l32-tpl-01', 'g9-v2-c10-l32-tpl-02']
    },
    {
      id: 'g9-v2-c10-l32-sg-02',
      title: 'Tính thể tích và toán thực tế hình cầu',
      description: 'Tính thể tích hình cầu, quả bóng, thể tích lượng nước dâng lên hoặc diện tích bề mặt Trái Đất.',
      difficulty: 'understanding',
      templateIds: ['g9-v2-c10-l32-tpl-03', 'g9-v2-c10-l32-tpl-04', 'g9-v2-c10-l32-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v2-c10-l32-tpl-01',
      'g9-v2-c10-l32-tpl-02',
      'g9-v2-c10-l32-tpl-03',
      'g9-v2-c10-l32-tpl-04',
      'g9-v2-c10-l32-tpl-05'
    ]
  }
};
