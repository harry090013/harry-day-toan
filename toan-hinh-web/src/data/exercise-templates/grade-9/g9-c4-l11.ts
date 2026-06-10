import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C4L11: ExerciseTemplate[] = [
  {
    id: 'g9-v1-c4-l11-tpl-01',
    lessonId: 'g9-v1-c4-l11',
    title: 'Tính tỉ số lượng giác sin từ tam giác vuông',
    difficulty: 'basic',
    skillTags: ['ti-so-luong-giac', 'sin', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { opp: 3, adj: 4, hyp: 5, angle: 'B', oppSide: 'AC', adjSide: 'AB', hypSide: 'BC' },
        { opp: 6, adj: 8, hyp: 10, angle: 'B', oppSide: 'AC', adjSide: 'AB', hypSide: 'BC' },
        { opp: 5, adj: 12, hyp: 13, angle: 'B', oppSide: 'AC', adjSide: 'AB', hypSide: 'BC' }
      ]);
      const sinVal = (triple.opp / triple.hyp).toFixed(2).replace('.00', '');

      const correctText = `$${triple.opp}/${triple.hyp}$`;
      const distractors = [
        `$${triple.adj}/${triple.hyp}$`,
        `$${triple.opp}/${triple.adj}$`,
        `$${triple.adj}/${triple.opp}$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l11-tpl-01',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có $AB = ${triple.adj}\\text{ cm}$ và $AC = ${triple.opp}\\text{ cm}$. Tính $\\sin B$.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v1-c4-l11-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c4-trig',
          title: 'Tam giác vuông ABC',
          alt: 'Tam giác ABC vuông tại A.',
          notToScale: true,
          data: {
            angleLabel: 'B',
            opp: triple.oppSide,
            adj: triple.adjSide,
            hyp: triple.hypSide
          }
        },
        solution: {
          summary: `Tính cạnh huyền bằng Pythagore rồi tính sin B = cạnh đối / cạnh huyền.`,
          steps: [
            `Tính cạnh huyền $BC$:`,
            `$$BC = \\sqrt{AB^2 + AC^2} = \\sqrt{${triple.adj}^2 + ${triple.opp}^2} = ${triple.hyp}\\text{ cm}$$`,
            `Với góc $B$, cạnh đối là $AC = ${triple.opp}\\text{ cm}$, cạnh huyền là $BC = ${triple.hyp}\\text{ cm}$.`,
            `Áp dụng định nghĩa:`,
            `$$\\sin B = \\frac{AC}{BC} = \\frac{${triple.opp}}{${triple.hyp}}$$`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l11-tpl-02',
    lessonId: 'g9-v1-c4-l11',
    title: 'Tính tỉ số lượng giác tan từ tam giác vuông',
    difficulty: 'basic',
    skillTags: ['ti-so-luong-giac', 'tan', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const triple = rng.element([
        { opp: 3, adj: 4, angle: 'B', oppSide: 'AC', adjSide: 'AB' },
        { opp: 5, adj: 12, angle: 'B', oppSide: 'AC', adjSide: 'AB' },
        { opp: 8, adj: 15, angle: 'B', oppSide: 'AC', adjSide: 'AB' }
      ]);

      const correctText = `$${triple.opp}/${triple.adj}$`;
      const distractors = [
        `$${triple.adj}/${triple.opp}$`,
        `$${triple.opp}/\\sqrt{${triple.opp}^2 + ${triple.adj}^2}$`,
        `$${triple.adj}/\\sqrt{${triple.opp}^2 + ${triple.adj}^2}$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l11-tpl-02',
        seed,
        prompt: `Cho tam giác $ABC$ vuông tại $A$ có $AB = ${triple.adj}\\text{ cm}$ và $AC = ${triple.opp}\\text{ cm}$. Tính $\\tan B$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tan B = cạnh đối / cạnh kề.`,
          steps: [
            `Với góc $B$, cạnh đối là $AC = ${triple.opp}\\text{ cm}$, cạnh kề là $AB = ${triple.adj}\\text{ cm}$.`,
            `Theo định nghĩa tỉ số lượng giác của góc nhọn:`,
            `$$\\tan B = \\frac{\\text{cạnh đối}}{\\text{cạnh kề}} = \\frac{AC}{AB} = \\frac{${triple.opp}}{${triple.adj}}$$`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l11-tpl-03',
    lessonId: 'g9-v1-c4-l11',
    title: 'Tính cos khi biết sin góc nhọn',
    difficulty: 'understanding',
    skillTags: ['ti-so-luong-giac', 'cos', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const pair = rng.element([
        { sin: '3/5', cos: '4/5' },
        { sin: '4/5', cos: '3/5' },
        { sin: '5/13', cos: '12/13' },
        { sin: '12/13', cos: '5/13' }
      ]);

      const correctText = `$${pair.cos}$`;
      const distractors = [
        `$${pair.sin}$`,
        `$1 - ${pair.sin}$`,
        `$2/3$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l11-tpl-03',
        seed,
        prompt: `Cho góc nhọn $\\alpha$ biết $\\sin \\alpha = ${pair.sin}$. Tính $\\cos \\alpha$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng hệ thức lượng giác cơ bản: sin²α + cos²α = 1.`,
          steps: [
            `Ta có công thức: $\\sin^2 \\alpha + \\cos^2 \\alpha = 1$.`,
            `Suy ra: $\\cos^2 \\alpha = 1 - \\sin^2 \\alpha = 1 - \\left(${pair.sin}\\right)^2$.`,
            `Tính toán: $\\cos^2 \\alpha = 1 - \\frac{${pair.sin.split('/')[0]}^2}{${pair.sin.split('/')[1]}^2} = \\frac{${pair.cos.split('/')[0]}^2}{${pair.cos.split('/')[1]}^2}$.`,
            `Vì $\\alpha$ là góc nhọn nên $\\cos \\alpha > 0$.`,
            `Do đó: $\\cos \\alpha = ${pair.cos}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l11-tpl-04',
    lessonId: 'g9-v1-c4-l11',
    title: 'Tính tan khi biết sin và cos',
    difficulty: 'understanding',
    skillTags: ['ti-so-luong-giac', 'tan', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const pair = rng.element([
        { sin: '3/5', cos: '4/5', tan: '3/4' },
        { sin: '12/13', cos: '5/13', tan: '12/5' },
        { sin: '4/5', cos: '3/5', tan: '4/3' }
      ]);

      const correctText = `$${pair.tan}$`;
      const distractors = [
        `$${pair.cos}/${pair.sin}$`,
        `$1$`,
        `$2$`
      ];

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l11-tpl-04',
        seed,
        prompt: `Cho góc nhọn $\\alpha$ có $\\sin \\alpha = ${pair.sin}$ và $\\cos \\alpha = ${pair.cos}$. Tính $\\tan \\alpha$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tan α = sin α / cos α.`,
          steps: [
            `Ta áp dụng công thức:`,
            `$$\\tan \\alpha = \\frac{\\sin \\alpha}{\\cos \\alpha}$$`,
            `Thay số:`,
            `$$\\tan \\alpha = \\frac{${pair.sin}}{${pair.cos}} = ${pair.tan}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c4-l11-tpl-05',
    lessonId: 'g9-v1-c4-l11',
    title: 'Tỉ số lượng giác góc nhọn của hai góc phụ nhau',
    difficulty: 'understanding',
    skillTags: ['ti-so-luong-giac', 'goc-phu-nhau', 'nhan-biet'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const angles = rng.element([
        { a: 30, b: 60, funcA: 'sin', funcB: 'cos' },
        { a: 20, b: 70, funcA: 'sin', funcB: 'cos' },
        { a: 45, b: 45, funcA: 'tan', funcB: 'cot' },
        { a: 15, b: 75, funcA: 'tan', funcB: 'cot' }
      ]);

      const correctText = `$${angles.funcB} ${angles.b}^\\circ$`;
      const distractors = [
        `$${angles.funcA} ${angles.b}^\\circ$`,
        `$${angles.funcB} ${angles.a}^\\circ$`,
        `$1$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c4-l11-tpl-05',
        seed,
        prompt: `Biểu thức nào sau đây bằng với $${angles.funcA} ${angles.a}^\\circ$?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Nếu hai góc phụ nhau (tổng bằng 90 độ), thì sin góc này bằng cos góc kia, tan góc này bằng cot góc kia.`,
          steps: [
            `Ta thấy góc $${angles.a}^\\circ$ và góc $${angles.b}^\\circ$ có tổng là: $${angles.a}^\\circ + ${angles.b}^\\circ = 90^\\circ$.`,
            `Do hai góc phụ nhau nên: $${angles.funcA} ${angles.a}^\\circ = ${angles.funcB} ${angles.b}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
