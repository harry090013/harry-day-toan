import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C10ReviewContent: LessonContent = {
  lessonId: 'g7-v2-c10-review',
  title: 'Bài tập cuối chương 10',
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
    notes: 'Tổng hợp ôn tập cuối chương 10 về hình khối lăng trụ đứng.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ lý thuyết và công thức tính diện tích xung quanh, thể tích hình lăng trụ đứng tam giác và tứ giác.',
    'Giải các bài toán thực tế tổng hợp về thể tích thùng chứa, hình hộp, bao bì hình lăng trụ.'
  ],
  prerequisites: [
    'Đã học toàn bộ các bài trong chương 10.'
  ],
  theory: [
    {
      id: 'g7-v2-c10-review-theory-1',
      title: 'Hệ thống hóa lý thuyết chương 10',
      content: 'Chương này ôn tập lại:\n1. **Nhận dạng lăng trụ đứng**: Mặt bên luôn là hình chữ nhật. Các cạnh bên song song và bằng nhau.\n2. **Diện tích xung quanh**: $S_{xq} = C_{\\text{đáy}} \\cdot h$.\n3. **Thể tích**: $V = S_{\\text{đáy}} \\cdot h$.\n4. **Ứng dụng thực tế**: Thể tích hộp giấy, lăng kính, lịch để bàn tam giác, lều trại, v.v.',
      diagram: {
        id: 'g7-v2-c10-review-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c10-prism-shapes',
        title: 'Hình lăng trụ đứng tứ giác',
        alt: 'Hình lăng trụ đứng tứ giác có hai đáy đối song song.',
        notToScale: true,
        data: {
          type: 'quadrilateral-prism'
        }
      }
    }
  ],
  remember: [
    'Nhớ đổi tất cả số đo kích thước về cùng một đơn vị trước khi nhân hoặc chia.'
  ],
  tips: [
    'Nếu đề bài cho hộp chữ nhật hoặc lập phương: Chúng thực chất là hình lăng trụ đứng tứ giác đặc biệt.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c10-review-mistake-1',
      mistake: 'Quên nhân với 1/2 khi tính diện tích đáy là tam giác thường có chiều cao và đáy tương ứng.',
      correction: 'Diện tích tam giác luôn là $S = \\frac{1}{2} a \\cdot h$. Không được lấy $a \\cdot h$.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c10-review-example-1',
      title: 'Tính diện tích giấy làm lịch để bàn',
      difficulty: 'understanding',
      problem: 'Một cuốn lịch để bàn có dạng hình lăng trụ đứng tam giác cân. Các cạnh đáy tam giác dài $15\\text{ cm}, 15\\text{ cm}, 10\\text{ cm}$. Chiều cao của cuốn lịch là $20\\text{ cm}$. Tính diện tích giấy cần dùng để làm các mặt bên của cuốn lịch.',
      steps: [
        'Bước 1: Diện tích giấy làm các mặt bên chính là diện tích xung quanh của hình lăng trụ đứng.',
        'Bước 2: Tính chu vi đáy: $C = 15 + 15 + 10 = 40\\text{ cm}$.',
        'Bước 3: Diện tích xung quanh: $S_{xq} = C \\times h = 40 \\times 20 = 800\\text{ cm}^2$.'
      ],
      answer: '800 cm²'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c10-review-sg-01',
      title: 'Bài tập ôn tập cuối chương 10',
      description: 'Luyện tập tổng hợp giải toán hình khối lăng trụ đứng tam giác và tứ giác.',
      difficulty: 'understanding',
      templateIds: ['g7-c10-review-tpl-01', 'g7-c10-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c10-review-tpl-01', 'g7-c10-review-tpl-02', 'g7-c10-review-tpl-03', 'g7-c10-review-tpl-04', 'g7-c10-review-tpl-05']
  }
};
