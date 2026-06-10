import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9Practice1Content: LessonContent = {
  lessonId: 'g7-v2-c9-practice-1',
  title: 'Luyện tập chung trang 71',
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
    notes: 'Luyện tập về quan hệ góc và cạnh đối diện, đường vuông góc - đường xiên, và bất đẳng thức tam giác.'
  },
  objectives: [
    'So sánh được các cạnh trong một tam giác khi biết số đo các góc và ngược lại.',
    'Nhận biết mối liên hệ giữa đường vuông góc và đường xiên.',
    'Vận dụng bất đẳng thức tam giác để nhận biết các bộ ba độ dài cạnh.'
  ],
  prerequisites: [
    'Đã học bài quan hệ giữa góc và cạnh đối diện, đường xiên và bất đẳng thức tam giác.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-practice-1-theory-1',
      title: 'Quan hệ góc - cạnh đối diện và đường vuông góc - đường xiên',
      content: '– **Góc - Cạnh đối diện**: Trong một tam giác, góc đối diện với cạnh lớn hơn là góc lớn hơn; cạnh đối diện với góc lớn hơn là cạnh lớn hơn.\n– **Đường vuông góc và đường xiên**: Trong các đường xiên và đường vuông góc kẻ từ một điểm nằm ngoài một đường thẳng đến đường thẳng đó, đường vuông góc là đường ngắn nhất.\n– **Bất đẳng thức tam giác**: Trong một tam giác, tổng độ dài hai cạnh bất kỳ luôn lớn hơn độ dài cạnh còn lại ($ab + bc > ac$).',
      diagram: {
        id: 'g7-v2-c9-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c9-perpendicular-oblique',
        title: 'Đường vuông góc AH và đường xiên AM',
        alt: 'Điểm A nằm ngoài đường thẳng d, kẻ đường vuông góc AH và các đường xiên AM.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Cạnh đối diện với góc vuông luôn là cạnh lớn nhất trong tam giác vuông.',
    'Hiệu độ dài hai cạnh bất kỳ của một tam giác luôn nhỏ hơn độ dài cạnh còn lại.'
  ],
  tips: [
    'Khi so sánh các cạnh của tam giác, trước tiên hãy tính số đo của góc thứ ba bằng công thức tổng ba góc.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-practice-1-mistake-1',
      mistake: 'So sánh độ dài cạnh của hai tam giác khác nhau chỉ dựa vào số đo góc đối diện.',
      correction: 'Định lí quan hệ góc-cạnh đối diện chỉ áp dụng trong phạm vi của một tam giác đơn lẻ.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-practice-1-example-1',
      title: 'So sánh các cạnh của tam giác',
      difficulty: 'understanding',
      problem: 'Cho $\\triangle ABC$ có $\\widehat{A} = 80^\\circ$ và $\\widehat{B} = 60^\\circ$. Hãy so sánh ba cạnh $AB, BC, CA$.',
      steps: [
        'Bước 1: Tính số đo góc thứ ba: $\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - 140^\\circ = 40^\\circ$.',
        'Bước 2: So sánh các góc: $\\widehat{C} < \\widehat{B} < \\widehat{A}$ (vì $40^\\circ < 60^\\circ < 80^\\circ$).',
        'Bước 3: Suy ra quan hệ các cạnh đối diện tương ứng: $AB < AC < BC$.'
      ],
      answer: 'AB < AC < BC'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-practice-1-sg-01',
      title: 'So sánh góc, cạnh và bất đẳng thức tam giác',
      description: 'Luyện tập các định lí cơ bản về góc, cạnh đối diện và bất đẳng thức tam giác.',
      difficulty: 'understanding',
      templateIds: ['g7-c9-practice-1-tpl-01', 'g7-c9-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c9-practice-1-tpl-01', 'g7-c9-practice-1-tpl-02', 'g7-c9-practice-1-tpl-03', 'g7-c9-practice-1-tpl-04', 'g7-c9-practice-1-tpl-05']
  }
};
