import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8Practice2Content: LessonContent = {
  lessonId: 'g6-v2-c8-practice-2',
  title: 'Luyện tập chung trang 65',
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
    notes: 'Luyện tập chung về góc và số đo góc.'
  },
  objectives: [
    'Nhận biết góc, đỉnh và cạnh của góc trong các hình học.',
    'Phân loại các góc: góc nhọn, góc vuông, góc tù, góc bẹt.',
    'Sử dụng thước đo góc để đọc số đo và so sánh các góc.'
  ],
  prerequisites: [
    'Đã học khái niệm góc và cách đo góc.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-practice-2-theory-1',
      title: 'Các loại góc và số đo góc',
      content: '– **Góc vuông**: Có số đo bằng $90^\\circ$.\n– **Góc nhọn**: Có số đo lớn hơn $0^\\circ$ và nhỏ hơn $90^\\circ$.\n– **Góc tù**: Có số đo lớn hơn $90^\\circ$ và nhỏ hơn $180^\\circ$.\n– **Góc bẹt**: Có số đo bằng $180^\\circ$.',
      diagram: {
        id: 'g6-v2-c8-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'angle-measure',
        title: 'Phân loại các góc',
        alt: 'Hình ảnh minh họa góc nhọn, góc vuông, góc tù và góc bẹt.',
        notToScale: true,
        data: {
          angleType: 'obtuse'
        }
      }
    }
  ],
  remember: [
    'Góc nhọn < Góc vuông < Góc tù < Góc bẹt.',
    'Góc bẹt bằng hai góc vuông ghép lại.'
  ],
  tips: [
    'Khi đọc tên góc, đỉnh của góc luôn được viết ở giữa (ví dụ góc $\\widehat{xOy}$ có đỉnh là $O$, hai cạnh là $Ox, Oy$).'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-practice-2-mistake-1',
      mistake: 'Đọc ngược thang đo trên thước đo độ (ví dụ: góc nhọn đọc thành $120^\\circ$ thay vì $60^\\circ$).',
      correction: 'Cần nhìn đúng vạch $0^\\circ$ nằm ở vòng trong hay vòng ngoài để đọc số đo tăng dần tương ứng từ cạnh bắt đầu.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-practice-2-example-1',
      title: 'Sắp xếp thứ tự các góc',
      difficulty: 'basic',
      problem: 'Cho ba góc: góc $x$ có số đo $45^\\circ$, góc $y$ là góc vuông, góc $z$ có số đo $125^\\circ$. Sắp xếp các góc theo thứ tự số đo tăng dần và cho biết loại góc.',
      steps: [
        'Bước 1: Xác định số đo cụ thể của từng góc: góc $x = 45^\\circ$, góc $y = 90^\\circ$, góc $z = 125^\\circ$.',
        'Bước 2: So sánh số đo: $45^\\circ < 90^\\circ < 125^\\circ \\Rightarrow$ góc $x <$ góc $y <$ góc $z$.',
        'Bước 3: Xác định loại góc: góc $x$ là góc nhọn, góc $y$ là góc vuông, góc $z$ là góc tù.'
      ],
      answer: 'góc x (nhọn) < góc y (vuông) < góc z (tù)'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-practice-2-sg-01',
      title: 'Đo lường và phân loại góc',
      description: 'Luyện tập các kiến thức về xác định tên góc, so sánh và phân loại góc.',
      difficulty: 'basic',
      templateIds: ['g6-c8-practice-2-tpl-01', 'g6-c8-practice-2-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g6-c8-practice-2-tpl-01', 'g6-c8-practice-2-tpl-02', 'g6-c8-practice-2-tpl-03', 'g6-c8-practice-2-tpl-04', 'g6-c8-practice-2-tpl-05']
  }
};
