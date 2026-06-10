import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C10Practice1: ExerciseTemplate[] = [
  {
    id: 'g9-c10-practice-1-tpl-01',
    lessonId: 'g9-v2-c10-practice-1',
    title: 'Tính diện tích xung quanh hình trụ',
    difficulty: 'basic',
    skillTags: ['hinh-tru', 'dien-tich-xung-quanh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const rs = [2, 3, 4, 5];
      const hs = [5, 6, 7, 8, 10];
      const r = rs[rng.int(0, 3)];
      const h = hs[rng.int(0, 4)];
      const s = 2 * r * h; // S = 2πrh, coefficient without π
      const correctText = `$S_{xq} = ${s}\\pi$ cm²`;
      const distractors = [
        `$S_{xq} = ${s * 2}\\pi$ cm²`,
        `$S_{xq} = ${r * h}\\pi$ cm²`,
        `$S_{xq} = ${s + 4}\\pi$ cm²`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-practice-1-tpl-01',
        seed,
        prompt: `Hình trụ có bán kính đáy $r = ${r}$ cm, chiều cao $h = ${h}$ cm. Tính diện tích xung quanh $S_{xq}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$S_{xq} = 2\\pi r h$.`,
          steps: [
            `$S_{xq} = 2\\pi r h = 2\\pi \\times ${r} \\times ${h} = ${s}\\pi$ cm².`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c10-practice-1-tpl-02',
    lessonId: 'g9-v2-c10-practice-1',
    title: 'Tính thể tích hình trụ',
    difficulty: 'basic',
    skillTags: ['hinh-tru', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const rs = [2, 3, 4, 5];
      const hs = [3, 4, 5, 6, 7];
      const r = rs[rng.int(0, 3)];
      const h = hs[rng.int(0, 4)];
      const v = r * r * h; // V = πr²h, coeff without π
      const correctText = `$V = ${v}\\pi$ cm³`;
      const distractors = [
        `$V = ${v * 2}\\pi$ cm³`,
        `$V = ${r * h}\\pi$ cm³`,
        `$V = ${v + r}\\pi$ cm³`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-practice-1-tpl-02',
        seed,
        prompt: `Hình trụ có bán kính đáy $r = ${r}$ cm, chiều cao $h = ${h}$ cm. Tính thể tích $V$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$V = \\pi r^2 h$.`,
          steps: [
            `$V = \\pi r^2 h = \\pi \\times ${r}^2 \\times ${h} = ${v}\\pi$ cm³.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c10-practice-1-tpl-03',
    lessonId: 'g9-v2-c10-practice-1',
    title: 'Tính diện tích xung quanh hình nón',
    difficulty: 'understanding',
    skillTags: ['hinh-non', 'dien-tich-xung-quanh', 'duong-sinh'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 3, l: 5, s: 15 },   // S = πrl = π*3*5 = 15π
        { r: 4, l: 6, s: 24 },   // π*4*6 = 24π
        { r: 6, l: 10, s: 60 },  // π*6*10 = 60π
        { r: 5, l: 7, s: 35 },   // π*5*7 = 35π
      ];
      const c = cases[rng.int(0, 3)];
      const correctText = `$S_{xq} = ${c.s}\\pi$ cm²`;
      const distractors = [
        `$S_{xq} = ${c.r * c.r}\\pi$ cm²`,
        `$S_{xq} = ${c.s * 2}\\pi$ cm²`,
        `$S_{xq} = ${c.s + 5}\\pi$ cm²`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-practice-1-tpl-03',
        seed,
        prompt: `Hình nón có bán kính đáy $r = ${c.r}$ cm, đường sinh $l = ${c.l}$ cm. Tính diện tích xung quanh $S_{xq}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$S_{xq} = \\pi r l$.`,
          steps: [
            `$S_{xq} = \\pi r l = \\pi \\times ${c.r} \\times ${c.l} = ${c.s}\\pi$ cm².`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c10-practice-1-tpl-04',
    lessonId: 'g9-v2-c10-practice-1',
    title: 'Tính thể tích hình nón',
    difficulty: 'understanding',
    skillTags: ['hinh-non', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 3, h: 4, v: 12 },   // V = πr²h/3 = π*9*4/3 = 12π
        { r: 6, h: 7, v: 84 },   // π*36*7/3 = 84π
        { r: 3, h: 7, v: 21 },   // π*9*7/3 = 21π
        { r: 6, h: 4, v: 48 },   // π*36*4/3 = 48π
      ];
      const c = cases[rng.int(0, 3)];
      const correctText = `$V = ${c.v}\\pi$ cm³`;
      const distractors = [
        `$V = ${c.v * 3}\\pi$ cm³`,
        `$V = ${c.r * c.r * c.h}\\pi$ cm³`,
        `$V = ${c.v + 3}\\pi$ cm³`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-practice-1-tpl-04',
        seed,
        prompt: `Hình nón có bán kính đáy $r = ${c.r}$ cm, chiều cao $h = ${c.h}$ cm. Tính thể tích $V$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$V = \\frac{1}{3}\\pi r^2 h$.`,
          steps: [
            `$V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3} \\times \\pi \\times ${c.r}^2 \\times ${c.h} = \\frac{${c.r*c.r*c.h}\\pi}{3} = ${c.v}\\pi$ cm³.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c10-practice-1-tpl-05',
    lessonId: 'g9-v2-c10-practice-1',
    title: 'Toán thực tế: Thể tích đồ vật hình trụ hoặc hình nón',
    difficulty: 'application',
    skillTags: ['hinh-tru', 'hinh-non', 'thuc-te', 'the-tich'],
    estimatedSeconds: 50,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { shape: 'hình trụ', r: 5, h: 10, v: 250, formula: 'V = \\pi r^2 h = \\pi \\times 25 \\times 10 = 250\\pi' },
        { shape: 'hình trụ', r: 3, h: 7, v: 63, formula: 'V = \\pi r^2 h = \\pi \\times 9 \\times 7 = 63\\pi' },
        { shape: 'hình nón', r: 6, h: 8, v: 96, formula: 'V = \\frac{1}{3}\\pi r^2 h = \\frac{1}{3}\\pi \\times 36 \\times 8 = 96\\pi' },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$V = ${c.v}\\pi$ cm³`;
      const distractors = [
        `$V = ${c.v * 2}\\pi$ cm³`,
        `$V = ${c.v / 2}\\pi$ cm³`,
        `$V = ${c.v + 10}\\pi$ cm³`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-practice-1-tpl-05',
        seed,
        prompt: `Một cái ${c.shape} có bán kính đáy $r = ${c.r}$ cm và chiều cao $h = ${c.h}$ cm. Tính thể tích.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức thể tích ${c.shape}.`,
          steps: [`$${c.formula} = ${c.v}\\pi$ cm³.`],
          finalAnswer: correctText
        }
      });
    }
  }
];
