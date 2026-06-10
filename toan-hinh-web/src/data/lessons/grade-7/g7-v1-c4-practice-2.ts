import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4Practice2Content: LessonContent = {
  lessonId: 'g7-v1-c4-practice-2',
  title: 'Luyện tập chung trang 74',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập chung các trường hợp bằng nhau đặc biệt của tam giác vuông.'
  },
  objectives: [
    'Vận dụng các trường hợp bằng nhau của tam giác vuông: hai cạnh góc vuông, cạnh góc vuông - góc nhọn kề, cạnh huyền - góc nhọn, cạnh huyền - cạnh góc vuông.'
  ],
  prerequisites: [
    'Đã học các trường hợp bằng nhau của tam giác vuông.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-practice-2-theory-1',
      title: 'Các trường hợp bằng nhau của tam giác vuông',
      content: '– **Hai cạnh góc vuông**: Giống trường hợp c-g-c (góc vuông xen giữa).\n– **Cạnh góc vuông - Góc nhọn kề**: Giống trường hợp g-c-g.\n– **Cạnh huyền - Góc nhọn**.\n– **Cạnh huyền - Cạnh góc vuông**.',
      diagram: {
        id: 'g7-v1-c4-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-right-triangle',
        title: 'Tam giác vuông bằng nhau',
        alt: 'Hai tam giác vuông có cạnh huyền và một cạnh góc vuông bằng nhau.',
        notToScale: true,
        data: {
          case: 'hypotenuse-leg'
        }
      }
    }
  ],
  remember: [
    'Tam giác vuông đã có sẵn một yếu tố bằng nhau là góc vuông ($90^\\circ$).'
  ],
  tips: [
    'Nếu hai tam giác vuông có chung cạnh huyền, hãy tìm thêm một góc nhọn bằng nhau để dùng trường hợp cạnh huyền - góc nhọn.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-practice-2-mistake-1',
      mistake: 'Nhầm lẫn góc nhọn đối diện với góc nhọn kề cạnh góc vuông.',
      correction: 'Phải dùng đúng góc kề với cạnh góc vuông đang xét.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-practice-2-example-1',
      title: 'Cạnh huyền - góc nhọn',
      difficulty: 'understanding',
      problem: 'Cho $\\triangle ABC$ vuông tại $A$ và $\\triangle DEF$ vuông tại $D$. Biết cạnh huyền $BC = EF$ và góc nhọn $\\widehat{B} = \\widehat{E}$. Biết $AC = 6\\text{ cm}$. Tính độ dài $DF$.',
      steps: [
        'Bước 1: Xét hai tam giác vuông $\\triangle ABC$ (vuông tại $A$) và $\\triangle DEF$ (vuông tại $D$): cạnh huyền $BC = EF$ và góc nhọn $\\widehat{B} = \\widehat{E}$.',
        'Bước 2: Suy ra $\\triangle ABC = \\triangle DEF$ (cạnh huyền - góc nhọn).',
        'Bước 3: Từ đó, hai cạnh tương ứng bằng nhau: $DF = AC = 6\\text{ cm}$.'
      ],
      answer: '6 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-practice-2-sg-01',
      title: 'Các trường hợp tam giác vuông',
      description: 'Luyện tập chứng minh tam giác vuông bằng nhau.',
      difficulty: 'understanding',
      templateIds: ['g7-c4-practice-2-tpl-01', 'g7-c4-practice-2-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c4-practice-2-tpl-01', 'g7-c4-practice-2-tpl-02', 'g7-c4-practice-2-tpl-03', 'g7-c4-practice-2-tpl-04', 'g7-c4-practice-2-tpl-05']
  }
};
