import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C3L8Content: LessonContent = {
  lessonId: 'g7-v1-c3-l8',
  title: 'Bài 8. Góc ở vị trí đặc biệt. Tia phân giác của một góc',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 8,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt trực quan các góc đặc biệt và tia phân giác cho học sinh lớp 7.'
  },
  objectives: [
    'Nhận biết được các góc kề nhau, kề bù, đối đỉnh.',
    'Sử dụng tính chất của hai góc kề bù, đối đỉnh để tính số đo góc.',
    'Nhận biết được tia phân giác của một góc và tính được số đo các góc do tia phân giác tạo ra.'
  ],
  prerequisites: [
    'Hiểu khái niệm góc, số đo góc, tia và đường thẳng.'
  ],
  theory: [
    {
      id: 'g7-v1-c3-l8-theory-1',
      title: '1. Các góc ở vị trí đặc biệt',
      content: '– **Hai góc kề nhau**: Là hai góc có một cạnh chung và hai cạnh còn lại nằm về hai nửa mặt phẳng đối nhau có bờ chứa cạnh chung.\n– **Hai góc kề bù**: Là hai góc vừa kề nhau, vừa bù nhau (có tổng số đo bằng $180^\\circ$). Hai góc kề bù có hai cạnh ngoài là hai tia đối nhau.\n– **Hai góc đối đỉnh**: Là hai góc mà mỗi cạnh của góc này là tia đối của một cạnh của góc kia. Hai góc đối đỉnh thì bằng nhau.',
      formulas: [
        '\\widehat{xOz} + \\widehat{zOy} = 180^\\circ \\quad (\\text{nếu } \\widehat{xOz}, \\widehat{zOy} \\text{ kề bù})',
        '\\widehat{O_1} = \\widehat{O_3}, \\ \\widehat{O_2} = \\widehat{O_4} \\quad (\\text{nếu đối đỉnh})'
      ],
      diagram: {
        id: 'g7-v1-c3-l8-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-special-angles',
        title: 'Hai góc kề bù xOz và zOy',
        alt: 'Hình vẽ hai góc kề bù xOz và zOy có chung cạnh Oz, hai cạnh Ox và Oy là hai tia đối nhau.',
        notToScale: true,
        data: {
          type: 'linear-pair',
          vertex: 'O',
          label1: 'x',
          label2: 'y',
          label3: 'z'
        }
      }
    },
    {
      id: 'g7-v1-c3-l8-theory-2',
      title: '2. Tia phân giác của một góc',
      content: 'Tia phân giác của một góc là tia nằm giữa hai cạnh của góc và tạo với hai cạnh ấy hai góc bằng nhau.',
      formulas: [
        '\\widehat{xOz} = \\widehat{zOy} = \\frac{\\widehat{xOy}}{2}'
      ],
      diagram: {
        id: 'g7-v1-c3-l8-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-special-angles',
        title: 'Tia phân giác Oz của góc xOy',
        alt: 'Hình vẽ góc xOy có tia phân giác Oz chia góc thành hai góc bằng nhau xOz và zOy.',
        notToScale: true,
        data: {
          type: 'bisector',
          vertex: 'O',
          label1: 'x',
          label2: 'z',
          label3: 'y'
        }
      }
    }
  ],
  remember: [
    'Hai góc đối đỉnh thì bằng nhau nhưng hai góc bằng nhau chưa chắc đối đỉnh.',
    'Tia phân giác phải nằm giữa và chia đôi góc thành hai phần bằng nhau.'
  ],
  tips: [
    'Khi làm bài tính góc kề bù, luôn lấy $180^\\circ$ trừ đi góc đã biết.',
    'Để vẽ tia phân giác bằng thước đo độ, ta đo góc lớn rồi chia đôi góc để vẽ tia ở giữa.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c3-l8-mistake-1',
      mistake: 'Cho rằng hai góc bằng nhau bất kỳ là đối đỉnh.',
      correction: 'Hai góc đối đỉnh bắt buộc các cạnh phải là tia đối của nhau. Ví dụ hai góc nhọn cùng bằng $40^\\circ$ nằm rời nhau không phải là đối đỉnh.'
    },
    {
      id: 'g7-v1-c3-l8-mistake-2',
      mistake: 'Tính sai số đo góc do tia phân giác khi nhầm lẫn phép nhân và phép chia.',
      correction: 'Nếu biết góc lớn và cần tìm góc nhỏ, ta chia 2: $\\widehat{xOz} = \\widehat{xOy} / 2$. Nếu biết góc nhỏ và cần tìm góc lớn, ta nhân 2: $\\widehat{xOy} = 2 \\times \\widehat{xOz}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c3-l8-example-1',
      title: 'Tính số đo góc kề bù',
      difficulty: 'basic',
      problem: 'Cho hai góc $\\widehat{xOz}$ và $\\widehat{zOy}$ kề bù với nhau. Biết $\\widehat{xOz} = 70^\\circ$. Tính số đo góc $\\widehat{zOy}$.',
      steps: [
        'Bước 1: Vì $\\widehat{xOz}$ và $\\widehat{zOy}$ là hai góc kề bù nên tổng số đo của chúng bằng $180^\\circ$. Ta có: $\\widehat{xOz} + \\widehat{zOy} = 180^\\circ$.',
        'Bước 2: Thay số đo góc $\\widehat{xOz} = 70^\\circ$ vào đẳng thức: $70^\\circ + \\widehat{zOy} = 180^\\circ$.',
        'Bước 3: Thực hiện phép tính: $\\widehat{zOy} = 180^\\circ - 70^\\circ = 110^\\circ$.',
        'Bước 4: Kết luận góc $\\widehat{zOy} = 110^\\circ$.'
      ],
      answer: '110°'
    },
    {
      id: 'g7-v1-c3-l8-example-2',
      title: 'Tính góc đối đỉnh',
      difficulty: 'basic',
      problem: 'Cho hai đường thẳng $xx\'$ và $yy\'$ cắt nhau tại $O$ tạo thành góc $\\widehat{xOy} = 50^\\circ$. Tính số đo góc $\\widehat{x\'Oy\'}$ đối đỉnh với nó.',
      steps: [
        'Bước 1: Nhận biết mối quan hệ: góc $\\widehat{xOy}$ và góc $\\widehat{x\'Oy\'}$ là hai góc đối đỉnh vì cạnh $Ox\'$ là tia đối của $Ox$ và cạnh $Oy\'$ là tia đối của $Oy$.',
        'Bước 2: Áp dụng tính chất: hai góc đối đỉnh thì bằng nhau.',
        'Bước 3: Ta có $\\widehat{x\'Oy\'} = \\widehat{xOy} = 50^\\circ$.'
      ],
      answer: '50°',
      diagram: {
        id: 'g7-v1-c3-l8-example-2-diagram',
        placement: 'worked_example',
        variant: 'g7-special-angles',
        title: 'Hai đường thẳng cắt nhau tại O',
        alt: 'Hai đường thẳng xx\' và yy\' cắt nhau tại O.',
        notToScale: true,
        data: {
          type: 'vertical',
          vertex: 'O',
          label1: 'x',
          label2: 'x\'',
          label3: 'y\'',
          label4: 'y'
        }
      }
    },
    {
      id: 'g7-v1-c3-l8-example-3',
      title: 'Tính góc từ tia phân giác',
      difficulty: 'understanding',
      problem: 'Cho góc $\\widehat{xOy} = 80^\\circ$ có tia phân giác là $Oz$. Tính số đo góc $\\widehat{xOz}$.',
      steps: [
        'Bước 1: Vì $Oz$ là tia phân giác của góc $\\widehat{xOy}$ nên tia $Oz$ nằm giữa hai tia $Ox$, $Oy$ và chia góc $\\widehat{xOy}$ thành hai góc bằng nhau: $\\widehat{xOz} = \\widehat{zOy}$.',
        'Bước 2: Công thức tính góc thành phần: $\\widehat{xOz} = \\frac{\\widehat{xOy}}{2}$.',
        'Bước 3: Thay số đo góc $\\widehat{xOy} = 80^\\circ$: $\\widehat{xOz} = \\frac{80^\\circ}{2} = 40^\\circ$.'
      ],
      answer: '40°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c3-l8-sg-01',
      title: 'Nhận diện góc kề, kề bù, đối đỉnh',
      description: 'Nhận biết các mối quan hệ góc đặc biệt thông qua định nghĩa và hình vẽ.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c3-l8-tpl-01', 'g7-v1-c3-l8-tpl-05']
    },
    {
      id: 'g7-v1-c3-l8-sg-02',
      title: 'Tính toán góc kề bù và đối đỉnh',
      description: 'Luyện tập sử dụng tính chất góc kề bù và góc đối đỉnh để tính số đo góc.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c3-l8-tpl-02', 'g7-v1-c3-l8-tpl-03']
    },
    {
      id: 'g7-v1-c3-l8-sg-03',
      title: 'Tính toán góc liên quan tia phân giác',
      description: 'Áp dụng tính chất tia phân giác để tìm số đo góc lớn hoặc góc thành phần.',
      difficulty: 'understanding',
      templateIds: ['g7-v1-c3-l8-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c3-l8-tpl-01',
      'g7-v1-c3-l8-tpl-02',
      'g7-v1-c3-l8-tpl-03',
      'g7-v1-c3-l8-tpl-04',
      'g7-v1-c3-l8-tpl-05'
    ]
  }
};
