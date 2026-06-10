import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C4L17: ExerciseTemplate[] = [
  {
    id: 'g8-v1-c4-l17-tpl-01',
    lessonId: 'g8-v1-c4-l17',
    title: 'Tính độ dài đoạn thẳng trên cạnh đáy từ đường phân giác',
    difficulty: 'basic',
    skillTags: ['phan-giac', 'duong-phan-giac-tam-giac', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 8); // 4, 5, 6, 7, 8
      const multiplier = rng.element([1.5, 2]);
      const ac = ab * multiplier;
      const bd = rng.int(2, 4);
      const dc = bd * multiplier;

      const correctText = `$${dc}\\text{ cm}$`;
      const distractors = [
        `$${bd}\\text{ cm}$`,
        `$${ac}\\text{ cm}$`,
        `$${dc + 1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l17-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ có $AD$ là đường phân giác của góc $A$ ($D \\in BC$). Biết $AB = ${ab}\\text{ cm}$, $AC = ${ac}\\text{ cm}$ và $BD = ${bd}\\text{ cm}$. Tính độ dài đoạn thẳng $DC$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v1-c4-l17-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c4-thales',
          title: 'Đường phân giác AD',
          alt: 'Tam giác ABC có đường phân giác AD.',
          notToScale: true,
          data: {
            type: 'bisector-ratio'
          }
        },
        solution: {
          summary: `Đường phân giác chia cạnh đối diện thành hai đoạn tỉ lệ với hai cạnh kề: DB / DC = AB / AC.`,
          steps: [
            `Vì $AD$ là phân giác của góc $\\widehat{A}$ nên ta có tỉ lệ thức:`,
            `$$\\frac{DB}{DC} = \\frac{AB}{AC}$$`,
            `Thay các giá trị đã biết:`,
            `$$\\frac{${bd}}{DC} = \\frac{${ab}}{${ac}}$$`,
            `Suy ra: $DC = \\frac{${bd} \\times ${ac}}{${ab}} = ${dc}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l17-tpl-02',
    lessonId: 'g8-v1-c4-l17',
    title: 'Tính cạnh bên của tam giác từ đường phân giác',
    difficulty: 'basic',
    skillTags: ['phan-giac', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const bd = 3;
      const dc = 4;
      const ab = rng.element([6, 9, 12]);
      const ac = (ab * dc) / bd;

      const correctText = `$${ac}\\text{ cm}$`;
      const distractors = [
        `$${ab}\\text{ cm}$`,
        `$${ac + 2}\\text{ cm}$`,
        `$${ac - 2}\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l17-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ có $AD$ là đường phân giác của góc $A$ ($D \\in BC$). Biết $AB = ${ab}\\text{ cm}$, $BD = ${bd}\\text{ cm}$ và $CD = ${dc}\\text{ cm}$. Tính độ dài cạnh $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng định lí phân giác tam giác: DB / DC = AB / AC để tìm AC.`,
          steps: [
            `Tỉ lệ thức của đường phân giác $AD$:`,
            `$$\\frac{BD}{CD} = \\frac{AB}{AC}$$`,
            `Thay số:`,
            `$$\\frac{${bd}}{${dc}} = \\frac{${ab}}{AC}$$`,
            `Tính toán: $AC = \\frac{${dc} \\times ${ab}}{${bd}} = ${ac}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l17-tpl-03',
    lessonId: 'g8-v1-c4-l17',
    title: 'Công thức tỉ lệ đúng của đường phân giác',
    difficulty: 'basic',
    skillTags: ['ly-thuyet', 'phan-giac'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$\\frac{DB}{DC} = \\frac{AB}{AC}$`;
      const distractors = [
        `$\\frac{DB}{DC} = \\frac{AC}{AB}$`,
        `$\\frac{DB}{AB} = \\frac{AC}{DC}$`,
        `$\\frac{AD}{BC} = \\frac{AB}{AC}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l17-tpl-03',
        seed,
        prompt: `Cho tam giác $ABC$ có $AD$ là phân giác trong của góc $\\widehat{A}$ ($D \\in BC$). Hệ thức nào sau đây luôn đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Đây là định lí về tính chất đường phân giác trong tam giác.`,
          steps: [
            `Định lí: $\\frac{DB}{DC} = \\frac{AB}{AC}$ (các đoạn thẳng kề với cạnh bên tương ứng).`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l17-tpl-04',
    lessonId: 'g8-v1-c4-l17',
    title: 'Tính hai đoạn thẳng đáy khi biết tổng và hai cạnh bên',
    difficulty: 'understanding',
    skillTags: ['phan-giac', 'day-ti-so-bang-nhau', 'tinh-toan'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const ab = 6;
      const ac = 8;
      const bc = 7; // db + dc = 7. db/dc = 6/8 = 3/4 -> db = 3, dc = 4.

      const correctText = `$3\\text{ cm}$`;
      const distractors = [
        `$4\\text{ cm}$`,
        `$3.5\\text{ cm}$`,
        `$2.5\\text{ cm}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l17-tpl-04',
        seed,
        prompt: `Cho tam giác $ABC$ có $AD$ là đường phân giác của góc $A$ ($D \\in BC$). Biết $AB = 6\\text{ cm}$, $AC = 8\\text{ cm}$ và cạnh đáy $BC = 7\\text{ cm}$. Tính độ dài đoạn thẳng $BD$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng tính chất đường phân giác kết hợp tính chất dãy tỉ số bằng nhau khi biết tổng độ dài của BC.`,
          steps: [
            `Theo định lí đường phân giác: $\\frac{BD}{CD} = \\frac{AB}{AC} = \\frac{6}{8} = \\frac{3}{4}$.`,
            `Suy ra: $\\frac{BD}{3} = \\frac{CD}{4}$.`,
            `Áp dụng tính chất của dãy tỉ số bằng nhau:`,
            `$$\\frac{BD}{3} = \\frac{CD}{4} = \\frac{BD + CD}{3 + 4} = \\frac{BC}{7} = \\frac{7}{7} = 1$$`,
            `Từ đó tính được: $BD = 3 \\times 1 = 3\\text{ cm}$ (và $CD = 4\\text{ cm}$).`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v1-c4-l17-tpl-05',
    lessonId: 'g8-v1-c4-l17',
    title: 'Tính tỉ số của hai đoạn thẳng trên đáy',
    difficulty: 'basic',
    skillTags: ['phan-giac', 'ti-so-doan-thang'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 9);
      const ac = rng.int(ab + 1, ab + 4);

      const correctText = `$${ab}/${ac}$`;
      const distractors = [
        `$${ac}/${ab}$`,
        `$${ab}/${ab + ac}$`,
        `$${ac}/${ab + ac}$`
      ];

      return buildMultipleChoice({
        templateId: 'g8-v1-c4-l17-tpl-05',
        seed,
        prompt: `Cho tam giác $ABC$ có $AD$ là phân giác góc $A$ ($D \\in BC$). Biết $AB = ${ab}\\text{ cm}$ và $AC = ${ac}\\text{ cm}$. Hãy tính tỉ số $\\frac{DB}{DC}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số của hai đoạn thẳng kề đáy bằng tỉ số của hai cạnh bên tương ứng.`,
          steps: [
            `Theo định lí đường phân giác: $\\frac{DB}{DC} = \\frac{AB}{AC}$.`,
            `Thay số: $\\frac{DB}{DC} = \\frac{${ab}}{${ac}}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
