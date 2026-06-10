import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C4Review: ExerciseTemplate[] = [
  {
    id: 'g7-c4-review-tpl-01',
    lessonId: 'g7-v1-c4-review',
    title: 'Tính góc nhọn còn lại của tam giác vuông',
    difficulty: 'basic',
    skillTags: ['tam-giac-vuong', 'tinh-toan-goc'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.int(10, 80);
      const other = 90 - angle;

      const correctText = `$${other}^\\circ$`;
      const distractors = [
        `$${angle}^\\circ$`,
        `$${180 - angle}^\\circ$`,
        `$${90}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-review-tpl-01',
        seed,
        prompt: `Cho tam giác $DEF$ vuông tại $D$. Biết góc $\\widehat{E} = ${angle}^\\circ$. Tính số đo góc $\\widehat{F}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong tam giác vuông, hai góc nhọn có tổng bằng 90 độ.`,
          steps: [
            `Vì tam giác $DEF$ vuông tại $D$, ta có:`,
            `$$\\widehat{E} + \\widehat{F} = 90^\\circ$$.`,
            `Thay số: $${angle}^\\circ + \\widehat{F} = 90^\\circ \\Rightarrow \\widehat{F} = 90^\\circ - ${angle}^\\circ = ${other}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-review-tpl-02',
    lessonId: 'g7-v1-c4-review',
    title: 'Độ dài cạnh tam giác đều từ chu vi',
    difficulty: 'basic',
    skillTags: ['tam-giac-deu', 'chu-vi', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.int(4, 15);
      const p = side * 3;

      const correctText = `$${side}\\text{ cm}$`;
      const distractors = [
        `$${p}\\text{ cm}$`,
        `$${side * 2}\\text{ cm}$`,
        `$${side - 1}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-review-tpl-02',
        seed,
        prompt: `Một tam giác đều có chu vi bằng $${p}\\text{ cm}$. Tính độ dài cạnh của tam giác đều đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Độ dài một cạnh tam giác đều bằng chu vi chia cho 3.`,
          steps: [
            `Tam giác đều có 3 cạnh bằng nhau. Công thức chu vi là: $P = 3a$.`,
            `Do đó, độ dài mỗi cạnh là:`,
            `$$a = \\frac{P}{3} = \\frac{${p}}{3} = ${side}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-review-tpl-03',
    lessonId: 'g7-v1-c4-review',
    title: 'Nhận biết bộ ba độ dài có thể tạo thành tam giác',
    difficulty: 'understanding',
    skillTags: ['bat-dang-thuc-tam-giac', 'nhan-biet'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const sets = [
        { vals: '2 cm, 3 cm, 4 cm', isTri: true, reason: 'Tổng hai cạnh nhỏ 2 + 3 = 5 > 4 (thỏa mãn bất đẳng thức tam giác).' },
        { vals: '1 cm, 2 cm, 3 cm', isTri: false, reason: 'Tổng hai cạnh nhỏ 1 + 2 = 3 không lớn hơn 3 (không thỏa mãn).' },
        { vals: '2 cm, 2 cm, 5 cm', isTri: false, reason: 'Tổng hai cạnh nhỏ 2 + 2 = 4 < 5 (không thỏa mãn).' }
      ];
      const target = sets.find(s => s.isTri)!;
      const distractors = sets.filter(s => !s.isTri).map(s => s.vals);

      return buildMultipleChoice({
        templateId: 'g7-c4-review-tpl-03',
        seed,
        prompt: `Bộ ba độ dài nào sau đây **có thể** là độ dài ba cạnh của một tam giác?`,
        correctText: target.vals,
        distractorTexts: distractors,
        solution: {
          summary: `Để bộ ba số dương a, b, c là độ dài ba cạnh của tam giác, tổng của hai số nhỏ hơn phải lớn hơn số lớn nhất.`,
          steps: [
            `Áp dụng bất đẳng thức tam giác cho từng bộ ba số:`,
            `– Bộ **${target.vals}**: ${target.reason}`,
            `– Các bộ còn lại không thỏa mãn điều kiện tổng hai cạnh phải lớn hơn cạnh thứ ba.`
          ],
          finalAnswer: target.vals
        }
      });
    }
  },
  {
    id: 'g7-c4-review-tpl-04',
    lessonId: 'g7-v1-c4-review',
    title: 'Độ dài cạnh bên tam giác vuông cân',
    difficulty: 'understanding',
    skillTags: ['tam-giac-vuong-can', 'pythagore'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.element([3, 4, 5]);
      const hypSq = 2 * a * a;

      const correctText = `$${a}\\text{ cm}$`;
      const distractors = [
        `$${hypSq}\\text{ cm}$`,
        `$${a * 2}\\text{ cm}$`,
        `$${a + 1}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-review-tpl-04',
        seed,
        prompt: `Cho tam giác $ABC$ vuông cân tại $A$ có độ dài cạnh huyền $BC^2 = ${hypSq}\\text{ cm}^2$. Tính độ dài cạnh bên $AB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng định lí Pythagore trong tam giác vuông cân để tìm cạnh bên.`,
          steps: [
            `Vì $\\triangle ABC$ vuông cân tại $A$ nên $AB = AC$.`,
            `Áp dụng định lí Pythagore: $BC^2 = AB^2 + AC^2 = 2AB^2$.`,
            `Thay số: $2AB^2 = ${hypSq} \\Rightarrow AB^2 = \\frac{${hypSq}}{2} = ${a * a}$.`,
            `Suy ra: $AB = \\sqrt{${a * a}} = ${a}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-review-tpl-05',
    lessonId: 'g7-v1-c4-review',
    title: 'Góc nhọn của tam giác vuông cân',
    difficulty: 'basic',
    skillTags: ['tam-giac-vuong-can', 'tinh-toan-goc'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$45^\\circ$`;
      const distractors = [
        `$60^\\circ$`,
        `$90^\\circ$`,
        `$30^\\circ$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c4-review-tpl-05',
        seed,
        prompt: `Mỗi góc nhọn của tam giác vuông cân có số đo bằng bao nhiêu độ?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tam giác vuông cân có hai góc nhọn phụ nhau và bằng nhau, nên mỗi góc bằng 45 độ.`,
          steps: [
            `Gọi tam giác là $ABC$ vuông cân tại $A$. Ta có $\\widehat{A} = 90^\\circ$ và $\\widehat{B} = \\widehat{C}$.`,
            `Vì $\\widehat{B} + \\widehat{C} = 90^\\circ$, ta suy ra: $\\widehat{B} = \\widehat{C} = \\frac{90^\\circ}{2} = 45^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
