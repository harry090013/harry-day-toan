import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C10Review: ExerciseTemplate[] = [
  {
    id: 'g9-c10-review-tpl-01',
    lessonId: 'g9-v2-c10-review',
    title: 'Ôn tập: Diện tích toàn phần hình trụ',
    difficulty: 'understanding',
    skillTags: ['hinh-tru', 'dien-tich-toan-phan', 'on-tap'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 3, h: 5, stp: 48 },
        { r: 4, h: 6, stp: 80 },
        { r: 5, h: 7, stp: 120 },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$S_{tp} = ${c.stp}\\pi$ cm²`;
      const distractors = [
        `$S_{tp} = ${c.r * c.h * 2}\\pi$ cm²`,
        `$S_{tp} = ${c.stp + 10}\\pi$ cm²`,
        `$S_{tp} = ${c.stp / 2}\\pi$ cm²`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-review-tpl-01',
        seed,
        prompt: `Hình trụ bán kính $r = ${c.r}$ cm, chiều cao $h = ${c.h}$ cm. Tính diện tích toàn phần.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$S_{tp} = 2\\pi r(r + h)$.`,
          steps: [
            `$S_{tp} = 2\\pi r(r + h) = 2\\pi \\times ${c.r} \\times (${c.r} + ${c.h}) = 2\\pi \\times ${c.r} \\times ${c.r + c.h} = ${c.stp}\\pi$ cm².`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c10-review-tpl-02',
    lessonId: 'g9-v2-c10-review',
    title: 'Ôn tập: Thể tích hình cầu',
    difficulty: 'understanding',
    skillTags: ['hinh-cau', 'the-tich', 'on-tap'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 3, v: 36 },
        { r: 6, v: 288 },
        { r: 9, v: 972 },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$V = ${c.v}\\pi$ cm³`;
      const distractors = [
        `$V = ${c.v / 2}\\pi$ cm³`,
        `$V = ${c.v * 2}\\pi$ cm³`,
        `$V = ${c.r * c.r * c.r}\\pi$ cm³`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-review-tpl-02',
        seed,
        prompt: `Hình cầu bán kính $R = ${c.r}$ cm. Tính thể tích.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$V = \\frac{4}{3}\\pi R^3$.`,
          steps: [
            `$V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\times ${c.r}^3 = \\frac{4}{3}\\pi \\times ${c.r * c.r * c.r} = ${c.v}\\pi$ cm³.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c10-review-tpl-03',
    lessonId: 'g9-v2-c10-review',
    title: 'Ôn tập: Diện tích mặt cầu',
    difficulty: 'understanding',
    skillTags: ['hinh-cau', 'dien-tich-mat-cau', 'on-tap'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const cases = [
        { r: 3, s: 36 },
        { r: 5, s: 100 },
        { r: 6, s: 144 },
        { r: 4, s: 64 },
      ];
      const c = cases[rng.int(0, 3)];
      const correctText = `$S = ${c.s}\\pi$ cm²`;
      const distractors = [
        `$S = ${c.s / 4}\\pi$ cm²`,
        `$S = ${c.s * 2}\\pi$ cm²`,
        `$S = ${c.r * c.r}\\pi$ cm²`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-review-tpl-03',
        seed,
        prompt: `Hình cầu bán kính $R = ${c.r}$ cm. Tính diện tích mặt cầu.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$S = 4\\pi R^2$.`,
          steps: [
            `$S = 4\\pi R^2 = 4\\pi \\times ${c.r}^2 = 4\\pi \\times ${c.r * c.r} = ${c.s}\\pi$ cm².`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-c10-review-tpl-04',
    lessonId: 'g9-v2-c10-review',
    title: 'Ôn tập: So sánh và lựa chọn công thức đúng',
    difficulty: 'basic',
    skillTags: ['hinh-tru', 'hinh-non', 'hinh-cau', 'cong-thuc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const questions = [
        {
          prompt: 'Công thức thể tích hình cầu bán kính $R$ là:',
          correct: '$V = \\dfrac{4}{3}\\pi R^3$',
          distractors: ['$V = \\pi R^3$', '$V = \\dfrac{1}{3}\\pi R^3$', '$V = 4\\pi R^2$']
        },
        {
          prompt: 'Công thức diện tích xung quanh hình nón bán kính $r$, đường sinh $l$ là:',
          correct: '$S_{xq} = \\pi r l$',
          distractors: ['$S_{xq} = \\pi r^2$', '$S_{xq} = 2\\pi r l$', '$S_{xq} = \\pi r h$']
        },
        {
          prompt: 'Công thức thể tích hình trụ bán kính $r$, chiều cao $h$ là:',
          correct: '$V = \\pi r^2 h$',
          distractors: ['$V = \\dfrac{1}{3}\\pi r^2 h$', '$V = 2\\pi r h$', '$V = \\pi r h^2$']
        }
      ];
      const q = questions[rng.int(0, 2)];
      return buildMultipleChoice({
        templateId: 'g9-c10-review-tpl-04',
        seed,
        prompt: q.prompt,
        correctText: q.correct,
        distractorTexts: q.distractors,
        solution: {
          summary: 'Các công thức cần thuộc: trụ: V=πr²h; nón: V=πr²h/3, S=πrl; cầu: V=4πR³/3, S=4πR².',
          steps: [`Đáp án: ${q.correct}.`],
          finalAnswer: q.correct
        }
      });
    }
  },
  {
    id: 'g9-c10-review-tpl-05',
    lessonId: 'g9-v2-c10-review',
    title: 'Ôn tập: Bài toán thực tế tổng hợp',
    difficulty: 'application',
    skillTags: ['hinh-cau', 'thuc-te', 'tong-hop'],
    estimatedSeconds: 55,
    generator(seed) {
      const rng = createRng(seed);
      type CaseItem = { obj: string; r: number; val: number; unit: string; unitName: string; formula: string; symbol: string };
      const cases: CaseItem[] = [
        { obj: 'quả bóng', r: 11, val: 484, unit: 'cm²', unitName: 'diện tích mặt cầu', formula: 'S = 4\\pi R^2 = 4\\pi \\times 121 = 484\\pi', symbol: 'S' },
        { obj: 'bình cầu', r: 6, val: 288, unit: 'cm³', unitName: 'thể tích', formula: 'V = \\frac{4}{3}\\pi R^3 = \\frac{4}{3}\\pi \\times 216 = 288\\pi', symbol: 'V' },
        { obj: 'quả địa cầu thu nhỏ', r: 5, val: 100, unit: 'cm²', unitName: 'diện tích mặt cầu', formula: 'S = 4\\pi R^2 = 4\\pi \\times 25 = 100\\pi', symbol: 'S' },
      ];
      const c = cases[rng.int(0, 2)];
      const correctText = `$${c.symbol} = ${c.val}\\pi$ ${c.unit}`;
      const distractors = [
        `$${c.symbol} = ${c.val * 2}\\pi$ ${c.unit}`,
        `$${c.symbol} = ${Math.floor(c.val / 2)}\\pi$ ${c.unit}`,
        `$${c.symbol} = ${c.val + 12}\\pi$ ${c.unit}`
      ].filter(t => t !== correctText).slice(0, 3);
      return buildMultipleChoice({
        templateId: 'g9-c10-review-tpl-05',
        seed,
        prompt: `Tính ${c.unitName} của ${c.obj} hình cầu bán kính $R = ${c.r}$ cm.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức hình cầu.`,
          steps: [`$${c.formula} = ${c.val}\\pi$ ${c.unit}.`],
          finalAnswer: correctText
        }
      });
    }
  }
];
