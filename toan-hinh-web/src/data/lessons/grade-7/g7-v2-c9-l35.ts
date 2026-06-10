import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V2C9L35Content: LessonContent = {
  lessonId: 'g7-v2-c9-l35',
  title: 'Bài 35. Sự đồng quy của ba đường trung trực, ba đường cao trong một tam giác',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 2,
    lessonNo: 35,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Sự đồng quy của ba đường trung trực và ba đường cao trong tam giác.'
  },
  objectives: [
    'Nhận biết được đường trung trực và đường cao của một tam giác.',
    'Phát biểu được tính chất đồng quy của ba đường trung trực và ba đường cao.',
    'Vận dụng tính chất giao điểm ba đường trung trực (cách đều ba đỉnh) để giải các bài toán khoảng cách.',
    'Xác định trực tâm tam giác trong các trường hợp tam giác nhọn, vuông, tù.'
  ],
  prerequisites: [
    'Khái niệm tam giác, đường trung trực của đoạn thẳng, đường vuông góc.'
  ],
  theory: [
    {
      id: 'g7-v2-c9-l35-theory-1',
      title: '1. Sự đồng quy của ba đường trung trực',
      content: 'Đường trung trực của một cạnh tam giác gọi là đường trung trực của tam giác đó.\n\n**Định lí:**\nBa đường trung trực của một tam giác đồng quy tại một điểm. Điểm này cách đều ba đỉnh của tam giác (ký hiệu là $O$).\n\n*Chú ý:* Điểm $O$ là tâm của đường tròn đi qua ba đỉnh (đường tròn ngoại tiếp) của tam giác.',
      diagram: {
        id: 'g7-v2-c9-l35-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-c9-triangle-concurrency',
        title: 'Điểm đồng quy O của ba đường trung trực',
        alt: 'Tam giác ABC có 3 đường trung trực giao nhau tại điểm O cách đều 3 đỉnh.',
        notToScale: true,
        data: {
          type: 'perpendicular-bisector'
        }
      }
    },
    {
      id: 'g7-v2-c9-l35-theory-2',
      title: '2. Sự đồng quy của ba đường cao',
      content: 'Đoạn vuông góc kẻ từ một đỉnh của tam giác đến đường thẳng chứa cạnh đối diện gọi là đường cao của tam giác đó.\n\n**Định lí:**\nBa đường cao của một tam giác đồng quy tại một điểm. Điểm này gọi là **trực tâm** của tam giác (ký hiệu là $H$).',
      diagram: {
        id: 'g7-v2-c9-l35-theory-2-diagram',
        placement: 'theory',
        variant: 'g7-c9-triangle-concurrency',
        title: 'Trực tâm H của tam giác ABC',
        alt: 'Tam giác ABC có 3 đường cao giao nhau tại trực tâm H.',
        notToScale: true,
        data: {
          type: 'altitude'
        }
      }
    }
  ],
  remember: [
    'Với tam giác vuông, trực tâm $H$ trùng với đỉnh góc vuông, giao điểm ba đường trung trực $O$ chính là trung điểm của cạnh huyền.',
    'Với tam giác tù, trực tâm $H$ nằm ở phía ngoài tam giác, giao điểm ba đường trung trực $O$ cũng nằm ngoài tam giác.'
  ],
  tips: [
    'Giao điểm ba đường trung trực cách đều **3 ĐỈNH** ($OA = OB = OC$). Hãy ghi nhớ điều này để phân biệt với giao điểm các đường phân giác cách đều 3 cạnh.',
    'Để vẽ trực tâm $H$, chỉ cần vẽ đường vuông góc từ hai đỉnh xuống các cạnh đối diện, điểm giao nhau chính là trực tâm $H$.'
  ],
  commonMistakes: [
    {
      id: 'g7-v2-c9-l35-mistake-1',
      mistake: 'Vẽ đường cao nhưng chỉ dừng lại ở cạnh đối diện trong tam giác tù.',
      correction: 'Trong tam giác tù, đường cao kẻ từ các đỉnh nhọn sẽ nằm bên ngoài tam giác. Ta phải **kéo dài** cạnh đối diện để đặt thước vẽ đường vuông góc.'
    },
    {
      id: 'g7-v2-c9-l35-mistake-2',
      mistake: 'Nhầm lẫn vị trí giao điểm của trung trực trong tam giác vuông.',
      correction: 'Hãy nhớ rằng trong tam giác vuông, giao điểm của ba đường trung trực luôn nằm chính xác tại trung điểm của cạnh huyền.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v2-c9-l35-example-1',
      title: 'Xác định vị trí trực tâm và giao điểm trung trực',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ vuông tại $A$. Xác định trực tâm $H$ và giao điểm $O$ của ba đường trung trực của tam giác này.',
      steps: [
        'Bước 1: Hai đường cao xuất phát từ $B$ và $C$ chính là hai cạnh góc vuông $BA$ và $CA$. Chúng giao nhau tại đỉnh góc vuông $A$.',
        'Bước 2: Vậy trực tâm $H$ của tam giác vuông $ABC$ trùng với đỉnh góc vuông $A$.',
        'Bước 3: Với tam giác vuông, điểm cách đều ba đỉnh $A, B, C$ chính là trung điểm của cạnh huyền $BC$.',
        'Bước 4: Vậy giao điểm $O$ của ba đường trung trực nằm tại trung điểm của cạnh huyền $BC$.'
      ],
      answer: 'H trùng A, O là trung điểm BC'
    },
    {
      id: 'g7-v2-c9-l35-example-2',
      title: 'Ứng dụng giao điểm trung trực tính khoảng cách',
      difficulty: 'understanding',
      problem: 'Ba gia đình sống tại ba điểm $A, B, C$ tạo thành một tam giác nhọn. Họ muốn khoan chung một giếng nước cách đều cả ba nhà. Hỏi phải đặt giếng nước ở đâu?',
      steps: [
        'Bước 1: Gọi vị trí giếng nước cần tìm là điểm $O$. Ta có yêu cầu khoảng cách: $OA = OB = OC$.',
        'Bước 2: Điểm cách đều ba đỉnh $A, B, C$ của một tam giác chính là giao điểm của ba đường trung trực của tam giác đó.',
        'Bước 3: Vì tam giác $ABC$ nhọn nên giao điểm $O$ nằm ở miền trong của tam giác.',
        'Bước 4: Kết luận: Vị trí giếng nước cần đặt chính là giao điểm ba đường trung trực của tam giác $ABC$.'
      ],
      answer: 'Giao điểm ba đường trung trực'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v2-c9-l35-sg-01',
      title: 'Nhận biết trực tâm và các tính chất đường cao',
      description: 'Nhận dạng và tìm trực tâm $H$ trong các dạng tam giác nhọn, vuông, tù và tính góc liên quan.',
      difficulty: 'basic',
      templateIds: ['g7-v2-c9-l35-tpl-01', 'g7-v2-c9-l35-tpl-02']
    },
    {
      id: 'g7-v2-c9-l35-sg-02',
      title: 'Đường trung trực và tâm đường tròn ngoại tiếp',
      description: 'Vận dụng khoảng cách từ giao điểm ba đường trung trực đến ba đỉnh tam giác để tính độ dài, xác định vị trí.',
      difficulty: 'understanding',
      templateIds: ['g7-v2-c9-l35-tpl-03', 'g7-v2-c9-l35-tpl-04', 'g7-v2-c9-l35-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g7-v2-c9-l35-tpl-01',
      'g7-v2-c9-l35-tpl-02',
      'g7-v2-c9-l35-tpl-03',
      'g7-v2-c9-l35-tpl-04',
      'g7-v2-c9-l35-tpl-05'
    ]
  }
};
