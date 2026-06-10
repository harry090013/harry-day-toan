import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C3ReviewContent: LessonContent = {
  lessonId: 'g7-v1-c3-review',
  title: 'Bài tập cuối chương 3',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c3',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Tổng hợp ôn tập cuối chương 3 về góc và đường thẳng song song.'
  },
  objectives: [
    'Hệ thống hóa toàn bộ kiến thức chương 3.',
    'Sử dụng phối hợp tính chất góc kề bù, đối đỉnh, tia phân giác và song song để giải quyết các bài toán hình học tổng hợp.'
  ],
  prerequisites: [
    'Đã học toàn bộ các bài trong chương 3.'
  ],
  theory: [
    {
      id: 'g7-v1-c3-review-theory-1',
      title: 'Tóm tắt kiến thức Chương 3',
      content: 'Chương này bao gồm:\n1. **Góc đặc biệt**: kề bù ($180^\\circ$), đối đỉnh (bằng nhau).\n2. **Tia phân giác**: chia góc làm 2 phần bằng nhau.\n3. **Hai đường thẳng song song**: dấu hiệu nhận biết (góc so le trong, đồng vị bằng nhau) và tính chất.\n4. **Định lí**: Là phát biểu toán học chứng minh là đúng dựa trên lập luận logic.',
      diagram: {
        id: 'g7-v1-c3-review-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-special-angles',
        title: 'Góc đối đỉnh',
        alt: 'Hai đường thẳng cắt nhau tạo thành các cặp góc đối đỉnh bằng nhau.',
        notToScale: true,
        data: {
          type: 'opposite'
        }
      }
    }
  ],
  remember: [
    'Hai đường thẳng phân biệt cùng song song với đường thẳng thứ ba thì song song với nhau.',
    'Một đường thẳng vuông góc với một trong hai đường thẳng song song thì nó cũng vuông góc với đường thẳng kia.'
  ],
  tips: [
    'Khi chứng minh định lí, giả thiết (GT) là những gì đề bài cho trước, kết luận (KL) là những gì cần chứng minh.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c3-review-mistake-1',
      mistake: 'Quên lập luận chi tiết vì sao hai đường thẳng song song trước khi dùng tính chất góc.',
      correction: 'Bắt buộc phải chứng minh hai đường thẳng song song trước, sau đó mới suy ra góc so le trong hoặc góc đồng vị bằng nhau.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c3-review-example-1',
      title: 'Tính góc tổng hợp',
      difficulty: 'understanding',
      problem: 'Cho hai đường thẳng $a \\parallel b$. Đường thẳng $c$ cắt $a$ tại $A$ sao cho $\\widehat{A_1} = 110^\\circ$. Tính góc $\\widehat{B_2}$ kề bù với góc đồng vị $\\widehat{B_1}$ ở đường thẳng $b$.',
      steps: [
        'Bước 1: Vì $a \\parallel b$ nên góc đồng vị $\\widehat{B_1} = \\widehat{A_1} = 110^\\circ$.',
        'Bước 2: Vì $\\widehat{B_2}$ kề bù với $\\widehat{B_1}$, ta có: $\\widehat{B_2} + \\widehat{B_1} = 180^\\circ$.',
        'Bước 3: Thay số: $\\widehat{B_2} = 180^\\circ - 110^\\circ = 70^\\circ$.'
      ],
      answer: '70°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c3-review-sg-01',
      title: 'Ôn tập tổng hợp chương 3',
      description: 'Các bài tập góc, tia phân giác và song song nâng cao.',
      difficulty: 'understanding',
      templateIds: ['g7-c3-review-tpl-01', 'g7-c3-review-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c3-review-tpl-01', 'g7-c3-review-tpl-02', 'g7-c3-review-tpl-03', 'g7-c3-review-tpl-04', 'g7-c3-review-tpl-05']
  }
};
