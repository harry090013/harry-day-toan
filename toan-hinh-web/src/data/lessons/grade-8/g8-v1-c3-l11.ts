import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3L11Content: LessonContent = {
  lessonId: 'g8-v1-c3-l11',
  title: 'Bài 11. Hình thang cân',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 11,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa và tính chất hình thang cân.'
  },
  objectives: [
    'Mô tả được hình thang, hình thang cân và các yếu tố đáy, cạnh bên, đường chéo.',
    'Giải thích được tính chất về cạnh bên, góc kề một đáy và đường chéo của hình thang cân.',
    'Nhận biết được dấu hiệu chứng minh một tứ giác là hình thang cân.'
  ],
  prerequisites: [
    'Khái niệm tứ giác, đường thẳng song song, hai góc kề bù, hai góc trong cùng phía.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-l11-theory-1',
      title: '1. Định nghĩa hình thang cân',
      content: 'Hình thang là tứ giác có hai cạnh đối song song (hai cạnh đối này gọi là hai đáy).\n\n**Hình thang cân** là hình thang có hai góc kề một đáy bằng nhau.',
      diagram: {
        id: 'g8-v1-c3-l11-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình thang cân ABCD',
        alt: 'Hình thang cân ABCD có hai đáy AB và CD, góc C bằng góc D.',
        notToScale: true,
        data: {
          type: 'trapezoid'
        }
      }
    },
    {
      id: 'g8-v1-c3-l11-theory-2',
      title: '2. Tính chất và dấu hiệu nhận biết',
      content: '**Tính chất:** Trong hình thang cân:\n- Hai cạnh bên bằng nhau ($AD = BC$).\n- Hai đường chéo bằng nhau ($AC = BD$).\n\n**Dấu hiệu nhận biết:**\n- Tứ giác có hai cạnh đối song song và hai góc kề một đáy bằng nhau là hình thang cân.\n- Hình thang có hai đường chéo bằng nhau là hình thang cân.',
      formulas: [
        'AB \\parallel CD \\text{ và } \\widehat{C} = \\widehat{D} \\Rightarrow ABCD \\text{ là hình thang cân}',
        'AC = BD \\text{ (trong hình thang) } \\Rightarrow ABCD \\text{ là hình thang cân}'
      ]
    }
  ],
  remember: [
    'Hình thang có hai góc kề một đáy bằng nhau là hình thang cân.',
    'Nếu hình thang có hai cạnh bên bằng nhau thì CHƯA CHẮC đã là hình thang cân (nó có thể là hình bình hành). Do đó, dấu hiệu nhận biết bằng cạnh bên không tồn tại, chỉ dùng dấu hiệu đường chéo hoặc góc.'
  ],
  tips: [
    'Khi làm bài tập hình thang cân, ta thường vẽ thêm hai đường cao từ hai đỉnh đáy bé xuống đáy lớn để tạo ra các tam giác vuông bằng nhau, giúp dễ dàng chứng minh các đoạn thẳng bằng nhau.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-l11-mistake-1',
      mistake: 'Chứng minh hình thang cân bằng cách chỉ ra hai cạnh bên bằng nhau.',
      correction: 'Đây là lỗi phổ biến. Hình bình hành cũng có hai cạnh bên bằng nhau nhưng không phải hình thang cân. Phải dùng tính chất góc hoặc hai đường chéo bằng nhau.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-l11-example-1',
      title: 'Tính góc trong hình thang cân',
      difficulty: 'basic',
      problem: 'Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có góc $\\widehat{D} = 70^\\circ$. Tính các góc còn lại của hình thang.',
      steps: [
        'Bước 1: Vì $ABCD$ là hình thang cân kề đáy $CD$ nên $\\widehat{C} = \\widehat{D} = 70^\\circ$.',
        'Bước 2: Vì $AB \\parallel CD$, hai góc $\\widehat{A}$ và $\\widehat{D}$ kề cạnh bên $AD$ nên chúng là hai góc trong cùng phía, có tổng bằng $180^\\circ$.',
        'Bước 3: Tính góc $\\widehat{A}$: $\\widehat{A} = 180^\\circ - \\widehat{D} = 180^\\circ - 70^\\circ = 110^\\circ$.',
        'Bước 4: Vì kề đáy $AB$ nên góc $\\widehat{B} = \\widehat{A} = 110^\\circ$.',
        'Bước 5: Kết luận: $\\widehat{C} = 70^\\circ, \\widehat{A} = 110^\\circ, \\widehat{B} = 110^\\circ$.'
      ],
      answer: 'A = 110^\\circ, B = 110^\\circ, C = 70^\\circ'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-l11-sg-01',
      title: 'Tính số đo góc hình thang',
      description: 'Sử dụng tính chất song song và tính chất cân để tìm số đo các góc.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c3-l11-tpl-01', 'g8-v1-c3-l11-tpl-02']
    },
    {
      id: 'g8-v1-c3-l11-sg-02',
      title: 'Chứng minh tứ giác là hình thang cân',
      description: 'Vận dụng các dấu hiệu nhận biết về góc kề đáy và hai đường chéo bằng nhau.',
      difficulty: 'understanding',
      templateIds: ['g8-v1-c3-l11-tpl-03', 'g8-v1-c3-l11-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c3-l11-tpl-01',
      'g8-v1-c3-l11-tpl-02',
      'g8-v1-c3-l11-tpl-03',
      'g8-v1-c3-l11-tpl-04'
    ]
  }
};
