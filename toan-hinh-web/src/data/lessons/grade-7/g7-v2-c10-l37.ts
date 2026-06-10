import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C10L37Content: LessonContent = {
  lessonId: 'g7-v2-c10-l37',
  title: 'Bài 37. Hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-khoi-do-luong',
  chapterId: 'g7-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    lessonNo: 37,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm, các yếu tố, diện tích xung quanh và thể tích của hình lăng trụ đứng.'
  },
  objectives: [
    'Mô tả được hình lăng trụ đứng tam giác và hình lăng trụ đứng tứ giác.',
    'Nhận biết được đáy, mặt bên, cạnh bên và chiều cao của hình lăng trụ đứng.',
    'Tính được diện tích xung quanh của hình lăng trụ đứng tam giác và tứ giác.',
    'Tính được thể tích của hình lăng trụ đứng tam giác và tứ giác.',
    'Giải quyết được một số bài toán thực tế liên quan đến lăng trụ đứng.'
  ],
  prerequisites: [
    'Diện tích hình tam giác, hình thang, hình chữ nhật, hình lập phương/hộp chữ nhật.'
  ],
  theory: [
    {
      id: 'g7-v2-c10-l37-theory-1',
      title: '1. Khái niệm hình lăng trụ đứng tam giác/tứ giác',
      content: 'Hình lăng trụ đứng tam giác (tứ giác) có:\n- Hai mặt đáy song song và là hình tam giác (tứ giác).\n- Các mặt bên là hình chữ nhật.\n- Các cạnh bên song song, bằng nhau và vuông góc với hai đáy. Độ dài cạnh bên gọi là chiều cao của hình lăng trụ đứng.',
      diagram: {
        id: 'g7-v2-c10-l37-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c10-prism-shapes',
        title: 'Hình lăng trụ đứng tam giác',
        alt: 'Hình lăng trụ đứng tam giác có hai đáy là tam giác song song và các mặt bên hình chữ nhật.',
        notToScale: true,
        data: {
          type: 'tri-prism',
          a: 'a',
          c: 'h'
        }
      }
    },
    {
      id: 'g7-v2-c10-l37-theory-2',
      title: '2. Công thức diện tích xung quanh',
      content: 'Diện tích xung quanh của hình lăng trụ đứng bằng tích của chu vi đáy với chiều cao của nó:\n$$S_{xq} = C \\cdot h$$\n*(Trong đó $C$ là chu vi đáy, $h$ là chiều cao của hình lăng trụ đứng)*\n\n- Diện tích toàn phần: $$S_{tp} = S_{xq} + 2S_đ$$\n*(Với $S_đ$ là diện tích của một đáy)*',
      formulas: [
        'S_{xq} = C \\cdot h',
        'S_{tp} = S_{xq} + 2S_đ'
      ]
    },
    {
      id: 'g7-v2-c10-l37-theory-3',
      title: '3. Công thức tính thể tích',
      content: 'Thể tích của hình lăng trụ đứng bằng tích của diện tích đáy với chiều cao của nó:\n$$V = S_đ \\cdot h$$\n*(Trong đó $S_đ$ là diện tích đáy, $h$ là chiều cao của hình lăng trụ đứng)*',
      formulas: [
        'V = S_đ \\cdot h'
      ]
    }
  ],
  remember: [
    'Hình lăng trụ đứng tứ giác có đáy là hình chữ nhật chính là hình hộp chữ nhật.',
    'Để tính chu vi đáy của hình lăng trụ tam giác, ta cộng độ dài ba cạnh đáy lại: $C = a + b + c$.',
    'Các cạnh bên vuông góc với mặt phẳng đáy nên chiều dài của cạnh bên bằng đúng chiều cao hình lăng trụ đứng.'
  ],
  tips: [
    'Hãy xác định rõ hình vẽ đáy là gì (tam giác thường, tam giác vuông, hình thang, hay hình chữ nhật) để áp dụng đúng công thức tính diện tích đáy $S_đ$ và chu vi đáy $C$.',
    'Nếu đáy là tam giác vuông, diện tích đáy $S_đ = \\frac{1}{2} \\times \\text{hai cạnh góc vuông}$.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c10-l37-mistake-1',
      mistake: 'Nhầm lẫn giữa chiều cao đáy tam giác và chiều cao lăng trụ đứng.',
      correction: 'Trong hình lăng trụ đứng tam giác, chiều cao tam giác đáy dùng để tính diện tích đáy ($S_đ$), còn chiều cao lăng trụ ($h$) là chiều dài cạnh bên nối hai đáy. Hãy phân biệt rõ hai giá trị này.'
    },
    {
      id: 'g7-v2-c10-l37-mistake-2',
      mistake: 'Quên nhân diện tích đáy với 2 khi tính diện tích toàn phần.',
      correction: 'Hình lăng trụ có hai đáy bằng nhau nên $S_{tp} = S_{xq} + 2S_đ$. Nhiều học sinh chỉ cộng $1S_đ$ dẫn đến kết quả sai.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c10-l37-example-1',
      title: 'Tính diện tích xung quanh lăng trụ đứng tam giác',
      difficulty: 'basic',
      problem: 'Một hình lăng trụ đứng tam giác có đáy là tam giác đều cạnh $5\\text{ cm}$. Chiều cao của hình lăng trụ là $8\\text{ cm}$. Tính diện tích xung quanh của hình lăng trụ đó.',
      steps: [
        'Bước 1: Tính chu vi đáy của hình lăng trụ tam giác đều: $C = 3 \\times 5 = 15\\text{ cm}$.',
        'Bước 2: Xác định chiều cao lăng trụ: $h = 8\\text{ cm}$.',
        'Bước 3: Tính diện tích xung quanh: $S_{xq} = C \\cdot h = 15 \\times 8 = 120\\text{ cm}^2$.',
        'Bước 4: Kết luận: Diện tích xung quanh hình lăng trụ đứng tam giác là $120\\text{ cm}^2$.'
      ],
      answer: '120 cm^2'
    },
    {
      id: 'g7-v2-c10-l37-example-2',
      title: 'Tính thể tích lăng trụ đứng tam giác vuông',
      difficulty: 'understanding',
      problem: 'Một hình lăng trụ đứng tam giác có chiều cao $10\\text{ cm}$. Đáy là tam giác vuông có độ dài hai cạnh góc vuông lần lượt là $3\\text{ cm}$ và $4\\text{ cm}$. Tính thể tích của hình lăng trụ này.',
      steps: [
        'Bước 1: Tính diện tích đáy (tam giác vuông): $S_đ = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ cm}^2$.',
        'Bước 2: Xác định chiều cao lăng trụ: $h = 10\\text{ cm}$.',
        'Bước 3: Tính thể tích lăng trụ đứng: $V = S_đ \\cdot h = 6 \\times 10 = 60\\text{ cm}^3$.',
        'Bước 4: Kết luận: Thể tích hình lăng trụ đứng tam giác vuông là $60\\text{ cm}^3$.'
      ],
      answer: '60 cm^3'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c10-l37-sg-01',
      title: 'Tính diện tích xung quanh lăng trụ đứng',
      description: 'Tính chu vi đáy rồi nhân với chiều cao để tìm $S_{xq}$ của lăng trụ tam giác hoặc tứ giác.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c10-l37-tpl-01', 'g7-v2-c10-l37-tpl-02']
    },
    {
      id: 'g7-v2-c10-l37-sg-02',
      title: 'Tính thể tích lăng trụ đứng',
      description: 'Tìm diện tích đáy $S_đ$ và tính thể tích $V = S_đ \\cdot h$ cho hình lăng trụ đứng tam giác/tứ giác.',
      difficulty: 'understanding',
      templateIds: ['g7-v2-c10-l37-tpl-03', 'g7-v2-c10-l37-tpl-04', 'g7-v2-c10-l37-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v2-c10-l37-tpl-01',
      'g7-v2-c10-l37-tpl-02',
      'g7-v2-c10-l37-tpl-03',
      'g7-v2-c10-l37-tpl-04',
      'g7-v2-c10-l37-tpl-05'
    ]
  }
};
