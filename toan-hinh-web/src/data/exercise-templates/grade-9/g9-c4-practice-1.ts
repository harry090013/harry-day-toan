import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C4Practice1: ExerciseTemplate[] = [
  {
    id: 'g9-c4-practice-1-tpl-01',
    lessonId: 'g9-v1-c4-practice-1',
    title: 'Tính cạnh góc vuông từ tỉ số lượng giác',
    difficulty: 'basic',
    skillTags: ['luong-giac', 'tinh-canh', 'tam-giac-vuong'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // ABC right at A, given angle B and hypotenuse BC
      const hyp = rng.int(5, 15);
      const sinVals = [
        { sin: '1/2', opp: hyp / 2, angle: 30 },
        { sin: '\\sqrt{2}/2', opp: Math.round(hyp * Math.SQRT2 / 2), angle: 45 },
        { sin: '\\sqrt{3}/2', opp: Math.round(hyp * Math.sqrt(3) / 2), angle: 60 },
      ];
      const item = sinVals[rng.int(0, 2)];
      if (!Number.isInteger(item.opp) || item.opp <= 0 || item.opp >= hyp) {
        const hyp2 = 10;
        const item2 = { sin: '1/2', opp: 5, angle: 30, hyp: hyp2 };
        const correctText = `$AC = ${item2.opp}$ cm`;
        return buildMultipleChoice({
          templateId: 'g9-c4-practice-1-tpl-01',
          seed,
          prompt: `Tam giác $ABC$ vuông tại $A$, $\\widehat{B} = ${item2.angle}^\\circ$, $BC = ${item2.hyp}$ cm. Tính $AC$.`,
          correctText,
          distractorTexts: [`$AC = ${item2.hyp}$ cm`, `$AC = ${item2.hyp * 2}$ cm`, `$AC = ${item2.opp + 2}$ cm`],
          solution: {
            summary: `$AC = BC \\cdot \\sin B$.`,
            steps: [
              `$AC = BC \\cdot \\sin ${item2.angle}^\\circ = ${item2.hyp} \\cdot ${item2.sin} = ${item2.opp}$ cm.`
            ],
            finalAnswer: correctText
          }
        });
      }
      const correctText = `$AC = ${item.opp}$ cm`;
      const distractors = [
        `$AC = ${hyp}$ cm`,
        `$AC = ${item.opp + 1}$ cm`,
        `$AC = ${hyp - item.opp}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-practice-1-tpl-01',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $A$, $\\widehat{B} = ${item.angle}^\\circ$, $BC = ${hyp}$ cm. Tính $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$AC = BC \\cdot \\sin B$.`,
          steps: [
            `$\\sin B = \\frac{AC}{BC}$, suy ra $AC = BC \\cdot \\sin ${item.angle}^\\circ = ${hyp} \\cdot ${item.sin} = ${item.opp}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c4-practice-1-tpl-02',
    lessonId: 'g9-v1-c4-practice-1',
    title: 'Tính góc nhọn từ tỉ số lượng giác biết hai cạnh',
    difficulty: 'understanding',
    skillTags: ['luong-giac', 'tinh-goc', 'tam-giac-vuong'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { adj: 3, hyp: 6, angle: 60, func: '\\cos', ratio: '1/2' },
        { adj: 5, hyp: 10, angle: 60, func: '\\cos', ratio: '1/2' },
        { adj: 4, hyp: 8, angle: 60, func: '\\cos', ratio: '1/2' },
        { opp: 3, hyp: 6, angle: 30, func: '\\sin', ratio: '1/2' },
        { opp: 5, hyp: 10, angle: 30, func: '\\sin', ratio: '1/2' },
      ];
      const c = cases[rng.int(0, 4)];
      const given = c.adj !== undefined
        ? `$AB = ${c.adj}$ cm, $BC = ${c.hyp}$ cm`
        : `$AC = ${c.opp}$ cm, $BC = ${c.hyp}$ cm`;
      const ratio = c.adj !== undefined
        ? `\\frac{AB}{BC} = \\frac{${c.adj}}{${c.hyp}} = ${c.ratio}`
        : `\\frac{AC}{BC} = \\frac{${c.opp}}{${c.hyp}} = ${c.ratio}`;
      const correctText = `$\\widehat{B} = ${c.angle}^\\circ$`;
      const distractors = [
        `$\\widehat{B} = ${c.angle - 10}^\\circ$`,
        `$\\widehat{B} = ${c.angle + 10}^\\circ$`,
        `$\\widehat{B} = 45^\\circ$`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-practice-1-tpl-02',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $A$, ${given}. Tính góc $B$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính tỉ số lượng giác rồi tra bảng hoặc dùng máy tính.`,
          steps: [
            `$${c.func} B = ${ratio}$.`,
            `Suy ra $\\widehat{B} = ${c.angle}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c4-practice-1-tpl-03',
    lessonId: 'g9-v1-c4-practice-1',
    title: 'Hệ thức lượng trong tam giác vuông – tính cạnh huyền',
    difficulty: 'understanding',
    skillTags: ['he-thuc-luong', 'tam-giac-vuong', 'luong-giac'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { leg: 6, angle: 30, hyp: 12, func: '\\sin' },
        { leg: 5, angle: 30, hyp: 10, func: '\\sin' },
        { leg: 8, angle: 30, hyp: 16, func: '\\sin' },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$BC = ${c.hyp}$ cm`;
      const distractors = [
        `$BC = ${c.leg}$ cm`,
        `$BC = ${c.hyp + 2}$ cm`,
        `$BC = ${c.hyp / 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-practice-1-tpl-03',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $A$, $\\widehat{B} = ${c.angle}^\\circ$, $AC = ${c.leg}$ cm. Tính cạnh huyền $BC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Từ $\\sin B = \\frac{AC}{BC}$, suy ra $BC = \\frac{AC}{\\sin B}$.`,
          steps: [
            `$\\sin ${c.angle}^\\circ = \\frac{AC}{BC} = \\frac{1}{2}$.`,
            `$BC = \\frac{AC}{\\sin ${c.angle}^\\circ} = \\frac{${c.leg}}{1/2} = ${c.hyp}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c4-practice-1-tpl-04',
    lessonId: 'g9-v1-c4-practice-1',
    title: 'Toán thực tế – chiều cao từ bóng và góc ngẩng',
    difficulty: 'application',
    skillTags: ['luong-giac', 'thuc-te', 'chieu-cao'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      // Height = shadow * tan(elevation angle)
      const shadows = [10, 20, 15];
      const shadow = shadows[rng.int(0, 2)];
      const angle = 45; // tan 45 = 1
      const height = shadow; // since tan 45 = 1
      const correctText = `$h = ${height}$ m`;
      const distractors = [
        `$h = ${shadow / 2}$ m`,
        `$h = ${shadow * 2}$ m`,
        `$h = ${shadow + 5}$ m`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-practice-1-tpl-04',
        seed,
        prompt: `Một cột đèn thẳng đứng tạo bóng dài $${shadow}$ m trên mặt đất phẳng. Góc ngẩng từ đầu bóng đến đỉnh cột là $${angle}^\\circ$. Tính chiều cao cột đèn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chiều cao $h = d \\cdot \\tan\\alpha$ với $d$ là chiều dài bóng và $\\alpha$ là góc ngẩng.`,
          steps: [
            `Gọi $h$ là chiều cao cột, $d = ${shadow}$ m là chiều dài bóng.`,
            `$\\tan ${angle}^\\circ = \\frac{h}{d} \\Rightarrow h = d \\cdot \\tan ${angle}^\\circ = ${shadow} \\times 1 = ${height}$ m.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c4-practice-1-tpl-05',
    lessonId: 'g9-v1-c4-practice-1',
    title: 'Tính cạnh từ hai góc và một cạnh trong tam giác vuông',
    difficulty: 'understanding',
    skillTags: ['luong-giac', 'tinh-canh', 'hai-goc'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { adj: 6, angle: 30, opp: 2 * Math.round(6 * Math.tan(Math.PI / 6)) },
        { adj: 10, angle: 30, opp: Math.round(10 * Math.tan(Math.PI / 6) * 10) / 10 },
        { adj: 8, angle: 45, opp: 8 },
      ];
      const c = cases[rng.int(0, 2)];
      // Use case index 2 only (adj=8, angle=45, opp=8) as it's always integer
      const ca = { adj: 8, angle: 45, opp: 8 };
      const correctText = `$AC = ${ca.opp}$ cm`;
      const distractors = [
        `$AC = ${ca.adj * 2}$ cm`,
        `$AC = ${ca.adj / 2}$ cm`,
        `$AC = ${ca.adj + 2}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c4-practice-1-tpl-05',
        seed,
        prompt: `Tam giác $ABC$ vuông tại $A$, $\\widehat{B} = ${ca.angle}^\\circ$, $AB = ${ca.adj}$ cm. Tính $AC$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$AC = AB \\cdot \\tan B$ khi góc $B$ và cạnh kề $AB$ đã biết.`,
          steps: [
            `$\\tan B = \\frac{AC}{AB} \\Rightarrow AC = AB \\cdot \\tan ${ca.angle}^\\circ = ${ca.adj} \\times 1 = ${ca.opp}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
