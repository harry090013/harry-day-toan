import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C4L20Content: LessonContent = {
  lessonId: 'g6-v1-c4-l20',
  title: 'Bài 20. Chu vi và diện tích của một số tứ giác đã học',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 20,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng hợp công thức tính chu vi và diện tích hình chữ nhật, vuông, bình hành, thoi, thang.'
  },
  objectives: [
    'Nhớ và áp dụng đúng công thức diện tích hình chữ nhật, hình vuông, hình bình hành, hình thoi, hình thang.',
    'Phân biệt được cách tính chu vi và diện tích để tránh nhầm lẫn.',
    'Giải quyết được bài toán thực tế đơn giản liên quan đến chu vi và diện tích (lát nền, trồng hoa, tính chi phí).'
  ],
  prerequisites: [
    'Định nghĩa các hình tứ giác.',
    'Thực hiện các phép nhân chia số tự nhiên.'
  ],
  theory: [
    {
      id: 'g6-v1-c4-l20-theory-1',
      title: '1. Diện tích hình bình hành',
      content: 'Diện tích hình bình hành bằng tích của một cạnh với chiều cao tương ứng của nó.',
      formulas: ['S = a \\cdot h \\quad (\\text{với } a \\text{ là cạnh đáy, } h \\text{ là chiều cao tương ứng})'],
      diagram: {
        id: 'g6-v1-c4-l20-theory-1-diagram',
        placement: 'theory',
        variant: 'perimeter-area-quadrilateral',
        title: 'Diện tích hình bình hành',
        alt: 'Hình bình hành có đáy a và chiều cao h.',
        notToScale: true,
        data: {
          type: 'parallelogram',
          a: 'a',
          h: 'h'
        }
      }
    },
    {
      id: 'g6-v1-c4-l20-theory-2',
      title: '2. Diện tích hình thoi',
      content: 'Diện tích hình thoi bằng nửa tích độ dài hai đường chéo.',
      formulas: ['S = \\frac{d_1 \\cdot d_2}{2} \\quad (\\text{với } d_1, d_2 \\text{ là độ dài hai đường chéo})'],
      diagram: {
        id: 'g6-v1-c4-l20-theory-2-diagram',
        placement: 'theory',
        variant: 'perimeter-area-quadrilateral',
        title: 'Diện tích hình thoi',
        alt: 'Hình thoi có hai đường chéo d1 và d2.',
        notToScale: true,
        data: {
          type: 'rhombus',
          b: 'd1',
          h: 'd2'
        }
      }
    },
    {
      id: 'g6-v1-c4-l20-theory-3',
      title: '3. Diện tích hình thang',
      content: 'Diện tích hình thang bằng nửa tích của tổng hai đáy với chiều cao.',
      formulas: ['S = \\frac{(a + b) \\cdot h}{2} \\quad (\\text{với } a, b \\text{ là hai đáy, } h \\text{ là chiều cao})'],
      diagram: {
        id: 'g6-v1-c4-l20-theory-3-diagram',
        placement: 'theory',
        variant: 'perimeter-area-quadrilateral',
        title: 'Diện tích hình thang',
        alt: 'Hình thang có đáy bé a, đáy lớn b và chiều cao h.',
        notToScale: true,
        data: {
          type: 'trapezoid',
          a: 'a',
          b: 'b',
          h: 'h'
        }
      }
    }
  ],
  remember: [
    'Diện tích đo bằng đơn vị vuông (ví dụ $\\text{cm}^2, \\text{m}^2$). Chu vi đo bằng đơn vị dài ($\\text{cm}, \\text{m}$).',
    'Trong diện tích hình bình hành và hình thang, phải dùng **chiều cao** $h$, không được lấy cạnh bên làm chiều cao.',
    'Khi làm toán thực tế, hãy chú ý đưa tất cả các kích thước về cùng một đơn vị đo trước khi tính toán.'
  ],
  tips: [
    'Bài ca diện tích hình thang: "Muốn tính diện tích hình thang / Đáy lớn, đáy nhỏ ta đem cộng vào / Cộng vào nhân với chiều cao / Chia đôi lấy nửa thế nào cũng ra."'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c4-l20-mistake-1',
      mistake: 'Lấy cạnh bên làm chiều cao khi tính diện tích hình bình hành.',
      correction: 'Chiều cao là đoạn vuông góc kẻ từ một đỉnh đến cạnh đối diện. Hãy tìm đoạn có ký hiệu vuông góc trên hình.'
    },
    {
      id: 'g6-v1-c4-l20-mistake-2',
      mistake: 'Quên chia 2 trong công thức tính diện tích hình thoi và hình thang.',
      correction: 'Công thức hình thoi là $\\frac{d_1 d_2}{2}$, hình thang là $\\frac{(a+b)h}{2}$. Hãy nhớ luôn chia 2.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c4-l20-example-1',
      title: 'Tính diện tích hình bình hành',
      difficulty: 'basic',
      problem: 'Một hình bình hành có độ dài đáy bằng $8\\text{ cm}$ và chiều cao tương ứng là $5\\text{ cm}$. Tính diện tích hình bình hành đó.',
      steps: [
        'Bước 1: Công thức tính diện tích hình bình hành là: $S = a \\times h$.',
        'Bước 2: Thay đáy $a = 8\\text{ cm}$ và chiều cao $h = 5\\text{ cm}$: $S = 8 \\times 5$.',
        'Bước 3: Tính toán: $S = 40\\text{ cm}^2$.'
      ],
      answer: '40 cm²',
      diagram: {
        id: 'g6-v1-c4-l20-example-1-diagram',
        placement: 'worked_example',
        variant: 'perimeter-area-quadrilateral',
        title: 'Hình bình hành',
        alt: 'Hình bình hành có đáy 8 cm và chiều cao 5 cm.',
        notToScale: true,
        data: {
          type: 'parallelogram',
          a: '8 cm',
          h: '5 cm'
        }
      }
    },
    {
      id: 'g6-v1-c4-l20-example-2',
      title: 'Tính diện tích hình thoi',
      difficulty: 'basic',
      problem: 'Tính diện tích hình thoi biết độ dài hai đường chéo lần lượt là $6\\text{ dm}$ và $8\\text{ dm}$.',
      steps: [
        'Bước 1: Công thức diện tích hình thoi là: $S = \\frac{d_1 \\times d_2}{2}$.',
        'Bước 2: Thay số đo hai đường chéo $d_1 = 6\\text{ dm}$, $d_2 = 8\\text{ dm}$: $S = \\frac{6 \\times 8}{2}$.',
        'Bước 3: Thực hiện phép tính: $S = \\frac{48}{2} = 24\\text{ dm}^2$.'
      ],
      answer: '24 dm²'
    },
    {
      id: 'g6-v1-c4-l20-example-3',
      title: 'Bài toán thực tế lát nền nhà',
      difficulty: 'application',
      problem: 'Một nền căn phòng hình chữ nhật có kích thước dài $8\\text{ m}$, rộng $4\\text{ m}$. Người ta muốn lát nền bằng loại gạch hình vuông cạnh $40\\text{ cm}$. Tính số viên gạch cần dùng để lát kín nền phòng.',
      steps: [
        'Bước 1: Tính diện tích nền căn phòng: $S_{\\text{phòng}} = 8 \\times 4 = 32\\text{ m}^2$.',
        'Bước 2: Đổi đơn vị của gạch về mét: $40\\text{ cm} = 0,4\\text{ m}$. Diện tích một viên gạch là: $S_{\\text{gạch}} = 0,4 \\times 0,4 = 0,16\\text{ m}^2$.',
        'Bước 3: Tính số viên gạch cần dùng bằng cách lấy diện tích phòng chia cho diện tích một viên gạch: $\\text{Số gạch} = 32 \\div 0,16 = 200\\text{ viên}$.'
      ],
      answer: '200 viên'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c4-l20-sg-01',
      title: 'Tính diện tích hình bình hành và hình thoi',
      description: 'Luyện tập áp dụng các công thức tính diện tích hình bình hành ($S=a.h$) và hình thoi ($S=\\frac{d_1.d_2}{2}$).',
      difficulty: 'basic',
      templateIds: ['g6-v1-c4-l20-tpl-dien-tich-basic']
    },
    {
      id: 'g6-v1-c4-l20-sg-02',
      title: 'Tính diện tích hình thang',
      description: 'Tính toán diện tích hình thang dựa trên hai đáy và chiều cao.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c4-l20-tpl-dien-tich-hinh-thang']
    },
    {
      id: 'g6-v1-c4-l20-sg-03',
      title: 'Bài toán thực tế diện tích',
      description: 'Áp dụng chu vi và diện tích vào các bài toán thực tiễn lát sân vườn, tính tiền làm hàng rào.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c4-l20-tpl-toan-thuc-te-dt']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c4-l20-tpl-dien-tich-basic',
      'g6-v1-c4-l20-tpl-dien-tich-hinh-thang',
      'g6-v1-c4-l20-tpl-toan-thuc-te-dt'
    ]
  }
};
