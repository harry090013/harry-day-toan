import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C10Practice1Content: LessonContent = {
  lessonId: 'g8-v2-c10-practice-1',
  title: 'Luyện tập chung trang 121',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g8-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập tính thể tích và diện tích của các hình lăng trụ đứng và hình chóp đều.'
  },
  objectives: [
    'Tính được thể tích hình lăng trụ đứng và hình hộp chữ nhật.',
    'Tính được thể tích và diện tích toàn phần của hình chóp đều.',
    'Vận dụng vào bài toán thực tiễn về đo lường hình khối.'
  ],
  prerequisites: [
    'Công thức tính thể tích lăng trụ và hình chóp.',
    'Công thức diện tích toàn phần hình hộp chữ nhật.'
  ],
  theory: [
    {
      id: 'g8-v2-c10-practice-1-theory-1',
      title: 'Thể tích và diện tích các hình khối',
      content: '**Hình lăng trụ đứng**: $V = S_{đáy} \\times h$.\n\n**Hình hộp chữ nhật** ($a \\times b \\times c$):\n- Thể tích: $V = abc$.\n- Diện tích toàn phần: $S_{tp} = 2(ab + bc + ca)$.\n\n**Hình chóp đều**:\n- Thể tích: $V = \\frac{1}{3} S_{đáy} \\times h$.',
      diagram: {
        id: 'g8-v2-c10-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình lăng trụ và hình chóp',
        alt: 'Hình lăng trụ đứng và hình chóp đều với các kích thước.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Thể tích lăng trụ: $V = S_{đáy} \\times h$.',
    'Thể tích hình chóp: $V = \\frac{1}{3} S_{đáy} \\times h$ (bằng $\\frac{1}{3}$ thể tích lăng trụ tương ứng).'
  ],
  tips: [
    'Luôn tính diện tích đáy trước, sau đó mới nhân với chiều cao.',
    'Đối với hình chóp, nhớ chia cho 3 trong công thức thể tích.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c10-practice-1-mistake-1',
      mistake: 'Quên chia cho 3 khi tính thể tích hình chóp.',
      correction: 'Thể tích hình chóp: $V = \\frac{1}{3} S_{đáy} \\times h$, không phải $V = S_{đáy} \\times h$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c10-practice-1-example-1',
      title: 'Tính thể tích hình hộp chữ nhật',
      difficulty: 'basic',
      problem: 'Hình hộp chữ nhật có kích thước $4 \\times 5 \\times 6$ cm. Tính thể tích.',
      steps: [
        'Áp dụng công thức: $V = a \\times b \\times c$.',
        '$V = 4 \\times 5 \\times 6 = 120$ cm³.'
      ],
      answer: 'V = 120 cm³'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c10-practice-1-sg-01',
      title: 'Thể tích và diện tích hình khối',
      description: 'Luyện tập tính thể tích lăng trụ, hình hộp và hình chóp.',
      difficulty: 'understanding',
      templateIds: ['g8-c10-practice-1-tpl-01', 'g8-c10-practice-1-tpl-02', 'g8-c10-practice-1-tpl-03', 'g8-c10-practice-1-tpl-04', 'g8-c10-practice-1-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c10-practice-1-tpl-01', 'g8-c10-practice-1-tpl-02', 'g8-c10-practice-1-tpl-03', 'g8-c10-practice-1-tpl-04', 'g8-c10-practice-1-tpl-05']
  }
};
