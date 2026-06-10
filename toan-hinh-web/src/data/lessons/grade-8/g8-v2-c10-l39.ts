import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C10L39Content: LessonContent = {
  lessonId: 'g8-v2-c10-l39',
  title: 'Bài 39. Hình chóp tứ giác đều',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-khoi-do-luong',
  chapterId: 'g8-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    lessonNo: 39,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa, diện tích xung quanh và thể tích hình chóp tứ giác đều.'
  },
  objectives: [
    'Mô tả được hình chóp tứ giác đều (đỉnh, cạnh bên, mặt bên, mặt đáy square, đường cao, trung đoạn).',
    'Tính được diện tích xung quanh và diện tích toàn phần của hình chóp tứ giác đều.',
    'Tính được thể tích của hình chóp tứ giác đều.',
    'Giải quyết được một số vấn đề thực tiễn liên quan đến hình chóp tứ giác đều (ví dụ: Kim tự tháp).'
  ],
  prerequisites: [
    'Hình vuông, diện tích hình vuông, công thức tính diện tích xung quanh và thể tích hình chóp tam giác đều.'
  ],
  theory: [
    {
      id: 'g8-v2-c10-l39-theory-1',
      title: '1. Khái niệm hình chóp tứ giác đều',
      content: 'Hình chóp tứ giác đều là hình chóp có:\n- Mặt đáy là một hình vuông.\n- Các mặt bên là các tam giác cân bằng nhau có chung đỉnh (đỉnh của hình chóp).\n- Đường cao xuất phát từ đỉnh tới giao điểm hai đường chéo của đáy.\n- Trung đoạn ($d$) là đường cao vẽ từ đỉnh của mỗi mặt bên.',
      diagram: {
        id: 'g8-v2-c10-l39-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c10-pyramids',
        title: 'Hình chóp tứ giác đều S.ABCD',
        alt: 'Hình chóp tứ giác đều S.ABCD có đỉnh S, đáy hình vuông ABCD.',
        notToScale: true,
        data: {
          type: 'quad-pyramid',
          a: 'a',
          h: 'h',
          d: 'd'
        }
      }
    },
    {
      id: 'g8-v2-c10-l39-theory-2',
      title: '2. Diện tích xung quanh và Thể tích',
      content: '**Diện tích xung quanh ($S_{xq}$):**\nBằng tích của nửa chu vi đáy ($p$) và trung đoạn ($d$):\n$$S_{xq} = p \\cdot d$$\n*(Lưu ý: Đáy là hình vuông cạnh a nên nửa chu vi đáy $p = \\frac{4a}{2} = 2a$)*.\n\n**Thể tích ($V$):**\nBằng một phần ba tích của diện tích đáy ($S_{đáy} = a^2$) và chiều cao ($h$):\n$$V = \\frac{1}{3} S_{đáy} \\cdot h = \\frac{1}{3} a^2 \\cdot h$$',
      formulas: [
        'S_{xq} = p \\cdot d = 2a \\cdot d',
        'V = \\frac{1}{3} a^2 \\cdot h',
        'S_{tp} = S_{xq} + a^2'
      ]
    }
  ],
  remember: [
    'Kim tự tháp Ai Cập nổi tiếng là một ví dụ thực tế điển hình của hình chóp tứ giác đều.',
    'Để tính diện tích toàn phần ($S_{tp}$), ta cộng diện tích xung quanh với diện tích đáy (là hình vuông có diện tích $a^2$).'
  ],
  tips: [
    'Khi vẽ hình chóp tứ giác đều, ta thường vẽ đáy là hình bình hành dưới góc nhìn phối cảnh 3D.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c10-l39-mistake-1',
      mistake: 'Quên chia 3 khi tính thể tích hình chóp.',
      correction: 'Thể tích hình chóp luôn bằng **một phần ba** thể tích hình lăng trụ có cùng diện tích đáy và chiều cao: $V = \\frac{1}{3} S \\cdot h$. Học sinh hay quên hệ số $\\frac{1}{3}$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c10-l39-example-1',
      title: 'Tính diện tích xung quanh và toàn phần',
      difficulty: 'basic',
      problem: 'Cho hình chóp tứ giác đều có độ dài cạnh đáy bằng $5\\text{ m}$, trung đoạn bằng $6\\text{ m}$. Tính diện tích xung quanh và diện tích toàn phần của hình chóp.',
      steps: [
        'Bước 1: Tính nửa chu vi đáy $p$ của hình vuông cạnh $5\\text{ m}$:\n- Chu vi đáy: $C = 5 \\times 4 = 20\\text{ m}$.\n- Nửa chu vi đáy: $p = \\frac{20}{2} = 10\\text{ m}$.',
        'Bước 2: Tính diện tích xung quanh: $S_{xq} = p \\cdot d = 10 \\times 6 = 60\\text{ m}^2$.',
        'Bước 3: Tính diện tích đáy: $S_{đáy} = 5^2 = 25\\text{ m}^2$.',
        'Bước 4: Tính diện tích toàn phần: $S_{tp} = S_{xq} + S_{đáy} = 60 + 25 = 85\\text{ m}^2$.'
      ],
      answer: 'S_xq = 60 m², S_tp = 85 m²'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c10-l39-sg-01',
      title: 'Nhận diện các đặc điểm của hình chóp tứ giác đều',
      description: 'Chỉ ra đỉnh, cạnh đáy, mặt bên là tam giác cân, trung đoạn, chiều cao của hình chóp tứ giác đều.',
      difficulty: 'basic',
      templateIds: ['g8-v2-c10-l39-tpl-01', 'g8-v2-c10-l39-tpl-02']
    },
    {
      id: 'g8-v2-c10-l39-sg-02',
      title: 'Tính diện tích và thể tích hình chóp tứ giác đều',
      description: 'Vận dụng công thức diện tích xung quanh, toàn phần và thể tích để giải quyết bài toán và ứng dụng thực tế.',
      difficulty: 'understanding',
      templateIds: ['g8-v2-c10-l39-tpl-03', 'g8-v2-c10-l39-tpl-04', 'g8-v2-c10-l39-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v2-c10-l39-tpl-01',
      'g8-v2-c10-l39-tpl-02',
      'g8-v2-c10-l39-tpl-03',
      'g8-v2-c10-l39-tpl-04',
      'g8-v2-c10-l39-tpl-05'
    ]
  }
};
