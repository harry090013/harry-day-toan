import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C10Practice1: ExerciseTemplate[] = [
  {
    id: 'g8-c10-practice-1-tpl-01',
    lessonId: 'g8-v2-c10-practice-1',
    title: 'Tính thể tích hình lăng trụ đứng',
    difficulty: 'basic',
    skillTags: ['lang-tru', 'the-tich'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const s = rng.int(6, 30); // Base area cm2
      const h = rng.int(3, 15); // Height cm
      const v = s * h;

      const correctText = `$V = ${v}\\text{ cm}^3$`;
      const distractors = [
        `$V = ${s + h}\\text{ cm}^3$`,
        `$V = ${2 * s * h}\\text{ cm}^3$`,
        `$V = ${v + 10}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c10-practice-1-tpl-01',
        seed,
        prompt: `Hình lăng trụ đứng có diện tích đáy $S = ${s}\\text{ cm}^2$ và chiều cao $h = ${h}\\text{ cm}$. Thể tích hình lăng trụ là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thể tích lăng trụ đứng: $V = S \\times h$.`,
          steps: [
            `Áp dụng công thức: $V = S \\times h$.`,
            `$V = ${s} \\times ${h} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c10-practice-1-tpl-02',
    lessonId: 'g8-v2-c10-practice-1',
    title: 'Tính thể tích hình hộp chữ nhật',
    difficulty: 'basic',
    skillTags: ['hinh-hop-chu-nhat', 'the-tich'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(2, 10);
      const b = rng.int(2, 10);
      const c = rng.int(2, 10);
      const v = a * b * c;

      const correctText = `$V = ${v}\\text{ cm}^3$`;
      const distractors = [
        `$V = ${a * b + b * c + c * a}\\text{ cm}^3$`,
        `$V = ${2 * (a * b + b * c + c * a)}\\text{ cm}^3$`,
        `$V = ${v + a}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c10-practice-1-tpl-02',
        seed,
        prompt: `Hình hộp chữ nhật có kích thước $${a}\\text{ cm} \\times ${b}\\text{ cm} \\times ${c}\\text{ cm}$. Thể tích hình hộp là bao nhiêu?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thể tích hình hộp chữ nhật: $V = a \\times b \\times c$.`,
          steps: [
            `$V = a \\times b \\times c = ${a} \\times ${b} \\times ${c} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c10-practice-1-tpl-03',
    lessonId: 'g8-v2-c10-practice-1',
    title: 'Tính diện tích toàn phần hình hộp chữ nhật',
    difficulty: 'understanding',
    skillTags: ['hinh-hop-chu-nhat', 'dien-tich-toan-phan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(2, 8);
      const b = rng.int(2, 8);
      const c = rng.int(2, 8);
      const s = 2 * (a * b + b * c + c * a);

      const correctText = `$S = ${s}\\text{ cm}^2$`;
      const distractors = [
        `$S = ${a * b * c}\\text{ cm}^3$`,
        `$S = ${a * b + b * c + c * a}\\text{ cm}^2$`,
        `$S = ${s + 4}\\text{ cm}^2$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c10-practice-1-tpl-03',
        seed,
        prompt: `Hình hộp chữ nhật có kích thước $${a}\\text{ cm} \\times ${b}\\text{ cm} \\times ${c}\\text{ cm}$. Tính diện tích toàn phần.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `$S_{tp} = 2(ab + bc + ca)$.`,
          steps: [
            `$S_{tp} = 2(ab + bc + ca)$.`,
            `$= 2(${a} \\times ${b} + ${b} \\times ${c} + ${c} \\times ${a})$.`,
            `$= 2(${a*b} + ${b*c} + ${c*a}) = 2 \\times ${a*b + b*c + c*a} = ${s}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c10-practice-1-tpl-04',
    lessonId: 'g8-v2-c10-practice-1',
    title: 'Tính thể tích hình chóp đều',
    difficulty: 'understanding',
    skillTags: ['hinh-chop-deu', 'the-tich'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(3, 10); // side of square base
      const h = rng.int(3, 12); // height
      const v = Math.round((a * a * h) / 3);

      const correctText = `$V = ${v}\\text{ cm}^3$`;
      const distractors = [
        `$V = ${a * a * h}\\text{ cm}^3$`,
        `$V = ${v + 3}\\text{ cm}^3$`,
        `$V = ${v - 3 > 0 ? v - 3 : v + 4}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      const vExact = (a * a * h) % 3 === 0 ? `${v}` : `\\frac{${a*a*h}}{3}`;

      return buildMultipleChoice({
        templateId: 'g8-c10-practice-1-tpl-04',
        seed,
        prompt: `Hình chóp tứ giác đều có cạnh đáy $a = ${a}$ cm và chiều cao $h = ${h}$ cm. Tính thể tích hình chóp.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thể tích hình chóp: $V = \\frac{1}{3} S_{đáy} \\times h$.`,
          steps: [
            `Diện tích đáy (hình vuông cạnh $${a}$): $S = ${a}^2 = ${a*a}\\text{ cm}^2$.`,
            `$V = \\frac{1}{3} \\times ${a*a} \\times ${h} = \\frac{${a*a*h}}{3} \\approx ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-c10-practice-1-tpl-05',
    lessonId: 'g8-v2-c10-practice-1',
    title: 'Tính chiều cao khi biết thể tích lăng trụ',
    difficulty: 'understanding',
    skillTags: ['lang-tru', 'the-tich', 'tinh-nguoc'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const s = rng.int(4, 20);
      const h = rng.int(3, 15);
      const v = s * h;

      const correctText = `$h = ${h}$ cm`;
      const distractors = [
        `$h = ${h + 1}$ cm`,
        `$h = ${h - 1 > 0 ? h - 1 : h + 2}$ cm`,
        `$h = ${s}$ cm`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g8-c10-practice-1-tpl-05',
        seed,
        prompt: `Hình lăng trụ đứng có diện tích đáy $S = ${s}\\text{ cm}^2$ và thể tích $V = ${v}\\text{ cm}^3$. Tính chiều cao $h$ của lăng trụ.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Từ $V = S \\times h$ suy ra $h = \\frac{V}{S}$.`,
          steps: [
            `$V = S \\times h \\Rightarrow h = \\frac{V}{S}$.`,
            `$h = \\frac{${v}}{${s}} = ${h}$ cm.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
