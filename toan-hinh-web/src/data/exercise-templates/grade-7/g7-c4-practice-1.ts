import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C4Practice1: ExerciseTemplate[] = [
  {
    id: 'g7-c4-practice-1-tpl-01',
    lessonId: 'g7-v1-c4-practice-1',
    title: 'Tìm góc tương ứng từ hai tam giác bằng nhau c-c-c',
    difficulty: 'basic',
    skillTags: ['tam-giac-bang-nhau', 'c-c-c', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.int(40, 110);

      const correctText = `$${angle}^\\circ$`;
      const distractors = [
        `$${180 - angle}^\\circ$`,
        `$${90 - angle}^\\circ$`,
        `$${angle / 2}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-1-tpl-01',
        seed,
        prompt: `Cho $\\triangle ABC = \\triangle DEF$ (c-c-c). Biết $\\widehat{A} = ${angle}^\\circ$. Tính số đo góc $\\widehat{D}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác bằng nhau thì có các góc tương ứng bằng nhau.`,
          steps: [
            `Vì $\\triangle ABC = \\triangle DEF$, các góc tương ứng bằng nhau.`,
            `Góc tương ứng với $\\widehat{A}$ là $\\widehat{D}$, do đó: $\\widehat{D} = \\widehat{A} = ${angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-1-tpl-02',
    lessonId: 'g7-v1-c4-practice-1',
    title: 'Tìm cạnh tương ứng từ hai tam giác bằng nhau c-g-c',
    difficulty: 'basic',
    skillTags: ['tam-giac-bang-nhau', 'c-g-c', 'tinh-toan'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const side = rng.int(5, 20);

      const correctText = `$${side}\\text{ cm}$`;
      const distractors = [
        `$${side + 2}\\text{ cm}$`,
        `$${side - 1}\\text{ cm}$`,
        `$${side * 2}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-1-tpl-02',
        seed,
        prompt: `Cho $\\triangle ABC = \\triangle MNP$ (c-g-c). Biết cạnh $BC = ${side}\\text{ cm}$. Tính độ dài cạnh $NP$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác bằng nhau thì có các cạnh tương ứng bằng nhau.`,
          steps: [
            `Vì $\\triangle ABC = \\triangle MNP$, các cạnh tương ứng bằng nhau.`,
            `Cạnh tương ứng với cạnh $BC$ là cạnh $NP$.`,
            `Do đó: $NP = BC = ${side}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-1-tpl-03',
    lessonId: 'g7-v1-c4-practice-1',
    title: 'Tìm thứ tự đỉnh tương ứng đúng',
    difficulty: 'understanding',
    skillTags: ['tam-giac-bang-nhau', 'dinh-tuong-ung'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = `$\\triangle ABC = \\triangle MNP$`;
      const distractors = [
        `$\\triangle ABC = \\triangle PMN$`,
        `$\\triangle ABC = \\triangle NPM$`,
        `$\\triangle ABC = \\triangle MPN$`
      ];

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-1-tpl-03',
        seed,
        prompt: `Cho hai tam giác $ABC$ và $MNP$ có: $AB = MN$, $AC = MP$, $BC = NP$. Cách viết nào sau đây diễn đạt đúng quan hệ bằng nhau của hai tam giác?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hai tam giác bằng nhau cần được viết đúng thứ tự các đỉnh tương ứng.`,
          steps: [
            `Xét sự tương ứng giữa các cạnh:`,
            `– $AB$ tương ứng với $MN$.`,
            `– $AC$ tương ứng với $MP$.`,
            `– $BC$ tương ứng với $NP$.`,
            `Như vậy, đỉnh $A$ tương ứng với $M$, $B$ tương ứng với $N$, $C$ tương ứng với $P$.`,
            `Ký hiệu đúng là: $\\triangle ABC = \\triangle MNP$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-1-tpl-04',
    lessonId: 'g7-v1-c4-practice-1',
    title: 'Bài toán tìm x từ hai tam giác bằng nhau',
    difficulty: 'understanding',
    skillTags: ['tam-giac-bang-nhau', 'tinh-toan', 'dai-so'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const xVal = rng.int(2, 8);
      const sideAB = 2 * xVal - 1;

      const correctText = `$x = ${xVal}$`;
      const distractors = [
        `$x = ${xVal + 1}$`,
        `$x = ${xVal - 1}$`,
        `$x = ${sideAB}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-1-tpl-04',
        seed,
        prompt: `Cho $\\triangle ABC = \\triangle DEF$. Biết $DE = ${sideAB}\\text{ cm}$ và $AB = 2x - 1\\text{ (cm)}$. Tìm $x$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Từ hai tam giác bằng nhau, ta có AB = DE. Thiết lập phương trình để giải tìm x.`,
          steps: [
            `Vì $\\triangle ABC = \\triangle DEF$ nên các cạnh tương ứng bằng nhau: $AB = DE$.`,
            `Thay số vào biểu thức ta được phương trình:`,
            `$$2x - 1 = ${sideAB}$$.`,
            `$$2x = ${sideAB} + 1$$.`,
            `$$2x = ${sideAB + 1}$$.`,
            `$$x = ${xVal}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c4-practice-1-tpl-05',
    lessonId: 'g7-v1-c4-practice-1',
    title: 'Tính góc thứ ba trong tam giác bằng nhau',
    difficulty: 'understanding',
    skillTags: ['tam-giac-bang-nhau', 'tong-goc-tam-giac', 'tinh-toan'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(40, 75);
      const b = rng.int(45, 80);
      const c = 180 - a - b;

      const correctText = `$${c}^\\circ$`;
      const distractors = [
        `$${a}^\\circ$`,
        `$${b}^\\circ$`,
        `$${a + b}^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c4-practice-1-tpl-05',
        seed,
        prompt: `Cho $\\triangle ABC = \\triangle DEF$. Biết $\\widehat{A} = ${a}^\\circ$, $\\widehat{B} = ${b}^\\circ$. Tính số đo góc $\\widehat{F}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính góc C từ tổng ba góc của tam giác ABC, rồi suy ra góc F tương ứng bằng góc C.`,
          steps: [
            `Bước 1: Tính góc $\\widehat{C}$ của $\\triangle ABC$ nhờ định lí tổng ba góc trong tam giác:`,
            `$$\\widehat{C} = 180^\\circ - (\\widehat{A} + \\widehat{B}) = 180^\\circ - (${a}^\\circ + ${b}^\\circ) = ${c}^\\circ$$.`,
            `Bước 2: Vì $\\triangle ABC$ bằng $\\triangle DEF$ nên $\\widehat{F} = \\widehat{C} = ${c}^\\circ$ (hai góc tương ứng).`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
