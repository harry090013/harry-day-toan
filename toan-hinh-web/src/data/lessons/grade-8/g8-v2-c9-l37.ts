import { LessonContent } from '@/data/curriculum/types';

export const lessonG8V2C9L37Content: LessonContent = {
  lessonId: 'g8-v2-c9-l37',
  title: 'Bài 37. Hình đồng dạng',
  grade: 8,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g8-v2-c9',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 8,
    volume: 2,
    lessonNo: 37,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Khái niệm hình đồng dạng, hình đồng dạng phối cảnh.'
  },
  objectives: [
    'Nhận biết được các hình đồng dạng phối cảnh và tỉ số đồng dạng phối cảnh.',
    'Nhận biết được hai hình đồng dạng trong thực tế.',
    'Sử dụng khái niệm hình đồng dạng để giải quyết một số bài toán thực tế đơn giản.'
  ],
  prerequisites: [
    'Khái niệm tam giác đồng dạng, tỉ lệ đoạn thẳng.'
  ],
  theory: [
    {
      id: 'g8-v2-c9-l37-theory-1',
      title: '1. Hình đồng dạng phối cảnh',
      content: 'Một hình $\\mathcal{H}\'$ được gọi là đồng dạng phối cảnh với hình $\\mathcal{H}$ theo tâm phối cảnh $O$ và tỉ số đồng dạng $k$ ($k > 0$) nếu với mỗi điểm $M$ của hình $\\mathcal{H}$, điểm $M\'$ tương ứng của hình $\\mathcal{H}\'$ thuộc tia $OM$ sao cho $OM\' = k \\cdot OM$ (hoặc điểm $M\'$ thuộc tia đối của tia $OM$ sao cho $OM\' = k \\cdot OM$).',
      diagram: {
        id: 'g8-v2-c9-l37-theory-1-diagram',
        placement: 'theory',
        variant: 'g8-c9-similarity',
        title: 'Đồng dạng phối cảnh',
        alt: 'Hai tam giác đồng dạng phối cảnh với tâm O.',
        notToScale: true,
        data: {
          k: 0.5
        }
      }
    },
    {
      id: 'g8-v2-c9-l37-theory-2',
      title: '2. Hai hình đồng dạng',
      content: 'Hai hình $\\mathcal{H}$ và $\\mathcal{H}\'$ được gọi là đồng dạng với nhau nếu có một phép dời hình (hoặc một chuỗi phép dời hình và phép vị tự) biến hình này thành hình kia. Một cách trực quan, hai hình đồng dạng có hình dạng giống hệt nhau nhưng kích thước có thể khác nhau.',
      formulas: [
        '\\text{Hình } \\mathcal{H}\' \\backsim \\text{Hình } \\mathcal{H}'
      ]
    }
  ],
  remember: [
    'Các hình tròn luôn đồng dạng với nhau.',
    'Các hình vuông luôn đồng dạng với nhau.',
    'Các tam giác đều luôn đồng dạng với nhau.',
    'Tỉ số đồng dạng phối cảnh bằng tỉ số khoảng cách từ tâm phối cảnh đến hai điểm tương ứng.'
  ],
  tips: [
    'Khi tìm hình đồng dạng phối cảnh, hãy nối các đỉnh tương ứng của hai hình xem các đường thẳng đó có cùng đi qua một điểm $O$ (tâm phối cảnh) hay không.'
  ],
  commonMistakes: [
    {
      id: 'g8-v2-c9-l37-mistake-1',
      mistake: 'Cho rằng mọi hình chữ nhật đều đồng dạng với nhau.',
      correction: 'Hình chữ nhật chỉ đồng dạng khi tỉ số giữa chiều dài và chiều rộng của chúng bằng nhau. Các hình tròn, hình vuông luôn đồng dạng vì tỉ lệ các kích thước đặc trưng luôn không đổi.'
    }
  ],
  workedExamples: [
    {
      id: 'g8-v2-c9-l37-example-1',
      title: 'Xác định tính đồng dạng của đa giác',
      difficulty: 'basic',
      problem: 'Cho hai hình vuông $ABCD$ có cạnh $a = 4\\text{ cm}$ và $A\'B\'C\'D\'$ có cạnh $b = 6\\text{ cm}$. Hỏi hai hình vuông này có đồng dạng không? Nếu có, tỉ số đồng dạng là bao nhiêu?',
      steps: [
        'Bước 1: Tất cả các hình vuông đều có các góc bằng $90^\\circ$ và các cạnh bằng nhau.',
        'Bước 2: Tỉ lệ các cạnh tương ứng là: $\\frac{A\'B\'}{AB} = \\frac{6}{4} = 1.5$.',
        'Bước 3: Vì mọi góc tương ứng đều bằng nhau và các cạnh tương ứng tỉ lệ nên hai hình vuông này đồng dạng với nhau.',
        'Bước 4: Kết luận: Hai hình vuông đồng dạng với tỉ số đồng dạng $k = 1.5$ (hoặc $k = \\frac{3}{2}$).'
      ],
      answer: 'Đồng dạng, k = 1.5'
    }
  ],
  skillGroups: [
    {
      id: 'g8-v2-c9-l37-sg-01',
      title: 'Nhận biết hình đồng dạng và hình đồng dạng phối cảnh',
      description: 'Phân biệt giữa các hình đồng dạng nói chung và đồng dạng phối cảnh, xác định tâm phối cảnh.',
      difficulty: 'basic',
      templateIds: ['g8-v2-c9-l37-tpl-01', 'g8-v2-c9-l37-tpl-02']
    },
    {
      id: 'g8-v2-c9-l37-sg-02',
      title: 'Tỉ số đồng dạng phối cảnh',
      description: 'Tính toán khoảng cách và tỉ số đồng dạng của hình phối cảnh.',
      difficulty: 'understanding',
      templateIds: ['g8-v2-c9-l37-tpl-03', 'g8-v2-c9-l37-tpl-04', 'g8-v2-c9-l37-tpl-05']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 8,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g8-v2-c9-l37-tpl-01',
      'g8-v2-c9-l37-tpl-02',
      'g8-v2-c9-l37-tpl-03',
      'g8-v2-c9-l37-tpl-04',
      'g8-v2-c9-l37-tpl-05'
    ]
  }
};
