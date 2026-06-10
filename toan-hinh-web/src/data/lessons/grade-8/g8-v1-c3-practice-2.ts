import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V1C3Practice2Content: LessonContent = {
  lessonId: 'g8-v1-c3-practice-2',
  title: 'Luyện tập chung trang 62',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập về tính chất và dấu hiệu nhận biết của hình bình hành và hình chữ nhật.'
  },
  objectives: [
    'Vận dụng các tính chất về cạnh, góc và đường chéo của hình bình hành và hình chữ nhật để chứng minh hoặc tính toán.'
  ],
  prerequisites: [
    'Đã học hình bình hành và hình chữ nhật.'
  ],
  theory: [
    {
      id: 'g8-v1-c3-practice-2-theory-1',
      title: 'Hình bình hành và hình chữ nhật',
      content: '– **Hình bình hành**: Có các cạnh đối song song và bằng nhau, các góc đối bằng nhau, hai đường chéo cắt nhau tại trung điểm của mỗi đường.\n– **Hình chữ nhật**: Có 4 góc vuông, hai đường chéo bằng nhau và cắt nhau tại trung điểm của mỗi đường.',
      diagram: {
        id: 'g8-v1-c3-practice-2-theory-1-diagram',
        placement: 'theory',
        variant: 'quadrilateral-types',
        title: 'Hình chữ nhật',
        alt: 'Hình chữ nhật ABCD có bốn góc vuông.',
        notToScale: true,
        data: {
          type: 'rectangle'
        }
      }
    }
  ],
  remember: [
    'Hình chữ nhật là một trường hợp đặc biệt của hình bình hành (có 1 góc vuông).'
  ],
  tips: [
    'Để chứng minh một tứ giác là hình chữ nhật, trước tiên hãy chứng minh nó là hình bình hành, sau đó chỉ ra có 1 góc vuông hoặc hai đường chéo bằng nhau.'
  ],
  commonMistakes: [
    {
      id: 'g8-v1-c3-practice-2-mistake-1',
      mistake: 'Coi hình bình hành bất kỳ là hình chữ nhật.',
      correction: 'Hình bình hành chỉ là hình chữ nhật nếu có ít nhất một góc bằng $90^\\circ$.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v1-c3-practice-2-example-1',
      title: 'Tính chất đường chéo hình bình hành',
      difficulty: 'understanding',
      problem: 'Cho hình bình hành $ABCD$ có giao điểm hai đường chéo là $O$. Biết $OA = 4\\text{ cm}$ và $OB = 5\\text{ cm}$. Tính độ dài đường chéo $AC$ và $BD$.',
      steps: [
        'Bước 1: Vì $ABCD$ là hình bình hành nên giao điểm $O$ của hai đường chéo là trung điểm của mỗi đường.',
        'Bước 2: Ta có: $AC = 2 \\times OA = 2 \\times 4 = 8\\text{ cm}$.',
        'Bước 3: Ta có: $BD = 2 \\times OB = 2 \\times 5 = 10\\text{ cm}$.'
      ],
      answer: 'AC = 8 cm, BD = 10 cm'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v1-c3-practice-2-sg-01',
      title: 'Tính chất hình bình hành và chữ nhật',
      description: 'Luyện tập các bài toán liên quan đến cạnh, góc và đường chéo.',
      difficulty: 'understanding',
      templateIds: ['g8-c3-practice-2-tpl-01', 'g8-c3-practice-2-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g8-c3-practice-2-tpl-01', 'g8-c3-practice-2-tpl-02', 'g8-c3-practice-2-tpl-03', 'g8-c3-practice-2-tpl-04', 'g8-c3-practice-2-tpl-05']
  }
};
