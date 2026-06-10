import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C4ReviewContent: LessonContent = {
  lessonId: 'g6-v1-c4-review',
  title: 'Bài tập cuối chương 4',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng hợp ôn tập cuối chương 4 về một số hình phẳng trong thực tiễn.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức về các hình phẳng cơ bản.',
    'Sử dụng thành thạo công thức tính chu vi và diện tích để giải các bài toán thực tế phức tạp.',
    'Nhận biết và phân biệt các tính chất hình học đặc trưng của mỗi hình.'
  ],
  prerequisites: [
    'Đã học toàn bộ các bài trong chương 4.'
  ],
  theory: [
    {
      id: 'g6-v1-c4-review-theory-1',
      title: 'Hệ thống hóa lý thuyết chương 4',
      content: 'Chương này ôn tập lại:\n1. **Tam giác đều**: Có 3 cạnh bằng nhau, 3 góc bằng nhau.\n2. **Hình vuông**: Có 4 cạnh bằng nhau, 4 góc vuông, 2 đường chéo bằng nhau.\n3. **Lục giác đều**: Có 6 cạnh bằng nhau, 6 góc bằng nhau, 3 đường chéo chính bằng nhau.\n4. **Hình chữ nhật**: Có 4 góc vuông, các cạnh đối song song và bằng nhau, 2 đường chéo bằng nhau.\n5. **Hình thoi**: Có 4 cạnh bằng nhau, hai đường chéo vuông góc với nhau tại trung điểm của mỗi đường.\n6. **Hình bình hành**: Các cạnh đối song song và bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm mỗi đường.\n7. **Hình thang cân**: Hai cạnh bên bằng nhau, hai góc kề một đáy bằng nhau, hai đường chéo bằng nhau.',
      diagram: {
        id: 'g6-v1-c4-review-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Mối quan hệ và phân loại tứ giác',
        alt: 'Sơ đồ phân loại các tứ giác.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Đường chéo hình vuông và hình thoi thì vuông góc với nhau.',
    'Đường chéo hình chữ nhật và hình vuông bằng nhau.',
    'Tất cả hình thang cân đều có hai đường chéo bằng nhau.'
  ],
  tips: [
    'Đối với bài toán tính số lượng gạch cần lát nền: Số gạch = (Diện tích nền) / (Diện tích một viên gạch). Nhớ quy về cùng đơn vị diện tích!'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c4-review-mistake-1',
      mistake: 'Sử dụng sai công thức diện tích hình bình hành bằng cách lấy hai cạnh kề nhân với nhau.',
      correction: 'Diện tích hình bình hành phải bằng độ dài một cạnh nhân với chiều cao tương ứng với cạnh đó ($S = ah$).'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c4-review-example-1',
      title: 'Tính số viên gạch cần để lát sàn',
      difficulty: 'understanding',
      problem: 'Một căn phòng có nền hình chữ nhật kích thước $8\\text{ m} \\times 5\\text{ m}$. Người ta muốn lát nền bằng loại gạch hình vuông cạnh $40\\text{ cm}$. Tính số viên gạch cần dùng.',
      steps: [
        'Bước 1: Tính diện tích nền căn phòng: $S_{\\text{nền}} = 8 \\times 5 = 40\\text{ m}^2 = 400,000\\text{ cm}^2$.',
        'Bước 2: Tính diện tích một viên gạch: $S_{\\text{gạch}} = 40 \\times 40 = 1,600\\text{ cm}^2$.',
        'Bước 3: Tính số viên gạch cần dùng: $N = \\frac{400,000}{1,600} = 250$ viên.'
      ],
      answer: '250 viên'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c4-review-sg-01',
      title: 'Bài tập ôn tập cuối chương 4',
      description: 'Tổng hợp kiến thức nhận biết tính chất hình học và tính toán chu vi, diện tích.',
      difficulty: 'understanding',
      templateIds: ['g6-c4-review-tpl-01', 'g6-c4-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g6-c4-review-tpl-01', 'g6-c4-review-tpl-02', 'g6-c4-review-tpl-03', 'g6-c4-review-tpl-04', 'g6-c4-review-tpl-05']
  }
};
