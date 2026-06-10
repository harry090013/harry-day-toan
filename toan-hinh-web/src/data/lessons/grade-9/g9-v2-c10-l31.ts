import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V2C10L31Content: LessonContent = {
  lessonId: 'g9-v2-c10-l31',
  title: 'Bài 31. Hình trụ và hình nón',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-khoi-do-luong',
  chapterId: 'g9-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 2,
    lessonNo: 31,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa hình trụ, hình nón, công thức tính diện tích xung quanh, toàn phần và thể tích.'
  },
  objectives: [
    'Mô tả được hình trụ và hình nón (đáy, bán kính, đường cao, đường sinh).',
    'Tính được diện tích xung quanh, diện tích toàn phần và thể tích của hình trụ.',
    'Tính được diện tích xung quanh, diện tích toàn phần và thể tích của hình nón.'
  ],
  prerequisites: [
    'Hình tròn, chu vi và diện tích hình tròn, căn bậc hai, định lí Pythagore.'
  ],
  theory: [
    {
      id: 'g9-v2-c10-l31-theory-1',
      title: '1. Hình trụ',
      content: 'Hình trụ được tạo ra khi quay một hình chữ nhật quanh một cạnh cố định.\n- **Diện tích xung quanh ($S_{xq}$):**\n  $$S_{xq} = 2\\pi r h$$\n- **Diện tích toàn phần ($S_{tp}$):**\n  $$S_{tp} = 2\\pi r h + 2\\pi r^2$$\n- **Thể tích ($V$):**\n  $$V = S_{đáy} \\cdot h = \\pi r^2 h$$',
      diagram: {
        id: 'g9-v2-c10-l31-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c10-solids',
        title: 'Hình trụ',
        alt: 'Hình trụ có bán kính đáy r và chiều cao h.',
        notToScale: true,
        data: {
          type: 'cylinder',
          r: 'r',
          h: 'h'
        }
      }
    },
    {
      id: 'g9-v2-c10-l31-theory-2',
      title: '2. Hình nón',
      content: 'Hình nón được tạo ra khi quay một tam giác vuông quanh một cạnh góc vuông cố định.\n- **Mối liên hệ:** $l^2 = r^2 + h^2$ (với $l$ là đường sinh, $r$ là bán kính đáy, $h$ là chiều cao).\n- **Diện tích xung quanh ($S_{xq}$):**\n  $$S_{xq} = \\pi r l$$\n- **Diện tích toàn phần ($S_{tp}$):**\n  $$S_{tp} = \\pi r l + \\pi r^2$$\n- **Thể tích ($V$):**\n  $$V = \\frac{1}{3} S_{đáy} \\cdot h = \\frac{1}{3} \\pi r^2 h$$',
      diagram: {
        id: 'g9-v2-c10-l31-theory-2-diagram',
        placement: 'theory',
        variant: 'g9-c10-solids',
        title: 'Hình nón',
        alt: 'Hình nón có bán kính đáy r, chiều cao h và đường sinh l.',
        notToScale: true,
        data: {
          type: 'cone',
          r: 'r',
          h: 'h',
          l: 'l'
        }
      }
    }
  ],
  remember: [
    'Thể tích hình nón bằng đúng $\\frac{1}{3}$ thể tích hình trụ có cùng bán kính đáy và chiều cao.',
    'Để tính diện tích xung quanh của hình nón, ta bắt buộc phải sử dụng **đường sinh l**, không được dùng chiều cao $h$. Nếu biết $r$ và $h$, hãy tìm $l$ bằng định lí Pythagore: $l = \\sqrt{r^2 + h^2}$.'
  ],
  tips: [
    'Trong các bài toán thực tế (loại lon nước, hộp sữa là hình trụ; nón lá, mũ sinh nhật là hình nón), hãy xác định rõ bán kính đáy $r$ thay vì đường kính $d$.'
  ],
  commonMistakes: [
    {
      id: 'g9-v2-c10-l31-mistake-1',
      mistake: 'Sử dụng chiều cao h thay cho đường sinh l trong công thức diện tích xung quanh của hình nón.',
      correction: 'Công thức diện tích xung quanh của hình nón là $S_{xq} = \\pi r l$ (trong đó $l$ là đường sinh). Chỉ dùng chiều cao $h$ khi tính thể tích.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v2-c10-l31-example-1',
      title: 'Tính diện tích xung quanh và thể tích hình trụ',
      difficulty: 'basic',
      problem: 'Cho hình trụ có bán kính đáy $r = 3\\text{ cm}$ và chiều cao $h = 5\\text{ cm}$. Tính diện tích xung quanh và thể tích của hình trụ (lấy $\\pi \\approx 3,14$).',
      steps: [
        'Bước 1: Áp dụng công thức diện tích xung quanh hình trụ: $S_{xq} = 2\\pi r h = 2 \\times 3,14 \\times 3 \\times 5 = 94,2\\text{ cm}^2$.',
        'Bước 2: Áp dụng công thức tính thể tích hình trụ: $V = \\pi r^2 h = 3,14 \\times 3^2 \\times 5 = 3,14 \\times 9 \\times 5 = 141,3\\text{ cm}^3$.'
      ],
      answer: 'S_xq = 94.2 cm², V = 141.3 cm³'
    },
    {
      id: 'g9-v2-c10-l31-example-2',
      title: 'Tính đường sinh và diện tích xung quanh hình nón',
      difficulty: 'understanding',
      problem: 'Cho hình nón có bán kính đáy $r = 5\\text{ cm}$ và chiều cao $h = 12\\text{ cm}$. Tính diện tích xung quanh hình nón (kết quả viết dưới dạng chứa hằng số $\\pi$).',
      steps: [
        'Bước 1: Tính đường sinh $l$ bằng định lí Pythagore: $l = \\sqrt{r^2 + h^2} = \\sqrt{5^2 + 12^2} = \\sqrt{25 + 144} = \\sqrt{169} = 13\\text{ cm}$.',
        'Bước 2: Sử dụng công thức diện tích xung quanh hình nón: $S_{xq} = \\pi r l$.',
        'Bước 3: Thay số: $S_{xq} = \\pi \\times 5 \\times 13 = 65\\pi\\text{ cm}^2$.'
      ],
      answer: '65π cm²'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v2-c10-l31-sg-01',
      title: 'Các yếu tố và diện tích hình trụ, hình nón',
      description: 'Tính diện tích xung quanh, diện tích toàn phần, hoặc đường sinh của hình trụ và hình nón.',
      difficulty: 'basic',
      templateIds: ['g9-v2-c10-l31-tpl-01', 'g9-v2-c10-l31-tpl-02', 'g9-v2-c10-l31-tpl-03']
    },
    {
      id: 'g9-v2-c10-l31-sg-02',
      title: 'Thể tích hình trụ, hình nón',
      description: 'Tính thể tích và giải quyết một số bài toán thực tế liên quan đến dung tích bình chứa hình trụ, hình nón.',
      difficulty: 'understanding',
      templateIds: ['g9-v2-c10-l31-tpl-04', 'g9-v2-c10-l31-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v2-c10-l31-tpl-01',
      'g9-v2-c10-l31-tpl-02',
      'g9-v2-c10-l31-tpl-03',
      'g9-v2-c10-l31-tpl-04',
      'g9-v2-c10-l31-tpl-05'
    ]
  }
};
