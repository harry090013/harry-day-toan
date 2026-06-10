import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3L12Content: LessonContent = {
  lessonId: 'g8-v1-c3-l12',
  title: 'Bài 12. Hình bình hành',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 12,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa, tính chất và dấu hiệu nhận biết hình bình hành.'
  },
  objectives: [
    'Mô tả được hình bình hành và các yếu tố đỉnh, cạnh, góc, đường chéo.',
    'Giải thích được các tính chất của hình bình hành (cạnh đối, góc đối, hai đường chéo cắt nhau tại trung điểm).',
    'Vận dụng các dấu hiệu nhận biết để chứng minh tứ giác là hình bình hành.'
  ],
  prerequisites: [
    'Định lí tổng các góc tứ giác, các trường hợp bằng nhau của hai tam giác.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-l12-theory-1',
      title: '1. Định nghĩa hình bình hành',
      content: 'Hình bình hành là tứ giác có các cạnh đối song song.',
      diagram: {
        id: 'g8-v1-c3-l12-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình bình hành ABCD',
        alt: 'Hình bình hành ABCD có các cạnh đối song song.',
        notToScale: true,
        data: {
          type: 'parallelogram'
        }
      }
    },
    {
      id: 'g8-v1-c3-l12-theory-2',
      title: '2. Tính chất của hình bình hành',
      content: 'Trong hình bình hành:\n- Các cạnh đối bằng nhau ($AB = CD, AD = BC$).\n- Các góc đối bằng nhau ($\\widehat{A} = \\widehat{C}, \\widehat{B} = \\widehat{D}$).\n- Hai đường chéo cắt nhau tại trung điểm của mỗi đường.',
      formulas: [
        'AB = CD, \\quad AD = BC',
        '\\widehat{A} = \\widehat{C}, \\quad \\widehat{B} = \\widehat{D}',
        'OA = OC, \\quad OB = OD \\quad (\\text{O là giao điểm của AC và BD})'
      ]
    },
    {
      id: 'g8-v1-c3-l12-theory-3',
      title: '3. Dấu hiệu nhận biết',
      content: 'Một tứ giác là hình bình hành nếu thỏa mãn một trong các điều kiện sau:\n1. Có các cạnh đối song song.\n2. Có các cạnh đối bằng nhau.\n3. Có hai cạnh đối song song và bằng nhau.\n4. Có các góc đối bằng nhau.\n5. Có hai đường chéo cắt nhau tại trung điểm của mỗi đường.',
      formulas: [
        'AB \\parallel CD \\text{ và } AB = CD \\Rightarrow ABCD \\text{ là hình bình hành}'
      ]
    }
  ],
  remember: [
    'Hình bình hành là một hình thang đặc biệt có hai cạnh bên song song với nhau.',
    'Để chứng minh hai đoạn thẳng song song hoặc bằng nhau, ta thường tìm cách ghép chúng vào hai cạnh đối của một hình bình hành.'
  ],
  tips: [
    'Dấu hiệu "hai cạnh đối song song và bằng nhau" là dấu hiệu rất mạnh và thường xuyên được dùng nhất để chứng minh hình bình hành vì chỉ cần xét một cặp cạnh đối thay vì cả hai cặp.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-l12-mistake-1',
      mistake: 'Tứ giác có một cặp cạnh đối song song và cặp cạnh đối còn lại bằng nhau là hình bình hành.',
      correction: 'Sai! Đây có thể là hình thang cân (hai đáy song song và hai cạnh bên bằng nhau nhưng không song song). Hai điều kiện song song và bằng nhau phải nằm trên **cùng một cặp cạnh đối**.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-l12-example-1',
      title: 'Tìm góc chưa biết của hình bình hành',
      difficulty: 'basic',
      problem: 'Cho hình bình hành $ABCD$ có $\\widehat{A} = 110^\\circ$. Tính các góc còn lại của hình bình hành.',
      steps: [
        'Bước 1: Do các góc đối bằng nhau nên $\\widehat{C} = \\widehat{A} = 110^\\circ$.',
        'Bước 2: Vì $AB \\parallel CD$, hai góc $\\widehat{A}$ và $\\widehat{D}$ kề cạnh bên là hai góc trong cùng phía, có tổng bằng $180^\\circ$.',
        'Bước 3: Tính góc $\\widehat{D} = 180^\\circ - \\widehat{A} = 180^\\circ - 110^\\circ = 70^\\circ$.',
        'Bước 4: Do các góc đối bằng nhau nên $\\widehat{B} = \\widehat{D} = 70^\\circ$.',
        'Bước 5: Kết luận: $\\widehat{B} = 70^\\circ, \\widehat{C} = 110^\\circ, \\widehat{D} = 70^\\circ$.'
      ],
      answer: 'B = 70^\\circ, C = 110^\\circ, D = 70^\\circ'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-l12-sg-01',
      title: 'Tính toán góc và cạnh của hình bình hành',
      description: 'Sử dụng các tính chất cạnh đối bằng nhau, góc đối bằng nhau để tìm số đo.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c3-l12-tpl-01', 'g8-v1-c3-l12-tpl-02']
    },
    {
      id: 'g8-v1-c3-l12-sg-02',
      title: 'Chứng minh hình bình hành',
      description: 'Áp dụng 5 dấu hiệu nhận biết để chứng minh một tứ giác cho trước là hình bình hành.',
      difficulty: 'understanding',
      templateIds: ['g8-v1-c3-l12-tpl-03', 'g8-v1-c3-l12-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c3-l12-tpl-01',
      'g8-v1-c3-l12-tpl-02',
      'g8-v1-c3-l12-tpl-03',
      'g8-v1-c3-l12-tpl-04'
    ]
  }
};
