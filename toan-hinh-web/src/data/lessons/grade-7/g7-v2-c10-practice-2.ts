import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C10Practice2Content: LessonContent = {
  lessonId: 'g7-v2-c10-practice-2',
  title: 'Luyện tập trang 101',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-khoi-do-luong',
  chapterId: 'g7-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập tính diện tích xung quanh và thể tích của hình lăng trụ đứng.'
  },
  objectives: [
    'Vận dụng thành thạo công thức tính diện tích xung quanh của hình lăng trụ đứng: $S_{xq} = C \\cdot h$.',
    'Vận dụng thành thạo công thức tính thể tích của hình lăng trụ đứng: $V = S \\cdot h$.'
  ],
  prerequisites: [
    'Đã học công thức tính diện tích xung quanh và thể tích hình lăng trụ đứng.'
  ],
  theory: [
    {
      id: 'g7-v2-c10-practice-2-theory-1',
      title: 'Công thức diện tích xung quanh và thể tích lăng trụ đứng',
      content: '– **Diện tích xung quanh**: Bằng chu vi đáy nhân với chiều cao:\n  $$S_{xq} = C \\cdot h$$\n  (với $C$ là chu vi đáy, $h$ là chiều cao).\n– **Thể tích**: Bằng diện tích đáy nhân với chiều cao:\n  $$V = S_{\\text{đáy}} \\cdot h$$',
      diagram: {
        id: 'g7-v2-c10-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c10-prism-shapes',
        title: 'Hình lăng trụ đứng tứ giác',
        alt: 'Hình lăng trụ đứng có chiều cao h và đáy là tứ giác diện tích S.',
        notToScale: true,
        data: {
          type: 'quadrilateral-prism'
        }
      }
    }
  ],
  remember: [
    'Diện tích toàn phần: $S_{tp} = S_{xq} + 2 \\cdot S_{\\text{đáy}}$.',
    'Chiều cao chính là độ dài cạnh bên vuông góc với hai đáy.'
  ],
  tips: [
    'Khi tính thể tích của lăng trụ tam giác vuông, diện tích đáy tam giác vuông bằng nửa tích hai cạnh góc vuông.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c10-practice-2-mistake-1',
      mistake: 'Lấy diện tích một mặt bên nhân với chiều cao để tính thể tích.',
      correction: 'Công thức thể tích bắt buộc phải dùng diện tích đáy nhân với chiều cao ($V = S_{\\text{đáy}} \\cdot h$).'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c10-practice-2-example-1',
      title: 'Tính thể tích lăng trụ đứng tam giác vuông',
      difficulty: 'understanding',
      problem: 'Một hình lăng trụ đứng tam giác có đáy là tam giác vuông có hai cạnh góc vuông lần lượt là $3\\text{ cm}$ và $4\\text{ cm}$. Chiều cao của hình lăng trụ là $10\\text{ cm}$. Tính thể tích của hình lăng trụ đó.',
      steps: [
        'Bước 1: Tính diện tích đáy (tam giác vuông): $S_{\\text{đáy}} = \\frac{1}{2} \\times 3 \\times 4 = 6\\text{ cm}^2$.',
        'Bước 2: Tính thể tích hình lăng trụ đứng: $V = S_{\\text{đáy}} \\times h = 6 \\times 10 = 60\\text{ cm}^3$.'
      ],
      answer: '60 cm³'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c10-practice-2-sg-01',
      title: 'Tính toán diện tích và thể tích khối đứng',
      description: 'Luyện tập tính toán diện tích xung quanh, diện tích toàn phần và thể tích hình lăng trụ.',
      difficulty: 'understanding',
      templateIds: ['g7-c10-practice-2-tpl-01', 'g7-c10-practice-2-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c10-practice-2-tpl-01', 'g7-c10-practice-2-tpl-02', 'g7-c10-practice-2-tpl-03', 'g7-c10-practice-2-tpl-04', 'g7-c10-practice-2-tpl-05']
  }
};
