import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9Review: ExerciseTemplate[] = [
  {
    id: 'g8-c9-review-tpl-01',
    lessonId: 'g8-v2-c9-review',
    title: 'Tỉ số đồng dạng và cạnh tương ứng',
    difficulty: 'basic',
    skillTags: ['tam-giac-dong-dang', 'ty-so', 'tinh-canh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(2, 8);
      const k = rng.int(2, 5);
      const a1b1 = ab * k;
      const bc = rng.int(2, 8);
      const b1c1 = bc * k;

      const correctText = `$B'C' = ${b1c1}$ cm`;
      const distractors = [
        `$B'C' = ${bc}$ cm`,
        `$B'C' = ${b1c1 + 1}$ cm`,
        `$B'C' = ${b1c1 * 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-review-tpl-01',
        seed,
        prompt: `$\\triangle ABC \\sim \\triangle A'B'C'$ với $AB = ${ab}$ cm, $A'B' = ${a1b1}$ cm, $BC = ${bc}$ cm. Tính $B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số đồng dạng $k = \\frac{A'B'}{AB}$, từ đó tính các cạnh còn lại.`,
          steps: [
            `$k = \\frac{A'B'}{AB} = \\frac{${a1b1}}{${ab}} = ${k}$.`,
            `$B'C' = k \\times BC = ${k} \\times ${bc} = ${b1c1}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-review-tpl-02',
    lessonId: 'g8-v2-c9-review',
    title: 'Diện tích và tỉ số đồng dạng',
    difficulty: 'understanding',
    skillTags: ['tam-giac-dong-dang', 'dien-tich'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.int(2, 5);
      const s = rng.int(3, 15);
      const s1 = s * k * k;

      const correctText = `$S_{A'B'C'} = ${s1}\\text{ cm}^2$`;
      const distractors = [
        `$S_{A'B'C'} = ${s * k}\\text{ cm}^2$`,
        `$S_{A'B'C'} = ${s}\\text{ cm}^2$`,
        `$S_{A'B'C'} = ${s1 + k}\\text{ cm}^2$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-review-tpl-02',
        seed,
        prompt: `$\\triangle ABC \\sim \\triangle A'B'C'$ với tỉ số đồng dạng $k = ${k}$. Diện tích $\\triangle ABC = ${s}\\text{ cm}^2$. Tính diện tích $\\triangle A'B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số diện tích hai tam giác đồng dạng bằng bình phương tỉ số đồng dạng.`,
          steps: [
            `$\\frac{S_{A'B'C'}}{S_{ABC}} = k^2 = ${k}^2 = ${k*k}$.`,
            `$S_{A'B'C'} = ${s} \\times ${k*k} = ${s1}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-review-tpl-03',
    lessonId: 'g8-v2-c9-review',
    title: 'Nhận biết trường hợp đồng dạng',
    difficulty: 'understanding',
    skillTags: ['tam-giac-dong-dang', 'cac-truong-hop'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        {
          prompt: 'Hai tam giác có hai cặp cạnh tỉ lệ và góc xen giữa hai cặp cạnh đó bằng nhau thì đồng dạng theo trường hợp nào?',
          correct: '(c.g.c)',
          distractors: ['(g.g)', '(c.c.c)', '(g.c.g)']
        },
        {
          prompt: 'Hai tam giác có ba cặp cạnh tương ứng tỉ lệ thì đồng dạng theo trường hợp nào?',
          correct: '(c.c.c)',
          distractors: ['(c.g.c)', '(g.g)', 'Không thể kết luận']
        },
        {
          prompt: 'Hai tam giác có hai cặp góc tương ứng bằng nhau thì đồng dạng theo trường hợp nào?',
          correct: '(g.g)',
          distractors: ['(c.c.c)', '(c.g.c)', '(g.c.g)']
        }
      ];
      const q = cases[rng.int(0, 2)];

      return buildMultipleChoice({
        templateId: 'g8-c9-review-tpl-03',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Ba trường hợp đồng dạng của tam giác: (g.g), (c.g.c), (c.c.c).',
          steps: [
            'Ba trường hợp đồng dạng của tam giác:',
            '• (g.g): Hai cặp góc tương ứng bằng nhau.',
            '• (c.g.c): Hai cặp cạnh tỉ lệ kẹp góc bằng nhau.',
            '• (c.c.c): Ba cặp cạnh tương ứng tỉ lệ.',
            `Đáp án đúng: "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g8-c9-review-tpl-04',
    lessonId: 'g8-v2-c9-review',
    title: 'Tam giác vuông đồng dạng',
    difficulty: 'application',
    skillTags: ['tam-giac-vuong', 'dong-dang', 'duong-cao'],
    estimatedSeconds: 55,
    generator(seed) {
      const rng = createRng(seed);
      // Pythagorean triples: 3-4-5, 6-8-10, 5-12-13
      const triples = [[3,4,5],[6,8,10],[5,12,13]];
      const [a, b, c] = triples[rng.int(0, 2)];
      const hc = (a * b) / c;
      const hcFrac = `${a * b}/${c}`;
      const isInt = Number.isInteger(hc);
      const hcDisplay = isInt ? `${hc}` : hcFrac;

      const correctText = isInt ? `$CH = ${hcDisplay}$ cm` : `$CH = \\frac{${a*b}}{${c}}$ cm`;
      const distractors = [
        `$CH = ${a}$ cm`,
        `$CH = ${b}$ cm`,
        `$CH = ${c}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-review-tpl-04',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $C$ có $AC = ${a}$ cm, $BC = ${b}$ cm, $AB = ${c}$ cm. Đường cao $CH$ xuống $AB$. Tính $CH$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Dùng hệ thức: $CH = \\frac{AC \\cdot BC}{AB}$.`,
          steps: [
            `Diện tích $\\triangle ABC = \\frac{1}{2} \\cdot AC \\cdot BC = \\frac{1}{2} \\cdot ${a} \\cdot ${b} = ${a*b/2}\\text{ cm}^2$.`,
            `Cũng bằng $\\frac{1}{2} \\cdot AB \\cdot CH = \\frac{1}{2} \\cdot ${c} \\cdot CH$.`,
            `$CH = \\frac{AC \\cdot BC}{AB} = \\frac{${a} \\times ${b}}{${c}} = \\frac{${a*b}}{${c}}${isInt ? ' = ' + hc : ''}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-review-tpl-05',
    lessonId: 'g8-v2-c9-review',
    title: 'Tính chu vi từ tỉ số đồng dạng',
    difficulty: 'basic',
    skillTags: ['tam-giac-dong-dang', 'chu-vi'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.int(2, 5);
      const p2 = rng.int(3, 10) * k * 2; // Ensure divisible by k
      const p1 = p2 / k;

      const correctText = `$P = ${p1}$ cm`;
      const distractors = [
        `$P = ${p2}$ cm`,
        `$P = ${p1 + k}$ cm`,
        `$P = ${p1 * k}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-review-tpl-05',
        seed,
        prompt: `$\\triangle ABC \\sim \\triangle A'B'C'$ với tỉ số $k = ${k}$. Chu vi $\\triangle A'B'C' = ${p2}$ cm. Tính chu vi $\\triangle ABC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tỉ số chu vi bằng tỉ số đồng dạng: $\\frac{P'}{P} = k$.`,
          steps: [
            `$\\frac{P'}{P} = k = ${k}$.`,
            `$P = \\frac{P'}{k} = \\frac{${p2}}{${k}} = ${p1}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
