import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9L33: ExerciseTemplate[] = [
  {
    id: 'g8-v2-c9-l33-tpl-01',
    lessonId: 'g8-v2-c9-l33',
    title: 'Tính cạnh tương ứng của tam giác đồng dạng',
    difficulty: 'basic',
    skillTags: ['dong-dang', 'tinh-toan', 'ti-le-thuc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(4, 12);
      const kNum = rng.element([2, 3, 4]);
      const kDen = rng.element([1, 5]); // If kDen is 1, ratio is an integer. Let's make k = 2/3, 3/4, 1/2 etc.
      // Let's use simple numbers:
      const sideAB = ab;
      const k = rng.element([0.5, 0.75, 1.5, 2]);
      const result = sideAB * k;

      const correctText = `$${result}\\text{ cm}$`;
      const distractors = [
        `$${sideAB}\\text{ cm}$`,
        `$${(sideAB / k).toFixed(1).replace('.0', '')}\\text{ cm}$`,
        `$${(result + 2).toFixed(1).replace('.0', '')}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l33-tpl-01',
        seed,
        prompt: `Cho $\\triangle A'B'C' \\backsim \\triangle ABC$ với tỉ số đồng dạng $k = ${k}$. Biết $AB = ${sideAB}\\text{ cm}$. Tính độ dài cạnh $A'B'$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v2-c9-l33-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c9-similarity',
          title: 'Hai tam giác đồng dạng',
          alt: 'Tam giác A\'B\'C\' đồng dạng với ABC.',
          notToScale: true,
          data: { k }
        },
        solution: {
          summary: `Theo định nghĩa hai tam giác đồng dạng: A'B'/AB = k.`,
          steps: [
            `Vì $\\triangle A'B'C' \\backsim \\triangle ABC$ với tỉ số đồng dạng $k$, ta có:`,
            `$$\\frac{A'B'}{AB} = k$$`,
            `Thay số vào công thức:`,
            `$$\\frac{A'B'}{${sideAB}} = ${k}$$`,
            `Suy ra: $A'B' = ${sideAB} \\times ${k} = ${result}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l33-tpl-02',
    lessonId: 'g8-v2-c9-l33',
    title: 'Xác định tỉ số đồng dạng của tam giác ngược lại',
    difficulty: 'basic',
    skillTags: ['dong-dang', 'ti-so-dong-dang'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const kVal = rng.element([
        { k: '2/3', inv: '3/2' },
        { k: '3/4', inv: '4/3' },
        { k: '1/2', inv: '2' },
        { k: '2', inv: '1/2' }
      ]);

      const correctText = `$${kVal.inv}$`;
      const distractors = [
        `$${kVal.k}$`,
        `$1$`,
        `$3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l33-tpl-02',
        seed,
        prompt: `Cho $\\triangle A'B'C' \\backsim \\triangle ABC$ với tỉ số đồng dạng $k = ${kVal.k}$. Hỏi $\\triangle ABC$ đồng dạng với $\\triangle A'B'C'$ với tỉ số đồng dạng bằng bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu tam giác 1 đồng dạng tam giác 2 theo tỉ số k thì tam giác 2 đồng dạng tam giác 1 theo tỉ số 1/k.`,
          steps: [
            `Ta có $\\triangle A'B'C' \\backsim \\triangle ABC$ theo tỉ số $k = \\frac{A'B'}{AB} = ${kVal.k}$.`,
            `Do đó, $\\triangle ABC \\backsim \\triangle A'B'C'$ theo tỉ số $k' = \\frac{AB}{A'B'} = \\frac{1}{k} = ${kVal.inv}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l33-tpl-03',
    lessonId: 'g8-v2-c9-l33',
    title: 'Tính số đo góc trong tam giác đồng dạng',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'goc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const angleA = rng.int(40, 80);
      const angleB = rng.int(40, 180 - angleA - 20);
      const angleC = 180 - angleA - angleB;

      const correctText = `$${angleC}^\\circ$`;
      const distractors = [
        `$${angleA}^\\circ$`,
        `$${angleB}^\\circ$`,
        `$${180 - angleC}^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l33-tpl-03',
        seed,
        prompt: `Cho $\\triangle A'B'C' \\backsim \\triangle ABC$. Biết $\\widehat{A'} = ${angleA}^\\circ$ và $\\widehat{B'} = ${angleB}^\\circ$. Tính số đo góc $\\widehat{C}$ của $\\triangle ABC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác đồng dạng có các góc tương ứng bằng nhau.`,
          steps: [
            `Vì $\\triangle A'B'C' \\backsim \\triangle ABC$, nên các góc tương ứng bằng nhau:`,
            `$$\\widehat{A} = \\widehat{A'} = ${angleA}^\\circ$$`,
            `$$\\widehat{B} = \\widehat{B'} = ${angleB}^\\circ$$`,
            `$$\\widehat{C} = \\widehat{C'}$$`,
            `Áp dụng định lí tổng ba góc trong $\\triangle ABC$ (hoặc $\\triangle A'B'C'$):`,
            `$$\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (${angleA}^\\circ + ${angleB}^\\circ) = ${angleC}^\\circ$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l33-tpl-04',
    lessonId: 'g8-v2-c9-l33',
    title: 'Tính tỉ số chu vi hai tam giác đồng dạng',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'chu-vi'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.element([
        { text: '3/5', val: 0.6, p1: 15, p2: 25 },
        { text: '2/3', val: 2/3, p1: 12, p2: 18 },
        { text: '1/3', val: 1/3, p1: 10, p2: 30 }
      ]);

      const correctText = `$${k.p1}\\text{ cm}$`;
      const distractors = [
        `$${k.p2}\\text{ cm}$`,
        `$${k.p1 + 5}\\text{ cm}$`,
        `$${k.p2 - k.p1}\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l33-tpl-04',
        seed,
        prompt: `Cho $\\triangle A'B'C' \\backsim \\triangle ABC$ với tỉ số đồng dạng $k = ${k.text}$. Biết chu vi của $\\triangle ABC$ là $${k.p2}\\text{ cm}$. Tính chu vi của $\\triangle A'B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số chu vi của hai tam giác đồng dạng bằng đúng tỉ số đồng dạng k.`,
          steps: [
            `Gọi chu vi $\\triangle A'B'C'$ là $P_1$ và chu vi $\\triangle ABC$ là $P_2$.`,
            `Theo tính chất tam giác đồng dạng:`,
            `$$\\frac{P_1}{P_2} = k = ${k.text}$$`,
            `Thay số chu vi $P_2 = ${k.p2}$ vào:`,
            `$$\\frac{P_1}{${k.p2}} = ${k.text}$$`,
            `Suy ra: $P_1 = ${k.p2} \\times ${k.text} = ${k.p1}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c9-l33-tpl-05',
    lessonId: 'g8-v2-c9-l33',
    title: 'Tính tỉ số diện tích hai tam giác đồng dạng',
    difficulty: 'understanding',
    skillTags: ['dong-dang', 'dien-tich'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.element([
        { text: '2/3', k2: '4/9', s2: 45, s1: 20 },
        { text: '1/2', k2: '1/4', s2: 40, s1: 10 },
        { text: '3/4', k2: '9/16', s2: 32, s1: 18 }
      ]);

      const correctText = `$${k.s1}\\text{ cm}^2$`;
      const distractors = [
        `$${k.s2}\\text{ cm}^2$`,
        `$${k.s1 + 5}\\text{ cm}^2$`,
        `$${(k.s2 * (Number(k.text.split('/')[0])/Number(k.text.split('/')[1]))).toFixed(0)}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c9-l33-tpl-05',
        seed,
        prompt: `Cho $\\triangle A'B'C' \\backsim \\triangle ABC$ với tỉ số đồng dạng $k = ${k.text}$. Biết diện tích $\\triangle ABC$ là $${k.s2}\\text{ cm}^2$. Tính diện tích của $\\triangle A'B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số diện tích của hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng k².`,
          steps: [
            `Gọi diện tích $\\triangle A'B'C'$ là $S_1$ và diện tích $\\triangle ABC$ là $S_2$.`,
            `Ta có tỉ số diện tích:`,
            `$$\\frac{S_1}{S_2} = k^2 = \\left(${k.text}\\right)^2 = ${k.k2}$$`,
            `Thay số $S_2 = ${k.s2}$ vào ta có:`,
            `$$\\frac{S_1}{${k.s2}} = ${k.k2}$$`,
            `Suy ra: $S_1 = ${k.s2} \\times ${k.k2} = ${k.s1}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
