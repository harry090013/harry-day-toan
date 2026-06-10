import { LessonContent } from '@/data/curriculum/types';

export const lessonG7V1C4Practice1Content: LessonContent = {
  lessonId: 'g7-v1-c4-practice-1',
  title: 'Luyện tập chung trang 68',
  grade: 7,
  track: 'toan-hinh',
  strand: 'hinh-hoc-phang',
  chapterId: 'g7-v1-c4',
  source: {
    textbook: 'Toán Kết nối tri thức',
    grade: 7,
    volume: 1,
    verifiedBy: 'online_toc',
    status: 'draft',
    notes: 'Luyện tập chung về ba trường hợp bằng nhau của tam giác thường (c-c-c, c-g-c, g-c-g).'
  },
  objectives: [
    'Vận dụng các trường hợp bằng nhau cạnh-cạnh-cạnh, cạnh-góc-cạnh, góc-cạnh-góc để chứng minh hai tam giác bằng nhau.',
    'Suy ra các cạnh tương ứng bằng nhau, các góc tương ứng bằng nhau từ hai tam giác bằng nhau.'
  ],
  prerequisites: [
    'Đã học ba trường hợp bằng nhau của hai tam giác.'
  ],
  theory: [
    {
      id: 'g7-v1-c4-practice-1-theory-1',
      title: 'Ba trường hợp bằng nhau của hai tam giác',
      content: '– **Cạnh - Cạnh - Cạnh (c-c-c)**: Ba cạnh của tam giác này bằng ba cạnh của tam giác kia.\n– **Cạnh - Góc - Cạnh (c-g-c)**: Hai cạnh và góc xen giữa của tam giác này bằng hai cạnh và góc xen giữa của tam giác kia.\n– **Góc - Cạnh - Góc (g-c-g)**: Một cạnh và hai góc kề của tam giác này bằng một cạnh và hai góc kề của tam giác kia.',
      diagram: {
        id: 'g7-v1-c4-practice-1-theory-1-diagram',
        placement: 'theory',
        variant: 'g7-triangle-congruence',
        title: 'Hai tam giác bằng nhau',
        alt: 'Hai tam giác ABC và A\'B\'C\' bằng nhau.',
        notToScale: true,
        data: {
          case: 'c-g-c'
        }
      }
    }
  ],
  remember: [
    'Đối với trường hợp c-g-c, góc bằng nhau bắt buộc phải xen giữa hai cạnh bằng nhau.',
    'Đối với trường hợp g-c-g, cạnh bằng nhau bắt buộc phải nằm giữa hai góc kề tương ứng.'
  ],
  tips: [
    'Khi chứng minh hai tam giác bằng nhau, hãy liệt kê đúng thứ tự các đỉnh tương ứng để viết biểu thức kết luận chính xác.'
  ],
  commonMistakes: [
    {
      id: 'g7-v1-c4-practice-1-mistake-1',
      mistake: 'Sử dụng góc không xen giữa cho trường hợp c-g-c.',
      correction: 'Góc so sánh phải là góc tạo bởi hai cạnh tương ứng đang xét.'
    }
  ],
  workedExamples: [
    {
      id: 'g7-v1-c4-practice-1-example-1',
      title: 'Chứng minh bằng nhau trường hợp c-c-c',
      difficulty: 'understanding',
      problem: 'Cho $\\triangle ABC$ và $\\triangle ADE$ có $AB = AD$, $AC = AE$ và $BC = DE$. Biết $\\widehat{ABC} = 50^\\circ$. Tính số đo góc $\\widehat{ADE}$.',
      steps: [
        'Bước 1: Xét $\\triangle ABC$ và $\\triangle ADE$, ta có: $AB = AD$, $AC = AE$, $BC = DE$ (theo giả thiết).',
        'Bước 2: Suy ra $\\triangle ABC = \\triangle ADE$ (c-c-c).',
        'Bước 3: Từ hai tam giác bằng nhau, các góc tương ứng bằng nhau: $\\widehat{ADE} = \\widehat{ABC} = 50^\\circ$.'
      ],
      answer: '50°'
    }
  ],
  skillGroups: [
    {
      id: 'g7-v1-c4-practice-1-sg-01',
      title: 'Các trường hợp bằng nhau của tam giác thường',
      description: 'Luyện tập chứng minh và tìm số đo cạnh/góc từ tam giác bằng nhau.',
      difficulty: 'understanding',
      templateIds: ['g7-c4-practice-1-tpl-01', 'g7-c4-practice-1-tpl-02']
    }
  ],
  practiceConfig: {
    defaultQuestionCount: 5,
    allowRandom: true,
    allowDifficultyFilter: true,
    templateIds: ['g7-c4-practice-1-tpl-01', 'g7-c4-practice-1-tpl-02', 'g7-c4-practice-1-tpl-03', 'g7-c4-practice-1-tpl-04', 'g7-c4-practice-1-tpl-05']
  }
};
