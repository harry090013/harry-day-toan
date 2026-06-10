import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C9Practice2: ExerciseTemplate[] = [
  {
    id: 'g8-c9-practice-2-tpl-01',
    lessonId: 'g8-v2-c9-practice-2',
    title: 'Trường hợp đồng dạng (c.c.c)',
    difficulty: 'understanding',
    skillTags: ['tam-giac-dong-dang', 'truong-hop-ccc'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.int(2, 5);
      const a = rng.int(2, 6);
      const b = rng.int(2, 6);
      const c = rng.int(2, 6);
      const a1 = a * k;
      const b1 = b * k;
      const c1 = c * k;

      const correctText = `$\\triangle ABC \\sim \\triangle A'B'C'$ (c.c.c)`;
      const distractors = [
        `Hai tam giác không đồng dạng`,
        `$\\triangle ABC \\sim \\triangle B'A'C'$ (c.c.c)`,
        `Cần thêm thông tin về góc để kết luận`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-2-tpl-01',
        seed,
        prompt: `Tam giác $ABC$ có các cạnh $${a}$, $${b}$, $${c}$ cm. Tam giác $A'B'C'$ có các cạnh $${a1}$, $${b1}$, $${c1}$ cm. Kết luận nào đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trường hợp đồng dạng (c.c.c): ba cặp cạnh tỉ lệ thì hai tam giác đồng dạng.`,
          steps: [
            `Tỉ số các cạnh tương ứng: $\\frac{${a1}}{${a}} = \\frac{${b1}}{${b}} = \\frac{${c1}}{${c}} = ${k}$.`,
            `Ba cặp cạnh tỉ lệ nên $\\triangle ABC \\sim \\triangle A'B'C'$ (c.c.c).`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-2-tpl-02',
    lessonId: 'g8-v2-c9-practice-2',
    title: 'Trường hợp đồng dạng (c.g.c)',
    difficulty: 'understanding',
    skillTags: ['tam-giac-dong-dang', 'truong-hop-cgc'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const angle = rng.int(8, 16) * 5; // 40–80
      const ab = rng.int(2, 6);
      const ac = rng.int(2, 6);
      const k = rng.int(2, 4);
      const a1b1 = ab * k;
      const a1c1 = ac * k;

      const correctText = `$\\triangle ABC \\sim \\triangle A'B'C'$ (c.g.c)`;
      const distractors = [
        `Hai tam giác không đồng dạng vì chỉ có một góc bằng nhau`,
        `$\\triangle ABC \\sim \\triangle B'A'C'$ (c.g.c)`,
        `Chưa đủ điều kiện để kết luận đồng dạng`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-2-tpl-02',
        seed,
        prompt: `Tam giác $ABC$ có $\\widehat{A} = ${angle}^\\circ$, $AB = ${ab}$ cm, $AC = ${ac}$ cm. Tam giác $A'B'C'$ có $\\widehat{A'} = ${angle}^\\circ$, $A'B' = ${a1b1}$ cm, $A'C' = ${a1c1}$ cm. Kết luận nào đúng?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Trường hợp đồng dạng (c.g.c): hai cạnh tỉ lệ và góc xen giữa bằng nhau.`,
          steps: [
            `Góc xen giữa: $\\widehat{A} = \\widehat{A'} = ${angle}^\\circ$.`,
            `Tỉ số cạnh: $\\frac{A'B'}{AB} = \\frac{${a1b1}}{${ab}} = ${k}$; $\\frac{A'C'}{AC} = \\frac{${a1c1}}{${ac}} = ${k}$.`,
            `Hai cặp cạnh tỉ lệ kẹp góc bằng nhau nên $\\triangle ABC \\sim \\triangle A'B'C'$ (c.g.c).`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-2-tpl-03',
    lessonId: 'g8-v2-c9-practice-2',
    title: 'Tính cạnh chưa biết khi hai tam giác đồng dạng',
    difficulty: 'understanding',
    skillTags: ['tam-giac-dong-dang', 'tinh-canh'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const ab = rng.int(3, 9);
      const bc = rng.int(3, 9);
      const k = rng.int(2, 4);
      const a1b1 = ab * k;
      // b1c1 is unknown
      const b1c1 = bc * k;

      const correctText = `$B'C' = ${b1c1}$ cm`;
      const distractors = [
        `$B'C' = ${bc}$ cm`,
        `$B'C' = ${b1c1 + k}$ cm`,
        `$B'C' = ${b1c1 - k > 0 ? b1c1 - k : b1c1 + 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-2-tpl-03',
        seed,
        prompt: `$\\triangle ABC \\sim \\triangle A'B'C'$ với $AB = ${ab}$ cm, $A'B' = ${a1b1}$ cm, $BC = ${bc}$ cm. Tính $B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Dùng tỉ số đồng dạng để tính cạnh chưa biết.`,
          steps: [
            `Tỉ số đồng dạng: $k = \\frac{A'B'}{AB} = \\frac{${a1b1}}{${ab}} = ${k}$.`,
            `$B'C' = k \\times BC = ${k} \\times ${bc} = ${b1c1}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-2-tpl-04',
    lessonId: 'g8-v2-c9-practice-2',
    title: 'Tam giác đồng dạng trong hình có đường cao',
    difficulty: 'application',
    skillTags: ['tam-giac-dong-dang', 'duong-cao', 'vuong'],
    estimatedSeconds: 55,
    generator(seed) {
      const rng = createRng(seed);
      // Use Pythagorean triples: 3-4-5, 6-8-10, 5-12-13
      const triples = [[3,4,5],[6,8,10],[5,12,13]];
      const [a, b, c] = triples[rng.int(0, 2)];
      // AH = a^2/c: for 3-4-5 => 9/5 (not int), for 6-8-10 => 36/10 (not int), for 5-12-13 => 25/13 (not int)
      // Use BH = b^2/c instead and check if integer
      // For 6-8-10: a=6,b=8,c=10 => BH = 64/10 (not int)
      // Use scaled triples: 3-4-5 * 5 = 15-20-25, AH = 225/25 = 9, BH = 400/25 = 16
      // Hard-code safe examples
      const examples = [
        { a: 15, b: 20, c: 25, ah: 9, bh: 16, ch: 12 },
        { a: 9,  b: 12, c: 15, ah: 27/5, bh: 48/5, ch: 36/5 },
        { a: 5,  b: 12, c: 13, ah: 25/13, bh: 144/13, ch: 60/13 }
      ];
      // Only use integer-answer example
      const ex = examples[0]; // 15-20-25 always gives clean integers

      const correctText = `$AH = ${ex.ah}$ cm`;
      const distractors = [
        `$AH = ${ex.a}$ cm`,
        `$AH = ${ex.b}$ cm`,
        `$AH = ${ex.ah + 3}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-2-tpl-04',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $C$, đường cao $CH$ xuống cạnh huyền $AB$. Biết $AC = ${ex.a}$ cm, $AB = ${ex.c}$ cm. Tính $AH$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$\\triangle AHC \\sim \\triangle ACB$ (g.g) nên $\\frac{AH}{AC} = \\frac{AC}{AB}$.`,
          steps: [
            `Vì $\\triangle AHC \\sim \\triangle ACB$, ta có: $\\frac{AH}{AC} = \\frac{AC}{AB}$.`,
            `$AH = \\frac{AC^2}{AB} = \\frac{${ex.a}^2}{${ex.c}} = \\frac{${ex.a * ex.a}}{${ex.c}} = ${ex.ah}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c9-practice-2-tpl-05',
    lessonId: 'g8-v2-c9-practice-2',
    title: 'Chu vi tam giác đồng dạng',
    difficulty: 'basic',
    skillTags: ['tam-giac-dong-dang', 'chu-vi', 'ty-so'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const k = rng.int(2, 5);
      const p1 = rng.int(3, 10) * 3; // Divisible by 3 for variety
      const p2 = p1 * k;

      const correctText = `$P' = ${p2}$ cm`;
      const distractors = [
        `$P' = ${p1}$ cm`,
        `$P' = ${p1 * k * k}$ cm`,
        `$P' = ${p2 + k}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c9-practice-2-tpl-05',
        seed,
        prompt: `$\\triangle ABC \\sim \\triangle A'B'C'$ theo tỉ số đồng dạng $k = ${k}$. Biết chu vi $\\triangle ABC = ${p1}$ cm. Tính chu vi $\\triangle A'B'C'$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chu vi của hai tam giác đồng dạng tỉ lệ với tỉ số đồng dạng $k$.`,
          steps: [
            `Tỉ số chu vi bằng tỉ số đồng dạng: $\\frac{P'}{P} = k = ${k}$.`,
            `$P' = k \\times P = ${k} \\times ${p1} = ${p2}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
