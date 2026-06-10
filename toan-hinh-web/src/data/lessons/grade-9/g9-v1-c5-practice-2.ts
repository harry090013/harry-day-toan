import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5Practice2Content: LessonContent = {
  lessonId: 'g9-v1-c5-practice-2',
  title: 'Luyện tập chung – Đường tròn: Tiếp tuyến, cung và quạt',
  grade: 9,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g9-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 9,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập về tiếp tuyến, độ dài cung, diện tích quạt, vị trí tương đối hai đường tròn.'
  },
  objectives: [
    'Tính được độ dài cung tròn và diện tích hình quạt tròn.',
    'Xác định vị trí tương đối của đường thẳng và đường tròn.',
    'Tính độ dài tiếp tuyến từ điểm ngoài đến đường tròn.',
    'Xác định vị trí tương đối của hai đường tròn.'
  ],
  prerequisites: [
    'Khái niệm cung tròn, hình quạt, tiếp tuyến.',
    'Định lý tiếp tuyến vuông góc bán kính.',
    'Công thức độ dài cung và diện tích quạt.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-practice-2-theory-1',
      title: 'Tổng hợp: Cung, quạt và tiếp tuyến',
      content: '**Độ dài cung:** $l = \\frac{\\pi R n}{180}$ (với $n$ là số đo cung tính bằng độ)\n\n**Diện tích quạt:** $S = \\frac{\\pi R^2 n}{360}$\n\n**Tiếp tuyến từ ngoài:** Từ điểm $A$ ngoài đường tròn $(O;R)$:\n$$AT = \\sqrt{OA^2 - R^2}$$\n\n**Vị trí tương đối đường thẳng – đường tròn:**\n- $d < R$: cắt nhau\n- $d = R$: tiếp xúc\n- $d > R$: không giao',
      diagram: {
        id: 'g9-v1-c5-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Tiếp tuyến và cung tròn',
        alt: 'Đường tròn O với tiếp tuyến AT và hình quạt.',
        notToScale: true,
        data: { type: 'tangent-arc' }
      }
    }
  ],
  remember: [
    'Tiếp tuyến vuông góc với bán kính tại điểm tiếp xúc: $OT \\perp AT$.',
    'Hai tiếp tuyến từ một điểm ngoài đến đường tròn có độ dài bằng nhau.'
  ],
  tips: [
    'Bài tính cung và quạt: nhớ $n$ là số đo cung, không phải góc ở tâm của phần còn lại.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-practice-2-mistake-1',
      mistake: 'Nhầm công thức: dùng $2\\pi R$ (chu vi) thay vì $\\frac{\\pi R n}{180}$ (độ dài cung).',
      correction: 'Công thức độ dài cung: $l = \\frac{\\pi R n}{180}$; chu vi đường tròn là trường hợp $n = 360^\\circ$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-practice-2-example-1',
      title: 'Tính tiếp tuyến từ điểm ngoài',
      difficulty: 'understanding',
      problem: 'Điểm $A$ nằm ngoài đường tròn $(O;5)$. Biết $OA = 13$ cm. Tính $AT$.',
      steps: [
        '$OT \\perp AT$ (tiếp tuyến vuông góc bán kính).',
        '$AT = \\sqrt{OA^2 - R^2} = \\sqrt{169 - 25} = \\sqrt{144} = 12$ cm.'
      ],
      answer: '$AT = 12$ cm'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-practice-2-sg-01',
      title: 'Cung, quạt và tiếp tuyến',
      description: 'Tính độ dài cung, diện tích quạt và độ dài tiếp tuyến.',
      difficulty: 'understanding',
      templateIds: ['g9-c5-practice-2-tpl-01', 'g9-c5-practice-2-tpl-02', 'g9-c5-practice-2-tpl-04']
    },
    {
      id: 'g9-v1-c5-practice-2-sg-02',
      title: 'Vị trí tương đối',
      description: 'Xác định vị trí tương đối giữa đường thẳng và hai đường tròn.',
      difficulty: 'understanding',
      templateIds: ['g9-c5-practice-2-tpl-03', 'g9-c5-practice-2-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c5-practice-2-tpl-01',
      'g9-c5-practice-2-tpl-02',
      'g9-c5-practice-2-tpl-03',
      'g9-c5-practice-2-tpl-04',
      'g9-c5-practice-2-tpl-05'
    ]
  }
};
