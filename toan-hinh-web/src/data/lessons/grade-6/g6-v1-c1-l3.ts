import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C1L3Content: LessonContent = {
  lessonId: 'g6-v1-c1-l3',
  title: 'Bài 3. Thứ tự trong tập hợp các số tự nhiên',
  grade: 6,
  track: 'toan-so',
  strand: 'so-hoc',
  chapterId: 'g6-v1-c1',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 3,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Bài thứ tự số tự nhiên, tập hợp số thỏa mãn điều kiện so sánh.'
  },
  objectives: [
    'Biết cách so sánh hai số tự nhiên và hiểu tính chất bắc cầu.',
    'Dùng đúng các kí hiệu <, >, ≤, ≥.',
    'Xác định được số liền trước và số liền sau của một số tự nhiên.'
  ],
  prerequisites: [
    'Biết cách đọc ghi số tự nhiên.',
    'Hiểu thế nào là một tập hợp.'
  ],
  theory: [
    {
      id: 'g6-v1-c1-l3-theory-1',
      title: '1. So sánh hai số tự nhiên',
      content: 'Trong hai số tự nhiên khác nhau, luôn có một số nhỏ hơn số kia. Nếu số $a$ nhỏ hơn số $b$, ta viết $a < b$ hoặc $b > a$. Tính chất bắc cầu: Nếu $a < b$ và $b < c$ thì $a < c$.'
    },
    {
      id: 'g6-v1-c1-l3-theory-2',
      title: '2. Kí hiệu ≤ và ≥',
      content: 'Ta dùng kí hiệu:\n- $a \\le b$ để chỉ $a < b$ hoặc $a = b$ (đọc là $a$ nhỏ hơn hoặc bằng $b$).\n- $a \\ge b$ để chỉ $a > b$ hoặc $a = b$ (đọc là $a$ lớn hơn hoặc bằng $b$).',
      formulas: ['a \\le b', 'a \\ge b']
    },
    {
      id: 'g6-v1-c1-l3-theory-3',
      title: '3. Số liền trước và số liền sau',
      content: 'Nếu số tự nhiên $b$ lớn hơn số tự nhiên $a$ đúng $1$ đơn vị ($b = a + 1$), ta nói:\n- $b$ là số liền sau của $a$.\n- $a$ là số liền trước của $b$.',
      note: 'Số 0 là số tự nhiên nhỏ nhất. Số 0 không có số liền trước trong tập hợp số tự nhiên.'
    }
  ],
  remember: [
    'Trên tia số nằm ngang, điểm biểu diễn số nhỏ hơn ở bên trái điểm biểu diễn số lớn hơn.',
    'Mỗi số tự nhiên $n$ (với $n > 0$) đều có duy nhất một số liền trước là $n-1$.',
    'Mỗi số tự nhiên $n$ đều có duy nhất một số liền sau là $n+1$.',
    'Số 0 không có số liền trước trong tập hợp số tự nhiên.'
  ],
  tips: [
    'Để tránh nhầm lẫn kí hiệu $\\le$ và $\\ge$, hãy nhớ đầu nhọn của kí hiệu luôn chỉ về phía số nhỏ hơn.',
    'Khi tìm số liền trước, hãy lấy số đó trừ đi 1. Khi tìm số liền sau, hãy lấy số đó cộng thêm 1.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c1-l3-mistake-1',
      mistake: 'Cho rằng số 0 có số liền trước là số tự nhiên khác.',
      correction: 'Trong tập hợp các số tự nhiên $\\mathbb{N}$, số 0 không có số liền trước.'
    },
    {
      id: 'g6-v1-c1-l3-mistake-2',
      mistake: 'Liệt kê sai phần tử khi có dấu $\\le$ hoặc $\\ge$.',
      correction: 'Ví dụ: tập hợp số tự nhiên $x$ thỏa $3 < x \\le 6$ phải chứa số $6$: $\\{4; 5; 6\\}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c1-l3-example-1',
      title: 'Tìm số liền trước và số liền sau',
      difficulty: 'basic',
      problem: 'Tìm số liền trước và số liền sau của số tự nhiên $1000$.',
      steps: [
        'Tìm số liền trước: lấy $1000 - 1 = 999$.',
        'Tìm số liền sau: lấy $1000 + 1 = 1001$.'
      ],
      answer: '999 và 1001'
    },
    {
      id: 'g6-v1-c1-l3-example-2',
      title: 'So sánh số tự nhiên và viết tập hợp',
      difficulty: 'understanding',
      problem: 'Viết tập hợp $A$ các số tự nhiên $x$ sao cho $4 \\le x < 8$ bằng cách liệt kê.',
      steps: [
        'Dấu $\\le$ ở vế trái nghĩa là $x$ có thể bằng $4$.',
        'Dấu $<$ ở vế phải nghĩa là $x$ phải nhỏ hơn $8$ (không lấy $8$).',
        'Các số tự nhiên thỏa mãn là: $4, 5, 6, 7$.',
        'Viết tập hợp: $A = \\{4; 5; 6; 7\\}$.'
      ],
      answer: 'A = {4; 5; 6; 7}'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c1-l3-skill-1',
      title: 'Số liền trước và số liền sau',
      description: 'Xác định số liền trước hoặc số liền sau của một số tự nhiên cho trước.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c1-l3-tpl-lien-truoc-sau']
    },
    {
      id: 'g6-v1-c1-l3-skill-2',
      title: 'Viết tập hợp thỏa mãn điều kiện so sánh',
      description: 'Liệt kê các phần tử của tập hợp số tự nhiên thỏa mãn bất đẳng thức kép.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l3-tpl-tap-hop-so-sanh']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c1-l3-tpl-lien-truoc-sau',
      'g6-v1-c1-l3-tpl-tap-hop-so-sanh'
    ]
  }
};
