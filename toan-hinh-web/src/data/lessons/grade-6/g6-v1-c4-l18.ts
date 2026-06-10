import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C4L18Content: LessonContent = {
  lessonId: 'g6-v1-c4-l18',
  title: 'Bài 18. Hình tam giác đều. Hình vuông. Hình lục giác đều',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 18,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt trực quan tam giác đều, hình vuông, lục giác đều cho học sinh mất gốc.'
  },
  objectives: [
    'Nhận biết được các hình tam giác đều, hình vuông, hình lục giác đều.',
    'Chỉ ra và gọi tên được các đỉnh, cạnh, góc của tam giác đều, hình vuông, hình lục giác đều.',
    'Tính được chu vi của tam giác đều, hình vuông, hình lục giác đều khi biết độ dài cạnh.',
    'Hiểu cách ghép lục giác đều từ 6 tam giác đều.'
  ],
  prerequisites: [
    'Biết đếm số và nhận biết góc, cạnh cơ bản.'
  ],
  theory: [
    {
      id: 'g6-v1-c4-l18-theory-1',
      title: '1. Tam giác đều',
      content: 'Tam giác đều là tam giác có:\n– Ba cạnh bằng nhau.\n– Ba góc bằng nhau.',
      formulas: ['P = 3a \\quad (\\text{với } a \\text{ là độ dài một cạnh})'],
      diagram: {
        id: 'g6-v1-c4-l18-theory-1-diagram',
        placement: 'theory',
        variant: 'basic-shapes-regular-polygons',
        title: 'Tam giác đều ABC',
        alt: 'Tam giác đều ABC có ba cạnh bằng nhau.',
        notToScale: true,
        data: {
          shape: 'triangle'
        }
      }
    },
    {
      id: 'g6-v1-c4-l18-theory-2',
      title: '2. Hình vuông',
      content: 'Hình vuông là tứ giác có:\n– Bốn cạnh bằng nhau.\n– Bốn góc bằng nhau và bằng góc vuông ($90^\\circ$).\n– Hai đường chéo bằng nhau.',
      formulas: ['P = 4a \\quad (\\text{với } a \\text{ là độ dài một cạnh})'],
      diagram: {
        id: 'g6-v1-c4-l18-theory-2-diagram',
        placement: 'theory',
        variant: 'basic-shapes-regular-polygons',
        title: 'Hình vuông ABCD',
        alt: 'Hình vuông ABCD có bốn cạnh bằng nhau và bốn góc vuông.',
        notToScale: true,
        data: {
          shape: 'square'
        }
      }
    },
    {
      id: 'g6-v1-c4-l18-theory-3',
      title: '3. Hình lục giác đều',
      content: 'Hình lục giác đều là hình có:\n– Sáu cạnh bằng nhau.\n– Sáu góc bằng nhau.\n– Ba đường chéo chính bằng nhau.\n\n*Đặc điểm ghép hình*: Một hình lục giác đều tâm $O$ có thể chia thành 6 tam giác đều bằng nhau chung đỉnh $O$.',
      formulas: ['P = 6a \\quad (\\text{với } a \\text{ là độ dài một cạnh})'],
      diagram: {
        id: 'g6-v1-c4-l18-theory-3-diagram',
        placement: 'theory',
        variant: 'basic-shapes-regular-polygons',
        title: 'Hình lục giác đều ABCDEF',
        alt: 'Hình lục giác đều ABCDEF có sáu cạnh bằng nhau.',
        notToScale: true,
        data: {
          shape: 'hexagon'
        }
      }
    }
  ],
  remember: [
    'Hình đều luôn có các cạnh bằng nhau và các góc bằng nhau.',
    'Chu vi của hình đều bằng độ dài một cạnh nhân với số lượng cạnh của hình đó.'
  ],
  tips: [
    'Nhớ công thức chu vi bằng cách đếm số cạnh: tam giác có 3 cạnh ($3a$), hình vuông có 4 cạnh ($4a$), lục giác có 6 cạnh ($6a$).'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c4-l18-mistake-1',
      mistake: 'Coi hình thoi hoặc hình chữ nhật là hình vuông.',
      correction: 'Hình thoi chỉ có 4 cạnh bằng nhau nhưng góc không vuông. Hình chữ nhật chỉ có 4 góc vuông nhưng các cạnh không bằng nhau. Hình vuông bắt buộc phải có cả hai.'
    },
    {
      id: 'g6-v1-c4-l18-mistake-2',
      mistake: 'Nhầm lẫn lục giác bất kỳ với lục giác đều.',
      correction: 'Chỉ lục giác có tất cả 6 cạnh bằng nhau và 6 góc bằng nhau mới gọi là lục giác đều.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c4-l18-example-1',
      title: 'Tính chu vi tam giác đều',
      difficulty: 'basic',
      problem: 'Tính chu vi của một tam giác đều biết độ dài một cạnh của nó là $5\\text{ cm}$.',
      steps: [
        'Bước 1: Tam giác đều có 3 cạnh bằng nhau, công thức tính chu vi là: $P = 3a$.',
        'Bước 2: Thay số đo cạnh $a = 5\\text{ cm}$: $P = 3 \\times 5$.',
        'Bước 3: Tính toán kết quả: $P = 15\\text{ cm}$.'
      ],
      answer: '15 cm',
      diagram: {
        id: 'g6-v1-c4-l18-example-1-diagram',
        placement: 'worked_example',
        variant: 'basic-shapes-regular-polygons',
        title: 'Tam giác đều cạnh 5 cm',
        alt: 'Tam giác đều ABC có cạnh bằng 5 cm.',
        notToScale: true,
        data: {
          shape: 'triangle',
          side: '5 cm'
        }
      }
    },
    {
      id: 'g6-v1-c4-l18-example-2',
      title: 'Tính chu vi hình vuông',
      difficulty: 'basic',
      problem: 'Tính chu vi của một hình vuông có độ dài cạnh bằng $6\\text{ cm}$.',
      steps: [
        'Bước 1: Hình vuông có 4 cạnh bằng nhau, công thức tính chu vi là: $P = 4a$.',
        'Bước 2: Thay số đo cạnh $a = 6\\text{ cm}$: $P = 4 \\times 6$.',
        'Bước 3: Tính toán kết quả: $P = 24\\text{ cm}$.'
      ],
      answer: '24 cm'
    },
    {
      id: 'g6-v1-c4-l18-example-3',
      title: 'Nhận biết tam giác tạo thành trong lục giác đều',
      difficulty: 'understanding',
      problem: 'Cho hình lục giác đều $ABCDEF$ có tâm là $O$. Nối tâm $O$ với các đỉnh. Có bao nhiêu tam giác đều được tạo thành?',
      steps: [
        'Bước 1: Nối tâm $O$ với 6 đỉnh $A, B, C, D, E, F$, ta chia lục giác đều thành 6 phần.',
        'Bước 2: Mỗi phần là một tam giác chung đỉnh $O$: $\\triangle OAB, \\triangle OBC, \\triangle OCD, \\triangle ODE, \\triangle OEF, \\triangle OFA$.',
        'Bước 3: Theo tính chất của lục giác đều, 6 tam giác này đều là tam giác đều.',
        'Bước 4: Vậy có tất cả 6 tam giác đều được tạo thành.'
      ],
      answer: '6 tam giác đều'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c4-l18-sg-01',
      title: 'Nhận dạng hình đều qua tính chất',
      description: 'Nhận biết tam giác đều, hình vuông, lục giác đều thông qua mô tả cạnh, góc và đường chéo.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c4-l18-tpl-nhan-dang-hinh']
    },
    {
      id: 'g6-v1-c4-l18-sg-02',
      title: 'Tính chu vi hình đều',
      description: 'Luyện tập tính chu vi của tam giác đều, hình vuông, lục giác đều khi biết số đo một cạnh.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c4-l18-tpl-tinh-chu-vi-hinh-deu']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c4-l18-tpl-nhan-dang-hinh',
      'g6-v1-c4-l18-tpl-tinh-chu-vi-hinh-deu'
    ]
  }
};
