import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C1L7Content: LessonContent = {
  lessonId: 'g6-v1-c1-l7',
  title: 'Bài 7. Thứ tự thực hiện các phép tính',
  grade: 6,
  track: 'toan-so',
  strand: 'so-hoc',
  chapterId: 'g6-v1-c1',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 7,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Quy tắc thứ tự thực hiện các phép tính có và không có dấu ngoặc.'
  },
  objectives: [
    'Nhận biết và nhớ đúng thứ tự thực hiện các phép tính.',
    'Thực hiện đúng các phép tính đối với biểu thức không có dấu ngoặc.',
    'Thực hiện đúng các phép tính đối với biểu thức có dấu ngoặc tròn (), ngoặc vuông [], và ngoặc nhọn {}.',
    'Vận dụng được thứ tự thực hiện phép tính để tính giá trị biểu thức một cách hợp lý.'
  ],
  prerequisites: [
    'Các phép tính cộng, trừ, nhân, chia số tự nhiên.',
    'Phép tính lũy thừa với số mũ tự nhiên.'
  ],
  theory: [
    {
      id: 'g6-v1-c1-l7-theory-1',
      title: '1. Biểu thức không có dấu ngoặc',
      content: 'Khi thực hiện các phép tính trong một biểu thức không có dấu ngoặc, ta tuân theo quy tắc thứ tự sau:\n\n- Nếu chỉ có phép cộng, trừ hoặc chỉ có phép nhân, chia: Ta thực hiện phép tính theo thứ tự từ **trái sang phải**.\n- Nếu có các phép tính cộng, trừ, nhân, chia, nâng lên lũy thừa: Ta thực hiện phép **nâng lên lũy thừa** trước, rồi đến **nhân và chia**, cuối cùng đến **cộng và trừ**.',
      formulas: ['\\text{Lũy thừa} \\rightarrow \\text{Nhân và chia} \\rightarrow \\text{Cộng và trừ}']
    },
    {
      id: 'g6-v1-c1-l7-theory-2',
      title: '2. Biểu thức có dấu ngoặc',
      content: 'Khi thực hiện các phép tính trong một biểu thức có dấu ngoặc, ta thực hiện các phép tính trong dấu ngoặc trước theo thứ tự:\n\n1. Ngoặc tròn $(\\ )$ trước.\n2. Ngoặc vuông $[\\ ]$ tiếp theo.\n3. Ngoặc nhọn $\\{\\ \}$ cuối cùng.',
      formulas: ['(\\ ) \\rightarrow [\\ ] \\rightarrow \\{\\ \}']
    }
  ],
  remember: [
    'Quy tắc từ trái sang phải áp dụng khi biểu thức chỉ gồm các phép tính cùng mức ưu tiên (chỉ có cộng/trừ hoặc chỉ có nhân/chia).',
    'Thực hiện tính toán cẩn thận từng bước, viết lại các phần chưa tính để tránh nhầm lẫn.',
    'Nếu biểu thức có ngoặc, thực hiện trọn vẹn phép tính bên trong ngoặc tròn trước khi chuyển sang ngoặc vuông.'
  ],
  tips: [
    'Luôn kiểm tra xem biểu thức có dấu ngoặc hay không trước khi bắt đầu đặt bút tính.',
    'Viết các bước trung gian rõ ràng giúp bạn dễ dàng kiểm tra lại kết quả và phát hiện lỗi sai.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c1-l7-mistake-1',
      mistake: 'Thực hiện phép tính cộng trừ trước nhân chia trong biểu thức không ngoặc (ví dụ: $3 + 2 \\cdot 5 = 5 \\cdot 5 = 25$).',
      correction: 'Phải thực hiện nhân chia trước: $3 + 2 \\cdot 5 = 3 + 10 = 13$.'
    },
    {
      id: 'g6-v1-c1-l7-mistake-2',
      mistake: 'Thực hiện phép tính từ phải sang trái khi chỉ có cộng trừ hoặc nhân chia (ví dụ: $10 - 5 + 2 = 10 - 7 = 3$).',
      correction: 'Thực hiện đúng từ trái sang phải: $10 - 5 + 2 = 5 + 2 = 7$.'
    },
    {
      id: 'g6-v1-c1-l7-mistake-3',
      mistake: 'Phá ngoặc sai quy trình hoặc tính ngoặc vuông trước ngoặc tròn.',
      correction: 'Luôn làm từ trong ra ngoài: tính trong ngoặc tròn $(\\ )$ trước, rồi đến ngoặc vuông $[\\ ]$.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c1-l7-example-1',
      title: 'Tính biểu thức không có dấu ngoặc',
      difficulty: 'basic',
      problem: 'Tính giá trị biểu thức: $A = 4 \\cdot 3^2 - 5 \\cdot 2$.',
      steps: [
        'Bước 1: Thực hiện phép tính lũy thừa trước: $3^2 = 9$. Biểu thức trở thành: $A = 4 \\cdot 9 - 5 \\cdot 2$.',
        'Bước 2: Thực hiện các phép nhân: $4 \\cdot 9 = 36$ và $5 \\cdot 2 = 10$. Biểu thức trở thành: $A = 36 - 10$.',
        'Bước 3: Thực hiện phép trừ cuối cùng: $A = 26$.'
      ],
      answer: '26'
    },
    {
      id: 'g6-v1-c1-l7-example-2',
      title: 'Tính biểu thức có dấu ngoặc tròn và vuông',
      difficulty: 'understanding',
      problem: 'Tính giá trị biểu thức: $B = 100 \\div [2 \\cdot (15 - 5)]$.',
      steps: [
        'Bước 1: Thực hiện phép tính trong ngoặc tròn trước: $15 - 5 = 10$. Biểu thức trở thành: $B = 100 \\div [2 \\cdot 10]$.',
        'Bước 2: Thực hiện phép tính trong ngoặc vuông: $2 \\cdot 10 = 20$. Biểu thức trở thành: $B = 100 \\div 20$.',
        'Bước 3: Thực hiện phép chia ngoài ngoặc: $B = 5$.'
      ],
      answer: '5'
    },
    {
      id: 'g6-v1-c1-l7-example-3',
      title: 'Tìm x sử dụng thứ tự phép tính',
      difficulty: 'application',
      problem: 'Tìm số tự nhiên $x$, biết: $2 \\cdot (x - 3) + 5 = 15$.',
      steps: [
        'Coi cả cụm $2 \\cdot (x - 3)$ là số hạng chưa biết: $2 \\cdot (x - 3) = 15 - 5 = 10$.',
        'Coi cụm $(x - 3)$ là thừa số chưa biết: $x - 3 = 10 \\div 2 = 5$.',
        'Tìm $x$: $x = 5 + 3 = 8$.'
      ],
      answer: '8'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c1-l7-skill-1',
      title: 'Tính biểu thức không ngoặc',
      description: 'Thực hiện lũy thừa trước, sau đó là nhân chia, cuối cùng là cộng trừ.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c1-l7-tpl-bieu-thuc-khong-ngoac']
    },
    {
      id: 'g6-v1-c1-l7-skill-2',
      title: 'Tính biểu thức có ngoặc',
      description: 'Thực hiện tính toán theo thứ tự ngoặc tròn, ngoặc vuông và ngoặc nhọn.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l7-tpl-bieu-thuc-co-ngoac']
    },
    {
      id: 'g6-v1-c1-l7-skill-3',
      title: 'Tìm x với biểu thức nhiều phép tính',
      description: 'Tìm số chưa biết bằng cách biến đổi ngược thứ tự thực hiện phép tính.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l7-tpl-tim-x-thu-tu-phep-tinh']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c1-l7-tpl-bieu-thuc-khong-ngoac',
      'g6-v1-c1-l7-tpl-bieu-thuc-co-ngoac',
      'g6-v1-c1-l7-tpl-tim-x-thu-tu-phep-tinh'
    ]
  }
};
