import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C10Practice1Content: LessonContent = {
  lessonId: 'g7-v2-c10-practice-1',
  title: 'Luyện tập chung trang 93',
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
    notes: 'Luyện tập về nhận diện các yếu tố đỉnh, cạnh, mặt đáy, mặt bên của hình lăng trụ đứng tam giác và lăng trụ đứng tứ giác.'
  },
  objectives: [
    'Chỉ ra và mô tả được các đỉnh, cạnh bên, mặt bên, mặt đáy của hình lăng trụ đứng tam giác và lăng trụ đứng tứ giác.',
    'Nhận biết được tính song song và vuông góc giữa các cạnh bên và mặt đáy.'
  ],
  prerequisites: [
    'Đã học hình lăng trụ đứng tam giác và lăng trụ đứng tứ giác.'
  ],
  theory: [
    {
      id: 'g7-v2-c10-practice-1-theory-1',
      title: 'Các yếu tố của hình lăng trụ đứng',
      content: '– **Hình lăng trụ đứng tam giác**: Có 2 đáy là tam giác, các mặt bên là hình chữ nhật. Có 6 đỉnh, 9 cạnh (3 cạnh bên bằng nhau và song song, vuông góc với đáy).\n– **Hình lăng trụ đứng tứ giác**: Có 2 đáy là tứ giác, các mặt bên là hình chữ nhật. Có 8 đỉnh, 12 cạnh (4 cạnh bên bằng nhau và song song, vuông góc với đáy).',
      diagram: {
        id: 'g7-v2-c10-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c10-prism-shapes',
        title: 'Hình lăng trụ đứng tam giác',
        alt: 'Hình lăng trụ đứng tam giác có các mặt bên là hình chữ nhật.',
        notToScale: true,
        data: {
          type: 'triangular-prism'
        }
      }
    }
  ],
  remember: [
    'Chiều cao của hình lăng trụ đứng chính là độ dài của cạnh bên.',
    'Các mặt bên của hình lăng trụ đứng luôn là các hình chữ nhật và song song với nhau.'
  ],
  tips: [
    'Để phân biệt lăng trụ đứng tam giác và lăng trụ đứng tứ giác, hãy nhìn vào hình dạng của hai mặt đáy.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c10-practice-1-mistake-1',
      mistake: 'Nhầm lẫn số lượng mặt bên và số lượng mặt đáy.',
      correction: 'Lăng trụ đứng luôn có đúng 2 mặt đáy. Số lượng mặt bên bằng số cạnh của đa giác đáy (3 mặt bên đối với tam giác, 4 mặt bên đối với tứ giác).'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c10-practice-1-example-1',
      title: 'Đếm số đỉnh và cạnh',
      difficulty: 'basic',
      problem: 'Cho một hình lăng trụ đứng tam giác. Hỏi hình đó có bao nhiêu đỉnh, bao nhiêu mặt bên và bao nhiêu cạnh?',
      steps: [
        'Bước 1: Hình lăng trụ đứng tam giác có hai đáy là tam giác, nên số đỉnh là: $3 \\times 2 = 6$ đỉnh.',
        'Bước 2: Đáy có 3 cạnh nên hình có 3 mặt bên.',
        'Bước 3: Số cạnh gồm 3 cạnh đáy trên, 3 cạnh đáy dưới và 3 cạnh bên. Tổng số cạnh: $3 + 3 + 3 = 9$ cạnh.'
      ],
      answer: '6 đỉnh, 3 mặt bên, 9 cạnh'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c10-practice-1-sg-01',
      title: 'Nhận diện hình khối thực tiễn',
      description: 'Nhận biết các đỉnh, cạnh, mặt của hình lăng trụ đứng.',
      difficulty: 'basic',
      templateIds: ['g7-c10-practice-1-tpl-01', 'g7-c10-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c10-practice-1-tpl-01', 'g7-c10-practice-1-tpl-02', 'g7-c10-practice-1-tpl-03', 'g7-c10-practice-1-tpl-04', 'g7-c10-practice-1-tpl-05']
  }
};
