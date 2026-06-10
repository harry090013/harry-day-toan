import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9L33Content: LessonContent = {
  lessonId: 'g7-v2-c9-l33',
  title: 'Bài 33. Quan hệ giữa ba cạnh của một tam giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    lessonNo: 33,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Bất đẳng thức tam giác và điều kiện độ dài để tạo lập tam giác.'
  },
  objectives: [
    'Phát biểu được bất đẳng thức tam giác và hệ quả.',
    'Biết cách kiểm tra bộ ba số đo độ dài có thể lập thành một tam giác hay không.',
    'Tìm được khoảng giá trị (giới hạn) của cạnh thứ ba khi biết độ dài hai cạnh còn lại.'
  ],
  prerequisites: [
    'Khái niệm tam giác, so sánh số đo độ dài.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-l33-theory-1',
      title: '1. Định lí bất đẳng thức tam giác',
      content: 'Trong một tam giác, tổng độ dài hai cạnh bất kỳ bao giờ cũng lớn hơn độ dài cạnh còn lại.',
      formulas: [
        'AB + BC > AC',
        'AB + AC > BC',
        'AC + BC > AB'
      ],
      diagram: {
        id: 'g7-v2-c9-l33-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-triangle-angles',
        title: 'Tam giác ABC',
        alt: 'Tam giác ABC minh họa bất đẳng thức tam giác.',
        notToScale: true,
        data: {
          labels: ['A', 'B', 'C']
        }
      }
    },
    {
      id: 'g7-v2-c9-l33-theory-2',
      title: '2. Hệ quả bất đẳng thức tam giác',
      content: 'Trong một tam giác, hiệu độ dài hai cạnh bất kỳ bao giờ cũng nhỏ hơn độ dài cạnh còn lại.\n\n*Nhận xét*: Với ba cạnh $a, b, c$ của một tam giác, ta luôn có:\n$$|b - c| < a < b + c$$',
      formulas: [
        '|AB - AC| < BC < AB + AC'
      ]
    }
  ],
  remember: [
    'Để kiểm tra ba độ dài $a, b, c$ (với $a$ là số lớn nhất) có lập thành tam giác không, ta chỉ cần so sánh cạnh lớn nhất với tổng hai cạnh còn lại: nếu $a < b + c$ thì chúng lập thành tam giác.',
    'Ba điểm $A, B, C$ thẳng hàng khi $AB + BC = AC$ (với $AC$ lớn nhất), nếu $AB + BC > AC$ thì chúng tạo thành tam giác.'
  ],
  tips: [
    'Khi làm bài kiểm tra bộ ba số, hãy chọn ra số lớn nhất rồi so sánh nó với tổng hai số còn lại. Ví dụ với bộ (2, 3, 6): cạnh lớn nhất là 6. Vì $6 > 2 + 3$ nên bộ này không lập thành tam giác.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-l33-mistake-1',
      mistake: 'Kết luận lập thành tam giác khi tổng hai cạnh bằng cạnh còn lại.',
      correction: 'Tổng hai cạnh phải **LỚN HƠN hẳn** cạnh thứ ba. Nếu bằng nhau, ba điểm đó sẽ thẳng hàng chứ không tạo thành tam giác.'
    },
    {
      id: 'g7-v2-c9-l33-mistake-2',
      mistake: 'Không dùng trị tuyệt đối khi tính hiệu hai cạnh.',
      correction: 'Hiệu hai cạnh luôn là một số dương (lấy cạnh lớn trừ cạnh nhỏ) vì độ dài hình học không bao giờ âm.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-l33-example-1',
      title: 'Kiểm tra điều kiện tạo lập tam giác',
      difficulty: 'basic',
      problem: 'Bộ ba độ dài sau có thể là ba cạnh của một tam giác không: $3\\text{ cm}, 4\\text{ cm}, 8\\text{ cm}$?',
      steps: [
        'Bước 1: Tìm độ dài lớn nhất trong bộ ba số: đó là $8\\text{ cm}$.',
        'Bước 2: Tính tổng hai độ dài còn lại: $3 + 4 = 7\\text{ cm}$.',
        'Bước 3: So sánh độ dài lớn nhất với tổng hai độ dài còn lại: ta thấy $8 > 7$ (cạnh lớn nhất lớn hơn tổng hai cạnh kia).',
        'Bước 4: Đối chiếu bất đẳng thức tam giác: điều này mâu thuẫn với định lí (tổng hai cạnh phải lớn hơn cạnh còn lại).',
        'Bước 5: Kết luận: Bộ ba độ dài này không thể là ba cạnh của một tam giác.'
      ],
      answer: 'Không thể lập thành tam giác'
    },
    {
      id: 'g7-v2-c9-l33-example-2',
      title: 'Tìm khoảng giá trị của cạnh thứ ba',
      difficulty: 'understanding',
      problem: 'Cho tam giác $ABC$ có $AB = 2\\text{ cm}$ và $AC = 7\\text{ cm}$. Biết độ dài cạnh $BC$ là một số nguyên (đơn vị cm). Hãy tìm độ dài cạnh $BC$.',
      steps: [
        'Bước 1: Áp dụng bất đẳng thức tam giác và hệ quả cho cạnh $BC$: $|AC - AB| < BC < AC + AB$.',
        'Bước 2: Thay số vào biểu thức: $|7 - 2| < BC < 7 + 2 \\Rightarrow 5 < BC < 9$.',
        'Bước 3: Vì độ dài $BC$ là số nguyên nên $BC$ có thể là $6, 7, 8\\text{ cm}$.',
        'Bước 4: Trả lời: Độ dài cạnh $BC$ có thể bằng $6\\text{ cm}$, $7\\text{ cm}$, hoặc $8\\text{ cm}$.'
      ],
      answer: '6 cm, 7 cm, hoặc 8 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-l33-sg-01',
      title: 'Kiểm tra bộ ba số đo',
      description: 'Xác định xem ba độ dài cho trước có thể tạo thành một tam giác hợp lệ hay không.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c9-l33-tpl-01', 'g7-v2-c9-l33-tpl-03']
    },
    {
      id: 'g7-v2-c9-l33-sg-02',
      title: 'Tìm giới hạn cạnh thứ ba',
      description: 'Áp dụng bất đẳng thức tam giác để tìm khoảng độ dài hoặc giá trị nguyên của cạnh còn lại.',
      difficulty: 'understanding',
      templateIds: ['g7-v2-c9-l33-tpl-02', 'g7-v2-c9-l33-tpl-04', 'g7-v2-c9-l33-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v2-c9-l33-tpl-01',
      'g7-v2-c9-l33-tpl-02',
      'g7-v2-c9-l33-tpl-03',
      'g7-v2-c9-l33-tpl-04',
      'g7-v2-c9-l33-tpl-05'
    ]
  }
};
