import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C4Practice3: ExerciseTemplate[] = [
  {
    id: 'g7-c4-practice-3-tpl-01',
    lessonId: 'g7-v1-c4-practice-3',
    title: 'Tính góc đáy tam giác cân',
    difficulty: 'basic',
    skillTags: ['tam-giac-can', 'tinh-toan-goc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const vertexAngle = rng.int(30, 150) * 2; // Even for nice division
      const baseAngle = (180 - vertexAngle) / 2;

      const correctText = `$${baseAngle}^\\circ$`;
      const distractors = [
        `$${vertexAngle}^\\circ$`,
        `$${180 - vertexAngle}^\\circ$`,
        `$${90 - baseAngle}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-3-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ cân tại $A$ có góc ở đỉnh $\\widehat{A} = ${vertexAngle}^\\circ$. Tính số đo góc $\\widehat{B}$ ở đáy.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số đo một góc ở đáy tam giác cân bằng (180 độ - góc ở đỉnh) chia đôi.`,
          steps: [
            `Vì tam giác $ABC$ cân tại $A$, ta có $\\widehat{B} = \\widehat{C}$.`,
            `Tổng ba góc trong một tam giác bằng $180^\\circ$:`,
            `$$\\widehat{A} + \\widehat{B} + \\widehat{C} = 180^\\circ \\Rightarrow ${vertexAngle}^\\circ + 2\\widehat{B} = 180^\\circ$$.`,
            `$$2\\widehat{B} = 180^\\circ - ${vertexAngle}^\\circ = ${180 - vertexAngle}^\\circ$$.`,
            `$$\\widehat{B} = ${baseAngle}^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-3-tpl-02',
    lessonId: 'g7-v1-c4-practice-3',
    title: 'Tính góc đỉnh tam giác cân',
    difficulty: 'basic',
    skillTags: ['tam-giac-can', 'tinh-toan-goc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const baseAngle = rng.int(30, 80);
      const vertexAngle = 180 - 2 * baseAngle;

      const correctText = `$${vertexAngle}^\\circ$`;
      const distractors = [
        `$${baseAngle}^\\circ$`,
        `$${180 - baseAngle}^\\circ$`,
        `$${90 - baseAngle}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-3-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ cân tại $A$ có góc ở đáy $\\widehat{B} = ${baseAngle}^\\circ$. Tính số đo góc ở đỉnh $\\widehat{A}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Số đo góc ở đỉnh tam giác cân bằng 180 độ trừ đi hai lần số đo một góc ở đáy.`,
          steps: [
            `Vì tam giác $ABC$ cân tại $A$ nên $\\widehat{C} = \\widehat{B} = ${baseAngle}^\\circ$.`,
            `Định lí tổng ba góc trong tam giác:`,
            `$$\\widehat{A} = 180^\\circ - (\\widehat{B} + \\widehat{C}) = 180^\\circ - 2 \\times ${baseAngle}^\\circ = ${vertexAngle}^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-3-tpl-03',
    lessonId: 'g7-v1-c4-practice-3',
    title: 'Độ dài cạnh bên tam giác cân',
    difficulty: 'basic',
    skillTags: ['tam-giac-can', 'canh-ben'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.int(5, 25);

      const correctText = `$${side}\\text{ cm}$`;
      const distractors = [
        `$${side * 2}\\text{ cm}$`,
        `$${side / 2}\\text{ cm}$`,
        `$${side + 5}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-3-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ cân tại $A$. Biết cạnh bên $AB = ${side}\\text{ cm}$. Tính độ dài cạnh bên $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tam giác cân có hai cạnh bên bằng nhau.`,
          steps: [
            `Tam giác $ABC$ cân tại $A$ nên hai cạnh bên xuất phát từ đỉnh $A$ là $AB$ và $AC$ bằng nhau.`,
            `Do đó: $AC = AB = ${side}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-3-tpl-04',
    lessonId: 'g7-v1-c4-practice-3',
    title: 'Điểm nằm trên đường trung trực',
    difficulty: 'understanding',
    skillTags: ['trung-truc', 'tinh-chat'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const d = rng.int(4, 15);

      const correctText = `$${d}\\text{ cm}$`;
      const distractors = [
        `$${d * 2}\\text{ cm}$`,
        `$${d / 2}\\text{ cm}$`,
        `$${d + 3}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-3-tpl-04',
        seed,
        prompt: `Cho đường thẳng $d$ là đường trung trực của đoạn thẳng $AB$. Điểm $M$ thuộc đường thẳng $d$. Biết khoảng cách $MA = ${d}\\text{ cm}$. Tính độ dài đoạn thẳng $MB$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Mọi điểm nằm trên đường trung trực của một đoạn thẳng đều cách đều hai đầu mút của đoạn thẳng đó.`,
          steps: [
            `Vì $M$ thuộc đường trung trực $d$ của đoạn thẳng $AB$, theo tính chất đường trung trực ta có:`,
            `$$MB = MA$$.`,
            `Thay số: $MB = ${d}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-3-tpl-05',
    lessonId: 'g7-v1-c4-practice-3',
    title: 'Nhận biết điều kiện tam giác đều',
    difficulty: 'understanding',
    skillTags: ['tam-giac-can', 'tam-giac-deu'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Tam giác cân có một góc bằng 60 độ.';
      const distractors = [
        'Tam giác cân có một góc bằng 45 độ.',
        'Tam giác cân có một góc bằng 90 độ.',
        'Tam giác cân có hai góc bằng 30 độ.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-3-tpl-05',
        seed,
        prompt: `Điều kiện nào sau đây đủ để kết luận một tam giác cân là tam giác đều?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tam giác cân có thêm một góc bằng 60 độ thì cả ba góc đều bằng 60 độ, do đó nó là tam giác đều.`,
          steps: [
            `Xét định lí nhận biết tam giác đều: "Nếu một tam giác cân có một góc bằng $60^\\circ$ thì đó là tam giác đều."`,
            `Vậy khẳng định đúng là: "${correctText}".`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
