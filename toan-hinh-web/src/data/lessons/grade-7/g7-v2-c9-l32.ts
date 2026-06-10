import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9L32Content: LessonContent = {
  lessonId: 'g7-v2-c9-l32',
  title: 'Bài 32. Quan hệ giữa đường vuông góc và đường xiên',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    lessonNo: 32,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm đường vuông góc, đường xiên, hình chiếu và các quan hệ so sánh.'
  },
  objectives: [
    'Khái niệm đường vuông góc, đường xiên từ một điểm đến đường thẳng, và hình chiếu của đường xiên.',
    'Hiểu định lí: Đường vuông góc là đường ngắn nhất trong các đường nối từ một điểm đến đường thẳng.',
    'So sánh độ dài đường xiên dựa trên độ dài hình chiếu tương ứng.'
  ],
  prerequisites: [
    'Khái niệm vuông góc, tam giác vuông.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-l32-theory-1',
      title: '1. Khái niệm đường vuông góc, đường xiên, hình chiếu',
      content: 'Cho điểm $A$ nằm ngoài đường thẳng $d$. Kẻ $AH \\perp d$ tại $H$.\n– Đoạn thẳng $AH$ gọi là **đường vuông góc** kẻ từ $A$ đến $d$. Điểm $H$ là chân đường vuông góc (hoặc hình chiếu của $A$ trên $d$).\n– Đoạn thẳng $AB$ (với $B \\in d, B \\neq H$) gọi là một **đường xiên** từ $A$ đến $d$.\n– Đoạn thẳng $HB$ gọi là **hình chiếu** của đường xiên $AB$ trên đường thẳng $d$.',
      diagram: {
        id: 'g7-v2-c9-l32-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c9-perpendicular-oblique',
        title: 'Đường vuông góc và đường xiên',
        alt: 'Hình vẽ minh họa đường vuông góc AH và các đường xiên AB, AC.',
        notToScale: true,
        data: {
          highlight: 'oblique'
        }
      }
    },
    {
      id: 'g7-v2-c9-l32-theory-2',
      title: '2. Quan hệ giữa đường vuông góc và đường xiên',
      content: 'Trong các đường xiên và đường vuông góc kẻ từ một điểm ở ngoài một đường thẳng đến đường thẳng đó, **đường vuông góc là đường ngắn nhất**.',
      formulas: [
        'AH < AB \\quad (\\text{với } B \\neq H)'
      ]
    },
    {
      id: 'g7-v2-c9-l32-theory-3',
      title: '3. Quan hệ giữa đường xiên và hình chiếu',
      content: 'Trong hai đường xiên kẻ từ một điểm nằm ngoài đường thẳng đến đường thẳng đó:\n– Đường xiên nào có hình chiếu lớn hơn thì lớn hơn.\n– Đường xiên nào lớn hơn thì có hình chiếu lớn hơn.',
      formulas: [
        'HB > HC \\Leftrightarrow AB > AC'
      ]
    }
  ],
  remember: [
    'Khoảng cách từ điểm $A$ đến đường thẳng $d$ chính là độ dài của đường vuông góc $AH$.',
    'Đường vuông góc $AH$ luôn bé hơn mọi đường xiên $AB$.'
  ],
  tips: [
    'Để so sánh hai đường xiên $AB$ và $AC$, hãy chuyển về so sánh hai hình chiếu $HB$ và $HC$ nằm trên đường thẳng $d$.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-l32-mistake-1',
      mistake: 'Coi hình chiếu và đường vuông góc là một.',
      correction: 'Đường vuông góc là $AH$ (đứng thẳng). Hình chiếu là $HB$ (nằm ngang trên đường thẳng $d$).'
    },
    {
      id: 'g7-v2-c9-l32-mistake-2',
      mistake: 'Nghĩ rằng đường xiên càng nghiêng nhiều thì càng ngắn.',
      correction: 'Càng nghiêng nhiều thì hình chiếu càng dài $\\Rightarrow$ đường xiên càng dài. Đường vuông góc (không nghiêng) mới là ngắn nhất.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-l32-example-1',
      title: 'Xác định đường xiên và hình chiếu',
      difficulty: 'basic',
      problem: 'Cho điểm $M$ nằm ngoài đường thẳng $d$. Kẻ $MN \\perp d$ tại $N$. Trên $d$ lấy điểm $P$ khác $N$. Hãy chỉ ra đường vuông góc, đường xiên và hình chiếu của đường xiên từ $M$ xuống $d$.',
      steps: [
        'Bước 1: Đường vuông góc là đoạn kẻ vuông góc từ $M$ xuống $d$: đoạn $MN$.',
        'Bước 2: Đường xiên là đoạn nối từ $M$ tới một điểm khác $N$ trên $d$: đoạn $MP$.',
        'Bước 3: Hình chiếu của đường xiên $MP$ là đoạn nối từ chân đường vuông góc $N$ đến điểm $P$: đoạn $NP$.'
      ],
      answer: 'Đường vuông góc: MN, đường xiên: MP, hình chiếu: NP'
    },
    {
      id: 'g7-v2-c9-l32-example-2',
      title: 'So sánh đường xiên qua hình chiếu',
      difficulty: 'understanding',
      problem: 'Kẻ $AH \\perp d$ tại $H$. Trên $d$ lấy hai điểm $B$ và $C$ sao cho $H$ nằm giữa $B$ and $C$. Biết $HB = 4\\text{ cm}$ và $HC = 3\\text{ cm}$. So sánh hai đường xiên $AB$ và $AC$.',
      steps: [
        'Bước 1: Xác định hai hình chiếu của hai đường xiên $AB$ và $AC$ lần lượt là $HB$ và $HC$.',
        'Bước 2: So sánh độ dài hai hình chiếu: ta có $HB = 4\\text{ cm}$ và $HC = 3\\text{ cm}$ nên $HB > HC$.',
        'Bước 3: Áp dụng định lí quan hệ giữa đường xiên và hình chiếu: Đường xiên nào có hình chiếu lớn hơn thì lớn hơn.',
        'Bước 4: Vì $HB > HC$ nên $AB > AC$.'
      ],
      answer: 'AB > AC'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-l32-sg-01',
      title: 'Nhận diện đường xiên và hình chiếu',
      description: 'Chỉ ra đường vuông góc, đường xiên và hình chiếu trên các hình học phẳng.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c9-l32-tpl-01', 'g7-v2-c9-l32-tpl-02']
    },
    {
      id: 'g7-v2-c9-l32-sg-02',
      title: 'So sánh đường xiên và hình chiếu',
      description: 'Áp dụng định lí để so sánh các đường xiên khi biết hình chiếu hoặc ngược lại.',
      difficulty: 'understanding',
      templateIds: ['g7-v2-c9-l32-tpl-03', 'g7-v2-c9-l32-tpl-04', 'g7-v2-c9-l32-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v2-c9-l32-tpl-01',
      'g7-v2-c9-l32-tpl-02',
      'g7-v2-c9-l32-tpl-03',
      'g7-v2-c9-l32-tpl-04',
      'g7-v2-c9-l32-tpl-05'
    ]
  }
};
