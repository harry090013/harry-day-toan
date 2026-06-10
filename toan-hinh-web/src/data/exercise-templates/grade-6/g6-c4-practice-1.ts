import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG6C4Practice1: ExerciseTemplate[] = [
  {
    id: 'g6-c4-practice-1-tpl-01',
    lessonId: 'g6-v1-c4-practice-1',
    title: 'Tính chu vi tam giác đều hoặc hình vuông hoặc lục giác đều',
    difficulty: 'basic',
    skillTags: ['chu-vi', 'hinh-deu'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const shapes = [
        { name: 'tam giác đều', sides: 3, unit: 'cm' },
        { name: 'hình vuông', sides: 4, unit: 'cm' },
        { name: 'lục giác đều', sides: 6, unit: 'cm' }
      ];
      const shape = rng.element(shapes);
      const a = rng.int(4, 15);
      const p = shape.sides * a;

      const correctText = `$${p}\\text{ ${shape.unit}}$`;
      const distractors = [
        `$${a * (shape.sides - 1)}\\text{ ${shape.unit}}$`,
        `$${a * (shape.sides + 1)}\\text{ ${shape.unit}}$`,
        `$${a * a}\\text{ ${shape.unit}}$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-practice-1-tpl-01',
        seed,
        prompt: `Tính chu vi của một ${shape.name} có độ dài cạnh bằng $${a}\\text{ ${shape.unit}}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chu vi của hình đều bằng số cạnh nhân độ dài một cạnh.`,
          steps: [
            `Một ${shape.name} có số cạnh là $${shape.sides}$ và độ dài mỗi cạnh là $a = ${a}\\text{ ${shape.unit}}$.`,
            `Chu vi của hình đó là:`,
            `$$P = ${shape.sides} \\times a = ${shape.sides} \\times ${a} = ${p}\\text{ ${shape.unit}}$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c4-practice-1-tpl-02',
    lessonId: 'g6-v1-c4-practice-1',
    title: 'Tính diện tích hình chữ nhật',
    difficulty: 'basic',
    skillTags: ['dien-tich', 'hinh-chu-nhat'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const w = rng.int(3, 10);
      const l = w + rng.int(2, 6);
      const area = w * l;

      const correctText = `$${area}\\text{ cm}^2$`;
      const distractors = [
        `$${2 * (w + l)}\\text{ cm}^2$`,
        `$${w * l + 5}\\text{ cm}^2$`,
        `$${(w * l) / 2}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-practice-1-tpl-02',
        seed,
        prompt: `Một mảnh giấy hình chữ nhật có chiều rộng $${w}\\text{ cm}$ và chiều dài $${l}\\text{ cm}$. Tính diện tích của mảnh giấy.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích hình chữ nhật bằng tích chiều dài và chiều rộng.`,
          steps: [
            `Chiều dài mảnh giấy là $${l}\\text{ cm}$, chiều rộng là $${w}\\text{ cm}$.`,
            `Diện tích là:`,
            `$$S = ${l} \\times ${w} = ${area}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c4-practice-1-tpl-03',
    lessonId: 'g6-v1-c4-practice-1',
    title: 'Tính diện tích hình thoi biết độ dài hai đường chéo',
    difficulty: 'basic',
    skillTags: ['dien-tich', 'hinh-thoi'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const d1 = rng.int(4, 12) * 2; // Even for nice division
      const d2 = rng.int(3, 10) * 2;
      const area = (d1 * d2) / 2;

      const correctText = `$${area}\\text{ cm}^2$`;
      const distractors = [
        `$${d1 * d2}\\text{ cm}^2$`,
        `$${d1 + d2}\\text{ cm}^2$`,
        `$${(d1 * d2) / 4}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-practice-1-tpl-03',
        seed,
        prompt: `Tính diện tích của một hình thoi biết độ dài hai đường chéo lần lượt là $${d1}\\text{ cm}$ và $${d2}\\text{ cm}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích hình thoi bằng nửa tích độ dài hai đường chéo.`,
          steps: [
            `Độ dài hai đường chéo là $d_1 = ${d1}\\text{ cm}$, $d_2 = ${d2}\\text{ cm}$.`,
            `Diện tích hình thoi là:`,
            `$$S = \\frac{1}{2} \\times d_1 \\times d_2 = \\frac{1}{2} \\times ${d1} \\times ${d2} = ${area}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c4-practice-1-tpl-04',
    lessonId: 'g6-v1-c4-practice-1',
    title: 'Tính diện tích hình bình hành',
    difficulty: 'basic',
    skillTags: ['dien-tich', 'hinh-binh-hanh'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(5, 15);
      const h = rng.int(4, 10);
      const area = a * h;

      const correctText = `$${area}\\text{ cm}^2$`;
      const distractors = [
        `$${2 * (a + h)}\\text{ cm}^2$`,
        `$${(a * h) / 2}\\text{ cm}^2$`,
        `$${a * h + 10}\\text{ cm}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-practice-1-tpl-04',
        seed,
        prompt: `Một hình bình hành có độ dài đáy là $${a}\\text{ cm}$ và chiều cao tương ứng là $${h}\\text{ cm}$. Tính diện tích hình bình hành đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích hình bình hành bằng độ dài đáy nhân với chiều cao tương ứng.`,
          steps: [
            `Độ dài đáy $a = ${a}\\text{ cm}$, chiều cao tương ứng $h = ${h}\\text{ cm}$.`,
            `Diện tích hình bình hành là:`,
            `$$S = a \\times h = ${a} \\times ${h} = ${area}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g6-c4-practice-1-tpl-05',
    lessonId: 'g6-v1-c4-practice-1',
    title: 'Bài toán diện tích ghép hình thực tế',
    difficulty: 'understanding',
    skillTags: ['dien-tich', 'ghep-hinh', 'ung-dung-thuc-te'],
    estimatedSeconds: 60,
    generator(seed) {
      const rng = createRng(seed);
      const rectW = rng.int(4, 8);
      const rectL = rectW + rng.int(3, 6);
      const trapBase2 = rectW + rng.element([2, 4]);
      const trapHeight = rng.int(3, 5);

      const s1 = rectL * rectW;
      const s2 = ((rectW + trapBase2) * trapHeight) / 2;
      const totalS = s1 + s2;

      const correctText = `$${totalS}\\text{ m}^2$`;
      const distractors = [
        `$${s1 + rectW * trapBase2}\\text{ m}^2$`,
        `$${s1 + s2 * 2}\\text{ m}^2$`,
        `$${s1 + trapHeight}\\text{ m}^2$`
      ].filter(t => t !== correctText);

      return buildMultipleChoice({
        templateId: 'g6-c4-practice-1-tpl-05',
        seed,
        prompt: `Một mảnh sân vườn gồm hình chữ nhật (chiều dài $${rectL}\\text{ m}$, chiều rộng $${rectW}\\text{ m}$) ghép với một hình thang cân có đáy nhỏ trùng với chiều rộng hình chữ nhật, đáy lớn là $${trapBase2}\\text{ m}$ và chiều cao của hình thang là $${trapHeight}\\text{ m}$. Tính tổng diện tích của mảnh sân vườn.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tổng diện tích bằng diện tích hình chữ nhật cộng diện tích hình thang cân.`,
          steps: [
            `Diện tích hình chữ nhật là: $S_1 = ${rectL} \\times ${rectW} = ${s1}\\text{ m}^2$.`,
            `Diện tích hình thang cân là: $S_2 = \\frac{(${rectW} + ${trapBase2}) \\times ${trapHeight}}{2} = ${s2}\\text{ m}^2$.`,
            `Tổng diện tích mảnh sân vườn là: $S = S_1 + S_2 = ${s1} + ${s2} = ${totalS}\\text{ m}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
