import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C5L21Content: LessonContent = {
  lessonId: 'g6-v1-c5-l21',
  title: 'Bài 21. Hình có trục đối xứng',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 21,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm trục đối xứng trực quan, trục đối xứng của các hình phẳng quen thuộc.'
  },
  objectives: [
    'Hiểu thế nào là một hình có trục đối xứng bằng cách gấp giấy hoặc quan sát trực quan.',
    'Nhận biết và đếm đúng số trục đối xứng của một số hình quen thuộc (tam giác đều, hình vuông, hình tròn, chữ nhật).',
    'Tìm được trục đối xứng của các hình trong tự nhiên, hoa văn, kiến trúc.'
  ],
  prerequisites: [
    'Nhận biết các hình phẳng cơ bản (Bài 18, 19).'
  ],
  theory: [
    {
      id: 'g6-v1-c5-l21-theory-1',
      title: '1. Hình có trục đối xứng',
      content: 'Một hình có trục đối xứng nếu có một đường thẳng chia hình đó thành hai phần mà khi ta "gấp" hình theo đường thẳng đó, hai phần trùng khít lên nhau.\n\n– Đường thẳng đó được gọi là **trục đối xứng** của hình.',
      diagram: {
        id: 'g6-v1-c5-l21-theory-1-diagram',
        placement: 'theory',
        variant: 'axis-symmetry',
        title: 'Trục đối xứng d',
        alt: 'Hình tròn có trục đối xứng d đi qua tâm.',
        notToScale: true,
        data: {
          shape: 'circle'
        }
      }
    },
    {
      id: 'g6-v1-c5-l21-theory-2',
      title: '2. Số trục đối xứng của các hình quen thuộc',
      content: 'Mỗi hình phẳng có thể có một hoặc nhiều trục đối xứng khác nhau:\n– **Đoạn thẳng**: Có 1 trục đối xứng (đường trung trực của đoạn thẳng).\n– **Tam giác cân**: Có 1 trục đối xứng (đường cao đi qua đỉnh cân).\n– **Tam giác đều**: Có 3 trục đối xứng.\n– **Hình chữ nhật**: Có 2 trục đối xứng (đường nối trung điểm các cạnh đối).\n– **Hình thoi**: Có 2 trục đối xứng (hai đường chéo).\n– **Hình vuông**: Có 4 trục đối xứng (2 đường chéo, 2 đường nối trung điểm các cạnh đối).\n– **Hình tròn**: Có vô số trục đối xứng (mọi đường thẳng đi qua tâm).'
    }
  ],
  remember: [
    'Đường chéo của hình chữ nhật không phải là trục đối xứng của nó (khi gấp theo đường chéo, hai nửa không trùng khít).',
    'Hình bình hành tổng quát (không phải thoi/chữ nhật/vuông) không có trục đối xứng nào.'
  ],
  tips: [
    'Muốn tìm trục đối xứng của một hình vẽ trên giấy, hãy thử tưởng tượng đường kẻ nào chia hình thành hai nửa giống hệt nhau như ảnh soi qua gương.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c5-l21-mistake-1',
      mistake: 'Đếm đường chéo hình chữ nhật là trục đối xứng.',
      correction: 'Nếu gấp hình chữ nhật theo đường chéo, mép cạnh sẽ bị lệch ra ngoài, không chồng khít lên nhau.'
    },
    {
      id: 'g6-v1-c5-l21-mistake-2',
      mistake: 'Cho rằng hình bình hành có trục đối xứng.',
      correction: 'Hình bình hành chỉ có tâm đối xứng, không có trục đối xứng trừ các trường hợp đặc biệt (hình thoi, hình chữ nhật).'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c5-l21-example-1',
      title: 'Nhận biết hình có trục đối xứng',
      difficulty: 'basic',
      problem: 'Trong các chữ cái in hoa sau, chữ nào có trục đối xứng: $A, B, F, G$?',
      steps: [
        'Bước 1: Xét chữ $A$: có một trục đối xứng thẳng đứng chia đôi chữ A.',
        'Bước 2: Xét chữ $B$: có một trục đối xứng nằm ngang chia đôi chữ B.',
        'Bước 3: Xét chữ $F$ và $G$: không thể tìm được đường thẳng nào chia chữ thành hai phần đối xứng gương.',
        'Bước 4: Kết luận: Chữ $A$ và chữ $B$ có trục đối xứng.'
      ],
      answer: 'Chữ A và chữ B'
    },
    {
      id: 'g6-v1-c5-l21-example-2',
      title: 'Đếm số trục đối xứng',
      difficulty: 'basic',
      problem: 'Hỏi hình vuông có bao nhiêu trục đối xứng?',
      steps: [
        'Bước 1: Hình vuông có 2 trục đối xứng đi qua trung điểm các cạnh đối diện.',
        'Bước 2: Hình vuông có thêm 2 trục đối xứng đi qua hai đường chéo.',
        'Bước 3: Tổng số trục đối xứng của hình vuông là: $2 + 2 = 4$ trục đối xứng.'
      ],
      answer: '4 trục đối xứng',
      diagram: {
        id: 'g6-v1-c5-l21-example-2-diagram',
        placement: 'worked_example',
        variant: 'axis-symmetry',
        title: 'Trục đối xứng của hình vuông',
        alt: 'Hình vuông có 4 trục đối xứng (2 trục đi qua trung điểm các cạnh đối diện, 2 trục đi qua hai đường chéo).',
        notToScale: true,
        data: {
          shape: 'square'
        }
      }
    },
    {
      id: 'g6-v1-c5-l21-example-3',
      title: 'Phân biệt số trục đối xứng của chữ nhật và thoi',
      difficulty: 'understanding',
      problem: 'So sánh số trục đối xứng của hình chữ nhật và hình thoi.',
      steps: [
        'Bước 1: Hình chữ nhật có 2 trục đối xứng (đường trung trực của các cạnh).',
        'Bước 2: Hình thoi có 2 trục đối xứng (2 đường chéo).',
        'Bước 3: Cả hai hình đều có đúng 2 trục đối xứng.'
      ],
      answer: 'Bằng nhau (đều có 2 trục đối xứng)'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c5-l21-sg-01',
      title: 'Nhận biết chữ cái và hình có trục đối xứng',
      description: 'Nhận biết tính đối xứng trục trong đời sống và trong các hình học quen thuộc.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c5-l21-tpl-nhan-biet-truc-dx']
    },
    {
      id: 'g6-v1-c5-l21-sg-02',
      title: 'Xác định số trục đối xứng',
      description: 'Đếm số lượng trục đối xứng cụ thể của tam giác đều, hình vuông, hình thoi, chữ nhật, tròn.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c5-l21-tpl-dem-truc-doi-xung']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c5-l21-tpl-nhan-biet-truc-dx',
      'g6-v1-c5-l21-tpl-dem-truc-doi-xung'
    ]
  }
};
