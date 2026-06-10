import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3ReviewContent: LessonContent = {
  lessonId: 'g8-v1-c3-review',
  title: 'Bài tập cuối chương 3',
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
    notes: 'Tổng hợp ôn tập cuối chương 3 về các loại tứ giác.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức chương 3.',
    'Nhận biết mối liên hệ và tính chất đặc trưng của tứ giác, hình thang, hình thang cân, hình bình hành, hình chữ nhật, hình thoi, hình vuông.'
  ],
  prerequisites: [
    'Đã học toàn bộ các bài trong chương 3.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-review-theory-1',
      title: 'Hệ thống hóa Chương 3',
      content: 'Chương 3 ôn tập các hình:\n1. **Tứ giác**: Có tổng 4 góc bằng $360^\\circ$.\n2. **Hình thang cân**: 2 đáy song song, 2 góc kề 1 đáy bằng nhau, 2 cạnh bên bằng nhau, 2 đường chéo bằng nhau.\n3. **Hình bình hành**: Các cạnh đối song song và bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.\n4. **Hình chữ nhật**: Có 4 góc vuông, hai đường chéo bằng nhau.\n5. **Hình thoi**: Có 4 cạnh bằng nhau, hai đường chéo vuông góc với nhau và là tia phân giác.\n6. **Hình vuông**: Đầy đủ tính chất hình chữ nhật và hình thoi.',
      diagram: {
        id: 'g8-v1-c3-review-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Sơ đồ cây phân loại tứ giác',
        alt: 'Sơ đồ minh họa quan hệ bao hàm giữa các tứ giác đặc biệt.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Hình vuông là hình thoi có một góc vuông và cũng là hình chữ nhật có hai cạnh kề bằng nhau.'
  ],
  tips: [
    'Kẻ thêm đường phụ hoặc nối các đường chéo khi giải các bài toán chứng minh tứ giác để tạo ra các tam giác bằng nhau.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-review-mistake-1',
      mistake: 'Coi hình bình hành có hai đường chéo vuông góc là hình vuông.',
      correction: 'Hình bình hành có hai đường chéo vuông góc chỉ là hình thoi. Để là hình vuông, nó phải là hình chữ nhật có hai đường chéo vuông góc.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-review-example-1',
      title: 'Tính góc đáy trong hình thang cân',
      difficulty: 'understanding',
      problem: 'Cho hình thang cân $ABCD$ ($AB \\parallel CD$) có góc $\\widehat{A} = 110^\\circ$. Tính góc $\\widehat{C}$.',
      steps: [
        'Bước 1: Vì $AB \\parallel CD$, hai góc kề một cạnh bên bù nhau: $\\widehat{A} + \\widehat{D} = 180^\\circ \\Rightarrow \\widehat{D} = 180^\\circ - 110^\\circ = 70^\\circ$.',
        'Bước 2: Vì $ABCD$ là hình thang cân, hai góc kề đáy $CD$ bằng nhau: $\\widehat{C} = \\widehat{D} = 70^\\circ$.'
      ],
      answer: '70°'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-review-sg-01',
      title: 'Bài tập ôn tập cuối chương 3',
      description: 'Tổng hợp phân tích tính chất và chứng minh các tứ giác đặc biệt.',
      difficulty: 'understanding',
      templateIds: ['g8-c3-review-tpl-01', 'g8-c3-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c3-review-tpl-01', 'g8-c3-review-tpl-02', 'g8-c3-review-tpl-03', 'g8-c3-review-tpl-04', 'g8-c3-review-tpl-05']
  }
};
