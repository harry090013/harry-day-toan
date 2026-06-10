import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C4ReviewContent: LessonContent = {
  lessonId: 'g8-v1-c4-review',
  title: 'Bài tập cuối chương 4',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Ôn tập tổng hợp chương 4: Định lí Thalès, đường trung bình, tia phân giác.'
  },
  objectives: [
    'Tổng hợp và vận dụng tất cả kiến thức chương 4 vào giải toán.',
    'Áp dụng định lí đường trung bình của tam giác.',
    'Kết hợp nhiều tính chất trong cùng một bài toán.'
  ],
  prerequisites: [
    'Định lí Thalès và hệ quả.',
    'Tia phân giác trong tam giác.',
    'Đường trung bình của tam giác.'
  ],
  theory: [
    {
      id: 'g8-v1-c4-review-theory-1',
      title: 'Tổng hợp chương 4',
      content: '**1. Định lí Thalès**: $MN \\parallel BC \\Rightarrow \\frac{AM}{MB} = \\frac{AN}{NC}$.\n\n**2. Định lí Thalès đảo**: $\\frac{AM}{MB} = \\frac{AN}{NC} \\Rightarrow MN \\parallel BC$.\n\n**3. Đường trung bình**: $M, N$ là trung điểm $AB, AC$ thì $MN \\parallel BC$ và $MN = \\frac{BC}{2}$.\n\n**4. Tia phân giác**: $AD$ phân giác $\\angle A$ thì $\\frac{BD}{DC} = \\frac{AB}{AC}$.',
      diagram: {
        id: 'g8-v1-c4-review-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Tổng hợp định lí Thalès',
        alt: 'Tam giác với đường trung bình và tia phân giác.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Đường trung bình song song với cạnh đáy và bằng nửa cạnh đáy.',
    'Tia phân giác chia cạnh đối diện theo tỉ lệ bằng tỉ lệ hai cạnh kề.'
  ],
  tips: [
    'Khi bài toán cho tỉ lệ đoạn thẳng, hãy nghĩ đến định lí Thalès hoặc đường trung bình.',
    'Nếu bài cho tia phân giác, kết hợp tỉ lệ với tổng hai đoạn để lập hệ phương trình.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c4-review-mistake-1',
      mistake: 'Quên rằng đường trung bình bằng nửa cạnh đáy, không phải bằng cạnh đáy.',
      correction: '$MN = \\frac{BC}{2}$, vì $MN$ là đường trung bình nối trung điểm hai cạnh.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c4-review-example-1',
      title: 'Tính đường trung bình tam giác',
      difficulty: 'basic',
      problem: 'Tam giác $ABC$ có $BC = 10$ cm. $M, N$ lần lượt là trung điểm của $AB$ và $AC$. Tính $MN$.',
      steps: [
        '$MN$ là đường trung bình của $\\triangle ABC$ vì $M$ là trung điểm $AB$ và $N$ là trung điểm $AC$.',
        'Theo định lí đường trung bình: $MN = \\frac{BC}{2} = \\frac{10}{2} = 5$ cm.'
      ],
      answer: 'MN = 5 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c4-review-sg-01',
      title: 'Định lí Thalès và ứng dụng',
      description: 'Các bài toán về định lí Thalès, đường trung bình và tia phân giác.',
      difficulty: 'understanding',
      templateIds: ['g8-c4-review-tpl-01', 'g8-c4-review-tpl-02', 'g8-c4-review-tpl-03', 'g8-c4-review-tpl-04', 'g8-c4-review-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c4-review-tpl-01', 'g8-c4-review-tpl-02', 'g8-c4-review-tpl-03', 'g8-c4-review-tpl-04', 'g8-c4-review-tpl-05']
  }
};
