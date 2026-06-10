import { LessonContent } from '@/data/curriculum/types';

export const lessonG6V2C8L33Content: LessonContent = {
  lessonId: 'g6-v2-c8-l33',
  title: 'Bài 33. Điểm nằm giữa hai điểm. Tia',
  grade: 6,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g6-v2-c8',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 6,
    volume: 2,
    lessonNo: 33,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Biên soạn tóm tắt lý thuyết điểm nằm giữa, khái niệm tia, hai tia trùng/đối nhau.'
  },
  objectives: [
    'Hiểu khái niệm điểm nằm giữa hai điểm và áp dụng vào hình vẽ thẳng hàng.',
    'Nhận biết được tia, gốc của tia và cách đặt tên tia.',
    'Nhận biết được hai tia đối nhau và hai tia trùng nhau trong các hình vẽ cơ bản.'
  ],
  prerequisites: [
    'Khái niệm điểm và đường thẳng.',
    'Nhận biết ba điểm thẳng hàng.'
  ],
  theory: [
    {
      id: 'g6-v2-c8-l33-theory-1',
      title: '1. Điểm nằm giữa hai điểm',
      content: 'Cho ba điểm thẳng hàng $A, B, C$ nằm trên đường thẳng $d$. Nếu ta đi dọc theo đường thẳng $d$ từ $A$ đến $C$ mà đi qua $B$, ta nói **điểm $B$ nằm giữa hai điểm $A$ và $C$**.\n\n*Chú ý*: Trong ba điểm thẳng hàng, luôn có duy nhất một điểm nằm giữa hai điểm còn lại.',
    },
    {
      id: 'g6-v2-c8-l33-theory-2',
      title: '2. Khái niệm tia',
      content: 'Hình gồm điểm $O$ và một phần đường thẳng bị chia ra bởi điểm $O$ được gọi là một **tia gốc $O$** (còn gọi là nửa đường thẳng gốc $O$).\n\n– Để đọc hoặc đặt tên tia, ta đọc tên gốc trước rồi đến một chữ cái thường hoặc chữ cái in hoa (ví dụ: tia $Ox$, tia $Oy$, hoặc tia $OA$ nếu có điểm $A$ trên tia).',
      diagram: {
        id: 'g6-v2-c8-l33-theory-2-diagram',
        placement: 'theory',
        variant: 'ray',
        title: 'Tia Ox',
        alt: 'Tia Ox bắt đầu từ gốc O và kéo dài qua x.',
        notToScale: true,
        data: {
          origin: 'O',
          label: 'x',
          points: [
            { label: 'A', x: 160, y: 60 }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l33-theory-3',
      title: '3. Hai tia đối nhau và hai tia trùng nhau',
      content: '– **Hai tia đối nhau**: Là hai tia chung gốc và cùng tạo thành một đường thẳng. Ví dụ, nếu điểm $O$ nằm giữa hai điểm $A$ và $B$, thì tia $OA$ và tia $OB$ là hai tia đối nhau.\n– **Hai tia trùng nhau**: Là hai tia chung gốc và tia này chứa tia kia. Ví dụ, nếu điểm $M$ nằm trên tia $Ox$ (khác gốc $O$), thì tia $OM$ và tia $Ox$ trùng nhau.',
    }
  ],
  remember: [
    'Luôn đọc tên gốc của tia trước, chữ cái phía sau sau: ví dụ tia $Ox$ có gốc là $O$, tia $Ax$ có gốc là $A$.',
    'Hai tia đối nhau bắt buộc phải có hai điều kiện: **chung gốc** và **tạo thành một đường thẳng**.',
    'Tia $AB$ và tia $BA$ là hai tia hoàn toàn khác nhau vì chúng không chung gốc.'
  ],
  tips: [
    'Để vẽ hai tia đối nhau, hãy vẽ một đường thẳng, chấm một điểm ở giữa làm gốc chung. Hai nửa đường thẳng hai bên chính là hai tia đối nhau.',
    'Tia trùng nhau giống như hai người đi cùng một hướng xuất phát từ một vạch gốc.'
  ],
  commonMistakes: [
    {
      id: 'g6-v2-c8-l33-mistake-1',
      mistake: 'Cho rằng hai tia song song không chung gốc là hai tia đối nhau.',
      correction: 'Hai tia đối nhau bắt buộc phải chung gốc và cùng nằm trên một đường thẳng.'
    },
    {
      id: 'g6-v2-c8-l33-mistake-2',
      mistake: 'Nhầm lẫn hướng đi khi đọc tên tia, ví dụ đọc tia $AB$ thành tia $BA$.',
      correction: 'Tia $AB$ đi từ $A$ qua $B$ kéo dài mãi. Tia $BA$ đi từ $B$ qua $A$ kéo dài mãi. Chúng có gốc khác nhau nên khác nhau.'
    }
  ],
  workedExamples: [
    {
      id: 'g6-v2-c8-l33-example-1',
      title: 'Nhận biết điểm nằm giữa hai điểm',
      difficulty: 'basic',
      problem: 'Cho ba điểm thẳng hàng $X, Y, Z$ nằm trên đường thẳng. Biết rằng $Y$ nằm giữa $X$ và $Z$. Khẳng định nào sau đây là sai?',
      steps: [
        'Bước 1: Vì $Y$ nằm giữa $X$ và $Z$, nên $X$ và $Z$ nằm ở hai phía khác nhau đối với điểm $Y$.',
        'Bước 2: Điểm $X$ không nằm giữa $Y$ và $Z$ (khẳng định này đúng).',
        'Bước 3: Chỉ có duy nhất một điểm nằm giữa hai điểm còn lại (là $Y$). Nếu khẳng định nói $X$ nằm giữa $Y$ và $Z$ thì khẳng định đó là sai.'
      ],
      answer: 'X nằm giữa Y và Z là khẳng định sai'
    },
    {
      id: 'g6-v2-c8-l33-example-2',
      title: 'Tìm cặp tia đối nhau trên đường thẳng',
      difficulty: 'understanding',
      problem: 'Trên đường thẳng $xy$, lấy một điểm $O$. Kể tên các cặp tia đối nhau gốc $O$ trên hình vẽ.',
      steps: [
        'Bước 1: Điểm $O$ chia đường thẳng $xy$ thành hai nửa đường thẳng: một nửa chứa hướng $x$, một nửa chứa hướng $y$.',
        'Bước 2: Hai nửa này chính là hai tia $Ox$ và $Oy$.',
        'Bước 3: Vì hai tia này chung gốc $O$ và tạo thành đường thẳng $xy$ nên chúng là hai tia đối nhau.'
      ],
      answer: 'Tia Ox và tia Oy',
      diagram: {
        id: 'g6-v2-c8-l33-example-2-diagram',
        placement: 'worked_example',
        variant: 'between-points',
        title: 'Tia Ox và Oy đối nhau',
        alt: 'Đường thẳng xy có điểm O nằm giữa, tạo thành hai tia đối nhau Ox và Oy.',
        notToScale: true,
        data: {
          points: [
            { label: 'x', x: 40, y: 60 },
            { label: 'O', x: 160, y: 60 },
            { label: 'y', x: 280, y: 60 }
          ]
        }
      }
    },
    {
      id: 'g6-v2-c8-l33-example-3',
      title: 'Nhận biết hai tia trùng nhau',
      difficulty: 'understanding',
      problem: 'Cho tia $Ox$. Trên tia $Ox$ lấy điểm $A$ khác $O$. Tia $OA$ và tia $Ox$ là hai tia như thế nào?',
      steps: [
        'Bước 1: Hai tia này có chung gốc là điểm $O$.',
        'Bước 2: Điểm $A$ nằm trên tia $Ox$, nên hướng đi từ $O$ qua $A$ trùng với hướng đi của tia $Ox$.',
        'Bước 3: Suy ra tia $OA$ và tia $Ox$ là hai tia trùng nhau.'
      ],
      answer: 'Tia OA và tia Ox trùng nhau'
    }
  ],
  skillGroups: [
    {
      id: 'g6-v2-c8-l33-sg-01',
      title: 'Xác định điểm nằm giữa',
      description: 'Nhận biết điểm nằm giữa trong bộ ba điểm thẳng hàng trên các dạng hình vẽ khác nhau.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l33-tpl-diem-nam-giua']
    },
    {
      id: 'g6-v2-c8-l33-sg-02',
      title: 'Đọc tên tia và xác định gốc tia',
      description: 'Nhận dạng cấu trúc của một tia, xác định gốc và đọc đúng ký hiệu.',
      difficulty: 'basic',
      templateIds: ['g6-v2-c8-l33-tpl-doc-ten-tia']
    },
    {
      id: 'g6-v2-c8-l33-sg-03',
      title: 'Phân biệt tia trùng và tia đối',
      description: 'Xác định nhanh cặp tia trùng nhau hoặc đối nhau từ các điểm thẳng hàng cho trước.',
      difficulty: 'understanding',
      templateIds: ['g6-v2-c8-l33-tpl-tia-trung-doi']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 10,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: [
      'g6-v2-c8-l33-tpl-diem-nam-giua',
      'g6-v2-c8-l33-tpl-doc-ten-tia',
      'g6-v2-c8-l33-tpl-tia-trung-doi'
    ]
  }
};
