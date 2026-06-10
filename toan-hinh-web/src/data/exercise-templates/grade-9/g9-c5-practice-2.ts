import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5Practice2: ExerciseTemplate[] = [
  {
    id: 'g9-c5-practice-2-tpl-01',
    lessonId: 'g9-v1-c5-practice-2',
    title: 'Tính độ dài cung tròn',
    difficulty: 'basic',
    skillTags: ['duong-tron', 'do-dai-cung', 'cong-thuc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const rs = [3, 4, 5, 6, 7];
      const r = rs[rng.int(0, 4)];
      const degs = [60, 90, 120, 180];
      const deg = degs[rng.int(0, 3)];
      // l = pi*r*deg/180
      const num = r * deg;
      const den = 180;
      const gcdVal = (a: number, b: number): number => b === 0 ? a : gcdVal(b, a % b);
      const g = gcdVal(num, den);
      const ln = num / g;
      const ld = den / g;
      const lStr = ld === 1 ? `${ln}\\pi` : `\\frac{${ln}\\pi}{${ld}}`;
      const correctText = `$l = ${lStr}$ cm`;
      const distractors = [
        `$l = ${lStr.replace('\\pi', '').trim() || '1'} $ cm`,
        `$l = 2\\pi r$ cm`,
        `$l = \\frac{${r * deg}\\pi}{360}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-2-tpl-01',
        seed,
        prompt: `Tính độ dài cung tròn có số đo $${deg}^\\circ$ trong đường tròn bán kính $R = ${r}$ cm.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$l = \\frac{\\pi R n}{180}$ với $n$ là số đo độ của cung.`,
          steps: [
            `$l = \\frac{\\pi \\times ${r} \\times ${deg}}{180} = \\frac{${num}\\pi}{180} = ${lStr}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-2-tpl-02',
    lessonId: 'g9-v1-c5-practice-2',
    title: 'Tính diện tích hình quạt tròn',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'dien-tich-quat', 'cong-thuc'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 6, deg: 60, s: 6 },    // S = pi*r^2*n/360 = pi*36*60/360 = 6pi
        { r: 4, deg: 90, s: 4 },    // pi*16*90/360 = 4pi
        { r: 3, deg: 120, s: 3 },   // pi*9*120/360 = 3pi
        { r: 6, deg: 90, s: 9 },    // pi*36*90/360 = 9pi
      ];
      const c = cases[rng.int(0, 3)];
      const correctText = `$S = ${c.s}\\pi$ cm²`;
      const distractors = [
        `$S = ${c.s * 2}\\pi$ cm²`,
        `$S = ${c.r}\\pi$ cm²`,
        `$S = ${c.s + 1}\\pi$ cm²`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-2-tpl-02',
        seed,
        prompt: `Tính diện tích hình quạt tròn có số đo cung $${c.deg}^\\circ$, bán kính $R = ${c.r}$ cm.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$S = \\frac{\\pi R^2 n}{360}$.`,
          steps: [
            `$S = \\frac{\\pi \\times ${c.r}^2 \\times ${c.deg}}{360} = \\frac{${c.r*c.r * c.deg}\\pi}{360} = ${c.s}\\pi$ cm².`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-2-tpl-03',
    lessonId: 'g9-v1-c5-practice-2',
    title: 'Vị trí tương đối đường thẳng và đường tròn',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'vi-tri-tuong-doi', 'duong-thang'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Đường thẳng và đường tròn có khoảng cách từ tâm đến đường thẳng $d < R$ thì có vị trí tương đối như thế nào?',
          correct: 'Đường thẳng cắt đường tròn tại hai điểm',
          distractors: ['Đường thẳng tiếp xúc đường tròn', 'Đường thẳng không cắt đường tròn', 'Đường thẳng là đường kính']
        },
        {
          prompt: 'Đường thẳng và đường tròn có khoảng cách từ tâm đến đường thẳng $d = R$ thì có vị trí tương đối như thế nào?',
          correct: 'Đường thẳng tiếp xúc đường tròn (tiếp tuyến)',
          distractors: ['Đường thẳng cắt đường tròn tại hai điểm', 'Đường thẳng không cắt đường tròn', 'Đường thẳng đi qua tâm']
        },
        {
          prompt: 'Đường thẳng và đường tròn có khoảng cách từ tâm đến đường thẳng $d > R$ thì có vị trí tương đối như thế nào?',
          correct: 'Đường thẳng không giao đường tròn',
          distractors: ['Đường thẳng tiếp xúc đường tròn', 'Đường thẳng cắt đường tròn tại hai điểm', 'Đường thẳng đi qua tâm']
        }
      ];
      const q = questions[rng.int(0, 2)];
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-2-tpl-03',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'd < R: cắt; d = R: tiếp xúc; d > R: không giao.',
          steps: [
            '• $d < R$: đường thẳng cắt đường tròn tại 2 điểm.',
            '• $d = R$: đường thẳng tiếp xúc đường tròn.',
            '• $d > R$: đường thẳng không giao đường tròn.',
            `Đáp án: "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-2-tpl-04',
    lessonId: 'g9-v1-c5-practice-2',
    title: 'Tính độ dài tiếp tuyến từ điểm ngoài đường tròn',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'tiep-tuyen', 'pythagore'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 3, d: 5, t: 4 },   // t^2 = d^2 - r^2 = 25-9=16, t=4
        { r: 5, d: 13, t: 12 }, // 169-25=144, t=12
        { r: 6, d: 10, t: 8 },  // 100-36=64, t=8
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$AT = ${c.t}$ cm`;
      const distractors = [
        `$AT = ${c.r}$ cm`,
        `$AT = ${c.d}$ cm`,
        `$AT = ${c.t + 1}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-2-tpl-04',
        seed,
        prompt: `Điểm $A$ nằm ngoài đường tròn tâm $O$ bán kính $R = ${c.r}$ cm, biết $OA = ${c.d}$ cm. Tính độ dài tiếp tuyến $AT$ kẻ từ $A$ đến đường tròn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$AT = \\sqrt{OA^2 - R^2}$ (vì $OT \\perp AT$).`,
          steps: [
            `Vì $OT \\perp AT$ nên tam giác $OAT$ vuông tại $T$.`,
            `$AT = \\sqrt{OA^2 - OT^2} = \\sqrt{${c.d}^2 - ${c.r}^2} = \\sqrt{${c.d*c.d} - ${c.r*c.r}} = \\sqrt{${c.t*c.t}} = ${c.t}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c5-practice-2-tpl-05',
    lessonId: 'g9-v1-c5-practice-2',
    title: 'Vị trí tương đối hai đường tròn',
    difficulty: 'understanding',
    skillTags: ['duong-tron', 'vi-tri-tuong-doi-hai-duong-tron'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Hai đường tròn có khoảng cách giữa hai tâm $d = R - r$ ($R > r$) thì có vị trí tương đối gì?',
          correct: 'Đường tròn nhỏ nằm trong đường tròn lớn và tiếp xúc trong',
          distractors: ['Hai đường tròn cắt nhau', 'Tiếp xúc ngoài', 'Không giao nhau']
        },
        {
          prompt: 'Hai đường tròn có khoảng cách giữa hai tâm $d = R + r$ thì có vị trí tương đối gì?',
          correct: 'Hai đường tròn tiếp xúc ngoài',
          distractors: ['Hai đường tròn cắt nhau', 'Tiếp xúc trong', 'Đường tròn này nằm trong đường tròn kia']
        },
        {
          prompt: 'Hai đường tròn có $|R - r| < d < R + r$ thì có vị trí tương đối gì?',
          correct: 'Hai đường tròn cắt nhau tại hai điểm',
          distractors: ['Hai đường tròn tiếp xúc ngoài', 'Hai đường tròn tiếp xúc trong', 'Không giao nhau']
        }
      ];
      const q = questions[rng.int(0, 2)];
      return buildMultipleChoice({
        templateId: 'g9-c5-practice-2-tpl-05',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Vị trí tương đối hai đường tròn phụ thuộc vào d so với R và r.',
          steps: [
            '• $d > R + r$: ngoài nhau.',
            '• $d = R + r$: tiếp xúc ngoài.',
            '• $|R-r| < d < R+r$: cắt nhau.',
            '• $d = |R-r|$: tiếp xúc trong.',
            '• $d < |R-r|$: đường tròn nhỏ trong đường tròn lớn.',
            `Đáp án: "${q.correct}".`
          ],
          finalAnswer: q.correct
        }
      });
    }
  }
];
