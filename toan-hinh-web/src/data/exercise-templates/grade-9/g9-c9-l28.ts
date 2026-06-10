import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C9L28: ExerciseTemplate[] = [
  {
    id: 'g9-v2-c9-l28-tpl-01',
    lessonId: 'g9-v2-c9-l28',
    title: 'Xác định tâm đường tròn ngoại tiếp tam giác',
    difficulty: 'basic',
    skillTags: ['duong-tron-ngoai-tiep', 'tam-duong-tron', 'ly-thuyet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Giao điểm của ba đường trung trực';
      const distractors = [
        'Giao điểm của ba đường phân giác',
        'Giao điểm của ba đường trung tuyến',
        'Giao điểm của ba đường cao'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l28-tpl-01',
        seed,
        prompt: `Tâm của đường tròn ngoại tiếp tam giác bất kỳ là gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tâm đường tròn ngoại tiếp tam giác cách đều ba đỉnh, do đó nó là giao điểm ba đường trung trực của tam giác.`,
          steps: [
            `Điểm cách đều hai đỉnh $A$ và $B$ nằm trên trung trực của $AB$.`,
            `Do đó, điểm cách đều cả ba đỉnh $A, B, C$ phải là giao điểm của ba đường trung trực của tam giác $ABC$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l28-tpl-02',
    lessonId: 'g9-v2-c9-l28',
    title: 'Xác định tâm đường tròn nội tiếp tam giác',
    difficulty: 'basic',
    skillTags: ['duong-tron-noi-tiep', 'tam-duong-tron', 'ly-thuyet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Giao điểm của ba đường phân giác trong';
      const distractors = [
        'Giao điểm của ba đường trung trực',
        'Giao điểm của ba đường trung tuyến',
        'Giao điểm của ba đường cao'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l28-tpl-02',
        seed,
        prompt: `Tâm của đường tròn nội tiếp tam giác bất kỳ là gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tâm đường tròn nội tiếp cách đều ba cạnh, do đó là giao điểm của ba đường phân giác trong.`,
          steps: [
            `Điểm cách đều hai cạnh bên nằm trên tia phân giác của góc tạo bởi hai cạnh đó.`,
            `Tâm nội tiếp tiếp xúc ba cạnh, tức là cách đều ba cạnh, do đó là giao điểm ba đường phân giác trong.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l28-tpl-03',
    lessonId: 'g9-v2-c9-l28',
    title: 'Tính bán kính ngoại tiếp và nội tiếp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['tam-giac-deu', 'ban-kinh-noi-tiep', 'ban-kinh-ngoai-tiep', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.element([6, 12, 18]);
      // R_ngoai = side * sqrt(3)/3. E.g. side=6 -> R = 2*sqrt(3). r_noi = R/2 = sqrt(3).
      // Let's ask for r_noi.
      const correctText = `$${side === 6 ? '\\sqrt{3}' : side === 12 ? '2\\sqrt{3}' : '3\\sqrt{3}'}\\text{ cm}$`;
      const distractors = [
        `$${side === 6 ? '2\\sqrt{3}' : side === 12 ? '4\\sqrt{3}' : '6\\sqrt{3}'}\\text{ cm}$`,
        `$${side}\\text{ cm}$`,
        `$${side/2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l28-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ đều có cạnh bằng $${side}\\text{ cm}$. Tính bán kính $r$ của đường tròn nội tiếp tam giác $ABC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong tam giác đều, bán kính nội tiếp bằng 1/3 chiều cao.`,
          steps: [
            `Chiều cao của tam giác đều cạnh $a = ${side}\\text{ cm}$ là:`,
            `$$h = \\frac{a\\sqrt{3}}{2} = \\frac{${side}\\sqrt{3}}{2} = ${side/2}\\sqrt{3}\\text{ cm}$$`,
            `Trong tam giác đều, tâm đường tròn nội tiếp trùng với trọng tâm, do đó bán kính nội tiếp $r$ bằng $\\frac{1}{3}$ chiều cao:`,
            `$$r = \\frac{1}{3} h = \\frac{1}{3} \\cdot ${side/2}\\sqrt{3} = ${side === 6 ? '\\sqrt{3}' : side === 12 ? '2\\sqrt{3}' : '3\\sqrt{3}'}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l28-tpl-04',
    lessonId: 'g9-v2-c9-l28',
    title: 'Tính bán kính nội tiếp tam giác thường bằng công thức diện tích',
    difficulty: 'understanding',
    skillTags: ['ban-kinh-noi-tiep', 'dien-tich', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // S = p * r. Let S = 24, p = 12 -> r = 2.
      // S = 30, p = 15 -> r = 2.
      // S = 48, p = 16 -> r = 3.
      const pair = rng.element([
        { s: 24, p: 12, r: 2 },
        { s: 30, p: 15, r: 2 },
        { s: 48, p: 16, r: 3 }
      ]);

      const correctText = `$${pair.r}\\text{ cm}$`;
      const distractors = [
        `$${pair.r + 1}\\text{ cm}$`,
        `$${pair.s / 2}\\text{ cm}$`,
        `$${pair.p / 2}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l28-tpl-04',
        seed,
        prompt: `Một tam giác có diện tích bằng $${pair.s}\\text{ cm}^2$ và nửa chu vi là $${pair.p}\\text{ cm}$. Tính bán kính $r$ của đường tròn nội tiếp tam giác đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng công thức liên hệ diện tích S = p * r.`,
          steps: [
            `Ta có công thức tính diện tích tam giác theo bán kính nội tiếp:`,
            `$$S = p \\cdot r$$`,
            `Thay số: $${pair.s} = ${pair.p} \\cdot r$.`,
            `Bán kính nội tiếp là: $r = \\frac{${pair.s}}{${pair.p}} = ${pair.r}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c9-l28-tpl-05',
    lessonId: 'g9-v2-c9-l28',
    title: 'Tính tỉ số bán kính ngoại tiếp và nội tiếp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['tam-giac-deu', 'ti-so-ban-kinh'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$2$`;
      const distractors = [
        `$\\sqrt{2}$`,
        `$\\sqrt{3}$`,
        `$1.5$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v2-c9-l28-tpl-05',
        seed,
        prompt: `Tỉ số giữa bán kính đường tròn ngoại tiếp $R$ và bán kính đường tròn nội tiếp $r$ của một tam giác đều là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong tam giác đều, R = 2/3 h và r = 1/3 h, do đó R/r = 2.`,
          steps: [
            `Bán kính ngoại tiếp: $R = \\frac{2}{3} h$.`,
            `Bán kính nội tiếp: $r = \\frac{1}{3} h$.`,
            `Tỉ số: $\\frac{R}{r} = \\frac{2/3}{1/3} = 2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
