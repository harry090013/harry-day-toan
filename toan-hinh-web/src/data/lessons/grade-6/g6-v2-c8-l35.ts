import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8L35Content: LessonContent = {
  lessonId: 'g6-v2-c8-l35',
  title: 'Bài 35. Trung điểm của đoạn thẳng',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    lessonNo: 35,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa trung điểm của đoạn thẳng và bài toán tính khoảng cách.'
  },
  objectives: [
    'Hiểu định nghĩa trung điểm của một đoạn thẳng.',
    'Nhận biết được hai điều kiện bắt buộc: Điểm nằm giữa và chia đoạn thẳng làm hai phần bằng nhau.',
    'Tính được khoảng cách từ trung điểm đến hai đầu mút và tính độ dài cả đoạn thẳng.'
  ],
  prerequisites: [
    'Khái niệm đoạn thẳng và độ dài đoạn thẳng.',
    'Điểm nằm giữa hai điểm.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-l35-theory-1',
      title: '1. Trung điểm của đoạn thẳng là gì?',
      content: 'Trung điểm của đoạn thẳng là điểm nằm giữa hai đầu mút của đoạn thẳng và cách đều hai đầu mút đó (chia đoạn thẳng làm hai phần bằng nhau).\n\nĐiểm $M$ được gọi là **trung điểm của đoạn thẳng $AB$** khi:\n1. Điểm $M$ nằm giữa hai điểm $A$ và $B$.\n2. $MA = MB$.\n\n*Hệ thức*: Khi $M$ là trung điểm của $AB$ thì:\n\n$$MA = MB = \\frac{AB}{2}$$',
      formulas: ['MA = MB = \\frac{AB}{2}'],
      diagram: {
        id: 'g6-v2-c8-l35-theory-1-diagram',
        placement: 'theory',
        variant: 'midpoint-segment',
        title: 'M là trung điểm của AB',
        alt: 'Điểm M nằm giữa A và B, chia đoạn thẳng thành 2 nửa bằng nhau AM = MB.',
        notToScale: true,
        data: {
          points: [
            { label: 'A', x: 60, y: 60 },
            { label: 'M', x: 160, y: 60 },
            { label: 'B', x: 260, y: 60 }
          ],
          labels: ['AM = MB']
        }
      }
    }
  ],
  remember: [
    'Một điểm chỉ bằng khoảng cách đến hai đầu mút (ví dụ $MA=MB$) chưa chắc đã là trung điểm nếu 3 điểm $A, M, B$ không thẳng hàng.',
    'Trung điểm chia đoạn thẳng thành 2 nửa có độ dài đúng bằng một nửa độ dài đoạn ban đầu.'
  ],
  tips: [
    'Nếu đề bài cho biết $M$ là trung điểm của $AB$, bạn lập tức suy ra được hai điều: $M$ nằm giữa $A, B$ và $MA = MB = AB \\div 2$.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-l35-mistake-1',
      mistake: 'Kết luận $M$ là trung điểm của $AB$ chỉ vì $MA = MB$.',
      correction: 'Phải bổ sung thêm điều kiện $M$ nằm giữa $A$ và $B$ (hoặc 3 điểm thẳng hàng). Vì nếu tạo thành một tam giác cân thì $MA$ vẫn bằng $MB$ nhưng $M$ không phải trung điểm.'
    },
    {
      id: 'g6-v2-c8-l35-mistake-2',
      mistake: 'Tính nhầm trung điểm bằng cách lấy độ dài nhân 2 thay vì chia 2.',
      correction: 'Khoảng cách từ trung điểm đến đầu mút bằng độ dài cả đoạn chia 2.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-l35-example-1',
      title: 'Tính khoảng cách đến hai đầu mút từ trung điểm',
      difficulty: 'basic',
      problem: 'Cho đoạn thẳng $AB = 8\\text{ cm}$. Gọi $M$ là trung điểm của đoạn thẳng $AB$. Tính độ dài đoạn thẳng $AM$ và $MB$.',
      steps: [
        'Bước 1: Vì $M$ là trung điểm của đoạn thẳng $AB$ nên ta có công thức chia đôi đoạn thẳng:',
        '$$AM = MB = \\frac{AB}{2}$$',
        'Bước 2: Thay số vào biểu thức: $AM = MB = \\frac{8}{2} = 4\\text{ cm}$.',
        'Bước 3: Kết luận: $AM = 4\\text{ cm}$ và $MB = 4\\text{ cm}$.'
      ],
      answer: 'AM = MB = 4 cm',
      diagram: {
        id: 'g6-v2-c8-l35-example-1-diagram',
        placement: 'worked_example',
        variant: 'midpoint-segment',
        title: 'M là trung điểm của AB = 8 cm',
        alt: 'M là trung điểm của AB. AM = MB = 4 cm.',
        notToScale: true,
        data: {
          points: [
            { label: 'A', x: 60, y: 60 },
            { label: 'M', x: 160, y: 60 },
            { label: 'B', x: 260, y: 60 }
          ],
          labels: ['AM = 4 cm', 'MB = 4 cm']
        }
      }
    },
    {
      id: 'g6-v2-c8-l35-example-2',
      title: 'Tìm độ dài cả đoạn thẳng từ trung điểm',
      difficulty: 'understanding',
      problem: 'Cho điểm $I$ là trung điểm của đoạn thẳng $CD$. Biết $IC = 3\\text{ cm}$. Tính độ dài đoạn thẳng $CD$.',
      steps: [
        'Bước 1: Vì $I$ là trung điểm của đoạn thẳng $CD$ nên độ dài đoạn thẳng $CD$ gấp hai lần khoảng cách từ trung điểm đến đầu mút.',
        'Bước 2: Ta có hệ thức: $CD = 2 \\times IC$ (hoặc $CD = IC + ID = 3 + 3$).',
        'Bước 3: Tính toán: $CD = 2 \\times 3 = 6\\text{ cm}$.'
      ],
      answer: '6 cm'
    },
    {
      id: 'g6-v2-c8-l35-example-3',
      title: 'Xác định một điểm có phải trung điểm không',
      difficulty: 'application',
      problem: 'Trên tia $Ox$, lấy hai điểm $M$ và $N$ sao cho $OM = 3\\text{ cm}$ và $ON = 6\\text{ cm}$. Điểm $M$ có là trung điểm của đoạn thẳng $ON$ không? Vì sao?',
      steps: [
        'Bước 1: Vì $M$ và $N$ cùng thuộc tia $Ox$ và $OM < ON$ ($3 < 6$) nên điểm $M$ nằm giữa hai điểm $O$ và $N$. (Điều kiện 1 đã thỏa mãn).',
        'Bước 2: Tính độ dài đoạn thẳng $MN$. Vì $M$ nằm giữa $O$ và $N$ nên: $OM + MN = ON \\Rightarrow MN = ON - OM = 6 - 3 = 3\\text{ cm}$.',
        'Bước 3: So sánh: Ta có $OM = 3\\text{ cm}$ và $MN = 3\\text{ cm}$, suy ra $OM = MN = 3\\text{ cm}$. (Điều kiện 2 đã thỏa mãn).',
        'Bước 4: Từ hai điều kiện trên, kết luận $M$ chính là trung điểm của đoạn thẳng $ON$.'
      ],
      answer: 'M là trung điểm của ON'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-l35-sg-01',
      title: 'Tính khoảng cách trung điểm',
      description: 'Bài toán tính một nửa đoạn thẳng khi biết độ dài cả đoạn thẳng chứa trung điểm.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l35-tpl-tinh-nua-doan']
    },
    {
      id: 'g6-v2-c8-l35-sg-02',
      title: 'Tính độ dài cả đoạn thẳng',
      description: 'Nhân đôi khoảng cách từ trung điểm để tìm độ dài của toàn bộ đoạn thẳng.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l35-tpl-tinh-ca-doan']
    },
    {
      id: 'g6-v2-c8-l35-sg-03',
      title: 'Nhận biết trung điểm trên hình',
      description: 'Lý thuyết nhận biết và các khẳng định đúng/sai về điều kiện cấu thành trung điểm.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l35-tpl-nhan-biet-trung-diem']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v2-c8-l35-tpl-tinh-nua-doan',
      'g6-v2-c8-l35-tpl-tinh-ca-doan',
      'g6-v2-c8-l35-tpl-nhan-biet-trung-diem'
    ]
  }
};
