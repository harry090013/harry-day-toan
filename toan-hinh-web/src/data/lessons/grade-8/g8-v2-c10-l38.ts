import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C10L38Content: LessonContent = {
  lessonId: 'g8-v2-c10-l38',
  title: 'Bài 38. Hình chóp tam giác đều',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-khoi-do-luong',
  chapterId: 'g8-v2-c10',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    lessonNo: 38,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa, diện tích xung quanh và thể tích hình chóp tam giác đều.'
  },
  objectives: [
    'Mô tả được hình chóp tam giác đều (đỉnh, cạnh bên, mặt bên, mặt đáy, đường cao, trung đoạn).',
    'Tính được diện tích xung quanh của hình chóp tam giác đều.',
    'Tính được thể tích của hình chóp tam giác đều.',
    'Giải quyết được một số vấn đề thực tiễn gắn với hình chóp tam giác đều.'
  ],
  prerequisites: [
    'Diện tích tam giác, tam giác đều, các khái niệm cơ bản về hình học không gian.'
  ],
  theory: [
    {
      id: 'g8-v2-c10-l38-theory-1',
      title: '1. Khái niệm hình chóp tam giác đều',
      content: 'Hình chóp tam giác đều là hình chóp có:\n- Mặt đáy là một tam giác đều.\n- Các mặt bên là các tam giác cân bằng nhau có chung đỉnh (đỉnh của hình chóp).\n- Đường cao xuất phát từ đỉnh tới trọng tâm đáy.\n- Trung đoạn ($d$) là đường cao vẽ từ đỉnh của mỗi mặt bên.',
      diagram: {
        id: 'g8-v2-c10-l38-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c10-pyramids',
        title: 'Hình chóp tam giác đều S.ABC',
        alt: 'Hình chóp tam giác đều S.ABC có đỉnh S, các cạnh bên SA, SB, SC và đáy tam giác đều ABC.',
        notToScale: true,
        data: {
          type: 'tri-pyramid',
          a: 'a',
          h: 'h'
        }
      }
    },
    {
      id: 'g8-v2-c10-l38-theory-2',
      title: '2. Diện tích xung quanh và Thể tích',
      content: '**Diện tích xung quanh ($S_{xq}$):**\nBằng tích của nửa chu vi đáy ($p$) và trung đoạn ($d$):\n$$S_{xq} = p \\cdot d$$\n\n**Thể tích ($V$):**\nBằng một phần ba tích của diện tích đáy ($S$) và chiều cao ($h$):\n$$V = \\frac{1}{3} S \\cdot h$$',
      formulas: [
        'S_{xq} = p \\cdot d',
        'V = \\frac{1}{3} S_{đáy} \\cdot h',
        'S_{tp} = S_{xq} + S_{đáy}'
      ]
    }
  ],
  remember: [
    'Nửa chu vi đáy $p$ của tam giác đều cạnh $a$ là $p = \\frac{3a}{2}$.',
    'Trung đoạn $d$ của hình chóp tam giác đều là chiều cao xuất phát từ đỉnh của mặt bên tam giác cân. Đừng nhầm lẫn trung đoạn với cạnh bên hoặc chiều cao hình chóp.',
    'Đơn vị thể tích là đơn vị khối (ví dụ: $cm^3, m^3$), đơn vị diện tích là đơn vị vuông (ví dụ: $cm^2, m^2$).'
  ],
  tips: [
    'Nếu đề bài cho chiều cao mặt bên thay vì trung đoạn, hãy nhớ rằng trung đoạn chính là chiều cao xuất phát từ đỉnh của mặt bên tam giác cân đó.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c10-l38-mistake-1',
      mistake: 'Nhầm lẫn giữa trung đoạn và cạnh bên khi tính diện tích xung quanh.',
      correction: 'Trung đoạn $d$ vuông góc với cạnh đáy của mặt bên. Còn cạnh bên nối đỉnh chóp với đỉnh của đáy. Khi áp dụng công thức $S_{xq} = p \\cdot d$, luôn sử dụng trung đoạn $d$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c10-l38-example-1',
      title: 'Tính diện tích xung quanh hình chóp tam giác đều',
      difficulty: 'basic',
      problem: 'Cho hình chóp tam giác đều $S.ABC$ có độ dài cạnh đáy bằng $6\\text{ cm}$, trung đoạn bằng $8\\text{ cm}$. Tính diện tích xung quanh của hình chóp.',
      steps: [
        'Bước 1: Tính nửa chu vi đáy $p$:\n- Chu vi đáy là: $C = 6 \\times 3 = 18\\text{ cm}$.\n- Nửa chu vi đáy là: $p = \\frac{18}{2} = 9\\text{ cm}$.',
        'Bước 2: Sử dụng công thức diện tích xung quanh: $S_{xq} = p \\cdot d$.',
        'Bước 3: Thay số: $S_{xq} = 9 \\times 8 = 72\\text{ cm}^2$.',
        'Bước 4: Trả lời: Diện tích xung quanh của hình chóp là $72\\text{ cm}^2$.'
      ],
      answer: '72 cm²'
    },
    {
      id: 'g8-v2-c10-l38-example-2',
      title: 'Tính thể tích hình chóp tam giác đều',
      difficulty: 'basic',
      problem: 'Tính thể tích của hình chóp tam giác đều có diện tích đáy bằng $20\\text{ cm}^2$ và chiều cao bằng $9\\text{ cm}$.',
      steps: [
        'Bước 1: Công thức thể tích hình chóp là: $V = \\frac{1}{3} S_{đáy} \\cdot h$.',
        'Bước 2: Thay số liệu đã cho: $S_{đáy} = 20\\text{ cm}^2, h = 9\\text{ cm}$.',
        'Bước 3: Tính toán: $V = \\frac{1}{3} \\times 20 \\times 9 = 60\\text{ cm}^3$.',
        'Bước 4: Trả lời: Thể tích hình chóp tam giác đều là $60\\text{ cm}^3$.'
      ],
      answer: '60 cm³'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c10-l38-sg-01',
      title: 'Nhận biết các yếu tố trong hình chóp tam giác đều',
      description: 'Chỉ ra đỉnh, mặt bên, trung đoạn, chiều cao từ hình vẽ hoặc mô tả.',
      difficulty: 'basic',
      templateIds: ['g8-v2-c10-l38-tpl-01', 'g8-v2-c10-l38-tpl-02']
    },
    {
      id: 'g8-v2-c10-l38-sg-02',
      title: 'Tính toán diện tích và thể tích hình chóp tam giác đều',
      description: 'Áp dụng các công thức tính diện tích xung quanh, toàn phần và thể tích để giải bài tập toán và toán thực tế.',
      difficulty: 'understanding',
      templateIds: ['g8-v2-c10-l38-tpl-03', 'g8-v2-c10-l38-tpl-04', 'g8-v2-c10-l38-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v2-c10-l38-tpl-01',
      'g8-v2-c10-l38-tpl-02',
      'g8-v2-c10-l38-tpl-03',
      'g8-v2-c10-l38-tpl-04',
      'g8-v2-c10-l38-tpl-05'
    ]
  }
};
