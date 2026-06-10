import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C10Practice2: ExerciseTemplate[] = [
  {
    id: 'g7-c10-practice-2-tpl-01',
    lessonId: 'g7-v2-c10-practice-2',
    title: 'Tính diện tích xung quanh của lăng trụ đứng',
    difficulty: 'basic',
    skillTags: ['dien-tich-xung-quanh', 'lang-tru-dung', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const perimeter = rng.int(10, 30);
      const h = rng.int(5, 15);
      const sxq = perimeter * h;

      const correctText = `$${sxq}\\text{ cm}^2$`;
      const distractors = [
        `$${perimeter + h}\\text{ cm}^2$`,
        `$${perimeter * h * 2}\\text{ cm}^2$`,
        `$${sxq / 2}\\text{ cm}^2$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-2-tpl-01',
        seed,
        prompt: `Một hình lăng trụ đứng có chu vi đáy bằng $${perimeter}\\text{ cm}$ và chiều cao bằng $${h}\\text{ cm}$. Tính diện tích xung quanh của hình lăng trụ đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích xung quanh hình lăng trụ đứng bằng chu vi đáy nhân với chiều cao.`,
          steps: [
            `Chu vi đáy $C = ${perimeter}\\text{ cm}$, chiều cao $h = ${h}\\text{ cm}$.`,
            `Diện tích xung quanh là:`,
            `$$S_{xq} = C \\times h = ${perimeter} \\times ${h} = ${sxq}\\text{ cm}^2$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-2-tpl-02',
    lessonId: 'g7-v2-c10-practice-2',
    title: 'Tính thể tích của hình lăng trụ đứng',
    difficulty: 'basic',
    skillTags: ['the-tich', 'lang-tru-dung', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const area = rng.int(10, 40);
      const h = rng.int(4, 12);
      const v = area * h;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${area * h * 2}\\text{ cm}^3$`,
        `$${area + h}\\text{ cm}^3$`,
        `$${(area * h) / 3}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-2-tpl-02',
        seed,
        prompt: `Tính thể tích của một hình lăng trụ đứng biết diện tích đáy là $${area}\\text{ cm}^2$ và chiều cao tương ứng là $${h}\\text{ cm}$.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thể tích của hình lăng trụ đứng bằng diện tích đáy nhân với chiều cao.`,
          steps: [
            `Diện tích đáy $S = ${area}\\text{ cm}^2$, chiều cao $h = ${h}\\text{ cm}$.`,
            `Thể tích hình lăng trụ đứng là:`,
            `$$V = S \\times h = ${area} \\times ${h} = ${v}\\text{ cm}^3$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-2-tpl-03',
    lessonId: 'g7-v2-c10-practice-2',
    title: 'Tính diện tích xung quanh lăng trụ tứ giác có đáy chữ nhật',
    difficulty: 'understanding',
    skillTags: ['dien-tich-xung-quanh', 'lang-tru-dung', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(3, 8);
      const b = a + rng.int(2, 5);
      const h = rng.int(5, 12);
      const p = 2 * (a + b);
      const sxq = p * h;

      const correctText = `$${sxq}\\text{ cm}^2$`;
      const distractors = [
        `$${a * b * h}\\text{ cm}^2$`,
        `$${(a + b) * h}\\text{ cm}^2$`,
        `$${sxq * 2}\\text{ cm}^2$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-2-tpl-03',
        seed,
        prompt: `Một hình lăng trụ đứng tứ giác có đáy là hình chữ nhật có kích thước $${a}\\text{ cm} \\times ${b}\\text{ cm}$ và chiều cao $h = ${h}\\text{ cm}$. Tính diện tích xung quanh của hình lăng trụ đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tìm chu vi đáy hình chữ nhật rồi nhân với chiều cao để tính diện tích xung quanh.`,
          steps: [
            `Bước 1: Tính chu vi đáy hình chữ nhật: $C = 2 \\times (${a} + ${b}) = ${p}\\text{ cm}$.`,
            `Bước 2: Tính diện tích xung quanh: $S_{xq} = C \\times h = ${p} \\times ${h} = ${sxq}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-2-tpl-04',
    lessonId: 'g7-v2-c10-practice-2',
    title: 'Tính thể tích lăng trụ đứng tam giác vuông',
    difficulty: 'understanding',
    skillTags: ['the-tich', 'lang-tru-dung', 'tinh-toan'],
    estimatedSeconds: 40,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(3, 6) * 2; // Keep even
      const b = rng.int(4, 8);
      const h = rng.int(6, 12);
      const s = (a * b) / 2;
      const v = s * h;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${a * b * h}\\text{ cm}^3$`,
        `$${v * 2}\\text{ cm}^3$`,
        `$${a + b + h}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-2-tpl-04',
        seed,
        prompt: `Một hình lăng trụ đứng tam giác có đáy là tam giác vuông có hai cạnh góc vuông lần lượt là $${a}\\text{ cm}$ và $${b}\\text{ cm}$, chiều cao $h = ${h}\\text{ cm}$. Tính thể tích lăng trụ.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính diện tích tam giác vuông đáy trước, sau đó nhân với chiều cao để ra thể tích.`,
          steps: [
            `Bước 1: Tính diện tích đáy tam giác vuông: $S_{\\text{đáy}} = \\frac{1}{2} \\times a \\times b = \\frac{1}{2} \\times ${a} \\times ${b} = ${s}\\text{ cm}^2$.`,
            `Bước 2: Tính thể tích hình lăng trụ đứng: $V = S_{\\text{đáy}} \\times h = ${s} \\times ${h} = ${v}\\text{ cm}^3$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-practice-2-tpl-05',
    lessonId: 'g7-v2-c10-practice-2',
    title: 'Tính chiều cao lăng trụ khi biết thể tích và đáy',
    difficulty: 'understanding',
    skillTags: ['the-tich', 'lang-tru-dung', 'tinh-toan', 'nguoc'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const s = rng.int(10, 30);
      const h = rng.int(4, 10);
      const v = s * h;

      const correctText = `$${h}\\text{ cm}$`;
      const distractors = [
        `$${s}\\text{ cm}$`,
        `$${v}\\text{ cm}$`,
        `$${2 * h}\\text{ cm}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-practice-2-tpl-05',
        seed,
        prompt: `Một hình lăng trụ đứng có thể tích bằng $${v}\\text{ cm}^3$ và diện tích mặt đáy tương ứng bằng $${s}\\text{ cm}^2$. Tính chiều cao của hình lăng trụ đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Chiều cao lăng trụ đứng bằng thể tích chia cho diện tích đáy.`,
          steps: [
            `Ta có công thức thể tích lăng trụ: $V = S \\times h$.`,
            `Từ đó, ta có: $h = \\frac{V}{S} = \\frac{${v}}{${s}} = ${h}\\text{ cm}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
