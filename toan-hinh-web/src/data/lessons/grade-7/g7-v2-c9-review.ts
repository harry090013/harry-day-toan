import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9ReviewContent: LessonContent = {
  lessonId: 'g7-v2-c9-review',
  title: 'Bài tập cuối chương 9',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng hợp bài tập ôn tập cuối chương 9 về quan hệ các yếu tố trong tam giác.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức chương 9.',
    'Vận dụng tổng hợp bất đẳng thức tam giác, các đường đồng quy và tính chất để giải toán.'
  ],
  prerequisites: [
    'Đã học toàn bộ các bài trong chương 9.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-review-theory-1',
      title: 'Tóm tắt lý thuyết Chương 9',
      content: 'Chương 9 bao gồm:\n1. **Góc và cạnh đối diện**: Cạnh lớn hơn tương ứng góc đối diện lớn hơn.\n2. **Đường vuông góc và đường xiên**: Đường vuông góc là ngắn nhất.\n3. **Bất đẳng thức tam giác**: $|b - c| < a < b + c$.\n4. **Ba đường trung tuyến**: Cắt nhau tại trọng tâm $G$. Tỉ lệ $2/3$.\n5. **Ba đường phân giác**: Cắt nhau tại tâm đường tròn nội tiếp, cách đều 3 cạnh.\n6. **Ba đường trung trực**: Cắt nhau tại tâm đường tròn ngoại tiếp, cách đều 3 đỉnh.\n7. **Ba đường cao**: Cắt nhau tại trực tâm $H$.',
      diagram: {
        id: 'g7-v2-c9-review-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c9-triangle-concurrency',
        title: 'Trực tâm H của tam giác',
        alt: 'Tam giác ABC có ba đường cao cắt nhau tại trực tâm H.',
        notToScale: true,
        data: {
          type: 'orthocenter'
        }
      }
    }
  ],
  remember: [
    'Trọng tâm là giao điểm ba đường trung tuyến.',
    'Trực tâm là giao điểm ba đường cao.'
  ],
  tips: [
    'Trong tam giác vuông, trực tâm trùng với đỉnh góc vuông, tâm ngoại tiếp là trung điểm cạnh huyền.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-review-mistake-1',
      mistake: 'Sử dụng sai công thức tỉ lệ trọng tâm (ví dụ: nhầm thành 1/2 từ đỉnh).',
      correction: 'Khoảng cách từ đỉnh đến trọng tâm bằng 2/3 đường trung tuyến. Từ trọng tâm đến cạnh bằng 1/3 đường trung tuyến.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-review-example-1',
      title: 'Tìm cạnh chưa biết của tam giác từ bất đẳng thức tam giác',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ cân tại $A$ có hai cạnh lần lượt bằng $4\\text{ cm}$ và $9\\text{ cm}$. Tính độ dài cạnh còn lại.',
      steps: [
        'Bước 1: Cạnh còn lại của tam giác cân chỉ có thể bằng $4\\text{ cm}$ hoặc $9\\text{ cm}$ để tam giác là tam giác cân.',
        'Bước 2: Trường hợp 1: Cạnh còn lại bằng $4\\text{ cm}$. Bộ ba cạnh là $4, 4, 9$. Ta thấy $4 + 4 = 8 < 9$ (loại vì không thỏa mãn bất đẳng thức tam giác).',
        'Bước 3: Trường hợp 2: Cạnh còn lại bằng $9\\text{ cm}$. Bộ ba cạnh là $4, 9, 9$. Ta thấy $4 + 9 = 13 > 9$ (thỏa mãn).',
        'Bước 4: Kết luận: Độ dài cạnh còn lại là $9\\text{ cm}$.'
      ],
      answer: '9 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-review-sg-01',
      title: 'Bài tập ôn tập cuối chương 9',
      description: 'Bài toán ôn tập tổng hợp kiến thức chương 9.',
      difficulty: 'understanding',
      templateIds: ['g7-c9-review-tpl-01', 'g7-c9-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c9-review-tpl-01', 'g7-c9-review-tpl-02', 'g7-c9-review-tpl-03', 'g7-c9-review-tpl-04', 'g7-c9-review-tpl-05']
  }
};
