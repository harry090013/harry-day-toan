import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9L35Content: LessonContent = {
  lessonId: 'g8-v2-c9-l35',
  title: 'Bài 35. Định lí Pythagore và ứng dụng',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    lessonNo: 35,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định lí Pythagore thuận và đảo, tính toán độ dài và ứng dụng thực tế.'
  },
  objectives: [
    'Phát biểu và giải thích được định lí Pythagore (thuận và đảo).',
    'Tính được độ dài một cạnh của tam giác vuông khi biết độ dài hai cạnh kia.',
    'Nhận biết một tam giác là tam giác vuông dựa trên độ dài ba cạnh cho trước.',
    'Giải quyết được một số vấn đề thực tiễn gắn với định lí Pythagore.'
  ],
  prerequisites: [
    'Khái niệm tam giác vuông, lũy thừa bậc 2, căn bậc 2 số học.'
  ],
  theory: [
    {
      id: 'g8-v2-c9-l35-theory-1',
      title: '1. Định lí Pythagore (Thuận)',
      content: 'Trong một tam giác vuông, bình phương độ dài cạnh huyền bằng tổng bình phương độ dài hai cạnh góc vuông:\n$$BC^2 = AB^2 + AC^2 \\quad (\\text{với tam giác ABC vuông tại A})$$',
      diagram: {
        id: 'g8-v2-c9-l35-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c9-pythagore',
        title: 'Tam giác vuông ABC',
        alt: 'Tam giác ABC vuông tại A có cạnh huyền BC và các cạnh góc vuông AB, AC.',
        notToScale: true,
        data: {
          a: 'b',
          b: 'c',
          c: 'a'
        }
      },
      formulas: [
        'BC^2 = AB^2 + AC^2',
        'BC = \\sqrt{AB^2 + AC^2}',
        'AB = \\sqrt{BC^2 - AC^2}'
      ]
    },
    {
      id: 'g8-v2-c9-l35-theory-2',
      title: '2. Định lí Pythagore đảo',
      content: 'Nếu một tam giác có bình phương độ dài của một cạnh bằng tổng bình phương độ dài của hai cạnh kia thì tam giác đó là tam giác vuông.',
      formulas: [
        'BC^2 = AB^2 + AC^2 \\Rightarrow \\triangle ABC \\text{ vuông tại A}'
      ]
    }
  ],
  remember: [
    'Các bộ ba số Pythagore phổ biến: $(3, 4, 5)$, $(5, 12, 13)$, $(6, 8, 10)$, $(9, 12, 15)$, $(8, 15, 17)$. Ghi nhớ các bộ này giúp tính toán nhanh chóng.',
    'Cạnh huyền luôn là cạnh dài nhất trong tam giác vuông.'
  ],
  tips: [
    'Khi tính cạnh góc vuông, hãy nhớ công thức trừ: bình phương cạnh huyền trừ bình phương cạnh góc vuông đã biết. Rất nhiều học sinh nhầm lẫn cộng tất cả lại.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-l35-mistake-1',
      mistake: 'Nhầm lẫn phép cộng và phép trừ khi tính cạnh góc vuông.',
      correction: 'Cạnh huyền là dài nhất. Do đó, $AC^2 = BC^2 - AB^2$ (phép trừ). Chỉ khi tính cạnh huyền $BC$ mới dùng phép cộng: $BC^2 = AB^2 + AC^2$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-l35-example-1',
      title: 'Tính cạnh huyền của tam giác vuông',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ vuông tại $A$ có $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Tính độ dài cạnh $BC$.',
      steps: [
        'Bước 1: Áp dụng định lí Pythagore cho tam giác vuông $ABC$ tại $A$: $BC^2 = AB^2 + AC^2$.',
        'Bước 2: Thay số: $BC^2 = 6^2 + 8^2 = 36 + 64 = 100$.',
        'Bước 3: Tìm độ dài $BC$: $BC = \\sqrt{100} = 10\\text{ cm}$.',
        'Bước 4: Trả lời: Độ dài cạnh $BC$ là $10\\text{ cm}$.'
      ],
      answer: '10 cm'
    },
    {
      id: 'g8-v2-c9-l35-example-2',
      title: 'Kiểm tra tam giác vuông bằng Pythagore đảo',
      difficulty: 'basic',
      problem: 'Một tam giác có ba cạnh bằng $5\\text{ cm}, 12\\text{ cm}, 13\\text{ cm}$ có phải là tam giác vuông không?',
      steps: [
        'Bước 1: Xác định cạnh dài nhất: đó là cạnh có độ dài $13\\text{ cm}$.',
        'Bước 2: Tính bình phương cạnh dài nhất: $13^2 = 169$.',
        'Bước 3: Tính tổng bình phương hai cạnh còn lại: $5^2 + 12^2 = 25 + 144 = 169$.',
        'Bước 4: So sánh hai kết quả: ta thấy $169 = 169$ (bằng nhau).',
        'Bước 5: Áp dụng định lí Pythagore đảo, kết luận tam giác này là tam giác vuông.'
      ],
      answer: 'Là tam giác vuông'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-l35-sg-01',
      title: 'Tính cạnh trong tam giác vuông',
      description: 'Sử dụng định lí Pythagore để tìm độ dài cạnh huyền hoặc cạnh góc vuông.',
      difficulty: 'basic',
      templateIds: ['g8-v2-c9-l35-tpl-01', 'g8-v2-c9-l35-tpl-02']
    },
    {
      id: 'g8-v2-c9-l35-sg-02',
      title: 'Kiểm tra tam giác vuông và toán thực tế',
      description: 'Áp dụng định lí đảo để nhận diện tam giác vuông và giải các bài toán thực tế (khoảng cách, thang, bóng bóng, bức tường).',
      difficulty: 'understanding',
      templateIds: ['g8-v2-c9-l35-tpl-03', 'g8-v2-c9-l35-tpl-04', 'g8-v2-c9-l35-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v2-c9-l35-tpl-01',
      'g8-v2-c9-l35-tpl-02',
      'g8-v2-c9-l35-tpl-03',
      'g8-v2-c9-l35-tpl-04',
      'g8-v2-c9-l35-tpl-05'
    ]
  }
};
