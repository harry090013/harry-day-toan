import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3L14Content: LessonContent = {
  lessonId: 'g8-v1-c3-l14',
  title: 'Bài 14. Hình thoi và hình vuông',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    lessonNo: 14,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Định nghĩa, tính chất và dấu hiệu nhận biết hình thoi, hình vuông.'
  },
  objectives: [
    'Mô tả được hình thoi, hình vuông và các tính chất đặc trưng của chúng.',
    'Nhận biết được các dấu hiệu nhận biết hình thoi và hình vuông.',
    'Vận dụng các kiến thức để giải bài toán chứng minh và tính toán độ dài.'
  ],
  prerequisites: [
    'Hình thang cân, hình bình hành, hình chữ nhật, tính chất tia phân giác.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-l14-theory-1',
      title: '1. Hình thoi',
      content: 'Hình thoi là tứ giác có bốn cạnh bằng nhau.\n\n**Tính chất:** Hình thoi có đầy đủ tính chất của hình bình hành.\n- Hai đường chéo vuông góc với nhau.\n- Hai đường chéo là các đường phân giác của các góc của hình thoi.\n\n**Dấu hiệu nhận biết:**\n1. Tứ giác có bốn cạnh bằng nhau.\n2. Hình bình hành có hai cạnh kề bằng nhau.\n3. Hình bình hành có hai đường chéo vuông góc với nhau.\n4. Hình bình hành có một đường chéo là đường phân giác của một góc.',
      diagram: {
        id: 'g8-v1-c3-l14-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình thoi ABCD',
        alt: 'Hình thoi ABCD có bốn cạnh bằng nhau và hai đường chéo vuông góc.',
        notToScale: true,
        data: {
          type: 'rhombus'
        }
      }
    },
    {
      id: 'g8-v1-c3-l14-theory-2',
      title: '2. Hình vuông',
      content: 'Hình vuông là tứ giác có bốn góc vuông và bốn cạnh bằng nhau.\n\n**Tính chất:** Hình vuông có đầy đủ tính chất của hình chữ nhật và hình thoi.\n\n**Dấu hiệu nhận biết:**\n- Hình chữ nhật có hai cạnh kề bằng nhau.\n- Hình chữ nhật có hai đường chéo vuông góc với nhau.\n- Hình chữ nhật có một đường chéo là đường phân giác của một góc.\n- Hình thoi có một góc vuông.\n- Hình thoi có hai đường chéo bằng nhau.',
      diagram: {
        id: 'g8-v1-c3-l14-theory-2-diagram',
        placement: 'theory',
        variant: 'basic-shapes-regular-polygons',
        title: 'Hình vuông ABCD',
        alt: 'Hình vuông ABCD có bốn góc vuông và bốn cạnh bằng nhau.',
        notToScale: true,
        data: {
          shape: 'square'
        }
      }
    }
  ],
  remember: [
    'Hình vuông vừa là hình chữ nhật vừa là hình thoi.',
    'Giao điểm của hai đường chéo hình vuông cách đều bốn đỉnh và là tâm đối xứng của hình vuông.'
  ],
  tips: [
    'Để chứng minh hình vuông, lộ trình nhanh nhất thường là chứng minh tứ giác là hình chữ nhật rồi chỉ ra nó có 2 cạnh kề bằng nhau hoặc 2 đường chéo vuông góc. Hoặc chứng minh nó là hình thoi rồi chỉ ra có 1 góc vuông.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-l14-mistake-1',
      mistake: 'Chứng minh tứ giác có hai đường chéo vuông góc là hình thoi.',
      correction: 'Không đúng! Cánh diều hoặc tứ giác bất kỳ cũng có thể có hai đường chéo vuông góc. Tứ giác phải là **hình bình hành** có hai đường chéo vuông góc mới là hình thoi.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-l14-example-1',
      title: 'Tính độ dài đường chéo hình thoi',
      difficulty: 'understanding',
      problem: 'Cho hình thoi $ABCD$ có cạnh $AB = 5\\text{ cm}$, đường chéo $AC = 6\\text{ cm}$. Tính độ dài đường chéo $BD$.',
      steps: [
        'Bước 1: Gọi $O$ là giao điểm của hai đường chéo $AC$ và $BD$. Theo tính chất hình thoi, ta có $AC \\perp BD$ tại $O$, và $O$ là trung điểm của mỗi đường.',
        'Bước 2: Tính độ dài $OA$: $OA = AC / 2 = 6 / 2 = 3\\text{ cm}$.',
        'Bước 3: Áp dụng định lí Pythagore trong tam giác vuông $OAB$ vuông tại $O$: $OB^2 = AB^2 - OA^2 = 5^2 - 3^2 = 25 - 9 = 16$.',
        'Bước 4: Tính độ dài $OB$: $OB = \\sqrt{16} = 4\\text{ cm}$.',
        'Bước 5: Tính độ dài đường chéo $BD$: $BD = 2 \\times OB = 2 \\times 4 = 8\\text{ cm}$.'
      ],
      answer: '8 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-l14-sg-01',
      title: 'Độ dài cạnh và góc hình thoi',
      description: 'Tính toán các yếu tố đường chéo, cạnh, chu vi dựa trên Pythagore trong hình thoi.',
      difficulty: 'basic',
      templateIds: ['g8-v1-c3-l14-tpl-01', 'g8-v1-c3-l14-tpl-02']
    },
    {
      id: 'g8-v1-c3-l14-sg-02',
      title: 'Nhận biết hình thoi và hình vuông',
      description: 'Chứng minh tứ giác là hình thoi hoặc hình vuông qua các dấu hiệu nhận biết.',
      difficulty: 'understanding',
      templateIds: ['g8-v1-c3-l14-tpl-03', 'g8-v1-c3-l14-tpl-04', 'g8-v1-c3-l14-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v1-c3-l14-tpl-01',
      'g8-v1-c3-l14-tpl-02',
      'g8-v1-c3-l14-tpl-03',
      'g8-v1-c3-l14-tpl-04',
      'g8-v1-c3-l14-tpl-05'
    ]
  }
};
