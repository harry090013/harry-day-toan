import { LessonContent } from '@/data/curriculum/types';

export const lessonG9V1C5ReviewContent: LessonContent = {
  lessonId: 'g9-v1-c5-review',
  title: 'Bài tập cuối chương 5 – Đường tròn',
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
    notes: 'Ôn tập toàn bộ chương 5: đường tròn, dây cung, tiếp tuyến, cung và quạt, vị trí tương đối.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức về đường tròn.',
    'Vận dụng linh hoạt các tính chất dây cung, tiếp tuyến, cung tròn.',
    'Giải quyết bài tập tổng hợp đa dạng về đường tròn.'
  ],
  prerequisites: [
    'Toàn bộ nội dung chương 5.',
    'Định lý Pythagore và tỉ số lượng giác.'
  ],
  theory: [
    {
      id: 'g9-v1-c5-review-theory-1',
      title: 'Bảng tổng kết chương 5',
      content: '**Dây cung:** $d = \\sqrt{R^2 - (\\frac{l}{2})^2}$; $l = 2\\sqrt{R^2 - d^2}$\n\n**Tiếp tuyến:** $AT = \\sqrt{OA^2 - R^2}$ (A ngoài đường tròn)\n\n**Cung và quạt:** $l = \\frac{\\pi Rn}{180}$; $S = \\frac{\\pi R^2 n}{360}$\n\n**Hai đường tròn:** So sánh d với $R_1 + R_2$ và $|R_1 - R_2|$.',
      diagram: {
        id: 'g9-v1-c5-review-theory-1-diagram',
        placement: 'theory',
        variant: 'g9-c5-circle',
        title: 'Tổng kết đường tròn',
        alt: 'Đường tròn tổng hợp các yếu tố: dây, tiếp tuyến, cung, quạt.',
        notToScale: true,
        data: { type: 'summary' }
      }
    }
  ],
  remember: [
    'Tiếp tuyến ⊥ bán kính tại điểm tiếp xúc.',
    'Dây cung gần tâm hơn thì dài hơn.',
    'Góc ở tâm = số đo cung bị chắn; Góc nội tiếp = nửa số đo cung bị chắn.'
  ],
  tips: [
    'Bài tổng hợp: xác định dạng bài (dây cung, tiếp tuyến, hay cung/quạt) rồi chọn công thức phù hợp.'
  ],
  commonMistakes: [
    {
      id: 'g9-v1-c5-review-mistake-1',
      mistake: 'Nhầm vị trí tương đối: $d = R_1 + R_2$ là tiếp xúc ngoài, không phải cắt nhau.',
      correction: 'Điều kiện cắt nhau: $|R_1 - R_2| < d < R_1 + R_2$.'
    }
  ],
  workedExamples: [
    {
      id: 'g9-v1-c5-review-example-1',
      title: 'Bài tổng hợp về đường tròn',
      difficulty: 'application',
      problem: 'Đường tròn $(O;5)$ và điểm $A$ ngoài đường tròn với $OA = 13$. a) Tính $AT$ (tiếp tuyến). b) Tính khoảng cách từ $O$ đến dây $AT$ nếu $AT$ cắt đường tròn.',
      steps: [
        'a) $AT = \\sqrt{OA^2 - R^2} = \\sqrt{169 - 25} = 12$ cm.',
        'b) $AT$ là tiếp tuyến nên không cắt đường tròn; khoảng cách từ $O$ đến tiếp tuyến $= R = 5$ cm.'
      ],
      answer: '$AT = 12$ cm; khoảng cách $= 5$ cm (vì $AT$ là tiếp tuyến)'
    }
  ],
  skillGroups: [
    {
      id: 'g9-v1-c5-review-sg-01',
      title: 'Ôn tập dây cung và tiếp tuyến',
      description: 'Tổng hợp các bài về dây cung và tiếp tuyến.',
      difficulty: 'understanding',
      templateIds: ['g9-c5-review-tpl-01', 'g9-c5-review-tpl-03', 'g9-c5-review-tpl-05']
    },
    {
      id: 'g9-v1-c5-review-sg-02',
      title: 'Ôn tập cung, quạt và vị trí tương đối',
      description: 'Tổng hợp bài về cung, quạt và vị trí tương đối hai đường tròn.',
      difficulty: 'understanding',
      templateIds: ['g9-c5-review-tpl-02', 'g9-c5-review-tpl-04']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g9-c5-review-tpl-01',
      'g9-c5-review-tpl-02',
      'g9-c5-review-tpl-03',
      'g9-c5-review-tpl-04',
      'g9-c5-review-tpl-05'
    ]
  }
};
