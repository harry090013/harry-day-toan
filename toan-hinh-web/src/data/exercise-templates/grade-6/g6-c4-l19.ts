import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const identifyQuadrilateralTemplate: ExerciseTemplate = {
  id: 'g6-v1-c4-l19-tpl-thuoc-tinh-hinh',
  lessonId: 'g6-v1-c4-l19',
  title: 'Phân biệt tứ giác qua thuộc tính',
  difficulty: 'basic',
  skillTags: ['tu-giac', 'hinh-chu-nhat', 'hinh-thoi', 'hinh-binh-hanh', 'hinh-thang-can'],
  estimatedSeconds: 30,
  generator(seed) {
    const rng = createRng(seed);
    const options = [
      { name: 'Hình chữ nhật', prop: 'có bốn góc vuông và hai đường chéo bằng nhau' },
      { name: 'Hình thoi', prop: 'có bốn cạnh bằng nhau và hai đường chéo vuông góc với nhau' },
      { name: 'Hình bình hành', prop: 'có các cạnh đối song song và bằng nhau, các góc đối bằng nhau' },
      { name: 'Hình thang cân', prop: 'có hai cạnh đáy song song, hai cạnh bên bằng nhau và hai đường chéo bằng nhau' }
    ];
    const item = rng.element(options);
    
    const correctText = item.name;
    const distractors = options.map(o => o.name).filter(n => n !== correctText);
    
    return buildMultipleChoice({
      templateId: 'g6-v1-c4-l19-tpl-thuoc-tinh-hinh',
      seed,
      prompt: `Tứ giác nào ${item.prop}?`,
      correctText,
      distractorTexts: distractors,
      solution: {
        summary: `Mỗi hình tứ giác phẳng có các thuộc tính đặc trưng về cạnh, góc và đường chéo.`,
        steps: [
          `Đọc kỹ mô tả: ${item.prop}.`,
          `Đây là thuộc tính đặc trưng của ${item.name}.`
        ],
        finalAnswer: correctText
      }
    });
  }
};

export const perimeterQuadrilateralTemplate: ExerciseTemplate = {
  id: 'g6-v1-c4-l19-tpl-tinh-chu-vi-tu-giac',
  lessonId: 'g6-v1-c4-l19',
  title: 'Tính chu vi hình tứ giác',
  difficulty: 'basic',
  skillTags: ['chu-vi', 'hinh-chu-nhat', 'hinh-binh-hanh', 'hinh-thoi'],
  estimatedSeconds: 35,
  generator(seed) {
    const rng = createRng(seed);
    const mode = rng.int(0, 2); // 0: rectangle, 1: parallelogram, 2: rhombus
    
    if (mode === 0) {
      const a = rng.int(5, 15);
      const b = rng.int(2, a - 1);
      const p = 2 * (a + b);
      const correctText = `$${p}\\text{ cm}$`;
      const distractors = [
        `$${a + b}\\text{ cm}$`,
        `$${a * b}\\text{ cm}$`,
        `$${2 * a + b}\\text{ cm}$`
      ].filter(t => t !== correctText);
      
      return buildMultipleChoice({
        templateId: 'g6-v1-c4-l19-tpl-tinh-chu-vi-tu-giac',
        seed,
        prompt: `Một hình chữ nhật có chiều dài $${a}\\text{ cm}$ và chiều rộng $${b}\\text{ cm}$. Tính chu vi của hình chữ nhật đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chu vi hình chữ nhật bằng tổng chiều dài và rộng nhân hai.`,
          steps: [
            `Chiều dài $a = ${a}\\text{ cm}$, chiều rộng $b = ${b}\\text{ cm}$.`,
            `Công thức chu vi: $P = 2(a + b)$.`,
            `Thay số: $P = 2 \\times (${a} + ${b}) = 2 \\times ${a + b} = ${p}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    } else if (mode === 1) {
      const a = rng.int(5, 12);
      const b = rng.int(3, 10);
      const p = 2 * (a + b);
      const correctText = `$${p}\\text{ cm}$`;
      const distractors = [
        `$${a + b}\\text{ cm}$`,
        `$${a * b}\\text{ cm}$`,
        `$${4 * a}\\text{ cm}$`
      ].filter(t => t !== correctText);
      
      return buildMultipleChoice({
        templateId: 'g6-v1-c4-l19-tpl-tinh-chu-vi-tu-giac',
        seed,
        prompt: `Một hình bình hành có độ dài hai cạnh liên tiếp là $${a}\\text{ cm}$ and $${b}\\text{ cm}$. Tính chu vi của hình bình hành đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chu vi hình bình hành bằng tổng hai cạnh liên tiếp nhân hai (tương tự hình chữ nhật).`,
          steps: [
            `Độ dài hai cạnh liên tiếp là $a = ${a}\\text{ cm}$ và $b = ${b}\\text{ cm}$.`,
            `Hình bình hành có các cạnh đối bằng nhau nên công thức chu vi là: $P = 2(a + b)$.`,
            `Thay số: $P = 2 \\times (${a} + ${b}) = ${p}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    } else {
      const a = rng.int(4, 12);
      const p = 4 * a;
      const correctText = `$${p}\\text{ cm}$`;
      const distractors = [
        `$${2 * a}\\text{ cm}$`,
        `$${a * a}\\text{ cm}$`,
        `$${p + 4}\\text{ cm}$`
      ].filter(t => t !== correctText);
      
      return buildMultipleChoice({
        templateId: 'g6-v1-c4-l19-tpl-tinh-chu-vi-tu-giac',
        seed,
        prompt: `Tính chu vi của hình thoi biết độ dài một cạnh là $${a}\\text{ cm}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chu vi hình thoi bằng độ dài một cạnh nhân bốn (vì bốn cạnh bằng nhau).`,
          steps: [
            `Hình thoi có bốn cạnh bằng nhau, cạnh $a = ${a}\\text{ cm}$.`,
            `Công thức chu vi: $P = 4a$.`,
            `Thay số: $P = 4 \\times ${a} = ${p}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
};

export const templatesG6C4L19 = [
  identifyQuadrilateralTemplate,
  perimeterQuadrilateralTemplate
];
