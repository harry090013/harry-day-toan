import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG8C10L38: ExerciseTemplate[] = [
  {
    id: 'g8-v2-c10-l38-tpl-01',
    lessonId: 'g8-v2-c10-l38',
    title: 'Xác định các yếu tố của hình chóp tam giác đều',
    difficulty: 'basic',
    skillTags: ['hinh-chop-tam-giac-deu', 'ly-thuyet'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Tam giác đều';
      const distractors = [
        'Tam giác cân',
        'Tam giác vuông',
        'Hình vuông'
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l38-tpl-01',
        seed,
        prompt: `Mặt đáy của hình chóp tam giác đều là hình gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Theo định nghĩa, hình chóp tam giác đều có đáy là một tam giác đều.`,
          steps: [
            `Hình chóp tam giác đều có mặt đáy là tam giác đều.`,
            `Các mặt bên của nó là các tam giác cân bằng nhau.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l38-tpl-02',
    lessonId: 'g8-v2-c10-l38',
    title: 'Nhận biết hình dạng mặt bên của hình chóp tam giác đều',
    difficulty: 'basic',
    skillTags: ['hinh-chop-tam-giac-deu', 'ly-thuyet'],
    estimatedSeconds: 25,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Các tam giác cân bằng nhau';
      const distractors = [
        'Các tam giác đều',
        'Các tam giác vuông',
        'Các hình chữ nhật'
      ];

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l38-tpl-02',
        seed,
        prompt: `Các mặt bên của một hình chóp tam giác đều là những hình gì?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Các mặt bên của hình chóp tam giác đều luôn là các tam giác cân bằng nhau chung đỉnh.`,
          steps: [
            `Mặt đáy là tam giác đều.`,
            `Các cạnh bên bằng nhau, do đó các mặt bên là các tam giác cân chung đỉnh chóp.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l38-tpl-03',
    lessonId: 'g8-v2-c10-l38',
    title: 'Tính diện tích xung quanh của hình chóp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['hinh-chop-tam-giac-deu', 'dien-tich-xung-quanh', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.element([4, 6, 8, 10]);
      const d = rng.element([5, 8, 10]);
      // S_xq = p * d. p = 3a / 2. S_xq = 3a/2 * d = 1.5 * a * d
      const sxq = 1.5 * a * d;

      const correctText = `$${sxq}\\text{ cm}^2$`;
      const distractors = [
        `$${a * d}\\text{ cm}^2$`,
        `$${sxq * 2}\\text{ cm}^2$`,
        `$${(1.5 * a * d + 10).toFixed(0)}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l38-tpl-03',
        seed,
        prompt: `Cho hình chóp tam giác đều có độ dài cạnh đáy bằng $${a}\\text{ cm}$ và trung đoạn bằng $${d}\\text{ cm}$. Tính diện tích xung quanh của hình chóp đó.`,
        correctText,
        distractorTexts: distractors,
        diagram: {
          id: `g8-v2-c10-l38-tpl-03-diagram-${seed}`,
          placement: 'exercise_question',
          variant: 'g8-c10-pyramids',
          title: 'Hình chóp tam giác đều',
          alt: 'Hình chóp tam giác đều có trung đoạn.',
          notToScale: true,
          data: {
            type: 'tri-pyramid',
            a: `${a} cm`
          }
        },
        solution: {
          summary: `Sử dụng công thức S_xq = p * d với p là nửa chu vi đáy.`,
          steps: [
            `Tính nửa chu vi đáy $p$ của tam giác đều:`,
            `$$p = \\frac{\\text{Chu vi đáy}}{2} = \\frac{3 \\times ${a}}{2} = ${1.5 * a}\\text{ cm}$$`,
            `Diện tích xung quanh hình chóp tam giác đều là:`,
            `$$S_{xq} = p \\cdot d = ${1.5 * a} \\times ${d} = ${sxq}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l38-tpl-04',
    lessonId: 'g8-v2-c10-l38',
    title: 'Tính thể tích hình chóp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['hinh-chop-tam-giac-deu', 'the-tich', 'tinh-toan'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const sDay = rng.element([15, 18, 24, 30]);
      const h = rng.element([6, 8, 9]);
      const v = (sDay * h) / 3;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${sDay * h}\\text{ cm}^3$`,
        `$${v * 2}\\text{ cm}^3$`,
        `$${v + 5}\\text{ cm}^3$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l38-tpl-04',
        seed,
        prompt: `Một hình chóp tam giác đều có diện tích đáy bằng $${sDay}\\text{ cm}^2$ và chiều cao bằng $${h}\\text{ cm}$. Tính thể tích của hình chóp đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Sử dụng công thức thể tích hình chóp: V = 1/3 * S_đáy * h.`,
          steps: [
            `Công thức tính thể tích: $V = \\frac{1}{3} S_{đáy} \\cdot h$.`,
            `Thay số: $V = \\frac{1}{3} \\times ${sDay} \\times ${h} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g8-v2-c10-l38-tpl-05',
    lessonId: 'g8-v2-c10-l38',
    title: 'Toán thực tế: Hộp quà hình chóp tam giác đều',
    difficulty: 'understanding',
    skillTags: ['hinh-chop-tam-giac-deu', 'dien-tich-toan-phan', 'toan-thuc-te'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      // Let S_xq = 60, S_đáy = 10 -> S_tp = 70
      const sxq = rng.element([40, 60, 80]);
      const sDay = rng.element([12, 16, 20]);
      const stp = sxq + sDay;

      const correctText = `$${stp}\\text{ cm}^2$`;
      const distractors = [
        `$${sxq}\\text{ cm}^2$`,
        `$${sxq - sDay}\\text{ cm}^2$`,
        `$${stp + 10}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g8-v2-c10-l38-tpl-05',
        seed,
        prompt: `Bạn Nam làm một hộp quà hình chóp tam giác đều bằng bìa cứng. Biết diện tích xung quanh của hộp quà là $${sxq}\\text{ cm}^2$ và diện tích đáy là $${sDay}\\text{ cm}^2$. Tính tổng diện tích bìa cần dùng để làm hộp quà đó (bỏ qua mép dán).`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tổng diện tích bìa chính là diện tích toàn phần của hình chóp tam giác đều (diện tích xung quanh cộng diện tích đáy).`,
          steps: [
            `Tổng diện tích bìa cần dùng bằng diện tích toàn phần:`,
            `$$S_{tp} = S_{xq} + S_{đáy}$$`,
            `Thay số: $S_{tp} = ${sxq} + ${sDay} = ${stp}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
