import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C4Practice1Content: LessonContent = {
  lessonId: 'g6-v1-c4-practice-1',
  title: 'Luyện tập chung trang 95',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Bài tập luyện tập chung tổng hợp về các hình phẳng cơ bản đã học.'
  },
  objectives: [
    'Củng cố nhận diện các loại hình phẳng: tam giác đều, hình vuông, lục giác đều, hình chữ nhật, hình thoi, hình bình hành, hình thang cân.',
    'Rèn luyện kỹ năng tính chu vi và diện tích các hình thực tế.',
    'Vận dụng công thức ghép hình và chia hình để giải bài toán phức tạp.'
  ],
  prerequisites: [
    'Đã học các hình phẳng cơ bản và các công thức tính chu vi, diện tích.'
  ],
  theory: [
    {
      id: 'g6-v1-c4-practice-1-theory-1',
      title: 'Tóm tắt các hình phẳng và công thức',
      content: '– **Tam giác đều**: $P = 3a$.\n– **Hình vuông**: $P = 4a$, $S = a^2$.\n– **Hình chữ nhật**: $P = 2(a + b)$, $S = ab$.\n– **Hình thoi**: $P = 4a$, $S = \\frac{1}{2} d_1 d_2$.\n– **Hình bình hành**: $P = 2(a + b)$, $S = ah$ (với $h$ là đường cao tương ứng cạnh $a$).\n– **Hình thang cân**: $P = a + b + c + d$, $S = \\frac{(a + b)h}{2}$ (với $a, b$ là hai đáy, $h$ là chiều cao).',
      diagram: {
        id: 'g6-v1-c4-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'perimeter-area-quadrilateral',
        title: 'Tông hợp chu vi và diện tích tứ giác',
        alt: 'Sơ đồ minh họa các tứ giác và kích thước đặc trưng.',
        notToScale: true,
        data: {
          shape: 'all'
        }
      }
    }
  ],
  remember: [
    'Khi tính diện tích và chu vi, hãy đảm bảo tất cả kích thước đều cùng một đơn vị đo.',
    'Chu vi là độ dài đường bao quanh, diện tích là độ lớn của bề mặt.'
  ],
  tips: [
    'Nếu gặp hình phức tạp, hãy chia nhỏ hình đó thành các hình quen thuộc như hình chữ nhật, hình vuông, tam giác rồi cộng diện tích lại.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c4-practice-1-mistake-1',
      mistake: 'Quên không đổi đơn vị đo khi đề bài cho các kích thước khác đơn vị.',
      correction: 'Cần đổi tất cả kích thước về cùng một đơn vị (ví dụ: cùng cm hoặc cùng m) trước khi áp dụng công thức tính toán.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c4-practice-1-example-1',
      title: 'Bài toán ghép hình thực tế',
      difficulty: 'understanding',
      problem: 'Một mảnh vườn gồm một hình chữ nhật có chiều dài $10\\text{ m}$, chiều rộng $6\\text{ m}$ ghép với một hình thang cân có hai đáy lần lượt là $6\\text{ m}$ và $8\\text{ m}$, chiều cao $4\\text{ m}$. Tính diện tích mảnh vườn.',
      steps: [
        'Bước 1: Tính diện tích phần hình chữ nhật: $S_1 = 10 \\times 6 = 60\\text{ m}^2$.',
        'Bước 2: Tính diện tích phần hình thang cân: $S_2 = \\frac{(6 + 8) \\times 4}{2} = 28\\text{ m}^2$.',
        'Bước 3: Tổng diện tích mảnh vườn là: $S = S_1 + S_2 = 60 + 28 = 88\\text{ m}^2$.'
      ],
      answer: '88 m²'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c4-practice-1-sg-01',
      title: 'Tính toán chu vi và diện tích tổng hợp',
      description: 'Luyện tập các bài toán tính chu vi, diện tích và ghép hình đơn giản.',
      difficulty: 'understanding',
      templateIds: ['g6-c4-practice-1-tpl-01', 'g6-c4-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g6-c4-practice-1-tpl-01', 'g6-c4-practice-1-tpl-02', 'g6-c4-practice-1-tpl-03', 'g6-c4-practice-1-tpl-04', 'g6-c4-practice-1-tpl-05']
  }
};
