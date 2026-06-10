import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C4L19Content: LessonContent = {
  lessonId: 'g6-v1-c4-l19',
  title: 'Bài 19. Hình chữ nhật. Hình thoi. Hình bình hành. Hình thang cân',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 19,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Nhận biết hình chữ nhật, hình thoi, hình bình hành, hình thang cân bằng trực quan và tính chất cạnh/đường chéo.'
  },
  objectives: [
    'Nhận biết được hình chữ nhật, hình thoi, hình bình hành, hình thang cân.',
    'Chỉ ra được các thuộc tính song song, bằng nhau của các cạnh, các góc và các đường chéo của từng loại hình.',
    'Tính được chu vi của hình chữ nhật, hình bình hành, hình thoi khi biết các cạnh.'
  ],
  prerequisites: [
    'Định nghĩa tam giác đều, hình vuông.',
    'Hiểu các cạnh song song, vuông góc trực quan.'
  ],
  theory: [
    {
      id: 'g6-v1-c4-l19-theory-1',
      title: '1. Hình chữ nhật',
      content: 'Hình chữ nhật là tứ giác có:\n– Bốn góc vuông.\n– Các cạnh đối song song và bằng nhau.\n– Hai đường chéo bằng nhau.',
      formulas: ['P = 2(a + b) \\quad (\\text{với } a, b \\text{ là độ dài hai cạnh kề})'],
      diagram: {
        id: 'g6-v1-c4-l19-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình chữ nhật ABCD',
        alt: 'Hình chữ nhật ABCD có bốn góc vuông, các cạnh đối song song và bằng nhau.',
        notToScale: true,
        data: {
          type: 'rectangle'
        }
      }
    },
    {
      id: 'g6-v1-c4-l19-theory-2',
      title: '2. Hình thoi',
      content: 'Hình thoi là tứ giác có:\n– Bốn cạnh bằng nhau.\n– Các cạnh đối song song.\n– Hai đường chéo vuông góc với nhau.',
      formulas: ['P = 4a \\quad (\\text{với } a \\text{ là độ dài một cạnh})'],
      diagram: {
        id: 'g6-v1-c4-l19-theory-2-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình thoi ABCD',
        alt: 'Hình thoi ABCD có bốn cạnh bằng nhau, hai đường chéo vuông góc.',
        notToScale: true,
        data: {
          type: 'rhombus'
        }
      }
    },
    {
      id: 'g6-v1-c4-l19-theory-3',
      title: '3. Hình bình hành',
      content: 'Hình bình hành là tứ giác có:\n– Các cạnh đối song song và bằng nhau.\n– Các góc đối bằng nhau.\n– Hai đường chéo cắt nhau tại trung điểm của mỗi đường.',
      formulas: ['P = 2(a + b) \\quad (\\text{với } a, b \\text{ là độ dài hai cạnh liên tiếp})'],
      diagram: {
        id: 'g6-v1-c4-l19-theory-3-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình bình hành ABCD',
        alt: 'Hình bình hành ABCD có các cạnh đối song song và bằng nhau.',
        notToScale: true,
        data: {
          type: 'parallelogram'
        }
      }
    },
    {
      id: 'g6-v1-c4-l19-theory-4',
      title: '4. Hình thang cân',
      content: 'Hình thang cân là hình thang có:\n– Hai cạnh đáy song song.\n– Hai cạnh bên bằng nhau.\n– Hai đường chéo bằng nhau.',
      formulas: ['P = a + b + 2c \\quad (\\text{với } a, b \\text{ là hai đáy, } c \\text{ là hai cạnh bên})'],
      diagram: {
        id: 'g6-v1-c4-l19-theory-4-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình thang cân ABCD',
        alt: 'Hình thang cân ABCD có hai đáy song song và hai cạnh bên bằng nhau.',
        notToScale: true,
        data: {
          type: 'trapezoid'
        }
      }
    }
  ],
  remember: [
    'Hình thoi có bốn cạnh bằng nhau (giống hình vuông) nhưng các góc của hình thoi không bắt buộc phải vuông.',
    'Hình bình hành có các cạnh đối song song và bằng nhau.',
    'Hình thang cân bắt buộc phải có hai đáy song song và hai cạnh bên bằng nhau.'
  ],
  tips: [
    'Để phân biệt nhanh: hình chữ nhật có góc vuông; hình thoi có các cạnh bằng nhau; hình bình hành nghiêng có cạnh đối song song; hình thang cân giống hình cái thang cân đối.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c4-l19-mistake-1',
      mistake: 'Coi hình bình hành bất kỳ là hình thang cân.',
      correction: 'Hình thang cân chỉ có một cặp cạnh đối song song (hai đáy), còn hai cạnh bên thì chéo nhau hướng lên trên.'
    },
    {
      id: 'g6-v1-c4-l19-mistake-2',
      mistake: 'Tính chu vi hình thang cân bằng cách lấy hai đáy cộng một cạnh bên.',
      correction: 'Hình thang cân có 4 cạnh (2 đáy và 2 cạnh bên bằng nhau) nên chu vi phải tính cả 2 cạnh bên: $P = a + b + 2c$.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c4-l19-example-1',
      title: 'Tính chu vi hình chữ nhật',
      difficulty: 'basic',
      problem: 'Một hình chữ nhật có chiều dài $8\\text{ cm}$ và chiều rộng $5\\text{ cm}$. Tính chu vi của hình chữ nhật đó.',
      steps: [
        'Bước 1: Công thức tính chu vi hình chữ nhật là: $P = 2(a + b)$.',
        'Bước 2: Thay chiều dài $a = 8\\text{ cm}$ và chiều rộng $b = 5\\text{ cm}$: $P = 2(8 + 5)$.',
        'Bước 3: Thực hiện phép tính: $P = 2 \\times 13 = 26\\text{ cm}$.'
      ],
      answer: '26 cm',
      diagram: {
        id: 'g6-v1-c4-l19-example-1-diagram',
        placement: 'worked_example',
        variant: 'perimeter-area-quadrilateral',
        title: 'Hình chữ nhật',
        alt: 'Hình chữ nhật có chiều dài 8 cm và chiều rộng 5 cm.',
        notToScale: true,
        data: {
          type: 'rectangle',
          a: '8 cm',
          b: '5 cm'
        }
      }
    },
    {
      id: 'g6-v1-c4-l19-example-2',
      title: 'Tính chu vi hình thoi',
      difficulty: 'basic',
      problem: 'Tính chu vi của hình thoi biết độ dài một cạnh bằng $7\\text{ dm}$.',
      steps: [
        'Bước 1: Hình thoi có 4 cạnh bằng nhau, công thức tính chu vi giống hình vuông: $P = 4a$.',
        'Bước 2: Thay cạnh $a = 7\\text{ dm}$: $P = 4 \\times 7$.',
        'Bước 3: Tính toán: $P = 28\\text{ dm}$.'
      ],
      answer: '28 dm'
    },
    {
      id: 'g6-v1-c4-l19-example-3',
      title: 'Tìm cạnh bên của hình thang cân',
      difficulty: 'understanding',
      problem: 'Một hình thang cân có chu vi bằng $30\\text{ cm}$. Biết độ dài hai đáy lần lượt là $10\\text{ cm}$ và $6\\text{ cm}$. Tính độ dài cạnh bên của hình thang cân đó.',
      steps: [
        'Bước 1: Công thức tính chu vi hình thang cân là: $P = a + b + 2c$ (với $c$ là độ dài cạnh bên).',
        'Bước 2: Thay các số đo đã biết: $30 = 10 + 6 + 2c \\Rightarrow 30 = 16 + 2c$.',
        'Bước 3: Suy ra: $2c = 30 - 16 = 14 \\Rightarrow c = 7\\text{ cm}$.',
        'Bước 4: Vậy độ dài cạnh bên là $7\\text{ cm}$.'
      ],
      answer: '7 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c4-l19-sg-01',
      title: 'Phân loại các hình từ mô tả thuộc tính',
      description: 'Nhận diện hình chữ nhật, hình thoi, hình bình hành, hình thang cân dựa trên cạnh, góc, đường chéo.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c4-l19-tpl-thuoc-tinh-hinh']
    },
    {
      id: 'g6-v1-c4-l19-sg-02',
      title: 'Tính chu vi hình chữ nhật/bình hành/thoi',
      description: 'Luyện tập tính chu vi của các hình tứ giác cơ bản khi có đầy đủ số đo các cạnh.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c4-l19-tpl-tinh-chu-vi-tu-giac']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c4-l19-tpl-thuoc-tinh-hinh',
      'g6-v1-c4-l19-tpl-tinh-chu-vi-tu-giac'
    ]
  }
};
