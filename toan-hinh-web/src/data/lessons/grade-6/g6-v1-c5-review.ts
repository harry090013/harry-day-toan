import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C5ReviewContent: LessonContent = {
  lessonId: 'g6-v1-c5-review',
  title: 'Bài tập cuối chương 5',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng hợp ôn tập cuối chương 5 về tính đối xứng trong tự nhiên.'
  },
  objectives: [
    'Hệ thống hóa lý thuyết về tính đối xứng: trục đối xứng và tâm đối xứng.',
    'Nhận biết số lượng trục đối xứng của tất cả các hình học phẳng phổ thông.',
    'Xác định tính đối xứng của các biểu tượng đời sống, biển báo giao thông.'
  ],
  prerequisites: [
    'Đã học toàn bộ lý thuyết về trục và tâm đối xứng của hình phẳng.'
  ],
  theory: [
    {
      id: 'g6-v1-c5-review-theory-1',
      title: 'Bảng tổng hợp tính đối xứng các hình quen thuộc',
      content: '– **Tam giác đều**: Có 3 trục đối xứng, không có tâm đối xứng.\n– **Hình vuông**: Có 4 trục đối xứng, có 1 tâm đối xứng.\n– **Hình chữ nhật**: Có 2 trục đối xứng (đi qua trung điểm các cạnh đối diện), có 1 tâm đối xứng.\n– **Hình thoi**: Có 2 trục đối xứng (hai đường chéo), có 1 tâm đối xứng.\n– **Hình bình hành**: Không có trục đối xứng (trong trường hợp chung), có 1 tâm đối xứng.\n– **Hình thang cân**: Có 1 trục đối xứng (đi qua trung điểm hai đáy), không có tâm đối xứng.\n– **Hình tròn**: Có vô số trục đối xứng (các đường thẳng đi qua tâm), có 1 tâm đối xứng.',
      diagram: {
        id: 'g6-v1-c5-review-theory-1-diagram',
        placement: 'theory',
        variant: 'central-symmetry',
        title: 'Tâm đối xứng hình vuông',
        alt: 'Hình vuông ABCD có giao điểm hai đường chéo là tâm đối xứng.',
        notToScale: true,
        data: {
          shape: 'square'
        }
      }
    }
  ],
  remember: [
    'Giao điểm các đường chéo chính của hình vuông, hình chữ nhật, hình thoi, hình bình hành, hình lục giác đều chính là tâm đối xứng của hình đó.',
    'Trục đối xứng của hình tròn là bất kỳ đường kính nào.'
  ],
  tips: [
    'Khi làm bài trắc nghiệm về số trục đối xứng, hãy vẽ phác thảo hình ra nháp và kẻ thử các đường chia đôi để tránh bỏ sót trục đối xứng chéo (như ở hình vuông).'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c5-review-mistake-1',
      mistake: 'Cho rằng hình bình hành luôn có trục đối xứng là hai đường chéo.',
      correction: 'Nếu gấp hình bình hành theo đường chéo, hai phần sẽ không khít nhau chéo góc. Hình bình hành tổng quát không có trục đối xứng nào cả.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c5-review-example-1',
      title: 'Đếm số trục đối xứng của hình lục giác đều',
      difficulty: 'understanding',
      problem: 'Hình lục giác đều có tất cả bao nhiêu trục đối xứng?',
      steps: [
        'Bước 1: Xác định các trục đối xứng đi qua hai đỉnh đối diện. Lục giác có 6 đỉnh chia làm 3 cặp đỉnh đối diện, tạo ra 3 trục đối xứng.',
        'Bước 2: Xác định các trục đối xứng đi qua trung điểm hai cạnh đối diện. Lục giác có 6 cạnh chia thành 3 cặp cạnh đối song song, tạo ra 3 trục đối xứng nữa.',
        'Bước 3: Tổng số trục đối xứng là: $3 + 3 = 6$ trục đối xứng.'
      ],
      answer: '6 trục đối xứng'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c5-review-sg-01',
      title: 'Ôn tập đối xứng chương 5',
      description: 'Bài tập ôn tập củng cố tổng hợp về trục và tâm đối xứng.',
      difficulty: 'understanding',
      templateIds: ['g6-c5-review-tpl-01', 'g6-c5-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g6-c5-review-tpl-01', 'g6-c5-review-tpl-02', 'g6-c5-review-tpl-03', 'g6-c5-review-tpl-04', 'g6-c5-review-tpl-05']
  }
};
