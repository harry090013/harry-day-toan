import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C9L33: ExerciseTemplate[] = [
  {
    id: 'g7-v2-c9-l33-tpl-01',
    lessonId: 'g7-v2-c9-l33',
    title: 'Kiểm tra bộ ba độ dài có thể tạo thành tam giác',
    difficulty: 'basic',
    skillTags: ['dieu-kien-tao-tam-giac', 'bat-dang-thuc-tam-giac'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // Generate two valid options and two invalid options, then randomly pick one configuration
      const sets = [
        { vals: [3, 4, 5], valid: true },
        { vals: [2, 4, 5], valid: true },
        { vals: [5, 6, 10], valid: true },
        { vals: [6, 8, 10], valid: true },
        { vals: [2, 3, 5], valid: false }, // 2 + 3 = 5 (collinear)
        { vals: [1, 2, 4], valid: false }, // 1 + 2 < 4
        { vals: [3, 3, 7], valid: false }, // 3 + 3 < 7
        { vals: [4, 5, 10], valid: false } // 4 + 5 < 10
      ];

      const validSets = sets.filter(s => s.valid);
      const invalidSets = sets.filter(s => !s.valid);

      const correctSet = rng.element(validSets);
      const distractors = rng.shuffle(invalidSets).slice(0, 3).map(s => `$${s.vals[0]}\\text{ cm}, ${s.vals[1]}\\text{ cm}, ${s.vals[2]}\\text{ cm}$`);

      const correctText = `$${correctSet.vals[0]}\\text{ cm}, ${correctSet.vals[1]}\\text{ cm}, ${correctSet.vals[2]}\\text{ cm}$`;

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l33-tpl-01',
        seed,
        prompt: `Bộ ba độ dài nào sau đây có thể là độ dài ba cạnh của một tam giác?`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g7-v2-c9-l33-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g7-triangle-angles',
          title: 'Tam giác ABC',
          alt: 'Hình tam giác ABC bất kỳ để minh họa bất đẳng thức tam giác.',
          notToScale: true,
          data: {
            labels: ['A', 'B', 'C']
          }
        },
        solution: {
          summary: `Để kiểm tra ba độ dài có lập thành tam giác hay không, ta so sánh cạnh lớn nhất với tổng hai cạnh còn lại. Nếu cạnh lớn nhất nhỏ hơn tổng hai cạnh kia thì lập thành tam giác.`,
          steps: [
            `Xét bộ số đáp án đúng: $${correctSet.vals[0]}, ${correctSet.vals[1]}, ${correctSet.vals[2]}$.`,
            `Cạnh lớn nhất là $${Math.max(...correctSet.vals)}$.`,
            `Tổng hai cạnh còn lại là: $${correctSet.vals.reduce((x, y) => x + y, 0) - Math.max(...correctSet.vals)}$.`,
            `Vì $${Math.max(...correctSet.vals)} < ${correctSet.vals.reduce((x, y) => x + y, 0) - Math.max(...correctSet.vals)}$ nên ba độ dài này lập thành một tam giác.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l33-tpl-02',
    lessonId: 'g7-v2-c9-l33',
    title: 'Tìm khoảng giới hạn cạnh thứ ba',
    difficulty: 'understanding',
    skillTags: ['gioi-han-canh', 'bat-dang-thuc-tam-giac'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(3, 7);
      const b = rng.int(a + 2, a + 6);

      const diff = b - a;
      const sum = a + b;

      const correctText = `$${diff}\\text{ cm} < x < ${sum}\\text{ cm}$`;
      const distractors = [
        `$${diff}\\text{ cm} \\le x \\le ${sum}\\text{ cm}$`,
        `$x < ${sum}\\text{ cm}$`,
        `$x > ${diff}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l33-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có độ dài hai cạnh là $AB = ${a}\\text{ cm}$ và $AC = ${b}\\text{ cm}$. Gọi độ dài cạnh $BC$ là $x\\text{ (cm)}$. Tìm khoảng giá trị đúng của $x$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng hệ quả của bất đẳng thức tam giác: hiệu hai cạnh bao giờ cũng nhỏ hơn cạnh thứ ba và cạnh thứ ba nhỏ hơn tổng hai cạnh.`,
          steps: [
            `Theo bất đẳng thức tam giác và hệ quả, độ dài cạnh $BC = x$ luôn thỏa mãn:`,
            `$$|AC - AB| < BC < AC + AB$$`,
            `Thay số vào biểu thức: $|${b} - ${a}| < x < ${b} + ${a} \\Rightarrow ${diff} < x < ${sum}$.`,
            `Vậy khoảng giá trị của $x$ là $${diff}\\text{ cm} < x < ${sum}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l33-tpl-03',
    lessonId: 'g7-v2-c9-l33',
    title: 'Xác định bộ ba độ dài không thể tạo thành tam giác',
    difficulty: 'basic',
    skillTags: ['dieu-kien-tao-tam-giac', 'bat-dang-thuc-tam-giac'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const sets = [
        { vals: [2, 3, 6], invalid: true },  // 2 + 3 < 6
        { vals: [3, 4, 8], invalid: true },  // 3 + 4 < 8
        { vals: [1, 5, 7], invalid: true },  // 1 + 5 < 7
        { vals: [2, 2, 5], invalid: true },  // 2 + 2 < 5
        { vals: [3, 4, 5], invalid: false },
        { vals: [4, 5, 6], invalid: false },
        { vals: [5, 5, 8], invalid: false },
        { vals: [6, 7, 9], invalid: false }
      ];

      const invalidSets = sets.filter(s => s.invalid);
      const validSets = sets.filter(s => !s.invalid);

      const correctSet = rng.element(invalidSets);
      const distractors = rng.shuffle(validSets).slice(0, 3).map(s => `$${s.vals[0]}\\text{ cm}, ${s.vals[1]}\\text{ cm}, ${s.vals[2]}\\text{ cm}$`);

      const correctText = `$${correctSet.vals[0]}\\text{ cm}, ${correctSet.vals[1]}\\text{ cm}, ${correctSet.vals[2]}\\text{ cm}$`;

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l33-tpl-03',
        seed,
        prompt: `Bộ ba độ dài nào sau đây **không thể** là độ dài ba cạnh của một tam giác?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu tổng hai cạnh ngắn hơn hoặc bằng cạnh còn lại, bộ ba số đó không thể tạo thành tam giác.`,
          steps: [
            `Xét bộ ba số $${correctSet.vals[0]}\\text{ cm}, ${correctSet.vals[1]}\\text{ cm}, ${correctSet.vals[2]}\\text{ cm}$.`,
            `Cạnh lớn nhất là $${Math.max(...correctSet.vals)}$.`,
            `Tổng hai cạnh còn lại là: $${correctSet.vals[0] + correctSet.vals[1] + correctSet.vals[2] - Math.max(...correctSet.vals)}$.`,
            `Vì tổng hai cạnh nhỏ hơn cạnh lớn nhất nên bất đẳng thức tam giác không thỏa mãn.`,
            `Do đó, bộ ba số này không thể lập thành một tam giác.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l33-tpl-04',
    lessonId: 'g7-v2-c9-l33',
    title: 'Tìm độ dài cạnh thứ ba trong tam giác cân',
    difficulty: 'understanding',
    skillTags: ['tam-giac-can', 'bat-dang-thuc-tam-giac', 'tim-canh'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      // Configs: two sides. One is small, one is big.
      // Small side a, Big side b. If a + a < b, then small side cannot be the repeating side.
      const config = rng.element([
        { a: 3, b: 7 },
        { a: 2, b: 5 },
        { a: 4, b: 9 }
      ]);

      const correctText = `$${config.b}\\text{ cm}$`;
      const distractors = [
        `$${config.a}\\text{ cm}$`,
        `$${config.a + config.b}\\text{ cm}$`,
        `$${config.b - config.a}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l33-tpl-04',
        seed,
        prompt: `Cho một tam giác cân có độ dài hai cạnh lần lượt là $${config.a}\\text{ cm}$ và $${config.b}\\text{ cm}$. Độ dài cạnh thứ ba của tam giác đó là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong tam giác cân, cạnh thứ ba phải bằng một trong hai cạnh đã cho và phải thỏa mãn bất đẳng thức tam giác.`,
          steps: [
            `Vì tam giác cân nên cạnh thứ ba chỉ có thể bằng $${config.a}\\text{ cm}$ hoặc $${config.b}\\text{ cm}$.`,
            `- Giả sử cạnh thứ ba bằng $${config.a}\\text{ cm}$. Khi đó ba cạnh của tam giác là: $${config.a}, ${config.a}, ${config.b}$. Ta thấy tổng hai cạnh là $${config.a} + ${config.a} = ${config.a * 2}\\text{ cm} < ${config.b}\\text{ cm}$ (mâu thuẫn với bất đẳng thức tam giác). Do đó, cạnh thứ ba không thể bằng $${config.a}\\text{ cm}$.`,
            `- Giả sử cạnh thứ ba bằng $${config.b}\\text{ cm}$. Khi đó ba cạnh của tam giác là: $${config.a}, ${config.b}, ${config.b}$. Ta thấy $${config.a} + ${config.b} = ${config.a + config.b} > ${config.b}$ (luôn đúng).`,
            `Kết luận: Độ dài cạnh thứ ba bắt buộc phải bằng $${config.b}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-v2-c9-l33-tpl-05',
    lessonId: 'g7-v2-c9-l33',
    title: 'Khẳng định đúng về bất đẳng thức tam giác',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'bat-dang-thuc-tam-giac'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const variables = rng.element([
        { sides: ['a', 'b', 'c'] },
        { sides: ['AB', 'AC', 'BC'] }
      ]);

      const s = variables.sides;
      let prompt = '';
      let correctText = '';
      let distractors: string[] = [];

      if (s[0] === 'a') {
        prompt = `Với ba cạnh $a, b, c$ của một tam giác, hệ thức nào sau đây luôn đúng?`;
        correctText = `$|b - c| < a < b + c$`;
        distractors = [
          `$b - c < a < b + c$`,
          `$|b - c| \\le a \\le b + c$`,
          `$b + c < a < |b - c|$`
        ];
      } else {
        prompt = `Trong tam giác $ABC$, bất đẳng thức nào sau đây luôn đúng?`;
        correctText = `$AB + AC > BC$`;
        distractors = [
          `$AB + AC = BC$`,
          `$AB + AC < BC$`,
          `$AB - AC > BC$`
        ];
      }

      return buildMultipleChoice({
        templateId: 'g7-v2-c9-l33-tpl-05',
        seed,
        prompt,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Bất đẳng thức tam giác phát biểu rằng tổng hai cạnh luôn lớn hơn cạnh thứ ba, và hiệu hai cạnh luôn nhỏ hơn cạnh thứ ba.`,
          steps: [
            `Xét tam giác với 3 cạnh:`,
            `- Tổng hai cạnh luôn lớn hơn cạnh còn lại: $a + b > c$, $a + c > b$, $b + c > a$.`,
            `- Hiệu hai cạnh luôn nhỏ hơn cạnh còn lại: $|b - c| < a$.`,
            `Gộp chung lại ta được hệ thức: $|b - c| < a < b + c$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
