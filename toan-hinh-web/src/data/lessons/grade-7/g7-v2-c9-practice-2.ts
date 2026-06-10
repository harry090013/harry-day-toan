import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9Practice2Content: LessonContent = {
  lessonId: 'g7-v2-c9-practice-2',
  title: 'Luyện tập chung trang 83',
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
    notes: 'Luyện tập chung về bốn loại đường đồng quy trong tam giác: trung tuyến, phân giác, trung trực và đường cao.'
  },
  objectives: [
    'Phân biệt tính chất của trọng tâm, giao điểm ba đường phân giác, giao điểm ba đường trung trực và trực tâm.',
    'Vận dụng tính chất trọng tâm (tỉ số 2/3) để tính toán độ dài trung tuyến.'
  ],
  prerequisites: [
    'Đã học các đường đồng quy trong tam giác.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-practice-2-theory-1',
      title: 'Các đường đồng quy trong tam giác',
      content: '– **Trọng tâm $G$** (giao điểm ba đường trung tuyến): Cách mỗi đỉnh một khoảng bằng $\\frac{2}{3}$ độ dài đường trung tuyến đi qua đỉnh đó.\n– **Giao điểm ba đường phân giác**: Cách đều ba cạnh của tam giác (tâm đường tròn nội tiếp).\n– **Giao điểm ba đường trung trực**: Cách đều ba đỉnh của tam giác (tâm đường tròn ngoại tiếp).\n– **Trực tâm $H$** (giao điểm ba đường cao).',
      diagram: {
        id: 'g7-v2-c9-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c9-triangle-concurrency',
        title: 'Trọng tâm G của tam giác',
        alt: 'Tam giác ABC có ba đường trung tuyến cắt nhau tại trọng tâm G.',
        notToScale: true,
        data: {
          type: 'centroid'
        }
      }
    }
  ],
  remember: [
    'Trọng tâm chia đường trung tuyến $AM$ thành các phần có tỉ số: $AG = \\frac{2}{3} AM$ và $GM = \\frac{1}{3} AM$.',
    'Trong tam giác đều, bốn điểm trọng tâm, trực tâm, tâm nội tiếp, tâm ngoại tiếp trùng nhau.'
  ],
  tips: [
    'Nhớ nhanh: Trung tuyến tương ứng với Trọng tâm, Cao tương ứng với Trực tâm.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-practice-2-mistake-1',
      mistake: 'Nhầm lẫn trực tâm với trọng tâm.',
      correction: 'Trực tâm là giao của ba đường cao (vuông góc cạnh). Trọng tâm là giao của ba đường trung tuyến (đi qua trung điểm cạnh).'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-practice-2-example-1',
      title: 'Tính khoảng cách đến trọng tâm',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ có đường trung tuyến $AM = 9\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác. Tính độ dài đoạn thẳng $AG$ và $GM$.',
      steps: [
        'Bước 1: Theo tính chất trọng tâm, ta có: $AG = \\frac{2}{3} AM$ và $GM = \\frac{1}{3} AM$.',
        'Bước 2: Thay số: $AG = \\frac{2}{3} \\times 9 = 6\\text{ cm}$.',
        'Bước 3: Thay số: $GM = \\frac{1}{3} \\times 9 = 3\\text{ cm}$.'
      ],
      answer: 'AG = 6 cm, GM = 3 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-practice-2-sg-01',
      title: 'Tính chất đường đồng quy',
      description: 'Luyện tập tính chất trọng tâm và các giao điểm đồng quy.',
      difficulty: 'understanding',
      templateIds: ['g7-c9-practice-2-tpl-01', 'g7-c9-practice-2-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c9-practice-2-tpl-01', 'g7-c9-practice-2-tpl-02', 'g7-c9-practice-2-tpl-03', 'g7-c9-practice-2-tpl-04', 'g7-c9-practice-2-tpl-05']
  }
};
