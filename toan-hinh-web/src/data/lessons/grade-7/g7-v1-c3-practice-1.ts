import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C3Practice1Content: LessonContent = {
  lessonId: 'g7-v1-c3-practice-1',
  title: 'Luyện tập chung trang 50',
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
    notes: 'Luyện tập về các góc ở vị trí đặc biệt và tia phân giác của một góc.'
  },
  objectives: [
    'Củng cố tính chất góc kề bù, góc đối đỉnh.',
    'Sử dụng tính chất tia phân giác để tính số đo góc.'
  ],
  prerequisites: [
    'Đã học bài góc ở vị trí đặc biệt và tia phân giác.'
  ],
  theory: [
    {
      id: 'g7-v1-c3-practice-1-theory-1',
      title: 'Trọng tâm góc ở vị trí đặc biệt và tia phân giác',
      content: '– **Góc kề bù**: Có tổng số đo bằng $180^\\circ$.\n– **Góc đối đỉnh**: Hai góc đối đỉnh thì bằng nhau.\n– **Tia phân giác**: Chia một góc thành hai góc bằng nhau và bằng nửa góc ban đầu.',
      diagram: {
        id: 'g7-v1-c3-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-special-angles',
        title: 'Tia phân giác của một góc',
        alt: 'Tia Oz chia góc xOy thành hai phần bằng nhau.',
        notToScale: true,
        data: {
          type: 'bisector'
        }
      }
    }
  ],
  remember: [
    'Nếu $Oz$ là tia phân giác của $\\widehat{xOy}$ thì $\\widehat{xOz} = \\widehat{zOy} = \\frac{1}{2} \\widehat{xOy}$.'
  ],
  tips: [
    'Để tính nhanh góc kề bù với góc cho trước, lấy $180^\\circ$ trừ đi số đo góc đó.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c3-practice-1-mistake-1',
      mistake: 'Nhầm lẫn hai góc đối đỉnh với hai góc kề bù.',
      correction: 'Góc đối đỉnh có các cạnh là tia đối của nhau và số đo bằng nhau. Góc kề bù có một cạnh chung và tổng số đo bằng $180^\\circ$.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c3-practice-1-example-1',
      title: 'Tính góc từ tia phân giác',
      difficulty: 'understanding',
      problem: 'Cho $\\widehat{xOy} = 120^\\circ$. Gọi $Oz$ là tia phân giác của $\\widehat{xOy}$. Tính số đo góc $\\widehat{xOz}$.',
      steps: [
        'Bước 1: Vì $Oz$ là tia phân giác của $\\widehat{xOy}$ nên ta có: $\\widehat{xOz} = \\frac{\\widehat{xOy}}{2}$.',
        'Bước 2: Thay số: $\\widehat{xOz} = \\frac{120^\\circ}{2} = 60^\\circ$.'
      ],
      answer: '60°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c3-practice-1-sg-01',
      title: 'Tính góc đặc biệt và tia phân giác',
      description: 'Luyện tập tính toán số đo góc kề bù, đối đỉnh và tia phân giác.',
      difficulty: 'understanding',
      templateIds: ['g7-c3-practice-1-tpl-01', 'g7-c3-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c3-practice-1-tpl-01', 'g7-c3-practice-1-tpl-02', 'g7-c3-practice-1-tpl-03', 'g7-c3-practice-1-tpl-04', 'g7-c3-practice-1-tpl-05']
  }
};
