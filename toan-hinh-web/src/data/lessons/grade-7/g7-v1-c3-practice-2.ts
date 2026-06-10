import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C3Practice2Content: LessonContent = {
  lessonId: 'g7-v1-c3-practice-2',
  title: 'Luyện tập chung trang 58',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập chung về hai đường thẳng song song, tính chất và tiên đề Euclid.'
  },
  objectives: [
    'Vận dụng tính chất song song để chỉ ra các góc so le trong bằng nhau, đồng vị bằng nhau.',
    'Nhận biết dấu hiệu song song để chứng minh hai đường thẳng song song.'
  ],
  prerequisites: [
    'Đã học bài hai đường thẳng song song và tính chất.'
  ],
  theory: [
    {
      id: 'g7-v1-c3-practice-2-theory-1',
      title: 'Tính chất và dấu hiệu nhận biết hai đường thẳng song song',
      content: '– **Tính chất**: Nếu một đường thẳng cắt hai đường thẳng song song thì:\n  + Các góc so le trong bằng nhau.\n  + Các góc đồng vị bằng nhau.\n– **Tiên đề Euclid**: Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.',
      diagram: {
        id: 'g7-v1-c3-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-parallel-transversal',
        title: 'Đường thẳng cắt hai đường thẳng song song',
        alt: 'Hai đường thẳng song song bị cắt bởi cát tuyến tạo ra các góc so le trong và đồng vị.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Hai đường thẳng phân biệt cùng vuông góc với đường thẳng thứ ba thì song song với nhau.'
  ],
  tips: [
    'Khi chứng minh song song, hãy tìm một cặp góc so le trong hoặc đồng vị bằng nhau.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c3-practice-2-mistake-1',
      mistake: 'Cho rằng hai góc đồng vị bất kỳ luôn bằng nhau.',
      correction: 'Chúng chỉ bằng nhau khi hai đường thẳng bị cắt là hai đường thẳng song song.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c3-practice-2-example-1',
      title: 'Tính góc dựa trên tính chất song song',
      difficulty: 'understanding',
      problem: 'Cho hai đường thẳng $a \\parallel b$. Đường thẳng $c$ cắt $a, b$ lần lượt tại $A$ và $B$. Biết góc $\\widehat{A_1}$ (góc so le trong) bằng $70^\\circ$. Tính số đo góc đồng vị tương ứng $\\widehat{B_1}$.',
      steps: [
        'Bước 1: Vì $a \\parallel b$, theo tính chất của hai đường thẳng song song, các góc đồng vị bằng nhau.',
        'Bước 2: Vậy góc đồng vị $\\widehat{B_1} = \\widehat{A_1} = 70^\\circ$.'
      ],
      answer: '70°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c3-practice-2-sg-01',
      title: 'Vận dụng tính chất song song',
      description: 'Bài toán tính toán góc dựa vào quan hệ song song.',
      difficulty: 'understanding',
      templateIds: ['g7-c3-practice-2-tpl-01', 'g7-c3-practice-2-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c3-practice-2-tpl-01', 'g7-c3-practice-2-tpl-02', 'g7-c3-practice-2-tpl-03', 'g7-c3-practice-2-tpl-04', 'g7-c3-practice-2-tpl-05']
  }
};
