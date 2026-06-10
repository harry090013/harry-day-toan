import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8L34Content: LessonContent = {
  lessonId: 'g6-v2-c8-l34',
  title: 'Bài 34. Đoạn thẳng. Độ dài đoạn thẳng',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    lessonNo: 34,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm đoạn thẳng, phép so sánh độ dài và hệ thức cộng độ dài đoạn thẳng khi có điểm nằm giữa.'
  },
  objectives: [
    'Nhận biết được đoạn thẳng và phân biệt được với đường thẳng, tia.',
    'Hiểu khái niệm độ dài đoạn thẳng và biết cách đo độ dài.',
    'Vận dụng hệ thức cộng độ dài đoạn thẳng $AM + MB = AB$ khi điểm $M$ nằm giữa hai điểm $A$ và $B$.',
    'Biết so sánh độ dài hai đoạn thẳng dựa vào số đo.'
  ],
  prerequisites: [
    'Khái niệm điểm, đường thẳng.',
    'Điểm nằm giữa hai điểm.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-l34-theory-1',
      title: '1. Đoạn thẳng là gì?',
      content: 'Đoạn thẳng $AB$ (hay đoạn thẳng $BA$) là hình gồm điểm $A$, điểm $B$ và tất cả các điểm nằm giữa $A$ và $B$.\n\n– Hai điểm $A$ và $B$ gọi là hai đầu mút (hoặc hai đầu) của đoạn thẳng $AB$.',
    },
    {
      id: 'g6-v2-c8-l34-theory-2',
      title: '2. Độ dài đoạn thẳng',
      content: '– Mỗi đoạn thẳng có một độ dài. Độ dài đoạn thẳng là một số dương.\n– Nếu hai điểm trùng nhau, ta coi khoảng cách giữa chúng bằng $0$.\n– Ta có thể so sánh hai đoạn thẳng bằng cách so sánh độ dài của chúng:\n  + Hai đoạn thẳng bằng nhau nếu chúng có cùng độ dài (Ký hiệu: $AB = CD$).\n  + Đoạn thẳng $AB$ ngắn hơn đoạn thẳng $CD$ nếu độ dài của nó nhỏ hơn (Ký hiệu: $AB < CD$).',
      diagram: {
        id: 'g6-v2-c8-l34-theory-2-diagram',
        placement: 'theory',
        variant: 'segment-length',
        title: 'Đoạn thẳng AB',
        alt: 'Đoạn thẳng AB có độ dài bằng 6 cm.',
        notToScale: true,
        data: {
          aLabel: 'A',
          bLabel: 'B',
          lengthLabel: '6 cm'
        }
      }
    },
    {
      id: 'g6-v2-c8-l34-theory-3',
      title: '3. Khi nào thì $AM + MB = AB$?',
      content: 'Nếu điểm $M$ nằm giữa hai điểm $A$ và $B$ thì ta có công thức cộng đoạn thẳng:\n\n$$AM + MB = AB$$\n\nNgược lại, nếu ta có $AM + MB = AB$ thì điểm $M$ nằm giữa hai điểm $A$ và $B$.',
      formulas: ['AM + MB = AB']
    }
  ],
  remember: [
    'Đoạn thẳng bị giới hạn ở cả hai đầu mút, khác với đường thẳng (không bị giới hạn) và tia (chỉ bị giới hạn ở 1 đầu gốc).',
    'Công thức cộng đoạn thẳng $AM + MB = AB$ chỉ đúng khi điểm $M$ **nằm giữa** hai điểm $A$ và $B$.',
    'Nếu $M$ không nằm giữa $A$ và $B$, ta không có công thức $AM + MB = AB$.'
  ],
  tips: [
    'Khi làm bài toán tính độ dài đoạn thẳng, luôn vẽ hình nháp trước và kiểm tra xem điểm nào nằm giữa điểm nào để viết đúng công thức cộng.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-l34-mistake-1',
      mistake: 'Tự tiện cộng độ dài $AM + MB = AB$ mà không có dữ kiện điểm $M$ nằm giữa $A$ và $B$.',
      correction: 'Phải lập luận hoặc chỉ ra $M$ nằm giữa trước khi viết công thức cộng.'
    },
    {
      id: 'g6-v2-c8-l34-mistake-2',
      mistake: 'Nhầm lẫn ký hiệu đoạn thẳng (giới hạn) với đường thẳng (vô hạn).',
      correction: 'Đoạn thẳng có hai đầu mút cố định và đo được độ dài cụ thể, đường thẳng thì không có độ dài.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-l34-example-1',
      title: 'Tính độ dài đoạn thẳng bằng phép cộng',
      difficulty: 'basic',
      problem: 'Cho điểm $M$ nằm giữa hai điểm $A$ và $B$. Biết $AM = 3\\text{ cm}$ và $MB = 4\\text{ cm}$. Tính độ dài đoạn thẳng $AB$.',
      steps: [
        'Bước 1: Vì điểm $M$ nằm giữa hai điểm $A$ và $B$ nên ta có công thức cộng độ dài đoạn thẳng: $AM + MB = AB$.',
        'Bước 2: Thay số vào công thức: $AB = 3 + 4$.',
        'Bước 3: Tính toán: $AB = 7\\text{ cm}$.'
      ],
      answer: '7 cm',
      diagram: {
        id: 'g6-v2-c8-l34-example-1-diagram',
        placement: 'worked_example',
        variant: 'between-points',
        title: 'M nằm giữa A và B',
        alt: 'M nằm giữa A và B với AM = 3 cm và MB = 4 cm.',
        notToScale: true,
        data: {
          points: [
            { label: 'A', x: 60, y: 60 },
            { label: 'M', x: 145, y: 60 },
            { label: 'B', x: 260, y: 60 }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l34-example-2',
      title: 'Tính độ dài phần đoạn thẳng còn lại',
      difficulty: 'understanding',
      problem: 'Cho điểm $K$ nằm giữa hai điểm $H$ and $G$. Biết $HG = 10\\text{ cm}$ và $HK = 6\\text{ cm}$. Tính độ dài đoạn thẳng $KG$.',
      steps: [
        'Bước 1: Vì điểm $K$ nằm giữa hai điểm $H$ và $G$ nên ta có: $HK + KG = HG$.',
        'Bước 2: Thay số đã biết vào biểu thức: $6 + KG = 10$.',
        'Bước 3: Thực hiện phép tính trừ để tìm $KG$: $KG = 10 - 6 = 4\\text{ cm}$.'
      ],
      answer: '4 cm'
    },
    {
      id: 'g6-v2-c8-l34-example-3',
      title: 'So sánh độ dài đoạn thẳng',
      difficulty: 'understanding',
      problem: 'Cho đoạn thẳng $AB = 5\\text{ cm}$. Lấy điểm $C$ nằm giữa $A$ và $B$ sao cho $AC = 2\\text{ cm}$. So sánh độ dài hai đoạn thẳng $AC$ và $BC$.',
      steps: [
        'Bước 1: Tính độ dài đoạn thẳng $BC$ trước. Vì $C$ nằm giữa $A$ và $B$ nên: $AC + BC = AB$.',
        'Bước 2: Thay số: $2 + BC = 5 \\Rightarrow BC = 5 - 2 = 3\\text{ cm}$.',
        'Bước 3: So sánh: Ta có $AC = 2\\text{ cm}$ và $BC = 3\\text{ cm}$. Vì $2 < 3$ nên $AC < BC$.'
      ],
      answer: 'AC < BC'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-l34-sg-01',
      title: 'Tính tổng độ dài đoạn thẳng',
      description: 'Luyện tập sử dụng công thức cộng đoạn thẳng $AM + MB = AB$ khi biết điểm nằm giữa.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l34-tpl-tong-doan-thang']
    },
    {
      id: 'g6-v2-c8-l34-sg-02',
      title: 'Tính hiệu độ dài đoạn thẳng',
      description: 'Tìm độ dài của một đoạn thẳng thành phần khi biết tổng độ dài và đoạn thẳng còn lại.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l34-tpl-hieu-doan-thang']
    },
    {
      id: 'g6-v2-c8-l34-sg-03',
      title: 'So sánh và nhận biết đoạn thẳng',
      description: 'So sánh các đoạn thẳng dựa trên số đo hoặc thứ tự điểm thẳng hàng.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l34-tpl-so-sanh-doan-thang']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v2-c8-l34-tpl-tong-doan-thang',
      'g6-v2-c8-l34-tpl-hieu-doan-thang',
      'g6-v2-c8-l34-tpl-so-sanh-doan-thang'
    ]
  }
};
