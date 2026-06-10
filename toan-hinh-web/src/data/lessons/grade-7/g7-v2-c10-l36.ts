import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C10L36Content: LessonContent = {
  lessonId: 'g7-v2-c10-l36',
  title: 'Bài 36. Hình hộp chữ nhật và hình lập phương',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-khoi-do-luong',
  chapterId: 'g7-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    lessonNo: 36,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm, diện tích và thể tích của hình hộp chữ nhật và hình lập phương.'
  },
  objectives: [
    'Mô tả được hình hộp chữ nhật và hình lập phương (đỉnh, cạnh, mặt, đường chéo).',
    'Tính được diện tích xung quanh và thể tích của hình hộp chữ nhật.',
    'Tính được diện tích xung quanh và thể tích của hình lập phương.',
    'Giải quyết được một số vấn đề thực tiễn gắn với thể tích và diện tích xung quanh của hai hình này.'
  ],
  prerequisites: [
    'Khái niệm hình chữ nhật, hình vuông, diện tích và chu vi hình phẳng.'
  ],
  theory: [
    {
      id: 'g7-v2-c10-l36-theory-1',
      title: '1. Hình hộp chữ nhật',
      content: 'Hình hộp chữ nhật có 6 mặt là những hình chữ nhật (gồm 2 mặt đáy và 4 mặt bên), 8 đỉnh, 12 cạnh và 4 đường chéo.\n\n**Các công thức tính (với ba kích thước là chiều dài $a$, chiều rộng $b$, chiều cao $h$):**\n- Diện tích xung quanh: $$S_{xq} = 2(a + b)h$$\n- Diện tích toàn phần: $$S_{tp} = S_{xq} + 2S_đ = 2(a + b)h + 2ab$$\n- Thể tích: $$V = a \\cdot b \\cdot h$$',
      formulas: [
        'S_{xq} = 2(a + b)h',
        'V = a \\cdot b \\cdot h'
      ],
      diagram: {
        id: 'g7-v2-c10-l36-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c10-prism-shapes',
        title: 'Hình hộp chữ nhật',
        alt: 'Hình hộp chữ nhật với 3 kích thước chiều dài a, chiều rộng b, chiều cao h.',
        notToScale: true,
        data: {
          type: 'box',
          a: 'a',
          b: 'b',
          c: 'h'
        }
      }
    },
    {
      id: 'g7-v2-c10-l36-theory-2',
      title: '2. Hình lập phương',
      content: 'Hình lập phương là hình hộp chữ nhật có 6 mặt đều là các hình vuông bằng nhau.\n\n**Các công thức tính (với độ dài cạnh là $a$):**\n- Diện tích xung quanh: $$S_{xq} = 4a^2$$\n- Diện tích toàn phần: $$S_{tp} = 6a^2$$\n- Thể tích: $$V = a^3$$',
      formulas: [
        'S_{xq} = 4a^2',
        'V = a^3'
      ],
      diagram: {
        id: 'g7-v2-c10-l36-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-c10-prism-shapes',
        title: 'Hình lập phương',
        alt: 'Hình lập phương có 6 mặt là hình vuông cạnh a.',
        notToScale: true,
        data: {
          type: 'cube',
          a: 'a',
          b: 'a',
          c: 'a'
        }
      }
    }
  ],
  remember: [
    'Hình lập phương là trường hợp đặc biệt của hình hộp chữ nhật khi chiều dài, chiều rộng và chiều cao bằng nhau.',
    'Diện tích xung quanh chỉ tính diện tích của 4 mặt bên, không tính diện tích của 2 mặt đáy.',
    'Đơn vị đo thể tích là các đơn vị mũ 3 như $\\text{cm}^3$, $\\text{dm}^3$, $\\text{m}^3$. Lưu ý đổi đơn vị về cùng một hệ trước khi thực hiện tính toán.'
  ],
  tips: [
    'Khi tính lượng sơn cần quét tường của một căn phòng hình hộp chữ nhật, diện tích cần quét thường bằng diện tích toàn phần trừ đi diện tích các cửa (cửa ra vào, cửa sổ) và diện tích sàn nhà.',
    'Để tính chiều cao khi biết thể tích và diện tích đáy: $h = \\frac{V}{S_đ}$ (với $S_đ = a \\cdot b$).'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c10-l36-mistake-1',
      mistake: 'Không đưa các kích thước về cùng một đơn vị đo trước khi tính.',
      correction: 'Ví dụ, chiều dài bằng $1.2\\text{ m}$, chiều rộng bằng $80\\text{ cm}$ thì phải đổi $1.2\\text{ m} = 120\\text{ cm}$ hoặc $80\\text{ cm} = 0.8\\text{ m}$ rồi mới nhân chúng với nhau.'
    },
    {
      id: 'g7-v2-c10-l36-mistake-2',
      mistake: 'Nhầm lẫn giữa công thức diện tích xung quanh ($4$ mặt bên) và diện tích toàn phần ($6$ mặt).',
      correction: 'Đọc kỹ yêu cầu đề bài xem họ hỏi sơn hộp không có nắp (chỉ tính 5 mặt) hay hộp có nắp (tính đủ 6 mặt).'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c10-l36-example-1',
      title: 'Tính diện tích và thể tích hình hộp chữ nhật',
      difficulty: 'basic',
      problem: 'Một bể cá hình hộp chữ nhật có chiều dài $60\\text{ cm}$, chiều rộng $40\\text{ cm}$ và chiều cao $50\\text{ cm}$. Tính diện tích xung quanh và thể tích bể cá đó.',
      steps: [
        'Bước 1: Xác định các kích thước cùng đơn vị đo: $a = 60\\text{ cm}$, $b = 40\\text{ cm}$, $h = 50\\text{ cm}$.',
        'Bước 2: Tính diện tích xung quanh: $S_{xq} = 2(a + b)h = 2 \\times (60 + 40) \\times 50 = 2 \\times 100 \\times 50 = 10,000\\text{ cm}^2$.',
        'Bước 3: Tính thể tích bể cá: $V = a \\cdot b \\cdot h = 60 \\times 40 \\times 50 = 120,000\\text{ cm}^3$.',
        'Bước 4: Kết luận: Diện tích xung quanh bể cá là $10,000\\text{ cm}^2$, thể tích bể cá là $120,000\\text{ cm}^3$.'
      ],
      answer: 'S_xq = 10,000 cm^2, V = 120,000 cm^3'
    },
    {
      id: 'g7-v2-c10-l36-example-2',
      title: 'Tính thể tích khối gỗ lập phương',
      difficulty: 'understanding',
      problem: 'Một khối gỗ hình lập phương có diện tích toàn phần là $150\\text{ cm}^2$. Tính thể tích của khối gỗ đó.',
      steps: [
        'Bước 1: Công thức diện tích toàn phần của hình lập phương cạnh $a$ là $S_{tp} = 6a^2$.',
        'Bước 2: Tìm diện tích một mặt: $a^2 = S_{tp} / 6 = 150 / 6 = 25\\text{ cm}^2$.',
        'Bước 3: Suy ra độ dài cạnh $a$ của khối gỗ: vì $5 \\times 5 = 25$ nên $a = 5\\text{ cm}$.',
        'Bước 4: Tính thể tích khối gỗ: $V = a^3 = 5^3 = 125\\text{ cm}^3$.',
        'Bước 5: Trả lời: Thể tích khối gỗ lập phương là $125\\text{ cm}^3$.'
      ],
      answer: '125 cm^3'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c10-l36-sg-01',
      title: 'Tính diện tích và thể tích hình hộp chữ nhật',
      description: 'Áp dụng công thức tính $S_{xq}$, $S_{tp}$, $V$ cho hình hộp chữ nhật trong toán học và thực tế.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c10-l36-tpl-01', 'g7-v2-c10-l36-tpl-02', 'g7-v2-c10-l36-tpl-05']
    },
    {
      id: 'g7-v2-c10-l36-sg-02',
      title: 'Tính diện tích và thể tích hình lập phương',
      description: 'Áp dụng công thức tính $S_{xq}$, $S_{tp}$, $V$ cho hình lập phương từ cạnh cho trước hoặc ngược lại.',
      difficulty: 'understanding',
      templateIds: ['g7-v2-c10-l36-tpl-03', 'g7-v2-c10-l36-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v2-c10-l36-tpl-01',
      'g7-v2-c10-l36-tpl-02',
      'g7-v2-c10-l36-tpl-03',
      'g7-v2-c10-l36-tpl-04',
      'g7-v2-c10-l36-tpl-05'
    ]
  }
};
