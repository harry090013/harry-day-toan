import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C10L39: ExerciseTemplate[] = [
  {
    id: 'g8-v2-c10-l39-tpl-01',
    lessonId: 'g8-v2-c10-l39',
    title: 'Xác định số mặt bên của hình chóp tứ giác đều',
    difficulty: 'basic',
    skillTags: ['hinh-chop-tu-giac-deu', 'ly-thuyet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = '4 mặt bên';
      const distractors = [
        '3 mặt bên',
        '5 mặt bên',
        '6 mặt bên'
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l39-tpl-01',
        seed,
        prompt: `Một hình chóp tứ giác đều có bao nhiêu mặt bên?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Hình chóp tứ giác đều có đáy là tứ giác (hình vuông) nên có 4 cạnh đáy tương ứng với 4 mặt bên.`,
          steps: [
            `Mặt đáy là hình vuông có 4 cạnh.`,
            `Từ mỗi cạnh đáy dựng một mặt bên là tam giác cân lên đỉnh chóp, do đó hình chóp có đúng 4 mặt bên.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l39-tpl-02',
    lessonId: 'g8-v2-c10-l39',
    title: 'Đặc điểm mặt đáy của hình chóp tứ giác đều',
    difficulty: 'basic',
    skillTags: ['hinh-chop-tu-giac-deu', 'ly-thuyet'],
    estimatedSeconds: 20,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Hình vuông';
      const distractors = [
        'Hình chữ nhật',
        'Hình bình hành',
        'Hình thoi'
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l39-tpl-02',
        seed,
        prompt: `Mặt đáy của một hình chóp tứ giác đều luôn là hình gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Theo định nghĩa hình chóp đều, đáy của hình chóp tứ giác đều là đa giác đều có 4 cạnh, tức là hình vuông.`,
          steps: [
            `Đáy phải là tứ giác đều.`,
            `Tứ giác đều duy nhất trong hình học phẳng chính là hình vuông.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l39-tpl-03',
    lessonId: 'g8-v2-c10-l39',
    title: 'Tính diện tích xung quanh của hình chóp tứ giác đều',
    difficulty: 'understanding',
    skillTags: ['hinh-chop-tu-giac-deu', 'dien-tich-xung-quanh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.element([5, 6, 8, 10]);
      const d = rng.element([6, 8, 12]);
      // S_xq = p * d. p = 4a / 2 = 2a. S_xq = 2a * d
      const sxq = 2 * a * d;

      const correctText = `$${sxq}\\text{ cm}^2$`;
      const distractors = [
        `$${a * d}\\text{ cm}^2$`,
        `$${sxq * 2}\\text{ cm}^2$`,
        `$${sxq + a * a}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l39-tpl-03',
        seed,
        prompt: `Cho hình chóp tứ giác đều có độ dài cạnh đáy bằng $${a}\\text{ cm}$ và trung đoạn bằng $${d}\\text{ cm}$. Tính diện tích xung quanh của hình chóp đó.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v2-c10-l39-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c10-pyramids',
          title: 'Hình chóp tứ giác đều',
          alt: 'Hình chóp tứ giác đều có cạnh đáy và trung đoạn.',
          notToScale: true,
          data: {
            type: 'quad-pyramid',
            a: `${a} cm`,
            d: `${d} cm`
          }
        },
        solution: {
          summary: `Sử dụng công thức S_xq = p * d, với p là nửa chu vi đáy của hình vuông.`,
          steps: [
            `Tính nửa chu vi đáy $p$ của hình vuông:`,
            `$$p = \\frac{4 \\times a}{2} = 2a = 2 \\times ${a} = ${2 * a}\\text{ cm}$$`,
            `Diện tích xung quanh là:`,
            `$$S_{xq} = p \\cdot d = ${2 * a} \\times ${d} = ${sxq}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l39-tpl-04',
    lessonId: 'g8-v2-c10-l39',
    title: 'Tính thể tích hình chóp tứ giác đều',
    difficulty: 'understanding',
    skillTags: ['hinh-chop-tu-giac-deu', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.element([3, 6, 9]);
      const h = rng.element([4, 5, 8]);
      // S_đáy = a^2. V = 1/3 * a^2 * h
      const v = Math.round((a * a * h) / 3);

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${a * a * h}\\text{ cm}^3$`,
        `$${v * 3}\\text{ cm}^3$`,
        `$${Math.round(a * 4 * h / 3)}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l39-tpl-04',
        seed,
        prompt: `Một hình chóp tứ giác đều có độ dài cạnh đáy bằng $${a}\\text{ cm}$ và chiều cao bằng $${h}\\text{ cm}$. Tính thể tích của hình chóp đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính diện tích đáy hình vuông, sau đó áp dụng công thức thể tích hình chóp V = 1/3 * S_đáy * h.`,
          steps: [
            `Diện tích mặt đáy hình vuông là:`,
            `$$S_{đáy} = a^2 = ${a}^2 = ${a * a}\\text{ cm}^2$$`,
            `Thể tích hình chóp là:`,
            `$$V = \\frac{1}{3} S_{đáy} \\cdot h = \\frac{1}{3} \\times ${a * a} \\times ${h} = ${v}\\text{ cm}^3$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l39-tpl-05',
    lessonId: 'g8-v2-c10-l39',
    title: 'Toán thực tế: Thể tích kim tự tháp',
    difficulty: 'understanding',
    skillTags: ['hinh-chop-tu-giac-deu', 'the-tich', 'toan-thuc-te'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      // Let side = 30m, height = 20m -> V = 1/3 * 900 * 20 = 6000 m3
      const side = rng.element([30, 60, 150]);
      const h = rng.element([20, 40, 100]);
      const v = Math.round((side * side * h) / 3);

      const correctText = `$${v}\\text{ m}^3$`;
      const distractors = [
        `$${side * side * h}\\text{ m}^3$`,
        `$${v * 3}\\text{ m}^3$`,
        `$${v - 500}\\text{ m}^3$`.replace('--', '-')
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l39-tpl-05',
        seed,
        prompt: `Một mô hình kim tự tháp có dạng hình chóp tứ giác đều với độ dài cạnh đáy là $${side}\\text{ m}$ và chiều cao là $${h}\\text{ m}$. Tính thể tích không gian bên trong mô hình kim tự tháp đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Áp dụng công thức thể tích hình chóp V = 1/3 * S_đáy * h.`,
          steps: [
            `Diện tích đáy kim tự tháp:`,
            `$$S_{đáy} = ${side}^2 = ${side * side}\\text{ m}^2$$`,
            `Thể tích không gian bên trong kim tự tháp:`,
            `$$V = \\frac{1}{3} S_{đáy} \\cdot h = \\frac{1}{3} \\times ${side * side} \\times ${h} = ${v}\\text{ m}^3$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
