import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C5Practice1Content: LessonContent = {
  lessonId: 'g6-v1-c5-practice-1',
  title: 'Luyện tập chung trang 108',
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
    notes: 'Luyện tập chung về trục đối xứng và tâm đối xứng của hình phẳng.'
  },
  objectives: [
    'Phân biệt được hình có trục đối xứng và hình có tâm đối xứng trong thực tiễn.',
    'Xác định số trục đối xứng và vị trí của tâm đối xứng trong các hình phẳng cơ bản.',
    'Nhận biết tính đối xứng trong các chữ cái, con số và biểu tượng.'
  ],
  prerequisites: [
    'Đã học lý thuyết về Trục đối xứng và Tâm đối xứng.'
  ],
  theory: [
    {
      id: 'g6-v1-c5-practice-1-theory-1',
      title: 'Tóm tắt trục đối xứng và tâm đối xứng',
      content: '– **Trục đối xứng**: Một đường thẳng chia hình thành hai phần mà nếu ta "gấp" hình theo đường thẳng đó thì hai phần trùng khít lên nhau.\n– **Tâm đối xứng**: Một điểm $O$ sao cho khi ta "quay" hình nửa vòng (quay $180^\\circ$) quanh $O$ thì hình thu được trùng khít với hình ban đầu.',
      diagram: {
        id: 'g6-v1-c5-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'axis-symmetry',
        title: 'Ví dụ về trục đối xứng',
        alt: 'Đường thẳng chia đôi hình tam giác cân.',
        notToScale: true,
        data: {
          shape: 'triangle-isosceles'
        }
      }
    }
  ],
  remember: [
    'Có hình chỉ có trục đối xứng (ví dụ: tam giác đều, hình thang cân).',
    'Có hình chỉ có tâm đối xứng (ví dụ: hình bình hành).',
    'Có hình vừa có trục đối xứng vừa có tâm đối xứng (ví dụ: hình tròn, hình vuông, hình chữ nhật, hình thoi, hình lục giác đều).'
  ],
  tips: [
    'Để kiểm tra tâm đối xứng, hãy xoay ngược trang giấy $180^\\circ$ (lộn ngược đầu). Nếu hình dáng không thay đổi thì hình đó có tâm đối xứng.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c5-practice-1-mistake-1',
      mistake: 'Coi hình tam giác đều hoặc hình thang cân có tâm đối xứng.',
      correction: 'Khi xoay tam giác đều hoặc hình thang cân đi $180^\\circ$ thì đỉnh nhọn hướng lên trên sẽ quay xuống dưới, hình không trùng khít với ban đầu. Nên chúng không có tâm đối xứng.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c5-practice-1-example-1',
      title: 'Xác định tính đối xứng của chữ cái',
      difficulty: 'basic',
      problem: 'Trong các chữ cái in hoa sau: H, A, N, O, I. Chữ nào vừa có trục đối xứng vừa có tâm đối xứng?',
      steps: [
        'Bước 1: Xét chữ H: có 2 trục đối xứng (ngang, dọc) và có tâm đối xứng ở giao điểm.',
        'Bước 2: Xét chữ A: có 1 trục đối xứng dọc, không có tâm đối xứng.',
        'Bước 3: Xét chữ N: không có trục đối xứng, có tâm đối xứng.',
        'Bước 4: Xét chữ O: có vô số trục đối xứng và có tâm đối xứng ở trung tâm.',
        'Bước 5: Xét chữ I: có 2 trục đối xứng (ngang, dọc) và có tâm đối xứng.',
        'Bước 6: Kết luận: Các chữ vừa có trục đối xứng vừa có tâm đối xứng là H, O, I.'
      ],
      answer: 'H, O, I'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c5-practice-1-sg-01',
      title: 'Nhận dạng tính đối xứng tổng hợp',
      description: 'Phân loại hình có trục đối xứng, tâm đối xứng hoặc cả hai.',
      difficulty: 'understanding',
      templateIds: ['g6-c5-practice-1-tpl-01', 'g6-c5-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g6-c5-practice-1-tpl-01', 'g6-c5-practice-1-tpl-02', 'g6-c5-practice-1-tpl-03', 'g6-c5-practice-1-tpl-04', 'g6-c5-practice-1-tpl-05']
  }
};
