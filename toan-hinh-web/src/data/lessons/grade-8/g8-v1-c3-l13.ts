import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3L13Content: LessonContent = {
  lessonId: 'g8-v1-c3-l13',
  title: 'Bài 13. Hình chữ nhật',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 13,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa, tính chất và dấu hiệu nhận biết hình chữ nhật.'
  },
  objectives: [
    'Mô tả được hình chữ nhật và các tính chất đặc trưng (bốn góc vuông, hai đường chéo bằng nhau và cắt nhau tại trung điểm).',
    'Nhận biết được các dấu hiệu nhận biết hình chữ nhật.',
    'Vận dụng định lí đường trung tuyến ứng với cạnh huyền trong tam giác vuông để giải quyết các bài toán tính toán.'
  ],
  prerequisites: [
    'Hình thang cân, hình bình hành, định lí tổng các góc của tứ giác.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-l13-theory-1',
      title: '1. Định nghĩa và tính chất hình chữ nhật',
      content: 'Hình chữ nhật là tứ giác có bốn góc vuông.\n\n**Tính chất:** Hình chữ nhật có tất cả các tính chất của hình bình hành và hình thang cân.\n- Hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường.',
      diagram: {
        id: 'g8-v1-c3-l13-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình chữ nhật ABCD',
        alt: 'Hình chữ nhật ABCD có bốn góc vuông và hai đường chéo bằng nhau.',
        notToScale: true,
        data: {
          type: 'rectangle'
        }
      }
    },
    {
      id: 'g8-v1-c3-l13-theory-2',
      title: '2. Dấu hiệu nhận biết',
      content: 'Một tứ giác là hình chữ nhật nếu thỏa mãn một trong các dấu hiệu:\n1. Tứ giác có ba góc vuông.\n2. Hình thang cân có một góc vuông.\n3. Hình bình hành có một góc vuông.\n4. Hình bình hành có hai đường chéo bằng nhau.',
      formulas: [
        '\\widehat{A} = \\widehat{B} = \\widehat{C} = 90^\\circ \\Rightarrow ABCD \\text{ là hình chữ nhật}',
        'ABCD \\text{ là hình bình hành và } AC = BD \\Rightarrow ABCD \\text{ là hình chữ nhật}'
      ]
    },
    {
      id: 'g8-v1-c3-l13-theory-3',
      title: '3. Áp dụng vào tam giác vuông',
      content: '**Định lí:**\n- Trong một tam giác vuông, đường trung tuyến ứng với cạnh huyền bằng nửa cạnh huyền.\n- Ngược lại, nếu một tam giác có đường trung tuyến ứng với một cạnh bằng nửa cạnh đó thì tam giác đó là tam giác vuông.',
      formulas: [
        '\\triangle ABC \\text{ vuông tại A}, AM \\text{ là trung tuyến} \\Rightarrow AM = \\frac{1}{2} BC'
      ]
    }
  ],
  remember: [
    'Hình chữ nhật vừa là hình bình hành vừa là hình thang cân.',
    'Nhờ định lí đường trung tuyến trong tam giác vuông, ta có thể dễ dàng tính độ dài trung tuyến khi biết cạnh huyền và ngược lại.'
  ],
  tips: [
    'Dấu hiệu phổ biến nhất để chứng minh một tứ giác là hình chữ nhật là chứng minh nó là hình bình hành trước, sau đó chỉ ra nó có một góc vuông hoặc hai đường chéo bằng nhau.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-l13-mistake-1',
      mistake: 'Chứng minh tứ giác có hai đường chéo bằng nhau là hình chữ nhật.',
      correction: 'Không đúng! Hình thang cân cũng có hai đường chéo bằng nhau nhưng không phải hình chữ nhật. Tứ giác phải là **hình bình hành** có hai đường chéo bằng nhau mới là hình chữ nhật.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-l13-example-1',
      title: 'Tính độ dài trung tuyến ứng với cạnh huyền',
      difficulty: 'basic',
      problem: 'Cho tam giác $ABC$ vuông tại $A$ có hai cạnh góc vuông $AB = 6\\text{ cm}, AC = 8\\text{ cm}$. Tính độ dài đường trung tuyến $AM$ ứng với cạnh huyền $BC$.',
      steps: [
        'Bước 1: Áp dụng định lí Pythagore trong tam giác vuông $ABC$: $BC^2 = AB^2 + AC^2 = 6^2 + 8^2 = 36 + 64 = 100$.',
        'Bước 2: Tìm độ dài cạnh huyền: $BC = \\sqrt{100} = 10\\text{ cm}$.',
        'Bước 3: Áp dụng định lí đường trung tuyến trong tam giác vuông: $AM = \\frac{1}{2} BC$.',
        'Bước 4: Tính độ dài $AM$: $AM = \\frac{1}{2} \\times 10 = 5\\text{ cm}$.',
        'Bước 5: Trả lời: Độ dài đường trung tuyến $AM$ là $5\\text{ cm}$.'
      ],
      answer: '5 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-l13-sg-01',
      title: 'Tính chất trung tuyến tam giác vuông',
      description: 'Tìm độ dài cạnh huyền hoặc trung tuyến ứng với cạnh huyền trong tam giác vuông.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c3-l13-tpl-01', 'g8-v1-c3-l13-tpl-02']
    },
    {
      id: 'g8-v1-c3-l13-sg-02',
      title: 'Dấu hiệu nhận biết hình chữ nhật',
      description: 'Chứng minh tứ giác, hình bình hành hoặc hình thang cân là hình chữ nhật.',
      difficulty: 'understanding',
      templateIds: ['g8-v1-c3-l13-tpl-03', 'g8-v1-c3-l13-tpl-04', 'g8-v1-c3-l13-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c3-l13-tpl-01',
      'g8-v1-c3-l13-tpl-02',
      'g8-v1-c3-l13-tpl-03',
      'g8-v1-c3-l13-tpl-04',
      'g8-v1-c3-l13-tpl-05'
    ]
  }
};
