import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3Practice1Content: LessonContent = {
  lessonId: 'g8-v1-c3-practice-1',
  title: 'Luyện tập chung trang 56',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập về tổng các góc của một tứ giác, hình thang, và hình thang cân.'
  },
  objectives: [
    'Vận dụng định lí tổng các góc trong một tứ giác bằng 360 độ để tính số đo góc chưa biết.',
    'Nhận biết định nghĩa và tính chất của hình thang, hình thang cân.'
  ],
  prerequisites: [
    'Đã học khái niệm tứ giác, hình thang và hình thang cân.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-practice-1-theory-1',
      title: 'Tứ giác và hình thang cân',
      content: '– **Tổng các góc trong tứ giác**: Bằng $360^\\circ$:\n  $$\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$$\n– **Hình thang cân**: Là hình thang có hai góc kề một đáy bằng nhau, có hai cạnh bên bằng nhau và hai đường chéo bằng nhau.',
      diagram: {
        id: 'g8-v1-c3-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình thang cân',
        alt: 'Hình thang cân ABCD có AB // CD và AD = BC.',
        notToScale: true,
        data: {
          type: 'trapezoid-isosceles'
        }
      }
    }
  ],
  remember: [
    'Trong hình thang cân, hai đường chéo bằng nhau và hai góc kề một đáy bằng nhau.'
  ],
  tips: [
    'Để tính góc thứ tư của tứ giác, lấy $360^\\circ$ trừ đi tổng số đo của ba góc đã biết.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-practice-1-mistake-1',
      mistake: 'Cho rằng hình thang bất kỳ luôn có hai đường chéo bằng nhau.',
      correction: 'Chỉ hình thang cân mới có hai đường chéo bằng nhau.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-practice-1-example-1',
      title: 'Tính góc thứ tư của tứ giác',
      difficulty: 'basic',
      problem: 'Cho tứ giác $ABCD$ có $\\widehat{A} = 100^\\circ$, $\\widehat{B} = 80^\\circ$, $\\widehat{C} = 70^\\circ$. Tính góc $\\widehat{D}$.',
      steps: [
        'Bước 1: Áp dụng định lí tổng các góc trong tứ giác: $\\widehat{A} + \\widehat{B} + \\widehat{C} + \\widehat{D} = 360^\\circ$.',
        'Bước 2: Thay số: $100^\\circ + 80^\\circ + 70^\\circ + \\widehat{D} = 360^\\circ$.',
        'Bước 3: Giải ra: $\\widehat{D} = 360^\\circ - 250^\\circ = 110^\\circ$.'
      ],
      answer: '110°'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-practice-1-sg-01',
      title: 'Tính toán góc trong tứ giác và hình thang',
      description: 'Luyện tập tìm số đo các góc của tứ giác và hình thang cân.',
      difficulty: 'understanding',
      templateIds: ['g8-c3-practice-1-tpl-01', 'g8-c3-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c3-practice-1-tpl-01', 'g8-c3-practice-1-tpl-02', 'g8-c3-practice-1-tpl-03', 'g8-c3-practice-1-tpl-04', 'g8-c3-practice-1-tpl-05']
  }
};
