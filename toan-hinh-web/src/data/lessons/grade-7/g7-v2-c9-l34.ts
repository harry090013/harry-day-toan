import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9L34Content: LessonContent = {
  lessonId: 'g7-v2-c9-l34',
  title: 'Bài 34. Sự đồng quy của ba đường trung tuyến, ba đường phân giác trong một tam giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    lessonNo: 34,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Sự đồng quy của ba đường trung tuyến và ba đường phân giác trong tam giác.'
  },
  objectives: [
    'Nhận biết được đường trung tuyến và đường phân giác của một tam giác.',
    'Phát biểu được tính chất đồng quy của ba đường trung tuyến và ba đường phân giác.',
    'Vận dụng định lí về trọng tâm tam giác (tỉ lệ 2/3) để tính toán độ dài đoạn thẳng.',
    'Vận dụng tính chất tia phân giác để chứng minh các khoảng cách bằng nhau.'
  ],
  prerequisites: [
    'Khái niệm tam giác, trung điểm đoạn thẳng, tia phân giác của một góc.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-l34-theory-1',
      title: '1. Sự đồng quy của ba đường trung tuyến',
      content: 'Đoạn thẳng nối đỉnh của tam giác với trung điểm của cạnh đối diện gọi là đường trung tuyến của tam giác.\n\n**Định lí (Trọng tâm tam giác):**\nBa đường trung tuyến của một tam giác cùng đi qua (đồng quy) tại một điểm. Điểm đó gọi là **trọng tâm** của tam giác (ký hiệu là $G$).\nKhoảng cách từ trọng tâm đến mỗi đỉnh bằng $\\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó.',
      formulas: [
        '\\frac{GA}{AM} = \\frac{GB}{BN} = \\frac{GC}{CP} = \\frac{2}{3}',
        'GA = 2GM, \\quad GB = 2GN, \\quad GC = 2GP'
      ],
      diagram: {
        id: 'g7-v2-c9-l34-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c9-triangle-concurrency',
        title: 'Trọng tâm G của tam giác ABC',
        alt: 'Tam giác ABC có 3 đường trung tuyến AM, BN, CP cắt nhau tại trọng tâm G.',
        notToScale: true,
        data: {
          type: 'median'
        }
      }
    },
    {
      id: 'g7-v2-c9-l34-theory-2',
      title: '2. Sự đồng quy của ba đường phân giác',
      content: 'Đoạn thẳng nằm trên đường phân giác của một góc của tam giác và nối từ đỉnh đến cạnh đối diện gọi là đường phân giác của tam giác.\n\n**Định lí:**\nBa đường phân giác của một tam giác đồng quy tại một điểm. Điểm này cách đều ba cạnh của tam giác đó.',
      diagram: {
        id: 'g7-v2-c9-l34-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-c9-triangle-concurrency',
        title: 'Điểm đồng quy I của ba đường phân giác',
        alt: 'Tam giác ABC có 3 đường phân giác giao nhau tại điểm I cách đều 3 cạnh.',
        notToScale: true,
        data: {
          type: 'bisector'
        }
      }
    }
  ],
  remember: [
    'Trọng tâm $G$ chia đường trung tuyến làm 3 phần: từ đỉnh đến $G$ chiếm 2 phần, từ $G$ đến trung điểm cạnh đối diện chiếm 1 phần.',
    'Giao điểm $I$ của ba đường phân giác chính là tâm của đường tròn tiếp xúc trong với ba cạnh của tam giác.'
  ],
  tips: [
    'Để xác định nhanh trọng tâm $G$ của tam giác, ta chỉ cần vẽ hai đường trung tuyến. Điểm cắt nhau của hai đường đó chính là trọng tâm $G$.',
    'Nếu đề bài cho tỉ lệ đoạn thẳng liên quan đến trung tuyến, hãy nghĩ ngay đến tỉ số $\\frac{2}{3}$ hoặc các tỉ số quy đổi tương đương ($1/3$, $1/2$).'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-l34-mistake-1',
      mistake: 'Nhầm lẫn tỉ số của trọng tâm $G$: viết $GM = \\frac{2}{3} AM$ hoặc $GA = \\frac{1}{3} AM$.',
      correction: 'Hãy nhớ đỉnh cách xa trọng tâm hơn chân trung tuyến. Do đó, đoạn từ đỉnh $GA = \\frac{2}{3} AM$, còn đoạn từ chân trung điểm $GM = \\frac{1}{3} AM$.'
    },
    {
      id: 'g7-v2-c9-l34-mistake-2',
      mistake: 'Nhầm lẫn tính chất của giao điểm ba đường phân giác với giao điểm các đường khác.',
      correction: 'Giao điểm ba đường phân giác cách đều ba **cạnh** của tam giác, chứ không phải cách đều ba đỉnh.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-l34-example-1',
      title: 'Tính độ dài dựa vào tính chất trọng tâm',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ có đường trung tuyến $AM = 9\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác. Tính độ dài hai đoạn thẳng $GA$ và $GM$.',
      steps: [
        'Bước 1: Nhắc lại tỉ số trọng tâm: $GA = \\frac{2}{3} AM$ và $GM = \\frac{1}{3} AM$.',
        'Bước 2: Tính độ dài $GA$: $GA = \\frac{2}{3} \\times 9 = 6\\text{ cm}$.',
        'Bước 3: Tính độ dài $GM$: $GM = \\frac{1}{3} \\times 9 = 3\\text{ cm}$ (hoặc lấy $AM - GA = 9 - 6 = 3\\text{ cm}$).',
        'Bước 4: Kết luận: $GA = 6\\text{ cm}$, $GM = 3\\text{ cm}$.'
      ],
      answer: 'GA = 6 cm, GM = 3 cm'
    },
    {
      id: 'g7-v2-c9-l34-example-2',
      title: 'Xác định độ dài trung tuyến khi biết một phần',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ có trọng tâm $G$. Biết khoảng cách từ $G$ đến trung điểm $M$ của cạnh $BC$ là $GD = 4\\text{ cm}$ (với $D$ là chân trung tuyến đi qua $A$). Tính độ dài trung tuyến $AD$ và đoạn $AG$.',
      steps: [
        'Bước 1: Theo tính chất trọng tâm, ta có $GD = \\frac{1}{3} AD$ và $AG = 2 \\times GD$.',
        'Bước 2: Tính độ dài $AG$: $AG = 2 \\times 4 = 8\\text{ cm}$.',
        'Bước 3: Tính độ dài trung tuyến $AD$: $AD = AG + GD = 8 + 4 = 12\\text{ cm}$.',
        'Bước 4: Kết luận: $AD = 12\\text{ cm}, AG = 8\\text{ cm}$.'
      ],
      answer: 'AD = 12 cm, AG = 8 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-l34-sg-01',
      title: 'Tính toán độ dài liên quan đến trọng tâm',
      description: 'Sử dụng các tỉ lệ 2/3, 1/3, 1/2 để tìm các đoạn thẳng trên đường trung tuyến.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c9-l34-tpl-01', 'g7-v2-c9-l34-tpl-02', 'g7-v2-c9-l34-tpl-03']
    },
    {
      id: 'g7-v2-c9-l34-sg-02',
      title: 'Tính chất đường phân giác tam giác',
      description: 'Nhận biết tính chất tia phân giác trong tam giác và khoảng cách bằng nhau từ giao điểm tới các cạnh.',
      difficulty: 'understanding',
      templateIds: ['g7-v2-c9-l34-tpl-04', 'g7-v2-c9-l34-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v2-c9-l34-tpl-01',
      'g7-v2-c9-l34-tpl-02',
      'g7-v2-c9-l34-tpl-03',
      'g7-v2-c9-l34-tpl-04',
      'g7-v2-c9-l34-tpl-05'
    ]
  }
};
