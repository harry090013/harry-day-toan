import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9L34: ExerciseTemplate[] = [
  {
    id: 'g7-v2-c9-l34-tpl-01',
    lessonId: 'g7-v2-c9-l34',
    title: 'Tính khoảng cách từ trọng tâm đến đỉnh khi biết trung tuyến',
    difficulty: 'basic',
    skillTags: ['trong-tam', 'duong-trung-tuyen', 'tinh-do-dai'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const am = rng.int(2, 6) * 3; // 6, 9, 12, 15, 18
      const ga = (am * 2) / 3;

      const correctText = `$${ga}\\text{ cm}$`;
      const distractors = [
        `$${am / 3}\\text{ cm}$`,
        `$${am - 1}\\text{ cm}$`,
        `$${ga + 2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l34-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ có trung tuyến $AM = ${am}\\text{ cm}$. Gọi $G$ là trọng tâm của tam giác. Tính độ dài đoạn thẳng $GA$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l34-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-triangle-concurrency',
          title: 'Trung tuyến và trọng tâm G',
          alt: 'Hình vẽ tam giác ABC với trọng tâm G nằm trên trung tuyến AM.',
          notToScale: true,
          data: {
            type: 'median'
          }
        },
        solution: {
          summary: `Trọng tâm của tam giác cách đỉnh một khoảng bằng 2/3 độ dài trung tuyến tương ứng.`,
          steps: [
            `Trọng tâm $G$ nằm trên trung tuyến $AM$, thỏa mãn đẳng thức tỉ lệ: $GA = \\frac{2}{3} AM$.`,
            `Thay số vào biểu thức: $GA = \\frac{2}{3} \\times ${am} = ${ga}\\text{ cm}$.`,
            `Vậy độ dài đoạn thẳng $GA$ là $${ga}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l34-tpl-02',
    lessonId: 'g7-v2-c9-l34',
    title: 'Tính chiều dài đường trung tuyến khi biết một phần',
    difficulty: 'understanding',
    skillTags: ['trong-tam', 'duong-trung-tuyen', 'tinh-do-dai'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const ga = rng.int(2, 6) * 2; // 4, 6, 8, 10, 12
      const am = (ga * 3) / 2;

      const correctText = `$${am}\\text{ cm}$`;
      const distractors = [
        `$${ga / 2}\\text{ cm}$`,
        `$${ga * 2}\\text{ cm}$`,
        `$${ga + 1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l34-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có trọng tâm $G$. Biết khoảng cách từ $G$ đến đỉnh $A$ là $GA = ${ga}\\text{ cm}$ (với $AM$ là trung tuyến). Tính độ dài đường trung tuyến $AM$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Độ dài trung tuyến gấp 1.5 lần (3/2) khoảng cách từ trọng tâm đến đỉnh.`,
          steps: [
            `Ta có mối quan hệ giữa trọng tâm và trung tuyến: $GA = \\frac{2}{3} AM$.`,
            `Suy ra độ dài trung tuyến $AM$ là: $AM = \\frac{3}{2} GA$.`,
            `Thay số vào biểu thức: $AM = \\frac{3}{2} \\times ${ga} = ${am}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l34-tpl-03',
    lessonId: 'g7-v2-c9-l34',
    title: 'Nhận diện tỉ lệ đúng về các đoạn thẳng của trọng tâm',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'trong-tam', 'duong-trung-tuyen'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const expressions = [
        {
          q: 'Cho trung tuyến $AM$ và trọng tâm $G$ của tam giác $ABC$. Khẳng định nào sau đây là đúng?',
          c: '$GA = 2GM$',
          d: ['$GM = 2GA$', '$GA = \\frac{1}{3} AM$', '$GM = \\frac{2}{3} AM$']
        },
        {
          q: 'Cho trung tuyến $AM$ và trọng tâm $G$ của tam giác $ABC$. Tỉ số $\\frac{GM}{AM}$ bằng bao nhiêu?',
          c: '$\\frac{1}{3}$',
          d: ['$\\frac{2}{3}$', '$\\frac{1}{2}$', '$2$']
        }
      ];

      const item = rng.element(expressions);
      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l34-tpl-03',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Trọng tâm $G$ chia trung tuyến $AM$ làm 3 phần bằng nhau: $GA$ chiếm 2 phần và $GM$ chiếm 1 phần.`,
          steps: [
            `Do đó:`,
            `- $GA = 2GM$ hoặc $GM = \\frac{1}{2} GA$.`,
            `- $GA = \\frac{2}{3} AM$.`,
            `- $GM = \\frac{1}{3} AM$.`
          ],
          finalAnswer: item.c
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l34-tpl-04',
    lessonId: 'g7-v2-c9-l34',
    title: 'Khoảng cách từ giao điểm ba phân giác đến ba cạnh',
    difficulty: 'understanding',
    skillTags: ['duong-phan-giac', 'khoang-cach', 'ly-thuyet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const dist = rng.int(2, 6);

      const correctText = `$${dist}\\text{ cm}$`;
      const distractors = [
        `$${dist * 2}\\text{ cm}$`,
        `$${dist / 2}\\text{ cm}$`,
        `Không xác định được`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l34-tpl-04',
        seed,
        prompt: `Cho tam giác $ABC$ có ba đường phân giác đồng quy tại điểm $I$. Biết khoảng cách từ $I$ đến cạnh $AB$ là $${dist}\\text{ cm}$. Tính khoảng cách từ $I$ đến cạnh $AC$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l34-tpl-04-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-c9-triangle-concurrency',
          title: 'Đồng quy ba phân giác',
          alt: 'Hình vẽ tam giác ABC với giao điểm I của 3 phân giác.',
          notToScale: true,
          data: {
            type: 'bisector'
          }
        },
        solution: {
          summary: `Giao điểm của ba đường phân giác trong tam giác cách đều ba cạnh.`,
          steps: [
            `Điểm $I$ là giao điểm của ba đường phân giác trong tam giác $ABC$.`,
            `Theo tính chất đồng quy của ba đường phân giác, giao điểm này cách đều ba cạnh của tam giác:`,
            `$$\\text{Khoảng cách từ } I \\text{ đến } AB = \\text{Khoảng cách từ } I \\text{ đến } AC = \\text{Khoảng cách từ } I \\text{ đến } BC$$`,
            `Vì khoảng cách từ $I$ đến cạnh $AB$ bằng $${dist}\\text{ cm}$ nên khoảng cách từ $I$ đến cạnh $AC$ cũng bằng $${dist}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l34-tpl-05',
    lessonId: 'g7-v2-c9-l34',
    title: 'Khẳng định đúng về đồng quy trong tam giác',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'trong-tam', 'giao-diem-phan-giac'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const statements = [
        {
          q: 'Giao điểm của ba đường trung tuyến trong một tam giác gọi là gì?',
          c: 'Trọng tâm',
          d: ['Trực tâm', 'Tâm ngoại tiếp', 'Tâm nội tiếp']
        },
        {
          q: 'Giao điểm của ba đường phân giác trong một tam giác có tính chất gì?',
          c: 'Cách đều ba cạnh của tam giác',
          d: [
            'Cách đều ba đỉnh của tam giác',
            'Chia mỗi đường thành tỉ số 2/3',
            'Trùng với đỉnh góc vuông'
          ]
        }
      ];

      const item = rng.element(statements);
      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l34-tpl-05',
        seed,
        prompt: item.q,
        correctText: item.c,
        distractorTexts: item.d,
        solution: {
          summary: `Đây là câu hỏi lý thuyết trực tiếp về tên gọi và tính chất của các điểm đồng quy trong tam giác.`,
          steps: [
            `- Giao điểm 3 đường trung tuyến gọi là **trọng tâm** của tam giác.`,
            `- Giao điểm 3 đường phân giác gọi là **tâm đường tròn nội tiếp**, có tính chất cách đều 3 cạnh.`
          ],
          finalAnswer: item.c
        }
      });
    }
  }
];
