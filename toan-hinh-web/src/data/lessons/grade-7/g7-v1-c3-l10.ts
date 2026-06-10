import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C3L10Content: LessonContent = {
  lessonId: 'g7-v1-c3-l10',
  title: 'Bài 10. Tiên đề Euclid. Tính chất của hai đường thẳng song song',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    lessonNo: 10,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt về tiên đề Euclid và tính chất của hai đường thẳng song song.'
  },
  objectives: [
    'Phát biểu và hiểu được tiên đề Euclid về đường thẳng song song.',
    'Sử dụng tính chất của hai đường thẳng song song để suy ra các cặp góc bằng nhau hoặc bù nhau.',
    'Tính số đo góc trong các hình vẽ phức tạp chứa đường thẳng song song.'
  ],
  prerequisites: [
    'Khái niệm hai đường thẳng song song, nhận biết các góc so le trong và đồng vị.'
  ],
  theory: [
    {
      id: 'g7-v1-c3-l10-theory-1',
      title: '1. Tiên đề Euclid về đường thẳng song song',
      content: 'Qua một điểm ở ngoài một đường thẳng, chỉ có một đường thẳng song song với đường thẳng đó.',
      diagram: {
        id: 'g7-v1-c3-l10-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-euclid-axiom',
        title: 'Đường thẳng b song song với a đi qua M',
        alt: 'Hình vẽ điểm M ngoài đường thẳng a và đường thẳng b duy nhất đi qua M song song với a.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          point: 'M'
        }
      }
    },
    {
      id: 'g7-v1-c3-l10-theory-2',
      title: '2. Tính chất của hai đường thẳng song song',
      content: 'Nếu một đường thẳng cắt hai đường thẳng song song thì:\n– Hai góc so le trong bằng nhau.\n– Hai góc đồng vị bằng nhau.\n– Hai góc trong cùng phía bù nhau (tổng bằng $180^\\circ$).',
      formulas: [
        'a \\parallel b \\Rightarrow \\widehat{A_3} = \\widehat{B_1} \\quad (\\text{so le trong})',
        'a \\parallel b \\Rightarrow \\widehat{A_1} = \\widehat{B_1} \\quad (\\text{đồng vị})',
        'a \\parallel b \\Rightarrow \\widehat{A_4} + \\widehat{B_1} = 180^\\circ \\quad (\\text{trong cùng phía})'
      ],
      diagram: {
        id: 'g7-v1-c3-l10-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-parallel-transversal',
        title: 'Cát tuyến c cắt hai đường song song a và b',
        alt: 'Đường thẳng c cắt hai đường thẳng song song a và b tạo ra các góc tương ứng bằng nhau.',
        notToScale: true,
        data: {
          lineA: 'a',
          lineB: 'b',
          transversal: 'c',
          highlighted: ['A4', 'B1'] // Trong cùng phía
        }
      }
    }
  ],
  remember: [
    'Tính chất song song là suy luận xuôi: có SONG SONG $\\Rightarrow$ GÓC BẰNG NHAU/BÙ NHAU.',
    'Dấu hiệu nhận biết là suy luận ngược: có GÓC BẰNG NHAU/BÙ NHAU $\\Rightarrow$ SONG SONG.'
  ],
  tips: [
    'Hai góc trong cùng phía luôn bù nhau (tổng số đo bằng $180^\\circ$). Rất nhiều học sinh nhầm lẫn tính chúng bằng nhau.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c3-l10-mistake-1',
      mistake: 'Kết luận góc so le trong bằng nhau khi chưa có giả thiết hai đường thẳng song song.',
      correction: 'Phải ghi rõ lý do "vì $a \\parallel b$" trước khi suy ra các góc bằng nhau.'
    },
    {
      id: 'g7-v1-c3-l10-mistake-2',
      mistake: 'Cho rằng hai góc trong cùng phía bằng nhau.',
      correction: 'Hai góc trong cùng phía chỉ bằng nhau khi cả hai cùng bằng $90^\\circ$ (cát tuyến vuông góc). Thông thường chúng chỉ bù nhau: tổng bằng $180^\\circ$.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c3-l10-example-1',
      title: 'Tính góc đồng vị và so le trong',
      difficulty: 'basic',
      problem: 'Cho hai đường thẳng song song $a$ và $b$ bị cắt bởi đường thẳng $c$ tại $A$ và $B$. Biết góc $\\widehat{A_1} = 75^\\circ$. Tính số đo góc $\\widehat{B_1}$ đồng vị với $\\widehat{A_1}$ và góc $\\widehat{B_3}$ so le trong với $\\widehat{A_1}$ (ở đây $\\widehat{B_1}$ và $\\widehat{B_3}$ đối đỉnh).',
      steps: [
        'Bước 1: Vì $a \\parallel b$ nên góc đồng vị bằng nhau: $\\widehat{B_1} = \\widehat{A_1} = 75^\\circ$.',
        'Bước 2: Tìm góc so le trong: góc $\\widehat{B_3}$ là góc đối đỉnh với $\\widehat{B_1}$, hoặc dùng tính chất so le trong của cát tuyến cắt hai đường thẳng song song. Ta có $\\widehat{B_3} = \\widehat{A_1} = 75^\\circ$.',
        'Bước 3: Kết luận: $\\widehat{B_1} = 75^\\circ$ và $\\widehat{B_3} = 75^\\circ$.'
      ],
      answer: 'B1 = 75°, B3 = 75°'
    },
    {
      id: 'g7-v1-c3-l10-example-2',
      title: 'Tính góc trong cùng phía',
      difficulty: 'understanding',
      problem: 'Cho hai đường thẳng song song $a$ và $b$ bị cắt bởi cát tuyến $c$ lần lượt tại $A$ và $B$. Biết góc $\\widehat{A_4} = 110^\\circ$. Tính số đo góc $\\widehat{B_1}$ biết $\\widehat{A_4}$ và $\\widehat{B_1}$ là hai góc trong cùng phía.',
      steps: [
        'Bước 1: Vì $a \\parallel b$ nên hai góc trong cùng phía $\\widehat{A_4}$ và $\\widehat{B_1}$ bù nhau. Ta có: $\\widehat{A_4} + \\widehat{B_1} = 180^\\circ$.',
        'Bước 2: Thay số đo góc $\\widehat{A_4} = 110^\\circ$ vào đẳng thức: $110^\\circ + \\widehat{B_1} = 180^\\circ$.',
        'Bước 3: Tính toán: $\\widehat{B_1} = 180^\\circ - 110^\\circ = 70^\\circ$.',
        'Bước 4: Kết luận: $\\widehat{B_1} = 70^\\circ$.'
      ],
      answer: '70°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c3-l10-sg-01',
      title: 'Áp dụng tiên đề Euclid',
      description: 'Luyện tập các câu hỏi lý thuyết xoay quanh tiên đề Euclid về số đường thẳng song song qua một điểm.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c3-l10-tpl-01']
    },
    {
      id: 'g7-v1-c3-l10-sg-02',
      title: 'Tính góc nhờ tính chất song song',
      description: 'Sử dụng tính chất góc đồng vị, so le trong và trong cùng phía để tính toán góc khi biết song song.',
      difficulty: 'basic',
      templateIds: ['g7-v1-c3-l10-tpl-02', 'g7-v1-c3-l10-tpl-03', 'g7-v1-c3-l10-tpl-04', 'g7-v1-c3-l10-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v1-c3-l10-tpl-01',
      'g7-v1-c3-l10-tpl-02',
      'g7-v1-c3-l10-tpl-03',
      'g7-v1-c3-l10-tpl-04',
      'g7-v1-c3-l10-tpl-05'
    ]
  }
};
