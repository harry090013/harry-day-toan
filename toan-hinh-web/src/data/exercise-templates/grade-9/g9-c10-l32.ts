import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C10L32: ExerciseTemplate[] = [
  {
    id: 'g9-v2-c10-l32-tpl-01',
    lessonId: 'g9-v2-c10-l32',
    title: 'Tính diện tích mặt cầu khi biết bán kính',
    difficulty: 'basic',
    skillTags: ['hinh-cau', 'dien-tich-mat-cau', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const r = rng.element([3, 4, 5, 6]);
      const s = 4 * r * r; // S = 4 * pi * R^2. Term of pi.

      const correctText = `$${s}\\pi\\text{ cm}^2$`;
      const distractors = [
        `$${r * r}\\pi\\text{ cm}^2$`,
        `$${2 * r * r}\\pi\\text{ cm}^2$`,
        `$${s}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l32-tpl-01',
        seed,
        prompt: `Cho hình cầu có bán kính $R = ${r}\\text{ cm}$. Tính diện tích mặt cầu đó (để kết quả dạng hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g9-v2-c10-l32-tpl-01-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g9-c10-solids',
          title: 'Hình cầu',
          alt: 'Hình cầu có bán kính R.',
          notToScale: true,
          data: {
            type: 'sphere',
            r: `${r} cm`
          }
        },
        solution: {
          summary: `Áp dụng công thức S = 4 * pi * R^2.`,
          steps: [
            `Công thức tính diện tích mặt cầu: $S = 4\\pi R^2$.`,
            `Thay số $R = ${r}$:`,
            `$$S = 4\\pi \\cdot ${r}^2 = 4\\pi \\cdot ${r * r} = ${s}\\pi\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l32-tpl-02',
    lessonId: 'g9-v2-c10-l32',
    title: 'Tính diện tích mặt cầu khi biết đường kính',
    difficulty: 'basic',
    skillTags: ['hinh-cau', 'dien-tich-mat-cau', 'duong-kinh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const d = rng.element([6, 8, 10, 12]);
      const s = d * d; // S = pi * d^2.

      const correctText = `$${s}\\pi\\text{ cm}^2$`;
      const distractors = [
        `$${4 * s}\\pi\\text{ cm}^2$`,
        `$${s / 4}\\pi\\text{ cm}^2$`,
        `$${s}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l32-tpl-02',
        seed,
        prompt: `Tính diện tích mặt cầu có đường kính bằng $${d}\\text{ cm}$ (kết quả để dạng hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Công thức diện tích mặt cầu theo đường kính d là S = pi * d^2.`,
          steps: [
            `Cách 1: Dùng trực tiếp công thức: $S = \\pi d^2 = \\pi \\cdot ${d}^2 = ${s}\\pi\\text{ cm}^2$.`,
            `Cách 2: Đổi sang bán kính $R = \\frac{d}{2} = ${d/2}\\text{ cm}$. Áp dụng $S = 4\\pi R^2 = 4\\pi \\cdot ${d/2}^2 = ${s}\\pi\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l32-tpl-03',
    lessonId: 'g9-v2-c10-l32',
    title: 'Tính thể tích hình cầu khi biết bán kính',
    difficulty: 'understanding',
    skillTags: ['hinh-cau', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // V = 4/3 * pi * R^3.
      // R = 3 -> V = 4/3 * 27 = 36*pi.
      // R = 6 -> V = 4/3 * 216 = 288*pi.
      const pair = rng.element([
        { r: 3, v: 36 },
        { r: 6, v: 288 }
      ]);

      const correctText = `$${pair.v}\\pi\\text{ cm}^3$`;
      const distractors = [
        `$${pair.r * pair.r * pair.r}\\pi\\text{ cm}^3$`,
        `$${pair.v * 3}\\pi\\text{ cm}^3$`,
        `$${pair.v}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l32-tpl-03',
        seed,
        prompt: `Cho hình cầu có bán kính $R = ${pair.r}\\text{ cm}$. Tính thể tích hình cầu đó (để kết quả chứa hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức V = 4/3 * pi * R^3.`,
          steps: [
            `Công thức thể tích hình cầu: $V = \\frac{4}{3} \\pi R^3$.`,
            `Thay số $R = ${pair.r}$:`,
            `$$V = \\frac{4}{3} \\pi \\cdot ${pair.r}^3 = \\frac{4}{3} \\pi \\cdot ${pair.r * pair.r * pair.r} = ${pair.v}\\pi\\text{ cm}^3$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l32-tpl-04',
    lessonId: 'g9-v2-c10-l32',
    title: 'Toán thực tế: Diện tích da bọc quả bóng đá',
    difficulty: 'understanding',
    skillTags: ['hinh-cau', 'dien-tich-mat-cau', 'toan-thuc-te'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // diameter d = 22cm -> r = 11. S = 4 * 3.14 * 121 = 1519.76. Let's use d = 20cm -> r = 10. S = 4 * 3.14 * 100 = 1256.
      const d = rng.element([20, 24]);
      const r = d / 2;
      const s = Math.round(4 * 3.14 * r * r);

      const correctText = `$${s}\\text{ cm}^2$`;
      const distractors = [
        `$${Math.round(3.14 * d * d * 4)}\\text{ cm}^2$`,
        `$${Math.round(4 / 3 * 3.14 * r * r * r)}\\text{ cm}^2$`,
        `$500\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l32-tpl-04',
        seed,
        prompt: `Một quả bóng đá hình cầu có đường kính bằng $${d}\\text{ cm}$. Tính diện tích da tối thiểu cần dùng để làm quả bóng đó (lấy $\\pi \\approx 3,14$, làm tròn đến hàng đơn vị).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tìm bán kính r = d / 2, sau đó tính diện tích mặt cầu S = 4 * pi * r^2.`,
          steps: [
            `Bán kính quả bóng là: $R = \\frac{d}{2} = \\frac{${d}}{2} = ${r}\\text{ cm}$.`,
            `Diện tích da cần dùng bằng diện tích mặt cầu: $S = 4\\pi R^2$.`,
            `Thay số: $S \\approx 4 \\times 3,14 \\times ${r}^2 = 4 \\times 3,14 \\times ${r * r} = ${s}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v2-c10-l32-tpl-05',
    lessonId: 'g9-v2-c10-l32',
    title: 'Toán thực tế: Thể tích quả địa cầu',
    difficulty: 'understanding',
    skillTags: ['hinh-cau', 'the-tich', 'toan-thuc-te'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // R = 15cm -> V = 4/3 * 3.14 * 3375 = 14130 cm3.
      // R = 20cm -> V = 4/3 * 3.14 * 8000 = 33493.3 cm3.
      const r = rng.element([15, 30]);
      const v = Math.round((4 / 3) * 3.14 * r * r * r);

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${Math.round(4 * 3.14 * r * r)}\\text{ cm}^3$`,
        `$${v * 3}\\text{ cm}^3$`,
        `$2000\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v2-c10-l32-tpl-05',
        seed,
        prompt: `Một quả địa cầu mô hình hình cầu có bán kính $R = ${r}\\text{ cm}$. Tính thể tích của quả địa cầu đó (lấy $\\pi \\approx 3,14$, làm tròn đến hàng đơn vị).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức V = 4/3 * pi * R^3.`,
          steps: [
            `Công thức thể tích hình cầu: $V = \\frac{4}{3} \\pi R^3$.`,
            `Thay số: $V \\approx \\frac{4}{3} \\times 3,14 \\times ${r}^3 = \\frac{4}{3} \\times 3,14 \\times ${r * r * r} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
