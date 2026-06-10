import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5L14Content: LessonContent = {
  lessonId: 'g9-v1-c5-l14',
  title: 'Bài 14. Cung và dây của một đường tròn',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    lessonNo: 14,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định lí liên hệ giữa đường kính và dây cung, liên hệ giữa cung và dây cung.'
  },
  objectives: [
    'Phát biểu và chứng minh được định lí về mối liên hệ giữa đường kính và dây cung (đường kính vuông góc với một dây thì đi qua trung điểm của dây đó).',
    'Giải thích được mối liên hệ giữa cung và dây cung.',
    'Vận dụng tính chất vuông góc và đối xứng để tính độ dài dây cung, khoảng cách.'
  ],
  prerequisites: [
    'Khái niệm đường tròn, bán kính, dây cung, tính chất tam giác cân.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-l14-theory-1',
      title: '1. Liên hệ giữa đường kính và dây cung',
      content: 'Trong một đường tròn:\n- Đường kính là dây cung lớn nhất.\n- **Định lí vuông góc:** Đường kính vuông góc với một dây cung thì đi qua trung điểm của dây cung đó.\n- **Định lí đảo:** Đường kính đi qua trung điểm của một dây cung **không đi qua tâm** thì vuông góc với dây cung đó.',
      diagram: {
        id: 'g9-v1-c5-l14-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Đường kính vuông góc dây cung',
        alt: 'Đường tròn tâm O có dây cung AB và đường kính vuông góc với AB tại trung điểm H.',
        notToScale: true,
        data: {
          type: 'basic',
          chord: true
        }
      }
    },
    {
      id: 'g9-v1-c5-l14-theory-2',
      title: '2. Liên hệ giữa cung và dây',
      content: 'Với hai cung nhỏ của một đường tròn (hoặc hai đường tròn bằng nhau):\n- Hai cung bằng nhau căng hai dây bằng nhau.\n- Hai dây bằng nhau căng hai cung bằng nhau.\n- Cung lớn hơn căng dây lớn hơn và ngược lại.',
      formulas: [
        'AB = CD \\Leftrightarrow \\overparen{AB} = \\overparen{CD}',
        'OH \\perp AB \\Rightarrow HA = HB'
      ]
    }
  ],
  remember: [
    'Hãy nhớ điều kiện "không đi qua tâm" ở định lí đảo. Nếu dây cung đi qua tâm (chính là đường kính) thì hai đường kính bất kỳ luôn cắt nhau tại trung điểm của mỗi đường nhưng không nhất thiết vuông góc.',
    'Khoảng cách từ tâm đến dây cung càng nhỏ thì dây cung đó càng lớn.'
  ],
  tips: [
    'Vẽ đường cao $OH$ từ tâm $O$ đến dây $AB$. Tam giác $OAB$ cân tại $O$ nên $OH$ vừa là đường cao vừa là trung tuyến và đường phân giác.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-l14-mistake-1',
      mistake: 'Khẳng định đường kính đi qua trung điểm của dây thì vuông góc với dây mà không xét điều kiện dây không đi qua tâm.',
      correction: 'Hai đường kính của đường tròn cắt nhau tại tâm $O$, tức là đi qua trung điểm của nhau, nhưng chúng chỉ vuông góc khi là hai đường kính vuông góc với nhau.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-l14-example-1',
      title: 'Tính khoảng cách từ tâm đến dây cung',
      difficulty: 'basic',
      problem: 'Cho đường tròn $(O; 5\\text{ cm})$ và một dây cung $AB = 8\\text{ cm}$. Tính khoảng cách từ tâm $O$ đến dây $AB$.',
      steps: [
        'Bước 1: Vẽ đường vuông góc $OH$ từ tâm $O$ đến dây $AB$. Theo định lí liên hệ giữa đường kính và dây cung, $H$ là trung điểm của $AB$.',
        'Bước 2: Tính độ dài $AH$: $AH = \\frac{AB}{2} = \\frac{8}{2} = 4\\text{ cm}$.',
        'Bước 3: Xét tam giác $OAH$ vuông tại $H$, áp dụng định lí Pythagore: $OA^2 = OH^2 + AH^2 \\Rightarrow OH^2 = OA^2 - AH^2$.',
        'Bước 4: Thay số: $OH^2 = 5^2 - 4^2 = 25 - 16 = 9 \\Rightarrow OH = 3\\text{ cm}$.',
        'Bước 5: Kết luận: Khoảng cách từ tâm $O$ đến dây $AB$ là $3\\text{ cm}$.'
      ],
      answer: '3 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-l14-sg-01',
      title: 'Tính độ dài liên quan đến dây cung',
      description: 'Dùng định lí Pythagore trong tam giác vuông tạo bởi bán kính, khoảng cách đến dây và nửa dây cung.',
      difficulty: 'basic',
      templateIds: ['g9-v1-c5-l14-tpl-01', 'g9-v1-c5-l14-tpl-02']
    },
    {
      id: 'g9-v1-c5-l14-sg-02',
      title: 'So sánh độ dài dây cung và khoảng cách đến tâm',
      description: 'Ứng dụng các định lí so sánh dây cung dựa trên khoảng cách của chúng đến tâm đường tròn.',
      difficulty: 'understanding',
      templateIds: ['g9-v1-c5-l14-tpl-03', 'g9-v1-c5-l14-tpl-04', 'g9-v1-c5-l14-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-v1-c5-l14-tpl-01',
      'g9-v1-c5-l14-tpl-02',
      'g9-v1-c5-l14-tpl-03',
      'g9-v1-c5-l14-tpl-04',
      'g9-v1-c5-l14-tpl-05'
    ]
  }
};
