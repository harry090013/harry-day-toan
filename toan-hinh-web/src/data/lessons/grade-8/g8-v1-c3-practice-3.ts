import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3Practice3Content: LessonContent = {
  lessonId: 'g8-v1-c3-practice-3',
  title: 'Luyện tập chung trang 73',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập chung về hình thoi và hình vuông.'
  },
  objectives: [
    'Vận dụng các tính chất và dấu hiệu nhận biết để giải quyết các bài toán liên quan đến hình thoi, hình vuông.'
  ],
  prerequisites: [
    'Đã học hình thoi và hình vuông.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-practice-3-theory-1',
      title: 'Hình thoi và hình vuông',
      content: '– **Hình thoi**: Có 4 cạnh bằng nhau, hai đường chéo vuông góc với nhau và là các đường phân giác của các góc.\n– **Hình vuông**: Có 4 cạnh bằng nhau, 4 góc vuông, hai đường chéo bằng nhau, vuông góc với nhau và cắt nhau tại trung điểm của mỗi đường.',
      diagram: {
        id: 'g8-v1-c3-practice-3-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình thoi',
        alt: 'Hình thoi ABCD có bốn cạnh bằng nhau.',
        notToScale: true,
        data: {
          type: 'rhombus'
        }
      }
    }
  ],
  remember: [
    'Hình vuông vừa là hình thoi (có các cạnh bằng nhau), vừa là hình chữ nhật (có các góc vuông).'
  ],
  tips: [
    'Muốn chứng minh một tứ giác là hình vuông, hãy chứng minh nó là hình chữ nhật có hai cạnh kề bằng nhau, hoặc là hình thoi có 1 góc vuông.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-practice-3-mistake-1',
      mistake: 'Cho rằng hình thoi có hai đường chéo luôn luôn bằng nhau.',
      correction: 'Đường chéo hình thoi chỉ bằng nhau khi hình thoi đó là hình vuông.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-practice-3-example-1',
      title: 'Tính góc trong hình thoi',
      difficulty: 'understanding',
      problem: 'Cho hình thoi $ABCD$ có góc $\\widehat{A} = 60^\\circ$. Tính số đo góc $\\widehat{B}$.',
      steps: [
        'Bước 1: Hình thoi có tính chất của hình bình hành, nên hai góc kề một cạnh có tổng số đo bằng $180^\\circ$.',
        'Bước 2: Ta có: $\\widehat{A} + \\widehat{B} = 180^\\circ$.',
        'Bước 3: Thay số: $60^\\circ + \\widehat{B} = 180^\\circ \\Rightarrow \\widehat{B} = 120^\\circ$.'
      ],
      answer: '120°'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-practice-3-sg-01',
      title: 'Hình thoi và hình vuông',
      description: 'Luyện tập chứng minh và tính góc, cạnh hình thoi, hình vuông.',
      difficulty: 'understanding',
      templateIds: ['g8-c3-practice-3-tpl-01', 'g8-c3-practice-3-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c3-practice-3-tpl-01', 'g8-c3-practice-3-tpl-02', 'g8-c3-practice-3-tpl-03', 'g8-c3-practice-3-tpl-04', 'g8-c3-practice-3-tpl-05']
  }
};
