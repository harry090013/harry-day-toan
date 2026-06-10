import type { LessonContent } from './LESSON_CONTENT_SCHEMA';

export const g6V1C1L1TapHop: LessonContent = {
  lessonId: 'g6-v1-c1-l1',
  title: 'Bài 1. Tập hợp',
  grade: 6,
  track: 'toan-so',
  strand: 'so-hoc',
  chapterId: 'g6-v1-c1',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Nội dung tự biên soạn, cần giáo viên đối chiếu bản SGK đang dùng trước khi chuyển ready.',
  },
  objectives: [
    'Hiểu tập hợp là một nhóm các đối tượng được xác định rõ ràng.',
    'Nhận biết được phần tử của một tập hợp.',
    'Dùng đúng kí hiệu ∈ và ∉.',
    'Viết được tập hợp bằng cách liệt kê phần tử.',
    'Bước đầu viết được tập hợp bằng cách nêu tính chất đặc trưng.',
  ],
  prerequisites: [
    'Biết đọc, viết các số tự nhiên đơn giản.',
    'Biết so sánh số tự nhiên trong phạm vi nhỏ.',
  ],
  theory: [
    {
      id: 'g6-v1-c1-l1-theory-1',
      title: 'Tập hợp',
      content:
        'Một tập hợp là một nhóm các đối tượng được xác định rõ ràng. Các đối tượng đó được gọi là phần tử của tập hợp.',
      note: 'Tên tập hợp thường viết bằng chữ cái in hoa như A, B, C.',
    },
    {
      id: 'g6-v1-c1-l1-theory-2',
      title: 'Kí hiệu thuộc và không thuộc',
      content:
        'Nếu a là phần tử của tập hợp A, viết a ∈ A. Nếu a không là phần tử của tập hợp A, viết a ∉ A.',
      formulas: ['a ∈ A', 'a ∉ A'],
    },
    {
      id: 'g6-v1-c1-l1-theory-3',
      title: 'Viết tập hợp bằng cách liệt kê',
      content:
        'Liệt kê các phần tử của tập hợp trong dấu ngoặc nhọn. Ví dụ A = {0; 1; 2; 3}.',
      note: 'Khi liệt kê, không cần lặp lại phần tử giống nhau.',
    },
    {
      id: 'g6-v1-c1-l1-theory-4',
      title: 'Viết tập hợp bằng tính chất đặc trưng',
      content:
        'Có thể mô tả tập hợp bằng điều kiện chung của các phần tử. Ví dụ B là tập hợp các số tự nhiên nhỏ hơn 5.',
    },
  ],
  remember: [
    'Tập hợp dùng dấu ngoặc nhọn { }.',
    '∈ đọc là thuộc.',
    '∉ đọc là không thuộc.',
    'Thứ tự liệt kê phần tử không làm thay đổi tập hợp.',
    'Số tự nhiên nhỏ hơn n thường bắt đầu từ 0.',
  ],
  tips: [
    'Muốn kiểm tra a ∈ A đúng hay sai, hãy đọc tập hợp A trước rồi xem a có nằm trong A không.',
    'Khi liệt kê số tự nhiên nhỏ hơn n, hãy nhớ kiểm tra có số 0 hay không.',
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c1-l1-mistake-1',
      mistake: 'Nhầm kí hiệu ∈ và ∉.',
      correction: 'Đọc thành câu tiếng Việt: a ∈ A là “a thuộc A”, a ∉ A là “a không thuộc A”.',
    },
    {
      id: 'g6-v1-c1-l1-mistake-2',
      mistake: 'Dùng ngoặc tròn hoặc ngoặc vuông khi viết tập hợp.',
      correction: 'Tập hợp phải dùng ngoặc nhọn, ví dụ A = {1; 2; 3}.',
    },
    {
      id: 'g6-v1-c1-l1-mistake-3',
      mistake: 'Bỏ sót số 0 khi viết tập hợp các số tự nhiên nhỏ hơn một số.',
      correction: 'Các số tự nhiên nhỏ hơn 4 là 0, 1, 2, 3.',
    },
  ],
  workedExamples: [
    {
      id: 'g6-v1-c1-l1-example-1',
      title: 'Nhận biết phần tử thuộc tập hợp',
      difficulty: 'basic',
      problem: 'Cho A = {2; 4; 6; 8}. Khẳng định nào đúng: 3 ∈ A, 4 ∈ A, 6 ∉ A, 8 ∉ A?',
      steps: [
        'Tập hợp A gồm các phần tử 2, 4, 6, 8.',
        'Số 4 có trong tập hợp A nên 4 ∈ A là đúng.',
        'Số 3 không thuộc A, còn 6 và 8 đều thuộc A nên các khẳng định còn lại sai.',
      ],
      answer: '4 ∈ A',
      commonMistake: 'Học sinh dễ nhìn thấy số 6, 8 trong A nhưng lại quên đổi kí hiệu ∉ thành “không thuộc”.',
    },
    {
      id: 'g6-v1-c1-l1-example-2',
      title: 'Liệt kê số tự nhiên nhỏ hơn một số',
      difficulty: 'understanding',
      problem: 'Viết tập hợp B gồm các số tự nhiên nhỏ hơn 5.',
      steps: [
        'Các số tự nhiên bắt đầu từ 0.',
        'Các số tự nhiên nhỏ hơn 5 là 0, 1, 2, 3, 4.',
        'Viết các phần tử trong dấu ngoặc nhọn.',
      ],
      answer: 'B = {0; 1; 2; 3; 4}',
      commonMistake: 'Dễ viết thiếu số 0.',
    },
  ],
  skillGroups: [
    {
      id: 'g6-v1-c1-l1-skill-1',
      title: 'Nhận biết phần tử thuộc/không thuộc tập hợp',
      description: 'Cho một tập hợp liệt kê sẵn, chọn mệnh đề đúng dạng a ∈ A hoặc a ∉ A.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c1-l1-tpl-thuoc-khong-thuoc'],
    },
    {
      id: 'g6-v1-c1-l1-skill-2',
      title: 'Viết tập hợp bằng cách liệt kê',
      description: 'Chuyển điều kiện đơn giản thành danh sách phần tử trong dấu ngoặc nhọn.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l1-tpl-liet-ke-so-tu-nhien-nho-hon-n'],
    },
    {
      id: 'g6-v1-c1-l1-skill-3',
      title: 'Đếm số phần tử của tập hợp',
      description: 'Đếm số phần tử trong tập hợp liệt kê hoặc tập hợp số tự nhiên thỏa điều kiện đơn giản.',
      difficulty: 'understanding',
      templateIds: ['g6-v1-c1-l1-tpl-dem-so-phan-tu'],
    },
    {
      id: 'g6-v1-c1-l1-skill-4',
      title: 'Nhận biết hai tập hợp bằng nhau',
      description: 'Hiểu rằng thứ tự liệt kê không làm thay đổi tập hợp.',
      difficulty: 'application',
      templateIds: ['g6-v1-c1-l1-tpl-tap-hop-bang-nhau'],
    },
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c1-l1-tpl-thuoc-khong-thuoc',
      'g6-v1-c1-l1-tpl-liet-ke-so-tu-nhien-nho-hon-n',
      'g6-v1-c1-l1-tpl-dem-so-phan-tu',
      'g6-v1-c1-l1-tpl-tap-hop-bang-nhau',
    ],
  },
};
