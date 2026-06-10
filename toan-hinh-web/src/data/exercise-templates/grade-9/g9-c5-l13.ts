import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5L13: ExerciseTemplate[] = [
  {
    id: 'g9-v1-c5-l13-tpl-01',
    lessonId: 'g9-v1-c5-l13',
    title: 'Xác định vị trí tương đối của điểm đối với đường tròn',
    difficulty: 'basic',
    skillTags: ['duong-tron-mo-dau', 'vi-tri-tuong-doi'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const radius = rng.element([5, 6, 8, 10]);
      const offset = rng.element([-2, 0, 3]);
      const distance = radius + offset;

      let posText = '';
      if (offset < 0) posText = 'Nằm trong đường tròn';
      else if (offset === 0) posText = 'Nằm trên (thuộc) đường tròn';
      else posText = 'Nằm ngoài đường tròn';

      const correctText = posText;
      const distractors = ['Nằm trong đường tròn', 'Nằm trên (thuộc) đường tròn', 'Nằm ngoài đường tròn'].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l13-tpl-01',
        seed,
        prompt: `Cho đường tròn $(O; ${radius}\\text{ cm})$ và một điểm $A$ cách tâm $O$ một khoảng bằng $${distance}\\text{ cm}$. Xác định vị trí của điểm $A$ đối với đường tròn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `So sánh khoảng cách từ điểm đến tâm với bán kính.`,
          steps: [
            `Bán kính đường tròn là $R = ${radius}\\text{ cm}$.`,
            `Khoảng cách từ điểm $A$ đến tâm $O$ là $OA = ${distance}\\text{ cm}$.`,
            distance < radius
              ? `Ta thấy $OA = ${distance} < ${radius} = R$. Vậy điểm $A$ nằm trong đường tròn.`
              : distance === radius
              ? `Ta thấy $OA = ${distance} = R$. Vậy điểm $A$ nằm trên (thuộc) đường tròn.`
              : `Ta thấy $OA = ${distance} > ${radius} = R$. Vậy điểm $A$ nằm ngoài đường tròn.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l13-tpl-02',
    lessonId: 'g9-v1-c5-l13',
    title: 'Khẳng định về tính chất đối xứng của đường tròn',
    difficulty: 'basic',
    skillTags: ['duong-tron-mo-dau', 'tinh-doi-xung'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Tâm đối xứng là tâm đường tròn, trục đối xứng là mọi đường kính';
      const distractors = [
        'Tâm đối xứng là mọi điểm trên đường tròn',
        'Đường tròn không có trục đối xứng',
        'Trục đối xứng chỉ gồm hai trục thẳng đứng và nằm ngang'
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l13-tpl-02',
        seed,
        prompt: `Phát biểu nào sau đây là đúng về tính đối xứng của đường tròn?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đường tròn có 1 tâm đối xứng là tâm của nó và vô số trục đối xứng là các đường kính của nó.`,
          steps: [
            `Mọi đường thẳng đi qua tâm $O$ của đường tròn đều chia nó thành hai phần bằng nhau, do đó là trục đối xứng.`,
            `Phép đối xứng qua tâm $O$ biến mọi điểm thuộc đường tròn thành điểm thuộc chính đường tròn đó.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l13-tpl-03',
    lessonId: 'g9-v1-c5-l13',
    title: 'Bán kính đường tròn ngoại tiếp tam giác vuông',
    difficulty: 'understanding',
    skillTags: ['duong-tron-ngoai-tiep', 'tam-giac-vuong', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { a: 6, b: 8, c: 10, r: 5 },
        { a: 5, b: 12, c: 13, r: 6.5 },
        { a: 9, b: 12, c: 15, r: 7.5 }
      ]);

      const correctText = `$${triple.r.toString().replace('.', ',')}\\text{ cm}$`;
      const distractors = [
        `$${triple.c}\\text{ cm}$`,
        `$${triple.a}\\text{ cm}$`,
        `$${(triple.a + triple.b)/2}\\text{ cm}$`
      ].map(t => t.replace('.', ',')).filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l13-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có hai cạnh góc vuông là $AB = ${triple.a}\\text{ cm}$ và $AC = ${triple.b}\\text{ cm}$. Tính bán kính đường tròn ngoại tiếp tam giác $ABC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tâm đường tròn ngoại tiếp tam giác vuông là trung điểm cạnh huyền, bán kính bằng nửa cạnh huyền.`,
          steps: [
            `Tính độ dài cạnh huyền $BC$ bằng Pythagore:`,
            `$$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{${triple.a}^2 + ${triple.b}^2} = ${triple.c}\\text{ cm}$$`,
            `Bán kính đường tròn ngoại tiếp tam giác vuông bằng một nửa cạnh huyền:`,
            `$$R = \\frac{BC}{2} = \\frac{${triple.c}}{2} = ${triple.r}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l13-tpl-04',
    lessonId: 'g9-v1-c5-l13',
    title: 'Đường tròn đi qua 4 đỉnh của hình chữ nhật',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'hinh-chu-nhat'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const width = 6;
      const height = 8;
      const diag = 10;
      const r = 5;

      const correctText = `$${r}\\text{ cm}$`;
      const distractors = [
        `$10\\text{ cm}$`,
        `$7\\text{ cm}$`,
        `$3\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l13-tpl-04',
        seed,
        prompt: `Cho hình chữ nhật $ABCD$ có $AB = 6\\text{ cm}$ và $BC = 8\\text{ cm}$. Bán kính của đường tròn đi qua cả bốn đỉnh $A, B, C, D$ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình chữ nhật có bốn đỉnh nằm trên đường tròn nhận giao điểm hai đường chéo làm tâm, và bán kính bằng nửa đường chéo.`,
          steps: [
            `Đường chéo $AC$ của hình chữ nhật: $AC = \\sqrt{AB^2 + BC^2} = \\sqrt{6^2 + 8^2} = 10\\text{ cm}$.`,
            `Giao điểm hai đường chéo cách đều bốn đỉnh, do đó là tâm đường tròn đi qua bốn đỉnh.`,
            `Bán kính đường tròn: $R = \\frac{AC}{2} = \\frac{10}{2} = 5\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l13-tpl-05',
    lessonId: 'g9-v1-c5-l13',
    title: 'Bán kính đường tròn ngoại tiếp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['duong-tron-ngoai-tiep', 'tam-giac-deu'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // R = a / sqrt(3) or R = h * 2/3.
      // Let side a = 6. Height h = 6 * sqrt(3) / 2 = 3 * sqrt(3).
      // R = 2/3 * h = 2 * sqrt(3) ≈ 3.46 cm.
      // Let's formulate it using exact sqrt(3) expression.
      const side = rng.element([3, 6, 9]);
      const correctText = `$${side === 3 ? '\\sqrt{3}' : side === 6 ? '2\\sqrt{3}' : '3\\sqrt{3}'}\\text{ cm}$`;
      const distractors = [
        `$${side}\\text{ cm}$`,
        `$${side}\\sqrt{3}\\text{ cm}$`,
        `$${side}/2\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l13-tpl-05',
        seed,
        prompt: `Cho tam giác $ABC$ đều có độ dài cạnh bằng $${side}\\text{ cm}$. Tính bán kính đường tròn ngoại tiếp tam giác $ABC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trong tam giác đều, tâm đường tròn ngoại tiếp trùng với trọng tâm, do đó bán kính R = 2/3 chiều cao.`,
          steps: [
            `Chiều cao của tam giác đều cạnh $a = ${side}\\text{ cm}$ là:`,
            `$$h = \\frac{a\\sqrt{3}}{2} = \\frac{${side}\\sqrt{3}}{2}\\text{ cm}$$`,
            `Bán kính đường tròn ngoại tiếp $R$ bằng $\\frac{2}{3}$ chiều cao:`,
            `$$R = \\frac{2}{3} h = \\frac{2}{3} \\cdot \\frac{${side}\\sqrt{3}}{2} = ${side === 3 ? '\\sqrt{3}' : side === 6 ? '2\\sqrt{3}' : '3\\sqrt{3}'}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
