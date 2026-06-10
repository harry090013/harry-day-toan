import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C10ReviewContent: LessonContent = {
  lessonId: 'g8-v2-c10-review',
  title: 'Bài tập cuối chương 10',
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
    notes: 'Ôn tập tổng hợp chương 10: Nhận biết hình khối, tính thể tích lăng trụ và hình chóp đều.'
  },
  objectives: [
    'Nhận biết các hình khối trong thực tiễn.',
    'Tính thể tích và diện tích toàn phần của các hình khối đã học.',
    'Giải bài toán tổng hợp kết hợp nhiều hình khối.'
  ],
  prerequisites: [
    'Công thức thể tích lăng trụ đứng và hình chóp đều.',
    'Diện tích toàn phần hình hộp chữ nhật.'
  ],
  theory: [
    {
      id: 'g8-v2-c10-review-theory-1',
      title: 'Tổng hợp chương 10 – Hình khối',
      content: '**Các hình khối đã học**:\n\n| Hình khối | Thể tích | Diện tích toàn phần |\n|---|---|---|\n| Hình hộp chữ nhật ($a,b,c$) | $V = abc$ | $S = 2(ab+bc+ca)$ |\n| Hình lăng trụ đứng | $V = S_{đáy} \\cdot h$ | $S_{đáy} \\cdot 2 + S_{xq}$ |\n| Hình chóp đều | $V = \\frac{1}{3} S_{đáy} \\cdot h$ | $S_{đáy} + S_{xq}$ |\n\n**Lưu ý**: Thể tích hình chóp bằng $\\frac{1}{3}$ thể tích lăng trụ cùng đáy, cùng chiều cao.',
      diagram: {
        id: 'g8-v2-c10-review-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Tổng hợp hình khối',
        alt: 'Bảng tổng hợp các hình khối và công thức tính thể tích.',
        notToScale: true,
        data: {}
      }
    }
  ],
  remember: [
    'Hình chóp = $\\frac{1}{3}$ lăng trụ cùng đáy cùng chiều cao.',
    'Diện tích toàn phần = $2 \\times$ diện tích đáy + diện tích xung quanh (lăng trụ).'
  ],
  tips: [
    'Khi gặp bài toán hình khối tổng hợp, hãy phân tách thành các phần đơn giản rồi tính từng phần.',
    'Chú ý đơn vị: thể tích tính theo cm³ hoặc m³, diện tích theo cm² hoặc m².'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c10-review-mistake-1',
      mistake: 'Nhầm diện tích toàn phần và thể tích của hình hộp chữ nhật.',
      correction: 'Thể tích: $V = abc$; Diện tích toàn phần: $S = 2(ab + bc + ca)$. Hai công thức hoàn toàn khác nhau.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c10-review-example-1',
      title: 'Tính thể tích hình chóp và lăng trụ',
      difficulty: 'understanding',
      problem: 'Hình lăng trụ và hình chóp cùng có đáy vuông cạnh $3$ cm, chiều cao $4$ cm. Tính thể tích mỗi hình.',
      steps: [
        'Diện tích đáy: $S = 3^2 = 9$ cm².',
        'Thể tích lăng trụ: $V_{lt} = 9 \\times 4 = 36$ cm³.',
        'Thể tích hình chóp: $V_{chóp} = \\frac{1}{3} \\times 9 \\times 4 = 12$ cm³.'
      ],
      answer: 'V_lt = 36 cm³, V_chóp = 12 cm³'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c10-review-sg-01',
      title: 'Ôn tập tổng hợp hình khối',
      description: 'Các bài toán tổng hợp về nhận biết và tính toán với hình khối.',
      difficulty: 'understanding',
      templateIds: ['g8-c10-review-tpl-01', 'g8-c10-review-tpl-02', 'g8-c10-review-tpl-03', 'g8-c10-review-tpl-04', 'g8-c10-review-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c10-review-tpl-01', 'g8-c10-review-tpl-02', 'g8-c10-review-tpl-03', 'g8-c10-review-tpl-04', 'g8-c10-review-tpl-05']
  }
};
