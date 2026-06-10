import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V1C5L22Content: LessonContent = {
  lessonId: 'g6-v1-c5-l22',
  title: 'Bài 22. Hình có tâm đối xứng',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-truc-quan',
  chapterId: 'g6-v1-c5',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 1,
    lessonNo: 22,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm tâm đối xứng trực quan, tâm đối xứng của các hình phẳng quen thuộc.'
  },
  objectives: [
    'Hiểu thế nào là một hình có tâm đối xứng bằng trực quan phép quay nửa vòng quanh một điểm.',
    'Xác định được tâm đối xứng của một số hình quen thuộc (hình bình hành, hình thoi, hình vuông, tròn, lục giác đều).',
    'Nhận biết được các hình có tâm đối xứng trong đời sống thực tế.'
  ],
  prerequisites: [
    'Hình có trục đối xứng (Bài 21).',
    'Trung điểm của đoạn thẳng (sẽ được củng cố).'
  ],
  theory: [
    {
      id: 'g6-v1-c5-l22-theory-1',
      title: '1. Hình có tâm đối xứng',
      content: 'Một hình có tâm đối xứng nếu có một điểm $O$ sao cho khi ta quay hình đó quanh điểm $O$ đúng nửa vòng ($180^\\circ$), hình thu được chồng khít lên hình ban đầu.\n\n– Điểm $O$ đó gọi là **tâm đối xứng** của hình.',
      diagram: {
        id: 'g6-v1-c5-l22-theory-1-diagram',
        placement: 'theory',
        variant: 'central-symmetry',
        title: 'Tâm đối xứng O',
        alt: 'Điểm A và điểm A\' đối xứng qua tâm O.',
        notToScale: true,
        data: {}
      }
    },
    {
      id: 'g6-v1-c5-l22-theory-2',
      title: '2. Tâm đối xứng của các hình học quen thuộc',
      content: '– **Đoạn thẳng**: Tâm đối xứng là trung điểm của đoạn thẳng đó.\n– **Hình bình hành / Hình chữ nhật / Hình thoi / Hình vuông**: Tâm đối xứng là giao điểm của hai đường chéo.\n– **Hình lục giác đều**: Tâm đối xứng là tâm $O$ (giao điểm của các đường chéo chính).\n– **Hình tròn**: Tâm đối xứng chính là tâm của đường tròn.\n– **Tam giác đều**: Không có tâm đối xứng nào.'
    }
  ],
  remember: [
    'Tam giác đều chỉ có trục đối xứng, **không có tâm đối xứng** (khi quay tam giác đều quanh trọng tâm nửa vòng, đỉnh sẽ hướng xuống dưới, không trùng khít với hình ban đầu).',
    'Hình bình hành chỉ có tâm đối xứng, không có trục đối xứng.'
  ],
  tips: [
    'Để kiểm tra một hình có tâm đối xứng hay không, hãy thử xoay ngược màn hình/trang giấy 180 độ xem hình vẽ trông có hoàn toàn giống hệt như cũ không.'
  ],
  commonMistakes: [
    {
      id: 'g6-v1-c5-l22-mistake-1',
      mistake: 'Cho rằng tam giác đều có tâm đối xứng là trọng tâm.',
      correction: 'Gấp giấy thì được, nhưng xoay 180 độ thì tam giác đều bị đảo ngược nên không chồng khít.'
    },
    {
      id: 'g6-v1-c5-l22-mistake-2',
      mistake: 'Nhầm lẫn giao điểm hai đường chéo hình thang cân là tâm đối xứng.',
      correction: 'Hình thang cân không có tâm đối xứng (quay 180 độ đáy nhỏ sẽ biến thành đáy lớn ở trên).'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v1-c5-l22-example-1',
      title: 'Nhận biết chữ cái có tâm đối xứng',
      difficulty: 'basic',
      problem: 'Trong các chữ cái in hoa sau, chữ nào có tâm đối xứng: $H, N, S, A$?',
      steps: [
        'Bước 1: Xét chữ $H$, $N$, $S$: Khi ta xoay ngược 180 độ, các chữ này trông vẫn hoàn toàn giữ nguyên hình dạng. Do đó chúng có tâm đối xứng.',
        'Bước 2: Xét chữ $A$: Khi xoay ngược 180 độ, đầu chữ A quay xuống dưới, không trùng với ban đầu. Chữ $A$ không có tâm đối xứng.',
        'Bước 3: Kết luận: Chữ $H, N, S$ có tâm đối xứng.'
      ],
      answer: 'Chữ H, N, S'
    },
    {
      id: 'g6-v1-c5-l22-example-2',
      title: 'Tìm tâm đối xứng của hình bình hành',
      difficulty: 'basic',
      problem: 'Tâm đối xứng của hình bình hành là điểm nào?',
      steps: [
        'Bước 1: Vẽ hình bình hành và vẽ hai đường chéo cắt nhau tại $O$.',
        'Bước 2: Giao điểm hai đường chéo $O$ chia mỗi đường chéo thành hai phần bằng nhau.',
        'Bước 3: Quay hình bình hành quanh $O$ một góc $180^\\circ$, các đỉnh đối diện sẽ đổi chỗ cho nhau và trùng khít.',
        'Bước 4: Vậy tâm đối xứng là giao điểm của hai đường chéo.'
      ],
      answer: 'Giao điểm của hai đường chéo',
      diagram: {
        id: 'g6-v1-c5-l22-example-2-diagram',
        placement: 'worked_example',
        variant: 'quadrilateral-types',
        title: 'Tâm đối xứng của hình bình hành',
        alt: 'Hình bình hành có tâm đối xứng O là giao điểm của hai đường chéo.',
        notToScale: true,
        data: {
          type: 'rhombus',
          a: 'A',
          b: 'BD',
          h: 'AC'
        }
      }
    },
    {
      id: 'g6-v1-c5-l22-example-3',
      title: 'So sánh tính đối xứng của tam giác đều và hình tròn',
      difficulty: 'understanding',
      problem: 'Nhận xét nào đúng về tính đối xứng của tam giác đều và hình tròn?',
      steps: [
        'Bước 1: Tam giác đều có 3 trục đối xứng nhưng không có tâm đối xứng.',
        'Bước 2: Hình tròn có vô số trục đối xứng và có 1 tâm đối xứng (tâm đường tròn).',
        'Bước 3: Hình tròn vừa có đối xứng trục vừa có đối xứng tâm, tam giác đều chỉ có đối xứng trục.'
      ],
      answer: 'Hình tròn vừa có đối xứng trục vừa có đối xứng tâm; tam giác đều chỉ có đối xứng trục'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v1-c5-l22-sg-01',
      title: 'Nhận biết hình có tâm đối xứng',
      description: 'Phân loại các hình học phẳng và chữ cái có chứa tâm đối xứng bằng phép quay nửa vòng.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c5-l22-tpl-nhan-biet-tam-dx']
    },
    {
      id: 'g6-v1-c5-l22-sg-02',
      title: 'Xác định tâm đối xứng',
      description: 'Chỉ ra vị trí chính xác của tâm đối xứng trong hình chữ nhật, thoi, bình hành, tròn, đoạn thẳng.',
      difficulty: 'basic',
      templateIds: ['g6-v1-c5-l22-tpl-vi-tri-tam-dx']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v1-c5-l22-tpl-nhan-biet-tam-dx',
      'g6-v1-c5-l22-tpl-vi-tri-tam-dx'
    ]
  }
};
