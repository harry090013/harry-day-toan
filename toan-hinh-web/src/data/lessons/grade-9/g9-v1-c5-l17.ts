import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5L17Content: LessonContent = {
  lessonId: 'g9-v1-c5-l17',
  title: 'Bài 17. Vị trí tương đối của hai đường tròn',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    lessonNo: 17,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Các vị trí tương đối của hai đường tròn, hệ thức liên hệ giữa đoạn nối tâm và các bán kính.'
  },
  objectives: [
    'Nhận biết được ba vị trí tương đối của hai đường tròn (cắt nhau, tiếp xúc nhau, không giao nhau).',
    'Phát biểu và sử dụng được các hệ thức liên hệ giữa đoạn nối tâm và các bán kính tương ứng.',
    'Nhận biết tính chất của đường nối tâm.'
  ],
  prerequisites: [
    'Khái niệm đường tròn, khoảng cách giữa hai điểm, bất đẳng thức tam giác.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-l17-theory-1',
      title: '1. Ba vị trí tương đối của hai đường tròn',
      content: 'Gọi $d = O_1O_2$ là khoảng cách giữa hai tâm của hai đường tròn $(O_1; R_1)$ và $(O_2; R_2)$ với $R_1 \\ge R_2$:\n- **Hai đường tròn cắt nhau:** Có 2 điểm chung $\\Leftrightarrow R_1 - R_2 < d < R_1 + R_2$.\n- **Hai đường tròn tiếp xúc nhau:** Có 1 điểm chung.\n  + Tiếp xúc ngoài $\\Leftrightarrow d = R_1 + R_2$.\n  + Tiếp xúc trong $\\Leftrightarrow d = R_1 - R_2$ ($R_1 > R_2$).\n- **Hai đường tròn không giao nhau:** Không có điểm chung.\n  + Ở ngoài nhau $\\Leftrightarrow d > R_1 + R_2$.\n  + Đựng nhau $\\Leftrightarrow d < R_1 - R_2$.',
      diagram: {
        id: 'g9-v1-c5-l17-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Hai đường tròn cắt nhau',
        alt: 'Hai đường tròn cắt nhau tại hai điểm A và B.',
        notToScale: true,
        data: {
          type: 'two-circles',
          relation: 'intersect'
        }
      }
    },
    {
      id: 'g9-v1-c5-l17-theory-2',
      title: '2. Tính chất đường nối tâm',
      content: 'Đường nối tâm là trục đối xứng của hình gồm hai đường tròn đó. Do đó:\n- Nếu hai đường tròn tiếp xúc nhau thì tiếp điểm nằm trên đường nối tâm.\n- Nếu hai đường tròn cắt nhau thì đường nối tâm là đường trung trực của dây chung.',
      formulas: [
        'O_1O_2 \\perp AB \\quad (\\text{AB là dây chung})'
      ]
    }
  ],
  remember: [
    'Đường nối tâm vuông góc với dây chung tại trung điểm của dây chung đó là một tính chất cực kỳ hay dùng trong các bài chứng minh song song hoặc vuông góc.',
    'Trường hợp đồng tâm là trường hợp đặc biệt của đường tròn đựng nhau khi $d = 0$.'
  ],
  tips: [
    'Khi làm bài tập trắc nghiệm, hãy tính tổng $R_1 + R_2$ và hiệu $R_1 - R_2$, sau đó xếp khoảng cách $d$ vào giữa các giá trị này để xác định vị trí tương đối.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-l17-mistake-1',
      mistake: 'Quên không xét trường hợp tiếp xúc trong hoặc đựng nhau khi so sánh hiệu bán kính.',
      correction: 'Hai đường tròn không giao nhau có hai trường hợp: ngoài nhau ($d > R_1+R_2$) và đựng nhau ($d < R_1-R_2$). Tiếp xúc cũng có tiếp xúc ngoài ($d = R_1+R_2$) và tiếp xúc trong ($d = R_1-R_2$). Phải so sánh với cả tổng lẫn hiệu bán kính.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-l17-example-1',
      title: 'Xác định vị trí tương đối của hai đường tròn',
      difficulty: 'basic',
      problem: 'Cho hai đường tròn $(O_1; 8\\text{ cm})$ và $(O_2; 3\\text{ cm})$. Khoảng cách giữa hai tâm là $O_1O_2 = 5\\text{ cm}$. Xác định vị trí tương đối của hai đường tròn này.',
      steps: [
        'Bước 1: Tính hiệu các bán kính: $R_1 - R_2 = 8 - 3 = 5\\text{ cm}$.',
        'Bước 2: Tính tổng các bán kính: $R_1 + R_2 = 8 + 3 = 11\\text{ cm}$.',
        'Bước 3: So sánh khoảng cách hai tâm $d = O_1O_2 = 5\\text{ cm}$ với hiệu và tổng bán kính.',
        'Bước 4: Ta thấy $d = 5 = R_1 - R_2$ (bằng hiệu bán kính).',
        'Bước 5: Kết luận: Hai đường tròn tiếp xúc trong với nhau.'
      ],
      answer: 'Tiếp xúc trong'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-l17-sg-01',
      title: 'Hệ thức liên hệ giữa đoạn nối tâm và bán kính',
      description: 'Dùng các hệ thức so sánh tổng, hiệu bán kính với khoảng cách tâm để khẳng định vị trí tương đối.',
      difficulty: 'basic',
      templateIds: ['g9-v1-c5-l17-tpl-01', 'g9-v1-c5-l17-tpl-02']
    },
    {
      id: 'g9-v1-c5-l17-sg-02',
      title: 'Tính toán liên quan đến dây chung và đoạn nối tâm',
      description: 'Áp dụng định lí vuông góc của đường nối tâm với dây chung để tính độ dài đoạn nối tâm hoặc dây chung.',
      difficulty: 'understanding',
      templateIds: ['g9-v1-c5-l17-tpl-03', 'g9-v1-c5-l17-tpl-04', 'g9-v1-c5-l17-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v1-c5-l17-tpl-01',
      'g9-v1-c5-l17-tpl-02',
      'g9-v1-c5-l17-tpl-03',
      'g9-v1-c5-l17-tpl-04',
      'g9-v1-c5-l17-tpl-05'
    ]
  }
};
