import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8Practice1Content: LessonContent = {
  lessonId: 'g6-v2-c8-practice-1',
  title: 'Luyện tập chung trang 57',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập chung phần điểm, đường thẳng, tia, đoạn thẳng và trung điểm.'
  },
  objectives: [
    'Củng cố kỹ năng xác định điểm thuộc/không thuộc đường thẳng, ba điểm thẳng hàng.',
    'Nhận biết tia đối nhau, tia trùng nhau và giao điểm của các đường thẳng.',
    'Tính toán độ dài đoạn thẳng và áp dụng tính chất trung điểm để tìm độ dài.'
  ],
  prerequisites: [
    'Đã học các khái niệm cơ bản về điểm, đường thẳng, tia, đoạn thẳng và trung điểm.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-practice-1-theory-1',
      title: 'Tóm tắt kiến thức đoạn thẳng và trung điểm',
      content: '– **Trung điểm $I$ của đoạn thẳng $AB$** là điểm nằm giữa $A, B$ và cách đều $A$ và $B$ ($IA = IB = \\frac{AB}{2}$).\n– **Điểm nằm giữa**: Nếu điểm $M$ nằm giữa $A$ và $B$ thì ta có $AM + MB = AB$. Ngược lại, nếu $AM + MB = AB$ thì $M$ nằm giữa $A$ và $B$.',
      diagram: {
        id: 'g6-v2-c8-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'midpoint-segment',
        title: 'Trung điểm I của AB',
        alt: 'Đoạn thẳng AB với điểm I ở chính giữa chia đôi đoạn thẳng.',
        notToScale: true,
        data: {
          labelA: 'A',
          labelB: 'B',
          labelI: 'I'
        }
      }
    }
  ],
  remember: [
    'Muốn chứng minh $I$ là trung điểm của $AB$, cần có 2 điều kiện: $I$ nằm giữa $A, B$ và $IA = IB$.',
    'Tia $Ax$ và tia $Ay$ là hai tia đối nhau nếu chúng tạo thành đường thẳng $xy$.'
  ],
  tips: [
    'Khi làm bài toán tính độ dài đoạn thẳng trên tia, hãy vẽ hình chuẩn xác. Nhận biết thứ tự các điểm nằm trên tia để viết biểu thức cộng độ dài hợp lý.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-practice-1-mistake-1',
      mistake: 'Kết luận ngay một điểm là trung điểm khi chỉ biết nó cách đều hai đầu mút.',
      correction: 'Điểm đó phải nằm giữa hai đầu mút nữa. Ví dụ: Trên mặt phẳng, đỉnh tam giác cân cách đều hai đỉnh đáy nhưng không nằm giữa chúng nên không phải trung điểm.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-practice-1-example-1',
      title: 'Tính độ dài đoạn thẳng bằng tính chất trung điểm',
      difficulty: 'understanding',
      problem: 'Cho đoạn thẳng $AB = 8\\text{ cm}$. Gọi $M$ là trung điểm của đoạn thẳng $AB$. Gọi $N$ là trung điểm của đoạn thẳng $AM$. Tính độ dài đoạn thẳng $NB$.',
      steps: [
        'Bước 1: Vì $M$ là trung điểm của $AB$ nên $AM = MB = \\frac{AB}{2} = \\frac{8}{2} = 4\\text{ cm}$.',
        'Bước 2: Vì $N$ là trung điểm của $AM$ nên $AN = NM = \\frac{AM}{2} = \\frac{4}{2} = 2\\text{ cm}$.',
        'Bước 3: Vì $N$ thuộc đoạn thẳng $AM$, và $M$ thuộc đoạn thẳng $AB$ nên các điểm sắp xếp theo thứ tự $A, N, M, B$. Suy ra $N$ nằm giữa $A$ và $B$.',
        'Bước 4: Ta có $AN + NB = AB \\Rightarrow NB = AB - AN = 8 - 2 = 6\\text{ cm}$ (hoặc tính $NB = NM + MB = 2 + 4 = 6\\text{ cm}$).'
      ],
      answer: '6 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-practice-1-sg-01',
      title: 'Vận dụng đoạn thẳng và trung điểm',
      description: 'Luyện tập các bài toán liên quan đến tia đối, tính toán độ dài và trung điểm.',
      difficulty: 'understanding',
      templateIds: ['g6-c8-practice-1-tpl-01', 'g6-c8-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g6-c8-practice-1-tpl-01', 'g6-c8-practice-1-tpl-02', 'g6-c8-practice-1-tpl-03', 'g6-c8-practice-1-tpl-04', 'g6-c8-practice-1-tpl-05']
  }
};
