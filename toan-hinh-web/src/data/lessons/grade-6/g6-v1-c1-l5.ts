import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C1L5Content: LessonContent = {
  lessonId: 'g6-v1-c1-l5',
  title: 'Bài 5. Phép nhân và phép chia số tự nhiên',
  grade: 6,
  track: 'toan-so',
  strand: 'so-hoc',
  chapterId: 'g6-v1-c1',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 5,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Bài phép nhân và phép chia số tự nhiên, tính chất phép nhân, phép chia có dư.'
  },
  objectives: [
    'Thực hiện được phép nhân và phép chia hai số tự nhiên.',
    'Vận dụng các tính chất giao hoán, kết hợp, phân phối của phép nhân để tính nhanh, tính nhẩm hợp lý.',
    'Nhận biết phép chia hết và phép chia có dư, viết đúng hệ thức phép chia có dư.',
    'Giải quyết được các bài toán thực tiễn sử dụng phép nhân và phép chia.'
  ],
  prerequisites: [
    'Biết thực hiện phép cộng và phép trừ số tự nhiên.',
    'Bảng cửu chương nhân chia cơ bản.'
  ],
  theory: [
    {
      id: 'g6-v1-c1-l5-theory-1',
      title: '1. Phép nhân số tự nhiên',
      content: 'Phép nhân hai số tự nhiên $a$ và $b$ cho ta một số tự nhiên gọi là tích, ký hiệu là $a \\cdot b$ hoặc $a \\times b$. Trong đó $a$ và $b$ là các thừa số.',
      formulas: ['a \\cdot b = c']
    },
    {
      id: 'g6-v1-c1-l5-theory-2',
      title: '2. Tính chất của phép nhân',
      content: 'Phép nhân số tự nhiên có các tính chất:\n- **Giao hoán**: $a \\cdot b = b \\cdot a$\n- **Kết hợp**: $(a \\cdot b) \\cdot c = a \\cdot (b \\cdot c)$\n- **Nhân với số 1**: $a \\cdot 1 = 1 \\cdot a = a$\n- **Phân phối đối với phép cộng và phép trừ**: $a \\cdot (b + c) = a \\cdot b + a \\cdot c$ và $a \\cdot (b - c) = a \\cdot b - a \\cdot c$',
      note: 'Các nhóm tích hay dùng để tính nhanh: $2 \\cdot 5 = 10$, $4 \\cdot 25 = 100$, $8 \\cdot 125 = 1000$.'
    },
    {
      id: 'g6-v1-c1-l5-theory-3',
      title: '3. Phép chia hết và phép chia có dư',
      content: 'Cho hai số tự nhiên $a$ và $b$ ($b \\neq 0$):\n- Nếu có số tự nhiên $q$ sao cho $a = b \\cdot q$, ta nói phép chia $a \\div b$ là **phép chia hết** ($a \\div b = q$).\n- Nếu có số dư $r$ ($0 < r < b$) sao cho $a = b \\cdot q + r$, ta nói phép chia $a \\div b$ là **phép chia có dư** ($q$ là thương, $r$ là số dư).',
      formulas: ['a = b \\cdot q + r \\quad (0 \\le r < b)']
    }
  ],
  remember: [
    'Trong phép nhân, dấu chấm $\\cdot$ thường được dùng thay cho dấu nhân $\\times$.',
    'Trong phép chia có dư: Số dư luôn nhỏ hơn số chia ($0 < r < b$).',
    'Số bị chia = Số chia × Thương + Số dư.',
    'Nhân một số với 0 luôn bằng 0: $a \\cdot 0 = 0$.'
  ],
  tips: [
    'Khi nhân một số với 9 hoặc 99, hãy viết số đó nhân với $(10 - 1)$ hoặc $(100 - 1)$ để tính nhẩm nhanh.',
    'Ví dụ: $25 \\cdot 9 = 25 \\cdot (10 - 1) = 250 - 25 = 225$.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c1-l5-mistake-1',
      mistake: 'Viết số dư bằng hoặc lớn hơn số chia trong phép chia có dư.',
      correction: 'Số dư $r$ bắt buộc phải thỏa mãn $r < b$ (số chia).'
    },
    {
      id: 'g6-v1-c1-l5-mistake-2',
      mistake: 'Không áp dụng tính chất phân phối đúng cách khi có dấu trừ.',
      correction: 'Ví dụ: $5 \\cdot (10 - 2) = 5 \\cdot 10 - 5 \\cdot 2 = 50 - 10 = 40$. Tránh nhầm thành $5 \\cdot 10 - 2$.'
    },
    {
      id: 'g6-v1-c1-l5-mistake-3',
      mistake: 'Thực hiện phép chia trước khi nhân từ trái sang phải trong biểu thức không có ngoặc.',
      correction: 'Phép nhân và phép chia có cùng độ ưu tiên, thực hiện lần lượt từ trái sang phải.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c1-l5-example-1',
      title: 'Tính nhanh tích các thừa số',
      difficulty: 'basic',
      problem: 'Tính nhanh: $T = 25 \\cdot 17 \\cdot 4$',
      steps: [
        'Nhận thấy tích $25 \\cdot 4 = 100$ là số tròn trăm, ta sẽ nhóm hai thừa số này lại.',
        'Sử dụng tính chất giao hoán: $T = 25 \\cdot 4 \\cdot 17$.',
        'Sử dụng tính chất kết hợp: $T = (25 \\cdot 4) \\cdot 17$.',
        'Thực hiện nhân trong ngoặc: $100 \\cdot 17 = 1700$.'
      ],
      answer: '1700'
    },
    {
      id: 'g6-v1-c1-l5-example-2',
      title: 'Tìm thương và số dư',
      difficulty: 'understanding',
      problem: 'Tìm thương và số dư của phép chia số $147$ cho $12$.',
      steps: [
        'Thực hiện đặt phép tính chia $147 \\div 12$.',
        '$14$ chia $12$ được $1$ dư $2$. Hạ $7$ được $27$.',
        '$27$ chia $12$ được $2$ dư $3$.',
        'Vậy thương là $12$ và số dư là $3$. Ta có: $147 = 12 \\cdot 12 + 3$.'
      ],
      answer: 'Thương là 12, số dư là 3'
    },
    {
      id: 'g6-v1-c1-l5-example-3',
      title: 'Bài toán thực tế',
      difficulty: 'application',
      problem: 'Một phòng học cần xếp bàn ghế cho 35 học sinh, mỗi bàn ghế ngồi tối đa được 2 học sinh. Hỏi cần ít nhất bao nhiêu bộ bàn ghế?',
      steps: [
        'Thực hiện phép chia số học sinh cho số chỗ ngồi mỗi bàn: $35 \\div 2$.',
        'Ta có: $35 = 2 \\cdot 17 + 1$ (thương là 17, số dư là 1).',
        'Vì còn dư 1 học sinh chưa có chỗ ngồi nên cần thêm 1 bàn nữa.',
        'Số bàn ghế ít nhất cần có là: $17 + 1 = 18$ bộ.'
      ],
      answer: '18 bộ'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c1-l5-skill-1',
      title: 'Tính nhanh phép nhân',
      description: 'Áp dụng tính chất giao hoán, kết hợp, phân phối để tính nhanh tích.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c1-l5-tpl-nhan-tinh-nhanh']
    },
    {
      id: 'g6-v1-c1-l5-skill-2',
      title: 'Phép chia có dư',
      description: 'Xác định thương và số dư của phép chia.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l5-tpl-chia-co-du']
    },
    {
      id: 'g6-v1-c1-l5-skill-3',
      title: 'Tìm x trong phép nhân/chia',
      description: 'Giải bài toán tìm x dưới dạng tích hoặc thương.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l5-tpl-tim-x-nhan-chia']
    },
    {
      id: 'g6-v1-c1-l5-skill-4',
      title: 'Giải toán thực tiễn phép nhân/chia',
      description: 'Giải các bài toán đố thực tế chia quà, xếp hàng, mua sắm.',
      difficulty: 'application',
      templateIds: ['g6-v1-c1-l5-tpl-toan-thuc-te']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c1-l5-tpl-nhan-tinh-nhanh',
      'g6-v1-c1-l5-tpl-chia-co-du',
      'g6-v1-c1-l5-tpl-tim-x-nhan-chia',
      'g6-v1-c1-l5-tpl-toan-thuc-te'
    ]
  }
};
