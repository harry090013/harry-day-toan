import { ExerciseTemplate } from '@/lib/exercise-engine/types';
import { buildMultipleChoice } from '@/lib/exercise-engine/generateQuestion';
import { createRng } from '@/lib/exercise-engine/random';

export const templatesG7C10Review: ExerciseTemplate[] = [
  {
    id: 'g7-c10-review-tpl-01',
    lessonId: 'g7-v2-c10-review',
    title: 'Tính diện tích toàn phần của lăng trụ đứng tam giác',
    difficulty: 'understanding',
    skillTags: ['dien-tich-toan-phan', 'lang-tru-dung', 'tinh-toan'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const perimeter = rng.int(10, 20);
      const sBase = rng.int(4, 10);
      const h = rng.int(5, 12);
      const sxq = perimeter * h;
      const stp = sxq + 2 * sBase;

      const correctText = `$${stp}\\text{ cm}^2$`;
      const distractors = [
        `$${sxq + sBase}\\text{ cm}^2$`,
        `$${sxq}\\text{ cm}^2$`,
        `$${stp * 2}\\text{ cm}^2$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-review-tpl-01',
        seed,
        prompt: `Một hình lăng trụ đứng tam giác có chu vi đáy là $${perimeter}\\text{ cm}$, diện tích một mặt đáy là $${sBase}\\text{ cm}^2$ và chiều cao là $${h}\\text{ cm}$. Tính diện tích toàn phần của hình lăng trụ đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích toàn phần lăng trụ đứng bằng diện tích xung quanh cộng hai lần diện tích đáy.`,
          steps: [
            `Bước 1: Tính diện tích xung quanh: $S_{xq} = C \\times h = ${perimeter} \\times ${h} = ${sxq}\\text{ cm}^2$.`,
            `Bước 2: Tính diện tích toàn phần: $S_{tp} = S_{xq} + 2 \\times S_{\\text{đáy}} = ${sxq} + 2 \\times ${sBase} = ${stp}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-review-tpl-02',
    lessonId: 'g7-v2-c10-review',
    title: 'Thể tích của hộp giấy hình hộp chữ nhật',
    difficulty: 'basic',
    skillTags: ['the-tich', 'thuc-te', 'tinh-toan'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const a = rng.int(3, 8);
      const b = a + rng.int(2, 4);
      const h = rng.int(5, 10);
      const v = a * b * h;

      const correctText = `$${v}\\text{ cm}^3$`;
      const distractors = [
        `$${a * b}\\text{ cm}^3$`,
        `$${(a * b * h) / 3}\\text{ cm}^3$`,
        `$${2 * (a * b + b * h + a * h)}\\text{ cm}^3$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-review-tpl-02',
        seed,
        prompt: `Một hộp giấy quà tặng dạng hình hộp chữ nhật (thực chất là lăng trụ đứng tứ giác) có kích thước đáy là $${a}\\text{ cm} \\times ${b}\\text{ cm}$ và chiều cao $${h}\\text{ cm}$. Tính thể tích hộp giấy đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thể tích hình hộp chữ nhật bằng tích ba kích thước: dài nhân rộng nhân cao.`,
          steps: [
            `Kích thước đáy là $${a}\\text{ cm} \\times ${b}\\text{ cm}$, chiều cao $h = ${h}\\text{ cm}$.`,
            `Thể tích hình hộp là:`,
            `$$V = a \\times b \\times h = ${a} \\times ${b} \\times ${h} = ${v}\\text{ cm}^3$$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-review-tpl-03',
    lessonId: 'g7-v2-c10-review',
    title: 'Tính số lượng vật liệu cần sơn lăng trụ đứng',
    difficulty: 'understanding',
    skillTags: ['dien-tich-xung-quanh', 'thuc-te', 'tinh-toan'],
    estimatedSeconds: 45,
    generator(seed) {
      const rng = createRng(seed);
      const perimeter = rng.int(4, 8);
      const h = rng.int(3, 6);
      const costPerM2 = 20000;
      const area = perimeter * h;
      const totalCost = area * costPerM2;

      const correctText = `$${totalCost.toLocaleString()}\\text{ đồng}$`;
      const distractors = [
        `$${(totalCost - 20000).toLocaleString()}\\text{ đồng}$`,
        `$${(totalCost + 40000).toLocaleString()}\\text{ đồng}$`,
        `$${(area * 10000).toLocaleString()}\\text{ đồng}$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-review-tpl-03',
        seed,
        prompt: `Người ta muốn sơn xung quanh các mặt bên của một cột bê tông hình lăng trụ đứng có chu vi đáy $${perimeter}\\text{ m}$ và chiều cao $${h}\\text{ m}$. Biết chi phí sơn mỗi mét vuông là $20,000\\text{ đồng}$. Tính tổng chi phí để sơn xong cột.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Tính diện tích xung quanh cần sơn rồi nhân với đơn giá sơn trên một mét vuông.`,
          steps: [
            `Bước 1: Diện tích xung quanh cột bê tông cần sơn: $S_{xq} = C \\times h = ${perimeter} \\times ${h} = ${area}\\text{ m}^2$.`,
            `Bước 2: Tính tổng chi phí: $\\text{Chi phí} = ${area} \\times 20,000 = ${totalCost.toLocaleString()}\\text{ đồng}$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-review-tpl-04',
    lessonId: 'g7-v2-c10-review',
    title: 'Quan hệ diện tích mặt đáy và thể tích',
    difficulty: 'understanding',
    skillTags: ['the-tich', 'lang-tru-dung', 'ti-so'],
    estimatedSeconds: 35,
    generator(seed) {
      const rng = createRng(seed);
      const correctText = 'Thể tích tăng lên gấp đôi.';
      const distractors = [
        'Thể tích giữ nguyên không đổi.',
        'Thể tích tăng lên gấp bốn lần.',
        'Thể tích giảm đi một nửa.'
      ];

      return buildMultipleChoice({
        templateId: 'g7-c10-review-tpl-04',
        seed,
        prompt: `Nếu giữ nguyên chiều cao của một hình lăng trụ đứng và tăng diện tích mặt đáy của nó lên gấp đôi thì thể tích của hình lăng trụ thay đổi như thế nào?`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Thể tích tỉ lệ thuận với diện tích đáy khi chiều cao không đổi.`,
          steps: [
            `Công thức thể tích: $V_1 = S \\times h$.`,
            `Nếu diện tích đáy tăng gấp đôi: $S_2 = 2S$.`,
            `Thể tích mới: $V_2 = S_2 \\times h = 2S \\times h = 2V_1$.`,
            `Vậy thể tích tăng lên gấp đôi.`
          ],
          finalAnswer: correctText
        }
      });
    }
  },
  {
    id: 'g7-c10-review-tpl-05',
    lessonId: 'g7-v2-c10-review',
    title: 'Tính diện tích đáy từ thể tích và chiều cao',
    difficulty: 'understanding',
    skillTags: ['the-tich', 'tinh-toan', 'nguoc'],
    estimatedSeconds: 30,
    generator(seed) {
      const rng = createRng(seed);
      const s = rng.int(5, 15);
      const h = rng.int(4, 9);
      const v = s * h;

      const correctText = `$${s}\\text{ cm}^2$`;
      const distractors = [
        `$${v}\\text{ cm}^2$`,
        `$${h}\\text{ cm}^2$`,
        `$${s * 2}\\text{ cm}^2$`
      ].filter(t => t !== correctText).slice(0, 3);

      return buildMultipleChoice({
        templateId: 'g7-c10-review-tpl-05',
        seed,
        prompt: `Một khối rubik lăng trụ đứng tam giác có thể tích là $${v}\\text{ cm}^3$ và chiều cao bằng $${h}\\text{ cm}$. Tính diện tích mặt đáy của khối rubik đó.`,
        correctText,
        distractorTexts: distractors,
        solution: {
          summary: `Diện tích đáy bằng thể tích chia cho chiều cao lăng trụ đứng.`,
          steps: [
            `Ta có công thức: $V = S_{\\text{đáy}} \\times h$.`,
            `Suy ra diện tích đáy là: $S_{\\text{đáy}} = \\frac{V}{h} = \\frac{${v}}{${h}} = ${s}\\text{ cm}^2$.`
          ],
          finalAnswer: correctText
        }
      });
    }
  }
];
