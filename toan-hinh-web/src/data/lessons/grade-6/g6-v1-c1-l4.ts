import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C1L4Content: LessonContent = {
  lessonId: 'g6-v1-c1-l4',
  title: 'Bài 4. Phép cộng và phép trừ số tự nhiên',
  grade: 6,
  track: 'toan-so',
  strand: 'so-hoc',
  chapterId: 'g6-v1-c1',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 4,
    verifiedBy: 'online_toc',
    status: 'draft'
  },
  objectives: [
    'Học sinh thực hiện được phép cộng và phép trừ các số tự nhiên.',
    'Áp dụng tính chất giao hoán, kết hợp của phép cộng để tính nhẩm, tính nhanh một cách hợp lý.',
    'Giải quyết được các bài toán thực tiễn liên quan đến phép cộng và phép trừ số tự nhiên.'
  ],
  prerequisites: [
    'Biết cách đọc và ghi số tự nhiên.',
    'Đã quen thuộc với thứ tự trong tập hợp số tự nhiên.'
  ],
  theory: [
    {
      id: 'g6-v1-c1-l4-theory-1',
      title: '1. Phép cộng số tự nhiên',
      content: 'Phép cộng hai số tự nhiên $a$ và $b$ cho ta một số tự nhiên gọi là tổng của chúng, ký hiệu là $a + b$. Trong đó $a$ và $b$ là các số hạng, số nhận được là tổng.',
      formulas: ['a + b = c']
    },
    {
      id: 'g6-v1-c1-l4-theory-2',
      title: '2. Tính chất của phép cộng',
      content: 'Phép cộng số tự nhiên có các tính chất:\n- **Giao hoán**: $a + b = b + a$\n- **Kết hợp**: $(a + b) + c = a + (b + c)$\n- **Cộng với số 0**: $a + 0 = 0 + a = a$',
      note: 'Áp dụng tính chất giao hoán và kết hợp để nhóm các số hạng tạo thành số tròn chục, tròn trăm giúp tính nhanh.'
    },
    {
      id: 'g6-v1-c1-l4-theory-3',
      title: '3. Phép trừ số tự nhiên',
      content: 'Cho hai số tự nhiên $a$ và $b$, nếu có số tự nhiên $x$ sao cho $b + x = a$ thì ta có phép trừ $a - b = x$. Trong đó $a$ là số bị trừ, $b$ là số trừ, $x$ là hiệu.',
      note: 'Phép trừ $a - b$ chỉ thực hiện được trong tập hợp số tự nhiên nếu $a \\ge b$.'
    }
  ],
  remember: [
    'Số bị trừ = Số trừ + Hiệu',
    'Số trừ = Số bị trừ - Hiệu',
    'Số hạng = Tổng - Số hạng đã biết'
  ],
  tips: [
    'Tìm các số có chữ số hàng đơn vị cộng lại bằng 10, 100,... để kết hợp trước.',
    'Ví dụ: $23 + 47 = (20+40) + (3+7) = 60 + 10 = 70$.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c1-l4-mistake-1',
      mistake: 'Thực hiện phép trừ khi số bị trừ nhỏ hơn số trừ trong tập hợp số tự nhiên.',
      correction: 'Kiểm tra kỹ điều kiện của phép trừ trước khi tính toán. Phép trừ $a - b$ chỉ thực hiện được nếu $a \\ge b$.'
    },
    {
      id: 'g6-v1-c1-l4-mistake-2',
      mistake: 'Nhầm lẫn thứ tự thực hiện phép cộng và phép trừ khi không có ngoặc.',
      correction: 'Khi biểu thức chỉ có phép cộng và phép trừ, ta phải thực hiện từ trái sang phải. Ví dụ: $10 - 5 + 2 = 5 + 2 = 7$.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c1-l4-we1',
      title: 'Tính nhanh một cách hợp lý',
      difficulty: 'basic',
      problem: 'Tính nhanh: $A = 117 + 68 + 83$',
      steps: [
        'Nhận thấy chữ số hàng đơn vị của $117$ và $83$ là $7$ và $3$, có tổng là $10$. Ta sẽ nhóm hai số này lại.',
        'Sử dụng tính chất giao hoán: $A = 117 + 83 + 68$',
        'Sử dụng tính chất kết hợp: $A = (117 + 83) + 68$',
        'Thực hiện phép tính trong ngoặc: $117 + 83 = 200$',
        'Cộng số còn lại: $A = 200 + 68 = 268$.'
      ],
      answer: '268'
    },
    {
      id: 'g6-v1-c1-l4-we2',
      title: 'Tìm x',
      difficulty: 'understanding',
      problem: 'Tìm số tự nhiên $x$, biết: $2436 + x = 3000$',
      steps: [
        'Trong phép cộng, $x$ đóng vai trò là số hạng chưa biết.',
        'Muốn tìm số hạng chưa biết, ta lấy tổng trừ đi số hạng đã biết.',
        'Ta có: $x = 3000 - 2436$',
        'Thực hiện phép trừ: $x = 564$.'
      ],
      answer: '564'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c1-l4-skill-1',
      title: 'Phép cộng số tự nhiên',
      description: 'Cộng các số tự nhiên, tính nhanh và hợp lý.',
      difficulty: 'basic',
      templateIds: ['g6-c1-l4-add-natural-basic-001']
    },
    {
      id: 'g6-v1-c1-l4-skill-2',
      title: 'Phép trừ số tự nhiên',
      description: 'Trừ các số tự nhiên.',
      difficulty: 'basic',
      templateIds: ['g6-c1-l4-sub-natural-basic-001']
    },
    {
      id: 'g6-v1-c1-l4-skill-3',
      title: 'Tìm x',
      description: 'Tìm số hạng chưa biết hoặc số bị trừ, số trừ.',
      difficulty: 'understanding',
      templateIds: ['g6-c1-l4-find-x-understanding-001']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-c1-l4-add-natural-basic-001',
      'g6-c1-l4-sub-natural-basic-001',
      'g6-c1-l4-find-x-understanding-001'
    ]
  }
};
