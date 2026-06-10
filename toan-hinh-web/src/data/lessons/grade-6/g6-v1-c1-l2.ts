import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C1L2Content: LessonContent = {
  lessonId: 'g6-v1-c1-l2',
  title: 'Bài 2. Cách ghi số tự nhiên',
  grade: 6,
  track: 'toan-so',
  strand: 'so-hoc',
  chapterId: 'g6-v1-c1',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Bản nháp tự biên soạn, cần giáo viên duyệt và đối chiếu trước khi phát hành.'
  },
  objectives: [
    'Hiểu cấu tạo thập phân và phân biệt chữ số với số.',
    'Xác định được giá trị của từng chữ số dựa trên hàng tương ứng.',
    'Biết biểu diễn số tự nhiên thành tổng cấu tạo thập phân.',
    'Đọc và viết thành thạo các số La Mã trong phạm vi từ 1 đến 30.'
  ],
  prerequisites: [
    'Nhận biết được các chữ số tự nhiên từ 0 đến 9.',
    'Hiểu khái niệm tập hợp và cách viết tập hợp.'
  ],
  theory: [
    {
      id: 'g6-v1-c1-l2-theory-1',
      title: '1. Hệ thập phân',
      content: 'Trong hệ thập phân, mười đơn vị ở một hàng thì làm thành một đơn vị ở hàng liền trước nó. Hệ thập phân sử dụng mười chữ số: $0, 1, 2, 3, 4, 5, 6, 7, 8, 9$ để ghi mọi số tự nhiên.'
    },
    {
      id: 'g6-v1-c1-l2-theory-2',
      title: '2. Cấu tạo thập phân của số tự nhiên',
      content: 'Mỗi chữ số trong một số tự nhiên có giá trị thay đổi tùy thuộc vào vị trí hàng của nó.\n\nVí dụ:\n- Số có hai chữ số: $\\overline{ab} = a \\times 10 + b$ ($a \\neq 0$).\n- Số có ba chữ số: $\\overline{abc} = a \\times 100 + b \\times 10 + c$ ($a \\neq 0$).',
      formulas: ['\\overline{ab} = a \\times 10 + b', '\\overline{abc} = a \\times 100 + b \\times 10 + c']
    },
    {
      id: 'g6-v1-c1-l2-theory-3',
      title: '3. Hệ chữ số La Mã',
      content: 'Hệ La Mã ghi số bằng các chữ số cơ bản:\n- $I = 1$\n- $V = 5$\n- $X = 10$\n\nQuy tắc ghép số cơ bản:\n- Viết chữ số nhỏ vào bên phải chữ số lớn hơn để cộng thêm: ví dụ $VI = 5 + 1 = 6$, $XII = 10 + 2 = 12$.\n- Viết chữ số nhỏ (chỉ được viết $I$ ở trái $V, X$) vào bên trái chữ số lớn hơn để trừ bớt: ví dụ $IV = 5 - 1 = 4$, $IX = 10 - 1 = 9$.',
      note: 'Không được ghép quá ba chữ số cơ bản cùng loại liền nhau liên tiếp (chỉ áp dụng với I và X).'
    }
  ],
  remember: [
    'Phân biệt Số và Chữ số: Số là kết quả biểu diễn lượng, chữ số là các ký tự từ 0 đến 9 dùng để viết số.',
    'Giá trị chữ số = Chữ số đó × Giá trị hàng tương ứng.',
    'Các số La Mã đặc biệt cần nhớ: IV (4), IX (9), XIV (14), XIX (19), XXIV (24), XXIX (29).',
    'Các số La Mã không được lặp lại quá 3 lần: I và X. Số V chỉ viết tối đa 1 lần trong mỗi số La Mã dưới 30.'
  ],
  tips: [
    'Khi viết cấu tạo thập phân, hãy đếm số lượng chữ số đứng sau chữ số cần xét để thêm đúng số chữ số 0.',
    'Hãy nhớ quy tắc "phải cộng, trái trừ" khi học và ghi nhớ các số La Mã.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c1-l2-mistake-1',
      mistake: 'Nhầm lẫn giữa "Chữ số hàng chục" và "Số chục".',
      correction: 'Ví dụ trong số $382$: Chữ số hàng chục là $8$, nhưng số chục của nó là $38$ chục.'
    },
    {
      id: 'g6-v1-c1-l2-mistake-2',
      mistake: 'Viết sai số La Mã vượt quá 3 ký tự liên tiếp giống nhau.',
      correction: 'Số 4 viết là IV chứ không viết là IIII. Số 40 viết là XL (vượt quá phạm vi 30).'
    },
    {
      id: 'g6-v1-c1-l2-mistake-3',
      mistake: 'Ghép sai thứ tự trừ trong số La Mã (ví dụ VX thay cho V).',
      correction: 'Quy tắc trừ chỉ áp dụng đối với I đặt trước V hoặc X. Không đặt V trước X.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c1-l2-example-1',
      title: 'Phân tích cấu tạo số tự nhiên',
      difficulty: 'basic',
      problem: 'Viết số tự nhiên $2705$ dưới dạng tổng cấu tạo thập phân.',
      steps: [
        'Xác định vị trí các hàng: chữ số 2 ở hàng nghìn ($2000$), chữ số 7 ở hàng trăm ($700$), chữ số 0 ở hàng chục ($0$), chữ số 5 ở hàng đơn vị ($5$).',
        'Viết tổng: $2705 = 2 \\times 1000 + 7 \\times 100 + 5$ (hàng chục bằng 0 nên có thể lược bỏ).'
      ],
      answer: '2000 + 700 + 5'
    },
    {
      id: 'g6-v1-c1-l2-example-2',
      title: 'Đổi số thập phân sang hệ số La Mã',
      difficulty: 'understanding',
      problem: 'Biểu diễn các số $19$ và $26$ dưới dạng số La Mã.',
      steps: [
        'Phân tích $19 = 10 + 9$. Số 10 ghi là X, số 9 ghi là IX. Ghép lại được XIX.',
        'Phân tích $26 = 20 + 6 = 10 + 10 + 5 + 1$. Số 20 ghi là XX, số 6 ghi là VI. Ghép lại được XXVI.'
      ],
      answer: 'XIX và XXVI'
    },
    {
      id: 'g6-v1-c1-l2-example-3',
      title: 'Đổi số La Mã sang số thập phân',
      difficulty: 'understanding',
      problem: 'Đọc giá trị số La Mã sau trong hệ thập phân: $XXIV$.',
      steps: [
        'Nhận thấy hai chữ số X đầu tiên đại diện cho chục: $10 + 10 = 20$.',
        'Ký tự IV đứng sau đại diện cho số 4 ($5 - 1$).',
        'Cộng lại ta được giá trị: $20 + 4 = 24$.'
      ],
      answer: '24'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c1-l2-skill-1',
      title: 'Xác định giá trị chữ số',
      description: 'Tính toán giá trị thực tế của một chữ số trong số thập phân.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c1-l2-tpl-gia-tri-chu-so']
    },
    {
      id: 'g6-v1-c1-l2-skill-2',
      title: 'Đổi số tự nhiên sang La Mã',
      description: 'Chuyển đổi số thập phân từ 1 đến 30 sang ký hiệu hệ La Mã.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l2-tpl-so-la-ma']
    },
    {
      id: 'g6-v1-c1-l2-skill-3',
      title: 'Đọc số La Mã',
      description: 'Đổi các số La Mã từ I đến XXX sang giá trị số tự nhiên trong hệ thập phân.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l2-tpl-la-ma-sang-thap-phan']
    },
    {
      id: 'g6-v1-c1-l2-skill-4',
      title: 'Cấu tạo thập phân số tự nhiên',
      description: 'Biểu diễn số dưới dạng tổng lũy thừa 10 hoặc biểu thức chữ.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l2-tpl-cau-tao-so']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c1-l2-tpl-gia-tri-chu-so',
      'g6-v1-c1-l2-tpl-so-la-ma',
      'g6-v1-c1-l2-tpl-la-ma-sang-thap-phan',
      'g6-v1-c1-l2-tpl-cau-tao-so'
    ]
  }
};
