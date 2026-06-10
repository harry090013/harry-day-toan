import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3L10Content: LessonContent = {
  lessonId: 'g8-v1-c3-l10',
  title: 'Bài 10. Tứ giác',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 10,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng các góc của một tứ giác lồi.'
  },
  objectives: [
    'Mô tả được khái niệm tứ giác, tứ giác lồi, đỉnh kề, đỉnh đối, cạnh kề, cạnh đối, đường chéo.',
    'Hiểu và phát biểu được định lí về tổng các góc của một tứ giác bằng 360 độ.',
    'Vận dụng định lí tổng các góc để tính số đo góc chưa biết trong tứ giác.'
  ],
  prerequisites: [
    'Tổng ba góc của một tam giác bằng 180 độ, khái niệm đa giác.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-l10-theory-1',
      title: '1. Khái niệm tứ giác lồi',
      content: 'Tứ giác $ABCD$ là hình gồm bốn đoạn thẳng $AB, BC, CD, DA$, trong đó bất kỳ hai đoạn thẳng nào cũng không cùng nằm trên một đường thẳng.\n\n**Tứ giác lồi** là tứ giác luôn nằm trong một nửa mặt phẳng có bờ là đường thẳng chứa bất kỳ cạnh nào của tứ giác.',
      diagram: {
        id: 'g8-v1-c3-l10-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Tứ giác lồi ABCD',
        alt: 'Hình vẽ tứ giác lồi ABCD.',
        notToScale: true,
        data: {
          type: 'parallelogram' // Renders a nice general quadrilateral shape
        }
      }
    },
    {
      id: 'g8-v1-c3-l10-theory-2',
      title: '2. Định lí tổng các góc của một tứ giác',
      content: 'Tổng các góc của một tứ giác bằng $360^\\circ$:\n$$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$$',
      formulas: [
        '\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ'
      ]
    }
  ],
  remember: [
    'Tổng bốn góc của tứ giác là $360^\\circ$, gấp đôi tổng ba góc của tam giác ($180^\\circ$).',
    'Đường chéo là đoạn thẳng nối hai đỉnh đối diện (ví dụ: $AC, BD$). Tứ giác có 2 đường chéo.'
  ],
  tips: [
    'Khi làm bài tập tính góc tứ giác, nếu biết 3 góc, chỉ cần lấy $360^\\circ$ trừ đi tổng 3 góc đã biết để ra góc thứ tư.',
    'Nếu đề bài cho mối liên hệ tỉ lệ giữa các góc, hãy đặt góc nhỏ nhất là $x$ và biểu diễn các góc còn lại theo $x$, rồi giải phương trình tổng bằng $360^\\circ$.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-l10-mistake-1',
      mistake: 'Nhầm lẫn tổng các góc của tứ giác bằng $180^\\circ$.',
      correction: 'Hãy nhớ rằng tổng các góc của tam giác mới là $180^\\circ$. Tứ giác có thể chia làm hai tam giác nên tổng các góc phải bằng $2 \\times 180^\\circ = 360^\\circ$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-l10-example-1',
      title: 'Tính góc thứ tư của tứ giác',
      difficulty: 'basic',
      problem: 'Cho tứ giác $ABCD$ có $\\widehat{A} = 110^\\circ, \\widehat{B} = 120^\\circ, \\widehat{C} = 80^\\circ$. Tính số đo góc $\\widehat{D}$.',
      steps: [
        'Bước 1: Áp dụng định lí tổng bốn góc trong tứ giác $ABCD$: $\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$.',
        'Bước 2: Thay số đo các góc đã biết: $110^\\circ + 120^\\circ + 80^\\circ + \\widehat{D} = 360^\\circ$.',
        'Bước 3: Tính tổng 3 góc đã biết: $110^\\circ + 120^\\circ + 80^\\circ = 310^\\circ$.',
        'Bước 4: Tính góc $\\widehat{D}$: $\\widehat{D} = 360^\\circ - 310^\\circ = 50^\\circ$.'
      ],
      answer: '50^\\circ'
    },
    {
      id: 'g8-v1-c3-l10-example-2',
      title: 'Tính góc khi biết tỉ lệ thức',
      difficulty: 'understanding',
      problem: 'Cho tứ giác $ABCD$ có $\\widehat{A} = \\widehat{B} = \\widehat{C}$ và $\\widehat{D} = 90^\\circ$. Tính số đo các góc $\\widehat{A}, \\widehat{B}, \\widehat{C}$.',
      steps: [
        'Bước 1: Đặt số đo góc $\\widehat{A} = \\widehat{B} = \\widehat{C} = x$.',
        'Bước 2: Áp dụng định lí tổng các góc trong tứ giác: $x + x + x + 90^\\circ = 360^\\circ$.',
        'Bước 3: Thu gọn biểu thức: $3x + 90^\\circ = 360^\\circ \\Rightarrow 3x = 270^\\circ \\Rightarrow x = 90^\\circ$.',
        'Bước 4: Vậy các góc $\\widehat{A} = \\widehat{B} = \\widehat{C} = 90^\\circ$. (Tứ giác này là hình chữ nhật).'
      ],
      answer: 'A = B = C = 90^\\circ'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-l10-sg-01',
      title: 'Tính số đo góc trong tứ giác',
      description: 'Vận dụng định lí tổng bốn góc để tìm số đo các góc chưa biết của tứ giác.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c3-l10-tpl-01', 'g8-v1-c3-l10-tpl-02']
    },
    {
      id: 'g8-v1-c3-l10-sg-02',
      title: 'Xác định các mối quan hệ cạnh kề, cạnh đối',
      description: 'Nhận biết các yếu tố cơ bản đỉnh, cạnh, đường chéo của một tứ giác.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c3-l10-tpl-03', 'g8-v1-c3-l10-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c3-l10-tpl-01',
      'g8-v1-c3-l10-tpl-02',
      'g8-v1-c3-l10-tpl-03',
      'g8-v1-c3-l10-tpl-04'
    ]
  }
};
