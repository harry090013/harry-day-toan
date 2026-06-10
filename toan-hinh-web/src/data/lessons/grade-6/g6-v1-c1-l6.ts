import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C1L6Content: LessonContent = {
  lessonId: 'g6-v1-c1-l6',
  title: 'Bài 6. Luỹ thừa với số mũ tự nhiên',
  grade: 6,
  track: 'toan-so',
  strand: 'so-hoc',
  chapterId: 'g6-v1-c1',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 6,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Bài lũy thừa, nhân/chia lũy thừa cùng cơ số.'
  },
  objectives: [
    'Hiểu định nghĩa lũy thừa với số mũ tự nhiên, nhận biết cơ số và số mũ.',
    'Thực hiện được phép nhân hai lũy thừa cùng cơ số.',
    'Thực hiện được phép chia hai lũy thừa cùng cơ số.',
    'Biết viết gọn tích của nhiều thừa số giống nhau dưới dạng lũy thừa.'
  ],
  prerequisites: [
    'Phép nhân các số tự nhiên.',
    'Ký hiệu phép nhân cơ bản.'
  ],
  theory: [
    {
      id: 'g6-v1-c1-l6-theory-1',
      title: '1. Lũy thừa với số mũ tự nhiên',
      content: 'Lũy thừa bậc $n$ của một số tự nhiên $a$ là tích của $n$ thừa số bằng nhau, mỗi thừa số bằng $a$.\n\nKý hiệu: $a^n = a \\cdot a \\cdot ... \\cdot a$ ($n$ thừa số $a$, $n \\neq 0$).\n- $a$ gọi là cơ số.\n- $n$ gọi là số mũ.',
      formulas: ['a^n = \\underbrace{a \\cdot a \\cdot ... \\cdot a}_{n \\text{ thừa số}}']
    },
    {
      id: 'g6-v1-c1-l6-theory-2',
      title: '2. Nhân hai lũy thừa cùng cơ số',
      content: 'Khi nhân hai lũy thừa cùng cơ số, ta giữ nguyên cơ số và cộng các số mũ.',
      formulas: ['a^m \\cdot a^n = a^{m+n}']
    },
    {
      id: 'g6-v1-c1-l6-theory-3',
      title: '3. Chia hai lũy thừa cùng cơ số',
      content: 'Khi chia hai lũy thừa cùng cơ số (khác 0), ta giữ nguyên cơ số và trừ các số mũ.',
      formulas: ['a^m \\div a^n = a^{m-n} \\quad (a \\neq 0, m \\ge n)']
    }
  ],
  remember: [
    'Quy ước: $a^1 = a$ và $a^0 = 1$ (với $a \\neq 0$).',
    '$a^2$ còn gọi là bình phương của $a$ (hoặc bình phương).',
    '$a^3$ còn gọi là lập phương của $a$ (hoặc lập phương).',
    'Thừa số mũ biểu thị số lần nhân, tránh nhầm lẫn giữa $a^n$ với $a \\cdot n$.'
  ],
  tips: [
    'Ghi nhớ lũy thừa cơ số 2 và 10 thông dụng:\n- $2^1=2, 2^2=4, 2^3=8, 2^4=16, 2^5=32$.\n- $10^1=10, 10^2=100, 10^3=1000$ (số mũ chính là số chữ số 0).'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c1-l6-mistake-1',
      mistake: 'Tính nhầm $a^n = a \\cdot n$ (ví dụ tính $2^3 = 2 \\cdot 3 = 6$).',
      correction: 'Lũy thừa là nhân các thừa số lặp lại: $2^3 = 2 \\cdot 2 \\cdot 2 = 8$.'
    },
    {
      id: 'g6-v1-c1-l6-mistake-2',
      mistake: 'Nhân hai lũy thừa cùng cơ số bằng cách nhân cơ số với nhau.',
      correction: 'Giữ nguyên cơ số, chỉ cộng số mũ. Ví dụ: $2^2 \\cdot 2^3 = 2^5$ chứ không phải $4^5$.'
    },
    {
      id: 'g6-v1-c1-l6-mistake-3',
      mistake: 'Cho rằng $a^0 = 0$.',
      correction: 'Theo quy ước toán học, mọi cơ số khác 0 nâng lên lũy thừa 0 đều bằng 1: $a^0 = 1$.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c1-l6-example-1',
      title: 'Viết gọn tích dưới dạng lũy thừa',
      difficulty: 'basic',
      problem: 'Viết gọn tích sau dưới dạng lũy thừa và chỉ rõ cơ số, số mũ: $T = 5 \\cdot 5 \\cdot 5 \\cdot 5$.',
      steps: [
        'Đếm số lượng thừa số giống nhau: Có 4 thừa số 5.',
        'Viết gọn dưới dạng lũy thừa: $T = 5^4$.',
        'Cơ số là $5$, số mũ là $4$.'
      ],
      answer: '5^4'
    },
    {
      id: 'g6-v1-c1-l6-example-2',
      title: 'Nhân hai lũy thừa cùng cơ số',
      difficulty: 'understanding',
      problem: 'Viết kết quả phép tính dưới dạng một lũy thừa: $A = 3^2 \\cdot 3^5$.',
      steps: [
        'Hai lũy thừa có cùng cơ số là 3.',
        'Giữ nguyên cơ số 3 và cộng hai số mũ: $2 + 5 = 7$.',
        'Kết quả: $A = 3^{2+5} = 3^7$.'
      ],
      answer: '3^7'
    },
    {
      id: 'g6-v1-c1-l6-example-3',
      title: 'Chia hai lũy thừa cùng cơ số',
      difficulty: 'understanding',
      problem: 'Viết kết quả phép tính dưới dạng một lũy thừa: $B = 6^8 \\div 6^3$.',
      steps: [
        'Hai lũy thừa có cùng cơ số là 6.',
        'Giữ nguyên cơ số 6 và trừ hai số mũ: $8 - 3 = 5$.',
        'Kết quả: $B = 6^{8-3} = 6^5$.'
      ],
      answer: '6^5'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c1-l6-skill-1',
      title: 'Tính giá trị lũy thừa',
      description: 'Tính giá trị số hoặc viết tích dưới dạng số mũ lũy thừa.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c1-l6-tpl-tinh-luy-thua']
    },
    {
      id: 'g6-v1-c1-l6-skill-2',
      title: 'Nhân hai lũy thừa cùng cơ số',
      description: 'Giữ nguyên cơ số và cộng số mũ.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l6-tpl-nhan-luy-thua']
    },
    {
      id: 'g6-v1-c1-l6-skill-3',
      title: 'Chia hai lũy thừa cùng cơ số',
      description: 'Giữ nguyên cơ số và trừ số mũ.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l6-tpl-chia-luy-thua']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c1-l6-tpl-tinh-luy-thua',
      'g6-v1-c1-l6-tpl-nhan-luy-thua',
      'g6-v1-c1-l6-tpl-chia-luy-thua'
    ]
  }
};
