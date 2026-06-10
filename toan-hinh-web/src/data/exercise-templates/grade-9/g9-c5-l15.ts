import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG9C5L15: ExerciseTemplate[] = [
  {
    id: 'g9-v1-c5-l15-tpl-01',
    lessonId: 'g9-v1-c5-l15',
    title: 'Tính độ dài cung tròn',
    difficulty: 'basic',
    skillTags: ['do-dai-cung', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // l = pi * R * n / 180.
      // Let R = 6, n = 30 -> l = pi * 6 * 30 / 180 = pi.
      // Let R = 12, n = 60 -> l = pi * 12 * 60 / 180 = 4*pi.
      const pair = rng.element([
        { r: 6, n: 30, text: '\\pi' },
        { r: 12, n: 60, text: '4\\pi' },
        { r: 9, n: 40, text: '2\\pi' }
      ]);

      const correctText = `$${pair.text}\\text{ cm}$`;
      const distractors = [
        `$${pair.r}\\pi\\text{ cm}$`,
        `$${pair.n}\\pi\\text{ cm}$`,
        `$2\\pi\\text{ cm}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l15-tpl-01',
        seed,
        prompt: `Tính độ dài cung tròn có số đo $${pair.n}^\\circ$ của đường tròn có bán kính $R = ${pair.r}\\text{ cm}$ (để kết quả chứa hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức l = pi * R * n / 180.`,
          steps: [
            `Công thức tính độ dài cung tròn là: $l = \\frac{\\pi R n}{180}$.`,
            `Thay số $R = ${pair.r}$, $n = ${pair.n}$:`,
            `$$l = \\frac{\\pi \\times ${pair.r} \\times ${pair.n}}{180} = ${pair.text}\\text{ cm}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l15-tpl-02',
    lessonId: 'g9-v1-c5-l15',
    title: 'Tính số đo góc của cung tròn từ độ dài cung',
    difficulty: 'basic',
    skillTags: ['do-dai-cung', 'tinh-toan-goc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const pair = rng.element([
        { r: 6, l: '2\\pi', n: 60 },
        { r: 10, l: '5\\pi', n: 90 },
        { r: 12, l: '8\\pi', n: 120 }
      ]);

      const correctText = `$${pair.n}^\\circ$`;
      const distractors = [
        `$30^\\circ$`,
        `$45^\\circ$`,
        `$90^\\circ$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l15-tpl-02',
        seed,
        prompt: `Một cung tròn của đường tròn bán kính $R = ${pair.r}\\text{ cm}$ có độ dài là $${pair.l}\\text{ cm}$. Tính số đo độ của cung tròn đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức n = (l * 180) / (pi * R).`,
          steps: [
            `Ta có công thức: $l = \\frac{\\pi R n}{180} \\Rightarrow n = \\frac{l \\cdot 180}{\\pi R}$.`,
            `Thay các giá trị $l = ${pair.l}$ và $R = ${pair.r}$:`,
            `$$n = \\frac{${pair.l.replace('\\pi', '')}\\pi \\cdot 180}{\\pi \\cdot ${pair.r}} = \\frac{${pair.l.replace('\\pi', '')} \\times 180}{${pair.r}} = ${pair.n}$$`,
            `Vậy số đo của cung là $${pair.n}^\\circ$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l15-tpl-03',
    lessonId: 'g9-v1-c5-l15',
    title: 'Tính diện tích hình quạt tròn',
    difficulty: 'understanding',
    skillTags: ['hinh-quat-tron', 'dien-tich', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Sq = pi * R^2 * n / 360.
      // R = 6, n = 120 -> Sq = pi * 36 * 120 / 360 = 12*pi
      // R = 12, n = 90 -> Sq = pi * 144 * 90 / 360 = 36*pi
      const pair = rng.element([
        { r: 6, n: 120, text: '12\\pi' },
        { r: 12, n: 90, text: '36\\pi' },
        { r: 4, n: 45, text: '2\\pi' }
      ]);

      const correctText = `$${pair.text}\\text{ cm}^2$`;
      const distractors = [
        `$${pair.r}\\pi\\text{ cm}^2$`,
        `$${pair.r * 2}\\pi\\text{ cm}^2$`,
        `$8\\pi\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l15-tpl-03',
        seed,
        prompt: `Tính diện tích hình quạt tròn của đường tròn bán kính $R = ${pair.r}\\text{ cm}$, cung có số đo $${pair.n}^\\circ$ (kết quả để dạng hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức S_q = pi * R^2 * n / 360.`,
          steps: [
            `Công thức diện tích hình quạt tròn: $S_q = \\frac{\\pi R^2 n}{360}$.`,
            `Thay số vào công thức:`,
            `$$S_q = \\frac{\\pi \\times ${pair.r}^2 \\times ${pair.n}}{360} = \\frac{\\pi \\times ${pair.r * pair.r} \\times ${pair.n}}{360} = ${pair.text}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l15-tpl-04',
    lessonId: 'g9-v1-c5-l15',
    title: 'Tính diện tích hình vành khuyên',
    difficulty: 'understanding',
    skillTags: ['hinh-vanh-khuyen', 'dien-tich', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      // S = pi * (R^2 - r^2).
      // Let R = 5, r = 3 -> R^2-r^2 = 25-9 = 16.
      // R = 10, r = 6 -> R^2-r^2 = 100-36 = 64.
      const pair = rng.element([
        { rLarge: 5, rSmall: 3, val: 16 },
        { rLarge: 10, rSmall: 6, val: 64 },
        { rLarge: 6, rSmall: 4, val: 20 }
      ]);

      const correctText = `$${pair.val}\\pi\\text{ cm}^2$`;
      const distractors = [
        `$${pair.rLarge - pair.rSmall}\\pi\\text{ cm}^2$`,
        `$${pair.rLarge + pair.rSmall}\\pi\\text{ cm}^2$`,
        `$${pair.val}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l15-tpl-04',
        seed,
        prompt: `Tính diện tích hình vành khuyên giới hạn bởi hai đường tròn đồng tâm có bán kính lần lượt là $R = ${pair.rLarge}\\text{ cm}$ và $r = ${pair.rSmall}\\text{ cm}$ (kết quả để dạng hằng số $\\pi$).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích hình vành khuyên bằng diện tích hình tròn lớn trừ diện tích hình tròn nhỏ.`,
          steps: [
            `Công thức diện tích hình vành khuyên: $S_{vk} = \\pi (R^2 - r^2)$.`,
            `Thay số $R = ${pair.rLarge}\\text{ cm}$ và $r = ${pair.rSmall}\\text{ cm}$:`,
            `$$S_{vk} = \\pi (${pair.rLarge}^2 - ${pair.rSmall}^2) = \\pi (${pair.rLarge * pair.rLarge} - ${pair.rSmall * pair.rSmall}) = ${pair.val}\\pi\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g9-v1-c5-l15-tpl-05',
    lessonId: 'g9-v1-c5-l15',
    title: 'Tính nhanh diện tích quạt từ độ dài cung và bán kính',
    difficulty: 'understanding',
    skillTags: ['hinh-quat-tron', 'dien-tich', 'tinh-toan-nhanh'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      // Sq = l * R / 2
      // Let R = 8, l = 3*pi -> Sq = 24*pi/2 = 12*pi
      // Let R = 6, l = 5*pi -> Sq = 15*pi
      const pair = rng.element([
        { r: 8, l: '3\\pi', valText: '12\\pi', val: 12 },
        { r: 6, l: '5\\pi', valText: '15\\pi', val: 15 },
        { r: 10, l: '4\\pi', valText: '20\\pi', val: 20 }
      ]);

      const correctText = `$${pair.valText}\\text{ cm}^2$`;
      const distractors = [
        `$${pair.r * 2}\\pi\\text{ cm}^2$`,
        `$${pair.val * 2}\\pi\\text{ cm}^2$`,
        `$${pair.val}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g9-v1-c5-l15-tpl-05',
        seed,
        prompt: `Một hình quạt tròn của đường tròn có bán kính $R = ${pair.r}\\text{ cm}$ có độ dài cung tương ứng là $${pair.l}\\text{ cm}$. Tính diện tích hình quạt tròn này.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng công thức tính nhanh diện tích quạt: Sq = l * R / 2.`,
          steps: [
            `Ta có mối liên hệ giữa diện tích quạt $S_q$ và độ dài cung $l$:`,
            `$$S_q = \\frac{l \\cdot R}{2}$$`,
            `Thay các số liệu đã cho:`,
            `$$S_q = \\frac{${pair.l} \\times ${pair.r}}{2} = ${pair.valText}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
