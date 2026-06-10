import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C10L31: ExerciseTemplate[] = [
  {
    id: 'g9-v2-c10-l31-tpl-01',
    lessonId: 'g9-v2-c10-l31',
    title: 'Tính diện tích xung quanh của hình trụ',
    difficulty: 'basic',
    skillTags: ['hinh-tru', 'dien-tich-xung-quanh', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const r = rng.element([3, 4, 5, 6]);
      const h = rng.element([5, 8, 10]);
      const sxq = 2 * r * h; // 2 * pi * r * h. In terms of pi.

      const correctText = `$${sxq}\\pi\\text{ cm}^2$`;
      const distractors = [
        `$${r * h}\\pi\\text{ cm}^2$`,
        `$${sxq * 2}\\pi\\text{ cm}^2$`,
        `$${sxq}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l31-tpl-01',
        seed,
        prompt: `Cho hình trụ có bán kính đáy $r = ${r}\\text{ cm}$ và chiều cao $h = ${h}\\text{ cm}$. Tính diện tích xung quanh của hình trụ đó (để kết quả chứa hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v2-c10-l31-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c10-solids',
          title: 'Hình trụ',
          alt: 'Hình trụ có bán kính và chiều cao.',
          notToScale: true,
          data: {
            type: 'cylinder',
            r: `${r} cm`,
            h: `${h} cm`
          }
        },
        solution: {
          summary: `Áp dụng công thức S_xq = 2 * pi * r * h.`,
          steps: [
            `Công thức diện tích xung quanh hình trụ: $S_{xq} = 2\\pi r h$.`,
            `Thay số: $S_{xq} = 2 \\cdot \\pi \\cdot ${r} \\cdot ${h} = ${sxq}\\pi\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l31-tpl-02',
    lessonId: 'g9-v2-c10-l31',
    title: 'Tính thể tích của hình trụ',
    difficulty: 'basic',
    skillTags: ['hinh-tru', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const r = rng.element([3, 4, 5]);
      const h = rng.element([6, 8, 10]);
      const v = r * r * h; // pi * r^2 * h

      const correctText = `$${v}\\pi\\text{ cm}^3$`;
      const distractors = [
        `$${r * h}\\pi\\text{ cm}^3$`,
        `$${2 * r * h}\\pi\\text{ cm}^3$`,
        `$${v}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l31-tpl-02',
        seed,
        prompt: `Cho hình trụ có bán kính đáy $r = ${r}\\text{ cm}$ và chiều cao $h = ${h}\\text{ cm}$. Tính thể tích của hình trụ đó (kết quả để dạng hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức V = pi * r^2 * h.`,
          steps: [
            `Công thức thể tích hình trụ: $V = \\pi r^2 h$.`,
            `Thay số $r = ${r}$ và $h = ${h}$:`,
            `$$V = \\pi \\cdot ${r}^2 \\cdot ${h} = \\pi \\cdot ${r * r} \\cdot ${h} = ${v}\\pi\\text{ cm}^3$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l31-tpl-03',
    lessonId: 'g9-v2-c10-l31',
    title: 'Tính diện tích xung quanh của hình nón',
    difficulty: 'understanding',
    skillTags: ['hinh-non', 'dien-tich-xung-quanh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // We need r, h, then l = sqrt(r^2 + h^2). Sxq = pi * r * l.
      // Triples: r=3, h=4 -> l=5. r=6, h=8 -> l=10. r=5, h=12 -> l=13.
      const pair = rng.element([
        { r: 3, h: 4, l: 5, sxq: 15 },
        { r: 6, h: 8, l: 10, sxq: 60 },
        { r: 5, h: 12, l: 13, sxq: 65 }
      ]);

      const correctText = `$${pair.sxq}\\pi\\text{ cm}^2$`;
      const distractors = [
        `$${pair.r * pair.h}\\pi\\text{ cm}^2$`,
        `$${pair.r * pair.l}\\text{ cm}^2$`,
        `$${pair.sxq * 2}\\pi\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l31-tpl-03',
        seed,
        prompt: `Cho hình nón có bán kính đáy $r = ${pair.r}\\text{ cm}$ và chiều cao $h = ${pair.h}\\text{ cm}$. Tính diện tích xung quanh của hình nón đó (để kết quả chứa hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v2-c10-l31-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c10-solids',
          title: 'Hình nón',
          alt: 'Hình nón có bán kính và chiều cao.',
          notToScale: true,
          data: {
            type: 'cone',
            r: `${pair.r} cm`,
            h: `${pair.h} cm`
          }
        },
        solution: {
          summary: `Tính đường sinh l bằng Pythagore rồi tính S_xq = pi * r * l.`,
          steps: [
            `Tính đường sinh $l$:`,
            `$$l = \\sqrt{r^2 + h^2} = \\sqrt{${pair.r}^2 + ${pair.h}^2} = ${pair.l}\\text{ cm}$$`,
            `Áp dụng công thức tính diện tích xung quanh hình nón:`,
            `$$S_{xq} = \\pi r l = \\pi \\times ${pair.r} \\times ${pair.l} = ${pair.sxq}\\pi\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l31-tpl-04',
    lessonId: 'g9-v2-c10-l31',
    title: 'Tính thể tích của hình nón',
    difficulty: 'understanding',
    skillTags: ['hinh-non', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const r = rng.element([3, 6, 9]);
      const h = rng.element([4, 5, 8]);
      const v = Math.round((r * r * h) / 3);

      const correctText = `$${v}\\pi\\text{ cm}^3$`;
      const distractors = [
        `$${r * r * h}\\pi\\text{ cm}^3$`,
        `$${v * 3}\\pi\\text{ cm}^3$`,
        `$${v}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l31-tpl-04',
        seed,
        prompt: `Cho hình nón có bán kính đáy $r = ${r}\\text{ cm}$ và chiều cao $h = ${h}\\text{ cm}$. Tính thể tích của hình nón đó (kết quả để dạng hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức V = 1/3 * pi * r^2 * h.`,
          steps: [
            `Công thức thể tích hình nón: $V = \\frac{1}{3} \\pi r^2 h$.`,
            `Thay số:`,
            `$$V = \\frac{1}{3} \\pi \\cdot ${r}^2 \\cdot ${h} = \\frac{1}{3} \\pi \\cdot ${r * r} \\cdot ${h} = ${v}\\pi\\text{ cm}^3$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l31-tpl-05',
    lessonId: 'g9-v2-c10-l31',
    title: 'Toán thực tế: Dung tích lon nước ngọt hình trụ',
    difficulty: 'understanding',
    skillTags: ['hinh-tru', 'the-tich', 'toan-thuc-te'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // diameter d = 6cm -> r = 3cm, height h = 12cm. V = pi * r^2 * h = 3.14 * 9 * 12 = 339.12 cm3.
      // Let's use d = 6cm, h = 10cm -> V = 3.14 * 9 * 10 = 282.6 cm3.
      const d = rng.element([6, 8]);
      const h = rng.element([10, 12]);
      const r = d / 2;
      const v = Math.round(3.14 * r * r * h * 10) / 10;

      const correctText = `$${v.toFixed(1).replace('.0', '')}\\text{ cm}^3$`;
      const distractors = [
        `$${(3.14 * d * d * h).toFixed(1).replace('.0', '')}\\text{ cm}^3$`,
        `$${(v * 2).toFixed(1).replace('.0', '')}\\text{ cm}^3$`,
        `$150\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l31-tpl-05',
        seed,
        prompt: `Một lon nước ngọt hình trụ có đường kính đáy bằng $${d}\\text{ cm}$ và chiều cao bằng $${h}\\text{ cm}$. Tính thể tích lon nước ngọt đó (lấy $\\pi \\approx 3,14$, làm tròn đến 1 chữ số thập phân).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính bán kính đáy r = d / 2, sau đó dùng công thức V = pi * r^2 * h.`,
          steps: [
            `Bán kính đáy lon nước: $r = \\frac{d}{2} = \\frac{${d}}{2} = ${r}\\text{ cm}$.`,
            `Thể tích hình trụ: $V = \\pi r^2 h$.`,
            `Thay số: $V \\approx 3,14 \\times ${r}^2 \\times ${h} = 3,14 \\times ${r * r} \\times ${h} = ${v.toFixed(1).replace('.0', '')}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
