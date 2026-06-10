import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C4L16Content: LessonContent = {
  lessonId: 'g8-v1-c4-l16',
  title: 'Bài 16. Đường trung bình của tam giác',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 16,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa và tính chất đường trung bình của tam giác.'
  },
  objectives: [
    'Mô tả được định nghĩa đường trung bình của tam giác.',
    'Giải thích được tính chất đường trung bình của tam giác (song song với cạnh thứ ba và bằng nửa cạnh đó).',
    'Vận dụng tính chất đường trung bình để tính độ dài cạnh và chứng minh song song.'
  ],
  prerequisites: [
    'Khái niệm trung điểm, tam giác, định lí Thalès.'
  ],
  theory: [
    {
      id: 'g8-v1-c4-l16-theory-1',
      title: '1. Định nghĩa đường trung bình của tam giác',
      content: 'Đường trung bình của tam giác là phân đoạn thẳng nối trung điểm hai cạnh của tam giác đó.',
      diagram: {
        id: 'g8-v1-c4-l16-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c4-thales',
        title: 'Đường trung bình MN',
        alt: 'Tam giác ABC có M là trung điểm AB, N là trung điểm AC. Đoạn thẳng MN là đường trung bình.',
        notToScale: true,
        data: {
          type: 'midsegment',
          labelA: 'A',
          labelB: 'B',
          labelC: 'C',
          labelM: 'M',
          labelN: 'N'
        }
      }
    },
    {
      id: 'g8-v1-c4-l16-theory-2',
      title: '2. Tính chất đường trung bình',
      content: 'Đường trung bình của tam giác song song với cạnh thứ ba và bằng nửa cạnh ấy:\n$$MN \\parallel BC \\quad \\text{và} \\quad MN = \\frac{1}{2} BC$$',
      formulas: [
        'MN \\parallel BC',
        'MN = \\frac{1}{2} BC'
      ]
    }
  ],
  remember: [
    'Một tam giác có ba đường trung bình.',
    'Nếu một đường thẳng đi qua trung điểm của một cạnh tam giác và song song với cạnh thứ hai thì nó đi qua trung điểm của cạnh thứ ba.'
  ],
  tips: [
    'Khi đề bài xuất hiện nhiều trung điểm của các cạnh trong tam giác, hãy nghĩ ngay đến việc vẽ và sử dụng tính chất của đường trung bình.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c4-l16-mistake-1',
      mistake: 'Nhầm lẫn đường trung bình với đường trung tuyến.',
      correction: 'Đường trung tuyến nối từ đỉnh đến trung điểm cạnh đối diện (1 đỉnh, 1 trung điểm). Đường trung bình nối hai trung điểm của hai cạnh (không đi qua đỉnh nào).'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c4-l16-example-1',
      title: 'Tính cạnh đáy khi biết đường trung bình',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$. Gọi $D, E$ lần lượt là trung điểm của $AB, AC$. Biết độ dài đoạn thẳng $DE = 4\\text{ cm}$. Tính độ dài cạnh $BC$.',
      steps: [
        'Bước 1: Vì $D$ là trung điểm của $AB$, $E$ là trung điểm của $AC$ nên $DE$ là đường trung bình của tam giác $ABC$.',
        'Bước 2: Áp dụng tính chất đường trung bình: $DE = \\frac{1}{2} BC$.',
        'Bước 3: Suy ra độ dài $BC$: $BC = 2 \\times DE = 2 \\times 4 = 8\\text{ cm}$.',
        'Bước 4: Trả lời: Độ dài cạnh $BC$ là $8\\text{ cm}$.'
      ],
      answer: '8 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c4-l16-sg-01',
      title: 'Tính độ dài đoạn thẳng bằng đường trung bình',
      description: 'Sử dụng hệ thức $MN = 1/2 BC$ để tìm độ dài đường trung bình hoặc cạnh đáy tương ứng.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c4-l16-tpl-01', 'g8-v1-c4-l16-tpl-02']
    },
    {
      id: 'g8-v1-c4-l16-sg-02',
      title: 'Chứng minh song song và trung điểm',
      description: 'Vận dụng định lí đường trung bình và định lí đảo để chứng minh song song hoặc trung điểm.',
      difficulty: 'understanding',
      templateIds: ['g8-v1-c4-l16-tpl-03', 'g8-v1-c4-l16-tpl-04', 'g8-v1-c4-l16-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c4-l16-tpl-01',
      'g8-v1-c4-l16-tpl-02',
      'g8-v1-c4-l16-tpl-03',
      'g8-v1-c4-l16-tpl-04',
      'g8-v1-c4-l16-tpl-05'
    ]
  }
};
